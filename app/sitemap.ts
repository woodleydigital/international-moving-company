import type { MetadataRoute } from "next";
import { sitePageGroups, siteMapPage } from "./site-pages";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://internationalmoving.company";
  // lastModified is the date the page's own content last changed, held beside
  // the page in site-pages.ts. It is deliberately not the build date: dates
  // that move on every deploy tell a crawler nothing, and Google discards
  // lastmod across a whole sitemap once it stops matching what actually
  // changed. changefreq and priority are omitted because Google ignores both.
  return [...sitePageGroups.flatMap(group => group.pages), siteMapPage]
    .map(page => ({ url: `${origin}${page.path}`, lastModified: page.lastmod }));
}
