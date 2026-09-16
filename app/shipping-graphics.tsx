import type { ReactNode } from "react";
import { CARRIERS, CAPACITY, RELIABILITY, ALLIANCES, type Alliance } from "./shipping-carriers";

/**
 * Server-rendered figures for /blog/largest-shipping-companies/.
 *
 * Every number drawn here is derived from ./shipping-carriers at render time,
 * so a figure cannot drift from the tables beside it. Nothing is estimated to
 * make a shape work: where a quantity is unknown (how much of a group's volume
 * moves under a subsidiary brand, reliability for carriers Sea-Intelligence did
 * not name) there is no mark for it rather than an invented one.
 *
 * Colour. The four-slot categorical set below was validated rather than picked:
 * it clears the lightness band, the chroma floor, colour-vision separation on
 * adjacent pairs and 3:1 contrast against the white figure surface. The teal is
 * a shade deeper than the brand accent (#167d8d) because the brand value reads
 * as grey at chroma 0.089 and fails the floor. Colour never carries identity
 * alone: every segment is also lettered or directly labelled, and the residual
 * "everything else" marks are hatched rather than given a hue of their own.
 */
const SLOT = ["#0083a0", "#eb6834", "#4a3aa7", "#008300"] as const;
const INK = "#142d3b";
const MUTED = "#526572";
const GRID = "#e3ecec";
const AXIS = "#a9bec4";

const fmt = (n: number) => n.toLocaleString("en-GB");
const ordinal = (n: number) => `${n}${["th", "st", "nd", "rd"][n % 100 > 10 && n % 100 < 14 ? 0 : Math.min(n % 10, 4) % 4] ?? "th"}`;
const millions = (n: number) => `${(n / 1_000_000).toFixed(3)}m`;

/** A horizontal bar whose data end is rounded and whose baseline end is square. */
function barPath(x: number, y: number, w: number, h: number, r = 4) {
  const rr = Math.max(0, Math.min(r, w));
  return `M${x} ${y}H${x + w - rr}a${rr} ${rr} 0 0 1 ${rr} ${rr}V${y + h - rr}a${rr} ${rr} 0 0 1 ${-rr} ${rr}H${x}Z`;
}

