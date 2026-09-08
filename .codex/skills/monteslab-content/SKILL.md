---
name: monteslab-content
description: Add or restructure published content in Montes Lab, including ideas, trips, music tours, and personal projects. Use when a request creates a page, changes content architecture, or publishes personal information; do not use for isolated tooling or dependency maintenance.
---

# Montes Lab content

Create useful, expressive pages that fit Montes Lab as a personal publishing space rather than forcing every subject into one template.

## Shape the content

1. Identify the audience and whether the page is meant to be public. If the material mixes public and private information, keep the public version minimal and surface the privacy decision before publishing ambiguous details.
2. Choose the closest domain under `src/pages/`: `ideas`, `viajes`, `giras`, or `proyectos`. A new domain should represent a durable category, not a single page.
3. Separate substantial content into typed, colocated data modules. Extract components only when reuse or readability justifies it.
4. Add the typed route, register the page, and link it from its parent index. An immersive page may hide the global navigation only if it has a clear way back.
5. Prefer existing tokens and shared components, while allowing a page-specific visual identity.

## Publishing boundary

Never publish secrets, credentials, booking codes, identity or financial numbers, private contact information, or exact real-time whereabouts. Treat names, travel dates, lodging addresses, unpublished lyrics, and internal production assignments as potentially sensitive; include them only when the user's intent to publish them is clear.

## Verify

Check responsive layout, keyboard navigation, labels, route reachability, and document title. Run `npm run check` and `npm run build` before considering the page complete.
