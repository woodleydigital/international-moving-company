import { policyPages } from "./legal-content";

// Every page carries the date its own content last changed substantively. The
// sitemap publishes it as <lastmod>, which is what Google schedules crawling
// against — an inaccurate date is worse than none, because a sitemap whose
// dates cannot be trusted gets its lastmod ignored wholesale. So this is not
// the build date and not the deploy date: bump a page's date when you change
// what that page says, and leave it alone for typography, layout or a change
// to shared chrome that every page happens to render.
export const sitePageGroups = [
  { title: "Company and policies", pages: Object.entries(policyPages).map(([slug, page]) => ({ path: `/${slug}/`, title: page.title, lastmod: page.lastmod })) },
  { title: "About your move", pages: [
    { path: "/", title: "International Moving Company — home", lastmod: "2026-09-17" },
    { path: "/how-it-works/", title: "How your international move works", lastmod: "2026-09-14" },
    { path: "/get-a-quote/", title: "Request a moving quote", lastmod: "2026-09-14" },
  ] },
  { title: "International removal services", pages: [
    { path: "/services/", title: "Our international removal services", lastmod: "2026-09-18" },
    { path: "/services/shipping-household-goods/", title: "Shipping household goods internationally", lastmod: "2026-09-18" },
    { path: "/services/packing/", title: "Packing for your international move", lastmod: "2026-09-14" },
    { path: "/services/storage/", title: "Storage during your move", lastmod: "2026-09-14" },
    { path: "/services/shared-container/", title: "Shared-container moving", lastmod: "2026-09-14" },
    { path: "/services/full-container/", title: "Sole-use container moving", lastmod: "2026-09-14" },
  ] },
  { title: "Planning and guidance", pages: [
    { path: "/guides/air-freight-chargeable-weight/", title: "Air freight chargeable weight", lastmod: "2026-09-14" },
    { path: "/moving-guides/", title: "Moving guides and planning tools", lastmod: "2026-09-14" },
    { path: "/guides/comparing-international-moving-quotes/", title: "Comparing international moving quotes", lastmod: "2026-09-14" },
    { path: "/guides/international-moving-checklist/", title: "International moving checklist", lastmod: "2026-09-14" },
    { path: "/guides/international-moving-times/", title: "International moving times", lastmod: "2026-09-14" },
    { path: "/guides/delivery-day/", title: "Preparing for delivery day", lastmod: "2026-09-14" },
    { path: "/international-moving-costs/", title: "International moving costs", lastmod: "2026-09-14" },
    { path: "/guides/estimating-moving-volume/", title: "Estimating your moving volume", lastmod: "2026-09-14" },
  ] },
  { title: "Articles", pages: [
    { path: "/blog/", title: "Moving and shipping articles", lastmod: "2026-09-17" },
    { path: "/blog/largest-shipping-companies/", title: "The ten largest shipping companies in the world", lastmod: "2026-09-16" },
  ] },
];

// The site map page lists the pages above; it is not one of them, so it carries
// its own date here rather than appearing in a group.
export const siteMapPage = { path: "/site-map/", title: "Site map", lastmod: "2026-09-14" };
