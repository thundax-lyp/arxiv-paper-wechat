import { closeSync, createWriteStream, existsSync, mkdirSync, openSync, readFileSync, readSync, renameSync, rmSync, statSync, unlinkSync } from "node:fs";
import { join } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import {
  AppConfig, DayPaths, arxivHeading, atomicJson, atomicWrite, displayDay, mapPool, readJson, todayKey,
} from "./core";

export interface Paper {
  arxivId: string;
  version: number;
  versionedId: string;
  title: string;
  authors: string[];
  abstract: string;
  categories: string[];
  primaryCategory: string;
  comments: string;
  published: string;
  updated: string;
  absUrl: string;
  pdfUrl: string;
  htmlUrl?: string;
  sourceCategories: string[];
  screening?: DownloadScreening;
  content?: HtmlContentStatus;
}

export interface DownloadScreening {
  decision: "download" | "skip";
  reason: string;
  relevanceRank?: number;
  downloadError?: string;
}

export interface HtmlContentStatus {
  source: "arxiv-html";
  status: "available" | "unavailable";
  checkedAt: string;
  reason?: string;
}

export interface PaperList {
  schemaVersion: 1;
  sourceDate: string;
  arxivHeading: string;
  categories: string[];
  crawledAt: string;
  screenedAt?: string;
  papers: Paper[];
}

export type CrawlDateStatus = "ready" | "empty" | "not_released" | "unavailable" | "failed";

export class CrawlDateError extends Error {
  constructor(public status: Exclude<CrawlDateStatus, "ready" | "empty">, message: string) {
    super(message);
    this.name = "CrawlDateError";
  }
}

function decodeHtml(value: string): string {
  const named: Record<string, string> = {
    amp: "&", lt: "<", gt: ">", quot: "\"", apos: "'", nbsp: " ",
    ndash: "–", mdash: "—", hellip: "…", laquo: "«", raquo: "»",
  };
  return value.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (entity, body: string) => {
    if (body.startsWith("#")) {
      const hex = body[1]?.toLowerCase() === "x";
      const value = Number.parseInt(body.slice(hex ? 2 : 1), hex ? 16 : 10);
      return Number.isFinite(value) ? String.fromCodePoint(value) : entity;
    }
    return named[body.toLowerCase()] ?? entity;
  });
}

