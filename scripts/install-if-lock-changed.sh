#!/usr/bin/env bash
# Keeps node_modules in step with bun.lock after any checkout, merge or rebase.
# Parallel sessions add dependencies; a stale node_modules fails tests for no code reason.
set -euo pipefail

# Early commits predate bun.lock.
if [[ ! -f bun.lock ]]; then
	exit 0
fi

lockfile_hash=$(git hash-object bun.lock)
installed_hash_file=node_modules/.installed-bun-lock-hash

if [[ -f $installed_hash_file ]] && [[ $(cat "$installed_hash_file") == "$lockfile_hash" ]]; then
	exit 0
fi

bun install --frozen-lockfile
echo "$lockfile_hash" >"$installed_hash_file"
