import { afterEach, describe, expect, test } from "bun:test";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { AppConfig, arxivHeading, atomicJson, dayKey, nextWeekday, pathsFor, resolveTargetDate } from "./core";
import { commitEditorial, EditorialItem, validateEditorial } from "./editorial";
import { buildEdition, measureEdition, selectFeatured, selectForPublication, validateEdition } from "./edition";
import {
  commitScreening, crawl, downloadAll, downloadPaper, PaperList, paperFileStem, parseArxivPage, parseCatchupPage, validateScreening,
} from "./papers";
import { prepareCover, validateCover } from "./cover";
import { adoptPublishedDraft, archivePublication } from "./publication";
import { workflowStatus } from "./workflow";

const roots: string[] = [];
afterEach(() => { while (roots.length) rmSync(roots.pop()!, { recursive: true, force: true }); });

function fixture(limits = true): { root: string; config: AppConfig } {
  const root = mkdtempSync(join(tmpdir(), "arxiv-paper-wechat-"));
  roots.push(root);
  return { root, config: {
    configPath: join(root, "config.json"), root,
    paperRepository: join(root, "repositories", "papers"),
    publicationRepository: join(root, "repositories", "publications"),
    workspaceDirectory: join(root, ".work"), startDate: "20260907",
    categories: ["cs.AI", "cs.CL", "cs.MA"], listPageSize: 50,
    downloadConcurrency: 4, convertConcurrency: 2, maxRetries: 3, retryDelayMs: 1, pdfRetentionDays: 30,
    wechat: { targetRenderedCharacters: limits ? 5000 : null, maxRenderedCharacters: limits ? 10000 : null, maxArticlesPerEdition: limits ? 8 : null, maxPapersPerEdition: limits ? 50 : null },
  } };
}

function prepareDay(config: AppConfig) {
  const paths = pathsFor(config, "20260911");
  mkdirSync(paths.paperDir, { recursive: true });
  const list: PaperList = {
    schemaVersion: 1, sourceDate: "20260911", arxivHeading: arxivHeading("20260911"), categories: config.categories,
    crawledAt: "2026-09-11T00:00:00Z", screenedAt: "2026-09-11T00:00:00Z", papers: [{
      arxivId: "2609.12345", version: 1, versionedId: "2609.12345v1", title: "Tool Agent", authors: ["Ada Lovelace"],
      abstract: "An agent paper.", categories: ["cs.AI"], primaryCategory: "cs.AI", comments: "", published: "2026-09-11", updated: "2026-09-11",
      absUrl: "https://arxiv.org/abs/2609.12345v1", pdfUrl: "https://arxiv.org/pdf/2609.12345v1", sourceCategories: ["cs.AI"],
      screening: { decision: "download", reason: "标题表明研究工具智能体。" },
    }],
  };
  atomicJson(paths.list, list);
  const editorialInput = [{
    arxivId: "2609.12345", decision: "keep", tags: ["agent"], direction: "Agent系统与工具使用",
    authorsOrg: "Ada Lovelace · Analytical Engine Lab", codeUrl: "https://example.com/code", summary: "Summary", critique: "Critique",
    method: "Method", innovation: "Innovation", training: "Training", results: "Results", recommendation: "Recommended",
    score: { novelty: 2, impact: 2, evidence: 2, audienceFit: 2, total: 99 },
  }];
  const input = join(config.root, "editorial-input.json");
  atomicJson(input, editorialInput);
  commitEditorial(paths, input);
  atomicJson(paths.copy, {
    sourceDate: "20260911", intro: "本期共筛出一篇值得关注的工具智能体论文。", papers: [{
      arxivId: "2609.12345", title: "工具智能体", summary: "研究工具智能体的可靠执行问题。", critique: "问题明确，但仍需更多真实任务验证。",
      method: "构建带状态检查的工具调用系统。", innovation: "把执行验证纳入智能体闭环。", training: "不训练基座模型，使用公开任务做推理评测。",
      results: "在公开任务上优于所列基线。", recommendation: "适合关注工具调用可靠性的读者。",
    }],
  });
  const png = Buffer.alloc(24);
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]).copy(png, 0);
  png.write("IHDR", 12, "ascii");
  png.writeUInt32BE(2100, 16);
  png.writeUInt32BE(900, 20);
  writeFileSync(paths.cover, png);
  validateCover(paths);
  return paths;
}

