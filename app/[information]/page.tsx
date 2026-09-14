import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "../content-shell";
import { policyPages } from "../legal-content";
import { PersonPortrait } from "../person-portrait";
export const dynamicParams = false;
export function generateStaticParams(){return Object.keys(policyPages).map(information=>({information}));}
export async function generateMetadata({params}:{params:Promise<{information:string}>}):Promise<Metadata>{const {information}=await params;const page=policyPages[information];return {title:page?`${page.title} | IMC`:"IMC"};}
export default async function InformationPage({params}:{params:Promise<{information:string}>}){
 const {information}=await params; const page=policyPages[information];if(!page)notFound();
 return <ContentShell path={`/${information}/`} title={page.title} intro={page.intro} category="Company & policies" showCta={false}>
 <div className="policy-document">
 {page.pending&&<aside className="policy-status" aria-label="Draft status"><strong>Private preview · Draft for review</strong><p>{page.pending}</p><p>Prepared 13 September 2026. Not an approved or effective policy.</p></aside>}
 <nav className="policy-contents" aria-label="On this page"><strong>On this page</strong><ol>{page.sections.map(([title],i)=><li key={title}><a href={`#section-${i+1}`}>{title}</a></li>)}</ol></nav>
 {page.sections.map(([title,body],i)=><section key={title} id={`section-${i+1}`}><h2>{title}</h2><p>{body}</p>{information==='about-us'&&i===1&&<figure className="policy-portrait"><PersonPortrait person="warwick"/><figcaption>Warwick Woodley · IMC</figcaption><a className="text-link" href="https://www.linkedin.com/in/warwick-woodley-ba253092/">Warwick on LinkedIn</a></figure>}{information==='about-us'&&i===2&&<figure className="policy-portrait"><PersonPortrait person="maiane"/><figcaption>Maiane Cassanego · IMC</figcaption><a className="text-link" href="https://www.linkedin.com/in/maiane-cassanego-865450114/">Maiane on LinkedIn</a></figure>}</section>)}
 {information==='contact-us'&&<a className="text-link" href="/get-a-quote/">Explore the quote form preview</a>}
 </div></ContentShell>;
}
