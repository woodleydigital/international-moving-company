import { policyPages } from "./legal-content";
export const sitePageGroups = [
  {title: "Company and policies", pages: Object.entries(policyPages).map(([slug,page])=>({path:`/${slug}/`,title:page.title}))},
  { title: "About your move", pages: [
    { path: "/", title: "International Moving Company — home" },
    { path: "/how-it-works/", title: "How your international move works" },
    { path: "/get-a-quote/", title: "Request a moving quote" },
  ] },
  { title: "International removal services", pages: [
    { path: "/services/", title: "Our international removal services" },
    { path: "/services/packing/", title: "Packing for your international move" },
    { path: "/services/storage/", title: "Storage during your move" },
    { path: "/services/shared-container/", title: "Shared-container moving" },
    { path: "/services/full-container/", title: "Sole-use container moving" },
  ] },
  { title: "Planning and guidance", pages: [
    {path:"/guides/air-freight-chargeable-weight/",title:"Air freight chargeable weight"},
    { path: "/moving-guides/", title: "Moving guides and planning tools" },
    { path: "/guides/comparing-international-moving-quotes/", title: "Comparing international moving quotes" },
    { path: "/guides/international-moving-checklist/", title: "International moving checklist" },
    { path: "/guides/international-moving-times/", title: "International moving times" },
    { path: "/guides/delivery-day/", title: "Preparing for delivery day" },
    { path: "/international-moving-costs/", title: "International moving costs" },
    { path: "/guides/estimating-moving-volume/", title: "Estimating your moving volume" },
  ] },
  { title: "Articles", pages: [
    { path: "/blog/", title: "Moving and shipping articles" },
    { path: "/blog/international-shipping-companies/", title: "The ten largest international shipping companies" },
  ] },
];
