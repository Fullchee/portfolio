import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";

import { iconFiles, iconFilesDirectory } from "#components/common/icons/files";

test("every file icon exists under public", () => {
  const missing = Object.values(iconFiles)
    .map(({ file }) => `public${iconFilesDirectory}/${file}`)
    .filter((path) => !existsSync(path));

  assert.deepEqual(missing, []);
});
