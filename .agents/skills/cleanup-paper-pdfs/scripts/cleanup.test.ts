import { expect, test } from "bun:test";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { executeCleanup, planCleanup } from "./cleanup";

test("only removes old PDF directories", () => {
  const repository = join(mkdtempSync(join(tmpdir(), "cleanup-paper-pdfs-")), "papers");
  for (const date of ["20260701", "20260820"]) {
    mkdirSync(join(repository, date, "pdf"), { recursive: true });
    mkdirSync(join(repository, date, "markdown"), { recursive: true });
    writeFileSync(join(repository, date, "list.json"), "{}\n");
    writeFileSync(join(repository, date, "pdf", "paper.pdf"), "pdf");
    writeFileSync(join(repository, date, "markdown", "paper.md"), "markdown");
  }
  const targets = planCleanup(repository, 30, "20260911");
  expect(targets.map((target) => target.date)).toEqual(["20260701"]);
  expect(executeCleanup(targets).failed).toEqual([]);
  expect(existsSync(join(repository, "20260701", "pdf"))).toBe(false);
  expect(existsSync(join(repository, "20260701", "markdown", "paper.md"))).toBe(true);
  expect(existsSync(join(repository, "20260701", "list.json"))).toBe(true);
  expect(existsSync(join(repository, "20260820", "pdf", "paper.pdf"))).toBe(true);
});
