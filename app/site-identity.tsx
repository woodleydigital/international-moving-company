import { ArrowUpRight, ChevronDown } from "lucide-react";
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
    <SiteNavigation />
    <a className="header-cta" href={home ? "#enquiry" : "/get-a-quote/"}>{imcBrand.enquiryLabel}<ArrowUpRight size={17} aria-hidden="true" /></a>
  </div></header>;
}

// A section with children renders as <details>, so the menu opens on click with
// no JavaScript and works the same by keyboard and by touch. The shared `name`
// closes one panel when another opens, in browsers that support it; where it is
// unsupported both can sit open, which is untidy rather than broken.
function SiteNavigation() {
  return <nav aria-label="Main navigation" className="imc-nav">
    {imcBrand.navigation.map(item => "children" in item
      ? <details className="imc-nav-group" name="imc-nav" key={item.href}>
        <summary>{item.label}<ChevronDown size={15} aria-hidden="true" /></summary>
        <div className="imc-nav-panel">
          {item.children.map(child => <a href={child.href} key={child.href}>{child.label}</a>)}
          <a className="imc-nav-all" href={item.href}>{item.allLabel}<ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
      </details>
      : <a href={item.href} key={item.href}>{item.label}</a>)}
  </nav>;
}
