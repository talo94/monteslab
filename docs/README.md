# Montes Lab documentation

This directory is the durable context for people and Codex. Update it in the same pull request as the code it describes.

## Current context

- [Architecture](architecture.md)
- [RFCs](rfcs/)
- [Technical pre-work](prework/)
- [Implementation plans](plans/)
- [Change records](changes/)

Use the same lowercase kebab-case feature slug across related artifacts:

```text
docs/rfcs/YYYY-MM-DD-feature-slug.md
docs/prework/YYYY-MM-DD-feature-slug.md
docs/plans/YYYY-MM-DD-feature-slug.md
docs/changes/YYYY-MM-DD-feature-slug.md
```

Documents must describe current decisions rather than repeat source code. When a decision changes, update the authoritative document and record the change instead of leaving contradictory guidance.

Personal source material may coexist under `docs/`, but it is not automatically approved for publication or version control.
