# Contributing to Montes Lab

## Local setup

Use Node.js 22.12 or newer.

```bash
npm ci
npm run hooks:install
npm run dev
```

`hooks:install` activates the versioned pre-commit hook for this clone. The hook runs the same quality command used by CI.

## Quality commands

```bash
npm run format        # format files
npm run format:check  # verify formatting without writing
npm run lint          # run ESLint
npm run typecheck     # run TypeScript checks
npm run check         # run all non-building checks
npm run build         # run checks and create the production build
```

Do not bypass a failing hook. Fix the issue and run `npm run check` again.

## Delivery

Features move through four versioned artifacts before the pull request:

1. RFC in `docs/rfcs/` — desired outcome and acceptance criteria.
2. Technical pre-work in `docs/prework/` — architecture and verification decisions.
3. Plan in `docs/plans/` — ordered, independently verifiable tasks.
4. Change record in `docs/changes/` — what was implemented and how it was verified.

Each stage is reviewed before the next one begins. Small corrections and maintenance may skip RFC, pre-work, and plan when they introduce no product or architectural decision, but they still update relevant documentation.

Work in a focused branch and open a pull request into `main`. GitHub Actions validates formatting, lint, types, and the production build. Configure Vercel to use `main` as the production branch and enable its GitHub integration so pull requests receive preview deployments.

Repository content may include personal material. Review dates, addresses, names, documents, and operational details before committing or publishing them.
