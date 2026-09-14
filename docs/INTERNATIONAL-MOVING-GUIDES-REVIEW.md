# International moving guides: content integration review

Reviewed 13 September 2026. Source: user-supplied `international-moving-guides.md.pdf`, eight guides. The supplied document is an editorial source, not evidence that IMC operates its own facilities, has a particular customer history, or offers specific tariffs. Source file remains in the user's attachments.

## What contributes useful information

The document moves beyond generic advice by explaining mechanisms: who consolidates freight, how a billing unit changes the quantity charged, which event starts a storage allowance, how access introduces transfers, and why inventory and valuation records differ. We incorporated these mechanisms into relevant existing pages rather than publishing eight overlapping articles.

| Source guide | Integration | Evidence boundary |
| --- | --- | --- |
| Choosing your shipping service | Shared-container page compares household consolidation, general-freight LCL and sole use; air guide covers split shipments | No universal volume cut-offs, comparative price guarantees or door-to-door ranges |
| LCL and groupage | Expanded shared-container page with handling chain, billing units and five written questions | Terms overlap in practice. No assertion all groupage is household-only or LCL means poor handling |
| Sole use containers | Direct-loading vs warehouse/vehicle-transfer comparison | No promise of unopened seals, universally fewer handling points, guaranteed savings in weeks, fixed usable capacities or bedroom fit |
| Air freight | New single-piece calculator, three worked scenarios and tariff caveats | Default 6,000 is illustrative, not an IMC tariff. No universal density, acceptance or price claim |
| Volume, weight and net weight | Expanded volume and quote comparison pages | Unit conversion distinguished from density estimates. No blanket North American legal entitlement or 110% rule presented as global law |
| Packing standards | ISPM 15 introduction with IPPC source; preparation for moisture, soil and uncertain contents | No unverified IMC certification, materials policy or universal cargo prohibition; no blanket owner-packed coverage exclusion |
| Advice nobody gives you | Additional-quantity rates, destination exclusions, access transfers and free-time questions | No alleged proprietary case history, fixed free days, universal cheapest storage, absolute payment advice or electrical compatibility claims |
| Common mistakes | Homepage decision links and linked inventory/valuation/delivery records | No guaranteed claims outcome, automatic customs penalty or insurance cover conclusion |

## Concrete additions

- `/guides/air-freight-chargeable-weight/`: actual vs volumetric weight, editable packed dimensions and divisor, formula displayed adjacent to result, limits explicit.
- `/services/shared-container/`: comparison and questions that distinguish the actual consolidation service behind the name.
- `/services/full-container/`: direct load versus warehouse and destination transfers.
- `/services/packing/`: raw/processed wood distinction and questions for the packing provider; preparation for moisture and inspection.
- `/guides/comparing-international-moving-quotes/`: billing units, packaging basis, additional quantity and destination/access exclusions.
- `/guides/international-moving-times/`: separate charge clocks, last-free-day questions, and receiving dependencies.
- `/guides/delivery-day/`: shipment inventory vs valuation list vs delivery record.
- `/guides/estimating-moving-volume/`: measurement units versus chargeable weight and density assumptions.
- Homepage and guide directory: entry points to these practical distinctions. Both sitemaps list the one new guide. Existing WebPage/Breadcrumb structured data derives from its actual title and introduction.

## Calculation specification

One rectangular packed piece. Positive finite length/width/height in cm, packed actual mass in kg and divisor in cm³/kg. Volume = L×W×H / 1,000,000 m³. Volumetric mass = L×W×H / divisor kg. Comparison weight = max(actual, volumetric). Display to two decimal places without imposing commercial tariff rounding. Empty, zero, negative and non-finite inputs show no result. Multipiece tariffs, minimums, carrier rounding and cargo acceptance are excluded.

60×50×40 cm = 0.12 m³. At divisor 6,000, volumetric mass = 20 kg; actual 8 kg gives comparison 20 kg. Divisor 5,000 gives 24 kg. Actual 28 kg with divisor 6,000 gives comparison 28 kg. These are transparent illustrative calculations, not customer data or quotes.

## Reference checks

- DHL Aviation, actual-versus-volumetric comparison: https://aviationcargo.dhl.com/business-tools/volume-calculator
- Maersk, general LCL consolidation model: https://www.maersk.com/transportation-services/ocean-transport/lcl
- IPPC, ISPM 15 scope: https://www.ippc.int/en/publications/640/

Links support specific explanations, not IMC affiliation. Failed or inaccessible alternative URLs were not cited. Country-specific customs, insurance, consumer-law and dangerous-goods details were not generalised from the source.

## Next evidence opportunity

To produce original operational evidence, obtain permissioned, anonymised real examples with route, dates, inventory version, measurement basis, service scope and outcome. Do not manufacture examples as real cases or put expert-review credit on these pages before Warwick or Maiane has actually reviewed them. No assertion that this content is absent from Google's index or that it earns a measurable information-gain score.
