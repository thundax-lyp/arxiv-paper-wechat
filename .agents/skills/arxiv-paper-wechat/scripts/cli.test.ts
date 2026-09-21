import { afterEach, describe, expect, test } from "bun:test";
import { existsSync, mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { AppConfig, arxivHeading, atomicJson, dayKey, nextWeekday, pathsFor, resolveTargetDate } from "./core";
import { commitEditorial, EditorialItem, validateEditorial, validateEditorialInput } from "./editorial";
import { buildEdition, measureEdition, selectFeatured, selectForPublication, validateEdition } from "./edition";
import {
  commitScreening, crawl, downloadAll, downloadPaper, PaperList, paperFileStem, parseArxivPage, parseCatchupPage, validateScreening, validateScreeningInput,
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
      screening: { decision: "download", relevanceRank: 1, reason: "标题表明研究工具智能体。" },
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
    sourceDate: "20260911", intro: "本期关注工具执行后如何检查状态，避免错误继续传播。", papers: [{
      arxivId: "2609.12345", title: "工具执行后如何发现错误",
      recommendationLevel: 3,
      overview: "工具调用成功不代表任务完成。该研究在执行后检查状态，并在发现偏差时修正后续动作。公开任务上的表现优于所列基线，但实验没有覆盖真实用户的长程任务。",
      featuredProblem: "工具返回成功时，智能体仍可能误判任务状态。",
      featuredConclusion: "执行后核对实际状态能在所测公开任务中减少错误延续，但未覆盖真实用户的长程任务。",
      featuredInnovation: "把状态核对纳入执行过程，而非只根据工具返回判断成功。",
      featured: "工具返回成功时，智能体仍可能误判任务状态。研究让系统先执行动作，再比较实际状态和目标，出现偏差时调整下一步。\n\n这种检查把错误处理放回执行过程。公开任务结果支持它在所测场景中的作用，但不能据此推断真实用户的长程任务也会改善；阅读时值得关注状态检查如何定义成功。",
      featuredCommentary: "公开任务结果支持该机制，但尚不足以证明真实长程任务同样改善。",
      featuredWhyRead: "它为工具型智能体提供了可直接采用的执行后状态诊断思路。",
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
      { arxivId: "2609.00001", version: 1, versionedId: "2609.00001v1", title: "Agent Paper", authors: [], abstract: "A tool-using LLM agent method.", categories: ["cs.AI"], primaryCategory: "cs.AI", comments: "", published: "2026-09-11", updated: "2026-09-11", absUrl: "", pdfUrl: "", sourceCategories: ["cs.AI"] },
      { arxivId: "2609.00002", version: 1, versionedId: "2609.00002v1", title: "Vision Paper", authors: [], abstract: "Image segmentation without language models.", categories: ["cs.AI"], primaryCategory: "cs.AI", comments: "", published: "2026-09-11", updated: "2026-09-11", absUrl: "", pdfUrl: "", sourceCategories: ["cs.AI"] },
    ],
  } satisfies PaperList);
  await expect(downloadAll(config, paths)).rejects.toThrow("Screening input is incomplete");
  const input = join(config.root, "screening.json");
  atomicJson(input, [
    { arxivId: "2609.00001", decision: "download", relevanceRank: 1, reason: "标题直接指向 Agent。" },
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
  const copy = JSON.parse(readFileSync(paths.copy, "utf8")).papers[0];
  const overview = readFileSync(join(paths.workDir, pending.articles[1].path), "utf8");
  expect(markdown).toContain(copy.featured);
  for (const label of ["**问题**：", "**结论**：", "**新意**：", "**编辑点评**：", "**为什么值得读**："]) expect(markdown).toContain(label);
  for (const label of ["**问题**：", "**结论**：", "**新意**：", "**编辑点评**：", "**为什么值得读**："]) expect(overview).not.toContain(label);
  const featuredSections = ["**问题**：", "**结论**：", "**新意**：", copy.featured, "**编辑点评**：", "**为什么值得读**："];
  for (let index = 1; index < featuredSections.length; index++) {
    expect(markdown.indexOf(featuredSections[index])).toBeGreaterThan(markdown.indexOf(featuredSections[index - 1]));
  }
  expect(markdown).not.toContain(copy.overview);
  expect(overview).toContain(copy.overview);
  expect(overview).not.toContain(copy.featured);
  for (const article of [markdown, overview]) {
    expect(article).toContain(`### ${copy.title}\n\nTool Agent\n\n🌟🌟🌟`);
    expect(article.trim().endsWith("[阅读论文 PDF](https://arxiv.org/pdf/2609.12345v1)")).toBe(true);
    for (const internal of ["评分", "关键词", "原标题", "Ada Lovelace", "example.com/code", "arxiv.org/abs", "| 方向 |", "### [1]", "精选规则"]) {
      expect(article).not.toContain(internal);
    }
  }
  expect(markdown).toContain("阅读推荐：");
  expect(overview).not.toContain("阅读推荐：");
  expect(() => validateEdition(config, paths)).toThrow("has not been measured");
  const measured = measureEdition(paths, join(import.meta.dir, "..", "..", "baoyu-post-to-wechat"));
  expect(measured.articles.every((article) => Number(article.renderedCharacters) > 0)).toBe(true);
  for (const article of measured.articles) {
    const html = readFileSync(join(paths.workDir, article.path.replace(/\.md$/, ".html")), "utf8");
    expect(html.match(/href="https:\/\/arxiv.org\/pdf\/2609.12345v1"/g)).toHaveLength(1);
    expect(html).not.toContain("<sup>[1]</sup>");
    expect(html).not.toContain("阅读论文 PDF:");
  }
  expect(validateEdition(config, paths)).toMatchObject({ valid: true, articleCount: 2 });
});

test("featured selection is selective, score ordered, and capped at six", () => {
  const items = Array.from({ length: 35 }, (_, index): EditorialItem => ({
    arxivId: `2609.0000${index}`, decision: "keep", tags: ["agent"], direction: "Agent系统与工具使用",
    score: { novelty: 0, impact: 0, evidence: 0, audienceFit: 0, total: 40 - index },
  }));
  expect(selectFeatured(items)).toHaveLength(6);
  expect(selectFeatured(items).map((item) => item.score?.total)).toEqual([40, 39, 38, 37, 36, 35]);
  const boundaryItems: EditorialItem[] = [6, 7, 8, 7].map((total, index) => ({
    arxivId: `2609.${String(index).padStart(5, "0")}`, decision: "keep", tags: ["agent"],
    score: { novelty: 2, impact: total - 5, evidence: 1, audienceFit: 2, total },
  }));
  expect(selectFeatured(boundaryItems.reverse()).map((item) => item.arxivId)).toEqual(["2609.00002", "2609.00001", "2609.00003"]);
  expect(selectFeatured(boundaryItems.filter((item) => item.score!.total < 7))).toEqual([]);
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


test("copy requires independent featured prose and rejects legacy-only copy", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const copy = JSON.parse(readFileSync(paths.copy, "utf8"));
  delete copy.papers[0].featured;
  atomicJson(paths.copy, copy);
  expect(() => buildEdition(config, paths)).toThrow(".featured is required");
  copy.papers[0].featured = copy.papers[0].overview;
  atomicJson(paths.copy, copy);
  expect(() => buildEdition(config, paths)).toThrow("independently written");
  copy.papers[0].featured = "独立撰写的精选解读。";
  for (const field of ["featuredProblem", "featuredConclusion", "featuredInnovation", "featuredCommentary", "featuredWhyRead"]) {
    const original = copy.papers[0][field];
    for (const invalid of [undefined, "   "]) {
      copy.papers[0][field] = invalid;
      atomicJson(paths.copy, copy);
      expect(() => buildEdition(config, paths)).toThrow(`.${field} is required`);
    }
    copy.papers[0][field] = original;
  }
  delete copy.papers[0].overview;
  copy.papers[0].summary = "Legacy summary";
  atomicJson(paths.copy, copy);
  expect(() => buildEdition(config, paths)).toThrow(".overview is required");
});

test("copy keeps English only in the separately rendered original title", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const copy = JSON.parse(readFileSync(paths.copy, "utf8"));
  copy.papers[0].title = "Tool 调用错误";
  atomicJson(paths.copy, copy);
  expect(() => buildEdition(config, paths)).toThrow("title must use complete Chinese prose");
  copy.papers[0].title = "工具调用错误";
  copy.papers[0].overview = "The agent checks state after calling a tool.";
  atomicJson(paths.copy, copy);
  expect(() => buildEdition(config, paths)).toThrow("overview must use complete Chinese prose");
});

test("code link is opt-in and requires an editorial URL", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const copy = JSON.parse(readFileSync(paths.copy, "utf8"));
  copy.papers[0].codeLinkReason = "核心结论依赖仓库中的执行检查实现。";
  atomicJson(paths.copy, copy);
  const edition = buildEdition(config, paths);
  const markdown = readFileSync(join(paths.workDir, edition.articles[0].path), "utf8");
  expect(markdown).toContain("[代码](https://example.com/code)");
  expect(markdown).not.toContain(copy.papers[0].codeLinkReason);
  const editorial = JSON.parse(readFileSync(paths.editorial, "utf8"));
  delete editorial.papers[0].codeUrl;
  atomicJson(paths.editorial, editorial);
  expect(() => buildEdition(config, paths)).toThrow("requires a verified editorial codeUrl");
});

