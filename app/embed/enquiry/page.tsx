import type { Metadata } from "next";
import { ENQUIRY_SOURCES } from "@/lib/enquiry";
import { EmbeddedEnquiry } from "./embedded-enquiry";
import "./embed.css";

/**
 * The quote form alone, for embedding in an iframe on an IMC division site
 * (for example removalstonz.com). No header, footer or navigation: the host
 * page supplies those. Enquiries post to the same /api/quote/ route as the
 * main site and are tagged with their source.
 *
 *   /embed/enquiry/?source=removalstonz&market=uk&page=/uk/&to=New%20Zealand
 *
 * Which sites may frame this page is set by the Content-Security-Policy
 * frame-ancestors header in next.config.ts, not here.
 */
export const metadata: Metadata = {
  title: "Plan your move | IMC",
  robots: { index: false, follow: false },
};

type Params = Promise<Record<string, string | string[] | undefined>>;

const one = (value: string | string[] | undefined) => (Array.isArray(value) ? value[0] : value) ?? "";
const slug = (value: string, max: number) => (/^[a-z0-9-]*$/.test(value) ? value.slice(0, max) : "");

export default async function EmbedEnquiry({ searchParams }: { searchParams: Params }) {
  const params = await searchParams;
  // Only registered sources are passed through; anything else is ignored rather
  // than echoed into the email subject.
  const requested = slug(one(params.source), 40);
  const source = requested in ENQUIRY_SOURCES ? requested : "";
  const market = slug(one(params.market), 20);
  const page = one(params.page).startsWith("/") ? one(params.page).slice(0, 300) : "";
  const destination = one(params.to).slice(0, 120);

  return (
    <main className="embed-shell">
      <EmbeddedEnquiry
        origin={source ? { source, market, page } : undefined}
        initialDestination={destination}
      />
    </main>
  );
}
