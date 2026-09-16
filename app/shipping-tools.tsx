"use client";
import { useMemo, useState } from "react";
import { Input } from "./form-controls";
import { CARRIERS, RELIABILITY, teuMillions } from "./shipping-carriers";
import { outlook, formatDate, todayIso, AVERAGE_DELAY_DAYS, type Benchmark } from "../lib/schedule-reliability";

/**
 * Only the carriers Sea-Intelligence named in the July 2026 report are offered.
 * Inventing a figure for the other seven to complete the list would be exactly
 * the fabrication the project rules prohibit — so the tool brackets the range
 * instead, which is more honest and arguably more useful.
 */
const BENCHMARKS: Benchmark[] = [
  { id: "global", label: `All carriers worldwide — ${RELIABILITY.globalPct}%`, reliabilityPct: RELIABILITY.globalPct, note: "The industry-wide figure. Use this when you do not know which line is carrying the shipment, which is the usual case." },
  { id: "best", label: `${RELIABILITY.best.name} — ${RELIABILITY.best.pct}% (most reliable)`, reliabilityPct: RELIABILITY.best.pct, note: "The best-performing carrier of the top thirteen that month. Treat it as the optimistic end of the range." },
  { id: "second", label: `${RELIABILITY.secondBest.name} — ${RELIABILITY.secondBest.pct}%`, reliabilityPct: RELIABILITY.secondBest.pct, note: "Second of the top thirteen that month. Both leaders are Gemini Cooperation members." },
  { id: "worst", label: `${RELIABILITY.worst.name} — ${RELIABILITY.worst.pct}% (least reliable)`, reliabilityPct: RELIABILITY.worst.pct, note: "The weakest performer of the top thirteen that month. Treat it as the pessimistic end of the range." },
];

export function ArrivalWindowPlanner() {
  const [quoted, setQuoted] = useState(todayIso());
  const [benchmarkId, setBenchmarkId] = useState("global");
  const benchmark = BENCHMARKS.find(b => b.id === benchmarkId) ?? BENCHMARKS[0];
  const result = useMemo(() => outlook(quoted, benchmark.reliabilityPct), [quoted, benchmark]);

  return (
    <figure className="moving-graphic" aria-label="Arrival window planner">
      <div className="graphic-title">Apply the published reliability figures to your own date</div>
      <div className="graphic-canvas">
        <div className="weight-inputs">
          <label>
            <span>Quoted vessel arrival date</span>
            <Input type="date" value={quoted} onChange={e => setQuoted(e.target.value)} />
          </label>
          <label>
            <span>Reliability benchmark</span>
            <select value={benchmarkId} onChange={e => setBenchmarkId(e.target.value)}>
              {BENCHMARKS.map(b => <option key={b.id} value={b.id}>{b.label}</option>)}
            </select>
          </label>
        </div>
        <div className="weight-result" aria-live="polite">
          {result ? (
            <>
              <div className="weight-comparison">
                <div>
                  <span>ARRIVED IN WINDOW</span>
                  <strong>{result.inWindowPct}%</strong>
                </div>
                <span className="weight-operator" aria-hidden="true">vs</span>
                <div>
                  <span>ARRIVED LATE</span>
                  <strong>{result.latePct}%</strong>
                </div>
              </div>
              <p className="weight-equation">
                {formatDate(result.quoted)} + {result.bufferDays} days = {formatDate(result.ifLate)}
              </p>
              <div className="weight-answer">
                <span>If this shipment falls in the {result.latePct}% that ran late, the {RELIABILITY.month} average lateness of {AVERAGE_DELAY_DAYS} days would put vessel arrival near</span>
                <strong>{formatDate(result.ifLate)}</strong>
                <span>{benchmark.note}</span>
              </div>
            </>
          ) : (
            <p>Enter a valid arrival date to apply the benchmark.</p>
          )}
        </div>
      </div>
      <figcaption>
        Changing the benchmark moves the probability but not the date, and that is deliberate rather than a
        fault: {RELIABILITY.source} publishes reliability per carrier, but the {AVERAGE_DELAY_DAYS}-day average
        lateness is an industry-wide figure. We have no per-carrier lateness to apply, so we do not invent one.{" "}
        A base rate, not a prediction. It applies {RELIABILITY.source}&rsquo;s published {RELIABILITY.month} figures
        — {RELIABILITY.globalPct}% of arrivals worldwide inside the advertised window, and an average {AVERAGE_DELAY_DAYS} days
        late for those that missed it — to a date you already hold. It knows nothing about your vessel, route,
        port pair or shipment, and reliability is republished monthly.
        <strong> This is vessel arrival at the destination port, not delivery to your door.</strong> Destination
        handling, release and the delivery appointment all sit after it — see{" "}
        <a href="/guides/international-moving-times/">international moving times</a>. Not a quotation, a
        commitment or a service level.
      </figcaption>
      <noscript>
        <p>
          In {RELIABILITY.month}, {RELIABILITY.globalPct}% of container-ship arrivals worldwide fell inside the
          advertised window, and vessels that arrived late averaged {AVERAGE_DELAY_DAYS} days behind schedule. On a
          quoted arrival of 10 November, a late arrival at that average would land near 16 November. Enable
          JavaScript to apply the figures to your own date.
        </p>
      </noscript>
    </figure>
  );
}

