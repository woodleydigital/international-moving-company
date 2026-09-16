# International Moving Company: brand recognition and search strategy

Prepared 16 September 2026. Planning document for Matthew Woodley, Claude and Codex. Baseline reviewed: GitHub main at `9141278f6f52be50c0088179d0f9c92a60e323e0`, the live homepage and Contact page, current brand guide and structured-data source. Recommendations below are not a record of completed implementation.

## 1. The objective

Make **International Moving Company (IMC)** a recognisable business that prospective customers deliberately seek, trust and recommend. Alongside that, earn visibility for the generic commercial query **international moving company** by satisfying the needs of people choosing a relocation provider.

These are related but separate goals. A generic query can remain a category search even when a business uses those words as its name. Neither an exact-match domain, company registration nor structured data forces Google to interpret that query as a request for IMC. Google describes an exact-match-domain system designed to avoid giving excessive credit to matching domain words. [Google ranking systems](https://developers.google.com/search/docs/appearance/ranking-systems-guide)

Our strategic hypothesis is that consistent identity, useful original work, credible people and genuine external recognition will make IMC easier to recognise and choose. This is a marketing and editorial strategy, not a claimed ranking formula. Do not promise a ranking, Knowledge Panel, site-name display or completion date for brand recognition.

## 2. What we should stand for

**Name:** International Moving Company. **Short name:** IMC. **Public introduction:** International Moving Company (IMC).

**Category:** International relocation management for worldwide door-to-door household removals.

**Promise:** Your international move, clearly managed.

**Practical difference to demonstrate:** the customer can understand what is moving, what work is included, who handles each stage and what remains to be confirmed. The website, assessment, written quotation and communications should express that same discipline.

This promise becomes meaningful through actual operating behaviour. It must not imply that every IMC shipment already receives an unimplemented deliverable, a guaranteed timetable, owned crews or owned warehouses.

Keep the approved doorway-in-M logo, full-name lockup, navy/teal/ivory palette and Georgia/Arial typography. Pair IMC with the full name when introducing the business; use IMC naturally afterwards. Initials alone give a new prospect too little context. Retain the full name in small-screen headers, documents, captions and first introductions.

## 3. Current strengths and gaps

| Evidence reviewed | Current position | Next action |
| --- | --- | --- |
| Homepage identity | Full name and IMC mark are visible; the opening paragraph defines the business | Keep these, strengthen the connection between the name and the promise |
| Homepage headline | “International moving. Clearly managed.” | Proposed H1: “International Moving Company”; retain “Your international move, clearly managed” as the adjacent promise |
| Structured data | Organization, WebSite, Service and Person entities already exist with stable IDs | Extend the existing graph; do not create competing entities or duplicate WebSite nodes |
| Organisation details | Current Organization node contains name, IMC alias, URL and description; no logo or organisation-profile sameAs links | Add the approved logo; add other facts only after verification |
| Social metadata | No `og:site_name` observed on the homepage | Add a consistent site name when implementing the identity update |
| People | Warwick and Maiane are named, with supplied career histories and Person links | Turn their expertise into reviewed, attributed practical material |
| Tools and diagrams | Volume, scope, checklist and chargeable-weight explanations exist | Brand the useful outputs consistently and make their assumptions easy to find |
| Contact page | Still says “Private preview”, submissions disabled and verified contact information missing | Highest priority: reconcile the public copy with actual operational readiness |
| Enquiry implementation | Claude added submission, email and address-autocomplete code | Verify actual delivery/configuration before making availability claims; code existence is not delivery proof |
| External recognition | Not established by this review | Audit genuine company profiles, relevant mentions and customer evidence; do not assume they exist |

The contact inconsistency is particularly damaging to a generic-name brand: a visitor needs to establish that this is a reachable, accountable business. Do not just delete draft notices. Supply the real operator/contact facts, approve the relevant policies and verify the enquiry journey first.

## 4. Consistent identity, with realistic search expectations

Google says site names are selected automatically, considers both homepage content and web references, and discourages generic names unless they are well recognised. WebSite markup communicates a preference; it does not guarantee selection. [Google site-name guidance](https://developers.google.com/search/docs/appearance/site-names)

Use this naming system:

| Context | Recommended treatment |
| --- | --- |
| Visible logo lockup | IMC mark + International Moving Company |
| First substantive mention | International Moving Company (IMC) |
| Later prose | IMC, we or our, as natural |
| Homepage title proposal | International Moving Company (IMC) \| Door-to-Door Removals |
| Company-profile display name | International Moving Company (IMC), where permitted and accurate |
| WebSite / Organization | Keep `name: International Moving Company` and `alternateName: IMC` consistent |
| Social site name | International Moving Company |
| Document attribution | Prepared by International Moving Company (IMC), with the domain and real contact details |
| Expert attribution | Warwick Woodley or Maiane Cassanego, with their actual role in the work |

If Google displays IMC or the domain instead of the full preferred site name, investigate consistency and recognition; do not repeatedly rename the company or stuff additional keywords into the markup.

Retain `https://internationalmoving.company/#organization` as the organisation ID and the corresponding existing WebSite/Person IDs. Add `logo: https://internationalmoving.company/imc-mark.webp` to the existing organisation after validating the asset. Add verified email, telephone, public business address and true legal name as appropriate. Company `sameAs` should identify the company; Warwick's and Maiane's personal profiles belong to their Person entities. Previous employers are not automatically IMC partners or endorsers.

Organisation markup can help clarify identity. Add accurate relevant facts, rather than pursuing the largest possible schema graph. [Google organisation guidance](https://developers.google.com/search/docs/appearance/structured-data/organization)

## 5. Make the homepage a company people can choose

Preserve its useful pillar coverage, right-hand desktop enquiry panel and direct-answer sections. Add evidence where a prospective customer needs it, rather than adding more generic paragraphs.

Recommended early sequence:

1. **Business and offer:** name, promise, concise service definition and enquiry.
2. **Who is accountable:** real people, concise relevant experience, verified contact route and explanation of IMC's management role.
3. **What a clear plan contains:** inventory, service scope, responsibilities, dates/assumptions and outstanding decisions.
4. **Evidence:** a genuinely reviewed planning example or permissioned case, with limitations beside it.
5. **Service decisions:** the existing shipment options, cost considerations, assessment, packing and delivery guidance, linked to their dedicated pages.

Draft opening copy:

> International Moving Company (IMC) manages worldwide door-to-door household removals. We bring collection, international transport and destination delivery into one agreed plan, with the services and responsibilities explained at each stage.

Keep this grounded in the current business proposition. Avoid “best”, “leading”, “trusted by thousands” or claims of a forty-year company history. Warwick's individual experience is not IMC's age.

## 6. Create information that people can attribute to IMC

The strongest opportunity is to turn working knowledge into useful, inspectable outputs. A fresh label on familiar advice is branding, but is not itself information gain. Each asset must add an observation, an original example, a transparent method or a better decision aid.

| Proposed asset | Information it adds | Evidence and publication gate |
| --- | --- | --- |
| **IMC Move Plan** | A sample plan showing inventory assumptions, responsibility at each stage, dependencies and unresolved decisions | Develop a real usable template with Warwick/Maiane; publish as a sample until it is actually used in service delivery |
| **IMC Quote Scope Check** | A side-by-side worked comparison showing how differing inclusions change a decision | Extend the existing tool; use labelled illustrative figures or permissioned real quotes; show arithmetic and uncertainty |
| **IMC Volume Notes** | Packed dimensions, item estimates and explanations of why assessed volume differs from an item list | Retain the supplied inventory's provenance; distinguish estimates, measured examples and confirmed shipment volumes |
| **Warwick's Moving Notes** | Specific judgement: the missing fact that changes packing, access, timing or transport advice | Record an interview, draft faithfully and obtain his review; a displayed reviewer must actually review |
| **Maiane's Planning Notes** | Practical preparation and handover questions from enquiry through arrival | Use her supplied experience, real contributions and approved wording |
| **IMC Move Case Notes** | The brief, constraints, choice, coordination work and observed result of a real move | Permission, accurate attribution and no personal shipment details without consent; no invented cases |

First three editorial briefs:

- “What a moving quotation needs to say about destination delivery.” Begin with the decision, show an annotated scope example and explain what is still unconfirmed.
- “Why the volume of an item list is not always the shipping volume.” Use a labelled calculation and a real measured packing example if available; otherwise clearly mark the example as illustrative.
- “Your flight date is not your shipment delivery date.” Show a dependency diagram with customer decisions and shipment milestones, without inventing route-specific transit promises.

For every asset: answer first, evidence/example immediately next, explanation then next action. Place captions and relevant text beside diagrams. Use server-rendered HTML for the essential answer and accessible tables/labels for exact information. An interactive component should help a decision, not conceal the answer.

Google's people-first guidance asks whether content supplies original information and whether its expertise and sourcing are clear. That supports this editorial direction; it does not establish an observable Google “information-gain score” for IMC. [Helpful-content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## 7. Preserve a focused topical structure

Apply topical coherence to IMC's actual purpose: the company manages international household moves; the core decisions are scope, volume, transport, packing, costs, responsibilities and timing.

- Homepage owns the overall company/service proposition and overview of “international moving company”.
- Services hub and service pages explain what IMC can arrange.
- Costs and quotation guidance explain scope, variables and comparison.
- Tools and guides answer the supporting planning questions.
- About, people and real cases supply attributable evidence.

Link these pages where the reader needs the next explanation. A guide should connect to its relevant service and contributor, not mechanically link every occurrence of the target phrase to the homepage. Retain the agreed service-first sequence and defer country/route rollouts. Do not create several near-identical landing pages competing for the same head term.

Interpret “lower retrieval cost” as clear information architecture, accessible HTML, concise definitions and efficient delivery. There is no verified project metric for Google's internal retrieval cost. Patents and third-party SEO frameworks are sources of hypotheses, not proof that Google deploys a particular mechanism or awards a specific score.

## 8. Build recognition beyond the website

Prioritise a small number of accurate, useful public references:

1. Establish or reconcile the genuine company profile on LinkedIn and link it to the canonical domain. Give Warwick and Maiane accurate affiliations where they approve them.
2. Use the same lockup, name, promise and domain on quotations, assessment documents, email signatures and customer materials. Pair usefulness with consistent attribution.
3. Prepare practical expert contributions for relevant relocation, expat, HR/global-mobility and moving-industry audiences. Offer a concrete insight or original resource, with the correct business attribution.
4. Seek references from genuine operating partners where the relationship is real and disclosure is appropriate. A former employer does not become a partner through a biography.
5. Invite honest feedback after actual service milestones; publish only with permission and accurate context. Do not invent a review count or aggregate score.

These are proposed activities, not authorisation to message people or publish profiles. Any paid promotion should be judged by relevant reach, recognition and qualified enquiries; do not claim that ad spending directly improves organic rankings.

Do not organise artificial brand searches, purchase reviews, require exact-match anchors or manufacture independent-looking recommendations across owned websites. An owned publication is not independent corroboration; disclose relevant relationships and link only where useful. Google's spam policies address manipulative links and keyword stuffing. [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)

Respect the agreed decision against legacy-domain redirects. Do not describe a new domain as proof that previous ranking problems cannot recur, and do not obscure material operating facts to imply independence that does not exist.

## 9. A 90-day execution sequence

This is a work schedule, not a prediction that rankings or recognition will arrive within 90 days.

| Window | Deliverable | Proposed owner | Completion evidence |
| --- | --- | --- | --- |
| Days 1–14 | Resolve Contact/policy availability wording, verify the operator/contact facts and enquiry delivery | Matthew + developer | Accurate public identity and an explicitly authorised successful delivery test |
| Days 1–14 | Implement consistent naming, logo schema and social site name | Developer | Current-source review; visible copy and schema agree; current Claude functionality retained |
| Days 1–14 | Record the search and enquiry baseline | Matthew / analyst | Four-week baseline by country, query group and landing page; note data gaps |
| Days 15–30 | Produce one usable IMC Move Plan and the three editorial briefs above | Warwick + Maiane + editor | Recorded source input, approved copy, transparent examples and relevant internal links |
| Days 15–45 | Align company profiles and customer documents | Matthew + people concerned | Correct names, affiliations, domain and contact details on verified surfaces |
| Days 31–60 | Publish at least one permissioned real case if evidence exists; otherwise continue practical expert material | Operations + editor | Evidence and consent documented; no fictional substitute |
| Days 31–90 | Distribute useful contributions to a short, relevant prospect list | Matthew / communications | Genuine audience engagement, relevant referrals and earned references |
| Days 61–90 | Review outcomes and refine the service-first content | Matthew + analyst + editor | Comparison against baseline; specific next decisions rather than a keyword-count target |

## 10. Measure recognition separately from generic demand

The exact query “international moving company” is ambiguous. Its clicks cannot all be counted as branded traffic. Report it separately from high-confidence brand queries.

| Query/metric group | Examples | Interpretation |
| --- | --- | --- |
| Stronger brand intent | “internationalmoving.company”, “IMC international moving”, “International Moving Company Warwick Woodley” | Evidence consistent with deliberate recognition; review queries manually |
| Ambiguous exact name | “international moving company”, “international moving company reviews” | Could be category or brand demand; do not assign all of it to brand |
| Supporting service demand | “door to door international removals”, “shared container moving” | Service discovery and topical performance |
| Business outcomes | Qualified enquiries, assessment bookings, accepted quotations, referral source | Whether awareness brings suitable customers |
| Recognition evidence | Unaided name recall, genuine customer references, independent mentions | Direct indicators of recognition; small interview samples are directional |

Review Search Console at 28-day intervals, segment by intended market and landing page, and annotate deployments and campaigns. Keep low-volume results and reporting limitations visible. Assess generic head-term performance separately from branded-query growth; do not infer one caused the other. Do not combine country averages into a claim of universal ranking.

Use privacy-appropriate analytics and an optional “How did you hear about IMC?” question once the enquiry flow is ready. Do not send names, addresses or inventory details as analytics events. Direct traffic alone is not proof of brand awareness. Establish numeric targets after the baseline exists; do not manufacture a percentage-growth target from no data.

## 11. Immediate implementation backlog for Claude and Codex

1. Confirm the current enquiry/operator facts and reconcile Contact, policies and form copy.
2. Apply the naming table and proposed homepage name/promise hierarchy.
3. Extend the existing organisation graph with the approved logo; add `og:site_name`; add verified identity facts/profile links only when supplied.
4. Create the IMC Move Plan as a real sample deliverable with expert review.
5. Add genuine authorship/review attribution to the three priority resources once that work occurs.
6. Set up the baseline report with branded, ambiguous and service-demand queries separated.

Before code changes, fetch the latest shared GitHub revision and inspect concurrent work. Do not redeploy the old static-export configuration or restore preview-only assumptions from earlier project notes. Preserve Claude's enquiry backend, autocomplete, current metadata and build changes unless a separately justified correction is required. This document adds strategy; it does not replace the original research files, authorise outreach or silently change the live site.