describe("date selection", () => {
  test("workflow reports missing work without creating readiness files", () => {
    const { config } = fixture();
    const paths = pathsFor(config, "20260911");
    const result = workflowStatus(config, paths);
    expect(result.complete).toBe(false);
    expect(result.nextAction).toBe("papers crawl");
    expect(existsSync(paths.workDir)).toBe(false);
  });

  test("workflow requires validation, stays read-only and detects changed articles", () => {
    const { config } = fixture();
    const paths = prepareDay(config);
    mkdirSync(paths.pdfDir, { recursive: true });
    mkdirSync(paths.markdownDir, { recursive: true });
    writeFileSync(join(paths.pdfDir, "2609.12345.pdf"), "%PDF-1.4\n" + "x".repeat(200));
    writeFileSync(join(paths.markdownDir, "2609.12345.md"), "paper body ".repeat(20));
    const edition = buildEdition(config, paths);
    edition.measuredAt = new Date().toISOString();
    for (const article of edition.articles) article.renderedCharacters = 100;
    atomicJson(paths.pendingEdition, edition);
    expect(workflowStatus(config, paths).complete).toBe(false);
    expect(existsSync(paths.edition)).toBe(false);
    validateEdition(config, paths);
    expect(workflowStatus(config, paths).complete).toBe(true);
    writeFileSync(join(paths.workDir, edition.articles[0].path), "changed");
    expect(workflowStatus(config, paths).complete).toBe(false);
  });
  test("accepts slash-separated dates", () => {
    expect(dayKey("2006/09/01")).toBe("20060901");
  });

  test("uses startDate without publication history and advances weekdays", () => {
    const { config } = fixture();
    expect(resolveTargetDate(config)).toBe("20260907");
    expect(nextWeekday("20260911")).toBe("20260914");
  });

  test("uses latest draft sourceDate instead of draft creation time", () => {
    const { config } = fixture();
    const archive = join(config.publicationRepository, "20260908", "media-1");
    mkdirSync(archive, { recursive: true });
    atomicJson(join(archive, "receipt.json"), { status: "draft_created", sourceDate: "20260908", draftCreatedAt: "2026-09-11T12:00:00Z" });
    expect(resolveTargetDate(config)).toBe("20260909");
  });

  test("the crawler rejects a future exact date with a typed status", async () => {
    const { config } = fixture();
    await expect(crawl(config, pathsFor(config, "29990101"))).rejects.toMatchObject({ status: "not_released" });
  });
});

test("parses one date block and preserves the real versioned PDF URL", () => {
  const html = `<h3>Fri, 11 Sep 2026 (2 papers)</h3><dl><dt><a href="/abs/2609.12345v2">arXiv:2609.12345</a><a href="/pdf/2609.12345v2">pdf</a></dt><dd><div class="list-title mathjax">Title: Tool Agent</div><div class="list-authors">Authors: <a>Ada</a></div><div class="list-subjects">Subjects: Artificial Intelligence (cs.AI)</div><div class="list-abstract mathjax">Abstract: Uses tools.</div></dd></dl>`;
  const parsed = parseArxivPage(html, "cs.AI", "Fri, 11 Sep 2026", "20260911");
  expect(parsed.hasHeading).toBe(true);
  expect(parsed.papers[0]).toMatchObject({ arxivId: "2609.12345", version: 2, pdfUrl: "https://arxiv.org/pdf/2609.12345v2" });
});

test("parses only new submissions from an exact catchup batch", () => {
  const entry = (id: string, title: string) => `<dt><a href="/abs/${id}">arXiv</a><a href="/pdf/${id}">pdf</a></dt><dd><div class="list-title">Title: ${title}</div><div class="list-authors"><a>Ada</a></div><div class="list-subjects">Subjects: Artificial Intelligence (cs.AI)</div><div class="list-abstract">Abstract: Research.</div></dd>`;
  const html = `<h1>Catchup results for Artificial Intelligence on Tue, 01 Sep 2026</h1><dl id="articles"><h3>New submissions</h3>${entry("2608.00001", "New")}</dl><dl id="articles"><h3>Cross submissions</h3>${entry("cs/0609111", "Cross-list")}</dl><dl id="articles"><h3>Replacement submissions</h3>${entry("2608.00002v2", "Replacement")}</dl>`;
  const parsed = parseCatchupPage(html, "cs.AI", "20260901");
  expect(parsed.hasDate).toBe(true);
  expect(parsed.papers.map((paper) => paper.arxivId)).toEqual(["2608.00001"]);
  expect(paperFileStem("cs/0609111")).toBe("cs__0609111");
});

