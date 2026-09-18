import { Graphic } from "./moving-graphics";
import { inventoryItems } from "./inventory-data";

// Every volume below is computed from the owner-supplied per-item list in
// inventory-data.ts at build time, so a change to that list moves the figures
// rather than leaving a hand-typed number behind to drift.
const volumes = new Map<string, number>(inventoryItems.map(entry => [entry.item, entry.volumeM3]));

type Line = [item: string, quantity: number];

function count(lines: Line[]) {
  return lines.reduce((sum, [, quantity]) => sum + quantity, 0);
}

function total(lines: Line[]) {
  return lines.reduce((sum, [item, quantity]) => {
    const each = volumes.get(item);
    // A renamed inventory item would otherwise silently reduce the total.
    if (each === undefined) throw new Error(`Unknown inventory item: ${item}`);
    return sum + each * quantity;
  }, 0);
}

// Illustrative households, not survey findings. They exist so the arithmetic is
// visible: the reader can price their own list against the same per-item figures.
const households: { label: string; lines: Line[] }[] = [
  {
    label: "One-bedroom flat",
    lines: [["Bed Double", 1], ["Bedside Cab", 2], ["Chest of Drawer", 1], ["2 Seater", 1], ["Arm Chair", 1], ["Coffee Table", 1], ["T.V.", 1], ["T.V. Cabinet", 1], ["Table", 1], ["Chairs", 4], ["Refrigerator", 1], ["Washing Machine", 1], ["Bookcase", 1], ["Large Carton", 15], ["Small Carton", 20]],
  },
  {
    label: "Two-bedroom house",
    lines: [["Bed Double", 1], ["Bed Single", 1], ["Bedside Cab", 3], ["Chest of Drawer", 2], ["Dresser", 1], ["3 Seater", 1], ["Arm Chair", 2], ["Coffee Table", 1], ["T.V.", 1], ["T.V. Cabinet", 1], ["Wall Unit", 1], ["Table", 1], ["Chairs", 6], ["Refrigerator", 1], ["Washing Machine", 1], ["Clothes Dryer", 1], ["Bookcase", 2], ["Desk", 1], ["Computer", 1], ["Rugs", 2], ["Pictures", 4], ["Large Carton", 30], ["Small Carton", 40]],
  },
  {
    label: "Four-bedroom home",
    lines: [["Bed King", 1], ["Bed Double", 1], ["Bed Single", 2], ["Bedside Cab", 5], ["Chest of Drawer", 3], ["Dresser", 2], ["3 Seater", 1], ["2 Seater", 1], ["Arm Chair", 2], ["Coffee Table", 2], ["T.V.", 2], ["T.V. Cabinet", 1], ["Wall Unit", 1], ["Display Cabinet", 1], ["Sideboard", 1], ["Table", 1], ["Chairs", 8], ["Refrigerator", 1], ["Washing Machine", 1], ["Clothes Dryer", 1], ["Dishwasher", 1], ["Bookcase", 3], ["Desk", 2], ["Computer", 2], ["Piano", 1], ["Outdoor Table", 1], ["Outdoor Chairs", 6], ["BBQ", 1], ["Lawn Mower", 1], ["Garden Tools", 2], ["Bike", 3], ["Rugs", 4], ["Pictures", 8], ["Large Carton", 60], ["Small Carton", 80]],
  },
];

// Nominal internal capacities for standard dry containers. These are the
// published box volumes, not a loading plan: packed household goods never
// occupy the full figure.
const containers = [
  { label: "20 ft", capacity: 33.2 },
  { label: "40 ft", capacity: 67.7 },
  { label: "40 ft HC", capacity: 76.3 },
];

const SCALE_MAX = 80;
const X0 = 232;
const X1 = 938;
const px = (cubicMetres: number) => X0 + (cubicMetres / SCALE_MAX) * (X1 - X0);

