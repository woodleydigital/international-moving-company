import { maianeBio } from "./people-data";
const origin = "https://internationalmoving.company";
const organizationId = `${origin}/#organization`;
const websiteId = `${origin}/#website`;
const organization = {"@type":"Organization","@id":organizationId,name:"International Moving Company",alternateName:"IMC",url:`${origin}/`,description:"International relocation management company focused on worldwide door-to-door household removals."};
const website = {"@type":"WebSite","@id":websiteId,url:`${origin}/`,name:"International Moving Company",alternateName:"IMC",publisher:{"@id":organizationId},inLanguage:"en"};
const services:Record<string,string> = {
 "/services/":"Door-to-door international relocation management",
 "/services/packing/":"Packing coordination for international removals",
 "/services/storage/":"Storage coordination during international removals",
 "/services/shared-container/":"Shared-container international moving",
 "/services/full-container/":"Sole-use container international moving"
};
const people = [
 {"@type":"Person","@id":`${origin}/#warwick-woodley`,name:"Warwick Woodley",url:`${origin}/about-us/#section-2`,image:`${origin}/warwick-woodley.webp`,sameAs:["https://www.linkedin.com/in/warwick-woodley-ba253092/"],affiliation:{"@id":organizationId},description:"Warwick brings more than four decades of hands-on experience in international moving and freight forwarding. A former FIDI Academy trainer, he has trained moving professionals around the world."},
 {"@type":"Person","@id":`${origin}/#maiane-cassanego`,name:"Maiane Cassanego",url:`${origin}/about-us/#section-3`,image:`${origin}/maiane-cassanego-enhanced.webp`,sameAs:["https://www.linkedin.com/in/maiane-cassanego-865450114/"],affiliation:{"@id":organizationId},description:maianeBio}
];
export function PageStructuredData({path,title,intro}:{path:string;title:string;intro:string}){
 const url = `${origin}${path}`;
 const isAbout = path==="/about-us/";
 const showPeople = isAbout || path==="/";
 const type = isAbout?"AboutPage":path==="/contact-us/"?"ContactPage":["/services/","/moving-guides/","/site-map/"].includes(path)?"CollectionPage":"WebPage";
 const serviceName = services[path];
 const page = {"@type":type,"@id":`${url}#webpage`,url,name:title,description:intro,inLanguage:"en",isPartOf:{"@id":websiteId},publisher:{"@id":organizationId},
  ...(path!=="/"?{breadcrumb:{"@id":`${url}#breadcrumb`}}:{}),
  ...(serviceName?{mainEntity:{"@id":`${url}#service`}}:isAbout?{mainEntity:{"@id":organizationId}}:{}),
  ...(showPeople?{mentions:people.map(person=>({"@id":person["@id"]}))}:{})};
 const graph:Record<string,unknown>[] = [organization,website,page];
 if(path!=="/") graph.push({"@type":"BreadcrumbList","@id":`${url}#breadcrumb`,itemListElement:[{"@type":"ListItem",position:1,name:"Home",item:`${origin}/`},{"@type":"ListItem",position:2,name:title,item:url}]});
 if(serviceName)graph.push({"@type":"Service","@id":`${url}#service`,name:serviceName,serviceType:serviceName,description:intro,url,provider:{"@id":organizationId},mainEntityOfPage:{"@id":`${url}#webpage`}});
 if(showPeople)graph.push(...people);
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({"@context":"https://schema.org","@graph":graph}).replace(/</g,"\\u003c")}}/>;
}
