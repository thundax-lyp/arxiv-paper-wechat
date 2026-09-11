#!/usr/bin/env bun

import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { loadConfig, pathsFor, pendingPublicationTransactions, readJson, resolveTargetDate } from "./core";
import { commitEditorial, validateEditorial } from "./editorial";
import { buildEdition, measureEdition, validateEdition } from "./edition";
import { prepareCover, validateCover } from "./cover";
import { CrawlDateError, commitScreening, convertAll, crawl, downloadAll, ingest, status, validateScreening } from "./papers";
import { adoptPublishedDraft, listPublications, publishEdition, reconcilePublication } from "./publication";
import { workflowStatus } from "./workflow";

type Options = Record<string, string | boolean>;

const HELP = `arxiv-paper-wechat — arXiv Agent & LLM Research Brief CLI

Usage:
  arxiv-paper-wechat <group> <command> [options]

Commands:
  workflow status
  papers crawl | download | convert | ingest | status
  screening commit | validate
  editorial commit | validate
  cover prepare | validate
  edition build | measure | validate | publish
  publication list | show | reconcile | adopt
  publication next-date

Global options:
  --config FILE       Configuration file (default: arxiv-paper-wechat.config.json)
  --date DATE         Exact date as yyyyMMdd, yyyy-MM-dd, or yyyy/MM/dd

Examples:
  npm run cli -- papers ingest --date 20260911
  npm run cli -- screening commit --date 20260911 --input /tmp/screening.json
  npm run cli -- editorial commit --date 20260911 --input /tmp/editorial.json
  npm run cli -- cover prepare --date 20260911
  npm run cli -- cover validate --date 20260911
  npm run cli -- edition build --date 20260911
  npm run cli -- edition measure --date 20260911
  npm run cli -- edition validate --date 20260911
  npm run cli -- edition publish --date 20260911 --dry-run`;

function parseOptions(args: string[]): { options: Options; positionals: string[] } {
  const options: Options = {};
  const positionals: string[] = [];
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (!arg.startsWith("--")) { positionals.push(arg); continue; }
    const [key, inline] = arg.slice(2).split(/=(.*)/s, 2);
    if (inline !== undefined) options[key] = inline;
    else if (args[index + 1] && !args[index + 1].startsWith("--")) options[key] = args[++index];
    else options[key] = true;
  }
  return { options, positionals };
}

function value(options: Options, key: string): string | undefined {
  return typeof options[key] === "string" ? options[key] as string : undefined;
}

function flag(options: Options, key: string): boolean { return options[key] === true; }

function positiveOption(options: Options, key: string, fallback: number): number {
  const raw = value(options, key);
  if (!raw) return fallback;
  const parsed = Number.parseInt(raw, 10);
  if (!Number.isInteger(parsed) || parsed < 1) throw new Error(`--${key} must be a positive integer`);
  return parsed;
}

function requireValue(options: Options, key: string): string {
  const result = value(options, key);
  if (!result) throw new Error(`--${key} is required`);
  return result;
}

function wechatSkillDir(): string {
  return resolve(import.meta.dir, "..", "..", "baoyu-post-to-wechat");
}

export async function run(argv = process.argv.slice(2)): Promise<Record<string, unknown>> {
  const { options, positionals } = parseOptions(argv);
  if (flag(options, "help") || positionals.length === 0) return { help: HELP };
  const [group, command] = positionals;
  const config = loadConfig(value(options, "config"));
  if (group === "publication" && command === "list") return { publications: listPublications(config) };
  if (group === "publication" && command === "next-date") {
    const pending = pendingPublicationTransactions(config);
    return { date: resolveTargetDate(config), blocked: pending.length > 0, pending };
  }
  const requestedDate = value(options, "date");
  if (!requestedDate) throw new Error("--date is required; the Skill must call publication next-date when the user did not specify one");
  const date = resolveTargetDate(config, requestedDate);
  const paths = pathsFor(config, date);
  if (group === "workflow" && command === "status") return workflowStatus(config, paths);

  if (group === "papers") {
    if (command === "crawl") {
      const list = await crawl(config, paths, flag(options, "refresh"));
      return { status: list.papers.length ? "ready" : "empty", date, listPath: paths.list, paperCount: list.papers.length, crawledAt: list.crawledAt };
    }
    if (!existsSync(paths.list) && command !== "ingest" && command !== "status") throw new Error(`Paper list not ready: ${paths.list}`);
    if (command === "download") return { date, download: await downloadAll(config, paths, positiveOption(options, "concurrency", config.downloadConcurrency)) };
    if (command === "convert") return { date, convert: await convertAll(config, paths, positiveOption(options, "concurrency", config.convertConcurrency)) };
    if (command === "ingest") {
      const result = await ingest(config, paths, flag(options, "refresh"), positiveOption(options, "download-concurrency", config.downloadConcurrency), positiveOption(options, "convert-concurrency", config.convertConcurrency));
      const list = await Bun.file(paths.list).json() as { papers: unknown[] };
      return { status: list.papers.length ? "ready" : "empty", date, ...result };
    }
    if (command === "status") return status(paths);
  }
  if (group === "screening") {
    if (command === "commit") {
      const list = commitScreening(paths, resolve(requireValue(options, "input")));
      return { date, listPath: paths.list, ...validateScreening(list) };
    }
    if (command === "validate") return { date, ...validateScreening(readJson<import("./papers").PaperList>(paths.list)) };
  }
  if (group === "editorial") {
    if (command === "commit") {
      commitEditorial(paths, resolve(requireValue(options, "input")));
      return { date, editorialPath: paths.editorial, ...validateEditorial(paths) };
    }
    if (command === "validate") return { date, ...validateEditorial(paths) };
  }
  if (group === "cover") {
    if (command === "prepare") return { date, brief: prepareCover(paths) };
    if (command === "validate") return { date, cover: validateCover(paths, value(options, "input") ?? paths.cover) };
  }
  if (group === "edition") {
    if (command === "build") return { date, edition: buildEdition(config, paths, value(options, "cover")) };
    if (command === "measure") return { date, edition: measureEdition(paths, wechatSkillDir()) };
    if (command === "validate") return { date, ...validateEdition(config, paths) };
    if (command === "publish") return { date, ...publishEdition(config, paths, wechatSkillDir(), {
      dryRun: flag(options, "dry-run"), author: value(options, "author"), theme: value(options, "theme"),
      color: value(options, "color"), account: value(options, "account"), remote: flag(options, "remote"),
    }) };
  }
  if (group === "publication") {
    if (command === "show") return { date, transaction: existsSync(paths.transaction) ? await Bun.file(paths.transaction).json() : null };
    if (command === "reconcile") return { date, ...reconcilePublication(config, paths, value(options, "media-id")) };
    if (command === "adopt") return { date, ...adoptPublishedDraft(config, paths, requireValue(options, "media-id")) };
  }
  throw new Error(`Unknown command: ${group ?? ""} ${command ?? ""}\n\n${HELP}`);
}

if (import.meta.main) {
  try {
    const result = await run();
    if ("help" in result) console.log(result.help);
    else console.log(JSON.stringify(result, null, 2));
    const failures = [
      ...(((result as { download?: { failures?: unknown[] } }).download?.failures) ?? []),
      ...(((result as { convert?: { failures?: unknown[] } }).convert?.failures) ?? []),
    ];
    if (failures.length) process.exitCode = 1;
  } catch (error) {
    if (error instanceof CrawlDateError) console.error(JSON.stringify({ status: error.status, error: error.message }, null, 2));
    else console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
