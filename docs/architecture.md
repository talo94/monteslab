# Architecture

## Product

Montes Lab is a personal, public publishing space for ideas, trips, music, and projects. It supports both shared site conventions and immersive pages with their own visual identity.

## Application

- React 19 single-page application built with Vite and TypeScript.
- React Router owns client-side routes. Route constants live in `src/routes/routes.ts` and route registration lives in `src/App.tsx`.
- Tailwind CSS provides styling. Shared tokens live in `src/styles/design-tokens.css`.
- Shared UI belongs in `src/components/`; feature-specific UI and typed content live together under `src/pages/`.
- Standalone detail pages may hide the global navbar but must provide their own clear navigation back.
- Vercel serves the SPA and rewrites routes to `index.html`.

## Content domains

- `ideas`: drafts, scripts, and creative work in progress.
- `viajes`: travel guides backed by typed, colocated data and reusable trip components.
- `giras`: music-tour information, repertoire, lyrics, and assignments.
- `proyectos`: future personal projects.

## Commercial home

The public entry point presents Natalia Montes's web design and development services. Spanish lives at `/` and English at `/en`; both routes render one component tree from typed, colocated content under `src/pages/home/`. Vite builds a dedicated HTML entry for each language so canonical, `hreflang`, social metadata and JSON-LD are available without client rendering.

The commercial home has its own anchor navigation and footer. It does not link the historical content domains, while their routes and existing navigation remain available by direct URL. Language changes use explicit links and do not redirect based on browser preferences.

The contact form posts directly to a configurable Basin endpoint through `VITE_CONTACT_FORM_ENDPOINT`; until configured, it reports that the form is unavailable and offers the approved public WhatsApp link. Submissions are not stored locally. `robots.txt` and `sitemap.xml` use `https://monteslab.com` and list the two commercial home URLs.

## Quality and delivery

`npm run check` is the shared local and CI quality gate: Prettier, ESLint, TypeScript, and Vitest. `npm run build` runs that gate before the Vite production build. A versioned pre-commit hook invokes the same checks. GitHub Actions validates pull requests and `main`. Vercel uses `npm run build:vercel`, explicitly configured via `buildCommand` in `vercel.json`, to run TypeScript and Vite without repeating formatting and lint on deployment artifacts. Require the GitHub `quality-and-build` check before merging; this repository configuration does not itself enforce branch protection or make Vercel wait for GitHub CI.

The Fernández Bedoya guide lives at `/viajes/2026/eurotrip-fernandez-bedoya`, linked alongside the earlier guide from `/viajes`. It uses independent typed data under `src/pages/viajes/2026/EurotripFernandezBedoya/data/`, native anchors, and the shared trip layout/tokens. Transport summaries and day references share one data source; hotel maps use public Google Maps search links. No booking documents or private access details are shipped. Run `npm run test` for content integrity tests; these also run in `check` and CI.

Generated Vercel artifacts under `.vercel/` are excluded from Git, Prettier, and ESLint. The versioned `vercel.json` remains subject to formatting checks.

## Privacy boundary

The site is public by default and has no authentication layer. Credentials, booking codes, identity or financial numbers, private contact information, and exact live locations must not enter published content. Names, future travel details, lodging addresses, unpublished lyrics, and internal production information require an explicit publishing decision.
