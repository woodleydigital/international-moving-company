import { enquirySchema, formatEnquiry } from "@/lib/enquiry";
import { EmailNotConfiguredError, sendEmail } from "@/lib/email";

// Rejecting a 5 MB body before parsing it costs nothing.
const MAX_BODY_BYTES = 32_000;

const WINDOW_MS = 10 * 60 * 1000;
// Two limits, because they protect different things. Sends are what cost money
// and inbox attention, so they are capped tightly. Total requests are capped
// loosely, only to blunt a flood — someone mistyping the form five times must
// not be locked out.
const MAX_SENDS = 5;
const MAX_REQUESTS = 40;

// Best-effort only: these live in one warm serverless instance, so they slow a
// single sender down but do not coordinate across instances. Vercel's firewall
// rate limiting is the durable control; see docs/DEPLOYMENT.md.
const attempts = new Map<string, number[]>();
const sends = new Map<string, number[]>();

function overLimit(log: Map<string, number[]>, client: string, max: number): boolean {
  const now = Date.now();
  const recent = (log.get(client) ?? []).filter(at => at > now - WINDOW_MS);
  // Keep the maps from growing without bound on a long-lived instance.
  if (log.size > 5000) log.clear();
  if (recent.length >= max) { log.set(client, recent); return true; }
  recent.push(now);
  log.set(client, recent);
  return false;
}

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for") ?? "";
  return forwarded.split(",")[0].trim() || "unknown";
}

export async function POST(request: Request) {
  const declared = Number(request.headers.get("content-length") ?? 0);
  if (declared > MAX_BODY_BYTES) {
    return Response.json({ error: "That request is too large." }, { status: 413 });
  }

  const client = clientKey(request);
  const tooMany = { error: "Too many requests. Please try again shortly, or email us directly." };
  if (overLimit(attempts, client, MAX_REQUESTS)) return Response.json(tooMany, { status: 429 });

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "We could not read that request." }, { status: 400 });
  }

  const parsed = enquirySchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { error: parsed.error.issues[0]?.message ?? "Please check the details and try again." },
      { status: 400 },
    );
  }

  // A filled honeypot is a bot. Answer as though it worked so it learns nothing.
  if (parsed.data.website) return Response.json({ ok: true });

  // Only real send attempts count against the tight limit.
  if (overLimit(sends, client, MAX_SENDS)) return Response.json(tooMany, { status: 429 });

  const { subject, text } = formatEnquiry(parsed.data);
  try {
    await sendEmail({ subject, text, replyTo: parsed.data.email });
  } catch (error) {
    // The enquirer must never see configuration detail or provider internals.
    console.error("Quote enquiry could not be delivered:", error);
    const message = error instanceof EmailNotConfiguredError
      ? "Quote requests are not being delivered yet. Please email us directly."
      : "We could not send that just now. Please try again, or email us directly.";
    return Response.json({ error: message }, { status: 502 });
  }

  return Response.json({ ok: true });
}
