import { z } from "zod";

/**
 * Shape of a quote request, validated on the server rather than trusted from
 * the browser. The form is public, so every field is bounded.
 */
// A missing field and an empty one are the same mistake to the person filling
// the form, so both carry the wording they should actually see.
const required = (message: string, max: number) =>
  z.string({ required_error: message, invalid_type_error: message })
    .trim().min(1, message).max(max, "That answer is longer than we can accept.");

export const enquirySchema = z.object({
  origin: required("Enter where you are moving from", 300),
  destination: required("Enter where you are moving to", 300),
  movingDate: z.string().trim().max(40).default(""),
  movingSize: required("Select your moving size", 80),
  notes: z.string().trim().max(4000, "Please shorten your notes.").default(""),
  name: required("Enter your name", 150),
  email: required("Enter your email address", 254).email("Enter a valid email address"),
  phone: required("Enter a phone number", 50),
  inventory: z.array(z.object({
    item: z.string().trim().min(1).max(120),
    quantity: z.number().int().min(1).max(999),
    volumeM3: z.number().positive().max(100),
  })).max(200).default([]),
  // Honeypot. Hidden from people, so anything in it came from a bot. Accepted
  // by the schema on purpose: rejecting it here would tell the bot the field
  // matters. The route checks it after parsing and quietly discards.
  website: z.string().max(2000).default(""),
});

export type Enquiry = z.infer<typeof enquirySchema>;

/** Recomputed here rather than taken from the browser. */
export function totalVolumeM3(inventory: Enquiry["inventory"]): number {
  const cubicCentilitres = inventory.reduce(
    (sum, line) => sum + Math.round(line.volumeM3 * 100) * line.quantity, 0);
  return cubicCentilitres / 100;
}

/** Plain text, because this is read by a person in a mail client. */
export function formatEnquiry(enquiry: Enquiry): { subject: string; text: string } {
  const lines = [
    `From:        ${enquiry.origin}`,
    `To:          ${enquiry.destination}`,
    `Moving date: ${enquiry.movingDate || "not given"}`,
    `Moving size: ${enquiry.movingSize}`,
    "",
    `Name:        ${enquiry.name}`,
    `Email:       ${enquiry.email}`,
    `Phone:       ${enquiry.phone}`,
  ];

  if (enquiry.inventory.length) {
    const items = enquiry.inventory.reduce((sum, line) => sum + line.quantity, 0);
    lines.push("", `Inventory:   ${items} items, ${totalVolumeM3(enquiry.inventory).toFixed(2)} m³ estimated`);
    for (const line of enquiry.inventory) {
      const volume = (Math.round(line.volumeM3 * 100) * line.quantity / 100).toFixed(2);
      lines.push(`  ${String(line.quantity).padStart(3)} × ${line.item} — ${volume} m³`);
    }
  }

  if (enquiry.notes) lines.push("", "Notes:", enquiry.notes);
  lines.push("", "Volumes are the customer's own estimates from the website tool, not a survey.");

  return {
    subject: `Quote request: ${enquiry.origin} → ${enquiry.destination}`,
    text: lines.join("\n"),
  };
}
