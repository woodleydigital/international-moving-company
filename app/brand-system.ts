// Shared customer-facing naming and navigation. Keep claims grounded in the project guidelines.
export const imcBrand = {
  name: "International Moving Company",
  shortName: "IMC",
  promise: "Your international move, clearly managed.",
  enquiryLabel: "Plan your move",
  // The header menu. An item with children renders as a disclosure whose panel
  // ends in a link to the section page itself, so the parent is always reachable
  // and never becomes a label you cannot click.
  navigation: [
    {
      href: "/services/", label: "Our services", allLabel: "All services", children: [
        { href: "/services/shipping-household-goods/", label: "Shipping household goods" },
        { href: "/services/shared-container/", label: "Shared container" },
        { href: "/services/full-container/", label: "Sole-use container" },
        { href: "/services/packing/", label: "Packing" },
        { href: "/services/storage/", label: "Storage" },
      ],
    },
    { href: "/how-it-works/", label: "How it works" },
    { href: "/international-moving-costs/", label: "Moving costs" },
    {
      href: "/moving-guides/", label: "Moving guides", allLabel: "All guides", children: [
        { href: "/guides/estimating-moving-volume/", label: "Estimating your volume" },
        { href: "/guides/air-freight-chargeable-weight/", label: "Air freight chargeable weight" },
        { href: "/guides/comparing-international-moving-quotes/", label: "Comparing quotations" },
        { href: "/guides/international-moving-checklist/", label: "Moving checklist" },
        { href: "/guides/international-moving-times/", label: "Moving times" },
        { href: "/guides/delivery-day/", label: "Delivery day" },
      ],
    },
    { href: "/blog/", label: "Articles" },
    { href: "/about-us/", label: "About IMC" },
  ],
} as const;
