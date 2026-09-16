import { ContentShell } from '../content-shell';

export const metadata = {
  title: 'Moving and shipping articles | IMC',
  description: 'Research and explanation on the shipping industry, routes and practicalities behind an international household move.',
};

/**
 * Blog index. Deliberately separate from /moving-guides/: guides answer a task
 * the customer is performing, articles explain the industry the move happens
 * inside. Keeping them apart stops the guide library filling with reference
 * material nobody is mid-task on.
 */
const articles = [
  {
    href: '/blog/largest-shipping-companies/',
    title: 'The ten largest shipping companies in the world (2026)',
    summary:
      'The carriers ranked by operated capacity, the schedule-reliability figures the rankings leave out, and why the line that sold the slot is often not the line whose ship carries the box.',
    date: '17 September 2026',
  },
];

export default function Blog() {
  return (
    <ContentShell
      path="/blog/"
      category="Articles"
      title="Articles on the shipping industry behind your move."
      intro="Reference and explanation about the carriers, alliances and schedules an international household shipment moves through. For step-by-step help with your own move, see the moving guides."
      related={[
        { href: '/moving-guides/', label: 'Browse the moving guides' },
        { href: '/international-moving-costs/', label: 'Understand moving costs' },
        { href: '/get-a-quote/', label: 'Request a moving quote' },
      ]}
    >
      <section>
        <h2>Latest articles</h2>
        <ul>
          {articles.map(a => (
            <li key={a.href}>
              <p>
                <a href={a.href}>
                  <strong>{a.title}</strong>
                </a>
              </p>
              <p>{a.summary}</p>
              <p>
                <small>Published {a.date}</small>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </ContentShell>
  );
}
