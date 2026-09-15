// Loading and wiring for Google's Place Autocomplete element. Kept out of
// address-autocomplete.tsx so this code, and the Maps JavaScript API it pulls
// in, only reach the browser once someone actually focuses an address field.

type PlacePrediction = { toPlace(): { fetchFields(request: { fields: string[] }): Promise<void>; formattedAddress?: string | null } };
type SelectEvent = Event & { placePrediction?: PlacePrediction };
type AutocompleteElement = HTMLElement & { value?: string; focus(): void };
type PlacesLibrary = { PlaceAutocompleteElement: new (options: Record<string, unknown>) => AutocompleteElement };
type MapsGlobal = { maps: { importLibrary(name: "places"): Promise<PlacesLibrary> } };

declare global {
  interface Window { google?: MapsGlobal; __imcPlacesReady?: () => void }
}

// One shared load per page, whichever address field asks for it first.
let placesLibrary: Promise<PlacesLibrary> | null = null;

function loadPlaces(key: string): Promise<PlacesLibrary> {
  if (placesLibrary) return placesLibrary;
  placesLibrary = new Promise<void>((resolve, reject) => {
    if (window.google?.maps) return resolve();
    window.__imcPlacesReady = resolve;
    const parameters = new URLSearchParams({
      key,
      // The quarterly channel trades the weekly channel's churn for a version
      // that moves four times a year, and never goes stale the way a pinned
      // version number eventually does.
      v: "quarterly",
      libraries: "places",
      loading: "async",
      callback: "__imcPlacesReady",
    });
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?${parameters}`;
    script.async = true;
    script.onerror = () => reject(new Error("Google Maps JavaScript API failed to load"));
    document.head.append(script);
  }).then(() => {
    if (!window.google?.maps) throw new Error("Google Maps JavaScript API loaded without google.maps");
    return window.google.maps.importLibrary("places");
  });
  return placesLibrary;
}

/** State of the plain input at the moment of the swap. */
export type PendingInput = { value: string; focused: boolean };

/**
 * Warm the Maps JavaScript API without touching the DOM. Hovering an address
 * field is a good signal the person is about to use it, but swapping the input
 * before they have focused it would drop the focus they are about to give it.
 */
export function preloadPlaces(apiKey: string): void {
  loadPlaces(apiKey).catch(() => { /* the field stays a plain input */ });
}

export type UpgradeRequest = {
  apiKey: string;
  host: HTMLElement;
  /**
   * Read at the last possible moment rather than passed in: loading the Maps
   * API takes a network round trip, and anything typed while it was in flight
   * would otherwise be discarded when the plain input is replaced.
   */
  readPending: () => PendingInput;
  /** Accessible name: a shadow-DOM input cannot use the visible <label for=…>. */
  label: string;
  description?: string;
  placeholder?: string;
  name?: string;
  /** Applied to the element so the existing <label for=…> resolves to it. */
  id?: string;
  onChange: (value: string) => void;
  /** Called if the key is rejected or the quota is spent, to restore the plain input. */
  onUnavailable: () => void;
};

/**
 * Returns a callback that restores focus and caret, or null if the field was
 * not focused. The caller must invoke it only once the host is visible: a
 * hidden element cannot take focus.
 */
export async function upgradeAddressField(request: UpgradeRequest): Promise<(() => void) | null> {
  const { PlaceAutocompleteElement } = await loadPlaces(request.apiKey);
  const element = new PlaceAutocompleteElement({
    // Street addresses, cities and regions; no businesses.
    includedPrimaryTypes: ["geocode"],
    ...(request.description ? { description: request.description } : {}),
    ...(request.placeholder ? { placeholder: request.placeholder } : {}),
    ...(request.name ? { name: request.name } : {}),
  });
  element.className = "imc-address-autocomplete";
  // The element keeps its input in a CLOSED shadow root, so nothing outside can
  // reach it: no querySelector, no setting attributes on it, no caret control.
  // Both of these were verified against the live API to name the field
  // correctly; without them it announces itself as "Search For a Place".
  if (request.id) element.id = request.id;
  element.setAttribute("aria-label", request.label);

  // Free text counts: someone may type "Lisbon, Portugal" and never open the
  // prediction list.
  element.addEventListener("input", () => request.onChange(element.value ?? ""));
  element.addEventListener("gmp-select", async (event: Event) => {
    const prediction = (event as SelectEvent).placePrediction;
    if (!prediction) return;
    const place = prediction.toPlace();
    await place.fetchFields({ fields: ["formattedAddress"] });
    const address = place.formattedAddress ?? element.value ?? "";
    element.value = address;
    request.onChange(address);
  });
  // A rejected key or an exhausted quota must not strand the field.
  element.addEventListener("gmp-error", () => {
    element.remove();
    request.onUnavailable();
  });

  const pending = request.readPending();
  request.host.replaceChildren(element);
  // Carry over whatever was typed while the API was loading, and tell React
  // about it so its state matches what is now on screen.
  element.value = pending.value;
  request.onChange(pending.value);

  // `description` covers screen readers regardless; name the real input
  // directly when the shadow root is open, which is also what makes
  // ::part(input) styling work.
  const inner = element.shadowRoot?.querySelector("input");
  inner?.setAttribute("aria-label", request.label);
  // The visible <label for=…> cannot reach an input inside a shadow tree, so
  // clicking the label text would otherwise do nothing. Restore that.
  const label = request.host.closest("label");
  label?.addEventListener("click", event => {
    if (!(event.target instanceof Node) || !element.contains(event.target)) element.focus();
  });

  if (!pending.focused) return null;
  // Focusing the host reaches the inner input and leaves the caret at the end
  // of the text just restored, which is where the typing left off. The exact
  // offset cannot be restored through a closed shadow root.
  return () => element.focus();
}
