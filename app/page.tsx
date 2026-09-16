import { latestArticles, formatPublished } from "./articles";
import { SiteHeader, SiteBrand } from "./site-identity";
import { imcBrand } from "./brand-system";
import { maianeBio } from "./people-data";
import { PersonPortrait } from "./person-portrait";
import { PageStructuredData } from "./structured-data";
import { PolicyFooter } from "./policy-footer";
import { MovingPerspective, MovingFieldNotes } from "./editorial-sections";
import { TopicVisual } from "./topic-visual";
import { QuoteForm } from "./quote-form";
import { DetailedProcess, SurveySection, PackingStorageSection, MoveSituations } from "./service-detail";
import { PillarNavigation, ScopeSection, TransportSection, CostsSection, VolumeSection, PreparationSection, PracticalSection, QuestionsSection } from "./pillar-content";
import { ArrowDown, ArrowUpRight, Globe2, MoveRight, PackageCheck, Route } from "lucide-react";
export default function Home() {
  return <>
    <PageStructuredData path="/" title="International Moving Company" intro="IMC manages worldwide door-to-door international removals."/>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader home/>
    <main id="main">
      <section className="hero" aria-labelledby="hero-title"><div className="container hero-grid">
        <div className="hero-copy"><p className="eyebrow">INTERNATIONAL HOUSEHOLD REMOVALS</p><h1 id="hero-title">International moving.<br/><span>Clearly managed.</span></h1><p className="hero-description">International Moving Company (IMC) manages worldwide door-to-door household removals. We bring collection, international transport and home delivery into one agreed plan, with the services and responsibilities explained at each stage.</p><a href="#process" className="text-link">Discover how we manage your move <ArrowDown size={18}/></a><div className="hero-facts"><span><Globe2 size={19}/> Worldwide moves</span><span><Route size={19}/> Door-to-door coordination</span></div></div>
        <QuoteForm/>
      </div></section>
      <PillarNavigation/><MovingPerspective/>
      <section className="service-intro" id="services" aria-labelledby="services-title"><div className="container"><div className="section-heading"><p className="eyebrow">THE BIG PICTURE. THE SMALL DETAILS.</p><div><h2 id="services-title">From your front door.<br/><span>To the next one.</span></h2><p>IMC brings origin services, international transport and destination delivery into one agreed plan. Start by establishing the work and responsibilities at each stage.</p></div></div><div className="service-grid">
        <article><Globe2 size={28} strokeWidth={1.3}/><h3>International removals</h3><p>Door-to-door moves between countries, built around your origin, destination and belongings.</p><span className="service-caption">FROM HOME TO HOME</span></article>
        <article><Route size={28} strokeWidth={1.3}/><h3>Relocation management</h3><p>Bringing the stages of your move together, with the responsibilities and practical details made clear.</p><span className="service-caption">THE JOURNEY, CONNECTED</span></article>
        <article><PackageCheck size={28} strokeWidth={1.3}/><h3>Planning your move</h3><p>Start with your priorities. Discuss timing, shipment size and the help you need along the way.</p><span className="service-caption">A CLEAR PLACE TO START</span></article>
      </div></div></section>
      <div className="container management-overview"><TopicVisual topic="Services"/></div><ScopeSection/><MoveSituations/><SurveySection/><DetailedProcess/><TransportSection/><MovingFieldNotes/><CostsSection/><PackingStorageSection/><VolumeSection/><PreparationSection/><PracticalSection/>
      <section className="imc-people container" id="about" aria-labelledby="about-title">
        <div className="imc-people-intro"><p className="eyebrow">MEET IMC</p><h2 id="about-title">The people behind<br/>your moving plan.</h2><p>We’re International Moving Company — IMC for short. We manage door-to-door international removals worldwide, bringing the stages, responsibilities and practical details of your move together.</p></div>
        <article className="imc-person" aria-labelledby="warwick-name">
          <figure><PersonPortrait person="warwick"/><figcaption>Warwick Woodley · International Moving Company</figcaption></figure>
          <div className="imc-person-copy"><h3 id="warwick-name">Warwick Woodley</h3><p>Warwick brings more than four decades of hands-on experience in international moving and freight forwarding. A former FIDI Academy trainer, he has trained moving professionals around the world.</p><p>At IMC, he draws on that experience to help make international moving more personal and transparent, with clear explanations of the services, responsibilities and practical details involved in your relocation.</p><a className="text-link" href="https://www.linkedin.com/in/warwick-woodley-ba253092/" target="_blank" rel="noopener noreferrer">Warwick on LinkedIn <ArrowUpRight size={18}/></a></div>
        </article>
        <article className="imc-person" aria-labelledby="maiane-name">
          <figure><PersonPortrait person="maiane"/><figcaption>Maiane Cassanego · International Moving Company</figcaption></figure>
          <div className="imc-person-copy"><h3 id="maiane-name">Maiane Cassanego</h3><p>{maianeBio}</p><a className="text-link" href="https://www.linkedin.com/in/maiane-cassanego-865450114/" target="_blank" rel="noopener noreferrer">Maiane on LinkedIn <ArrowUpRight size={18}/></a></div>
        </article>
      </section>
      <section className="container shipment-decisions" aria-labelledby="shipment-decisions-title"><p className="eyebrow">LOOK BEHIND THE QUOTATION</p><h2 id="shipment-decisions-title">The details that change your moving plan.</h2><p>A service name, a volume estimate and a sailing date each tell only part of the story. Resolve these three questions before deciding which quotation fits your move.</p><div className="guide-directory"><article><span>01</span><div><h3><a href="/services/shared-container/#groupage-vs-lcl">Who is consolidating your shipment?</a></h3><p>Household groupage and general-freight LCL can involve different handling arrangements. Identify the crews, facilities, billing units and destination scope.</p></div></article><article><span>02</span><div><h3><a href="/guides/air-freight-chargeable-weight/">Are you paying for space or weight?</a></h3><p>An 8 kg carton measuring 60 × 50 × 40 cm has a 20 kg volumetric weight at a divisor of 6,000. Explore the calculation and confirm the actual tariff.</p></div></article><article><span>03</span><div><h3><a href="/guides/international-moving-times/">When do storage charges begin?</a></h3><p>Ask which event starts each allowance, the last free day and who invoices later charges. Vessel arrival alone does not tell you when home delivery can happen.</p></div></article></div></section>
      {latestArticles(3).length > 0 && (
        <section className="container shipment-decisions" aria-labelledby="articles-title">
          <p className="eyebrow">FROM THE BLOG</p>
          <h2 id="articles-title">Research on the industry behind your move.</h2>
          <p>Reference and explanation about the carriers, alliances and schedules an international household shipment moves through. Every figure is dated and sourced.</p>
          <div className="guide-directory">
            {latestArticles(3).map((article, index) => (
              <article key={article.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3><a href={article.href}>{article.title}</a></h3>
                  <p>{article.summary}</p>
                  <p><small>Published <time dateTime={article.published}>{formatPublished(article.published)}</time></small></p>
                </div>
              </article>
            ))}
          </div>
          <p><a className="text-link" href="/blog/">All articles <ArrowUpRight size={18}/></a></p>
        </section>
      )}
      <section className="container content-links" aria-labelledby="explore-title"><p className="eyebrow">PLAN WITH CLARITY</p><h2 id="explore-title">Go deeper into your move.</h2><div><a href="/moving-guides/">All moving guides and tools</a><a href="/services/packing/">Packing and preparation</a><a href="/services/storage/">Storage between homes</a><a href="/services/">Your removal service scope</a><a href="/how-it-works/">The process and your next steps</a><a href="/services/shared-container/">Shared-container moving</a><a href="/services/full-container/">Sole-use container moving</a><a href="/international-moving-costs/">Costs and quote inclusions</a><a href="/guides/estimating-moving-volume/">Understanding your moving volume</a></div></section>
      <QuestionsSection/>
    </main>
    <footer className="site-footer"><div className="container footer-main"><SiteBrand footer/><p>{imcBrand.promise}</p><a className="text-link" href="#top">Back to top <ArrowUpRight size={18}/></a></div><div className="container footer-bottom"><span>© 2026 International Moving Company</span><a href="/site-map/">Sitemap</a><span>Worldwide door-to-door removals</span></div><PolicyFooter/></footer>
  </>;
}
