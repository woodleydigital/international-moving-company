import { ContentShell } from '../content-shell';
import { ARTICLES, formatPublished } from '../articles';

export const metadata = {
  title: 'Moving and shipping articles | IMC',
  description: 'Research and explanation on the shipping industry, routes and practicalities behind an international household move.',
};

/**
 * Blog index. Deliberately separate from /moving-guides/: guides answer a task
 * the customer is performing, articles explain the industry the move happens
 * inside. Keeping them apart stops the guide library filling with reference
 * material nobody is mid-task on.
 *
 * The list itself lives in app/articles.ts, shared with the homepage.
 */

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
          {[...ARTICLES].sort((a, b) => b.published.localeCompare(a.published)).map(a => (
            <li key={a.href}>
              <p>
                <a href={a.href}>
                  <strong>{a.title}</strong>
                </a>
              </p>
              <p>{a.summary}</p>
              <p>
                <small>
                  Published <time dateTime={a.published}>{formatPublished(a.published)}</time>
                </small>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </ContentShell>
  );
}
