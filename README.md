# International Moving Company (IMC)

The complete Next.js website for International Moving Company: worldwide door-to-door international relocation management. The intended public domain is https://internationalmoving.company.

## Project contents

- `app/`: homepage, service and planning pages, company/policy pages, shared layout, structured data and interactive quote form.
- `app/inventory-data.ts`: 89 merged inventory entries with item volumes in cubic metres.
- `app/person-portrait.tsx` and `public/`: shared circular portraits, supplied/enhanced photographs, original IMC identity and website assets.
- `lib/`: shared calculation logic; `components/` and `hooks/`: interface building blocks.
- `IMC-PROJECT-GUIDELINES.md`: consolidated project source of truth, research interpretation and dated decisions.
- `docs/BRAND-APPLICATION-GUIDE.md`: approved identity, colour, typography and brand application guidance.
- `docs/INTERNATIONAL-MOVING-GUIDES-REVIEW.md`: source-guide review and editorial qualifications.
- `HOMEPAGE-COVERAGE.md` and `TOPICAL-MAP-SITEMAP-REVIEW.md`: topical coverage and architecture records. Later amendments in the master guidelines take precedence.
- `vercel.json`: repeatable Vercel install/build settings.

## Local development

Use Node.js 22.13 or newer and npm with the committed lockfile.

```bash
npm ci
npm run dev
```

Create the static production build:

```bash
npm run build
```

Every page is prerendered to HTML at build time, including headings, links and JSON-LD. Interactive planning tools and the quote form are client components. The one server route is `app/api/quote/route.ts`, which receives quote requests; because of it the project is no longer a static export, so use `npm start` (`next start`) to run the production build locally.

## Vercel deployment

Import `woodleydigital/international-moving-company` into the intended Vercel team, using the repository root and the Next.js framework preset. `vercel.json` sets `npm ci`, `npm run build` and `.next` as the framework build directory. Vercel's Next.js integration needs the manifests in `.next`; the separate `out/` folder contains the exported static site. Do not set Vercel's Next.js Output Directory to `out`. Keep the repository connected so future commits can trigger deployments. The presence of this configuration does not confirm that the account-side Git connection or deployment has succeeded.

See `docs/DEPLOYMENT.md` for the hosting handoff and current launch boundaries. The existing `.openai/hosting.json` belongs to the earlier Sites preview and does not configure Vercel or the custom domain.

## Current preview boundaries

- Search indexing is enabled. Every page declares a canonical URL on the apex domain, `robots.txt` allows crawling and disallows `/api/`, and `sitemap.xml` lists 25 pages.
- The quote form delivers enquiries by email through Postmark, and address autocomplete is live. Both are configured with environment variables and degrade safely when unset: without `POSTMARK_SERVER_TOKEN` the form reports that requests are not being delivered, and without `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` the address fields stay plain text inputs. See `docs/DEPLOYMENT.md`.
- Legal policies remain drafts pending verified operating-company details and approval. Do not invent accreditations, reviews, job titles, prices or operational guarantees.
- The original IMC logo, navy/teal/ivory palette, shared Georgia/Arial typography and desktop quote panel on the right remain the approved design.
- Service and brand pages take priority. Country/route rollout and programmatic SEO are deferred. There are no legacy-domain redirects.

Enquiry delivery, validation, address autocomplete and the indexing/canonical setup are done. Before accepting public leads, complete the approved privacy/legal details and domain/HTTPS verification. Confirm deployment protection separately in Vercel: `noindex` is not access control.

Keep secrets in the hosting platform's environment settings. Never commit credentials or local environment files. Patent and research references guide the project; they do not establish verified Google ranking mechanisms or guaranteed SEO outcomes.
