# Reads the version from devEngines.packageManager; strips range operators like ">=".
PNPM_VERSION=$(grep -A3 '"packageManager"' package.json | grep '"version"' | sed -E 's/.*"version": *"([^"]*)".*/\1/; s/^[^0-9]*//');
curl -fsSL https://get.pnpm.io | env PNPM_VERSION="$PNPM_VERSION" sh -;
pnpm i;
pnpm run install-precommit;