function text(value: string): string {
  return decodeHtml(value.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ").trim();
}

function div(block: string, className: string): string {
  return block.match(new RegExp(`<div[^>]*class=["'][^"']*\\b${className}\\b[^"']*["'][^>]*>([\\s\\S]*?)<\\/div>`, "i"))?.[1] ?? "";
}

function parsePaperBlocks(section: string, category: string, sourceDate: string): Paper[] {
  const papers: Paper[] = [];
  for (const pair of section.matchAll(/<dt\b[\s\S]*?<\/dt>\s*<dd\b[\s\S]*?<\/dd>/gi)) {
    const block = pair[0];
    const absHref = block.match(/href\s*=\s*["']([^"']*\/abs\/([^"'#?]+))["']/i);
    if (!absHref) continue;
    const versionedId = absHref[2].replace(/^arXiv:/i, "");
    const versionMatch = /v(\d+)$/.exec(versionedId);
    const arxivId = versionedId.replace(/v\d+$/, "");
    const pdfHref = block.match(/href\s*=\s*["']([^"']*\/pdf\/[^"'#?]+)["']/i)?.[1];
    const absoluteUrl = (href: string): string => href.startsWith("http") ? href : `https://arxiv.org${href.startsWith("/") ? "" : "/"}${href}`;
    const authors = [...div(block, "list-authors").matchAll(/<a[^>]*>([\s\S]*?)<\/a>/gi)].map((match) => text(match[1]));
    const subjects = text(div(block, "list-subjects")).replace(/^Subjects:\s*/i, "");
    const categoryCodes = [...subjects.matchAll(/\(([a-z-]+\.[A-Z]{2})\)/g)].map((match) => match[1]);
    papers.push({
      arxivId,
      version: Number(versionMatch?.[1] ?? 1),
      versionedId,
      title: text(div(block, "list-title")).replace(/^Title:\s*/i, ""),
      authors,
      abstract: text(div(block, "list-abstract") || block.match(/<p[^>]*class=["'][^"']*\bmathjax\b[^"']*["'][^>]*>([\s\S]*?)<\/p>/i)?.[1] || "").replace(/^Abstract:\s*/i, "").replace(/[▽△]\s*(More|Less)/g, "").trim(),
      categories: categoryCodes.length ? categoryCodes : [category],
      primaryCategory: categoryCodes[0] ?? category,
      comments: text(div(block, "list-comments")).replace(/^Comments:\s*/i, ""),
      published: displayDay(sourceDate),
      updated: displayDay(sourceDate),
      absUrl: absoluteUrl(absHref[1]),
      pdfUrl: absoluteUrl(pdfHref ?? `/pdf/${versionedId}`),
      htmlUrl: `https://arxiv.org/html/${versionedId}`,
      sourceCategories: [category],
    });
  }
  return papers;
}

export function parseArxivPage(html: string, category: string, heading: string, sourceDate: string): { papers: Paper[]; entryCount: number; hasHeading: boolean } {
  const entryCount = (html.match(/<dt\b/gi) ?? []).length;
  const escaped = heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const section = html.match(new RegExp(`<h3[^>]*>\\s*${escaped}(?:\\s*\\([^<]*\\))?\\s*<\\/h3>([\\s\\S]*?)(?=<h3|$)`, "i"))?.[1];
  if (section === undefined) return { papers: [], entryCount, hasHeading: false };
  return { papers: parsePaperBlocks(section, category, sourceDate), entryCount, hasHeading: true };
}

export function parseCatchupPage(html: string, category: string, sourceDate: string): { papers: Paper[]; hasDate: boolean } {
  const heading = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
  const headingDate = heading.match(/\bon\s+([A-Z][a-z]{2},\s+\d{1,2}\s+[A-Z][a-z]{2}\s+\d{4})\s*$/)?.[1];
  const parsedHeading = headingDate ? new Date(`${headingDate} UTC`) : undefined;
  const hasDate = Boolean(parsedHeading && !Number.isNaN(parsedHeading.getTime())
    && parsedHeading.toISOString().slice(0, 10).replaceAll("-", "") === sourceDate);
  if (!hasDate) return { papers: [], hasDate: false };
  const newSubmissions = html.match(/<dl[^>]+id=["']articles["'][^>]*>\s*<h3[^>]*>\s*New submissions\b[^<]*<\/h3>([\s\S]*?)<\/dl>/i)?.[1] ?? "";
  return { papers: parsePaperBlocks(newSubmissions, category, sourceDate), hasDate: true };
}

export function paperFileStem(arxivId: string): string {
  return arxivId.replaceAll("/", "__");
}

function nonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateScreeningInput(list: PaperList, input: unknown): Map<string, DownloadScreening> {
  const rows = Array.isArray(input) ? input : (input as { papers?: unknown[] } | null)?.papers;
  if (!Array.isArray(rows)) throw new Error("Screening input must be an array or an object with a papers array");
  const expected = new Set(list.papers.map((paper) => paper.arxivId));
  const screening = new Map<string, DownloadScreening>();
  const ranks = new Set<number>();
  for (const [index, raw] of rows.entries()) {
    if (!raw || typeof raw !== "object") throw new Error(`Screening row ${index + 1} must be an object`);
    const row = raw as Record<string, unknown>;
    const arxivId = String(row.arxivId ?? "").replace(/v\d+$/, "");
    if (!expected.has(arxivId)) throw new Error(`Unknown arXiv ID in screening input: ${arxivId}`);
    if (screening.has(arxivId)) throw new Error(`Duplicate screening result: ${arxivId}`);
    if (row.decision !== "download" && row.decision !== "skip") throw new Error(`${arxivId}: decision must be download or skip`);
    if (!nonEmptyString(row.reason)) throw new Error(`${arxivId}: screening reason is required`);
    const paper = list.papers.find((paper) => paper.arxivId === arxivId)!;
    if (!nonEmptyString(paper.abstract)) throw new Error(`${arxivId}: abstract is missing; refresh the list before screening`);
    if (row.decision === "download") {
      if (!Number.isInteger(row.relevanceRank) || Number(row.relevanceRank) < 1 || ranks.has(Number(row.relevanceRank))) {
        throw new Error(`${arxivId}: relevanceRank must be a unique positive integer`);
      }
      ranks.add(Number(row.relevanceRank));
    }
    screening.set(arxivId, { decision: row.decision, reason: row.reason.trim(),
      ...(row.decision === "download" ? { relevanceRank: Number(row.relevanceRank) } : {}) });
  }
  const missing = [...expected].filter((arxivId) => !screening.has(arxivId));
  if (missing.length) throw new Error(`Screening input is incomplete; missing ${missing.length}: ${missing.slice(0, 8).join(", ")}`);
  return screening;
}

export function commitScreening(paths: DayPaths, inputPath: string): PaperList {
  if (!existsSync(paths.list)) throw new Error(`Paper list not found: ${paths.list}`);
  const list = readJson<PaperList>(paths.list);
  const screening = validateScreeningInput(list, JSON.parse(readFileSync(inputPath, "utf8")));
  const updated: PaperList = {
    ...list,
    screenedAt: new Date().toISOString(),
    papers: list.papers.map((paper) => ({ ...paper, screening: screening.get(paper.arxivId)! })),
  };
  atomicJson(paths.list, updated);
  return updated;
}

export function validateScreening(list: PaperList): { valid: true; total: number; download: number; skipped: number; reserve: number; failed: number } {
  const unreviewed = list.papers.filter((paper) => paper.screening === undefined);
  if (unreviewed.length) throw new Error(`Screening input is incomplete; missing ${unreviewed.length}: ${unreviewed.slice(0, 8).map((paper) => paper.arxivId).join(", ")}`);
  const screening = validateScreeningInput(list, list.papers.map((paper) => ({ arxivId: paper.arxivId, ...paper.screening })));
  const download = rankedCandidates(list).length;
  const skipped = [...screening.values()].filter(item => item.decision === "skip").length;
  const failed = list.papers.filter(paper => paper.screening?.downloadError).length;
  return { valid: true, total: list.papers.length, download, skipped, reserve: list.papers.length - skipped - failed - download, failed };
}

export function reviewCandidates(list: PaperList): Paper[] {
  validateScreening(list);
  return rankedCandidates(list).filter((paper) => paper.content?.status !== "unavailable");
}

function mergePapers(papers: Paper[]): Paper[] {
  const merged = new Map<string, Paper>();
  for (const paper of papers) {
    const current = merged.get(paper.arxivId);
    if (!current || paper.version > current.version) {
      merged.set(paper.arxivId, { ...paper, sourceCategories: [...new Set([...(current?.sourceCategories ?? []), ...paper.sourceCategories])] });
    } else {
      current.sourceCategories = [...new Set([...current.sourceCategories, ...paper.sourceCategories])];
      current.categories = [...new Set([...current.categories, ...paper.categories])];
    }
  }
  return [...merged.values()].sort((a, b) => a.arxivId.localeCompare(b.arxivId));
}

async function fetchRetry(config: AppConfig, url: string, init?: RequestInit): Promise<Response> {
  let last: unknown;
  for (let attempt = 1; attempt <= config.maxRetries; attempt += 1) {
    try {
      const response = await fetch(url, { ...init, headers: { "User-Agent": "arxiv-paper-wechat/2.0", ...(init?.headers ?? {}) }, signal: AbortSignal.timeout(60_000) });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return response;
    } catch (error) {
      last = error;
      if (attempt < config.maxRetries) await Bun.sleep(config.retryDelayMs * attempt);
    }
  }
  throw new Error(`Failed to fetch ${url}: ${last instanceof Error ? last.message : String(last)}`);
}

async function crawlCatchup(config: AppConfig, paths: DayPaths): Promise<Paper[]> {
  const collected: Paper[] = [];
  for (const category of config.categories) {
    const url = `https://arxiv.org/catchup/${encodeURIComponent(category)}/${displayDay(paths.key)}?abs=True&page=1`;
    let response: Response;
    try { response = await fetchRetry(config, url); }
    catch (error) {
      if (/\b400\b|\b404\b/.test(String(error))) throw new CrawlDateError("unavailable", `arXiv Catchup page unavailable: ${url}`);
      throw error;
    }
    const parsed = parseCatchupPage(await response.text(), category, paths.key);
    if (!parsed.hasDate) throw new Error(`Catchup page date mismatch for ${category}: ${displayDay(paths.key)}`);
    collected.push(...parsed.papers);
  }
  return mergePapers(collected);
}

export async function crawl(config: AppConfig, paths: DayPaths, refresh = false): Promise<PaperList> {
  if (existsSync(paths.list) && !refresh) return readJson<PaperList>(paths.list);
  const heading = arxivHeading(paths.key);
  const errorPath = join(paths.workDir, "crawl-error.json");
  try {
    if (paths.key > todayKey()) throw new CrawlDateError("not_released", `Requested date ${paths.key} is in the future`);
    const papers = await crawlCatchup(config, paths);
    const result: PaperList = {
      schemaVersion: 1, sourceDate: paths.key, arxivHeading: heading, categories: config.categories,
      crawledAt: new Date().toISOString(), papers,
    };
    atomicJson(paths.list, result);
    if (existsSync(errorPath)) unlinkSync(errorPath);
    return result;
  } catch (error) {
    const status = error instanceof CrawlDateError ? error.status : "failed";
    atomicJson(errorPath, { sourceDate: paths.key, status, failedAt: new Date().toISOString(), error: error instanceof Error ? error.message : String(error) });
    if (error instanceof CrawlDateError) throw error;
    throw new CrawlDateError("failed", error instanceof Error ? error.message : String(error));
  }
}

export function validPdf(path: string): boolean {
  if (!existsSync(path) || statSync(path).size < 8) return false;
  const file = openSync(path, "r");
  try {
    const header = Buffer.alloc(5);
    return readSync(file, header, 0, 5, 0) === 5 && header.equals(Buffer.from("%PDF-"));
  } finally {
    closeSync(file);
  }
}

export async function downloadPaper(config: AppConfig, paths: DayPaths, paper: Paper): Promise<"downloaded" | "skipped"> {
  mkdirSync(paths.pdfDir, { recursive: true });
  const output = join(paths.pdfDir, `${paperFileStem(paper.arxivId)}.pdf`);
  const part = `${output}.part`;
  const versionMarker = `${output}.version`;
  const lengthMarker = `${output}.length`;
  if (validPdf(output)) {
    if (existsSync(versionMarker)) unlinkSync(versionMarker);
    if (existsSync(lengthMarker)) unlinkSync(lengthMarker);
    return "skipped";
  }
  if (existsSync(output)) unlinkSync(output);
  let last: unknown;
  for (let attempt = 1; attempt <= config.maxRetries; attempt += 1) {
    try {
      const offset = existsSync(part) ? statSync(part).size : 0;
      const response = await fetchRetry(config, paper.pdfUrl, offset > 0 ? { headers: { Range: `bytes=${offset}-` } } : undefined);
      if (!response.body) throw new Error("PDF response has no body");
      const append = offset > 0 && response.status === 206;
      const startingSize = append ? offset : 0;
      const expectedChunk = Number(response.headers.get("content-length") ?? 0);
      await pipeline(Readable.fromWeb(response.body as never), createWriteStream(part, { flags: append ? "a" : "w" }));
      const received = statSync(part).size - startingSize;
      if (expectedChunk && received !== expectedChunk) throw new Error(`Incomplete response: expected ${expectedChunk} bytes, got ${received}`);
      const contentRange = response.headers.get("content-range")?.match(/bytes\s+\d+-\d+\/(\d+)/i);
      const totalLength = response.status === 206 ? Number(contentRange?.[1] ?? 0) : (expectedChunk || statSync(part).size);
      if (!totalLength || statSync(part).size !== totalLength) {
        throw new Error(`Incomplete PDF: expected total ${totalLength || "unknown"} bytes, got ${statSync(part).size}`);
      }
      if (!validPdf(part)) throw new Error("Downloaded file is not a valid PDF");
      renameSync(part, output);
      if (existsSync(versionMarker)) unlinkSync(versionMarker);
      if (existsSync(lengthMarker)) unlinkSync(lengthMarker);
      return "downloaded";
    } catch (error) {
      last = error;
      if (/416|not a valid PDF/i.test(String(error)) && existsSync(part)) unlinkSync(part);
      if (attempt < config.maxRetries) await Bun.sleep(config.retryDelayMs * attempt);
    }
  }
  throw new Error(`${paper.arxivId}: ${last instanceof Error ? last.message : String(last)}`);
}

export class HtmlUnavailableError extends Error {
  constructor(public arxivId: string, message: string) {
    super(message);
    this.name = "HtmlUnavailableError";
  }
}

function htmlUrlFor(paper: Paper): string {
  return paper.htmlUrl ?? `https://arxiv.org/html/${paper.versionedId}`;
}

function markdownText(value: string): string {
  return decodeHtml(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ")).trim();
}

function htmlToMarkdown(html: string, baseUrl: string): string {
  const article = html.match(/<article\b[^>]*>([\s\S]*)<\/article>/i)?.[1];
  if (!article) throw new Error("arXiv HTML contains no article body");
  // arXiv's HTML article starts with LaTeXML author metadata. We already keep
  // canonical title/authors in frontmatter, so begin at the readable abstract.
  const abstractStart = article.search(/<(div|section)\b[^>]*\bltx_abstract\b/i);
  let body = (abstractStart >= 0 ? article.slice(abstractStart) : article)
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|nav|header|footer)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<annotation[^>]*encoding=["']application\/x-tex["'][^>]*>([\s\S]*?)<\/annotation>/gi, (_match, tex: string) => ` $${markdownText(tex)}$ `)
    .replace(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi, (_match, src: string) => `\n![](${new URL(src, baseUrl).href})\n`)
    .replace(/<figcaption[^>]*>([\s\S]*?)<\/figcaption>/gi, (_match, caption: string) => `\n*${markdownText(caption)}*\n`)
    .replace(/<(div|section)\b[^>]*\bltx_abstract\b[^>]*>/gi, "\n\n## Abstract\n\n")
    .replace(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi, (_match, href: string, label: string) => {
      const text = markdownText(label);
      if (!text) return "";
      try { return `[${text}](${new URL(href, baseUrl).href})`; }
      catch { return text; }
    });
  for (let level = 6; level >= 1; level -= 1) {
    const marker = "#".repeat(level);
    body = body.replace(new RegExp(`<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`, "gi"), (_match, heading: string) => `\n\n${marker} ${markdownText(heading)}\n\n`);
  }
  body = body
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_match, item: string) => `\n- ${markdownText(item)}`)
    .replace(/<\/?(ul|ol|figure|section|div|table|tbody|thead|tr)[^>]*>/gi, "\n")
    .replace(/<\/?(p|blockquote|pre)[^>]*>/gi, "\n\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
  if (body.length < 400) throw new Error(`arXiv HTML produced only ${body.length} Markdown characters`);
  return body;
}

export async function convertPaper(config: AppConfig, paths: DayPaths, paper: Paper): Promise<"converted" | "skipped"> {
  mkdirSync(paths.markdownDir, { recursive: true });
  const stem = paperFileStem(paper.arxivId);
  const output = join(paths.markdownDir, `${stem}.md`);
  const legacyConverterOutput = `${output}.mineru`;
  if (existsSync(output) && statSync(output).size > 100) {
    const recordedVersion = Number.parseInt(readFileSync(output, "utf8").match(/^version:\s*(\d+)$/m)?.[1] ?? "1", 10);
    const converter = readFileSync(output, "utf8").match(/^converter:\s*"([^"]+)"$/m)?.[1];
    if (recordedVersion === paper.version && converter === "arxiv-html") return "skipped";
  }
  if (existsSync(legacyConverterOutput)) rmSync(legacyConverterOutput, { recursive: true, force: true });
  const url = htmlUrlFor(paper);
  try {
    const response = await fetchRetry(config, url);
    const extracted = htmlToMarkdown(await response.text(), url);
    const suppliedAbstract = paper.abstract.trim() ? `## Abstract\n\n${paper.abstract.trim()}\n\n` : "";
    const markdown = `---\narxivId: "${paper.arxivId}"\nversion: ${paper.version}\nsourceDate: "${paths.key}"\nabsUrl: "${paper.absUrl}"\npdfUrl: "${paper.pdfUrl}"\nhtmlUrl: "${url}"\nconverter: "arxiv-html"\n---\n\n# ${paper.title}\n\n**Authors:** ${paper.authors.join(", ")}\n\n${suppliedAbstract}## Extracted paper\n\n${extracted}\n`;
    atomicWrite(output, markdown);
    return "converted";
  } catch (error) {
    if (/\b404\b|no article body|produced only/i.test(error instanceof Error ? error.message : String(error))) {
      throw new HtmlUnavailableError(paper.arxivId, `${paper.arxivId}: arXiv HTML unavailable or invalid; skipped without PDF fallback`);
    }
    throw error;
  }
}

export interface StageReport { total: number; completed: number; skipped: number; failures: Array<{ arxivId: string; error: string }> }

export const MAX_DOWNLOAD_CANDIDATES = 60;

function rankedCandidates(list: PaperList): Paper[] {
  return list.papers.filter(paper => paper.screening?.decision === "download" && !paper.screening.downloadError)
    .sort((a, b) => (a.screening!.relevanceRank ?? Infinity) - (b.screening!.relevanceRank ?? Infinity) || a.arxivId.localeCompare(b.arxivId))
    .slice(0, MAX_DOWNLOAD_CANDIDATES);
}

export async function downloadAll(config: AppConfig, paths: DayPaths, concurrency = config.downloadConcurrency): Promise<StageReport & { replacedFailures: Array<{ arxivId: string; error: string }> }> {
  const list = readJson<PaperList>(paths.list);
  validateScreening(list);
  const attempted = new Set<string>();
  const outcomes: Array<{ paper: Paper; status: string; error?: string }> = [];
  const replacedFailures: Array<{ arxivId: string; error: string }> = [];
  while (true) {
    const batch = rankedCandidates(list).filter(paper => !attempted.has(paper.arxivId));
    if (!batch.length) break;
    const results = await mapPool(batch, concurrency, async paper => {
      attempted.add(paper.arxivId);
      try { return { paper, status: await downloadPaper(config, paths, paper) }; }
      catch (error) { return { paper, status: "failed", error: error instanceof Error ? error.message : String(error) }; }
    });
    for (const result of results) {
      if (result.status === "failed") {
        result.paper.screening!.downloadError = result.error;
        replacedFailures.push({ arxivId: result.paper.arxivId, error: result.error! });
      } else outcomes.push(result);
    }
    // Persist exhausted retries before admitting the next ranked replacements.
    atomicJson(paths.list, list);
  }
  return { ...report(outcomes), replacedFailures };
}

export async function convertAll(config: AppConfig, paths: DayPaths, concurrency = config.convertConcurrency): Promise<StageReport> {
  const list = readJson<PaperList>(paths.list);
  const outcomes = await mapPool(reviewCandidates(list), concurrency, async (paper) => {
    try { return { paper, status: await convertPaper(config, paths, paper) }; }
    catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      return { paper, status: error instanceof HtmlUnavailableError ? "unavailable" : "failed", error: message };
    }
  });
  commitHtmlAvailability(paths, outcomes);
  return report(outcomes);
}

function commitHtmlAvailability(paths: DayPaths, outcomes: Array<{ paper: Paper; status: string; error?: string }>): void {
  const unavailable = new Map(outcomes.filter((item) => item.status === "unavailable").map((item) => [item.paper.arxivId, item.error ?? "arXiv HTML unavailable"]));
  if (!unavailable.size) return;
  const list = readJson<PaperList>(paths.list);
  atomicJson(paths.list, {
    ...list,
    papers: list.papers.map((paper) => unavailable.has(paper.arxivId) ? {
      ...paper,
      content: { source: "arxiv-html", status: "unavailable", checkedAt: new Date().toISOString(), reason: unavailable.get(paper.arxivId) },
    } : paper),
  } satisfies PaperList);
}

function report(outcomes: Array<{ paper: Paper; status: string; error?: string }>): StageReport {
  return {
    total: outcomes.length,
    completed: outcomes.filter((item) => item.status === "downloaded" || item.status === "converted").length,
    skipped: outcomes.filter((item) => item.status === "skipped" || item.status === "unavailable").length,
    failures: outcomes.filter((item) => item.status === "failed" || item.status === "blocked").map((item) => ({ arxivId: item.paper.arxivId, error: item.error ?? "unknown error" })),
  };
}

export async function ingest(config: AppConfig, paths: DayPaths, refresh = false, downloadConcurrency = config.downloadConcurrency, convertConcurrency = config.convertConcurrency): Promise<{ download: StageReport; convert: StageReport }> {
  await crawl(config, paths, refresh);
  const download = await downloadAll(config, paths, downloadConcurrency);
  return { download, convert: await convertAll(config, paths, convertConcurrency) };
}

export function status(paths: DayPaths): Record<string, unknown> {
  const list = existsSync(paths.list) ? readJson<PaperList>(paths.list) : undefined;
  const papers = list?.papers ?? [];
  const candidates = list ? rankedCandidates(list) : [];
  const reviewable = list ? reviewCandidates(list) : [];
  const screened = list ? papers.filter((paper) => paper.screening !== undefined).length : 0;
  const skipped = list ? papers.filter((paper) => paper.screening?.decision === "skip").length : 0;
  return {
    sourceDate: paths.key,
    listReady: Boolean(list),
    paperCount: papers.length,
    screeningReady: Boolean(list && screened === papers.length && papers.every(paper => paper.abstract.trim() && (paper.screening?.decision === "skip" || Number.isInteger(paper.screening?.relevanceRank)))),
    screeningReserve: papers.filter(paper => paper.screening?.decision === "download" && !paper.screening.downloadError).length - candidates.length,
    downloadFailed: papers.filter(paper => paper.screening?.downloadError).length,
    screeningDownload: candidates.length,
    screeningSkipped: skipped,
    htmlUnavailable: candidates.filter((paper) => paper.content?.status === "unavailable").length,
    screeningUnreviewed: papers.length - screened,
    pdfComplete: candidates.filter((paper) => validPdf(join(paths.pdfDir, `${paperFileStem(paper.arxivId)}.pdf`))).length,
    pdfPartial: candidates.filter((paper) => existsSync(join(paths.pdfDir, `${paperFileStem(paper.arxivId)}.pdf.part`))).length,
    markdownComplete: reviewable.filter((paper) => {
      const path = join(paths.markdownDir, `${paperFileStem(paper.arxivId)}.md`);
      return existsSync(path) && statSync(path).size > 100;
    }).length,
    editorialReady: existsSync(paths.editorial),
    editionReady: existsSync(paths.edition),
  };
}
