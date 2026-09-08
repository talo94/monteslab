---
name: technical-prework
description: Produce technical pre-work for an approved Montes Lab RFC by inspecting the repository and resolving implementation decisions. Use after product requirements are approved; do not implement code or replace unresolved product decisions.
---

# Technical pre-work

Require an approved RFC. If it is missing, still draft, or product questions remain open, stop and route the work back to `$feature-rfc`.

Read the RFC, `docs/architecture.md`, relevant source, configuration, and existing tests. Verify assumptions against the repository.

Evaluate:

- affected routes, components, data, and documentation;
- reuse versus new abstractions;
- data model and state boundaries;
- accessibility, responsive behavior, privacy, and security;
- migration and backward compatibility;
- test strategy and production observability;
- alternatives and material tradeoffs;
- risks, unknowns, and rollback approach.

Create `docs/prework/YYYY-MM-DD-feature-slug.md` with status `Draft`. Include RFC link, Current state, Proposed design, Affected areas, Decisions, Alternatives considered, Data and privacy, Testing strategy, Delivery and rollback, Risks, Open questions, and Approval. Give decisions stable identifiers (`TD-1`) and trace them to RFC requirements.

Do not write implementation code or a task plan. Present the document and stop for explicit approval.
