/**
 * Arrival-window arithmetic for /blog/largest-shipping-companies/.
 *
 * This is a base-rate tool, not a forecast. It takes a published historical
 * reliability figure and an average lateness, and applies them to a date the
 * reader already holds. It cannot know anything about their vessel, their
 * route or their shipment, and the component says so.
 *
 * Deliberately not included: any cost, any transit time, any route-specific
 * estimate. We hold no data for those, so producing a number would be
 * fabrication rather than calculation.
 */

export interface Benchmark {
  id: string
  label: string
  /** Share of arrivals inside the advertised window, per cent */
  reliabilityPct: number
  note: string
}

export interface ArrivalOutlook {
  /** Historical share arriving inside the window */
  inWindowPct: number
  /** The complement — historically late */
  latePct: number
  /** Quoted date echoed back, normalised */
  quoted: Date
  /** Quoted date plus the average lateness, whole days */
  ifLate: Date
  /** Whole days added */
  bufferDays: number
}

/** Mean lateness of vessels that arrived late — Sea-Intelligence, July 2026. */
export const AVERAGE_DELAY_DAYS = 6.06

export function outlook(
  quotedIso: string,
  reliabilityPct: number,
  averageDelayDays: number = AVERAGE_DELAY_DAYS,
): ArrivalOutlook | null {
  if (!quotedIso) return null
  const quoted = new Date(`${quotedIso}T00:00:00Z`)
  if (Number.isNaN(quoted.getTime())) return null
  if (!Number.isFinite(reliabilityPct) || reliabilityPct < 0 || reliabilityPct > 100) return null
  if (!Number.isFinite(averageDelayDays) || averageDelayDays < 0) return null

  // Whole days, because a delivery cannot be planned to six hundredths of a
  // day. Rounded rather than truncated: 6.06 becomes 6, and the exact figure
  // stays visible in the component so the reader can see what was rounded.
  const bufferDays = Math.round(averageDelayDays)
  const ifLate = new Date(quoted.getTime() + bufferDays * 86_400_000)

  return {
    inWindowPct: reliabilityPct,
    latePct: Math.round((100 - reliabilityPct) * 10) / 10,
    quoted,
    ifLate,
    bufferDays,
  }
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })
}

/** Today in YYYY-MM-DD, for a sensible default without hardcoding a date. */
export function todayIso(): string {
  return new Date().toISOString().slice(0, 10)
}
