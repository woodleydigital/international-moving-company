/**
 * The article register. One list, read by both /blog/ and the homepage, so the
 * two can never disagree about what has been published or in what order.
 *
 * Adding an article means adding a row here and creating its route. Nothing on
 * the homepage needs editing: it asks for the most recent few and renders what
 * it gets, whether that is one article or ten.
 */

export interface Article {
  /** Path, with the trailing slash this site uses throughout */
  href: string
  title: string
  /** One or two sentences. Written for someone deciding whether to open it. */
  summary: string
  /** ISO date, for sorting and for the <time datetime> attribute */
  published: string
}

export const ARTICLES: Article[] = [
  {
    href: '/blog/largest-shipping-companies/',
    title: 'The ten largest shipping companies in the world (2026)',
    summary:
      'The carriers ranked by operated capacity, the schedule-reliability figures the rankings leave out, and why the line that sold the slot is often not the line whose ship carries the box.',
    published: '2026-09-17',
  },
]

/** Most recently published first. */
export function latestArticles(count = 3): Article[] {
  return [...ARTICLES]
    .sort((a, b) => b.published.localeCompare(a.published))
    .slice(0, count)
}

export function formatPublished(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
