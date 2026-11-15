// Runs CI's check steps in CI's order. Like CI's `if: !cancelled()`, a failed step doesn't stop the later ones.
import { spawnSync } from "node:child_process";

/** CI's order. */
const STEPS = ["lint", "typecheck", "test", "fallow", "build"];

interface StepResult {
  ok: boolean;
  output: string;
}

/**
 * Runs every step and prints one line each, plus a failed step's output.
 * @returns the names of the failed steps.
 */
export const runSteps = (
  steps: string[],
  run: (step: string) => StepResult,
  print: (line: string) => void,
): string[] =>
  steps.filter((step) => {
    const start = performance.now();
    const { ok, output } = run(step);
    const seconds = Math.round((performance.now() - start) / 1000);

    print(`${ok ? "ok  " : "FAIL"} ${step} (${seconds}s)`);

    if (!ok) print(output);

    return !ok;
  });

const bunRun = (step: string): StepResult => {
  // oxlint-disable-next-line sonarjs/no-os-command-from-path -- bun lives in different folders on macOS and the CI runner
  const { status, stdout, stderr } = spawnSync("bun", ["run", step], {
    encoding: "utf8",
    maxBuffer: 256 * 1024 * 1024,
  });

  return { ok: status === 0, output: stdout + stderr };
};

if (import.meta.main) {
  const failed = runSteps(STEPS, bunRun, (line: string) => process.stdout.write(`${line}\n`));

  if (failed.length > 0) throw new Error(`Failed: ${failed.join(", ")}`);
}