function Graphic({ title, caption, children }: { title: string; caption: string; children: ReactNode }) {
  return (
    <figure className="moving-graphic" aria-label={title}>
      <div className="graphic-title">{title}</div>
      <div className="graphic-canvas" role="region" aria-label={`${title} diagram`} tabIndex={0}>{children}</div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

/* ------------------------------------------------------------------ *
 * 1. Operated capacity, and the gap the ranking hides
 * ------------------------------------------------------------------ */

const REST_OF_FLEET = CAPACITY.worldFleetTeu - CAPACITY.derivedTopTenTeu;
const GAP_1_2 = CARRIERS[0].teu - CARRIERS[1].teu;

export function CapacityBars() {
  const rows: { label: string; teu: number; residual?: boolean }[] = [
    ...CARRIERS.map(c => ({ label: `${c.rank}. ${c.name}`, teu: c.teu })),
    { label: "All other operators", teu: REST_OF_FLEET, residual: true },
  ];
  const max = Math.ceil(Math.max(...rows.map(r => r.teu)) / 2_000_000) * 2_000_000;
  const X0 = 246, PLOT = 470, PITCH = 40, TOP = 100;
  const x = (v: number) => X0 + (v / max) * PLOT;
  const centre = (i: number) => TOP + i * PITCH + 20;
  const bottom = TOP + rows.length * PITCH + 5;
  const ticks = Array.from({ length: max / 2_000_000 + 1 }, (_, i) => i * 2_000_000);
  const hapagIndex = CARRIERS.findIndex(c => c.name === "Hapag-Lloyd");

  return (
    <Graphic
      title="Operated capacity, and the gap the ranking hides"
      caption={`Bars share a zero baseline and show operated TEU capacity as reported by ${CAPACITY.source} for ${CAPACITY.asOfLabel}. The hatched bar is the residual: world fleet (${millions(CAPACITY.worldFleetTeu)} TEU) less the ten rows above it, so it covers every operator outside the top ten rather than any single company.`}
    >
      <svg viewBox={`0 0 880 ${bottom + 48}`} role="img" aria-label={`Horizontal bar chart of operated container capacity. ${rows.map(r => `${r.label}, ${fmt(r.teu)} TEU`).join("; ")}. The gap between first and second place is ${fmt(GAP_1_2)} TEU, wider than the entire fleet of Hapag-Lloyd in fifth place at ${fmt(CARRIERS[hapagIndex].teu)} TEU.`}>
        <defs>
          <pattern id="cap-hatch" width="8" height="8" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#ffffff" />
            <line x1="0" y1="0" x2="0" y2="8" stroke={MUTED} strokeWidth="3" />
          </pattern>
        </defs>

        <text x="0" y="20" fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>CARRIER GROUP</text>
        <text x={X0} y="20" fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>OPERATED CAPACITY, TEU</text>

        {ticks.map(t => (
          <g key={t}>
            <line x1={x(t)} y1="52" x2={x(t)} y2={bottom} stroke={GRID} strokeWidth="1" />
            <text x={x(t)} y="44" fontSize="13" fill={MUTED} textAnchor={t === 0 ? "start" : "middle"}>{t === 0 ? "0" : `${t / 1_000_000}m`}</text>
          </g>
        ))}
        <line x1={X0} y1="52" x2={X0} y2={bottom} stroke={AXIS} strokeWidth="1.5" />

        {/* The lesson: first-to-second is a longer distance than most whole fleets. */}
        <g>
          <line x1={x(CARRIERS[1].teu)} y1="80" x2={x(CARRIERS[0].teu)} y2="80" stroke={INK} strokeWidth="1.5" />
          <line x1={x(CARRIERS[1].teu)} y1="72" x2={x(CARRIERS[1].teu)} y2="88" stroke={INK} strokeWidth="1.5" />
          <line x1={x(CARRIERS[0].teu)} y1="72" x2={x(CARRIERS[0].teu)} y2="88" stroke={INK} strokeWidth="1.5" />
          <text x={(x(CARRIERS[1].teu) + x(CARRIERS[0].teu)) / 2} y="64" fontSize="14" fontWeight="700" textAnchor="middle" fill={INK}>{fmt(GAP_1_2)} TEU between 1st and 2nd</text>
        </g>

        {rows.map((r, i) => (
          <g key={r.label}>
            <text x="236" y={centre(i) + 5} fontSize="15" textAnchor="end" fill={r.residual ? MUTED : INK}>{r.label}</text>
            <path
              d={barPath(X0, centre(i) - 10, x(r.teu) - X0, 20)}
              fill={r.residual ? "url(#cap-hatch)" : SLOT[0]}
              stroke={r.residual ? MUTED : "none"}
              strokeWidth={r.residual ? 1.5 : 0}
            />
            <text x={x(r.teu) + 10} y={centre(i) + 5} fontSize="14" fill={r.residual ? MUTED : INK}>{fmt(r.teu)}</text>
          </g>
        ))}

        {/* Measured comparison drawn in the gutter above the fifth-place bar. */}
        <g>
          <line x1={X0} y1={centre(hapagIndex) + 20} x2={X0 + (x(CARRIERS[0].teu) - x(CARRIERS[1].teu))} y2={centre(hapagIndex) + 20} stroke={INK} strokeWidth="1.5" strokeDasharray="4 3" />
          <line x1={X0 + (x(CARRIERS[0].teu) - x(CARRIERS[1].teu))} y1={centre(hapagIndex) + 14} x2={X0 + (x(CARRIERS[0].teu) - x(CARRIERS[1].teu))} y2={centre(hapagIndex) + 26} stroke={INK} strokeWidth="1.5" />
          <text x={X0 + (x(CARRIERS[0].teu) - x(CARRIERS[1].teu)) + 10} y={centre(hapagIndex) + 25} fontSize="14" fontWeight="700" fill={INK}>the first-to-second gap &mdash; wider than this whole fleet</text>
        </g>

        <line x1={X0} y1={bottom} x2={x(max)} y2={bottom} stroke={AXIS} strokeWidth="1.5" />
        <text x="0" y={bottom + 30} fontSize="14" fill={MUTED}>World fleet {millions(CAPACITY.worldFleetTeu)} TEU across {fmt(CAPACITY.worldFleetShips)} ships. The ten rows sum to {fmt(CAPACITY.derivedTopTenTeu)} TEU.</text>
      </svg>
    </Graphic>
  );
}

/* ------------------------------------------------------------------ *
 * 2. What a reliability percentage looks like as ships
 * ------------------------------------------------------------------ */

const IN_WINDOW_UNITS = Math.round(RELIABILITY.globalPct);

export function ReliabilityUnitArray() {
  const SQ = 28, GAPU = 5, X0 = 24, Y0 = 62;
  const cells = Array.from({ length: 100 }, (_, i) => i);
  const LX = X0 + 10 * (SQ + GAPU) + 44;

  return (
    <Graphic
      title={`What ${RELIABILITY.globalPct}% schedule reliability looks like as ships`}
      caption={`Unit array: one square is one vessel arrival in a hundred, not one ship. Squares are rounded to whole units from ${RELIABILITY.globalPct}%, ${RELIABILITY.source}, ${RELIABILITY.month}. The array shows how often an arrival landed inside its advertised window, not how late the others were; the average lateness is stated separately because it is a different measurement.`}
    >
      <svg viewBox="0 0 880 420" role="img" aria-label={`A grid of one hundred squares. ${IN_WINDOW_UNITS} are filled to show the vessel arrivals that landed inside the advertised window in ${RELIABILITY.month}, and ${100 - IN_WINDOW_UNITS} are hatched to show those that did not. Arrivals that were late averaged ${RELIABILITY.averageDelayDays} days behind schedule.`}>
        <defs>
          <pattern id="late-hatch" width="8" height="8" patternTransform="rotate(135)" patternUnits="userSpaceOnUse">
            <rect width="8" height="8" fill="#ffffff" />
            <line x1="0" y1="0" x2="0" y2="8" stroke={SLOT[1]} strokeWidth="3.5" />
          </pattern>
        </defs>

        <text x={X0} y="26" fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>100 VESSEL ARRIVALS, {RELIABILITY.month.toUpperCase()}</text>

        {cells.map(i => {
          const inWindow = i < IN_WINDOW_UNITS;
          return (
            <rect
              key={i}
              x={X0 + (i % 10) * (SQ + GAPU)}
              y={Y0 + Math.floor(i / 10) * (SQ + GAPU)}
              width={SQ}
              height={SQ}
              rx="3"
              fill={inWindow ? SLOT[0] : "url(#late-hatch)"}
              stroke={inWindow ? "none" : SLOT[1]}
              strokeWidth={inWindow ? 0 : 1.5}
            />
          );
        })}

        <g>
          <rect x={LX} y="70" width="26" height="26" rx="3" fill={SLOT[0]} />
          <text x={LX + 38} y="82" fontSize="17" fontWeight="700" fill={INK}>{IN_WINDOW_UNITS} arrived inside the window</text>
          <text x={LX + 38} y="105" fontSize="15" fill={MUTED}>The advertised arrival held.</text>

          <rect x={LX} y="150" width="26" height="26" rx="3" fill="url(#late-hatch)" stroke={SLOT[1]} strokeWidth="1.5" />
          <text x={LX + 38} y="162" fontSize="17" fontWeight="700" fill={INK}>{100 - IN_WINDOW_UNITS} did not</text>
          <text x={LX + 38} y="185" fontSize="15" fill={MUTED}>Roughly two arrivals in every five.</text>

          <line x1={LX} y1="222" x2="856" y2="222" stroke={GRID} strokeWidth="1.5" />
          <text x={LX} y="254" fontSize="15" fill={INK}>Late arrivals ran <tspan fontWeight="700">{RELIABILITY.averageDelayDays} days</tspan> behind schedule</text>
          <text x={LX} y="278" fontSize="15" fill={INK}>on average, before any destination handling.</text>
          <text x={LX} y="316" fontSize="14" fill={MUTED}>Down {Math.abs(RELIABILITY.momChangePp)} points on the previous month</text>
          <text x={LX} y="338" fontSize="14" fill={MUTED}>and {Math.abs(RELIABILITY.yoyChangePp)} points on the same month a year earlier.</text>
        </g>
      </svg>
    </Graphic>
  );
}

/* ------------------------------------------------------------------ *
 * 3. The spread the global average hides
 * ------------------------------------------------------------------ */

const SPREAD_PP = Number((RELIABILITY.best.pct - RELIABILITY.worst.pct).toFixed(1));

export function ReliabilitySpread() {
  const rankOf = (name: string) => CARRIERS.find(c => c.name === name || c.name.startsWith(name))?.rank;
  const rows = [
    { name: RELIABILITY.best.name, pct: RELIABILITY.best.pct, note: rankOf(RELIABILITY.best.name) ? `${ordinal(rankOf(RELIABILITY.best.name)!)} largest carrier` : "not in the top ten by size", reference: false },
    { name: RELIABILITY.secondBest.name, pct: RELIABILITY.secondBest.pct, note: rankOf(RELIABILITY.secondBest.name) ? `${ordinal(rankOf(RELIABILITY.secondBest.name)!)} largest carrier` : "not in the top ten by size", reference: false },
    { name: "All carriers worldwide", pct: RELIABILITY.globalPct, note: "the figure the headlines quote", reference: true },
    { name: RELIABILITY.worst.name, pct: RELIABILITY.worst.pct, note: "outside the top ten by size", reference: false },
  ];
  const X0 = 20, PLOT = 520, TOP = 96, PITCH = 70;
  const x = (p: number) => X0 + (p / 100) * PLOT;
  const labelY = (i: number) => TOP + i * PITCH;
  const markY = (i: number) => TOP + i * PITCH + 26;
  const bottom = TOP + rows.length * PITCH - 14;

  return (
    <Graphic
      title="The spread the global average hides"
      caption={`Each row is one carrier's schedule reliability for ${RELIABILITY.month}, ${RELIABILITY.source}. Sea-Intelligence named these carriers in that release; the remaining top-ten carriers are absent from the chart because a figure was not published for them, not because they sit anywhere in particular. The dashed rule is the worldwide figure, drawn on the same scale.`}
    >
      <svg viewBox={`0 0 620 ${bottom + 78}`} role="img" aria-label={`Dot chart of schedule reliability on a nought to one hundred per cent scale. ${rows.map(r => `${r.name}, ${r.pct} per cent`).join("; ")}. The span between the most and least reliable carrier is ${SPREAD_PP} percentage points, and neither is the largest carrier.`}>
        <text x={X0} y="24" fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>ARRIVALS INSIDE THE ADVERTISED WINDOW</text>

        {[0, 25, 50, 75, 100].map(t => (
          <g key={t}>
            <line x1={x(t)} y1="64" x2={x(t)} y2={bottom} stroke={GRID} strokeWidth="1" />
            <text x={x(t)} y="54" fontSize="13" fill={MUTED} textAnchor={t === 0 ? "start" : t === 100 ? "end" : "middle"}>{t}%</text>
          </g>
        ))}

        <line x1={x(RELIABILITY.globalPct)} y1="64" x2={x(RELIABILITY.globalPct)} y2={bottom} stroke={MUTED} strokeWidth="1.5" strokeDasharray="5 4" />

        {rows.map((r, i) => (
          <g key={r.name}>
            <text x={X0} y={labelY(i)} fontSize="16" fontWeight={r.reference ? 400 : 700} fill={r.reference ? MUTED : INK}>
              {r.name}
              <tspan fontSize="13" fontWeight="400" fill={MUTED}>  {r.note}</tspan>
            </text>
            <line x1={X0} y1={markY(i)} x2={x(r.pct)} y2={markY(i)} stroke={r.reference ? MUTED : SLOT[0]} strokeWidth="2" strokeDasharray={r.reference ? "5 4" : undefined} />
            <circle cx={x(r.pct)} cy={markY(i)} r="9" fill={r.reference ? "#ffffff" : SLOT[0]} stroke={r.reference ? MUTED : "#ffffff"} strokeWidth="2" />
            <text x={x(r.pct) + 16} y={markY(i) + 6} fontSize="17" fontWeight="700" fill={r.reference ? MUTED : INK}>{r.pct}%</text>
          </g>
        ))}

        <line x1={X0} y1={bottom} x2={x(100)} y2={bottom} stroke={AXIS} strokeWidth="1.5" />

        {/* The span, measured on the same scale as the rows above it. */}
        <g>
          <line x1={x(RELIABILITY.worst.pct)} y1={bottom + 34} x2={x(RELIABILITY.best.pct)} y2={bottom + 34} stroke={INK} strokeWidth="1.5" />
          <line x1={x(RELIABILITY.worst.pct)} y1={bottom + 27} x2={x(RELIABILITY.worst.pct)} y2={bottom + 41} stroke={INK} strokeWidth="1.5" />
          <line x1={x(RELIABILITY.best.pct)} y1={bottom + 27} x2={x(RELIABILITY.best.pct)} y2={bottom + 41} stroke={INK} strokeWidth="1.5" />
          <text x={(x(RELIABILITY.worst.pct) + x(RELIABILITY.best.pct)) / 2} y={bottom + 21} fontSize="15" fontWeight="700" textAnchor="middle" fill={INK}>{SPREAD_PP} points</text>
          <text x={(x(RELIABILITY.worst.pct) + x(RELIABILITY.best.pct)) / 2} y={bottom + 62} fontSize="14" textAnchor="middle" fill={MUTED}>between best and worst, in one month</text>
        </g>
      </svg>
    </Graphic>
  );
}

/* ------------------------------------------------------------------ *
 * 4. Capacity by alliance, not by carrier
 * ------------------------------------------------------------------ */

const LETTERS = ["A", "B", "C", "D"] as const;

const BLOCS = ALLIANCES
  .map(a => {
    const members = CARRIERS.filter(c => c.alliance === (a.name as Alliance)).sort((m, n) => n.teu - m.teu);
    return { name: a.name, members, teu: members.reduce((sum, m) => sum + m.teu, 0) };
  })
  .sort((a, b) => b.teu - a.teu)
  .map((b, i) => ({ ...b, letter: LETTERS[i], colour: SLOT[i] }));

const PREMIER = BLOCS.find(b => b.name === "Premier Alliance");
const BIGGEST_CARRIER = CARRIERS[0];

export function AllianceAllocation() {
  const X0 = 30, PLOT = 800, GAPU = 2;
  const total = CAPACITY.derivedTopTenTeu;
  const w = (teu: number) => (teu / total) * PLOT;
  const share = (teu: number) => ((teu / total) * 100).toFixed(1);

  /** Cumulative offsets, computed without mutation so the render stays pure. */
  const offset = (list: { teu: number }[], i: number) => X0 + list.slice(0, i).reduce((sum, p) => sum + w(p.teu), 0);
  const stacked = BLOCS.map((b, i) => ({ ...b, x: offset(BLOCS, i), width: w(b.teu) - GAPU }));

  const BLOCK = 100, TOP = 204;
  const blockTop = (i: number) => TOP + i * BLOCK;
  const compareTop = blockTop(BLOCS.length - 1) + 134;
  const biggestBloc = BLOCS.find(b => b.members.some(m => m.name === BIGGEST_CARRIER.name))!;

  /** The two marks the alliance table cannot put side by side: one carrier against one bloc. */
  const comparison = PREMIER
    ? [
        { letter: biggestBloc.letter, colour: biggestBloc.colour, teu: BIGGEST_CARRIER.teu, label: `${BIGGEST_CARRIER.name} — one carrier`, value: `${millions(BIGGEST_CARRIER.teu)} TEU` },
        { letter: PREMIER.letter, colour: PREMIER.colour, teu: PREMIER.teu, label: `${PREMIER.name} — ${PREMIER.members.length} carriers`, value: `${millions(PREMIER.teu)} TEU` },
      ]
    : [];

  return (
    <Graphic
      title="The same capacity, grouped by alliance instead of by carrier"
      caption={`All bars share one scale: the full width is the ${millions(total)} TEU operated by the ten carriers above, so any segment can be compared against any other segment in the figure. Letters A to D repeat the colour so the grouping never depends on hue alone. Alliance membership is as constituted from February 2025; capacity is ${CAPACITY.source}, ${CAPACITY.asOfLabel}. Shared vessel operation is not shared ownership — the split shows who operates the ships, not who sold the slot.`}
    >
      <svg viewBox={`0 0 880 ${compareTop + 104}`} role="img" aria-label={`Stacked bar of ${fmt(total)} TEU split between four alliance blocs, then broken down by member carrier on the same scale. ${BLOCS.map(b => `${b.name}, ${fmt(b.teu)} TEU, ${share(b.teu)} per cent, comprising ${b.members.map(m => `${m.name} at ${fmt(m.teu)} TEU`).join(" and ")}`).join("; ")}. A final pair of bars compares ${BIGGEST_CARRIER.name} alone, at ${fmt(BIGGEST_CARRIER.teu)} TEU, against the whole Premier Alliance at ${PREMIER ? fmt(PREMIER.teu) : "—"} TEU.`}>
        <text x={X0} y="26" fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>TOP-TEN CAPACITY, {fmt(total)} TEU</text>

        {stacked.map(s => (
          <g key={s.name}>
            <rect x={s.x} y="46" width={s.width} height="56" fill={s.colour} />
            <text x={s.x + s.width / 2} y="82" fontSize="24" fontWeight="700" textAnchor="middle" fill="#ffffff">{s.letter}</text>
            <text x={s.x + s.width / 2} y="124" fontSize="15" fontWeight="700" textAnchor="middle" fill={INK}>{share(s.teu)}%</text>
          </g>
        ))}

        <text x={X0} y="176" fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>THE SAME FOUR BLOCS, BROKEN INTO MEMBER CARRIERS</text>

        {BLOCS.map((b, i) => (
            <g key={b.name}>
              <text x={X0} y={blockTop(i)} fontSize="16" fontWeight="700" fill={INK}>
                {b.letter} &middot; {b.name}
                <tspan fontWeight="400" fill={MUTED}> &mdash; {millions(b.teu)} TEU, {share(b.teu)}% of the ten</tspan>
              </text>
              {b.members.map((m, j) => (
                <rect key={m.name} x={offset(b.members, j)} y={blockTop(i) + 14} width={Math.max(2, w(m.teu) - GAPU)} height="26" fill={b.colour} />
              ))}
              <text x={X0} y={blockTop(i) + 62} fontSize="14" fill={MUTED}>
                {b.members.map(m => `${m.name} ${millions(m.teu)}`).join("  \u00b7  ")}
              </text>
            </g>
        ))}

        {comparison.length > 0 && (
          <g>
            <line x1={X0} y1={compareTop - 40} x2="850" y2={compareTop - 40} stroke={GRID} strokeWidth="1.5" />
            <text x={X0} y={compareTop - 14} fontSize="13" fontWeight="700" letterSpacing="1" fill={MUTED}>ONE CARRIER AGAINST ONE WHOLE BLOC, SAME SCALE</text>
            {comparison.map((c, i) => (
              <g key={c.label}>
                <rect x={X0} y={compareTop + i * 44} width={w(c.teu)} height="30" fill={c.colour} />
                <text x={X0 + 14} y={compareTop + i * 44 + 22} fontSize="17" fontWeight="700" fill="#ffffff">{c.letter}</text>
                <text x={X0 + w(c.teu) + 14} y={compareTop + i * 44 + 21} fontSize="16" fontWeight="700" fill={INK}>
                  {c.value}
                  <tspan fontWeight="400" fill={MUTED}> &mdash; {c.label}</tspan>
                </text>
              </g>
            ))}
          </g>
        )}
      </svg>
    </Graphic>
  );
}
