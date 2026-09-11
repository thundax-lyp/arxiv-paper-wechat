#!/usr/bin/env bun

import { existsSync, lstatSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";

export interface CleanupTarget {
  date: string;
  path: string;
  bytes: number;
}

interface CleanupConfig {
  paperRepository?: string;
  pdfRetentionDays?: number;
}

interface Options {
  configPath: string;
  retentionDays?: number;
  asOf?: string;
  execute: boolean;
}

function parseDate(value: string): Date {
  const match = /^(\d{4})(\d{2})(\d{2})$/.exec(value);
  if (!match) throw new Error(`Invalid date ${value}; expected yyyyMMdd`);
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  const normalized = date.toISOString().slice(0, 10).replaceAll("-", "");
  if (normalized !== value) throw new Error(`Invalid calendar date: ${value}`);
  return date;
}

function todayKey(): string {
  const now = new Date();
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}`;
}

function directorySize(path: string): number {
  let total = 0;
  for (const entry of readdirSync(path, { withFileTypes: true })) {
    const child = join(path, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) total += directorySize(child);
    else if (entry.isFile()) total += lstatSync(child).size;
  }
  return total;
}

function safeRepositoryPath(path: string): void {
  const absolute = resolve(path);
  const home = process.env.HOME ? resolve(process.env.HOME) : "";
  if (absolute === "/" || absolute === home || absolute === resolve(process.cwd())) {
    throw new Error(`Refusing broad paper repository path: ${absolute}`);
  }
}

export function planCleanup(paperRepository: string, retentionDays: number, asOf: string): CleanupTarget[] {
  if (!Number.isInteger(retentionDays) || retentionDays < 1) throw new Error("retentionDays must be a positive integer");
  safeRepositoryPath(paperRepository);
  if (!existsSync(paperRepository)) return [];
  const cutoff = parseDate(asOf).getTime() - retentionDays * 24 * 60 * 60 * 1000;
  const targets: CleanupTarget[] = [];
  for (const entry of readdirSync(paperRepository, { withFileTypes: true })) {
    if (!entry.isDirectory() || !/^\d{8}$/.test(entry.name)) continue;
    if (parseDate(entry.name).getTime() >= cutoff) continue;
    const pdfPath = join(paperRepository, entry.name, "pdf");
    if (!existsSync(pdfPath) || !lstatSync(pdfPath).isDirectory()) continue;
    targets.push({ date: entry.name, path: pdfPath, bytes: directorySize(pdfPath) });
  }
  return targets.sort((a, b) => a.date.localeCompare(b.date));
}

export function executeCleanup(targets: CleanupTarget[]): { deleted: string[]; failed: Array<{ path: string; error: string }> } {
  const deleted: string[] = [];
  const failed: Array<{ path: string; error: string }> = [];
  for (const target of targets) {
    try {
      if (basename(target.path) !== "pdf" || !/^\d{8}$/.test(basename(dirname(target.path)))) {
        throw new Error("Target no longer matches a yyyyMMdd/pdf path");
      }
      rmSync(target.path, { recursive: true, force: false });
      deleted.push(target.path);
      console.error(`[cleanup-paper-pdfs] deleted ${target.path}`);
    } catch (error) {
      failed.push({ path: target.path, error: error instanceof Error ? error.message : String(error) });
    }
  }
  return { deleted, failed };
}

function parseArgs(argv: string[]): Options {
  let configPath = "arxiv-paper-wechat.config.json";
  let retentionDays: number | undefined;
  let asOf: string | undefined;
  let execute = false;
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--config") configPath = argv[++index] ?? "";
    else if (arg === "--retention-days") retentionDays = Number.parseInt(argv[++index] ?? "", 10);
    else if (arg === "--as-of") asOf = argv[++index];
    else if (arg === "--execute") execute = true;
    else if (arg === "--dry-run") execute = false;
    else if (arg === "--help" || arg === "-h") {
      console.log("Usage: cleanup.ts [--dry-run | --execute] [--config FILE] [--retention-days N] [--as-of yyyyMMdd]");
      process.exit(0);
    } else throw new Error(`Unknown argument: ${arg}`);
  }
  return { configPath, retentionDays, asOf, execute };
}

export function main(argv = process.argv.slice(2)): number {
  const options = parseArgs(argv);
  const configPath = resolve(options.configPath);
  if (!existsSync(configPath)) throw new Error(`Configuration file not found: ${configPath}`);
  const config = JSON.parse(readFileSync(configPath, "utf8")) as CleanupConfig;
  if (!config.paperRepository) throw new Error("paperRepository is required in configuration");
  const repository = resolve(dirname(configPath), config.paperRepository);
  const retentionDays = options.retentionDays ?? config.pdfRetentionDays ?? 30;
  const asOf = options.asOf ?? todayKey();
  const targets = planCleanup(repository, retentionDays, asOf);
  const bytes = targets.reduce((total, target) => total + target.bytes, 0);
  const result = options.execute ? executeCleanup(targets) : { deleted: [], failed: [] };
  console.log(JSON.stringify({
    mode: options.execute ? "execute" : "dry-run",
    repository,
    retention_days: retentionDays,
    as_of: asOf,
    candidate_count: targets.length,
    candidate_bytes: bytes,
    candidates: targets,
    deleted: result.deleted,
    failed: result.failed,
  }, null, 2));
  return result.failed.length ? 1 : 0;
}

if (import.meta.main) {
  try {
    process.exit(main());
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
