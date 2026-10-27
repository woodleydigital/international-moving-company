import { Graphic } from "./moving-graphics";

/**
 * Figures for the international-moving risk article.
 *
 * Both diagrams show a mechanism the prose cannot: where a container is when a
 * particular clock runs, and how one decision by one authority turns into
 * several invoices from several companies. Neither shows durations or amounts,
 * because those vary by port, carrier and contract and we have no source for a
 * representative figure. Each caption says so.
 */

const INK = "#142d3b";
const TEAL = "#167d8d";
const SLATE = "#526572";
const PAPER = "#f1f6f5";

/**
 * Break a string onto lines at word boundaries. SVG <text> does not wrap, and
 * slicing by character count cuts words in half ("term / inal space").
 */
function wrap(text: string, maxChars: number): string[] {
  const lines: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > maxChars && line) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Where the box is, which clock is running, and who sends the invoice. */
export function DemurrageDetentionDiagram() {
  // Four custody positions across one rail. Widths are sequence, not time.
  const zones = [
    { label: "On the vessel", detail: "In transit", x: 30, w: 186 },
    { label: "In the terminal", detail: "Discharged, not collected", x: 222, w: 240 },
    { label: "At your address", detail: "Collected, being unpacked", x: 468, w: 240 },
    { label: "Back at the depot", detail: "Empty container returned", x: 714, w: 216 },
  ];
  return <Graphic
    title="Demurrage and detention are two different clocks"
    caption="A position diagram: the bar shows where the container is, not how long it stays there. Free time, daily rates and the point at which each clock starts are set by the carrier's tariff or your contract, and differ by port and by trade — this figure deliberately shows none of them. The billing rules cited apply to United States trades."
  >
    <svg viewBox="0 0 960 402" role="img" aria-label="A container moves through four positions: on the vessel, in the terminal, at your address, and back at the depot. Demurrage runs while the container sits in the terminal after discharge. Detention runs from collection until the empty container is returned. Both are billed by the carrier, terminal operator or NVOCC, and neither includes freight charges.">
      <text x="30" y="34" className="svg-detail" fill={SLATE} fontWeight="700" letterSpacing="1.1">WHERE THE CONTAINER IS</text>

      {zones.map((z, i) => <g key={z.label}>
        <rect x={z.x} y="50" width={z.w - 6} height="62" fill={i === 1 || i === 2 ? INK : "#dfeaea"} />
        <text x={z.x + (z.w - 6) / 2} y="80" textAnchor="middle" fontSize="16" fontWeight="600" fill={i === 1 || i === 2 ? "#ffffff" : INK}>{z.label}</text>
        <text x={z.x + (z.w - 6) / 2} y="100" textAnchor="middle" className="svg-detail" fill={i === 1 || i === 2 ? "#bcd4d8" : SLATE}>{z.detail}</text>
      </g>)}

      {/* Gate-out is the single event that stops one clock and starts the other.
          The label sits above the rail: below it, the detention box covers it. */}
      <text x="462" y="34" textAnchor="middle" className="svg-detail" fill={TEAL} fontWeight="700" letterSpacing="1.1">GATE-OUT</text>
      <line x1="462" y1="42" x2="462" y2="212" stroke={TEAL} strokeWidth="2" strokeDasharray="5 4" />
      <text x="462" y="230" textAnchor="middle" className="svg-detail" fill={SLATE}>one clock stops, the other starts</text>

      {[
        { x: 222, w: 240, name: "DEMURRAGE", says: "The box is still in the terminal", pays: "You are occupying the terminal's ground" },
        { x: 468, w: 462, name: "DETENTION", says: "The box has left the terminal", pays: "You are holding the carrier's container" },
      ].map(c => <g key={c.name}>
        <path d={`M${c.x} 130 v12 h${c.w - 6} v-12`} fill="none" stroke={TEAL} strokeWidth="2" />
        <rect x={c.x} y="148" width={c.w - 6} height="58" fill={PAPER} stroke={TEAL} strokeWidth="1.5" />
        <text x={c.x + 16} y="170" fontSize="15" fontWeight="700" fill={TEAL} letterSpacing=".6">{c.name}</text>
        <text x={c.x + 16} y="190" className="svg-detail" fill={SLATE}>{c.says}</text>
      </g>)}

      <text x="30" y="266" className="svg-detail" fill={SLATE} fontWeight="700" letterSpacing="1.1">WHAT THE US RULES SAY ABOUT BOTH</text>
      {[
        ["One billing category", "46 CFR 541.3 treats both as charges for terminal space or containers — never freight"],
        ["Invoiced within 30 days", "46 CFR 541.7(a): later than that and the billed party is not required to pay"],
        ["Must be complete", "46 CFR 541.5: a missing required field removes the obligation to pay the charge"],
      ].map(([h, d], i) => <g key={h}>
        <rect x={30 + i * 302} y="282" width="288" height="90" fill="#ffffff" stroke="#d8e1e4" strokeWidth="1.5" />
        <text x={44 + i * 302} y="306" fontSize="15" fontWeight="600" fill={INK}>{h}</text>
        {wrap(d, 42).map((line, j) => (
          <text key={line} x={44 + i * 302} y={328 + j * 17} className="svg-detail" fill={SLATE}>{line}</text>
        ))}
      </g>)}
    </svg>
  </Graphic>;
}

