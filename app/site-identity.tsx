import { ArrowUpRight } from "lucide-react";
import { imcBrand } from "./brand-system";

export function SiteBrand({ footer = false }: { footer?: boolean }) {
  return <a href="/" className={`imc-identity${footer ? " imc-identity-footer" : ""}`} aria-label={`${imcBrand.name} (${imcBrand.shortName}) — home`}>
    <span className="imc-identity-mark" aria-hidden="true"><img src="/imc-mark.webp" width="328" height="126" alt="" /></span>
    <span className="imc-identity-name">International<br />Moving Company</span>
  </a>;
}

export function SiteHeader({ home = false }: { home?: boolean }) {
  return <header id={home ? "top" : undefined} className="site-header imc-header"><div className="container header-inner">
    <SiteBrand />
    <nav aria-label="Main navigation">{imcBrand.navigation.map(link => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
    <a className="header-cta" href={home ? "#enquiry" : "/get-a-quote/"}>{imcBrand.enquiryLabel}<ArrowUpRight size={17} aria-hidden="true" /></a>
  </div></header>;
}
