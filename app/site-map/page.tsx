import { ContentShell } from "../content-shell";
import { sitePageGroups } from "../site-pages";
export const metadata = {
  title: "Sitemap | International Moving Company",
  description: "Find IMC’s international removal services, moving process, planning guidance and quote request page.",
};
export default function SiteMap() {
  return <ContentShell path="/site-map/" category="Sitemap" title="Find your way around IMC." intro="Explore our international removal services and practical moving guidance, or go straight to your quote request.">
    <nav aria-label="Website sitemap">
      {sitePageGroups.map(group => <section key={group.title}>
        <h2>{group.title}</h2>
        <ul>{group.pages.map(page => <li key={page.path}><a href={page.path}>{page.title}</a></li>)}</ul>
      </section>)}
    </nav>
    <section><h2>XML sitemap</h2><p>For a machine-readable list of our website pages, <a href="/sitemap.xml">view our XML sitemap</a>.</p></section>
  </ContentShell>;
}