test("screening writes every decision and gates downloads", async () => {
  const { config } = fixture();
  const paths = pathsFor(config, "20260911");
  mkdirSync(paths.paperDir, { recursive: true });
  atomicJson(paths.list, {
    schemaVersion: 1, sourceDate: "20260911", arxivHeading: arxivHeading("20260911"), categories: config.categories,
    crawledAt: "2026-09-11T00:00:00Z", papers: [
      { arxivId: "2609.00001", version: 1, versionedId: "2609.00001v1", title: "Agent Paper", authors: [], abstract: "", categories: ["cs.AI"], primaryCategory: "cs.AI", comments: "", published: "2026-09-11", updated: "2026-09-11", absUrl: "", pdfUrl: "", sourceCategories: ["cs.AI"] },
      { arxivId: "2609.00002", version: 1, versionedId: "2609.00002v1", title: "Vision Paper", authors: [], abstract: "", categories: ["cs.AI"], primaryCategory: "cs.AI", comments: "", published: "2026-09-11", updated: "2026-09-11", absUrl: "", pdfUrl: "", sourceCategories: ["cs.AI"] },
    ],
  } satisfies PaperList);
  await expect(downloadAll(config, paths)).rejects.toThrow("Screening input is incomplete");
  const input = join(config.root, "screening.json");
  atomicJson(input, [
    { arxivId: "2609.00001", decision: "download", reason: "标题直接指向 Agent。" },
    { arxivId: "2609.00002", decision: "skip", reason: "标题显示为纯视觉任务。" },
  ]);
  const list = commitScreening(paths, input);
  expect(validateScreening(list)).toMatchObject({ valid: true, total: 2, download: 1, skipped: 1 });
  expect(list.papers[1].screening).toEqual({ decision: "skip", reason: "标题显示为纯视觉任务。" });
});

test("PDF download resumes a .part file and promotes only the complete length", async () => {
  const { config } = fixture();
  const paths = pathsFor(config, "20260911");
  mkdirSync(paths.pdfDir, { recursive: true });
  const bytes = Buffer.from(`%PDF-1.7\n${"paper body ".repeat(40)}\n%%EOF`);
  const partial = 37;
  writeFileSync(join(paths.pdfDir, "2609.12345.pdf.part"), bytes.subarray(0, partial));
  let range = "";
  const server = Bun.serve({ port: 0, fetch(request) {
    range = request.headers.get("range") ?? "";
    const start = Number(range.match(/bytes=(\d+)-/)?.[1] ?? 0);
    const body = bytes.subarray(start);
    return new Response(body, { status: start ? 206 : 200, headers: { "Content-Length": String(body.length), "Content-Range": `bytes ${start}-${bytes.length - 1}/${bytes.length}` } });
  } });
  try {
    await downloadPaper(config, paths, {
      arxivId: "2609.12345", version: 1, versionedId: "2609.12345v1", title: "Paper", authors: [], abstract: "", categories: ["cs.AI"],
      primaryCategory: "cs.AI", comments: "", published: "2026-09-11", updated: "2026-09-11", absUrl: "", pdfUrl: `${server.url}paper.pdf`, sourceCategories: ["cs.AI"],
    });
    expect(range).toBe(`bytes=${partial}-`);
    expect(readFileSync(join(paths.pdfDir, "2609.12345.pdf"))).toEqual(bytes);
    expect(existsSync(join(paths.pdfDir, "2609.12345.pdf.version"))).toBe(false);
    expect(existsSync(join(paths.pdfDir, "2609.12345.pdf.length"))).toBe(false);
  } finally { server.stop(true); }
});

test("editorial commit recalculates score and requires full list coverage", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const editorial = JSON.parse(readFileSync(paths.editorial, "utf8"));
  expect(editorial.papers[0].score.total).toBe(8);
  expect(validateEditorial(paths)).toMatchObject({ valid: true, total: 1, kept: 1, featured: 1 });
});

