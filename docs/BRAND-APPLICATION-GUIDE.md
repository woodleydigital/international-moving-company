# IMC brand application guide

Applied 14 September 2026 to the private website preview. Source: the user-supplied, 16-page `Branding_and_Logo_Design_Research_Guide(1).pdf`, read in full. The source provides research and design guidance; it does not certify this identity or predict commercial performance. Preserve the original attachment.

## Positioning and message order

**Audience:** individuals and families arranging an international household move, including a new job, family relocation or return home. These are useful buying-situation examples, not findings from IMC customer research.

**Offer:** worldwide door-to-door relocation management, with a shipment-specific scope and clear responsibilities.

**Working promise:** “Your international move, clearly managed.” The homepage expresses this as “International moving. Clearly managed.” Follow the headline immediately with what IMC manages: collection, international transport and home delivery. Clear communication should also be reflected in the actual enquiry and service experience.

**Support:** user-supplied Warwick and Maiane career backgrounds; explicit service guidance; working planning tools with transparent assumptions. Do not imply owned fleets, warehouses, partner accreditation, response times or guaranteed outcomes. A personal career credential is not IMC's corporate history.

**Hierarchy:** name and service → useful outcome → evidence → action. Keep the desktop enquiry panel on the right. Invite people to “Plan your move”; do not promise an instant quotation while the form is only gathering a brief.

## A small, repeated identity

- Pair the existing IMC lettermark with the visible full name. IMC is still a developing identifier; do not assume the initials are already recognised.
- Use International Moving Company (IMC) at the first substantive introduction; use IMC naturally afterwards. Do not repeat the exact-match name mechanically.
- Keep the selected doorway-in-M artwork and the established navy, teal, ivory and slate palette.
- Use a restrained open-corner rule in selected introductions and a teal top rule on diagrams and the enquiry panel. These are supporting geometric cues, not additional logos or evidence of recognition.
- Keep Georgia for editorial headings and Arial for body/interface roles as defined in `app/typography.css`. Use tabular numerals in quantity and comparison outputs.
- Shared name, promise, action label and navigation are maintained in `app/brand-system.ts`; the header and logo placement live in `app/site-identity.tsx`.

## Logo application

The selected original raster board is displayed at the existing primary-mark crop and original proportions; it has not been redrawn or generatively altered. HTML text pairs it with the company name. The footer places the unchanged mark on an ivory background so navy artwork is not lost on a navy surface.

Current website sizes: mark 108 CSS pixels wide on desktop, 64 on small-screen headers, 80 on small-screen footers at default settings. These are implementation settings, not research-validated minimum sizes. Name text is 14px at default settings and remains visible at every breakpoint. Clear separation is provided by a gap and divider; at narrow widths the header wraps rather than hiding the full name. The full name is also present in the home link's accessible name.

Available raster files: `public/imc-mark.webp` (328 x 126, lossy WebP) is what the site serves. `public/imc-mark.png` (656 x 252, 8-bit RGBA, fully opaque — it carries an alpha channel but no transparency) is an export of that same file at twice its display size, for screen work that cannot take WebP. The PNG preserves the WebP's pixels rather than recovering detail, and is not a master; do not enlarge it beyond its pixel size or use it for print, one-colour or reversed treatments.

The existing favicon is retained. It embeds raster artwork; it is not a vector master. A production vector master, optically tested compact/one-colour/reversed variants and physical print proofs remain separate production work. Do not relabel an embedded bitmap as scalable vector artwork or claim rights/clearance from generation alone. Do not add trade mark symbols without an appropriate basis.

The applied identity is published as an internal, non-indexed reference at `/brand/` (`app/brand/page.tsx`). It mirrors this document and takes its measurements from the live stylesheets; update both together.

## Colour roles

| Role | Colour | Application |
| --- | --- | --- |
| Ink | #142D3B | Text, major surfaces, identity |
| Accent | #167D8D | Primary actions, connectors, selected rules |
| Action hover | #116A78 | Darker companion for an action state |
| Paper | #F6F3ED | Quiet surface and logo backing |
| Muted text | #526572 | Supporting text on light surfaces |
| Light accent | #A7D2CE | Selected display text on navy |