/** Brand → parent group, built from the consolidation rules in shipping-carriers. */
const BRAND_INDEX = CARRIERS.flatMap(c =>
  [c.name, ...(c.brands ?? [])].map(brand => ({ brand, carrier: c })),
).sort((a, b) => a.brand.localeCompare(b.brand));

export function CarrierBrandLookup() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return BRAND_INDEX.filter(e => e.brand.toLowerCase().includes(q)).slice(0, 6);
  }, [query]);

  return (
    <figure className="moving-graphic" aria-label="Carrier brand lookup">
      <div className="graphic-title">Find the group behind a name on your paperwork</div>
      <div className="graphic-canvas">
        <div className="weight-inputs">
          <label>
            <span>Brand on the bill of lading or booking</span>
            <Input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Try APL, Hamburg Süd, OOCL, Sealand"
              autoComplete="off"
            />
          </label>
        </div>
        <div className="weight-result" aria-live="polite">
          {!query.trim() ? (
            <p>Type a carrier or brand name. This index covers the ten largest groups and the brands consolidated into them.</p>
          ) : matches.length === 0 ? (
            <p>
              No match in the top ten groups. Plenty of capable lines operate outside them — around{" "}
              {(100 - 84.1).toFixed(1)}% of world capacity sits with carriers below the top ten — so this is not a
              warning sign. Ask whoever booked the space which group operates the service.
            </p>
          ) : (
            <ul className="brand-matches">
              {matches.map(({ brand, carrier }) => (
                <li key={brand}>
                  <strong>{brand}</strong>
                  {brand === carrier.name ? (
                    <span> is ranked {carrier.rank} by operated capacity ({teuMillions(carrier.teu)}m TEU), {carrier.alliance === "Independent" ? "operating independently" : `in the ${carrier.alliance}`}.</span>
                  ) : (
                    <span> is part of <strong>{carrier.name}</strong> — ranked {carrier.rank} ({teuMillions(carrier.teu)}m TEU), {carrier.alliance === "Independent" ? "operating independently" : `in the ${carrier.alliance}`}.</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <figcaption>
        Built from Alphaliner&rsquo;s published consolidation rules for {CARRIERS.length} groups, as reported
        for 4 January 2026. It answers which group operates a brand. It is not a verification that a booking
        exists, a statement about who holds your contract, or an endorsement — and alliance sharing means the
        ship carrying a container is frequently operated by a different member of the same alliance.
      </figcaption>
      <noscript>
        <p>
          Brands consolidate into parent groups: APL, ANL and CNC are CMA CGM; Hamburg Süd, Aliança and Sealand
          are Maersk; OOCL is COSCO; NileDutch and DAL are Hapag-Lloyd; Gold Star Line is ZIM. Enable JavaScript
          to search the full index.
        </p>
      </noscript>
    </figure>
  );
}
