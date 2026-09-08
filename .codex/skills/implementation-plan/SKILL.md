---
name: implementation-plan
description: Create a detailed, executable Montes Lab implementation plan from an approved RFC and technical pre-work. Use before feature implementation; do not revisit approved scope silently or edit production code.
---

# Implementation plan

Require an approved RFC and approved technical pre-work with no blocking open question. If either artifact is missing or inconsistent, stop and identify the decision that must be resolved.

Inspect the current repository so file paths and dependencies are real. Create `docs/plans/YYYY-MM-DD-feature-slug.md` with status `Draft` and include links to its RFC and pre-work.

Break the work into ordered tasks with stable identifiers (`TASK-1`). Every task must state:

- outcome;
- concrete files or subsystem;
- dependencies on earlier tasks;
- RFC acceptance criteria and technical decisions covered;
- tests, documentation, and verification required;
- a clear completion condition.

Include explicit tasks for test coverage, documentation/change record, full quality checks, and final privacy/accessibility review. Keep commits as a recommendation, not a requirement to mutate Git history.

Add a traceability table mapping every acceptance criterion to one or more tasks. Present the plan and stop for explicit approval before implementation.