function prepareMany(config: AppConfig, counts: number[]) {
  const paths = prepareDay(config);
  const list = JSON.parse(readFileSync(paths.list, "utf8"));
  const editorial = JSON.parse(readFileSync(paths.editorial, "utf8"));
  const copy = JSON.parse(readFileSync(paths.copy, "utf8"));
  const paper = list.papers[0], edit = editorial.papers[0], prose = copy.papers[0];
  list.papers = []; editorial.papers = []; copy.papers = [];
  const directions = ["Agent系统与工具使用", "LLM推理与规划"];
  counts.forEach((count, group) => {
    for (let i = 0; i < count; i++) {
      const id = `2609.${String(copy.papers.length).padStart(5, "0")}`;
      list.papers.push({ ...paper, arxivId: id, pdfUrl: `https://arxiv.org/pdf/${id}` });
      editorial.papers.push({ ...edit, arxivId: id, direction: directions[group], score: { ...edit.score, total: 6 } });
      copy.papers.push({ ...prose, arxivId: id, title: `论文 ${id}` });
    }
  });
  atomicJson(paths.list, list); atomicJson(paths.editorial, editorial); atomicJson(paths.copy, copy);
  return paths;
}

test("compact overview can hold more than thirty papers without losing link ownership", () => {
  const { config } = fixture();
  config.wechat.maxRenderedCharacters = 100000;
  config.wechat.targetRenderedCharacters = 100000;
  const paths = prepareMany(config, [35]);
  const edition = buildEdition(config, paths);
  expect(edition.articles).toHaveLength(1);
  expect(edition.articles[0].paperIds).toHaveLength(35);
  const markdown = readFileSync(join(paths.workDir, edition.articles[0].path), "utf8");
  const blocks = markdown.split("\n### ").slice(1);
  expect(blocks).toHaveLength(35);
  blocks.forEach((block, i) => {
    expect(block.trim().endsWith(`[阅读论文 PDF](https://arxiv.org/pdf/${edition.articles[0].paperIds[i]})`)).toBe(true);
  });
});