test("cover brief delegates generation to imagegen and validates 21:9 output", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  expect(prepareCover(paths)).toMatchObject({ generatorSkill: "$imagegen", aspectRatio: "21:9", outputPath: paths.cover });
  expect(validateCover(paths)).toMatchObject({ format: "png", width: 2100, height: 900 });
});

test("edition is rendered through the real WeChat path before promotion", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const pending = buildEdition(config, paths);
  expect(pending.articles.map((article) => article.kind)).toEqual(["featured", "overview"]);
  const markdown = readFileSync(join(paths.workDir, pending.articles[0].path), "utf8");
  expect(markdown).toContain("## 📋 本期总览");
  expect(markdown).toContain("| 方向 | 序号 | 论文 | 评分 | 关键词 |");
  expect(markdown).toContain("## 🧾 精选规则");
  expect(markdown).toContain("### [1] 工具智能体");
  expect(markdown).toContain("> **原标题：** Tool Agent");
  expect(markdown).toContain("**📊 结果与证据**");
  expect(markdown).toContain("**🧐 编辑点评**");
  expect(() => validateEdition(config, paths)).toThrow("has not been measured");
  const measured = measureEdition(paths, join(import.meta.dir, "..", "..", "baoyu-post-to-wechat"));
  expect(measured.articles.every((article) => Number(article.renderedCharacters) > 0)).toBe(true);
  expect(validateEdition(config, paths)).toMatchObject({ valid: true, articleCount: 2 });
});

test("featured selection is selective, score ordered, and capped at four", () => {
  const items = Array.from({ length: 35 }, (_, index): EditorialItem => ({
    arxivId: `2609.0000${index}`, decision: "keep", tags: ["agent"], direction: "Agent系统与工具使用",
    score: { novelty: 0, impact: 0, evidence: 0, audienceFit: 0, total: 40 - index },
  }));
  expect(selectFeatured(items)).toHaveLength(4);
  expect(selectFeatured(items).map((item) => item.score?.total)).toEqual([40, 39, 38, 37]);
});

test("publication selection takes the score-ordered top fifty", () => {
  const items = Array.from({ length: 55 }, (_, index): EditorialItem => ({
    arxivId: `2609.${String(index).padStart(5, "0")}`, decision: "keep", tags: ["agent"], direction: "Agent系统与工具使用",
    score: { novelty: 0, impact: 0, evidence: 0, audienceFit: 0, total: 55 - index },
  }));
  expect(selectForPublication(items, 50)).toHaveLength(50);
  expect(selectForPublication(items, 50).at(-1)?.score?.total).toBe(6);
});

test("unknown WeChat limits fail closed", () => {
  const { config } = fixture(false);
  const paths = prepareDay(config);
  buildEdition(config, paths);
  expect(() => validateEdition(config, paths)).toThrow("hard limits are not configured");
});

test("a known externally-created draft can be adopted only after edition validation", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  buildEdition(config, paths);
  measureEdition(paths, join(import.meta.dir, "..", "..", "baoyu-post-to-wechat"));
  const result = adoptPublishedDraft(config, paths, "draft-media-id");
  expect(result).toMatchObject({ status: "archived", mediaId: "draft-media-id" });
  expect(existsSync(join(config.publicationRepository, "20260911", "draft-media-id", "receipt.json"))).toBe(true);
  expect(() => adoptPublishedDraft(config, paths, "another-id")).toThrow("already exists");
});

test("publication archives keep multiple drafts from the same source date", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  buildEdition(config, paths);
  measureEdition(paths, join(import.meta.dir, "..", "..", "baoyu-post-to-wechat"));
  validateEdition(config, paths);
  const first = { schemaVersion: 1 as const, sourceDate: "20260911", fingerprint: "first", status: "draft_created" as const, startedAt: "2026-09-11T00:00:00Z", updatedAt: "2026-09-11T00:00:00Z", mediaId: "draft-one" };
  const second = { ...first, fingerprint: "second", mediaId: "draft-two" };
  archivePublication(config, paths, first);
  archivePublication(config, paths, second);
  expect(existsSync(join(config.publicationRepository, "20260911", "draft-one", "receipt.json"))).toBe(true);
  expect(existsSync(join(config.publicationRepository, "20260911", "draft-two", "receipt.json"))).toBe(true);
});
