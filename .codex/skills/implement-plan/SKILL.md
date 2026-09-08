---
name: implement-plan
description: Implement an approved Montes Lab plan task by task with tests, verification, and durable documentation. Use when the user authorizes implementation; do not invent missing requirements or bypass approval gates.
---

# Implement an approved plan

Require an approved plan linked to approved RFC and pre-work. Read `AGENTS.md`, the linked artifacts, `docs/architecture.md`, relevant code, and current Git status. Preserve unrelated and untracked work.

## Execute

- Follow task order and honor dependencies. If repository evidence contradicts the plan, pause and update the appropriate artifact rather than silently diverging.
- Mark task status in the plan as work progresses without rewriting its original acceptance conditions.
- Add or update automated tests for changed behavior. If the project lacks the needed test harness, adding the smallest appropriate harness is part of the implementation.
- Run focused verification during development and `npm run build` before completion.
- Review responsive behavior, keyboard access, privacy, and route reachability when relevant.

## Document

Create `docs/changes/YYYY-MM-DD-feature-slug.md` containing Summary, RFC/pre-work/plan links, Implemented tasks, Key decisions or deviations, Tests and verification, Documentation updated, Known limitations, and Follow-ups.

Update `docs/architecture.md`, user documentation, and operational instructions whenever the implementation changes their truth. Documentation is part of the task, not optional cleanup.

Finish with the plan status, checks actually run, remaining work, and any deviation requiring approval. Do not create commits or a pull request unless explicitly requested.
