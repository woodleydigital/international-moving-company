import { maianeBio } from "./people-data";
// lastmod feeds the sitemap. Bump it when this page's wording changes
// substantively; leave it alone for typographic or layout-only edits.
export type PolicyPage = {title:string;intro:string;sections:[string,string][];pending:string;lastmod:string};
export const policyPages: Record<string,PolicyPage> = {
  "privacy-policy": {
    "lastmod": "2026-09-14",
    "title": "Privacy Policy",
    "intro": "How information is handled in the IMC website preview, and what must be confirmed before enquiries go live.",
    "sections": [
      [
        "Who is responsible for your information?",
        "International Moving Company (IMC) is the brand presented on this website. The operating legal entity, business address and privacy contact have not yet been confirmed for this notice. This draft must be completed before the public enquiry service launches."
      ],
      [
        "Information in the enquiry form",
        "The form asks for origin and destination addresses, moving date, shipment size, inventory quantities, notes, name, email and telephone number. In this preview, those entries are held in the page’s temporary browser state. Submission is disabled and the form does not send an enquiry to IMC. Please use fictional details when reviewing the preview."
      ],
      [
        "Website hosting and external links",
        "The hosting and access platform may process technical information, such as network requests and sign-in details, to deliver and protect the preview. Its own privacy terms apply to that processing. Following an external link, including LinkedIn, takes you to a separate service with its own privacy practices."
      ],
      [
        "Cookies, analytics and address lookup",
        "The IMC application currently has no configured advertising trackers, analytics integration or Google address autocomplete. This does not mean the hosting platform is cookie-free. A review of hosting cookies and technical logs is required before the final notice can describe all processing."
      ],
      [
        "Planned enquiry handling",
        "Before submission is enabled, this notice must identify the purposes for collecting each field; who receives enquiries; any moving partners, hosting providers or customer-management services involved; overseas handling; applicable legal grounds; retention periods; security arrangements; and any separate marketing choices. No partner-sharing or marketing workflow is authorised by this draft."
      ],
      [
        "Access, correction and privacy concerns",
        "A working privacy contact and the applicable rights and complaint process must be added before launch. Do not enter identity documents, payment details or sensitive personal information into the preview. The contact page explains the current availability of enquiry channels."
      ]
    ],
    "pending": "Confirm the legal operator, jurisdiction, privacy contact, processors, countries of processing, retention schedule and actual enquiry workflow."
  },
  "terms-and-conditions": {
    "lastmod": "2026-09-14",
    "title": "Terms & Conditions",
    "intro": "Draft website-use terms for IMC. A booked international move will need a separate, agreed service contract.",
    "sections": [
      [
        "Scope of these terms",
        "This draft concerns information and planning tools on the IMC website. It is not a removal contract, an accepted quotation or an insurance policy. The legal contracting entity and applicable jurisdiction must be confirmed before these terms take effect."
      ],
      [
        "Planning information and estimates",
        "Guides explain common decisions in international moving. Inventory volumes and dimension calculations are planning estimates, not a surveyed shipment volume, a container loading guarantee or a binding price. The suitability, availability and scope of a service depend on the specific move."
      ],
      [
        "Enquiries and bookings",
        "The preview form cannot submit requests or create bookings. For the live service, any booking process must clearly identify the contracting parties, agreed services, price and currency, taxes, payment schedule, exclusions and the point at which a contract is formed."
      ],
      [
        "Responsibilities for a move",
        "The service agreement will need to specify responsibilities for packing, access, inventory accuracy, restricted goods, documentation, customs, storage and destination delivery. It must distinguish IMC’s management role from any carrier or partner’s obligations. No service contract is supplied by this website draft."
      ],
      [
        "Changes, cancellation, loss and complaints",
        "Move-specific terms must address changes to scope, cancellation and refunds, delays, damage or loss, liability, insurance options, claims deadlines and dispute handling. These provisions require review against the actual operating model and applicable consumer law; no arbitrary liability caps or waiver of statutory rights are included here."
      ],
      [
        "Responsible website use",
        "Use the site lawfully. Do not attempt unauthorised access, disrupt its operation, submit malicious material or misuse another person’s information. External websites are operated separately; check their terms when following links."
      ],
      [
        "Updates and contact",
        "The final terms must show their effective date and provide a working business contact. Material changes to a booked move should be addressed through the agreed contract and applicable law, rather than by silently changing website text."
      ]
    ],
    "pending": "Confirm legal entity, address, governing law, booking model, service terms, payment and cancellation rules, liability, insurance and dispute process."
  },
  "modern-slavery-statement": {
    "lastmod": "2026-09-14",
    "title": "Modern Slavery Statement",
    "intro": "A proposed approach to preventing forced labour and exploitation in international relocation supply chains.",
    "sections": [
      [
        "Status of this statement",
        "This is a draft policy for review, not a signed annual statutory statement. IMC’s reporting obligations, reporting period and approving officer have not been established. No supplier audits, training programmes or completed investigations are asserted."
      ],
      [
        "Proposed commitment",
        "IMC’s proposed standard is to reject forced labour, human trafficking and exploitative recruitment in its own operations and the services it arranges. Workers should be free to leave employment in accordance with lawful arrangements and should not have identity documents withheld to control them."
      ],
      [
        "Where risks can arise",
        "International moves can involve packing crews, road carriers, shipping services, warehouses and destination agents across several countries. Subcontracting and recruitment arrangements can make working conditions harder to see. A risk review should consider who performs each service and how workers are recruited and treated."
      ],
      [
        "Proposed supplier checks and response",
        "Before adoption, IMC should assign responsibility for proportionate supplier checks, recording concerns and seeking corrective action. Credible concerns should be assessed with attention to worker safety; serious unresolved concerns may require pausing or ending a supplier relationship. These are proposed procedures, not claims of checks already performed."
      ],
      [
        "Reporting and accountability",
        "A confidential reporting contact, escalation route and protection against retaliation must be established before the policy is adopted. Any annual statement should describe actual actions and outcomes for its stated reporting period, with the appropriate approval and sign-off."
      ]
    ],
    "pending": "Confirm applicability, reporting period, responsible officer, supplier procedures, reporting channel and approval. Do not add a signature or compliance badge without evidence."
  },
  "code-of-ethics": {
    "lastmod": "2026-09-14",
    "title": "Code of Ethics",
    "intro": "Proposed standards for honest advice, respectful conduct and responsible international relocation management.",
    "sections": [
      [
        "Clear and honest information",
        "Explain what a service includes, who is responsible and what remains uncertain. Do not misrepresent prices, delivery dates, accreditation, experience or customer feedback. Correct material errors when identified."
      ],
      [
        "Fair commercial conduct",
        "Explain material charges and exclusions before agreement. Disclose relevant conflicts of interest and commercial relationships where they could affect advice. Do not offer or accept bribes or improper inducements."
      ],
      [
        "Respect for people and belongings",
        "Treat customers, colleagues and service partners with dignity. Handle concerns respectfully, protect confidential information and take appropriate care with personal belongings. Do not tolerate harassment, intimidation or discriminatory conduct."
      ],
      [
        "Responsible service coordination",
        "Identify the responsibilities of IMC and each service provider clearly. Share information only for legitimate, agreed purposes and through appropriate channels. Escalate concerns about safety, service quality or unlawful activity to a designated responsible person."
      ],
      [
        "Concerns and review",
        "The final code must name an accountable owner and provide a working reporting and complaints route. Reports should be considered fairly, and people raising concerns in good faith should not face retaliation. Adoption, training and enforcement arrangements remain subject to confirmation."
      ]
    ],
    "pending": "Approve this proposed code and confirm its owner, reporting route, conflict-disclosure process and implementation."
  },
  "edi-policy": {
    "lastmod": "2026-09-14",
    "title": "Equality, Diversity & Inclusion Policy",
    "intro": "Proposed principles for fair treatment and an inclusive experience when working with IMC.",
    "sections": [
      [
        "Purpose and scope",
        "This draft covers how IMC proposes to treat customers, colleagues, applicants and service partners. It is a proposed policy, not a claim about current staffing, workforce statistics or completed training."
      ],
      [
        "Fair treatment",
        "Decisions should be based on relevant needs, skills and service requirements, without unlawful discrimination. Harassment, bullying and victimisation should not be tolerated. Applicable legal protections must be reviewed for the jurisdictions in which IMC operates."
      ],
      [
        "Inclusive communication",
        "Use clear language, avoid assumptions about family structures or personal circumstances, and discuss communication preferences respectfully. Where practical, agree an accessible format or alternative way of discussing a move. Do not promise translation or assistance services that have not been arranged."
      ],
      [
        "Adjustments and confidentiality",
        "Consider requests for adjustments individually and explain what can be provided. Ask only for information needed to understand a request, handle it sensitively and avoid unnecessary collection of health or other sensitive information."
      ],
      [
        "Raising concerns",
        "The adopted policy needs a named responsible person and a working, accessible reporting route. Concerns should be reviewed fairly, with appropriate confidentiality and no retaliation for good-faith reporting. Review the policy when services or applicable requirements change."
      ]
    ],
    "pending": "Confirm policy ownership, reporting channels, adjustment process, relevant jurisdictions and approval."
  },
  "accessibility": {
    "lastmod": "2026-09-14",
    "title": "Accessibility",
    "intro": "How the IMC preview supports access, its known limitations and the work still needed before launch.",
    "sections": [
      [
        "Using the website",
        "The site includes semantic headings, a skip-to-content link, labelled form controls and visible keyboard focus styles. Diagrams have text labels and accompanying explanations. Layouts are designed to reflow on smaller screens."
      ],
      [
        "Tools and diagrams",
        "Some detailed diagrams and tables scroll horizontally on narrow screens to keep labels readable. Inventory selection and quote steps use interactive controls. These interactions still need testing with assistive technologies and at increased text sizes."
      ],
      [
        "Conformance status",
        "A complete accessibility audit has not been carried out. IMC does not currently claim WCAG conformance or accessibility certification. Successful compilation and checks of page structure do not establish accessibility for every visitor."
      ],
      [
        "Known limitations",
        "The enquiry form is a preview and cannot submit a request. Alternative enquiry and accessibility support channels have not yet been confirmed. Keyboard, screen-reader, zoom, colour-contrast and mobile usability testing remain part of the pre-launch review."
      ],
      [
        "Feedback and improvements",
        "Before launch, this page needs a working accessibility contact, an alternative contact method and an accurate response process. Feedback should include the affected page, the task attempted and, if the person wishes to share it, the browser or assistive technology used."
      ]
    ],
    "pending": "Complete accessibility testing and confirm an accessible support route before public launch."
  },
  "about-us": {
    "lastmod": "2026-09-14",
    "title": "About International Moving Company",
    "intro": "IMC is an international relocation management company focused on door-to-door household removals worldwide.",
    "sections": [
      [
        "Our role in your move",
        "We bring the stages of an international move together: origin services, international transport and destination delivery. A clear plan should explain the services involved, responsibilities, exclusions and decisions that need your attention."
      ],
      [
        "Warwick Woodley",
        "Warwick brings more than four decades of hands-on experience in international moving and freight forwarding. A former FIDI Academy trainer, he has trained moving professionals around the world. At IMC, he draws on that experience to help make international moving more personal and transparent."
      ],
      [
        "Maiane Cassanego",
        maianeBio
      ]
    ],
    "pending": ""
  },
  "contact-us": {
    "lastmod": "2026-09-14",
    "title": "Contact IMC",
    "intro": "Discussing an international move starts with your origin, destination, timing and the belongings you plan to take.",
    "sections": [
      [
        "Enquiries are not yet open on this preview",
        "The quote form is available for reviewing the enquiry journey, but submission is disabled. No request is sent and no booking is made. Please use fictional information when exploring it."
      ],
      [
        "What to prepare",
        "Have your origin and destination locations, preferred moving period and an outline of your shipment ready. For a small move, the inventory tool helps list individual items and estimate their volume in cubic metres."
      ],
      [
        "Business and policy contacts",
        "A verified business email, telephone number, business address and contacts for privacy, accessibility and complaints have not yet been supplied. This page will be completed before the site opens for enquiries."
      ]
    ],
    "pending": "Supply verified contact details and confirm who will receive and respond to enquiries."
  }
};
