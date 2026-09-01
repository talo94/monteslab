---
name: prepare-pr
description: Validate Montes Lab branch work, update required documentation, and draft or create a pull request using the repository template. Use at the end of an implementation; do not publish a PR without explicit authorization.
---

# Prepare a pull request

Read `.github/pull_request_template.md`, Git status, the complete branch diff against the intended base, and related RFC, pre-work, plan, and change record.

Before drafting:

- confirm implementation tasks and acceptance criteria are accounted for;
- ensure changed behavior and architecture have current documentation;
- require a change record for features and meaningful fixes;
- run `npm run build` and any feature-specific tests;
- inspect the diff for secrets, personal information, generated files, and unrelated changes.

If documentation or verification is missing, complete in-scope updates or report the blocker before proposing the PR.

Generate a conventional, outcome-focused title and fill every section of the repository template from evidence. Include links to workflow artifacts and report only checks actually run.

Drafting text does not authorize Git commits, pushes, or PR creation. Create the pull request with the available GitHub integration or CLI only when the user explicitly asks; never bypass failing checks or branch protection.
