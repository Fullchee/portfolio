import assert from "node:assert/strict";
import { test } from "node:test";

import { notBash } from "./lint-sh.ts";

const lines = new Map([
  ["a.sh", "#!/usr/bin/env bash"],
  ["b.sh", "#!/usr/bin/env zsh"],
  ["c.sh", "#!/bin/sh"],
]);

test("notBash lists every script without the bash shebang", () => {
  assert.deepEqual(
    notBash([...lines.keys()], (script) => lines.get(script) ?? ""),
    ["b.sh", "c.sh"],
  );
});
