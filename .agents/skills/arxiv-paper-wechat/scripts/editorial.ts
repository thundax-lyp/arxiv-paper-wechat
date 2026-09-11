import { existsSync, readFileSync } from "node:fs";
import { DayPaths, atomicJson, readJson } from "./core";
import { PaperList, reviewCandidates } from "./papers";

export const DIRECTIONS = [
  "Agent系统与工具使用",
  "LLM推理与规划",
  "RAG与知识检索",
  "多智能体与协作",
  "LLM训练与对齐",
  "评测与安全",
  "应用与基准",
  "其他 Agent / LLM 方向",
] as const;

export interface EditorialScore {
  novelty: number;
  impact: number;
  evidence: number;
  audienceFit: number;
  total: number;
}

export interface EditorialItem {
  arxivId: string;
  decision: "keep" | "drop";
  tags: string[];
  reason?: string;
  direction?: typeof DIRECTIONS[number];
  authorsOrg?: string;
  codeUrl?: string;
  summary?: string;
  critique?: string;
  method?: string;
  innovation?: string;
  training?: string;
  results?: string;
  recommendation?: string;
  score?: EditorialScore;
}

export interface EditorialDocument {
  schemaVersion: 1;
  sourceDate: string;
  committedAt: string;
  papers: EditorialItem[];
}

function nonEmpty(value: unknown): boolean {
  return typeof value === "string" && value.trim().length > 0;
}

function integerIn(value: unknown, min: number, max: number): boolean {
  return Number.isInteger(value) && Number(value) >= min && Number(value) <= max;
}

export function validateEditorialInput(list: PaperList, input: unknown): EditorialItem[] {
  const rows = Array.isArray(input) ? input : (input as { papers?: unknown[] } | null)?.papers;
  if (!Array.isArray(rows)) throw new Error("Editorial input must be an array or an object with a papers array");
  const expected = new Set(reviewCandidates(list).map((paper) => paper.arxivId));
  if (list.papers.some((paper) => paper.screening === undefined)) throw new Error("Paper screening is incomplete; run screening commit before editorial review");
  if (expected.size === 0 && list.papers.length > 0) throw new Error("Screening selected no papers for download; there is nothing to review");
  const seen = new Set<string>();
  const normalized: EditorialItem[] = [];
  for (const [index, raw] of rows.entries()) {
    if (!raw || typeof raw !== "object") throw new Error(`Editorial row ${index + 1} must be an object`);
    const row = raw as Record<string, unknown>;
    const arxivId = String(row.arxivId ?? "").replace(/v\d+$/, "");
    if (!expected.has(arxivId)) throw new Error(`Unknown arXiv ID in editorial input: ${arxivId}`);
    if (seen.has(arxivId)) throw new Error(`Duplicate editorial result: ${arxivId}`);
    seen.add(arxivId);
    if (row.decision !== "keep" && row.decision !== "drop") throw new Error(`${arxivId}: decision must be keep or drop`);
    if (!Array.isArray(row.tags) || !row.tags.every(nonEmpty)) throw new Error(`${arxivId}: tags must be a string array`);
    const item: EditorialItem = { arxivId, decision: row.decision, tags: row.tags as string[] };
    if (row.decision === "drop") {
      if (!nonEmpty(row.reason)) throw new Error(`${arxivId}: dropped paper requires reason`);
      item.reason = String(row.reason).trim();
    } else {
      if (!DIRECTIONS.includes(row.direction as typeof DIRECTIONS[number])) throw new Error(`${arxivId}: invalid direction`);
      const fields = ["authorsOrg", "summary", "critique", "method", "innovation", "training", "results", "recommendation"] as const;
      for (const field of fields) if (!nonEmpty(row[field])) throw new Error(`${arxivId}: ${field} is required for kept papers`);
      const rawScore = row.score as Record<string, unknown> | undefined;
      if (!rawScore || !integerIn(rawScore.novelty, 0, 3) || !integerIn(rawScore.impact, 0, 3)
        || !integerIn(rawScore.evidence, 0, 2) || !integerIn(rawScore.audienceFit, 0, 2)) {
        throw new Error(`${arxivId}: invalid score dimensions`);
      }
      const score: EditorialScore = {
        novelty: Number(rawScore.novelty),
        impact: Number(rawScore.impact),
        evidence: Number(rawScore.evidence),
        audienceFit: Number(rawScore.audienceFit),
        total: Number(rawScore.novelty) + Number(rawScore.impact) + Number(rawScore.evidence) + Number(rawScore.audienceFit),
      };
      Object.assign(item, Object.fromEntries(fields.map((field) => [field, String(row[field]).trim()])), {
        direction: row.direction,
        codeUrl: nonEmpty(row.codeUrl) ? String(row.codeUrl).trim() : "",
        score,
      });
    }
    normalized.push(item);
  }
  const missing = [...expected].filter((id) => !seen.has(id));
  if (missing.length) throw new Error(`Editorial input is incomplete; missing ${missing.length}: ${missing.slice(0, 8).join(", ")}`);
  return normalized.sort((a, b) => a.arxivId.localeCompare(b.arxivId));
}

export function commitEditorial(paths: DayPaths, inputPath: string): EditorialDocument {
  if (!existsSync(paths.list)) throw new Error(`Paper list not found: ${paths.list}`);
  const list = readJson<PaperList>(paths.list);
  const input = JSON.parse(readFileSync(inputPath, "utf8"));
  const document: EditorialDocument = {
    schemaVersion: 1,
    sourceDate: paths.key,
    committedAt: new Date().toISOString(),
    papers: validateEditorialInput(list, input),
  };
  atomicJson(paths.editorial, document);
  return document;
}

export function validateEditorial(paths: DayPaths): { valid: true; total: number; kept: number; featured: number; dropped: number } {
  if (!existsSync(paths.editorial)) throw new Error(`Editorial file not found: ${paths.editorial}`);
  const list = readJson<PaperList>(paths.list);
  const document = readJson<EditorialDocument>(paths.editorial);
  if (document.sourceDate !== paths.key) throw new Error("Editorial sourceDate does not match directory date");
  const papers = validateEditorialInput(list, document.papers);
  const kept = papers.filter((paper) => paper.decision === "keep");
  return { valid: true, total: papers.length, kept: kept.length, featured: kept.filter((paper) => (paper.score?.total ?? 0) >= 7).length, dropped: papers.length - kept.length };
}
