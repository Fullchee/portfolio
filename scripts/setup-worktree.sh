#!/usr/bin/env bash
# Prepare a fresh git worktree so lint, typecheck and tests pass; safe to re-run.
set -euo pipefail

cd "$(dirname "$0")/.."

# Untracked local files live only in the main checkout.
main_checkout="$(git worktree list --porcelain | sed -n '1s/^worktree //p')"
if [ "$main_checkout" != "$PWD" ]; then
	for f in CLAUDE.local.md .env .env.local; do
		if [ -f "$main_checkout/$f" ] && [ ! -f "$f" ]; then
			cp "$main_checkout/$f" "$f"
		fi
	done
fi

# Lefthook's post-checkout hook has usually installed already; this skips in that case.
scripts/install-if-lock-changed.sh
