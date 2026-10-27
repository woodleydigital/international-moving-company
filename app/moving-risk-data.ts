/**
 * Sources for the international-moving risk article.
 *
 * Every regulatory statement in that article and its figures reads from here,
 * so a citation cannot drift from the sentence that relies on it. Each entry
 * records the instrument, the point it supports and where it was read.
 *
 * Retrieved 27 October 2026 from the eCFR API (current as at 1 October 2026)
 * and, where noted, from the named company's own public description.
 *
 * Scope limit worth repeating wherever these are used: 46 CFR Parts 541 and
 * 545 are United States rules, binding on ocean common carriers, marine
 * terminal operators and NVOCCs in US trades. They do not govern a UK-to-
 * Australia move, or the origin leg of a move leaving the UK. Do not let the
 * article imply otherwise.
 */

export interface Citation {
  /** Short label used in captions and inline references */
  ref: string
  /** What the instrument is called in full */
  title: string
  /** The specific point this citation supports */
  holds: string
  url: string
}

export const CITATIONS: Record<string, Citation> = {
  ces: {
    ref: "19 CFR 118.1",
    title: "Centralized examination stations — definition",
    holds:
      "A CES is a privately operated facility, not in the charge of a Customs officer, at which merchandise is made available to Customs officers for physical examination.",
    url: "https://www.ecfr.gov/current/title-19/part-118/section-118.1",
  },
  cesFees: {
    ref: "19 CFR 118.4(c)",
    title: "Responsibilities of a CES operator",
    holds:
      "The operator assesses service fees as set out in the fee schedule in its approved application, and bills users directly for services rendered.",
    url: "https://www.ecfr.gov/current/title-19/part-118/section-118.4",
  },
  cesFeeChange: {
    ref: "19 CFR 118.5",
    title: "Procedures for changes to a fee schedule",
    holds:
      "A CES operator must give the port director 90 calendar days' written notice of a fee change with a justification; the public is invited to comment and the port director decides whether to approve it.",
    url: "https://www.ecfr.gov/current/title-19/part-118/section-118.5",
  },
  ddDefinition: {
    ref: "46 CFR 541.3",
    title: "Demurrage and detention — definition",
    holds:
      "Demurrage or detention means any charge, including per diem, related to the use of marine terminal space or shipping containers, but not including freight charges.",
    url: "https://www.ecfr.gov/current/title-46/part-541/section-541.3",
  },
  ddInvoice: {
    ref: "46 CFR 541.6",
    title: "Contents of a demurrage or detention invoice",
    holds:
      "The invoice must carry identifying, timing, rate and dispute information, and certifications that the charge complies with the Commission's rules and that the billing party's own performance did not cause or contribute to it.",
    url: "https://www.ecfr.gov/current/title-46/part-541/section-541.6",
  },
  ddUnenforceable: {
    ref: "46 CFR 541.5",
    title: "Failure to include required information",
    holds:
      "Failure to include any of the required minimum information eliminates any obligation of the billed party to pay the charge.",
    url: "https://www.ecfr.gov/current/title-46/part-541/section-541.5",
  },
  ddThirtyDays: {
    ref: "46 CFR 541.7(a)",
    title: "Issuance of demurrage and detention invoices",
    holds:
      "A billing party must issue the invoice within 30 calendar days of the date the charge was last incurred; if it does not, the billed party is not required to pay.",
    url: "https://www.ecfr.gov/current/title-46/part-541/section-541.7",
  },
  ddDispute: {
    ref: "46 CFR 541.8",
    title: "Requests for fee mitigation, refund or waiver",
    holds:
      "The billed party gets at least 30 calendar days from issuance to request mitigation, refund or waiver, and the billing party must attempt to resolve it within 30 days of receiving the request.",
    url: "https://www.ecfr.gov/current/title-46/part-541/section-541.8",
  },
  incentive: {
    ref: "46 CFR 545.5(c)",
    title: "Incentive principle",
    holds:
      "In assessing whether a demurrage or detention practice is reasonable, the Commission considers the extent to which the charge serves its intended purpose as a financial incentive promoting freight fluidity.",
    url: "https://www.ecfr.gov/current/title-46/part-545/section-545.5",
  },
  incentiveEmpties: {
    ref: "46 CFR 545.5(c)(2)(ii)",
    title: "Empty container return",
    holds:
      "Absent extenuating circumstances, imposing detention when it cannot serve its incentivising purpose — such as when empty containers cannot be returned — is likely to be found unreasonable.",
    url: "https://www.ecfr.gov/current/title-46/part-545/section-545.5",
  },
  incentiveInspections: {
    ref: "46 CFR 545.5(c)(2)(iv)",
    title: "Government inspections",
    holds:
      "In the context of government inspections, the Commission may consider the extent to which demurrage and detention are serving their intended purposes, and may consider extenuating circumstances.",
    url: "https://www.ecfr.gov/current/title-46/part-545/section-545.5",
  },
  priceTransfer: {
    ref: "PriceTransfer, Inc.",
    title: "Centralized Examination Station Y265",
    holds:
      "PriceTransfer describes itself as operating Centralized Examination Station Y265 serving the ports of Los Angeles and Long Beach, with CBP, AQI/CBPA and FDA officers stationed on site. This is the company's own description of its facilities, not an IMC assessment of it.",
    url: "https://www.pricetransfer.com",
  },
}

/** The required invoice fields, grouped as 46 CFR 541.6 groups them. */
export const INVOICE_FIELDS: { group: string; fields: string[] }[] = [
  {
    group: "Identifying",
    fields: [
      "Bill of lading number(s)",
      "Container number(s)",
      "Port of discharge (imports)",
      "Why you are the party liable for the charge",
    ],
  },
  {
    group: "Timing",
    fields: [
      "Invoice date and due date",
      "Allowed free time, in days",
      "Start date and end date of free time",
      "Container availability date (imports)",
      "The specific dates charged",
    ],
  },
  {
    group: "Rate",
    fields: [
      "Total amount due",
      "The tariff rule, terminal schedule or contract the daily rate comes from",
      "The specific rate or rates",
    ],
  },
  {
    group: "Dispute",
    fields: [
      "Contact for questions and for a mitigation, refund or waiver request",
      "A URL, QR code or similar pointing to what a request must contain",
      "The timeframes for requesting and for resolution",
    ],
  },
  {
    group: "Certifications",
    fields: [
      "That the charge complies with the Commission's demurrage and detention rules",
      "That the billing party's own performance did not cause or contribute to the charge",
    ],
  },
]

export const INVOICE_FIELD_COUNT = INVOICE_FIELDS.reduce((n, g) => n + g.fields.length, 0)
