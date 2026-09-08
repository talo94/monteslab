# Repository harness and delivery workflow

Status: Implemented

## Summary

Established the shared Codex, Git, CI, documentation, and delivery foundations for Montes Lab before feature development continues.

## Workflow artifacts

This foundational maintenance change predates the RFC workflow and introduces it, so it intentionally has no retrospective RFC, technical pre-work, or implementation plan.

## Implemented

- Added repository instructions in `AGENTS.md`.
- Added Codex skills for content publishing, feature RFCs, technical pre-work, implementation planning, plan execution, and pull request preparation.
- Removed Claude-specific instructions and skills.
- Added living product and architecture documentation under `docs/`.
- Added a versioned pull request template and GitHub Actions workflow.
- Added a versioned pre-commit hook for formatting, lint, and type checks.
- Standardized Node.js and package quality commands.
- Formatted the existing codebase and fixed the lint blockers in Tailwind configuration and the Greece tour page.

## Key decisions

- Workflow stages are separate skills with explicit approval gates.
- Significant features use RFC → technical pre-work → implementation plan → implementation → pull request.
- Small fixes and maintenance may use a documented fast path when the full workflow would not preserve a meaningful decision.
- Documentation and tests are implementation requirements rather than follow-up tasks.
- Git commits, pushes, and pull request publication always require explicit user authorization.

## Verification

- Skill frontmatter and UI metadata validated.
- `npm run format:check` passed.
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.
- `git diff --check` passed.
- Versioned pre-commit hook executed successfully.

## Known limitations

- GitHub branch protection and Vercel production-branch settings require configuration in their respective external services.
- The project does not yet contain a component or end-to-end test framework. The first feature that requires behavioral tests must introduce the smallest suitable harness as part of its approved technical pre-work.
