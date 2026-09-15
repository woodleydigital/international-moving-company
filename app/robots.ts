import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    // The quote endpoint accepts POST only and has nothing to index.
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: "https://internationalmoving.company/sitemap.xml",
  };
}
