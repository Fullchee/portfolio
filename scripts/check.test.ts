import assert from "node:assert/strict";
import { test } from "node:test";

import { runSteps } from "./check.ts";

test("runSteps runs every step after a failure and prints only the failed output", () => {
  const ran: string[] = [];
  const printed: string[] = [];

  const run = (step: string) => {
    ran.push(step);

    return { ok: step !== "lint", output: `${step} output` };
  };

  const failed = runSteps(["lint", "test"], run, (line) => {
    printed.push(line);
  });

  assert.deepEqual(ran, ["lint", "test"]);
  assert.deepEqual(failed, ["lint"]);
  assert.deepEqual(printed, ["FAIL lint (0s)", "lint output", "ok   test (0s)"]);
});
