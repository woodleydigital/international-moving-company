/**
 * Container-carrier reference data for /blog/international-shipping-companies/.
 *
 * Every figure here is dated and attributed. Two rules govern this file:
 *
 *   1. Nothing is estimated, rounded for effect or carried over from memory.
 *      If a number cannot be tied to a named source and a date, it does not
 *      belong here.
 *   2. Capacity rankings move continuously. Alphaliner recomputes its table as
 *      ships are delivered, chartered and redelivered, so anything published
 *      from this file must show the as-of date rather than implying a live
 *      figure. The review trigger is in REVIEW below.
 *
 * Why the ranking differs between sources: Alphaliner consolidates subsidiary
 * brands into their parent group. A shipment moving under an APL or Hamburg Süd
 * bill of lading counts towards CMA CGM and Maersk respectively. Sources that
 * do not consolidate produce a different order. CONSOLIDATION records the rule
 * as Alphaliner publishes it, because it is the single most common reason a
 * reader finds two "top 10" lists that disagree.
 */

export interface Carrier {
  rank: number
  name: string
  /** Operated TEU capacity, consolidated to group level */
  teu: number
  /** Year-on-year change in operated TEU, as reported */
  yoyTeu: number
  country: string
  /** Alliance membership from February 2025 */
  alliance: Alliance
  /** Subsidiary brands consolidated into this group by Alphaliner */
  brands?: string[]
}

export type Alliance = 'Gemini Cooperation' | 'Ocean Alliance' | 'Premier Alliance' | 'Independent'

/**
 * Alphaliner operated-capacity ranking, as reported for 4 January 2026.
 * Cross-checked against two independent write-ups of the same Alphaliner
 * release, which agree on the top three and on the top-ten total.
 */
export const CARRIERS: Carrier[] = [
  { rank: 1, name: 'MSC', teu: 7_136_000, yoyTeu: 831_000, country: 'Switzerland', alliance: 'Independent', brands: ['WEC Lines', 'Log-In Logística'] },
  { rank: 2, name: 'Maersk', teu: 4_612_000, yoyTeu: 187_000, country: 'Denmark', alliance: 'Gemini Cooperation', brands: ['Maersk A/S', 'Hamburg Süd', 'Aliança', 'Sealand Asia', 'Sealand Americas', 'Sealand Europe & Med'] },
  { rank: 3, name: 'CMA CGM Group', teu: 4_140_000, yoyTeu: 308_000, country: 'France', alliance: 'Ocean Alliance', brands: ['CMA CGM', 'APL', 'ANL', 'CNC', 'CoMaNav', 'Containerships', 'MacAndrews', 'Mercosul Line', 'SoFrana'] },
  { rank: 4, name: 'COSCO Shipping Lines', teu: 3_586_000, yoyTeu: 245_000, country: 'China', alliance: 'Ocean Alliance', brands: ['COSCO Shipping Lines', 'OOCL', 'Shanghai Pan Asia Shipping', 'Diamond Line'] },
  { rank: 5, name: 'Hapag-Lloyd', teu: 2_390_000, yoyTeu: 106_000, country: 'Germany', alliance: 'Gemini Cooperation', brands: ['NileDutch', 'DAL', 'former UASC fleet'] },
  { rank: 6, name: 'Ocean Network Express (ONE)', teu: 2_078_000, yoyTeu: 106_000, country: 'Singapore / Japan', alliance: 'Premier Alliance' },
  { rank: 7, name: 'Evergreen Marine', teu: 1_958_000, yoyTeu: 200_000, country: 'Taiwan', alliance: 'Ocean Alliance', brands: ['Evergreen Line', 'Italia Marittima'] },
  { rank: 8, name: 'HMM', teu: 1_027_000, yoyTeu: 121_000, country: 'South Korea', alliance: 'Premier Alliance' },
  { rank: 9, name: 'Yang Ming Marine Transport', teu: 760_000, yoyTeu: 52_000, country: 'Taiwan', alliance: 'Premier Alliance' },
  { rank: 10, name: 'ZIM Integrated Shipping Services', teu: 758_000, yoyTeu: -75_000, country: 'Israel', alliance: 'Independent', brands: ['Gold Star Line'] },
]

