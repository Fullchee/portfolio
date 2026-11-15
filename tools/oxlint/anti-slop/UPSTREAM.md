# Upstream

- **Source**: https://github.com/dmmulroy/anti-slop
- **Commit**: `13909c9e07590f5a85d93c62712259fe14a883f7` (2026-10-13)
- **Copied from**: `skills/install-anti-slop/assets/anti-slop/` (git tree `54b50f11bed7f52ca1948f8802f4df591644762f`)
- **Installed**: 2026-11-07 in journal-native via the `install-anti-slop` skill's `scripts/install.mjs`; copied here 2026-11-15
- **Installed paths**: `tools/oxlint/anti-slop/` (generic plugin `index.ts`; the `effect/` plugin is copied but not registered, since no workspace depends on `effect`)
- **Vendored inside**: `vendor/eslint-stylistic/` keeps its own `LICENSE` and `UPSTREAM.md`

## Deviations

- None in the plugin source; files match the upstream tree above.
- Added `package.json` with `"type": "module"` so Node loads `index.ts` without a module-type warning.
- `oxlint` and `@oxlint/plugins` are pinned to an exact version: the owner's global `~/.bunfig.toml` `minimumReleaseAge` blocks releases younger than 5 days, so bump both together with `bun add -d oxlint@<v> @oxlint/plugins@<v>` and run `bun run lint`.
- Root `tsconfig.json` excludes this folder: it imports `.ts` paths, which only Node's type stripping allows.
