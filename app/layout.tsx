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
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
