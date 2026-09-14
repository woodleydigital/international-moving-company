"use client";

import { imcBrand } from "./brand-system";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { ArrowRight, ArrowLeft, Plus, Trash2, Package } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { inventoryItems, inventoryTotal } from "./inventory-data";

const sizes = ["Complete household", "Part of household", "Few pieces of furniture", "Some boxes or luggage"];

export function QuoteForm() {
  const [step, setStep] = useState(0);
  const [details, setDetails] = useState({from:"", to:"", date:"", size:"", notes:"", name:"", email:"", phone:""});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const heading = useRef<HTMLHeadingElement>(null);
  const previousStep = useRef(0);
  useEffect(() => {
    if (previousStep.current !== step) heading.current?.focus();
    previousStep.current = step;
  }, [step]);
  const smallMove = sizes.slice(2).includes(details.size);
  const selected = inventoryItems.filter(item => quantities[item.item] > 0);
  const total = inventoryTotal(quantities);
  const query = search.trim().toLowerCase();
  const matches = inventoryItems.filter(item => {
    const searchable = `${item.item} ${item.item.includes("Seater") ? "sofa couch" : ""} ${item.item.includes("Carton") ? "box boxes" : ""}`.toLowerCase();
    return query.split(/\s+/).every(word => searchable.includes(word));
  });
  const update = (key: keyof typeof details, value: string) => setDetails(d => ({...d, [key]:value}));
  function changeQuantity(item: string, quantity: number) {
    if (!Number.isSafeInteger(quantity) || quantity < 0 || quantity > 999) return;
    setQuantities(q => ({...q, [item]:quantity}));
    setError("");
  }
  function advance(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (step === 0 && (!details.from.trim() || !details.to.trim())) { setError("Enter your origin and destination."); return; }
    if (step === 1 && !details.size) { setError("Select your moving size."); return; }
    if (step === 1 && smallMove && !selected.length) { setError("Add at least one item to your inventory."); return; }
    setError("");
    if (step < 2) setStep(step + 1);
  }
  return <section id="enquiry" className="enquiry-panel quote-panel" aria-labelledby="enquiry-title">
    <div className="panel-top"><span className="eyebrow">YOUR MOVING PLAN</span><Package size={24}/></div>
    <h2 id="enquiry-title">{imcBrand.enquiryLabel}</h2>
    <p>Start with where you’re moving from and to.</p>
    <ol className="quote-steps" aria-label="Quote request progress">{["Address", "Details", "Contact"].map((label,index)=><li key={label} aria-current={step === index ? "step" : undefined} className={index <= step ? "reached" : ""}><span>{index+1}</span>{label}</li>)}</ol>
    <Progress value={(step+1)/3*100} aria-label={`Step ${step+1} of 3`} className="quote-progress"/>
    <form onSubmit={advance}>
      <h3 ref={heading} tabIndex={-1} className="quote-stage-title">{["Where are you moving?", "What are you moving?", "How can we contact you?"][step]}</h3>
      {error && <p role="alert" className="quote-error">{error}</p>}
      {step === 0 && <div className="quote-fields">
        <label htmlFor="move-from">Moving from <span>(required)</span><Input id="move-from" name="origin" value={details.from} onChange={e=>update("from",e.target.value)} required maxLength={300} placeholder="Address or city and country" autoComplete="off"/></label>
        <label htmlFor="move-to">Moving to <span>(required)</span><Input id="move-to" name="destination" value={details.to} onChange={e=>update("to",e.target.value)} required maxLength={300} placeholder="Address or city and country" autoComplete="off" aria-describedby="destination-help"/></label>
        <p id="destination-help" className="quote-help">No destination address yet? A city and country is enough to start.</p>
      </div>}
      {step === 1 && <div className="quote-fields">
        <label htmlFor="move-date">Moving date <span>(required)</span><Input id="move-date" type="date" value={details.date} onChange={e=>update("date",e.target.value)} required/></label>
        <div><label id="move-size-label" htmlFor="move-size">Moving size <span>(required)</span></label><Select value={details.size} onValueChange={value=>{update("size",value);setError("");}}><SelectTrigger id="move-size" aria-labelledby="move-size-label" className="quote-select"><SelectValue placeholder="Select your moving size"/></SelectTrigger><SelectContent className="quote-size-menu" position="popper" align="start" sideOffset={6} collisionPadding={16}>{sizes.map(size=><SelectItem className="quote-size-option" key={size} value={size}>{size}</SelectItem>)}</SelectContent></Select></div>
        {smallMove && <section className="inventory" aria-labelledby="inventory-title">
          <div className="inventory-heading"><h4 id="inventory-title">Your item list</h4><span>{inventoryItems.length} items available</span></div>
          <p className="quote-help">Add everything you’re moving, then set the quantities. Volumes are estimates per item.</p>
          <label htmlFor="inventory-search">Find an item<Input id="inventory-search" type="search" placeholder="Try sofa, bed or carton" value={search} onChange={e=>setSearch(e.target.value)} /></label>
          <ul className="inventory-catalog" aria-label="Available inventory items">{matches.map(entry=><li key={entry.item}><div><strong>{entry.item}</strong><span>{entry.volumeM3.toFixed(2)} m³ each</span></div><button type="button" className="inventory-add" aria-label={`Add ${entry.item}`} disabled={(quantities[entry.item]??0)>=999} onClick={()=>changeQuantity(entry.item,(quantities[entry.item]??0)+1)}><Plus size={16}/><span>Add</span></button></li>)}</ul>
          {!matches.length && <p className="quote-help">No matching items. Try another name or describe the item in your notes.</p>}
          {selected.length > 0 && <ul className="inventory-selected" aria-label="Selected inventory">{selected.map(entry=><li key={entry.item}><div><strong>{entry.item}</strong><span>{(Math.round(entry.volumeM3*100)*quantities[entry.item]/100).toFixed(2)} m³</span></div><label><span className="sr-only">Quantity of {entry.item}</span><Input type="number" min={0} max={999} step={1} value={quantities[entry.item]} onChange={e=>changeQuantity(entry.item,Number(e.target.value))}/></label><button type="button" className="inventory-remove" aria-label={`Remove ${entry.item}`} onClick={()=>changeQuantity(entry.item,0)}><Trash2 size={17}/></button></li>)}</ul>}
          <div className="inventory-total" role="status" aria-live="polite"><span>Estimated volume</span><strong>{total.toFixed(2)} <small>m³</small></strong></div>
          <p className="quote-help">Final shipping volume will be confirmed after review of your belongings and packing needs.</p>
        </section>}
        <label htmlFor="move-notes">Additional notes <span>(optional)</span><Textarea id="move-notes" value={details.notes} onChange={e=>update("notes",e.target.value)} maxLength={4000} placeholder="Anything else we should know? Include items you couldn’t find."/></label>
      </div>}
      {step === 2 && <div className="quote-fields">
        <div className="quote-summary"><strong>{details.from} → {details.to}</strong><span>{details.date} · {details.size}</span>{smallMove && <><span>{selected.reduce((sum,item)=>sum+quantities[item.item],0)} items · {total.toFixed(2)} m³ estimated</span><details><summary>View your full inventory</summary><ul>{selected.map(entry=><li key={entry.item}>{quantities[entry.item]} × {entry.item} — {(Math.round(entry.volumeM3*100)*quantities[entry.item]/100).toFixed(2)} m³</li>)}</ul></details></>}</div>
        <label htmlFor="quote-name">Name <span>(required)</span><Input id="quote-name" autoComplete="name" value={details.name} onChange={e=>update("name",e.target.value)} required maxLength={150}/></label>
        <label htmlFor="quote-phone">Phone <span>(required)</span><Input id="quote-phone" type="tel" autoComplete="tel" placeholder="Include country code" value={details.phone} onChange={e=>update("phone",e.target.value)} required maxLength={50}/></label>
        <label htmlFor="quote-email">Email <span>(required)</span><Input id="quote-email" type="email" autoComplete="email" value={details.email} onChange={e=>update("email",e.target.value)} required maxLength={254}/></label>
        <p id="quote-preview-note" className="quote-preview-note">Preview only: quote requests aren’t being sent yet.</p>
      </div>}
      <div className="quote-actions">{step > 0 && <button type="button" className="quote-back" onClick={()=>{setStep(step-1);setError("");}}><ArrowLeft size={16}/>Back</button>}{step < 2 ? <button type="submit" className="quote-next">{step===0?"Move details":"Contact details"}<ArrowRight size={17}/></button> : <button type="button" className="quote-next" disabled aria-describedby="quote-preview-note">Submit quote request</button>}</div>
    </form>
  </section>;
}
