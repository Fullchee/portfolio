#!/usr/bin/env bash
set -euo pipefail

# Strips range operators like ">=" from devEngines.packageManager.version.
BUN_VERSION=$(jq -r '.devEngines.packageManager.version | sub("^[^0-9]+"; "")' package.json)
curl -fsSL https://bun.sh/install | bash -s "bun-v$BUN_VERSION"
bun install
bun run install-precommit