export function HouseholdVolumeScale() {
  const rows = households.map(house => ({ ...house, cubicMetres: total(house.lines), items: count(house.lines) }));
  return <Graphic
    title="What a household actually measures, against what a container holds"
    caption="Illustrative households priced with IMC's own per-item volumes; they are worked examples, not survey findings or typical-customer data. Container figures are nominal internal capacity for a standard dry box — packed goods never occupy the full volume, so usable space is lower. Bars share one zero baseline. Your assessed inventory sets your volume."
  >
    <svg viewBox="0 0 960 366" role="img" aria-label={`Shipment volume against container capacity. ${rows.map(r => `${r.label}: ${r.cubicMetres.toFixed(2)} cubic metres`).join(". ")}. Nominal internal capacity: 20 foot container 33.2, 40 foot 67.7, 40 foot high cube 76.3 cubic metres.`}>
      {/* The span where the arrangement is genuinely open: too much for a
          comfortable part load, not enough to fill a 40 ft box. */}
      <rect x={px(20)} y="50" width={px(50) - px(20)} height="206" fill="#f1f6f5" />
      <text x={(px(20) + px(50)) / 2} y="40" textAnchor="middle" className="svg-detail" fill="#116a78" fontWeight="700" letterSpacing="1.1">DECIDED BY ASSESSMENT, NOT BY VOLUME ALONE</text>

      {rows.map((row, i) => {
        const y = 66 + i * 62;
        const end = px(row.cubicMetres);
        return <g key={row.label}>
          <text x="212" y={y + 20} textAnchor="end" fontSize="16" fontWeight="600">{row.label}</text>
          <text x="212" y={y + 40} textAnchor="end" className="svg-detail" fill="#526572">{row.items} items</text>
          <rect x={X0} y={y} width={end - X0} height="34" fill="#167d8d" />
          <text x={end + 12} y={y + 24} fontSize="17" fontWeight="600" fill="#142d3b">{row.cubicMetres.toFixed(2)} m³</text>
        </g>;
      })}

      {/* Drawn after the bars so a bar that overruns a capacity reads as one. */}
      {containers.map(box => <g key={box.label}>
        <line x1={px(box.capacity)} y1="50" x2={px(box.capacity)} y2="318" stroke="#142d3b" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x={px(box.capacity)} y="336" textAnchor="middle" fontSize="15" fontWeight="600">{box.label}</text>
        <text x={px(box.capacity)} y="356" textAnchor="middle" className="svg-detail" fill="#526572">{box.capacity} m³</text>
      </g>)}

      <line x1={X0} y1="256" x2={X1} y2="256" stroke="#142d3b" strokeWidth="1.5" />
      {[0, 20, 40, 60, 80].map(tick => <g key={tick}>
        <line x1={px(tick)} y1="256" x2={px(tick)} y2="263" stroke="#142d3b" strokeWidth="1.5" />
        <text x={px(tick)} y="280" textAnchor="middle" className="svg-detail" fill="#526572">{tick}</text>
      </g>)}
      <text x={X0} y="304" className="svg-detail" fill="#526572">Shipment volume (m³) →</text>
    </svg>
  </Graphic>;
}

// The three regions below are a structure for the conversation with a mover,
// not a customs ruling: what is conditional and what is refused changes by
// destination, by carrier and over time.
export function HouseholdGoodsBoundary() {
  return <Graphic
    title="“Household goods” is a category, not just a description"
    caption="A set diagram, not a customs ruling. The conditional band deliberately straddles the boundary: those items can travel, but only with their own declaration, and some destinations refuse them outright. Every destination publishes its own rules and they change — confirm yours in writing before packing rather than after."
  >
    <svg viewBox="0 0 960 392" role="img" aria-label="Used household and personal effects sit inside the household goods category. A conditional band straddles the boundary: vehicles, alcohol and tobacco, firearms, plants, seeds and food, and high-value items, each needing its own declaration. Outside the category sit hazardous goods, anything the destination prohibits, and documents and valuables you should carry yourself.">
      <rect x="24" y="56" width="596" height="300" rx="4" fill="#f6f8f8" stroke="#167d8d" strokeWidth="2" />
      <text x="44" y="42" fontSize="17" fontWeight="600" fill="#116a78">INSIDE THE SHIPMENT</text>

      <rect x="52" y="104" width="352" height="222" rx="3" fill="#142d3b" />
      <text x="76" y="140" fontSize="17" fontWeight="600" fill="#ffffff">Used household and</text>
      <text x="76" y="164" fontSize="17" fontWeight="600" fill="#ffffff">personal effects</text>
      {["Furniture, beds and soft furnishings", "Cartons: kitchenware, books, clothing", "Domestic appliances, emptied and dry", "Rugs, pictures, lamps and small items"].map((line, i) =>
        <text key={line} x="76" y={200 + i * 29} className="svg-detail" fill="#bcd4d8">{line}</text>)}

      <rect x="424" y="128" width="332" height="176" rx="3" fill="#ffffff" stroke="#167d8d" strokeWidth="2" strokeDasharray="7 5" />
      <text x="448" y="162" fontSize="16" fontWeight="600" fill="#116a78">Conditional — each needs</text>
      <text x="448" y="184" fontSize="16" fontWeight="600" fill="#116a78">its own declaration</text>
      {["Vehicles, motorcycles, boat trailers", "Alcohol, tobacco, firearms", "Plants, seeds, foodstuffs", "High-value art, jewellery, antiques"].map((line, i) =>
        <text key={line} x="448" y={214 + i * 24} className="svg-detail" fill="#526572">{line}</text>)}
      <text x="590" y="326" textAnchor="middle" className="svg-detail" fill="#116a78" fontWeight="600">Crosses the boundary on purpose</text>

      <rect x="784" y="104" width="152" height="222" rx="3" fill="#eef1f2" stroke="#526572" strokeWidth="1.5" />
      <text x="806" y="42" fontSize="17" fontWeight="600" fill="#526572">OUTSIDE IT</text>
      {["Aerosols, paints,", "gas cylinders, fuels", "", "Anything the", "destination prohibits", "", "Passports, deeds,", "medication — carry", "these yourself"].map((line, i) =>
        <text key={i} x="806" y={142 + i * 21} className="svg-detail" fill="#526572">{line}</text>)}

      <text x="24" y="382" className="svg-detail" fill="#526572">Areas are diagrammatic. They show category membership, not volume, value or effort.</text>
    </svg>
  </Graphic>;
}