/** One decision by one authority, several invoices from several companies. */
export function ExamCascadeDiagram() {
  const streams = [
    { who: "The haulier", what: "Cartage to the examination station", note: "and back afterwards" },
    { who: "The CES operator", what: "Handling, devanning, restuff", note: "billed to you directly" },
    { who: "Carrier or terminal", what: "Demurrage, still running", note: "the box is not yet collected" },
    { who: "Destination agent", what: "Storage in transit, if the slot is missed", note: "plus handling in and out" },
  ];
  return <Graphic
    title="One examination order, four separate invoices"
    caption="A responsibility diagram, not a price list: it shows who bills you and for what, not how much or for how long, because each of these is set by a different party's own schedule. The examination is ordered by CBP; no mover, agent or carrier chooses it or can decline it on your behalf. Box widths carry no meaning."
  >
    <svg viewBox="0 0 960 408" role="img" aria-label="A CBP decision to examine a container produces four separate invoices from four different parties: cartage from the haulier, handling from the examination station operator billed directly to you, demurrage that continues from the carrier or terminal, and storage in transit from the destination agent if the delivery slot is missed.">
      <rect x="258" y="26" width="444" height="66" fill={INK} rx="3" />
      <text x="480" y="54" textAnchor="middle" fontSize="17" fontWeight="600" fill="#ffffff">CBP selects the container for examination</text>
      <text x="480" y="76" textAnchor="middle" className="svg-detail" fill="#bcd4d8">Not your mover&rsquo;s decision, and not one they can decline for you</text>

      <path d="M480 92 v26" stroke={TEAL} strokeWidth="2" />
      <path d="M126 118 H834" stroke={TEAL} strokeWidth="2" />

      {streams.map((s, i) => {
        const x = 30 + i * 234;
        const cx = x + 102;
        return <g key={s.who}>
          <path d={`M${cx} 118 v28`} stroke={TEAL} strokeWidth="2" />
          <path d={`M${cx - 5} 146 l10 0 l-5 10 z`} fill={TEAL} />
          <rect x={x} y="162" width="204" height="118" fill="#ffffff" stroke="#d8e1e4" strokeWidth="1.5" />
          <rect x={x} y="162" width="204" height="4" fill={TEAL} />
          <text x={x + 16} y="192" fontSize="15" fontWeight="700" fill={TEAL}>{s.who}</text>
          {wrap(s.what, 23).map((line, j) => (
            <text key={line} x={x + 16} y={218 + j * 20} fontSize="15" fontWeight="600" fill={INK}>{line}</text>
          ))}
          {wrap(s.note, 26).map((line, j) => (
            <text key={line} x={x + 16} y={262 + j * 17} className="svg-detail" fill={SLATE}>{line}</text>
          ))}
        </g>;
      })}

      <rect x="30" y="300" width="900" height="84" fill={PAPER} stroke={TEAL} strokeWidth="1.5" />
      <text x="48" y="326" fontSize="15" fontWeight="600" fill={INK}>A station is private, but its fee schedule is not arbitrary.</text>
      {wrap("19 CFR 118.1 and 118.4(c): a CES is privately operated and bills users directly, from a schedule filed in its approved application. Under 118.5 a change needs 90 days' notice and the port director's approval. Ask for the schedule.", 118).map((line, j) => (
        <text key={line} x="48" y={350 + j * 18} className="svg-detail" fill={SLATE}>{line}</text>
      ))}
    </svg>
  </Graphic>;
}
