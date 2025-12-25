npm install --global corepack@latest;
corepack enable pnpm;
corepack use pnpm@latest;
pnpm i;
pnpm run install-precommit;

# turborepo
pnpm add turbo --global;
turbo login;
turbo link;
