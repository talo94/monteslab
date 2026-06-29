# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server (Vite)
npm run build        # type-check + production build (tsc -b && vite build)
npm run lint         # ESLint
npm run format       # Prettier write
npm run format:check # Prettier check (CI-friendly)
npm run preview      # serve the dist/ build locally
```

There are no tests in this project.

## Architecture

React 19 SPA built with Vite, TypeScript, Tailwind v4, and React Router v7. Deployed to Vercel with a catch-all SPA rewrite (`vercel.json`).

**Path alias:** `@` maps to `src/` (configured in `vite.config.ts`).

**Routing:** All routes are typed constants in `src/routes/routes.ts`. They are registered in `App.tsx`, which also controls a `HIDE_NAV_PATHS` list — standalone detail pages (giras, viajes) hide the global `Navbar`.

**Two content domains:**

- `src/pages/giras/` — music tour pages (e.g. Grecia 2026). Data lives in a co-located `data.ts` + `lyrics.ts`. The page is self-contained with its own local components (no shared trip components).
- `src/pages/viajes/` — travel guide pages (e.g. EurotripFamiliar). Data is split into a `data/` folder with one file per city plus `hero.ts`, `overview.ts`, `notes.ts`. Pages consume shared components from `src/components/trip/`.

**Shared trip components** (`src/components/trip/`): typed in `types.ts`, re-exported from `index.ts`. Used exclusively by viajes pages. The `CityTab` type is the central data shape for per-city content (cover, snapshot, itinerary, checklist, budget, map).

**Design tokens** are defined in `src/styles/design-tokens.css` using Tailwind v4's `@theme` block. Two palettes:
- `ml-*` — base site palette (warm cream/brown)
- `trip-*` — Eurotrip travel guide accents

Custom font utilities (`.font-family-trip-sans`, `.font-family-trip-serif`) are also defined there. Many inline Tailwind values in Grecia pages use the same raw hex values as the tokens (`#fbf7ef`, `#382e22`, etc.) without referencing the token names.

## Code style

Prettier: no semicolons, double quotes, trailing commas (ES5). Enforced via `.prettierrc`.
