import { existsSync, mkdirSync, readFileSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { createHash } from "node:crypto";

export interface WechatLimits {
  targetRenderedCharacters: number | null;
  maxRenderedCharacters: number | null;
  maxArticlesPerEdition: number | null;
  maxPapersPerEdition: number | null;
}

export interface AppConfig {
  configPath: string;
  root: string;
  paperRepository: string;
  publicationRepository: string;
  workspaceDirectory: string;
  startDate: string;
  categories: string[];
  listPageSize: number;
  downloadConcurrency: number;
  convertConcurrency: number;
  maxRetries: number;
  retryDelayMs: number;
  pdfRetentionDays: number;
  wechat: WechatLimits;
}

export interface DayPaths {
  key: string;
  paperDir: string;
  list: string;
  pdfDir: string;
  markdownDir: string;
  editorial: string;
  workDir: string;
  copy: string;
  coverBrief: string;
  cover: string;
  coverReceipt: string;
  pendingEdition: string;
  edition: string;
  transaction: string;
}

export function parseDay(value: string): Date {
  const compact = value.replace(/[-/]/g, "");
  const match = /^(\d{4})(\d{2})(\d{2})$/.exec(compact);
  if (!match) throw new Error(`Invalid date ${value}; expected yyyyMMdd, yyyy-MM-dd, or yyyy/MM/dd`);
  const date = new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
  if (date.toISOString().slice(0, 10).replaceAll("-", "") !== compact) {
    throw new Error(`Invalid calendar date: ${value}`);
  }
  return date;
}

export function dayKey(value: string): string {
  return parseDay(value).toISOString().slice(0, 10).replaceAll("-", "");
}

export function displayDay(value: string): string {
  return parseDay(value).toISOString().slice(0, 10);
}

export function arxivHeading(value: string): string {
  const date = parseDay(value);
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${weekdays[date.getUTCDay()]}, ${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function nextWeekday(value: string): string {
  const date = parseDay(value);
  do date.setUTCDate(date.getUTCDate() + 1);
  while (date.getUTCDay() === 0 || date.getUTCDay() === 6);
  return dayKey(date.toISOString().slice(0, 10));
}

export function nextCalendarDay(value: string): string {
  const date = parseDay(value);
  date.setUTCDate(date.getUTCDate() + 1);
  return dayKey(date.toISOString().slice(0, 10));
}

export function isWeekend(value: string): boolean {
  const weekday = parseDay(value).getUTCDay();
  return weekday === 0 || weekday === 6;
}

export function todayKey(now = new Date()): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit",
  }).formatToParts(now);
  const part = (type: Intl.DateTimeFormatPartTypes): string => parts.find((item) => item.type === type)?.value ?? "";
  return `${part("year")}${part("month")}${part("day")}`;
}

function positive(raw: unknown, fallback: number, name: string): number {
  const value = raw === undefined ? fallback : Number(raw);
  if (!Number.isInteger(value) || value < 1) throw new Error(`${name} must be a positive integer`);
  return value;
}

export function loadConfig(path = "arxiv-paper-wechat.config.json"): AppConfig {
  const configPath = resolve(path);
  if (!existsSync(configPath)) throw new Error(`Configuration file not found: ${configPath}`);
  const raw = JSON.parse(readFileSync(configPath, "utf8")) as Record<string, unknown>;
  const root = dirname(configPath);
  const requiredPath = (name: string): string => {
    const value = raw[name];
    if (typeof value !== "string" || !value.trim()) throw new Error(`${name} is required`);
    return resolve(root, value);
  };
  const categories = raw.categories;
  if (!Array.isArray(categories) || !categories.every((item) => typeof item === "string") || categories.length === 0) {
    throw new Error("categories must be a non-empty string array");
  }
  const startDate = dayKey(String(raw.startDate ?? ""));
  const limits = (raw.wechat ?? {}) as Partial<WechatLimits>;
  const nullableLimit = (value: unknown, name: string): number | null => {
    if (value === undefined || value === null) return null;
    return positive(value, 1, name);
  };
  return {
    configPath,
    root,
    paperRepository: requiredPath("paperRepository"),
    publicationRepository: requiredPath("publicationRepository"),
    workspaceDirectory: requiredPath("workspaceDirectory"),
    startDate,
    categories: [...new Set(categories as string[])],
    listPageSize: positive(raw.listPageSize, 50, "listPageSize"),
    downloadConcurrency: positive(raw.downloadConcurrency, 4, "downloadConcurrency"),
    convertConcurrency: positive(raw.convertConcurrency, 2, "convertConcurrency"),
    maxRetries: positive(raw.maxRetries, 3, "maxRetries"),
    retryDelayMs: positive(raw.retryDelayMs, 2000, "retryDelayMs"),
    pdfRetentionDays: positive(raw.pdfRetentionDays, 30, "pdfRetentionDays"),
    wechat: {
      targetRenderedCharacters: nullableLimit(limits.targetRenderedCharacters, "wechat.targetRenderedCharacters"),
      maxRenderedCharacters: nullableLimit(limits.maxRenderedCharacters, "wechat.maxRenderedCharacters"),
      maxArticlesPerEdition: nullableLimit(limits.maxArticlesPerEdition, "wechat.maxArticlesPerEdition"),
      maxPapersPerEdition: nullableLimit(limits.maxPapersPerEdition, "wechat.maxPapersPerEdition"),
    },
  };
}