export const CAPACITY = {
  asOf: '2026-01-04',
  asOfLabel: '4 January 2026',
  source: 'Alphaliner',
  /**
   * The headline combined figure as reported for the top ten.
   *
   * Note the discrepancy, because we would rather state it than hide it: the
   * ten per-carrier figures above sum to 28,445,000 TEU, which is 97,000 more
   * than this headline — a gap of roughly a third of one per cent. Per-carrier
   * capacities are published rounded to the nearest thousand TEU and a fleet
   * moves daily, so small differences between a headline total and the sum of
   * its parts are expected in this data rather than evidence that one of them
   * is wrong. Where the page needs a combined number it uses `derivedTopTenTeu`
   * and says so, so the arithmetic on the page always adds up.
   */
  reportedTopTenTeu: 28_348_000,
  /** Sum of the ten rows above. Use this wherever the page shows a total. */
  derivedTopTenTeu: 28_445_000,
  /** Share of world operated capacity, on the reported headline */
  reportedTopTenSharePct: 84.1,
  worldFleetTeu: 33_690_000,
  worldFleetShips: 7_498,
} as const

/**
 * Schedule reliability: the share of vessel arrivals inside the advertised
 * window. This is the number that decides whether a delivery date survives
 * contact with reality, and it is absent from essentially every "largest
 * shipping companies" article, which rank on fleet size alone.
 *
 * Source: Sea-Intelligence Global Liner Performance, July 2026 figures, as
 * reported 27 August 2026.
 */
export const RELIABILITY = {
  month: 'July 2026',
  reportedOn: '27 August 2026',
  source: 'Sea-Intelligence Global Liner Performance',
  globalPct: 56.4,
  momChangePp: -6.1,
  yoyChangePp: -8.8,
  /** Mean lateness of vessels that did arrive late, in days */
  averageDelayDays: 6.06,
  best: { name: 'Maersk', pct: 73.7 },
  secondBest: { name: 'Hapag-Lloyd', pct: 69.3 },
  worst: { name: 'Wan Hai', pct: 29.8 },
} as const

/** Alliance structure in force from February 2025. */
export const ALLIANCES: { name: Alliance; members: string[]; note: string }[] = [
  { name: 'Gemini Cooperation', members: ['Maersk', 'Hapag-Lloyd'], note: 'Formed February 2025 after the 2M partnership between Maersk and MSC ended. Built around a hub-and-spoke network, which is the stated reason for its schedule-reliability lead.' },
  { name: 'Ocean Alliance', members: ['CMA CGM Group', 'COSCO Shipping Lines', 'OOCL', 'Evergreen Marine'], note: 'The only grouping unchanged through the 2025 reshuffle, with membership committed to 2032.' },
  { name: 'Premier Alliance', members: ['Ocean Network Express (ONE)', 'HMM', 'Yang Ming Marine Transport'], note: 'The former THE Alliance, renamed and continuing after Hapag-Lloyd left for Gemini.' },
  { name: 'Independent', members: ['MSC', 'ZIM Integrated Shipping Services'], note: 'MSC operates the largest fleet in the industry without an alliance partner, having chosen not to replace 2M.' },
]

/**
 * When this page must be revisited, per the project publication gate. These are
 * change triggers, not a fixed calendar.
 */
export const REVIEW = {
  capacityTrigger: 'Alphaliner publishes a materially different ranking, or any top-ten position changes hands.',
  reliabilityTrigger: 'A new Sea-Intelligence Global Liner Performance month moves global reliability by more than 5 percentage points, or changes the most- or least-reliable carrier.',
  allianceTrigger: 'Any alliance membership change is announced.',
  lastReviewed: '2026-09-17',
} as const

export function teuMillions(n: number): string {
  return (n / 1_000_000).toFixed(3)
}

export function sharePct(teu: number): string {
  return ((teu / CAPACITY.worldFleetTeu) * 100).toFixed(1)
}
