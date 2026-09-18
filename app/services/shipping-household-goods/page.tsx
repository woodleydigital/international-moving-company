import { ContentShell, DecisionTable } from "../../content-shell";
import { HouseholdVolumeScale, HouseholdGoodsBoundary, CustodyAndRecords, householdVolumes, containerCapacities } from "../../household-goods-graphics";

export const metadata = {
  title: "Shipping Household Goods Internationally | IMC",
  description: "What a household measures in m³ against container capacity, what the household-goods category actually covers, who holds your shipment at each handoff and which record follows it.",
};

// Quoted in the prose so the sentences cannot drift from the figures: both read
// the same computed values.
const [oneBed, twoBed, fourBed] = householdVolumes;
const twentyFoot = containerCapacities[0].capacity;
const fortyFoot = containerCapacities[1].capacity;
const fmt = (n: number) => n.toFixed(2);

export default function ShippingHouseholdGoods() {
  return <ContentShell
    path="/services/shipping-household-goods/"
    category="Household goods"
    title="Shipping household goods internationally."
    intro="Your belongings become a measured shipment, a customs category and a chain of handoffs. This page covers all three: what a household measures against what a container holds, what the household-goods category includes and excludes, and which record has to follow your things across every change of hands."
    related={[
      { href: "/guides/estimating-moving-volume/", label: "Measure your own inventory" },
      { href: "/services/shared-container/", label: "Compare shared-container moving" },
      { href: "/guides/comparing-international-moving-quotes/", label: "Compare quotations properly" },
    ]}
  >

    <section>
      <h2>Volume decides more than price</h2>
      <p>One number governs the whole shipment: the volume of your inventory in cubic metres. It sets which transport arrangements are available, what a quotation is measuring, and whether two quotations can be compared at all. Establish it before anything else.</p>
      <HouseholdVolumeScale />
      <p>The bars are priced with the per-item volumes IMC uses in its own inventory picker, so the arithmetic is checkable rather than asserted. A one-bedroom flat of {oneBed.items} listed items comes to <strong>{fmt(oneBed.cubicMetres)}&nbsp;m³</strong>, roughly a third of a 20&nbsp;ft container. A four-bedroom home reaches <strong>{fmt(fourBed.cubicMetres)}&nbsp;m³</strong> — over the {twentyFoot}&nbsp;m³ a 20&nbsp;ft box nominally holds, and well under the {fortyFoot}&nbsp;m³ of a 40&nbsp;ft one.</p>
      <p>That gap is the useful part. Two of the three worked households land in the shaded span, where volume on its own settles nothing: a shipment of {fmt(twoBed.cubicMetres)}&nbsp;m³ can travel as a part load or take a 20&nbsp;ft container, and the sensible answer depends on the route, the sailing schedule, the minimum charge and how firm your dates are. A quotation that names an arrangement without naming the assessed volume behind it has skipped this step.</p>
      <p>Nominal capacity is also not usable capacity. Packed furniture does not tessellate, cartons stack to fixed heights, and a loading plan leaves gaps the box volume does not. Treat the dashed rules as an upper bound, never a target. <a href="/guides/estimating-moving-volume/">Work through your own inventory</a>, or use the item picker in <a href="/get-a-quote/">the enquiry form</a>.</p>
    </section>

    <section>
      <h2>What the category actually covers</h2>
      <p>&ldquo;Household goods&rdquo; is not only a description of your belongings — it is the classification your shipment travels and clears under, usually as used household and personal effects. The classification is what determines the documents required, so the items sitting near its edge cause most of the delays.</p>
      <HouseholdGoodsBoundary />
      <p>The conditional band is drawn across the boundary deliberately. A vehicle, a wine collection, a firearm, a houseplant or a piece of antique furniture can often travel — but each is declared, documented and sometimes charged separately, and some destinations refuse some of them outright. None of this is decided by whether the item fits in the container.</p>
      <p>Two practical consequences. First, declare edge items at the assessment rather than at collection: a crew finding an unlisted moped on the driveway cannot solve it that morning. Second, ask for the destination&rsquo;s requirements in writing against your actual list, because they vary by country and change over time. Anything in the outside column should never enter the shipment at all — aerosols, paints, gas cylinders and fuels are refused by carriers, and passports, deeds and medication should stay with you.</p>
    </section>

    <section>
      <h2>Choosing how the shipment travels</h2>
      <p>Four arrangements cover most household-goods moves. Assess all of them against the same inventory: the comparison is meaningless otherwise, and the cheapest headline usually belongs to the arrangement with the narrowest scope.</p>
      <DecisionTable
        caption="Arrangements, and what each one turns on"
        headings={["Arrangement", "What it suits", "What to establish before choosing"]}
        rows={[
          ["Shared container (groupage, LCL)", `Shipments comfortably under a container load — the ${fmt(oneBed.cubicMetres)} m³ example sits here`, "Consolidation waiting time, the volume basis, the minimum charge, and whether it is a household-removal service or general freight"],
          ["Part load", "A shipment sharing a sole-use container on a known route", "Which other shipment shares the box, and whose schedule sets departure"],
          ["Sole-use 20 ft", `Households approaching ${twentyFoot} m³ nominal, or any move needing its own schedule`, "Whether the assessed volume genuinely fits once packed, and what unused space costs you"],
          ["Sole-use 40 ft", `Larger households — the ${fmt(fourBed.cubicMetres)} m³ example needs one despite filling only part of it`, "Whether a 20 ft plus a part load would serve better, priced against the same inventory"],
          ["Air freight", "A small, time-critical subset travelling ahead of the sea shipment", "Chargeable weight rather than volume, and what the split does to the main inventory"],
        ]}
      />
      <p>Air freight is priced on a different basis entirely — <a href="/guides/air-freight-chargeable-weight/">chargeable weight compares actual weight against volumetric weight</a> and bills the greater. A sea quotation in cubic metres and an air quotation in kilogrammes are not comparable figures, and splitting a shipment across both changes the volume the sea quotation was based on.</p>
      <p>Read the two container arrangements in detail: <a href="/services/shared-container/">shared-container moving and groupage</a>, or <a href="/services/full-container/">a sole-use container</a>.</p>
    </section>

    <section>
      <h2>Your belongings change hands. Records are what follow them.</h2>
      <p>Between your front door and your new one, the shipment passes through several sets of hands, some of them subcontracted. You will not witness most of these handoffs. What crosses each one is paperwork, which is why the inventory matters more than any single company in the chain.</p>
      <CustodyAndRecords />
      <p>The inventory is the only record present at both ends. It is what a delivery check is made against, what a claim refers to, and what tells anyone in the chain whether a carton is yours. Have it itemised with condition noted, keep your own copy, and check the delivery record against it while the crew is still there rather than afterwards.</p>
      <p>Ask who performs each stage before booking, not after. A door-to-door price describes the start and finish of the move; it does not by itself say who packs, who loads, who handles the shipment at the destination port, or who you contact when a date moves. <a href="/how-it-works/">The stage-by-stage process</a> sets out the records to hold at each handoff.</p>
    </section>

    <section>
      <h2>Making two quotations comparable</h2>
      <p>Most household-goods quotations are not directly comparable, and the differences are rarely in the shipping rate. They are in what each one assumes.</p>
      <ul>
        <li><strong>One inventory, issued to everyone.</strong> A quotation based on a walkthrough and one based on your list are measuring different shipments. Send the same itemised list to each company and ask which volume they assessed.</li>
        <li><strong>Packing scope, stated per item.</strong> &ldquo;Packing included&rdquo; can mean a full pack, or cartons delivered for you to fill. Ask which items the crew packs and which you prepare.</li>
        <li><strong>Both ends, not just the sailing.</strong> Access at collection and delivery, stairs, parking, long carries and any shuttle vehicle are where unlisted charges appear.</li>
        <li><strong>Destination charges, named and priced.</strong> Ask which destination costs are in the total, which are estimated, and which are excluded entirely.</li>
        <li><strong>Validity and the assumptions behind it.</strong> A price holds against a stated volume, a stated date range and a stated scope. Get all three in writing.</li>
        <li><strong>Protection arrangements.</strong> Cover is separate from the moving price, and what it requires of your inventory and packing differs between arrangements.</li>
      </ul>
      <p>Work the comparison through with <a href="/guides/comparing-international-moving-quotes/">the quotation comparison guide</a>, and see <a href="/international-moving-costs/">what drives the cost of an international move</a>.</p>
    </section>

    <section>
      <h2>What the dates mean</h2>
      <p>Collection, departure, arrival, release and delivery are five separate milestones, and a transit estimate usually describes only the middle one. A vessel arriving is not a shipment released, and a shipment released is not a delivery appointment.</p>
      <p>When you ask for timing, ask which milestone the estimate covers and what has to happen between it and the day your belongings are in the house. <a href="/guides/international-moving-times/">How international moving times are built up</a> separates them, and <a href="/guides/delivery-day/">preparing for delivery day</a> covers the last one.</p>
    </section>

  </ContentShell>;
}
