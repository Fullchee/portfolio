#!/usr/bin/env bash
# Formats each file Claude edits, in the main checkout or any worktree of this repo.
f=$(jq -r '.tool_input.file_path')
dir=$(dirname "$f")
[ "$(git -C "$dir" rev-parse --path-format=absolute --git-common-dir 2>/dev/null)" = \
	"$(git -C "$CLAUDE_PROJECT_DIR" rev-parse --path-format=absolute --git-common-dir)" ] || exit 0
# oxfmt and oxlint read their config from the working directory, so run them from the file's worktree.
cd "$(git -C "$dir" rev-parse --show-toplevel)" || exit 0
node_modules/.bin/oxfmt --no-error-on-unmatched-pattern "$f" >/dev/null 2>&1
case "$f" in
*.js | *.cjs | *.mjs | *.jsx | *.ts | *.tsx)
	# Joining lines can break anti-slop's blank-line rule, which only --fix repairs.
	node_modules/.bin/oxlint --fix "$f" >/dev/null 2>&1
	;;
*.sh)
	# lint:sh fails on unformatted scripts.
	shfmt --write "$f" >/dev/null 2>&1
	;;
esac
exit 0
