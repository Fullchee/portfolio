# Strips range operators like ">=" from devEngines.packageManager.version.
PNPM_VERSION=$(jq -r '.devEngines.packageManager.version | sub("^[^0-9]+"; "")' package.json);
curl -fsSL https://get.pnpm.io | env PNPM_VERSION="$PNPM_VERSION" sh -;
pnpm i;
pnpm run install-precommit;
