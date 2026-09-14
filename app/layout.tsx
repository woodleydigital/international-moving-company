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
  title: "International Moving Company | Worldwide Door-to-Door Moves | IMC",
  description: "IMC manages worldwide door-to-door international removals. Explore our approach to planning and coordinating your international move.",
  robots: { index: false, follow: false },
  icons: { icon: "/favicon.svg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