test("budget preserves themes when they fit and splits oversized themes only between papers", () => {
  const { config } = fixture();
  const paths = prepareMany(config, [3, 3]);
  let edition = buildEdition(config, paths);
  expect(edition.articles.map(a => a.paperIds.length)).toEqual([3, 3]);
  config.wechat.targetRenderedCharacters = 1000;
  edition = buildEdition(config, paths);
  expect(edition.articles.length).toBeGreaterThan(2);
  const ids = edition.articles.flatMap(a => a.paperIds);
  expect(ids).toHaveLength(6);
  expect(new Set(ids).size).toBe(6);
});


test("catchup reads abstracts from current mathjax paragraphs", () => {
  const html = `<h1>Catchup results for Artificial Intelligence on Fri, 04 Sep 2026</h1><dl id="articles"><h3>New submissions</h3><dt><a href="/abs/2609.00001">paper</a></dt><dd><div class="meta"><div class="list-title">Title: Agent</div><p class="mathjax">A tool &amp; memory method.</p></div></dd></dl>`;
  expect(parseCatchupPage(html, "cs.AI", "20260904").papers[0].abstract).toBe("A tool & memory method.");
});

test("screening requires abstracts and unique relevance ranks", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const list = JSON.parse(readFileSync(paths.list, "utf8"));
  const input = [{ arxivId: list.papers[0].arxivId, decision: "download", reason: "Tool reliability", relevanceRank: 1 }];
  list.papers[0].abstract = "";
  expect(() => validateScreeningInput(list, input)).toThrow("abstract is missing");
  list.papers[0].abstract = "Tool reliability";
  list.papers.push({ ...list.papers[0], arxivId: "2609.99999" });
  expect(() => validateScreeningInput(list, [...input, { ...input[0], arxivId: "2609.99999" }])).toThrow("unique positive integer");
});

