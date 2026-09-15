/**
 * Transactional email, kept behind one function so the provider is a
 * single-file change. Currently Postmark.
 */

export type OutgoingEmail = {
  subject: string;
  text: string;
  /** Set to the enquirer so a reply in the mail client reaches them directly. */
  replyTo?: string;
};

export class EmailNotConfiguredError extends Error {}

const POSTMARK_ENDPOINT = "https://api.postmarkapp.com/email";

export async function sendEmail(mail: OutgoingEmail): Promise<void> {
  // Trimmed because a value pasted into a hosting dashboard often carries a
  // trailing newline or space, which the provider rejects as a bad credential
  // with no hint that whitespace is the cause.
  const token = process.env.POSTMARK_SERVER_TOKEN?.trim();
  // Postmark only accepts a confirmed Sender Signature or verified domain here.
  const from = process.env.ENQUIRY_FROM?.trim();
  const to = process.env.ENQUIRY_TO?.trim();
  if (!token || !from || !to) {
    throw new EmailNotConfiguredError("POSTMARK_SERVER_TOKEN, ENQUIRY_FROM and ENQUIRY_TO must all be set");
  }

  const response = await fetch(POSTMARK_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Postmark-Server-Token": token,
    },
    body: JSON.stringify({
      From: from,
      To: to,
      Subject: mail.subject,
      TextBody: mail.text,
      ...(mail.replyTo ? { ReplyTo: mail.replyTo } : {}),
      MessageStream: process.env.POSTMARK_MESSAGE_STREAM?.trim() || "outbound",
    }),
  });

  // Postmark reports failures both as non-2xx and as a non-zero ErrorCode.
  const body = await response.json().catch(() => null) as { ErrorCode?: number; Message?: string } | null;
  if (!response.ok || (body?.ErrorCode ?? 0) !== 0) {
    throw new Error(`Postmark rejected the message (HTTP ${response.status}, code ${body?.ErrorCode ?? "?"}): ${body?.Message ?? "no detail"}`);
  }
}
