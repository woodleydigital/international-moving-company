# IMC — Project Guidelines and Source of Truth

Version: 0.1 | Created: 7 September 2026 | Status: working master

Project: International Moving Company (IMC)  
Domain: https://internationalmoving.company  
Repository: https://github.com/woodleydigital/international-moving-company

## 1. Authority and how to use this document

This is the consolidated project reference for brand, content, topical architecture, design, Next.js implementation and publishing review. Read it before planning pages, writing copy or implementing templates. It records confirmed business decisions separately from proposed design choices and research hypotheses.

The supplied PDFs and Ahrefs exports form our reference corpus. They are preserved as sources, not silently rewritten. This master records our interpretation, corrections and implementation decisions; it does not reproduce the full attachments or patent claims.

Resolve conflicts using these rules:

1. The user's latest explicit decision governs project scope and brand intent.
2. Actual business records and accountable operational confirmation govern claims about IMC.
3. Current official documentation governs claims about documented search behaviour and supported technical features.
4. Primary patent documents establish what was disclosed, not whether a system is deployed or its ranking weights.
5. Practitioner frameworks and secondary reports supply ideas to assess against user needs and evidence.
6. Keyword tools and internal scores guide prioritisation; neither establishes truth or guarantees results.

User instructions cannot make an unsupported factual claim true. If evidence conflicts with a proposed claim, record the conflict and use accurate wording. Updates to this master must identify the decision, supporting source, date and affected pages.

### Decision status

| Label | Meaning |
|---|---|
| Confirmed | Explicit user instruction or verified project fact |
| Proposed | Working recommendation awaiting business or design confirmation |
| Evidence required | Cannot publish the claim or capability until substantiated |
| Research hypothesis | Useful for investigation; not a confirmed ranking mechanism |
| Deferred | Outside the current release scope |

The brand PDF v0.1 and topical-map workbook v0.2 are companion drafts. The latest user decisions and this master govern where an older draft differs. This document does not imply that the website has been implemented or these files committed to GitHub.

## 2. Confirmed business and project scope

- IMC is an international relocation management company handling worldwide door-to-door removals.
- The website's commercial purpose is generating qualified enquiries for global international moves.
- Present IMC's actual management role clearly, including responsibilities and any delivery partners. Do not present it as merely a comparison directory or lead broker.
- Build the website in Next.js.
- Use both International Moving Company and IMC; the logo must include IMC.
- Establish brand and services first. No programmatic SEO rollout at this stage.
- Country guides, route pages and city/county landing-page expansion are deferred. Examples such as moving to New Zealand or the UK are future work, not current publication commitments.
- Ahrefs US data informs the current map; it does not define the full worldwide market.

Worldwide capability is the user's positioning. It must not become an unconditional promise that every shipment, item or destination is available regardless of constraints. Explain shipment-specific feasibility during qualification. Do not imply an owned office or fleet in every country.

Success means qualified enquiries and booked moves, supported by useful content and a recognisable brand. Search traffic is a diagnostic measure, not the sole business outcome.

## 3. Brand direction

### Confirmed identity

Use **International Moving Company (IMC)** on first substantive introduction; use IMC naturally thereafter. Keep the full name prominent enough to explain the business. The domain is lowercase. Avoid mechanically repeating the exact-match phrase in every heading, link and paragraph.

