---
name: feature-rfc
description: Clarify a proposed Montes Lab feature through focused product questions and create its RFC. Use for new features or meaningful behavior changes before technical design; do not use for implementation or minor maintenance.
---

# Feature RFC

Turn an initial idea into an agreed product definition. Read `docs/README.md`, `docs/architecture.md`, relevant source code, and related RFCs before asking questions.

## Clarify first

Ask short, decision-oriented questions in small batches. Cover only ambiguities that materially affect scope:

- user and audience;
- problem and desired outcome;
- public versus private content;
- primary journey and states;
- in-scope and explicitly out-of-scope behavior;
- acceptance criteria and observable success;
- constraints, dependencies, migration, and unresolved decisions.

Do not choose implementation details in the RFC. Reflect answers back when they reveal a tradeoff. Continue until the acceptance criteria can be evaluated without guessing.

## Write the RFC

Create `docs/rfcs/YYYY-MM-DD-feature-slug.md` with status `Draft` and these sections: Summary, Context, Goals, Non-goals, Audience and privacy, User experience, Functional requirements, Acceptance criteria, Constraints, Open questions, and Approval.

Use stable requirement identifiers (`FR-1`) and acceptance identifiers (`AC-1`) so later documents can trace decisions. Update `docs/README.md` only when navigation or durable context changes.

Present the finished draft and stop for explicit approval. Do not begin technical pre-work in the same step unless the user explicitly approves the RFC and asks to continue.