export function pathsFor(config: AppConfig, date: string): DayPaths {
  const key = dayKey(date);
  const paperDir = join(config.paperRepository, key);
  const workDir = join(config.workspaceDirectory, key);
  return {
    key,
    paperDir,
    list: join(paperDir, "list.json"),
    pdfDir: join(paperDir, "pdf"),
    markdownDir: join(paperDir, "markdown"),
    editorial: join(paperDir, "editorial.json"),
    workDir,
    copy: join(workDir, "copy.json"),
    coverBrief: join(workDir, "cover-brief.json"),
    cover: join(workDir, "cover.png"),
    coverReceipt: join(workDir, "cover.json"),
    pendingEdition: join(workDir, "edition.pending.json"),
    edition: join(workDir, "edition.json"),
    transaction: join(workDir, "publication.json"),
  };
}

export function readJson<T>(path: string): T {
  return JSON.parse(readFileSync(path, "utf8")) as T;
}

export function atomicWrite(path: string, contents: string): void {
  mkdirSync(dirname(path), { recursive: true });
  const temporary = `${path}.tmp`;
  writeFileSync(temporary, contents, "utf8");
  renameSync(temporary, path);
}

export function atomicJson(path: string, value: unknown): void {
  atomicWrite(path, `${JSON.stringify(value, null, 2)}\n`);
}

export function sha256(value: string | Buffer): string {
  return createHash("sha256").update(value).digest("hex");
}

export function latestPublishedSourceDate(config: AppConfig): string | undefined {
  if (!existsSync(config.publicationRepository)) return undefined;
  let latest: string | undefined;
  for (const day of readdirSync(config.publicationRepository, { withFileTypes: true })) {
    if (!day.isDirectory() || !/^\d{8}$/.test(day.name)) continue;
    const dayDir = join(config.publicationRepository, day.name);
    for (const media of readdirSync(dayDir, { withFileTypes: true })) {
      if (!media.isDirectory()) continue;
      const receiptPath = join(dayDir, media.name, "receipt.json");
      if (!existsSync(receiptPath)) continue;
      const receipt = readJson<Record<string, unknown>>(receiptPath);
      if (receipt.status !== "draft_created") continue;
      const sourceDate = dayKey(String(receipt.sourceDate ?? day.name));
      if (!latest || sourceDate > latest) latest = sourceDate;
    }
  }
  return latest;
}

export function resolveTargetDate(config: AppConfig, explicit?: string): string {
  if (explicit) return dayKey(explicit);
  const latest = latestPublishedSourceDate(config);
  return latest ? nextWeekday(latest) : config.startDate;
}

export function pendingPublicationTransactions(config: AppConfig): Array<{ sourceDate: string; path: string; status: string; mediaId?: string }> {
  if (!existsSync(config.workspaceDirectory)) return [];
  const pending: Array<{ sourceDate: string; path: string; status: string; mediaId?: string }> = [];
  for (const day of readdirSync(config.workspaceDirectory, { withFileTypes: true })) {
    if (!day.isDirectory() || !/^\d{8}$/.test(day.name)) continue;
    const path = join(config.workspaceDirectory, day.name, "publication.json");
    if (!existsSync(path)) continue;
    const record = readJson<Record<string, unknown>>(path);
    const status = String(record.status ?? "unknown");
    if (status === "archived") continue;
    pending.push({ sourceDate: day.name, path, status, mediaId: typeof record.mediaId === "string" ? record.mediaId : undefined });
  }
  return pending.sort((a, b) => a.sourceDate.localeCompare(b.sourceDate));
}

export async function mapPool<T, R>(items: T[], concurrency: number, worker: (item: T, index: number, workerIndex: number) => Promise<R>): Promise<R[]> {
  const results = new Array<R>(items.length);
  let cursor = 0;
  const runners = Array.from({ length: Math.min(concurrency, items.length) }, async (_, workerIndex) => {
    while (true) {
      const index = cursor++;
      if (index >= items.length) return;
      results[index] = await worker(items[index], index, workerIndex);
    }
  });
  await Promise.all(runners);
  return results;
}
