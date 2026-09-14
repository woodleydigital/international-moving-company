"use client";

import { useCallback, useEffect, useRef, useState, type ComponentProps } from "react";
import { Input } from "./form-controls";

// Inlined at build time by the static export, so it is public by definition.
// Google Places browser keys are secured with HTTP referrer restrictions in
// Google Cloud, not by keeping the key out of the bundle. Restrict the key to
// the production and preview hostnames before enabling it. Leave the variable
// unset and every address field stays a plain text input.
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

type AddressAutocompleteProps = Omit<ComponentProps<"input">, "onChange" | "value"> & {
  value: string;
  onChange: (value: string) => void;
  /** Accessible name, since a shadow-DOM input cannot use the visible <label for=…>. */
  label: string;
  /** Sentence read out after the label, describing the prediction behaviour. */
  description?: string;
};

/**
 * Origin/destination field. Server-renders the same plain input as the rest of
 * the form, then upgrades in place to Google's Place Autocomplete the first
 * time someone focuses it — so the Maps JavaScript API costs nothing to the
 * visitors who never open the quote form.
 *
 * Every failure path (no key configured, blocked script, rejected key, spent
 * quota) leaves the plain input working, because a typed "city, country" is a
 * valid answer for this form either way.
 */
export function AddressAutocomplete({ value, onChange, label, description, id, ...props }: AddressAutocompleteProps) {
  const [upgraded, setUpgraded] = useState(false);
  const host = useRef<HTMLDivElement>(null);
  const plain = useRef<HTMLInputElement>(null);
  const requested = useRef(false);
  const restoreFocus = useRef<(() => void) | null>(null);
  // The Places element is uncontrolled once mounted, so its callbacks read the
  // current props through a ref instead of re-running the upgrade.
  const latest = useRef({ value, onChange });
  useEffect(() => { latest.current = { value, onChange }; });

  const upgrade = useCallback(() => {
    if (!apiKey || requested.current) return;
    requested.current = true;
    import("./places-upgrade")
      .then(({ upgradeAddressField }) => {
        if (!host.current) return;
        return upgradeAddressField({
          apiKey,
          host: host.current,
          readPending: () => ({
            value: plain.current?.value ?? latest.current.value,
            caret: plain.current?.selectionStart ?? null,
            focused: plain.current !== null && document.activeElement === plain.current,
          }),
          label,
          description,
          placeholder: props.placeholder,
          name: props.name,
          onChange: next => latest.current.onChange(next),
          onUnavailable: () => setUpgraded(false),
        }).then(restore => {
          restoreFocus.current = restore;
          setUpgraded(true);
        });
      })
      .catch(() => {
        // Stay on the plain input; the form still accepts a typed location.
      });
  }, [label, description, props.placeholder, props.name]);

  // Focus only once the host has been revealed; a hidden element cannot take it.
  useEffect(() => {
    if (!upgraded) return;
    restoreFocus.current?.();
    restoreFocus.current = null;
  }, [upgraded]);

  return <>
    <div ref={host} hidden={!upgraded}/>
    {!upgraded && <Input
      ref={plain}
      id={id}
      value={value}
      onChange={event => onChange(event.target.value)}
      onFocus={upgrade}
      onPointerEnter={upgrade}
      {...props}
    />}
  </>;
}
