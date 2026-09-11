import { cpSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { basename, dirname, join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { AppConfig, DayPaths, atomicJson, readJson } from "./core";
import { EditionDocument, publisherManifest, validateEdition } from "./edition";

interface PublicationTransaction {
  schemaVersion: 1;
  sourceDate: string;
  fingerprint: string;
  status: "publishing" | "failed" | "uncertain" | "draft_created" | "archived";
  startedAt: string;
  updatedAt: string;
  mediaId?: string;
  draftCreatedAt?: string;
  error?: string;
}

function validImage(path: string): boolean {
  if (!existsSync(path) || statSync(path).size < 16) return false;
  const head = readFileSync(path).subarray(0, 12);
  return head.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
    || head.subarray(0, 3).equals(Buffer.from([255, 216, 255]));
}

function parsePublisherResult(stdout: string): { media_id?: string; success?: boolean } {
  const start = stdout.lastIndexOf("\n{");
  const candidate = (start >= 0 ? stdout.slice(start + 1) : stdout).trim();
  try { return JSON.parse(candidate); }
  catch { throw new Error(`Publisher did not return valid JSON: ${stdout.slice(-500)}`); }
}

function archive(config: AppConfig, paths: DayPaths, transaction: PublicationTransaction): string {
  if (!transaction.mediaId) throw new Error("Cannot archive without mediaId");
  const edition = readJson<EditionDocument>(paths.edition);
  const safeMediaId = transaction.mediaId.replace(/[^a-zA-Z0-9._-]/g, "_");
  const target = join(config.publicationRepository, paths.key, safeMediaId);
  mkdirSync(target, { recursive: true });
  cpSync(paths.edition, join(target, "edition.json"));
  cpSync(paths.copy, join(target, "copy.json"));
  const articlesTarget = join(target, "articles");
  mkdirSync(articlesTarget, { recursive: true });
  for (const article of edition.articles) {
    const source = resolve(paths.workDir, article.path);
    cpSync(source, join(articlesTarget, basename(source)));
  }
  const cover = resolve(paths.workDir, edition.coverPath);
  cpSync(cover, join(target, basename(cover)));
  atomicJson(join(target, "receipt.json"), {
    status: "draft_created",
    mediaId: transaction.mediaId,
    sourceDate: paths.key,
    draftCreatedAt: transaction.draftCreatedAt ?? transaction.updatedAt,
    fingerprint: transaction.fingerprint,
  });
  transaction.status = "archived";
  transaction.updatedAt = new Date().toISOString();
  atomicJson(paths.transaction, transaction);
  return target;
}

export function publishEdition(config: AppConfig, paths: DayPaths, wechatSkillDir: string, options: { dryRun?: boolean; author?: string; theme?: string; color?: string; account?: string; remote?: boolean } = {}): Record<string, unknown> {
  const validated = validateEdition(config, paths);
  const edition = validated.edition;
  const cover = resolve(paths.workDir, edition.coverPath);
  if (!validImage(cover)) throw new Error(`A real PNG or JPEG cover is required: ${cover}`);
  const publisher = join(resolve(wechatSkillDir), "scripts", "wechat-api.ts");
  if (!existsSync(publisher)) throw new Error(`WeChat publisher not found: ${publisher}`);
  if (existsSync(paths.transaction)) {
    const existing = readJson<PublicationTransaction>(paths.transaction);
    if (existing.fingerprint === edition.fingerprint) {
      if (existing.status === "draft_created") throw new Error("WeChat draft already exists; run publication reconcile instead of publishing again");
      if (existing.status === "archived") throw new Error(`Edition is already archived with mediaId ${existing.mediaId}`);
      if (existing.status === "publishing" || existing.status === "uncertain") throw new Error("Previous publish outcome is uncertain; verify WeChat and run publication reconcile --media-id ID");
    } else if (existing.status !== "archived") {
      throw new Error("An unfinished publication transaction exists for a different edition fingerprint");
    }
  }
  const manifest = publisherManifest(paths, edition);
  const primary = resolve(paths.workDir, edition.articles[0].path);
  const args = [publisher, primary, "--cover", cover, "--multi-manifest", manifest, "--author", options.author ?? "Thundax", "--theme", options.theme ?? "default"];
  if (options.color) args.push("--color", options.color);
  if (options.account) args.push("--account", options.account);
  if (options.remote) args.push("--remote");
  if (options.dryRun) args.push("--dry-run");
  if (options.dryRun) {
    const result = spawnSync("npx", ["-y", "bun", ...args], { encoding: "utf8", cwd: dirname(primary) });
    if (result.status !== 0) throw new Error(result.stderr.trim() || "WeChat dry-run failed");
    return { dryRun: true, publisher: parsePublisherResult(result.stdout) };
  }
  const now = new Date().toISOString();
  const transaction: PublicationTransaction = { schemaVersion: 1, sourceDate: paths.key, fingerprint: edition.fingerprint, status: "publishing", startedAt: now, updatedAt: now };
  atomicJson(paths.transaction, transaction);
  const result = spawnSync("npx", ["-y", "bun", ...args], { encoding: "utf8", cwd: dirname(primary) });
  if (result.status !== 0) {
    transaction.error = result.stderr.trim() || `publisher exited ${result.status}`;
    const knownPreDraftFailure = /40164|40125|access token error|no (wechat )?credentials|appsecret/i.test(transaction.error);
    transaction.status = knownPreDraftFailure ? "failed" : "uncertain";
    transaction.updatedAt = new Date().toISOString();
    atomicJson(paths.transaction, transaction);
    throw new Error(knownPreDraftFailure
      ? `${transaction.error}. Failure occurred before draft creation; fix configuration and retry the same date.`
      : `${transaction.error}. Outcome marked uncertain to prevent duplicate drafts.`);
  }
  const response = parsePublisherResult(result.stdout);
  if (!response.success || !response.media_id) {
    transaction.status = "uncertain";
    transaction.error = "Publisher returned no media_id";
    transaction.updatedAt = new Date().toISOString();
    atomicJson(paths.transaction, transaction);
    throw new Error("Publisher returned no media_id; outcome marked uncertain");
  }
  transaction.status = "draft_created";
  transaction.mediaId = response.media_id;
  transaction.draftCreatedAt = new Date().toISOString();
  transaction.updatedAt = transaction.draftCreatedAt;
  delete transaction.error;
  atomicJson(paths.transaction, transaction);
  const archivePath = archive(config, paths, transaction);
  return { status: "draft_created", mediaId: response.media_id, archivePath };
}

export function reconcilePublication(config: AppConfig, paths: DayPaths, mediaId?: string): Record<string, unknown> {
  if (!existsSync(paths.transaction)) throw new Error(`Publication transaction not found: ${paths.transaction}`);
  const transaction = readJson<PublicationTransaction>(paths.transaction);
  if (transaction.status === "archived") return { status: "archived", mediaId: transaction.mediaId, unchanged: true };
  if (mediaId) transaction.mediaId = mediaId;
  if (!transaction.mediaId) throw new Error("mediaId is required to reconcile an uncertain publication");
  transaction.status = "draft_created";
  transaction.updatedAt = new Date().toISOString();
  atomicJson(paths.transaction, transaction);
  const archivePath = archive(config, paths, transaction);
  return { status: "archived", mediaId: transaction.mediaId, archivePath };
}

/** Archive a draft that was deliberately created outside the guarded CLI flow. */
export function adoptPublishedDraft(config: AppConfig, paths: DayPaths, mediaId: string): Record<string, unknown> {
  if (existsSync(paths.transaction)) throw new Error("Publication transaction already exists; use publication reconcile instead");
  if (!mediaId.trim()) throw new Error("mediaId is required to adopt a draft");
  const edition = validateEdition(config, paths).edition;
  const now = new Date().toISOString();
  const transaction: PublicationTransaction = {
    schemaVersion: 1,
    sourceDate: paths.key,
    fingerprint: edition.fingerprint,
    status: "draft_created",
    mediaId: mediaId.trim(),
    startedAt: now,
    updatedAt: now,
    draftCreatedAt: now,
  };
  atomicJson(paths.transaction, transaction);
  return { status: "archived", mediaId: transaction.mediaId, archivePath: archive(config, paths, transaction) };
}

export function listPublications(config: AppConfig): Array<Record<string, unknown>> {
  if (!existsSync(config.publicationRepository)) return [];
  const result: Array<Record<string, unknown>> = [];
  for (const day of [...new Bun.Glob("*/**/receipt.json").scanSync({ cwd: config.publicationRepository, absolute: true })].sort()) {
    result.push({ path: day, ...readJson<Record<string, unknown>>(day) });
  }
  return result;
}
