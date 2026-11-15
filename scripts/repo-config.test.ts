// Guards config values a routine command rewrites, so the failure names the reason instead of a far-off symptom.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

interface PackageJson {
  devDependencies: Partial<Record<string, string>>;
}

test("the typescript package stays the TS 6 alias the lint plugins need", () => {
  // SAFETY: the repo's own package.json always has devDependencies.
  const { devDependencies } = JSON.parse(readFileSync("package.json", "utf8")) as PackageJson;

  assert.match(
    devDependencies["typescript"] ?? "",
    /^npm:@typescript\/typescript6@/,
    "@eslint-react needs TS 6's API; @typescript/native supplies TS 7's tsc. Never bun add typescript@7.",
  );
});
