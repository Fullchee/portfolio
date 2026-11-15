// Every tracked .sh is bash, so shellcheck covers them all; it can't parse zsh.
import { execFileSync, spawnSync } from "node:child_process";
import { readFileSync } from "node:fs";

const BASH = "#!/usr/bin/env bash";

/** The scripts whose first line isn't the bash shebang. */
export const notBash = (scripts: string[], firstLine: (script: string) => string): string[] =>
  scripts.filter((script) => firstLine(script) !== BASH);

const firstLineOf = (file: string): string => readFileSync(file, "utf8").split("\n", 1)[0] ?? "";

if (import.meta.main) {
  // oxlint-disable-next-line sonarjs/no-os-command-from-path -- git and shellcheck live in different folders on macOS and the CI runner
  const scripts = execFileSync("git", ["ls-files", "*.sh"], { encoding: "utf8" })
    .split("\n")
    .filter((script) => script !== "");

  const others = notBash(scripts, firstLineOf);

  if (others.length > 0) throw new Error(`Start each script with "${BASH}": ${others.join(", ")}`);

  // oxlint-disable-next-line sonarjs/no-os-command-from-path -- git and shellcheck live in different folders on macOS and the CI runner
  const shellcheck = spawnSync("shellcheck", scripts, { stdio: "inherit" });

  if (shellcheck.status !== 0) throw new Error("shellcheck found the problems above.");

  // oxlint-disable-next-line sonarjs/no-os-command-from-path -- shfmt lives in different folders on macOS and the CI runner
  const shfmt = spawnSync("shfmt", ["--diff", ...scripts], { stdio: "inherit" });

  if (shfmt.status !== 0)
    throw new Error("shfmt wants the changes above: run `shfmt --write <file>`.");
}
