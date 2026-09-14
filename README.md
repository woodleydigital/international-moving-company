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

Next.js exports the pages and public assets to `out/`. Main page content, headings, links and JSON-LD are rendered into HTML at build time. Interactive planning tools and the quote form use client components. This is a static export, so `next start` is not the server for the exported build.

## Vercel deployment

Import `woodleydigital/international-moving-company` into the intended Vercel team, using the repository root and the Next.js framework preset. `vercel.json` sets `npm ci`, `npm run build` and the `out` output directory. Keep the repository connected so future commits can trigger deployments. The presence of this configuration does not confirm that the account-side Git connection or deployment has succeeded.

See `docs/DEPLOYMENT.md` for the hosting handoff and current launch boundaries. The existing `.openai/hosting.json` belongs to the earlier Sites preview and does not configure Vercel or the custom domain.

## Current preview boundaries

- Search indexing is deliberately disabled (`noindex, nofollow`). Connecting a repository or domain must not silently remove that setting.
- The quote form is a working interface preview; requests are not delivered. Addresses are entered manually until Google Places and its restrictions are configured.
- Legal policies remain drafts pending verified operating-company details and approval. Do not invent accreditations, reviews, job titles, prices or operational guarantees.
- The original IMC logo, navy/teal/ivory palette, shared Georgia/Arial typography and desktop quote panel on the right remain the approved design.
- Service and brand pages take priority. Country/route rollout and programmatic SEO are deferred. There are no legacy-domain redirects.

Before accepting public leads, complete enquiry delivery and validation, address autocomplete if required, approved privacy/legal details, domain/HTTPS verification, and the production indexing/canonical review. Confirm deployment protection separately in Vercel: `noindex` is not access control.

Keep secrets in the hosting platform's environment settings. Never commit credentials or local environment files. Patent and research references guide the project; they do not establish verified Google ranking mechanisms or guaranteed SEO outcomes.
