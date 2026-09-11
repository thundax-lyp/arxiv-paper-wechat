import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { DayPaths, atomicJson, readJson, sha256 } from "./core";
import { EditorialDocument } from "./editorial";
import { PaperList } from "./papers";

export interface CoverBrief {
  schemaVersion: 1;
  sourceDate: string;
  generatorSkill: "$imagegen";
  useCase: "stylized-concept";
  assetType: "WeChat multi-article cover";
  outputPath: string;
  aspectRatio: "21:9";
  papers: Array<{ arxivId: string; title: string; direction: string; summary: string }>;
  constraints: string[];
}

export interface CoverReceipt {
  schemaVersion: 1;
  sourceDate: string;
  path: string;
  format: "png" | "jpeg";
  width: number;
  height: number;
  aspectRatio: number;
  sha256: string;
  validatedAt: string;
}

export function prepareCover(paths: DayPaths): CoverBrief {
  const list = readJson<PaperList>(paths.list);
  const editorial = readJson<EditorialDocument>(paths.editorial);
  const byId = new Map(list.papers.map((paper) => [paper.arxivId, paper]));
  const kept = editorial.papers.filter((paper) => paper.decision === "keep").sort((a, b) => (b.score?.total ?? 0) - (a.score?.total ?? 0) || a.arxivId.localeCompare(b.arxivId));
  if (!kept.length) throw new Error("There are no kept papers for a cover brief");
  const selected = kept.filter((paper) => (paper.score?.total ?? 0) >= 7);
  const focus = (selected.length ? selected : kept).slice(0, 4);
  const brief: CoverBrief = {
    schemaVersion: 1,
    sourceDate: paths.key,
    generatorSkill: "$imagegen",
    useCase: "stylized-concept",
    assetType: "WeChat multi-article cover",
    outputPath: paths.cover,
    aspectRatio: "21:9",
    papers: focus.map((item) => ({
      arxivId: item.arxivId,
      title: byId.get(item.arxivId)?.title ?? item.arxivId,
      direction: item.direction ?? "其他 Agent / LLM 方向",
      summary: item.summary ?? "",
    })),
    constraints: [
      "Create one coherent visual concept derived from the selected papers",
      "Modern editorial research aesthetic with clear focal hierarchy",
      "No text, letters, numbers, logos, watermarks, UI screenshots, or real people",
      "Compose for a very wide 21:9 crop; keep key subjects inside the central safe area",
    ],
  };
  atomicJson(paths.coverBrief, brief);
  return brief;
}

function pngDimensions(buffer: Buffer): { width: number; height: number } | undefined {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  if (buffer.length < 24 || !buffer.subarray(0, 8).equals(signature) || buffer.toString("ascii", 12, 16) !== "IHDR") return undefined;
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

function jpegDimensions(buffer: Buffer): { width: number; height: number } | undefined {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) return undefined;
  let offset = 2;
  while (offset + 8 < buffer.length) {
    if (buffer[offset] !== 0xff) { offset += 1; continue; }
    const marker = buffer[offset + 1];
    if (marker === 0xd8 || marker === 0xd9) { offset += 2; continue; }
    const length = buffer.readUInt16BE(offset + 2);
    if (length < 2 || offset + length + 2 > buffer.length) return undefined;
    if ([0xc0, 0xc1, 0xc2, 0xc3, 0xc5, 0xc6, 0xc7, 0xc9, 0xca, 0xcb, 0xcd, 0xce, 0xcf].includes(marker)) {
      return { height: buffer.readUInt16BE(offset + 5), width: buffer.readUInt16BE(offset + 7) };
    }
    offset += length + 2;
  }
  return undefined;
}

export function validateCover(paths: DayPaths, inputPath = paths.cover): CoverReceipt {
  const path = resolve(inputPath);
  if (!existsSync(path)) throw new Error(`Cover image not found: ${path}`);
  const buffer = readFileSync(path);
  const png = pngDimensions(buffer);
  const jpeg = png ? undefined : jpegDimensions(buffer);
  const dimensions = png ?? jpeg;
  if (!dimensions || dimensions.width < 1 || dimensions.height < 1) throw new Error("Cover must be a valid PNG or JPEG with readable dimensions");
  const ratio = dimensions.width / dimensions.height;
  const target = 21 / 9;
  if (Math.abs(ratio - target) / target > 0.03) throw new Error(`Cover aspect ratio is ${ratio.toFixed(3)}; expected 21:9 within 3%`);
  if (dimensions.width < 1200 || dimensions.height < 500) throw new Error(`Cover is too small: ${dimensions.width}x${dimensions.height}; minimum is 1200x500`);
  const receipt: CoverReceipt = {
    schemaVersion: 1,
    sourceDate: paths.key,
    path,
    format: png ? "png" : "jpeg",
    width: dimensions.width,
    height: dimensions.height,
    aspectRatio: ratio,
    sha256: sha256(buffer),
    validatedAt: new Date().toISOString(),
  };
  atomicJson(paths.coverReceipt, receipt);
  return receipt;
}

export function requireValidatedCover(paths: DayPaths, inputPath = paths.cover): CoverReceipt {
  if (!existsSync(paths.coverReceipt)) throw new Error("Cover has not been validated; run cover validate first");
  const receipt = readJson<CoverReceipt>(paths.coverReceipt);
  const path = resolve(inputPath);
  if (receipt.sourceDate !== paths.key || resolve(receipt.path) !== path || !existsSync(path) || sha256(readFileSync(path)) !== receipt.sha256) {
    throw new Error("Cover validation is stale; run cover validate again");
  }
  return receipt;
}