test("download caps successful candidates at sixty and replaces exhausted failures in rank order", async () => {
  const { config } = fixture();
  config.maxRetries = 1;
  const paths = prepareDay(config);
  const list = JSON.parse(readFileSync(paths.list, "utf8"));
  const base = list.papers[0];
  const requested: number[] = [];
  const server = Bun.serve({ port: 0, fetch(request) {
    const rank = Number(new URL(request.url).pathname.slice(1));
    requested.push(rank);
    return rank === 1 ? new Response("missing", { status: 404 }) : new Response("%PDF-1.7\nbody\n%%EOF");
  } });
  try {
    list.papers = Array.from({ length: 62 }, (_, i) => ({ ...base, arxivId: `2609.${String(i).padStart(5, "0")}`, pdfUrl: `${server.url}${i + 1}`, screening: { decision: "download", reason: "Tool reliability", relevanceRank: i + 1 } })).reverse();
    atomicJson(paths.list, list);
    const result = await downloadAll(config, paths, 4);
    expect(result.completed).toBe(60);
    expect(result.replacedFailures).toHaveLength(1);
    expect(requested).toContain(61);
    expect(requested).not.toContain(62);
    const saved = JSON.parse(readFileSync(paths.list, "utf8"));
    expect(saved.papers.find((p: any) => p.screening.relevanceRank === 1).screening.downloadError).toBeTruthy();
    requested.length = 0;
    expect((await downloadAll(config, paths, 4)).skipped).toBe(60);
    expect(requested).toHaveLength(0);
  } finally { server.stop(true); }
});

test("full-text review rejects more than forty retained papers", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const list = JSON.parse(readFileSync(paths.list, "utf8"));
  const base = list.papers[0];
  const edit = JSON.parse(readFileSync(paths.editorial, "utf8")).papers[0];
  list.papers = Array.from({ length: 41 }, (_, i) => ({ ...base, arxivId: `2609.${String(i).padStart(5, "0")}`, screening: { ...base.screening, relevanceRank: i + 1 } }));
  const rows = list.papers.map((p: any) => ({ ...edit, arxivId: p.arxivId }));
  expect(() => validateEditorialInput(list, rows)).toThrow("keep limit is 40");
  rows[40] = { arxivId: rows[40].arxivId, decision: "drop", tags: [], reason: "Lower priority after evidence comparison" };
  expect(validateEditorialInput(list, rows).filter(p => p.decision === "keep")).toHaveLength(40);
});


test("recommendation tiers reject invalid values and render consistently", () => {
  const { config } = fixture();
  const paths = prepareDay(config);
  const copy = JSON.parse(readFileSync(paths.copy, "utf8"));
  for (const level of [undefined, 0, 4, 1.5, "3"]) {
    copy.papers[0].recommendationLevel = level;
    atomicJson(paths.copy, copy);
    expect(() => buildEdition(config, paths)).toThrow("recommendationLevel");
  }
  for (const level of [1, 2, 3]) {
    copy.papers[0].recommendationLevel = level;
    atomicJson(paths.copy, copy);
    const edition = buildEdition(config, paths);
    for (const article of edition.articles) {
      expect(readFileSync(join(paths.workDir, article.path), "utf8")).toContain(`Tool Agent\n\n${"🌟".repeat(level)}\n\n`);
    }
  }
});
