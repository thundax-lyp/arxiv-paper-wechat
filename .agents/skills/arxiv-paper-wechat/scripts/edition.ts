import { existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { basename, dirname, join, relative, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import { AppConfig, DayPaths, atomicJson, atomicWrite, displayDay, readJson, sha256 } from "./core";
import { DIRECTIONS, EditorialDocument, EditorialItem } from "./editorial";
import { Paper, PaperList } from "./papers";
import { requireValidatedCover } from "./cover";

export interface CopyItem {
  arxivId: string;
  title: string;
  summary: string;
  critique: string;
  method: string;
  innovation: string;
  training: string;
  results: string;
  recommendation: string;
}

export interface CopyDocument {
  sourceDate: string;
  intro?: string;
  papers: CopyItem[];
}

export interface EditionArticle {
  order: number;
  kind: "featured" | "overview";
  title: string;
  path: string;
  paperIds: string[];
  sha256: string;
  renderedCharacters?: number;
}

export interface EditionDocument {
  schemaVersion: 1;
  sourceDate: string;
  builtAt: string;
  copyPath: string;
  coverPath: string;
  coverSha256: string;
  articles: EditionArticle[];
  fingerprint: string;
  measuredAt?: string;
}

function requireText(value: unknown, name: string): string {
  if (typeof value !== "string" || !value.trim()) throw new Error(`${name} is required`);
  const text = value.trim();
  if (/^(待补充|tbd|todo|n\/?a|unknown)$/i.test(text)) throw new Error(`${name} must not be a placeholder`);
  return text;
}

export function loadCopy(paths: DayPaths, kept: EditorialItem[]): CopyDocument {
  if (!existsSync(paths.copy)) throw new Error(`Publication copy not found: ${paths.copy}`);
  const copy = readJson<CopyDocument>(paths.copy);
  if (copy.sourceDate.replaceAll("-", "") !== paths.key) throw new Error("copy.json sourceDate does not match target date");
  copy.intro = requireText(copy.intro, "copy.json intro");
  if (!Array.isArray(copy.papers)) throw new Error("copy.json papers must be an array");
  const expected = new Set(kept.map((paper) => paper.arxivId));
  const seen = new Set<string>();
  for (const item of copy.papers) {
    item.arxivId = String(item.arxivId ?? "").replace(/v\d+$/, "");
    if (!expected.has(item.arxivId)) throw new Error(`copy.json contains non-kept paper: ${item.arxivId}`);
    if (seen.has(item.arxivId)) throw new Error(`copy.json duplicates paper: ${item.arxivId}`);
    seen.add(item.arxivId);
    item.title = requireText(item.title, `${item.arxivId}.title`);
    for (const field of ["summary", "critique", "method", "innovation", "training", "results", "recommendation"] as const) {
      item[field] = requireText(item[field], `${item.arxivId}.${field}`);
    }
  }
  const missing = [...expected].filter((id) => !seen.has(id));
  if (missing.length) throw new Error(`copy.json is missing kept papers: ${missing.join(", ")}`);
  return copy;
}

function yaml(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"').replaceAll("\n", " ").trim();
}

function table(value: string): string {
  return value.replaceAll("|", "\\|").replaceAll("\n", " ").trim();
}

function directionLabel(direction: string): string {
  const labels: Record<string, string> = {
    "Agent系统与工具使用": "🧭 Agent 系统 / 工具使用",
    "LLM推理与规划": "🧠 LLM 推理 / 规划",
    "RAG与知识检索": "📚 RAG / 知识检索",
    "多智能体与协作": "🤝 多智能体 / 协作",
    "LLM训练与对齐": "⚙️ LLM 训练 / 对齐",
    "评测与安全": "🛡️ 评测 / 安全",
    "应用与基准": "🧪 应用 / Benchmark",
    "其他 Agent / LLM 方向": "🔎 其他 Agent / LLM 方向",
  };
  return labels[direction] ?? `🔎 ${direction}`;
}

function articleMarkdown(
  title: string,
  intro: string,
  kind: "featured" | "overview",
  blocks: Array<{ paper: Paper; editorial: EditorialItem; copy: CopyItem }>,
): string {
  const summary = `${title}：收录 ${blocks.length} 篇，覆盖 ${[...new Set(blocks.map(({ editorial }) => editorial.direction))].join("、")}。`;
  const groupIndexes = new Map<string, number>();
  const overviewRows = blocks.map(({ editorial, copy }) => {
    const direction = editorial.direction ?? "其他 Agent / LLM 方向";
    const sequence = (groupIndexes.get(direction) ?? 0) + 1;
    groupIndexes.set(direction, sequence);
    return `| ${table(direction)} | ${sequence} | ${table(copy.title)} | ⭐ ${editorial.score?.total ?? 0}/10 | ${table(editorial.tags.slice(0, 4).join("、"))} |`;
  });
  const sections: string[] = [];
  let previousDirection = "";
  blocks.forEach(({ paper, editorial, copy }, index) => {
    const direction = editorial.direction ?? "其他 Agent / LLM 方向";
    if (direction !== previousDirection) {
      sections.push(`## ${directionLabel(direction)}`);
      previousDirection = direction;
    }
    const links = [`[arXiv 原文](${paper.absUrl})`, `[PDF](${paper.pdfUrl})`];
    if (editorial.codeUrl) links.push(`[代码](${editorial.codeUrl})`);
    sections.push(`### [${index + 1}] ${copy.title}\n\n> **原标题：** ${paper.title}\n\n- **评分：** ${editorial.score?.total ?? 0}/10\n- **作者/机构：** ${editorial.authorsOrg}\n- **关键词：** ${editorial.tags.join("、")}\n\n**📌 研究问题与结论**  \n${copy.summary}\n\n**🔧 方法与系统**  \n${copy.method}\n\n**💡 核心创新**  \n${copy.innovation}\n\n**🏋️ 训练与数据**  \n${copy.training}\n\n**📊 结果与证据**  \n${copy.results}\n\n**🧐 编辑点评**  \n${copy.critique}\n\n**⭐ 为什么值得读**  \n${copy.recommendation}\n\n${links.join(" · ")}`);
  });
  const opening = kind === "featured"
    ? "本篇只收录评分不低于 7 分的当日强稿，最多 4 篇；高分稿不足时宁缺毋滥。"
    : "本篇覆盖筛选后保留的全部论文，便于系统扫稿与后续检索。";
  const rubric = kind === "featured"
    ? "\n\n## 🧾 精选规则\n\n按固定口径评估新意（0–3）、影响力（0–3）、证据强度（0–2）和受众匹配度（0–2）；总分达到 7 才有资格进入精选。"
    : "";
  return `---\ntitle: "${yaml(title)}"\nauthor: "Thundax"\nsummary: "${yaml(summary)}"\ndescription: "${yaml(summary)}"\n---\n\n# 📡 ${title}\n\n> 数据源：arXiv \`cs.AI\` / \`cs.CL\` / \`cs.MA\` 当日新投稿  \n> 范围：Agent / LLM / 多智能体相关研究\n\n## 📋 本期总览\n\n${intro}\n\n${opening}\n\n| 方向 | 序号 | 论文 | 评分 | 关键词 |\n|---|---:|---|---|---|\n${overviewRows.join("\n")}${rubric}\n\n${sections.join("\n\n---\n\n")}\n`;
}

function estimate(block: CopyItem): number {
  return block.title.length + block.summary.length + block.critique.length + block.method.length
    + block.innovation.length + block.training.length + block.results.length + block.recommendation.length + 520;
}

function chunkByBudget(items: CopyItem[], budget: number): CopyItem[][] {
  const chunks: CopyItem[][] = [];
  let current: CopyItem[] = [];
  let size = 0;
  for (const item of items) {
    const itemSize = estimate(item);
    if (current.length && size + itemSize > budget) {
      chunks.push(current);
      current = [];
      size = 0;
    }
    current.push(item);
    size += itemSize;
  }
  if (current.length) chunks.push(current);
  return chunks;
}

export function buildEdition(config: AppConfig, paths: DayPaths, coverPath?: string): EditionDocument {
  const list = readJson<PaperList>(paths.list);
  const editorial = readJson<EditorialDocument>(paths.editorial);
  const kept = editorial.papers.filter((paper) => paper.decision === "keep").sort((a, b) => {
    const direction = DIRECTIONS.indexOf(a.direction!) - DIRECTIONS.indexOf(b.direction!);
    const score = (b.score?.total ?? 0) - (a.score?.total ?? 0);
    return direction || score || a.arxivId.localeCompare(b.arxivId);
  });
  if (!kept.length) throw new Error("There are no kept papers to publish");
  const copy = loadCopy(paths, kept);
  const paperById = new Map(list.papers.map((paper) => [paper.arxivId, paper]));
  const editById = new Map(kept.map((paper) => [paper.arxivId, paper]));
  const copyById = new Map(copy.papers.map((paper) => [paper.arxivId, paper]));
  const orderedCopy = kept.map((paper) => copyById.get(paper.arxivId)!);
  const featured = selectFeatured(kept);
  const featuredIds = new Set(featured.map((paper) => paper.arxivId));
  const featuredCopy = kept.filter((paper) => featuredIds.has(paper.arxivId)).map((paper) => copyById.get(paper.arxivId)!);
  const target = config.wechat.targetRenderedCharacters ?? Number.MAX_SAFE_INTEGER;
  const articleSpecs: Array<{ kind: "featured" | "overview"; title: string; items: CopyItem[] }> = [];
  if (featuredCopy.length) articleSpecs.push({ kind: "featured", title: `arXiv Agent 与大模型研究简报｜${displayDay(paths.key)}｜精选`, items: featuredCopy });
  const overviewChunks = chunkByBudget(orderedCopy, target);
  overviewChunks.forEach((items, index) => articleSpecs.push({
    kind: "overview",
    title: `arXiv Agent 与大模型研究简报｜${displayDay(paths.key)}｜论文全览${overviewChunks.length > 1 ? ` ${index + 1}/${overviewChunks.length}` : ""}`,
    items,
  }));
  const selectedCover = resolve(coverPath ?? join(paths.workDir, "cover.png"));
  const coverReceipt = requireValidatedCover(paths, selectedCover);
  const coverSha256 = coverReceipt.sha256;
  const articlesDir = join(paths.workDir, "articles");
  rmSync(articlesDir, { recursive: true, force: true });
  mkdirSync(articlesDir, { recursive: true });
  const articles = articleSpecs.map((spec, index): EditionArticle => {
    const blocks = spec.items.map((item) => ({ paper: paperById.get(item.arxivId)!, editorial: editById.get(item.arxivId)!, copy: item }));
    const markdown = articleMarkdown(spec.title, copy.intro!, spec.kind, blocks);
    const path = join(articlesDir, `${String(index + 1).padStart(2, "0")}-${spec.kind}.md`);
    atomicWrite(path, markdown);
    return { order: index + 1, kind: spec.kind, title: spec.title, path: relative(paths.workDir, path), paperIds: spec.items.map((item) => item.arxivId), sha256: sha256(markdown) };
  });
  const fingerprint = sha256(JSON.stringify({ sourceDate: paths.key, coverPath: selectedCover, coverSha256, articles: articles.map(({ title, paperIds, sha256 }) => ({ title, paperIds, sha256 })) }));
  const edition: EditionDocument = {
    schemaVersion: 1,
    sourceDate: paths.key,
    builtAt: new Date().toISOString(),
    copyPath: relative(paths.workDir, paths.copy),
    coverPath: relative(paths.workDir, selectedCover),
    coverSha256,
    articles,
    fingerprint,
  };
  atomicJson(paths.pendingEdition, edition);
  if (existsSync(paths.edition)) rmSync(paths.edition);
  return edition;
}

export function selectFeatured(items: EditorialItem[]): EditorialItem[] {
  return items.filter((paper) => (paper.score?.total ?? 0) >= 7).sort((a, b) => {
    const score = (b.score?.total ?? 0) - (a.score?.total ?? 0);
    return score || a.arxivId.localeCompare(b.arxivId);
  }).slice(0, 4);
}

function extractRenderedContent(html: string): string {
  return html.match(/<div id="output">([\s\S]*?)<\/div>\s*<\/body>/i)?.[1]
    ?? html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1]
    ?? html;
}

export function measureEdition(paths: DayPaths, wechatSkillDir: string): EditionDocument {
  const edition = readJson<EditionDocument>(paths.pendingEdition);
  const renderer = join(resolve(wechatSkillDir), "scripts", "md-to-wechat.ts");
  if (!existsSync(renderer)) throw new Error(`WeChat Markdown renderer not found: ${renderer}`);
  for (const article of edition.articles) {
    const markdownPath = resolve(paths.workDir, article.path);
    const markdown = readFileSync(markdownPath, "utf8");
    if (sha256(markdown) !== article.sha256) throw new Error(`Article changed after build: ${article.path}`);
    // The CLI itself runs under Bun. Reuse that executable instead of asking npx
    // to resolve Bun on every article render (which makes offline runs flaky).
    const result = spawnSync(process.execPath, [renderer, markdownPath], { encoding: "utf8", cwd: dirname(markdownPath) });
    if (result.status !== 0) throw new Error(`Failed to render ${basename(markdownPath)}: ${result.stderr.trim()}`);
    const rendered = JSON.parse(result.stdout) as { htmlPath: string };
    const html = extractRenderedContent(readFileSync(rendered.htmlPath, "utf8"));
    article.renderedCharacters = html.length;
  }
  edition.measuredAt = new Date().toISOString();
  atomicJson(paths.pendingEdition, edition);
  return edition;
}

export function validateEdition(config: AppConfig, paths: DayPaths, persist = true): { valid: true; articleCount: number; maxRenderedCharacters: number; edition: EditionDocument } {
  const hard = config.wechat.maxRenderedCharacters;
  const maxArticles = config.wechat.maxArticlesPerEdition;
  if (hard === null || maxArticles === null) throw new Error("WeChat hard limits are not configured; measure them before validation or publishing");
  const edition = readJson<EditionDocument>(paths.pendingEdition);
  if (edition.sourceDate !== paths.key) throw new Error("Edition sourceDate does not match target date");
  if (edition.articles.length > maxArticles) throw new Error(`Edition has ${edition.articles.length} articles; hard limit is ${maxArticles}`);
  const editorial = readJson<EditorialDocument>(paths.editorial);
  const keptItems = editorial.papers.filter((paper) => paper.decision === "keep");
  const kept = keptItems.map((paper) => paper.arxivId).sort();
  const overview = edition.articles.filter((article) => article.kind === "overview").flatMap((article) => article.paperIds).sort();
  if (JSON.stringify(overview) !== JSON.stringify(kept)) throw new Error("Overview articles do not cover every kept paper exactly once");
  const expectedFeatured = selectFeatured(keptItems).map((paper) => paper.arxivId).sort();
  const actualFeatured = edition.articles.filter((article) => article.kind === "featured").flatMap((article) => article.paperIds).sort();
  if (JSON.stringify(actualFeatured) !== JSON.stringify(expectedFeatured)) throw new Error("Featured article does not match the top four qualifying papers");
  for (const article of edition.articles) {
    const path = resolve(paths.workDir, article.path);
    if (!existsSync(path)) throw new Error(`Article file is missing: ${path}`);
    if (sha256(readFileSync(path)) !== article.sha256) throw new Error(`Article changed after measurement: ${article.path}`);
    if (article.renderedCharacters === undefined) throw new Error(`Article has not been measured: ${article.path}`);
    if (article.renderedCharacters > hard) throw new Error(`${article.title} renders to ${article.renderedCharacters} characters; hard limit is ${hard}`);
  }
  const coverPath = resolve(paths.workDir, edition.coverPath);
  if (!existsSync(coverPath) || sha256(readFileSync(coverPath)) !== edition.coverSha256) throw new Error("Cover changed after build; rebuild the edition");
  const expectedFingerprint = sha256(JSON.stringify({ sourceDate: paths.key, coverPath, coverSha256: edition.coverSha256, articles: edition.articles.map(({ title, paperIds, sha256 }) => ({ title, paperIds, sha256 })) }));
  if (expectedFingerprint !== edition.fingerprint) throw new Error("Edition fingerprint mismatch; rebuild the edition");
  if (persist) atomicJson(paths.edition, edition);
  return { valid: true, articleCount: edition.articles.length, maxRenderedCharacters: Math.max(...edition.articles.map((article) => article.renderedCharacters ?? 0)), edition };
}

export function publisherManifest(paths: DayPaths, edition: EditionDocument): string {
  const manifestPath = join(paths.workDir, "wechat-manifest.json");
  atomicJson(manifestPath, { sourceDate: paths.key, articles: edition.articles.map((article) => ({ title: article.title, path: article.path })) });
  return manifestPath;
}
