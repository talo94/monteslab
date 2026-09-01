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

## Quality and delivery

`npm run check` is the shared local and CI quality gate: Prettier, ESLint, and TypeScript. `npm run build` runs that gate before the Vite production build. A versioned pre-commit hook invokes the same checks. GitHub Actions validates pull requests and `main`; Vercel uses the production build command.

## Privacy boundary

The site is public by default and has no authentication layer. Credentials, booking codes, identity or financial numbers, private contact information, and exact live locations must not enter published content. Names, future travel details, lodging addresses, unpublished lyrics, and internal production information require an explicit publishing decision.
