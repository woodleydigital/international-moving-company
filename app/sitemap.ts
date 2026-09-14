import type { MetadataRoute } from "next";
import { sitePageGroups } from "./site-pages";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = "https://internationalmoving.company";
  return [...sitePageGroups.flatMap(group => group.pages.map(page => page.path)), "/site-map/"].map(path => ({ url: `${origin}${path}` }));
}