const custody = [
  { holder: "You", span: 152, detail: "Deciding and listing" },
  { holder: "Origin crew", span: 182, detail: "Packing and collection" },
  { holder: "Carrier", span: 216, detail: "Vessel or aircraft" },
  { holder: "Destination agent", span: 188, detail: "Release and delivery" },
  { holder: "You", span: 152, detail: "Receiving and checks" },
];

// Laid out once at module scope: the sequence is fixed, so there is nothing to
// recompute per render.
const segments = custody.reduce<{ holder: string; span: number; detail: string; x: number }[]>(
  (placed, part) => [...placed, { ...part, x: placed.length ? placed[placed.length - 1].x + placed[placed.length - 1].span : 30 }],
  [],
);
const end = segments[segments.length - 1].x + segments[segments.length - 1].span;

export function CustodyAndRecords() {
  return <Graphic
    title="Your belongings change hands. One record has to follow them."
    caption="An order-of-custody diagram: segment widths show sequence, not duration, distance or cost. The records named are the ones a household-goods shipment normally generates; your written quotation should say who produces each and when you receive a copy. Where a stage is subcontracted, the record is what carries your shipment's identity across the handoff."
  >
    <svg viewBox="0 0 960 336" role="img" aria-label="Custody of the shipment passes from you, to the origin crew, to the carrier, to the destination agent, and back to you. Four handoffs sit between them. The inventory and packing list govern the origin stages, the bill of lading or air waybill governs transport, and the delivery record governs receipt. The inventory spans the whole move.">
      <text x="30" y="40" className="svg-detail" fill="#526572" fontWeight="700" letterSpacing="1.1">WHO HOLDS THE SHIPMENT</text>
      {segments.map((part, i) => <g key={i}>
        <rect x={part.x} y="58" width={part.span - 6} height="64" fill={i === 0 || i === segments.length - 1 ? "#dfeaea" : "#142d3b"} />
        <text x={part.x + (part.span - 6) / 2} y="90" textAnchor="middle" fontSize="16" fontWeight="600" fill={i === 0 || i === segments.length - 1 ? "#142d3b" : "#ffffff"}>{part.holder}</text>
        <text x={part.x + (part.span - 6) / 2} y="111" textAnchor="middle" className="svg-detail" fill={i === 0 || i === segments.length - 1 ? "#526572" : "#bcd4d8"}>{part.detail}</text>
      </g>)}

      {segments.slice(1).map((part, i) => <g key={i}>
        <path d={`M${part.x - 3} 126 l7 0 l-3.5 12 z`} fill="#167d8d" />
        <text x={part.x - 3} y="156" textAnchor="middle" className="svg-detail" fill="#116a78" fontWeight="600">handoff</text>
      </g>)}

      <text x="30" y="196" className="svg-detail" fill="#526572" fontWeight="700" letterSpacing="1.1">WHAT GOVERNS IT THERE</text>
      {[
        { from: 0, to: 2, label: "Inventory and packing list", sub: "Item-by-item, with condition noted" },
        { from: 2, to: 3, label: "Bill of lading or air waybill", sub: "The transport contract" },
        { from: 3, to: 5, label: "Delivery record", sub: "Checked against the inventory" },
      ].map(rail => {
        const a = segments[rail.from].x;
        const b = rail.to === segments.length ? end : segments[rail.to].x;
        return <g key={rail.label}>
          <rect x={a} y="212" width={b - a - 6} height="52" fill="#ffffff" stroke="#167d8d" strokeWidth="1.5" />
          <text x={a + 16} y="234" fontSize="15" fontWeight="600" fill="#116a78">{rail.label}</text>
          <text x={a + 16} y="254" className="svg-detail" fill="#526572">{rail.sub}</text>
        </g>;
      })}

      <rect x="30" y="282" width={end - 36} height="34" fill="#167d8d" />
      <text x={(30 + end - 6) / 2} y="304" textAnchor="middle" fontSize="15" fontWeight="600" fill="#ffffff" letterSpacing=".4">ONE INVENTORY — THE ONLY RECORD THAT SPANS EVERY HANDOFF</text>
    </svg>
  </Graphic>;
}

export const householdVolumes = households.map(house => ({ label: house.label, cubicMetres: total(house.lines), items: count(house.lines) }));
export const containerCapacities = containers;
