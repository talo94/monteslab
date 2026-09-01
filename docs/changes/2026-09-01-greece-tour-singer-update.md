# Greece tour singer and repertoire update

Status: Implemented before the repository RFC workflow

## Summary

Updated the Greece 2026 tour repertoire, musician roster, lyrics, keys, and instrument assignments to reflect the latest performance lineup.

## Workflow artifacts

This feature was already committed on `feature/new-singer` before the repository harness and RFC workflow were introduced. It therefore has no retrospective RFC, technical pre-work, or implementation plan.

## Implemented

- Replaced Orlando with Kerwith Tylor in the musician roster.
- Updated voice and instrument assignments across the Andean repertoire.
- Corrected the Jose Luis musician name in assignments.
- Updated the Carrataplan key.
- Removed “Como para desenguayabar” from the first Andean frame.
- Renamed the Juliana repertoire entry to Cumbia.
- Reordered and adjusted lyrics for the updated performance material.

## Verification

- `npm run format:check` passed.
- `npm run lint` passed.
- `npm run typecheck` passed.
- `npm run build` passed.

## Known limitations

- Repertoire accuracy depends on manual confirmation from the performing group.
- There are no automated content assertions for musician assignments or lyrics.
