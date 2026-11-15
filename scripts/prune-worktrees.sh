#!/usr/bin/env bash
# Remove worktrees and branches already in main, then list unmerged branches that look abandoned.
# Run as `wt cleanup`; a SessionStart hook in .claude/settings.json also runs it. Pass --dry-run to preview.
set -euo pipefail

min_age="${PRUNE_MIN_AGE:-3d}"
idle_days="${PRUNE_IDLE_DAYS:-14}"

cd "$(git rev-parse --show-toplevel)"

# Squash merges and deleted remote branches are only visible after a fetch.
git fetch --prune --quiet origin || echo "prune-worktrees: fetch failed; using local refs" >&2

# prune treats the current worktree like any other, so lock it to keep this session's directory.
main_checkout="$(git worktree list --porcelain | sed -n '1s/^worktree //p')"
if [ "$PWD" != "$main_checkout" ] && git worktree lock --reason "prune-worktrees: in use" "$PWD" 2>/dev/null; then
	trap 'git worktree unlock "$PWD"' EXIT
fi

# prune skips locked worktrees, uncommitted changes (untracked files included) and branches not yet in main.
wt step prune --yes --min-age="$min_age" "$@"

# The weave merge driver leaves its temp files at the root; a day-old one belongs to no running merge.
case " $* " in
*" --dry-run "*) find "$main_checkout" -maxdepth 1 -name '.merge_file_*' -mmin +1440 ;;
*) find "$main_checkout" -maxdepth 1 -name '.merge_file_*' -mmin +1440 -delete ;;
esac

gone="$(git for-each-ref --format='%(refname:short) %(upstream:track)' refs/heads | sed -n 's/ \[gone\]$//p')"
cutoff="$(date -u -v-"${idle_days}"d +%Y-%m-%dT%H:%M:%SZ)"

wt list --branches --format=json | jq -r --arg gone "$gone" --arg cutoff "$cutoff" '
	($gone | split("\n")) as $gone_list
	| .items[]
	| select(.worktree.main != true and .default_branch.integration == null)
	| if (.branch | IN($gone_list[])) then "remote gone, unmerged: \(.branch)"
	  elif .head.committed_at < $cutoff then "idle since \(.head.committed_at[:10]), unmerged: \(.branch)"
	  else empty end
'
