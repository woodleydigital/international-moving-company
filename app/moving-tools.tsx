"use client";
import { MeasurementGraphic } from "./moving-graphics";
import { useState } from "react";
import { Input, Checkbox, Progress } from "./form-controls";
import { calculateVolume } from "./move-maths";

export function VolumeCalculator() {
  const [values, setValues] = useState(["50", "40", "40", "10"]);
  const result = calculateVolume(values[0], values[1], values[2], values[3]);
  return <div className="volume-tool"><div className="volume-controls"><p className="tool-label">MEASURE A CARTON OR PACKED ITEM</p><MeasurementGraphic dimensions={values.slice(0,3)}/><div className="dimension-fields">{["Length (cm)","Width (cm)","Height (cm)","Number of identical items"].map((label, i) => <div key={label}><label htmlFor={`dimension-${i}`}>{label}</label><Input id={`dimension-${i}`} type="number" inputMode={i===3?"numeric":"decimal"} min={i===3?1:0.01} max={i===3?10000:1000} step={i===3?1:"any"} value={values[i]} onChange={e=>setValues(previous=>previous.map((value,j)=>j===i?e.target.value:value))} aria-describedby="volume-method" aria-invalid={result===null}/></div>)}</div><p id="volume-method" className="fine-print">Calculation: length × width × height in centimetres × quantity ÷ 1,000,000. Use packed outside dimensions. Dimensions: up to 1,000 cm each; quantity: 1–10,000.</p></div><div className="volume-result" aria-live="polite" aria-atomic="true"><span>Calculated item volume</span><strong>{result ? result.cubicMetres.toLocaleString("en-GB",{maximumFractionDigits:3}) : "—"}<small> m³</small></strong><p>{result ? `Approximately ${result.cubicFeet.toLocaleString("en-GB",{maximumFractionDigits:2})} cubic feet` : "Enter positive dimensions and a whole-number quantity within the limits."}</p><span className="result-note">Item volume only. Packing, loading space and shipment charges require assessment.</span></div><noscript><p>For ten cartons measuring 50 × 40 × 40 cm each, the item volume is 0.8 m³. Enable JavaScript to change the example.</p></noscript></div>;
}
const checks = [
  { title: "Origin and destination", text: "I know the collection and delivery locations, including any access constraints.", next: "Confirm both locations and flag stairs, parking or restricted vehicle access." },
  { title: "Timing and flexibility", text: "I have a target collection period and know when I can receive delivery.", next: "Separate your collection window, travel date and earliest delivery date." },
  { title: "Inventory and packing", text: "I have a working list of what is moving and what needs packing.", next: "List furniture, cartons and fragile items; note what you will pack yourself." },
  { title: "Documents and item checks", text: "I have confirmed the document and item requirements for my route.", next: "Check current destination requirements before packing or booking." },
  { title: "Quote scope and protection", text: "I have checked inclusions, exclusions and the applicable protection terms.", next: "Ask for the written scope, possible extra charges and protection terms." },
  { title: "Arrival and storage", text: "I know whether my home will be ready or whether storage is needed.", next: "Confirm receiving arrangements and discuss storage if dates will not align." },
];
export function MoveChecklist(){
 const [done,setDone]=useState<string[]>([]);
 const remaining=checks.filter(item=>!done.includes(item.title));
 return <div className="readiness-tool"><div className="checklist-items">{checks.map((item,i)=><label className="check-row" key={item.title} htmlFor={`move-check-${i}`}><Checkbox id={`move-check-${i}`} checked={done.includes(item.title)} onCheckedChange={checked=>setDone(previous=>checked===true?[...previous,item.title]:previous.filter(v=>v!==item.title))}/><span><strong>{item.title}</strong><span>{item.text}</span></span></label>)}</div><aside className="readiness-result"><p className="tool-label">YOUR PLANNING CHECK</p><p className="readiness-count" aria-live="polite">{done.length}<span> / {checks.length} topics checked</span></p><Progress value={done.length/checks.length*100} aria-label={`${done.length} of ${checks.length} planning topics checked`}/><h3>{remaining.length?"Your next useful step":"Bring your plan together"}</h3><p aria-live="polite">{remaining[0]?.next ?? "Keep your inventory, dates and questions together for a shipment-specific discussion. Completing this list does not confirm booking or customs clearance."}</p><button type="button" className="reset-button" onClick={()=>setDone([])}>Reset checklist</button><p className="fine-print">A planning aid, not a clearance or eligibility check. Answers stay in this page and reset when you reload.</p></aside><noscript><p>Use the six topics as a written checklist. Enable JavaScript to track your progress here.</p></noscript></div>;
}