Google documents an exact-match domain system that prevents excessive credit for domains matching queries. The EMD is therefore a clear address and naming asset, not a ranking entitlement. [Google ranking systems guide](https://developers.google.com/search/docs/appearance/ranking-systems-guide)

### Proposed verbal identity — not yet approved

- Promise: “Your international move, clearly managed.”
- Brand idea: “Worldwide reach. Personal responsibility.”
- Optional campaign line: “From your door. To your next chapter.”
- Personality: capable, calm, human and accountable.
- Pillars: clarity, coordination and care, each backed by actual operating practices.

Write in plain English. Explain what happens, what the customer needs to do and who is responsible. Define industry terms on first use. Prefer concrete inclusions and limitations to superlatives. Never invent awards, accreditations, offices, years of experience, reviews, shipment counts, guarantees or “best/cheapest” claims.

### Proposed visual identity — draft concept

The existing raster concept uses a bold IMC mark in navy with an open teal doorway within the M, accompanied by the full name. It is a concept, not a final production vector or approved logo system.

| Token | Proposed value | Use |
|---|---|---|
| Ink | `#142D3B` | Primary text and identity |
| Teal | `#167D8D` | Accent and selected actions |
| Ivory | `#F6F3ED` | Warm background |
| Slate | `#526572` | Secondary text |
| Heading font | Manrope | Subject to final asset selection |
| Body font | Source Sans 3 | Subject to final asset selection |
| Fallback | Arial, sans-serif | Resilient rendering |

Starting typography: body 18px with 1.5–1.65 line height; labels 14–16px; desktop H1 40–56px; mobile H1 32–40px; H2 28–36px. Use an 8px spacing basis and test actual layouts. Check colour contrast for each real foreground/background pairing.

Starting logo clearspace is one quarter of cap height. The draft full-lockup starting size of 180px/40mm requires legibility testing, not automatic adoption as a validated minimum. Test favicon variants at 16, 32 and 48px. Final outlined SVG/PDF and raster exports follow design approval.

Use authentic, permitted operational photography wherever it supports claims. Illustrative or generated imagery must not masquerade as IMC staff, facilities, customers or completed moves.

## 4. Topical strategy and page ownership

Adapt the supplied Koray frameworks through a clear source context: **IMC manages international household removals and helps customers plan, assess and request that service.** The central entity is the business/service relationship, not a collection of disconnected moving keywords.

The commercial core contains brand, service explanation, costs and enquiry tasks. Supporting content answers questions that help a customer choose, prepare for or understand those services. Connect supporting content to the relevant commercial page when it helps the next decision.

### Page creation rule

A query variation does not automatically deserve a URL. Create a page when it has a distinct user task, enough substantive material, a useful format, an owner and credible evidence. Otherwise answer it as a section on the existing page. Review actual search results before finalising ambiguous intent; keyword classifications in the current workbook remain provisional.

Use query templates to discover questions, for example “what affects international moving cost?”, “what does a quote include?” and “shared or full container?”. Use entity attributes to ensure coverage of volume, timing, access, transport mode, packing, storage and responsibilities. Neither method authorises mass production of geographic variations.

### Current proposed map

These are planning entries, not declarations that every specialist service is confirmed or every page must launch at once. Phase 1 service pages still require operational confirmation and the publishing gate.

| Phase | URL | Primary purpose |
|---|---|---|
| 1 | `/` | Introduce IMC and worldwide door-to-door management; begin an enquiry |
| 1 | `/services/` | Explain service scope and options |
| 1 | `/services/packing/` | Explain packing scope and preparation |
| 1 | `/services/shared-container/` | Explain shared-container suitability and trade-offs |
| 1 | `/services/full-container/` | Explain full-container suitability and trade-offs |
| 1 | `/services/storage/` | Explain storage options and coordination |
| 1 | `/international-moving-costs/` | Explain cost drivers and quote boundaries |
| 1 | `/moving-guides/` | Navigate the practical resource collection |
| 1 | `/guides/comparing-international-moving-quotes/` | Help compare like-for-like scope |
| 1 | `/guides/international-moving-checklist/` | Help plan and complete moving tasks |
| 1 | `/about/` | Establish responsible business identity and real expertise |
| 1 | `/how-it-works/` | Explain stages, responsibilities and handoffs |
| 1 | `/contact/` | Provide genuine contact routes |
| 1 | `/get-a-quote/` | Capture a qualified moving enquiry |
| 1 | `/privacy/` | Explain actual data handling |
| 1 | `/terms/` | Explain applicable business/site terms |
| 2 | `/services/air-freight/` | Explain an additional mode if confirmed |
| 2 | `/guides/shared-vs-full-container/` | Compare container options |
| 2 | `/guides/estimating-moving-volume/` | Help estimate shipment size |
| 2 | `/guides/packing-for-an-international-move/` | Provide preparation detail |
| 2 | `/guides/air-vs-sea-freight/` | Compare mode trade-offs |
| 2 | `/guides/international-moving-times/` | Explain timeline components and uncertainty |
| 2 | `/guides/international-moving-documents/` | Explain document preparation and verification |
| 2 | `/guides/restricted-items/` | Explain how to check item restrictions |
| 2 | `/guides/moving-insurance/` | Explain questions to ask about protection and terms |
| 2 | `/guides/shipping-furniture-vs-buying-new/` | Support a practical shipment decision |
| 2 | `/guides/delivery-day/` | Explain delivery preparation and checks |
| Evidence hold | `/reviews/` | Publish only when genuine review evidence exists |

Corporate relocation, pet transport, vehicle shipping and fine-art specialist pages are unconfirmed. Country/route pages remain deferred. Do not infer permission to publish them from a keyword export.

The homepage owns the broad brand/service introduction. The service hub owns service selection, the costs page owns cost education and the quote page owns enquiry completion. Keep their content and titles distinct. Shared templates are acceptable engineering; mass-produced search landing pages are outside scope.

Internal links must express a meaningful next step: costs → quote comparison → quote request; checklist → packing → relevant service; service → process → enquiry. Use descriptive, natural anchors. Maintain discoverable hubs and breadcrumbs where helpful; avoid orphan pages and repetitive exact-match link blocks.

## 5. Keyword evidence and its limits

The two supplied Ahrefs exports are US matching-terms snapshots from 7 September 2026. Together they contain 3,160 raw rows and 2,490 distinct keywords. The later export contains the earlier keyword set. The workbook retains source records and flags duplicates/conflicting metrics; it does not sum duplicate keyword estimates.

Illustrative US monthly estimates in the supplied data include: international moving company 6,400; international moving companies 5,600; international moving services 2,800; international moving quotes 500; international moving costs 250; international moving cost calculator 150; international moving checklist 150. These are tool estimates, not forecasts or additive unique audiences. Check the original keyword row before using a number externally.

Blank metrics mean unknown, not zero. KD 0 is not evidence that ranking will be easy. US volume must not be presented as worldwide demand. Competitor-name and geographic queries do not automatically belong in IMC's launch map. No comprehensive global research or live intent audit is implied by the workbook.

## 6. Information gain and useful content

For IMC, information gain means helping the reader make a better decision through useful evidence, explanation or functionality beyond a generic summary. It is an editorial goal, not a measurable proprietary Google score available to us.

Every substantive service or guidance page needs a documented contribution. Utility pages meet their purpose through accurate, usable business information rather than forced research content.

| Page/task | Proposed contribution | Evidence needed |
|---|---|---|
| Costs | Annotated cost breakdown with inclusions/exclusions | Approved example, currency, date, assumptions and scope |
| Quote comparison | Like-for-like comparison worksheet | Real quote categories reviewed by operations |
| Process | Stage-by-stage responsibility table | Actual IMC workflow and partner handoffs |
| Container selection | Worked suitability scenarios | Confirmed operating constraints; illustrative labels |
| Checklist | Actionable steps with responsibility and timing | Operations review; dependencies explained |
| Volume | Transparent inventory/volume method | Units, assumptions, limitations and validation |
| Delivery | Access and delivery preparation checklist | Actual delivery requirements |

Never fabricate move cases, prices, testimonials, performance statistics or first-hand experience. An illustrative scenario must say so. First-party aggregates need a period, sample size, methodology and exclusions, with customer information protected.

Assess a draft against a recorded comparison set: what a customer already learns elsewhere, what is missing, and what IMC adds. A fresh phrasing of the same claims is not enough. Publish the answer before asking for contact details where the task can reasonably be answered publicly.

Do not encode arbitrary cosine-similarity thresholds, a mandatory count of novel claims, fixed paragraph lengths or pixel positions as Google requirements. The supplied report's patent attribution is corrected in Section 12.

## 7. Visual semantics and task completion

Match the main content and interaction to the task. Service pages need clear scope and a next step; comparisons need comparable criteria; checklists need actionable sequences; genuine calculators need useful outputs and visible assumptions. Do not label a quote form a calculator if it produces no calculation.

Prioritise the page's central purpose in the layout. Keep relevant captions, diagrams and explanations together. Use semantic headings and meaningful image descriptions. Decorative pictures must not displace the answer or act as fake proof.

There is no universal rule that everything above the fold is main content or everything below it is supplementary. The quote form can itself be main content on a quote page. Accordions are acceptable when accessible and their substantive content is available in the HTML. Avoid hiding essential service limitations in collapsed or visually obscure areas.

A diagram of the actual removal process or a well-designed comparison can be more useful than a long article. Do not add interactivity merely to manufacture engagement signals.

## 8. Google quality-rater overview: incorporated guidelines

Source: supplied `hsw-sqrg.pdf`, **Search Quality Rater Guidelines: An Overview**, November 2023, 36 pages. This is an overview, not the full current Search Quality Rater Guidelines. Page references below use the PDF's printed page numbers.

The overview distinguishes Page Quality from Needs Met (pp. 16–17, 19–30). It explains that raters assess search quality and do not directly determine a page's ranking. We use the concepts for editorial review, not as a claimed algorithm score.

### Page Quality: does the page fulfil its beneficial purpose?

Define the page's purpose before drafting. A commercial page can be high quality; it does not need to pretend to be an independent editorial resource. Assess its main content, responsible creator/business, reputation and appropriate experience/expertise. See overview pp. 20–26.

IMC implementation requirements:

- Make the company's role and service proposition apparent.
- Explain actual responsibility for customer communication, coordination and delivery stages.
- Provide real business identity and contact information before accepting live enquiries.
- Identify the accountable author or reviewer where useful, with truthful relevant experience.
- Support claims with accessible evidence. Internal marketing copy alone is not independent reputation evidence.
- Keep prices, inclusions, conditions and next steps consistent across the page and enquiry flow.
- Use real reviews with appropriate permission and provenance; do not create a review page filled with placeholders.
- Ensure mobile visitors can read, navigate and complete the task without disruptive overlays or broken controls.

### Needs Met: is this useful for the particular query and visitor?

The overview addresses query meaning, location and usefulness (pp. 28–30). Its “Fully Meets” category is narrow; broad commercial searches do not warrant an automatic claim of complete satisfaction.

For each IMC page, record the primary question and likely customer stage. Check whether the page answers it directly, explains consequential limitations and provides a relevant next action. Do not assume a US keyword means the visitor is moving from the US. Ask for origin and destination rather than silently imposing a route.

### Trust and consequential advice

Use extra care for content whose errors could materially affect finances, safety or compliance, including insurance, customs, restricted items and duties. This does not label every moving page YMYL. For consequential claims, cite the responsible authority or applicable terms, identify jurisdiction and review date, and obtain suitable review before publication. Do not extrapolate one country's rules worldwide.

Current Google guidance says E-E-A-T is not itself a specific ranking factor; trust is central, and rater data is not used directly in ranking algorithms. It encourages useful original content and accurate authorship where expected. IMC's checklist is our application of these principles. [Google: helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

## 9. Next.js and technical implementation requirements

These are project engineering requirements informed by the supplied JavaScript SEO and playbook PDFs. Check the selected Next.js version's current documentation during implementation; this master does not prescribe unverified version-specific APIs.

1. Deliver the primary content, meaningful headings and crawlable navigation in initial server-produced HTML through appropriate prerendering or server rendering. Do not require a browser interaction to reveal the core answer.
2. Use real anchor destinations for navigation. Interactive controls must have appropriate semantics and keyboard behaviour.
3. Give each indexable page a stable URL, descriptive title, clear H1, intentional canonical and correct response status. Do not canonicalise all pages to the homepage.
4. Keep production indexing controls deliberate. Check that staging noindex rules do not leak into launch; do not block resources needed to understand pages.
5. Keep the XML sitemap aligned with canonical, indexable URLs. Exclude private enquiry records and temporary completion states.
6. Render structured data consistently with visible, verified information. Organisation identity, breadcrumbs and suitable service/article descriptions must not invent offices, ratings or credentials. Schema does not guarantee a search feature.
7. Optimise images, fonts and scripts. Measure loading, interaction responsiveness and layout stability using current tooling; avoid unnecessary client JavaScript.
8. Test source HTML and browser rendering, mobile navigation, form validation, submission success/failure, broken links and metadata before release.
9. Preserve meaningful URLs when changing architecture; use appropriate redirects and update internal links. Avoid losing image/content URLs during migrations.
10. Make form labels, errors, focus handling, contrast and touch targets usable. Test a real enquiry journey, including failure recovery.

Do not adopt dynamic rendering as the default new-build strategy. Do not rely on legacy `rel=prev/next` markup as Google's pagination indexing signal. Do not promise FAQ rich-result visibility; check current supported features at implementation. Use current performance metrics rather than treating historical “Time to Interactive” advice as the current Core Web Vitals definition.

## 10. Lead-generation experience and measurement

Primary proposed action: **Get a moving quote**. Secondary proposed action: discuss the move through a genuine contact channel. Use consistent wording and explain what happens after submission using an operationally confirmed response expectation.

Proposed qualification fields: origin, destination, approximate move date, shipment size or inventory stage, relevant service needs and contact details. Collect only what is necessary at that stage. Accommodate “not sure” answers where customers reasonably need guidance. Explain the difference between an enquiry, an indicative estimate and a confirmed quotation.

Privacy copy must describe the actual flow of information, including any relevant partner sharing. Do not invent response times or label a submission an instant quote unless a usable quote is actually produced.

Track successful enquiries, qualification outcomes and booked moves alongside visits, quote starts, completion rate, service-page engagement and search performance. Avoid sending personal enquiry details to general analytics events. Establish measurement definitions before launch; set targets after sufficient real baseline data exists.

## 11. Editorial workflow and publication gate

Every proposed page brief must record:

```text
Page ID / canonical URL:
Phase / status / accountable owner:
Primary audience, task and intent:
Primary query cluster / related queries:
Distinct purpose versus existing pages:
Main answer or function:
IMC-specific contribution / information gain:
Operational claims and evidence:
Source IDs / URLs / relevant pages / access dates:
Jurisdiction, currency and date assumptions where relevant:
Author / reviewer and basis of expertise:
Useful visual or interactive component:
Contextual incoming and outgoing links:
Primary CTA / what happens next:
Metadata / structured data / rendering requirements:
Review date / update trigger:
Quality review and unresolved issues:
```

Workflow: confirm purpose and service facts → assemble sources and contribution → draft and design together → operational/editorial review → technical and enquiry checks → publish → observe outcomes and update substantive changes.

Adopt the supplied playbook's **internal** review rubric as a working quality-control tool:

| Dimension | Maximum points |
|---|---:|
| Technical accessibility and indexing | 20 |
| Architecture and links | 15 |
| Intent satisfaction | 15 |
| Information gain / task-specific value | 20 |
| Answer and passage clarity | 10 |
| Entity consistency and structured data | 8 |
| Visual usefulness | 5 |
| Trust, sources and freshness | 7 |
| Total | 100 |

Working publish threshold: at least 85/100, at least 14/20 for information gain/task-specific value, and no critical failure. Score proportionately to purpose: a contact or privacy page earns value through accurate, complete task fulfilment, not artificial novelty. This is not a Google score, ranking formula or guarantee.

Critical failures include unsupported material claims; fabricated evidence or schema; misleading business identity; missing primary content or links in required HTML; unintended noindex/canonical/status problems; substantially duplicate/orphan content; consequential unsupported advice; and a broken primary enquiry path. A high total never overrides a critical failure.

Use a separate qualitative check for Page Quality and Needs Met. Ask “does it achieve its stated purpose?” and “does it help this visitor complete this task?” Record the rationale instead of asserting a Google rating.

Update dates only after meaningful review or change. Assign change triggers to cost examples, service scope, external rules and software/search features. Preserve a source log and change notes.

## 12. Patent and research register

The following register preserves all 24 numbered references from the supplied patent-informed playbook. Titles below follow that playbook unless noted. **Except P08, bibliographic details and claim-level interpretation remain to be independently validated.** A link is a research locator, not evidence of live implementation, current legal status, a particular assignee or causal ranking effect.

| ID | Supplied patent reference | Research theme; practical consideration |
|---|---|---|
| P01 | [US6285999B1 — Method for node ranking in a linked database](https://patents.google.com/patent/US6285999B1/en) | Link graphs; maintain useful navigable relationships |
| P02 | [US8117209B1 — Ranking documents based on user behavior and/or feature data](https://patents.google.com/patent/US8117209B1/en) | Link features; contextual links rather than indiscriminate link blocks |
| P03 | [US9165040B1 — Producing a ranking for pages using distances in a web-link graph](https://patents.google.com/patent/US9165040B1/en) | Graph distance; investigate provenance, not purchased-link shortcuts |
| P04 | [US9031929B1 — Site quality score](https://patents.google.com/patent/US9031929B1/en) | Site-level concepts; build recognisable business value |
| P05 | [US7536408B2 — Phrase-based indexing in an information retrieval system](https://patents.google.com/patent/US7536408B2/en) | Language relationships; coherent topic coverage |
| P06 | [US8452758B2 — Methods and systems for improving a search ranking using related queries](https://patents.google.com/patent/US8452758B2/en) | Related queries; organise genuine follow-up needs |
| P07 | [US8868548B2 — Determining user intent from query patterns](https://patents.google.com/patent/US8868548B2/en) | Intent patterns; distinguish tasks before URLs |
| P08 | [US12013887B2 — Contextual estimation of link information gain](https://patents.google.com/patent/US12013887B2/en) | Identity checked against primary record; context-dependent additional information |
| P09 | [US9940367B1 — Scoring candidate answer passages](https://patents.google.com/patent/US9940367B1/en) | Answer passages; clear, supported answers |
| P10 | [US12158907B1 — Thematic search](https://patents.google.com/patent/US12158907B1/en) | Themes; coherent page scope |
| P11 | [US10235423B2 — Ranking search results based on entity metrics](https://patents.google.com/patent/US10235423B2/en) | Entities; consistent real business identity |
| P12 | [US20130238594A1 — Related Entities](https://patents.google.com/patent/US20130238594A1/en) | Entity relationships; accurate contextual associations |
| P13 | [US7346839B2 — Information retrieval based on historical data](https://patents.google.com/patent/US7346839B2/en) | Historical signals; keep meaningful change records |
| P14 | [US8832088B1 — Freshness-based ranking](https://patents.google.com/patent/US8832088B1/en) | Freshness; update when facts change |
| P15 | [US8898296B2 — Detection of boilerplate content](https://patents.google.com/patent/US8898296B2/en) | Boilerplate; prioritise substantive page-specific content |
| P16 | [US8078629B2 — Detecting spam documents in a phrase based information retrieval system](https://patents.google.com/patent/US8078629B2/en) | Spam detection; avoid manufactured repetitive text |
| P17 | [US12393768B2 — Layout-aware multimodal pretraining for multimodal document understanding](https://patents.google.com/patent/US12393768B2/en) | Layout and modalities; meaningful text/visual relationships |
| P18 | [US9069855B2 — Modifying a hierarchical data structure according to pseudo-rendering](https://patents.google.com/patent/US9069855B2/en) | Rendered structure; semantic and visual coherence |
| P19 | [US11782998B2 — Embedding based retrieval for image search](https://patents.google.com/patent/US11782998B2/en) | Image retrieval; relevant descriptive imagery |
| P20 | [US8661029B1 — Modifying search result ranking based on implicit user feedback](https://patents.google.com/patent/US8661029B1/en) | Feedback; assess actual usefulness, never manufacture clicks |
| P21 | [US9009146B1 — Ranking search results based on similar queries](https://patents.google.com/patent/US9009146B1/en) | Query relationships; consolidate overlapping intent |
| P22 | [US8312010B1 — Local business ranking using mapping information](https://patents.google.com/patent/US8312010B1/en) | Local information; use only genuine business locations |
| P23 | [US10824630B2 — Search and retrieval of structured information cards](https://patents.google.com/patent/US10824630B2/en) | Structured information; consistent explicit facts |
| P24 | [US10922326B2 — Triggering knowledge panels](https://patents.google.com/patent/US10922326B2/en) | Entity presentation; no promised knowledge-panel outcome |

These practical considerations are our editorial/engineering choices; they are not claims that the patents require or reward those exact actions.

### Information-gain correction

The supplied information-gain report associates **US11562019B2** with Google information gain. The primary record instead identifies **Generating visual data stories**, assigned to Adobe. Do not cite it as Google's information-gain patent. [Primary record](https://patents.google.com/patent/US11562019B2/en)

The checked Google reference is **US12013887B2, Contextual estimation of link information gain**. It describes evaluating additional information in a context involving information already presented to a user. It does not establish that our editorial score, a simple cosine-distance formula or a novelty quota reproduces Google's ranking or AI Overview selection. [Primary record](https://patents.google.com/patent/US12013887B2/en)

Related references mentioned in the corpus: US11354342B2, WO2020081082A1 and US20200349181A1. Keep them as research leads pending bibliographic/family and claim validation.

### Additional named research leads

The practitioner material also discusses query augmentation, query-suggestion templates, generating query answers, automatic query-pattern generation, website representation vectors, classifying results by page elements, merging search results, AI-generated pages tailored to users, stateful-chat search, and search-result ranking/presentation. ViPS, Neural Design Network, WebRef and “Are LLMs Reliable Rankers?” are additional named research leads. These are not all patents. Resolve exact titles, authors, identifiers and relevant passages before citing them as primary evidence or deriving new requirements.

Treat proposed “cost of retrieval” formulas, historical click-transfer rules, fixed visual-position prescriptions and causal conclusions from practitioner case studies as hypotheses. No artificial engagement, manufactured links or guaranteed ranking claims follows from this corpus.

## 13. Source catalogue

Uploaded files are the retained source snapshots. Dates in a filename or PDF are source dates, not confirmation that every statement is current. Consult the attachment itself for full context.

| ID | Source | Role and limitation |
|---|---|---|
| S01 | `javascript-seo.pdf` — 28 pages | Rendering/crawlability framework; historical technical claims need current checks |
| S02 | `Query templates_ Expanding the scope of topical authority.pdf` — 35 pages | Koray query-template framework; practitioner interpretation |
| S03 | `Visual semantics_ The missing piece of topical authority.pdf` — 48 pages | Koray task/layout framework; practitioner interpretation |
| S04 | `patent_informed_seo_website_content_playbook (1).pdf` — 23 pages | Patent register, architecture/content rules and internal scoring rubric |
| S05 | `Information Gain in SEO.pdf` — 11 pages | Additional-value framework; attribution and formula caveats in Section 12 |
| S06 | `google_us_international-moving_matching-terms_2026-09-07_15-43-53.csv` | First US Ahrefs snapshot: 665 rows, 663 distinct keywords |
| S07 | `google_us_international-moving_matching-terms_2026-09-07_15-58-53.csv` | Expanded US Ahrefs snapshot: 2,495 rows, 2,490 distinct keywords |
| S08 | `hsw-sqrg.pdf` — 36 pages, November 2023 | Official Google overview; not the full current rater manual |
| S09 | `IMC-Brand-Guidelines-v0.1.pdf` | Proposed brand companion; not approved final identity |
| S10 | `IMC-Topical-Map-v0.2.xlsx` | Current proposed 28-page map, keyword records, briefs and linking plan |

Practitioner article locators: [Query templates](https://searchengineland.com/query-templates-topical-authority-484676) and [Visual semantics](https://searchengineland.com/visual-semantics-topical-authority-482254). The supplied PDFs are the reviewed snapshots; do not assume live pages remain identical.

Official pages checked for this consolidation on 7 September 2026: [helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [ranking systems](https://developers.google.com/search/docs/appearance/ranking-systems-guide), and the two primary patent records linked in the correction above. This is a project synthesis, not a complete patent validity review or full current-rater-manual audit.

## 14. Outstanding evidence and change control

Before public launch, confirm the legal/business identity and contact details; actual service availability and partner model; service inclusions/exclusions; enquiry routing and response expectations; applicable terms/data handling; and any credentials, reviews or first-party examples used in copy. Confirm the proposed visual identity separately from the already-confirmed requirement to include IMC.

Continue the brand/service-first map. Expand only when a new page has a distinct need, evidence and operational ownership. Deferred country guides need an explicit scope change and country-specific source review.

| Date | Version | Change |
|---|---|---|
| 2026-09-07 | 0.1 | Created consolidated master from supplied corpus, project decisions and companion drafts; incorporated quality-rater overview; preserved 24-reference patent register with validation status; recorded information-gain correction and no-programmatic/no-country-page scope |

Future change entry: date → decision → reason/source → affected sections/pages → owner → validation status. Preserve uncertainty until resolved; do not promote a proposal to confirmed status without evidence.


## Selected website identity — 7 September 2026
The user has selected the earlier IMC doorway logo and its original colour scheme for the website. Use the original artwork, not the temporary typographic IMC. mark. Palette: ink #142D3B, teal #167D8D, ivory #F6F3ED and slate #526572. Production vector preparation remains outstanding.

## Homepage pillar expansion — 7 September 2026
The user requested fuller relevant entity coverage and useful interaction, informed by linkbuilding.company, currencybrokers.uk, internationalmoneytransfer.com and cosmedica.com. The source analysis and entity-to-section mapping are in HOMEPAGE-COVERAGE.md.

Added reference: Andrew Holland, “Information gain: Here’s what this new SEO ‘buzzword’ really means”, Search Engine Land, 9 May 2024, https://searchengineland.com/what-information-gain-seo-means-440326 . Treat information-foraging value/effort as a design heuristic, not a confirmed Google ranking formula. Pair topical breadth with direct answers, consistent comparisons and transparent tools; measure customer understanding and task completion rather than rewarding word count or interaction volume.

The homepage now covers the core moving decision space with a journey map, transport comparison, quote/cost guidance, item-volume calculator, planning checklist, customs/protection/arrival summaries and visible answers. Specific service availability remains subject to confirmation. Country-page and programmatic SEO deferrals remain in force.

## Separate-build decision — 7 September 2026

Confirmed by the user: MoverFocus / internationalmoving.services experienced a traffic decline associated with a Google spam update; there is no reported Search Console manual action. The user suspects an earlier helpful-content impact carried from MoverFocus.com to internationalmoving.services. That causal explanation has not been independently established.

IMC is a separate brand and build at internationalmoving.company. Do not implement redirects or a site-move migration from MoverFocus.com or internationalmoving.services. Do not import their canonical tags, identity markup, sitemaps, link campaigns or bulk page content. This specific decision supersedes any generic legacy-domain migration advice elsewhere in the corpus. It does not prohibit correct redirects for future changes within IMC itself.

Develop original content from real services, customer needs and substantiated operational information. MoverFocus can inform the topics to investigate; its marketing claims, credentials, reviews, metrics and service promises are not evidence for IMC. Reuse any underlying first-party material only after checking its accuracy, rights and correct attribution. Describe real people, ownership and business relationships honestly; the new domain is not a reason to disguise them.

Review content and marketing practices on their merits. Avoid implying that a fresh domain guarantees ranking recovery or that an unconfirmed penalty transfer is an established Google mechanism. No domain-disassociation tricks, fabricated identity or manufactured credibility forms part of this plan.

Launch architecture: IMC-owned canonical URLs and sitemap once published publicly, true organisation information, an original service-led content map and no legacy-domain migration signals. Keep the private design preview noindex until the actual public launch gate is met.

Sources informing diagnostic caution: https://developers.google.com/search/docs/monitor-debug/debugging-search-traffic-drops and https://developers.google.com/search/docs/appearance/ranking-systems-guide . The user's no-redirect decision does not depend on proving the historical cause.

### Original homepage depth revision
Replaced the brief three-step introduction and overlapping five-stage shipment map with one eight-stage process covering the decisions, customer actions and expected records. Added assessment-method explanations, packing/storage detail and shipment-situation guidance. These are planning explanations, not promises that every assessment method or optional service is available in every location.

Evidence still needed before adding operational proof: accountable team biographies, actual partner-selection criteria, service availability, approved example quotations, first-party move cases, real testimonials and confirmed contact/business details. Keep these as internal evidence needs; do not publish invented substitutes.

## Visual refinement — 8 September 2026
Preserve the selected original IMC artwork and ink/teal/ivory/slate palette. The homepage now uses a clearer heading hierarchy, consistent card corners and spacing, a persistent in-page navigation bar, two-column desktop process panels, and more distinct tool input/result surfaces. Narrow screens use single-column reading layouts and horizontal scrolling for the comparison table and topic navigation. Preserve explicit image dimensions, HTML content and keyboard focus behaviour. The enquiry remains a reserved space at the right of the desktop hero. This design-only revision introduces no new claims, forms, tracking or custom interaction code.


## Quote form and inventory — 8 September 2026

User confirmed Inventory-list.txt volumes are cubic metres and instructed duplicate items to be merged, retaining only item names and volumes. The 203 source entries become 89 distinct item names. Identical names merge across rooms; conflicting volumes use the maximum supplied estimate (Chair 0.25; Bookcase 0.80; Pictures 0.20; Rugs 0.25; Computer 0.14 m³). This conservative merge rule is an implementation choice, not a new surveyed measurement. Original distinct names remain distinct. No room, insurance, packing method, weight or dimension fields are imported. Quantity is customer input, not the source count.

The three-stage quote form replaces the hero placeholder: Address → Details → Contact. Selecting Few pieces of furniture or Some boxes or luggage opens a searchable inventory with quantities, removal and estimated total volume. At least one inventory item is required for those paths. Switching to a household path excludes the small-item inventory from the displayed summary while retaining it in session if the customer switches back. The contact stage includes the complete itemised inventory. All form state is in React memory only, without local storage or outbound requests.

Launch dependencies remain: Google Places service connection (addresses currently use manual input), approved IMC privacy/terms/consent, and enquiry delivery endpoint/CRM routing. Submission is visibly disabled in the private preview; no success state or enquiry delivery is simulated. Do not copy the legacy TriGlobal sharing clause unless the owner confirms that relationship for IMC.

## Sitemap-informed topical-map amendment — 8 September 2026

Reviewed https://internationalmoving.services/site-map excluding blog posts and the blog index. The detailed mapping and decisions are in TOPICAL-MAP-SITEMAP-REVIEW.md, which supplements the proposed map in Section 4 and takes precedence over the older workbook on these priorities.

Preserve service-first launch scope. Consolidate household-goods shipping and removal-management scope into `/services/`; explain principles and verified credentials within `/about/` initially. Give small-shipment enquiries and pre-move assessment explicit sections, without automatically creating separate pages. Prioritise `/guides/estimating-moving-volume/` alongside the inventory form and the existing moving-insurance guidance proposal for operational review. Keep mode comparisons, quote scope and clear handoffs central.

Air freight remains conditional on confirmed availability; vehicle shipping and vehicle-by-air remain evidence holds. Currency-transfer pages, geographic routes and country guides are outside the current launch scope. Consultant terminology does not authorise promises of immigration, tax, school or housing services. The reference sitemap is topical inspiration, not proof of completeness, rankings, quality or IMC capabilities. No legacy-domain migration or content import follows from this review.


## First service-led supporting pages — 8 September 2026
Implemented seven deliberately authored routes: /services/, /how-it-works/, /services/shared-container/, /services/full-container/, /international-moving-costs/, /guides/estimating-moving-volume/ and /get-a-quote/. These implement the sitemap-review priorities without geographic generation. Each page has a distinct purpose, description, direct navigation and related links. Explanations are prerendered; the existing calculator and quote components provide bounded client interaction. The volume guide documents the actual inventory provenance, maximum-value duplicate merge and calculation limitations.

All pages inherit preview noindex/nofollow. No new service credentials, guaranteed transit times, universal container thresholds, rate estimates or specialist-service claims are introduced. These remain operational-review drafts before public launch. Submission, Google autocomplete, privacy/terms approval and enquiry routing remain outstanding. The topical-map spreadsheet has not yet been revised.

Container terminology cross-check: Maersk, FCL vs LCL shipping (https://www.maersk.com/logistics-explained/transportation-and-freight/2023/12/15/understanding-ocean-freight) and LCL service explanation (https://www.maersk.com/transportation-services/ocean-transport/lcl). Used only for general shared/dedicated freight terminology, not as evidence of an IMC partnership or household-removal availability.

## Visual semantics — user-directed correction, 8 September 2026

The user requires visual semantics to govern content architecture, not simply decorate completed prose. This supersedes weaker layout guidance in earlier drafts. Every page brief must specify: entity-focused H1; immediate 2–3 sentence direct answer; exact adjacent hero visual; caption and alt text (or accessible equivalent for native HTML/SVG diagrams); answer-first H2 sections; specific body visual placements; and the relationship each visual helps explain. Use `[VISUAL ASSET: description]` directives in briefs only, never as public-page placeholders.

Keep a visual, its caption and its explanatory text in the same coherent section, without unrelated widgets between them. Use explicit labels consistently across text, tables and diagrams. Main answers and visuals must dominate related links and footers. Match heading appearance to semantic structure; do not promote ordinary prose to visual headings. Keep paragraphs short (normally 2–4 sentences), itemised requirements in lists/cards, and multi-variable comparisons in real HTML tables. Group related concepts using whitespace, borders and restrained backgrounds. Preserve readable type, responsive reflow and the right-hand desktop quote form.

For the current revision, native HTML figures use accessible names, readable DOM labels and adjacent figcaptions; they are not raster images and do not have an invalid alt attribute. Real images require meaningful alt text; SVG diagrams require an accessible title/description. Use precise diagrams for relationships, calculations and allocation. No generic imagery, decorative card rows or invented statistics should substitute for a useful visual explanation.

Evidence boundary: Google documents rendering and processing rendered HTML, and using image context, captions, alt text and computer vision for image understanding. Do not claim it reads visuals instead of HTML. This project's references to VIPS, degree of coherence, pixel weighting, VLMs and cross-attention are research/design models, not verified Google ranking systems, published weights or measurable optimisation scores. The user's visual-design requirements are adopted without promoting those implementation hypotheses to facts.

Sources checked: https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics and https://developers.google.com/search/docs/appearance/google-images .

Implemented visual pairings:
- Homepage/services: origin → transport → destination, under an agreed scope.
- Process: agree → move → receive, linked to records and handoffs.
- Shared container: three separately identified shipments grouped inside one allocation boundary; explicitly not to scale.
- Full container: one shipment plus possible unused capacity inside sole-use allocation; not a loading calculation.
- Costs: origin work + transport + destination work, without prices or implied equal cost weights.
- Volume: 10 × 0.05 m³ + 2 × 0.80 m³ = 2.10 m³, explicitly an inventory estimate.
- Enquiry: address → details → contact, paired with the actual form journey.

Supporting page titles now identify the actual service/topic. Table-led H2 sections now begin with a direct explanation. Related navigation is visually subordinate. All diagrams render as HTML without additional JavaScript or image downloads. Browser visual QA remains outstanding; successful compilation alone does not establish viewport placement or visual quality.


## Explanatory graphics amendment — 8 September 2026

Reference reviewed: https://www.glp1.healthcare/glp-1/cost/cheapest (public page, including visual inspection of its route branching and component bar charts). This is design inspiration only, not a medical or commercial source for IMC.

A row of labelled cards does not satisfy the requirement for a diagram where the reader needs to see a relationship, allocation, scale or dependency. Select the visual form from the question: branching paths for choices, allocation schematics for shared versus sole use, milestone diagrams for dependencies, proportional bars for measured quantities, and annotated geometry for measurement. Every figure must teach something explicit beside its supporting explanation.

Implemented graphic inventory:
- Hero/services: IMC management relationship across origin, transport and destination.
- Homepage transport: inventory branching into shared sea freight, sole-use sea freight and air freight; no automatic route recommendation.
- Homepage and container pages: shared versus sole-use allocation schematic. Letter labels supplement colour; areas are not actual load volumes.
- Homepage process and process page: five milestone groups separating collection, departure, transport, release and delivery. Vertical spacing is not elapsed time.
- Homepage costs and cost page: interactive written-quote scope check. Included, separate, unconfirmed and not-needed states are explicit; dashed segments mark uncertainty. No invented monetary totals or percentage shares.
- Homepage and volume page: proportional bars from the supplied inventory defaults (10 small cartons × 0.05 m³ + 2 bookcases × 0.80 m³ = 2.10 m³). This is distinct from the dimension-calculator example.
- Volume calculator: annotated packed-item geometry with length, width and height labels linked to current input values. Schematic not to scale.

Implementation requirements: server-rendered SVG or HTML figures with visible labels, accessible image descriptions, adjacent captions and text equivalents. Interactive tools begin with meaningful rendered content and explain their method and limitations. Use keyboard-accessible scrolling on narrow screens where preserving legible diagram labels is preferable to scaling text below readable sizes. Do not use graphics to fabricate operational reach, guaranteed timings, prices, container capacities or rankings.

Validation: build and exported-content checks required for this revision; live browser QA of IMC has not been performed. The reference was visually inspected, which is separate from testing the IMC implementation.


## Sitemap navigation — 9 September 2026
- All page footers link to the HTML sitemap at `/site-map/`.
- The HTML sitemap groups the eight existing content pages and links to `/sitemap.xml`.
- Both sitemaps share the authored page registry; XML also includes the HTML sitemap itself. No planned, geographic or unpublished pages are listed.
- XML uses the intended brand domain `https://internationalmoving.company`, not the private preview hostname. No invented last-modified dates or priority values.
- Preview noindex/nofollow remains in force. Sitemap generation does not authorise public launch or search-engine submission.


## Editorial design direction — 9 September 2026
Reference homepage content and opening layouts reviewed: Jolly Search, Armstrong, Aires and K2 Relocate. K2 informs human warmth; Armstrong informs consistent graphic identity; Jolly informs visual confidence; Aires informs explicit management responsibilities. These are design references, not sources of IMC credentials or operational claims.

Implemented: navy hero with ivory quote panel on the desktop right; original IMC identity and palette; editorial serif display headings; restrained doorway-inspired border geometry; open service rows; a practical introduction about belongings, access and timing; and quotation field notes about inventory completeness, dates and scope changes. Detailed guidance, diagrams and inventory tools remain available.

Authenticity remains an evidence requirement: no invented team, client stories, reviews, credentials, office network or service history. Existing generated arrival photograph remains captioned as illustrative. Original permissioned photography, accurate biographies and attributable customer accounts should replace illustrative material when supplied. No content from the legacy domains has been imported.

This revision receives build and static-content checks; browser visual QA is outstanding.


## Service and planning expansion — 10 September 2026
Seven authored routes added from the approved topical map: `/services/packing/`, `/services/storage/`, `/moving-guides/`, `/guides/comparing-international-moving-quotes/`, `/guides/international-moving-checklist/`, `/guides/international-moving-times/` and `/guides/delivery-day/`. This is a bounded service-first editorial expansion, not geographic or programmatic SEO.

Distinct contributions: packing responsibility comparison and inventory linkage; origin/destination storage decisions and charge boundaries; quotation reconciliation with an explicitly illustrative non-price comparison; a milestone-based checklist using the existing tool; collection-to-delivery dependencies without invented durations; and a delivery receiving/checking plan. New flow figures have labels and adjacent explanatory captions; existing volume, scope and milestone tools are reused without conflicting arithmetic.

Navigation, service hub and both sitemaps include the new pages. Country guides, specialist service claims and financial/legal advice remain deferred. About/contact/terms/privacy still need verified business identity, channels and actual operating/data-handling details; reviews and accreditations need attributable evidence. Existing preview noindex/nofollow and disabled enquiry submission are unchanged. No invented service guarantees, credentials, prices or customer outcomes.

Content is planning guidance pending operational review before public launch. Build and exported route/link validation cover this revision; browser QA has not been performed.


## Diagram presentation refinement — 10 September 2026
The user rejected the generated illustrated concept as cartoonish. Do not integrate that image. Retain native SVG/HTML diagrams and improve their technical presentation: consistent framed titles, restrained teal accents, readable captions, tabular numerals, cleaner line joins, stronger milestone hierarchy and explicit connectors on planning sequences. Existing quantities, methods and schematic limitations remain unchanged.

## People and biographical evidence — 13 September 2026
The user identifies Warwick Woodley and Maiane Cassanego as key people at IMC, and supplies Warwick’s portrait for use on the website. The homepage people section pairs that photograph with his name and biography; Maiane is listed with her supplied LinkedIn link. No invented job titles, portrait or biography for Maiane.

User-supplied facts for Warwick: more than four decades of hands-on international moving and freight-forwarding experience; former FIDI Academy trainer; trained moving professionals worldwide. Adapted wording removes “unparalleled” and connects his experience to IMC’s personal, transparent approach. These are Warwick’s career credentials, not IMC’s age, corporate accreditation or proof of FIDI membership. Do not add a founder/director title without confirmation.

Profile links supplied by the user: https://www.linkedin.com/in/warwick-woodley-ba253092/ and https://www.linkedin.com/in/maiane-cassanego-865450114/ . LinkedIn could not be accessed in this session; no claim of independent profile verification. Further role details, Maiane’s biography and photograph, and legal business particulars remain to be supplied. The original portrait is used without generative alteration.


## Company and legal pages — 13 September 2026
User requested legal pages based on a useful-links screenshot. Eight authored pages added: About Us, Contact Us, Modern Slavery Statement, Code of Ethics, Accessibility, EDI Policy, Privacy Policy and Terms & Conditions. Shared footer and HTML/XML registries include them. These are individually written company/policy pages, not a geographic SEO expansion.

All policies are explicitly private-preview drafts, with outstanding facts displayed for owner review. No legal entity, address, jurisdiction, contact email, policy approval, supplier audit, certification or statutory signature invented. Terms are website-use drafting, not a removal contract; service contract provisions require operating-model and legal review. Privacy reflects temporary form state and disabled submission; no claim that the host is cookie-free. Accessibility states no completed conformance audit. Modern slavery text separates proposed policy from statutory annual reporting.

TPI Code from the screenshot is deferred: its issuing body, meaning and applicability to IMC have not been identified. Do not claim membership or adoption. Legal launch inputs: operator/registration/address/jurisdictions; working business/privacy/accessibility/complaints contacts; processors/transfers/retention; actual service contract and claims rules; policy owners and approvals. About uses supplied people facts only. Noindex and private access retained.

Sources consulted: https://www.gov.uk/guidance/publish-an-annual-modern-slavery-statement ; https://www.w3.org/WAI/planning/statements/ ; New Zealand Privacy Commissioner website privacy-statement guidance (search result). These inform drafting boundaries; they do not establish IMC jurisdiction or compliance.


## Maiane profile and structured data — 13 September 2026
User-supplied career facts: Maiane worked at New Zealand Van Lines, then in CaroTrans’s Export Division. Biography now describes relocation/export experience and attention to client care, without invented titles, dates, qualifications or guaranteed smooth outcomes. Reused on homepage, About and Person markup. Former employers are career context, not current IMC partners or endorsements.

Audit found no existing JSON-LD. Added server-rendered connected Organization, WebSite, page-specific WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList, Service on the five service pages, and Person entities on homepage and About only. Stable brand-domain IDs tie entities together; visible title/intro supply page descriptions. Both LinkedIn URLs belong to Person.sameAs, not Organization.sameAs. affiliation indicates association with IMC without asserting employment titles or founder status. No inferred author/reviewer credit.

Use accurate supported properties, not maximum schema volume. Legal name, registration, address, telephone, company profiles, standalone logo asset and accreditations require confirmation or preparation; do not invent them. No AggregateRating, reviews, prices, unsupported FAQ rich-result claims or booking actions for the disabled form. No LocalBusiness claim without sufficient operating/location facts. Person credentials must not be represented as corporate credentials. Draft policies remain drafts and do not imply approved compliance. TPI Code permanently excluded at user request.

All entity URLs target the intended public brand domain. Private/noindex preview remains protected and does not provide live Google eligibility. Check domain/asset resolution and Google Rich Results Test plus Schema.org Validator on public-launch configuration; exported JSON checks alone are not external validation or proof of ranking benefits.

Sources: https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data ; https://developers.google.com/search/docs/appearance/structured-data/organization ; https://developers.google.com/search/docs/appearance/site-names ; https://developers.google.com/search/docs/appearance/structured-data/breadcrumb ; https://schema.org/Service ; https://schema.org/Person .


## Diagram design refinement — 13 September 2026
User requested a more sophisticated finish. Rebuilt management journey and transport branching as responsive native HTML diagrams: explicit management band, connected stage columns, continuous inventory record, and decision branches with separate assessment notes. Rebuilt volume example as labelled proportional bars with calculations, a shared zero baseline and a fixed 2.10 m³ scale. Preserved the 0.50 + 1.60 = 2.10 m³ calculation and its survey limitation.

Unified figures with restrained rules, square corners, consistent typography and navy/teal hierarchy. Refined milestone markers, scope states, planning sequences, container outlines and measurement extension lines. Mobile journey/transport layouts stack rather than shrinking labels. No raster illustration, fabricated data, ranking claims or operational promises introduced. Container allocations remain illustrative, not capacity diagrams to scale. Validate build and exported graphic text; browser visual review remains outstanding.


## Unified typography — 13 September 2026
User approved standardising the existing Georgia/Arial pairing. app/typography.css now owns heading typography and shared role tokens. Removed conflicting heading family/size/weight/line-height/tracking declarations from earlier stylesheets while preserving layout, colour and spacing. Editorial H1/H2 and people names use Georgia with Times New Roman/serif fallbacks. Content H3, functional form headings, footer labels and diagram headings use Arial/Helvetica/sans-serif.

Fluid rem-based display/page/section scales; article subheadings share one scale; both people names use the same scale. Body prose is 17px at default settings, controls 16px, labels/captions 14px, with consistent role-based line heights. Form and diagram headings are deliberate functional exceptions to editorial serif headings. Original logo artwork remains unchanged. No new font downloads. Future typography changes belong in the central stylesheet rather than adding page-specific heading overrides. Build and CSS ownership checks required; browser visual QA remains outstanding.

## User guide library integration — 13 September 2026
Reviewed all eight guides in `international-moving-guides.md.pdf`; integration and qualifications are recorded in `docs/INTERNATIONAL-MOVING-GUIDES-REVIEW.md`. Added a chargeable-weight guide/calculator and enriched seven existing service/planning pages plus the homepage. Prioritise explanations of billing, handoffs, dependencies and evidence records over generic advice or repeated keywords.

Do not inherit first-person claims of owned warehouses/crews, customer volumes, accreditations or past cases from source prose. Do not universalise sample transit ranges, density factors, price crossover volumes, customs rules, insurance exclusions or free-time allowances. Source standards and carrier explanations are linked adjacent to the relevant claims. New examples are explicitly illustrative and explain inputs, formula and limits. New guide remains service-first; no geographic or programmatic expansion. Noindex and disabled enquiry submission remain unchanged.

## Branding research application — 14 September 2026
Read the complete 16-page `Branding_and_Logo_Design_Research_Guide(1).pdf`. The practical implementation and evidence limits are recorded in `docs/BRAND-APPLICATION-GUIDE.md`, which is the current companion for identity application. This amendment supersedes earlier proposed treatment where it conflicts with the selected logo, palette and typography rules.

Implemented: original IMC artwork paired with the full company name in shared responsive headers/footers; consistent navigation and “Plan your move” label; clearer homepage promise “International moving. Clearly managed.”; supplied Warwick/Maiane experience placed near the early introduction; restrained open-corner and teal-rule accents; defined colour roles, solid-colour contrast checks and reduced-motion support. Form step buttons describe their next step. Keep native diagrams and the central Georgia/Arial typography system. No additional font downloads or generated imagery.

The brand guide is design/research guidance, not evidence of IMC rights, familiarity, operational performance or SEO results. Original raster mark remains raster; production vector and approved small/one-colour/reversed artwork remain separate. No fake ratings, market recognition, legal rights or conversion improvements. Preserve all user-approved clean-break, service-first, private/noindex and disabled-submission constraints. No country rollout, legacy redirects or public launch.

## Supplied people portraits — 14 September 2026
The user supplied Maiane Cassanego’s 200 × 200 JPEG portrait and requested circular profile photographs. Both Maiane and Warwick now use the same responsive circular frame on the homepage and About page, with names, captions and biographies nearby. Maximum display diameter is 200px to respect Maiane’s source resolution. CSS handles the display crop; the original image files remain unchanged and no generative alteration is used.

Maiane’s existing Person entity now references the supplied photograph. This supersedes the earlier outstanding-photo note; unconfirmed job titles and other business particulars remain unconfirmed. Shared portrait styling belongs in `app/brand-application.css` and shared image markup in `app/person-portrait.tsx`.

## Maiane portrait enhancement — 14 September 2026
At the user’s request, the built-in imagegen tool produced a restrained enhancement of Maiane’s supplied 200 × 200 JPEG to reduce grain and compression artefacts. The brief preserves her facial structure, expression, age, skin tone, hairstyle, pose, white blouse, neutral background and square composition; it excludes beautification, reshaping, changed makeup, teeth whitening and stylisation. The generated result was visually inspected, then encoded as a 600 × 600 WebP (33,390 bytes) for the existing 200px circular display.

Both visible Maiane portraits and her Person.image now use `/maiane-cassanego-enhanced.webp`. The original `/maiane-cassanego.jpg` remains available unchanged. This amendment supersedes the previous instruction against generative alteration for this specific user-requested enhancement. Fine detail in the enhanced version is AI reconstructed, not verified detail recovered from a high-resolution original; do not describe it as an untouched original photograph. Warwick’s portrait, biographies, circular framing and site audience remain unchanged.


## PageSpeed remediation — 14 September 2026
The user supplied mobile performance/SEO and desktop accessibility screenshots. Those screenshots identify audit categories and estimates, not complete resource-level traces or a new verified score. Browser inspection of the deployed homepage confirmed colour inheritance errors in hero fact labels, the enquiry eyebrow and the process introduction, plus small teal labels below 4.5:1 on pale surfaces.

Keep the approved identity: `/public/imc-mark.webp` is a 328 × 126 delivery derivative of the original artwork's existing CSS crop (x410, y162, width730, height280), not a redesign. Preserve the original brand board. The visible header and footer now download the derivative. Use `--brand-accent-text` for small accent text on pale surfaces; keep the existing decorative palette. Scope Tailwind scanning to the app and explicitly listed UI primitives in `app/globals.css`; add a source entry whenever a new shared primitive is used. This excludes unused starter styles without removing IMC content.

Load the moving-size dropdown dynamically only when the visitor reaches the details step. Preserve its existing options, accessible label, styling and inventory behaviour. Main content and diagrams remain in the exported HTML; do not defer query answers behind interaction. Keep Next.js browser compatibility polyfills; a Lighthouse legacy-JavaScript estimate alone does not justify removing them. Retain preview noindex/nofollow and disabled enquiry submission until launch requirements are completed. Report measured asset-size changes separately from Lighthouse scores and real-user Core Web Vitals.


## Remaining PageSpeed diagnostics — 14 September 2026
The follow-up screenshot reports 100 ms estimated render-blocking savings, 54 KiB unused JavaScript, 12 KiB legacy JavaScript and one long task, with LCP/dependency details collapsed. These are audit estimates, not attribution to specific resources or proof that every listed item is a defect.

Remove avoidable initial JavaScript: keep the comparison table as a Server Component, and use the native input, textarea, checkbox and lightweight ARIA progress indicator in `app/form-controls.tsx`. Preserve labelled controls, keyboard operation, calculation boundaries, reset behaviour and current design. The complex moving-size menu retains Radix and remains deferred until step two. The shared primitive catalog is retained for future use; import it only when its behaviour is needed. Tailwind now scans the app, the used select and the server-rendered table. Native controls are styled in `app/brand-application.css`.

The built homepage's initial modern JavaScript decreased from 502,088 to 453,846 bytes; local gzip comparison decreased from 151,192 to 135,332 bytes. These are asset comparisons, not a new Lighthouse score or measured user timing. CSS remains one cacheable file, approximately 19 KB with local gzip compression. Do not inline the whole shared stylesheet to hide a render-blocking audit: it duplicates styles across page responses and sacrifices cross-page caching. The favicon preserves its original layout but embeds the optimised logo derivative, reducing it from 68,257 to 6,014 bytes. Neither visible artwork nor the colour scheme is redesigned.

Next.js's built-in compatibility module contains conditional polyfills. Leave it intact unless a supported framework change and explicit browser-support decision justify removing it; do not alias framework internals to empty modules. The exact remaining LCP subparts and long-task source still require the expanded report or trace. Preserve the preview indexing and enquiry-submission boundaries.

## Articles section and first article — 17 September 2026

A `/blog/` section was created, separate from `/moving-guides/`. Guides answer a task the customer is performing; articles explain the industry the move happens inside. Keeping them apart stops the guide library filling with reference material nobody is mid-task on. `/blog/` and its first article are registered in `site-pages.ts`, so both appear in the XML sitemap and the HTML site map.

### Page brief — /blog/largest-shipping-companies/

```text
Page ID / canonical URL:      /blog/largest-shipping-companies/
Phase / status / owner:       New articles section; drafted for editorial review
Primary audience, task:       Someone shipping a household who has been told a carrier name, or
                              who is researching which lines carry international shipments, and
                              wants to know whether the name matters to their move
Primary query cluster:        "top 10 shipping companies in the world", "world leading shipping
                              companies", "international shipping companies", "biggest shipping
                              companies", "shipping company ranking"
Distinct purpose:             No existing IMC page covers carriers, alliances or schedule
                              reliability. /guides/international-moving-times/ owns milestones and
                              does not name carriers or quantify lateness.
Main answer:                  The ten largest carriers by operated capacity, then the two things a
                              ranking by size cannot tell you — punctuality and alliance sharing.
IMC contribution:             Three additions the comparison set does not carry. (1) Schedule
                              reliability alongside capacity: global 56.4% for July 2026, a 43.9pp
                              spread between the best and worst carrier, 6.06 days average lateness.
                              (2) Alphaliner's consolidation rule, which explains why two "top ten"
                              lists disagree and why a bill of lading may show APL or Hamburg Süd.
                              (3) The household-move reality that the customer does not choose the
                              carrier, with five answerable questions replacing a request for one
                              by name.
Operational claims:           None. The page makes no claim about IMC's own carriers, rates,
                              transit times or relationships, and states that no carrier pays for
                              its position.
Sources / access dates:       Alphaliner operated-capacity ranking as reported for 4 January 2026,
                              cross-checked against two independent write-ups of the same release;
                              Alphaliner consolidation notes, alphaliner.axsmarine.com/PublicTop100,
                              accessed 17 September 2026; Sea-Intelligence Global Liner Performance
                              covering July 2026, reported 27 August 2026; alliance composition
                              effective February 2025. All held in app/shipping-carriers.ts.
Date assumptions:             Every figure is presented with its as-of date. Capacity is not
                              presented as live. The 97,000 TEU difference between the sum of the
                              ten rows and Alphaliner's own headline total is stated on the page
                              rather than reconciled silently.
Author / basis:               Editorial, compiled from named third-party industry sources. No
                              first-hand carrier experience is claimed.
Visual component:             Five comparison tables (the ranking, consolidated brands, schedule
                              reliability, alliance membership, the questions to ask), two working
                              tools, and four server-rendered SVG figures added 17 September 2026
                              and recorded below.
Incoming / outgoing links:    In from /blog/ and the site map. Out to /guides/international-moving-
                              times/, /guides/comparing-international-moving-quotes/,
                              /services/shared-container/.
Primary CTA:                  Standard ContentShell enquiry path.
Metadata / rendering:         Static. Title 10 Largest International Shipping Companies (2026).
                              PageStructuredData via ContentShell.
Review trigger:               Recorded in REVIEW in app/shipping-carriers.ts — a top-ten position
                              changing hands, monthly reliability moving more than 5pp, or an
                              alliance membership change.
Unresolved issues:            Capacity data is from January 2026; Alphaliner's live table is
                              JavaScript-rendered and could not be read directly, so a more recent
                              snapshot should replace it when available. Search demand for this
                              cluster is predominantly US and Indian informational traffic, not UK
                              or commercial — recorded below.
```

### Evidence note on search demand

The GSC export supplied for this topic covers a page on a different domain and shows the cluster is maritime-industry reference demand, not moving demand: of 336 queries, 201 concern ocean-carrier capacity rankings and none concern moving, removals or relocation. Geography was 36.6% United States, 10.6% India and 9.3% United Kingdom. The page earned 109 clicks from 9,172 impressions, a 1.19% CTR at average position 8.13, and its largest single query took 1,056 impressions at position 8.9 with no clicks.

That source page also lost approximately 99% of its impressions between 25 and 27 June 2026 and has not recovered. This is consistent with, and independently corroborates, the spam-update decline already recorded in the separate-build decision above. No content, markup or link from that domain has been imported here, and the article was written from primary industry sources rather than from it.

This article is therefore expected to attract informational rather than commercial traffic. It is justified as topical coverage and demonstrable expertise, not as an enquiry driver, and should be measured that way.


## Visual semantics applied to the shipping-companies article — 17 September 2026

The article shipped with tables and two working tools but no diagrams. Four server-rendered
SVG figures were added, in `app/shipping-graphics.tsx`, each chosen from the question it
answers rather than for decoration, and each teaching something no table on the page states.

| Figure | Form | What it teaches that the tables do not |
| --- | --- | --- |
| Operated capacity, and the gap the ranking hides | Proportional bars on a shared zero baseline, plus a measured bracket | The first-to-second gap of 2,524,000 TEU is drawn again beside the fifth-place bar, so the reader sees that the gap is wider than an entire top-five fleet. A hatched residual bar puts the ten against the rest of the world fleet. |
| What 56.4% schedule reliability looks like as ships | Unit array, one square per arrival in a hundred | Converts a percentage nobody pictures into a countable quantity: 56 squares held, 44 did not. |
| The spread the global average hides | Dot plot on a single 0–100% scale with the worldwide figure as a dashed reference | The 43.9-point span between best and worst is measured on the same scale as the rows, and each row carries its size rank, so size and punctuality are visibly unrelated. |
| The same capacity, grouped by alliance instead of by carrier | Allocation schematic: one stacked bar, then the same blocs broken into members on the same scale | Produces four totals that appear nowhere else on the page, and ends with the comparison the alliance table cannot make — MSC alone against the whole Premier Alliance. |

### Rules this work established

**Colour is computed, not chosen.** The categorical set used here (`#0083a0`, `#eb6834`,
`#4a3aa7`, `#008300`) was validated against the lightness band, the chroma floor, adjacent-pair
colour-vision separation and 3:1 contrast on the white figure surface before any SVG was written.
The brand accent `#167d8d` was tested first and fails the chroma floor at 0.089 — it reads as grey
when asked to carry identity — so the teal used in figures is one step deeper. Brand accent remains
correct for interface and single-mark use; it is not a categorical slot.

**Identity never rests on hue.** Every alliance bloc carries a letter A–D as well as a colour, every
bar is directly labelled with its value, and the "everything else" marks are hatched rather than
given a hue of their own, so they cannot be mistaken for a named category.

**No invented marks.** Where a quantity is not published — schedule reliability for the seven
top-ten carriers Sea-Intelligence did not name, or how much of a group's volume moves under a
subsidiary brand — there is no mark and the caption says why the row is absent.

**Deliberate deviations from general charting practice.** These figures carry no hover or tooltip
layer and label every mark rather than a selection. The site is statically exported and its figures
are server-rendered; each figure also sits directly beside the table carrying the same numbers,
which is the text equivalent. Adding client-side interaction for values already printed on the page
would trade the guarantee for nothing.

**Narrow screens.** Figures keep the house pattern: the canvas is a focusable scroll region with an
accessible label, and the SVG holds its minimum width rather than shrinking text below legibility.
The reliability dot plot was restructured so its labels sit above each mark instead of in a left
gutter, which removed a third of its width and brought the data into view on a phone without
scrolling. Prefer that arrangement for any new figure with long row labels.
