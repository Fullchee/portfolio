## Agent skills

### Issue tracker

Issues tracked in GitHub Issues (Fullchee/portfolio), via the gh CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: needs-triage, needs-info, ready-for-agent, ready-for-human, wontfix. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context — GLOSSARY.md + docs/adr/ at repo root. See `docs/agents/domain.md`.

### Commits

Commit messages must follow Conventional Commits.

### Merging

Merge finished work into `main` and push `main`. Never open a pull request.

## Checks

- **Before pushing**: run `bun run lint` (oxfmt and Oxlint, warnings fail), `bun run typecheck` and `bun run fallow`. CI runs the same steps, then `bun run build`.
- **Fallow** has no baseline: fix each finding. It runs only `dead-code` and `dupes`; health scores without coverage are estimates.
- **Worktrees**: create them with `wt switch --create <branch>`. Its setup copies `CLAUDE.local.md` and `.env*`, then installs packages.
- **Shared setup files**: `scripts/install-if-lock-changed.sh`, `scripts/prune-worktrees.sh` and `.claude/hooks/format-edited-file.sh` come from `~/personal-projects/journal-native`. Edit them there, then run its `scripts/sync-shared-setup.sh` with this repo's path.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Failure log

- Commitlint runs from lefthook's `commit-msg` hook; lefthook ignores unknown hook names, so a misnamed hook never runs.
- Title a merge commit with an allowed type such as `refactor:`; commitlint rejects `merge:`, though older history uses it.
- `CLAUDE.md` is a symlink to `AGENTS.md`: edit `AGENTS.md`, and never write to `CLAUDE.md`, or it replaces `AGENTS.md`.
