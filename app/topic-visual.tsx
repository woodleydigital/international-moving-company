import { JourneyGraphic, ContainerGraphic, MilestoneGraphic, VolumeBars } from "./moving-graphics";
import { QuoteScopeGraphic } from "./quote-scope-graphic";
import { ArrowRight, Plus, Equal } from "lucide-react";
const topics:Record<string,{label:string;caption:string;kind:string;nodes:[string,string][]}>={
"Services":{label:"Door-to-door removal scope",kind:"journey",caption:"Door-to-door scope connects origin work, international transport and destination work under one agreed moving plan.",nodes:[["Origin","Assessment, packing and collection"],["Transport","Shipment handling and international movement"],["Destination","Release arrangements and home delivery"]]},
"Moving process":{label:"Decisions and handoffs in an international move",kind:"journey",caption:"Agree the plan before collection, then coordinate transport and destination readiness. Each phase has its own records and responsibilities.",nodes:[["Agree","Inventory, scope and booking"],["Move","Packing, collection and transport"],["Receive","Release, delivery and condition checks"]]},
"Shared container":{label:"Shared-container consolidation diagram",kind:"shared",caption:"Separate shipments share container capacity through consolidation. Coloured blocks identify shipments; their sizes do not represent actual volumes.",nodes:[["Your shipment","Your own inventory"],["Shipment B","Separately identified"],["Shipment C","Separately identified"]]},
"Full container":{label:"Sole-use container capacity diagram",kind:"dedicated",caption:"Sole use reserves the container for your shipment. Unused space is possible; this is a scope diagram, not a loading or capacity calculation.",nodes:[["Your shipment","One inventory and loading plan"],["Any unused capacity","Still part of your sole-use allocation"]]},
"Moving costs":{label:"Components to reconcile in a moving quotation",kind:"cost",caption:"Compare every component against the same inventory and addresses. Confirm inclusions and exclusions; these blocks are not a price estimate.",nodes:[["Origin work","Packing, access and collection"],["Transport","Route, mode and handling"],["Destination work","Delivery, access and agreed extras"]]},
"Volume guidance":{label:"Worked inventory-volume calculation",kind:"volume",caption:"Worked inventory estimate: 10 small cartons × 0.05 m³ + 2 bookcases × 0.80 m³ = 2.10 m³. Final shipment volume requires assessment.",nodes:[["10 small cartons","10 × 0.05 m³ = 0.50 m³"],["2 bookcases","2 × 0.80 m³ = 1.60 m³"],["Estimated total","2.10 m³"]]},
"Quote request":{label:"Information needed for a moving quote request",kind:"journey",caption:"The enquiry connects locations with move details and contact information. Smaller shipments can include a full itemised inventory.",nodes:[["Address","Origin and destination"],["Details","Date, shipment size and inventory"],["Contact","Name, phone and email"]]}
};
export function TopicVisual({topic,compact=false}:{topic:string;compact?:boolean}){
 if(topic==="Services") return <JourneyGraphic compact={compact}/>;
 if(topic==="Moving process") return <MilestoneGraphic/>;
 if(topic==="Shared container"||topic==="Full container") return <ContainerGraphic/>;
 if(topic==="Moving costs") return <QuoteScopeGraphic/>;
 if(topic==="Volume guidance") return <VolumeBars/>;
 const visual=topics[topic];if(!visual)return null;
 return <figure className={`topic-visual topic-${visual.kind} ${compact?"topic-compact":""}`} aria-label={visual.label}>
  <div className="visual-label">{visual.label}</div>
  {visual.kind === "shared" && <p className="allocation-label">One shared container</p>}
  {visual.kind === "dedicated" && <p className="allocation-label">One container reserved for you</p>}
  <div className="visual-nodes">{visual.nodes.map(([title,detail],i)=><div className="visual-node-wrap" key={title}><div className="visual-node"><strong>{title}</strong><span>{detail}</span></div>{i<visual.nodes.length-1&&visual.kind!=="shared"&&visual.kind!=="dedicated"&&<span className="visual-connector" aria-hidden="true">{visual.kind==="volume"?(i===1?<Equal/>:<Plus/>):visual.kind==="cost"?<Plus/>:<ArrowRight/>}</span>}</div>)}</div>
  <figcaption>{visual.caption}</figcaption>
 </figure>
}