Calculated solid-colour text contrast ratios: ink/white 14.30:1; ink/ivory 12.91:1; slate/white 6.06:1; slate/ivory 5.48:1; white/teal 4.83:1; white/hover 6.26:1; light accent/navy 8.69:1. These are colour-pair checks, not whole-site conformance. Retain written state labels and patterns alongside colour in scope tools. Do not interpret the palette as scientifically guaranteeing trust or conversions.

## Voice and behaviour

Use calm, direct British/NZ English. Explain what happens, what information is needed and what remains uncertain. Be considerate without making guarantees.

| Situation | Preferred treatment | Avoid |
| --- | --- | --- |
| First introduction | Explain collection, transport and delivery management | “Seamless global solutions” without a service definition |
| Start enquiry | “Start with where you're moving from and to.” | Claims that a price or booking is already being produced |
| Move through form | “Move details”, “Contact details”, “Back” | Ambiguous action labels or manufactured urgency |
| Missing information | Say what is missing and how to provide it | Blame, alarm or unexplained error codes |
| Timing | Explain which milestone is estimated | “Guaranteed smooth arrival” |
| Expert background | Attribute a supplied fact to the named person | Turning previous employers into IMC partners |

The enquiry now submits: it is validated, delivered by email and acknowledged on screen. Confirm what was received and what happens next. Do not promise a response time, and do not invent a contact channel that has not been agreed.

## Layout, imagery and information design

Use consistent navigation labels and the same logo/name relationship across homepage and inner pages. Mobile navigation remains visible and may wrap. Major actions use the same teal treatment; secondary links remain quieter.

Use spacing tokens (8, 16, 24, 32, 48px at default settings) for the new identity components. The central typography system remains authoritative; do not introduce a new page-specific font scale. Preserve clear adjacent paragraphs, diagram labels and captions. Do not add an image solely to make a page feel branded.

Keep Warwick's supplied portrait and the existing profile facts. The earlier generated arrival image must not be presented as a real IMC move if reused. No invented team photograph, customer story or badge. Proposed future photography should show permissioned people and real work, with the relevant explanation nearby.

Reduced-motion preference disables decorative transitions/animation and smooth scrolling. Label numeric comparisons and preserve their measurement assumptions.

## Source coverage and decisions

| Source section | Application to IMC |
| --- | --- |
| 1. Strategy | Clear management proposition and example buying situations |
| 2. Distinctive assets | Retain the logo; pair initials with the full name on mobile |
| 3. Logo research | No universal claims that simplicity, descriptiveness or colour improves sales |
| 4. Craft | Preserve proportions; set placement, spacing and background rules; document production limits |
| 5. Typography | Retain the central Georgia/Arial roles and readable numeric figures |
| 6. Colour/accessibility | Check approved pairs, retain redundant state labels and add reduced-motion support |
| 7. Complete system | Shared naming, header, actions, imagery rules and voice examples |
| 8. Established identities | Apply consistency discipline without copying another brand's appearance |
| 9. Testing | Separate implementation checks from customer recognition and task research |
| 10. Handover | Maintain this guide and shared source components; record missing vector/print deliverables |
| 11. Rights and naming | No inference of exclusivity or legal clearance; no change to generic brand-name strategy |
| 12. Rebranding | Refine the existing IMC identity; preserve the agreed separation from legacy domains |
| 13. Scorecard | Record unknown evidence instead of inventing a brand score |

## Verification and remaining evidence

This revision receives a Next.js build, exported-page/navigation checks, unchanged-logo hash check and numerical contrast checks. It does not receive live browser or assistive-technology testing. The Sites managed-preview workflow reserves browser testing for an explicit request; do not present these static checks as visual QA.

Before public launch: check actual 320/375/768/1440 layouts, text enlargement, full keyboard enquiry flow, portrait/mark rendering and reduced-motion behaviour. Ask unfamiliar category buyers to identify the business and service, locate an appropriate guide and start a moving brief. Record confusion and task completion rather than only aesthetic preferences. Test delayed recognition and competitive overlap separately if commissioning brand research.

Brand recognition, commercial impact, production-vector quality, legal clearance and full accessibility remain unmeasured or unfinished. No numerical score has been assigned. The existing legal/contact/backend and public-domain launch requirements still apply; this refinement does not authorise a public launch.
