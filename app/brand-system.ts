// Shared customer-facing naming and navigation. Keep claims grounded in the project guidelines.
export const imcBrand = {
  name: "International Moving Company",
  shortName: "IMC",
  promise: "Your international move, clearly managed.",
  enquiryLabel: "Plan your move",
  navigation: [
    { href: "/services/", label: "Our services" },
    { href: "/how-it-works/", label: "How it works" },
    { href: "/moving-guides/", label: "Moving guides" },
    { href: "/about-us/", label: "About IMC" },
  ],
} as const;
