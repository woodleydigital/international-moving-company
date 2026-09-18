import "./moving-graphics.css";
import type { Metadata } from "next";
import "./globals.css";
import "./design-refinement.css";
import "./quote-form.css";
import "./content-pages.css";
import "./editorial-design.css";
import "./diagram-refinement.css";
import "./information-gain.css";
import "./brand-application.css";
import "./site-navigation.css";
import "./typography.css";
export const metadata: Metadata = {
  // Pins the host every absolute metadata URL is resolved against, so the
  // canonical below always names the apex domain even when a page is reached
  // through www or a Vercel preview hostname.
  metadataBase: new URL("https://internationalmoving.company"),
  title: "International Moving Company | Worldwide Door-to-Door Moves | IMC",
  description: "IMC manages worldwide door-to-door international removals. Explore our approach to planning and coordinating your international move.",
  // "./" resolves per route, so every page declares its own canonical without
  // repeating one in each file.
  alternates: { canonical: "./" },
  // Search engine site verification. `other` carries any name/content pair Next
  // has no named field for, which is how Bing's token is emitted.
  verification: {
    google: "oEsrTsZ1zdN5GzXPNmwSnR9Pp4VwHhuoem4zmJZ4X4g",
    other: { "msvalidate.01": "AA2009471F2317746B296EB6F58C81A0" },
  },
  // The SVG is what modern browsers use. favicon.ico exists because browsers
  // and crawlers request it at the root by convention whatever the markup
  // says — Search Console was logging a 404 for it.
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16 32x32 48x48" },
    ],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
