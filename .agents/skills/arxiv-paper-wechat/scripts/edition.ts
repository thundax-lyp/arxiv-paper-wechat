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
  recommendationLevel: 1 | 2 | 3;
  overview: string;
  featured?: string;
  featuredProblem?: string;
  featuredConclusion?: string;
  featuredInnovation?: string;
  featuredCommentary?: string;
  featuredWhyRead?: string;
  codeLinkReason?: string;
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

export function loadCopy(paths: DayPaths, kept: EditorialItem[], selected: EditorialItem[] = kept): CopyDocument {
  if (!existsSync(paths.copy)) throw new Error(`Publication copy not found: ${paths.copy}`);
  const copy = readJson<CopyDocument>(paths.copy);
  if (copy.sourceDate.replaceAll("-", "") !== paths.key) throw new Error("copy.json sourceDate does not match target date");
  copy.intro = requireText(copy.intro, "copy.json intro");
  if (!Array.isArray(copy.papers)) throw new Error("copy.json papers must be an array");
  const expected = new Set(kept.map((paper) => paper.arxivId));
  const featuredIds = new Set(selectFeatured(selected).map((paper) => paper.arxivId));
  const seen = new Set<string>();
  for (const item of copy.papers) {
    item.arxivId = String(item.arxivId ?? "").replace(/v\d+$/, "");
    if (!expected.has(item.arxivId)) throw new Error(`copy.json contains non-kept paper: ${item.arxivId}`);
    if (seen.has(item.arxivId)) throw new Error(`copy.json duplicates paper: ${item.arxivId}`);
    seen.add(item.arxivId);
    item.title = requireText(item.title, `${item.arxivId}.title`);
    if (/[\r\n\[\]<>]/.test(item.title)) throw new Error(`${item.arxivId}.title must be plain text`);
    if (![1, 2, 3].includes(item.recommendationLevel)) throw new Error(`${item.arxivId}.recommendationLevel must be 1, 2, or 3`);
    item.overview = requireText(item.overview, `${item.arxivId}.overview`);
    if (featuredIds.has(item.arxivId) || item.featured !== undefined) {
      item.featured = requireText(item.featured, `${item.arxivId}.featured`);
      if (item.featured.replace(/\s/g, "") === item.overview.replace(/\s/g, "")) {
        throw new Error(`${item.arxivId}.featured must be independently written`);
      }
      item.featuredProblem = requireText(item.featuredProblem, `${item.arxivId}.featuredProblem`);
      item.featuredConclusion = requireText(item.featuredConclusion, `${item.arxivId}.featuredConclusion`);
      item.featuredInnovation = requireText(item.featuredInnovation, `${item.arxivId}.featuredInnovation`);
      item.featuredCommentary = requireText(item.featuredCommentary, `${item.arxivId}.featuredCommentary`);
      item.featuredWhyRead = requireText(item.featuredWhyRead, `${item.arxivId}.featuredWhyRead`);
    }
    if (item.codeLinkReason !== undefined) {
      item.codeLinkReason = requireText(item.codeLinkReason, `${item.arxivId}.codeLinkReason`);
      if (!kept.find((paper) => paper.arxivId === item.arxivId)?.codeUrl) {
        throw new Error(`${item.arxivId}.codeLinkReason requires a verified editorial codeUrl`);
      }
    }
  }
  const missing = [...expected].filter((id) => !seen.has(id));
  if (missing.length) throw new Error(`copy.json is missing kept papers: ${missing.join(", ")}`);
  return copy;
}

function yaml(value: string): string {
  return value.replaceAll("\\", "\\\\").replaceAll('"', '\\"').replaceAll("\n", " ").trim();
}

function plainMarkdown(value: string): string {
  return value.replace(/\s+/g, " ").replace(/([\\`*_{}\[\]()#+.!<>|&])/g, "\\$1");
}

function articleMarkdown(
  title: string,
  intro: string,
  kind: "featured" | "overview",
  blocks: Array<{ paper: Paper; editorial: EditorialItem; copy: CopyItem }>,
  showLegend: boolean,
): string {
  const sections: string[] = [];
  let previousDirection = "";
  for (const { paper, editorial, copy } of blocks) {
    const direction = editorial.direction ?? "其他 Agent / LLM 方向";
    if (direction !== previousDirection) {
      sections.push(`## ${direction}`);
      previousDirection = direction;
    }
    const links = [`[阅读论文 PDF](${paper.pdfUrl})`];
    if (copy.codeLinkReason && editorial.codeUrl) links.push(`[代码](${editorial.codeUrl})`);
    const prose = kind === "featured"
      ? `**问题**：${copy.featuredProblem}\n\n**结论**：${copy.featuredConclusion}\n\n**新意**：${copy.featuredInnovation}\n\n${copy.featured}\n\n**编辑点评**：${copy.featuredCommentary}\n\n**为什么值得读**：${copy.featuredWhyRead}`
      : copy.overview;
    sections.push(`### ${copy.title}\n\n${plainMarkdown(requireText(paper.title, `${paper.arxivId}.originalTitle`))}\n\n${"🌟".repeat(copy.recommendationLevel)}\n\n${prose}\n\n${links.join(" · ")}`);
  }
  const legend = showLegend ? "\n\n阅读推荐：🌟 值得关注；🌟🌟 建议阅读；🌟🌟🌟 优先精读。星标表示本期阅读优先级，不代表研究结论的可靠程度。" : "";
  const scope = kind === "overview" ? "\n\n本期入选论文全览。" : "";
  return `---\ntitle: "${yaml(title)}"\nauthor: "Thundax"\nsummary: "${yaml(intro)}"\ndescription: "${yaml(intro)}"\n---\n\n# ${title}\n\n${intro}${scope}${legend}\n\n${sections.join("\n\n")}\n`;
}

/** Pack whole themes where possible; split only oversized themes between papers. */
function chunkByBudget(items: CopyItem[], budget: number, directions: Map<string, EditorialItem>, papers: Map<string, Paper>): CopyItem[][] {
  const chunks: CopyItem[][] = [];
  let current: CopyItem[] = [];
  let size = 0;
  const estimate = (item: CopyItem) => item.title.length + item.overview.length + plainMarkdown(papers.get(item.arxivId)?.title ?? "").length + 210;
  const groups: CopyItem[][] = [];
  for (const item of items) {
    const last = groups.at(-1);
    if (last && directions.get(last[0].arxivId)?.direction === directions.get(item.arxivId)?.direction) last.push(item);
    else groups.push([item]);
  }
  const flush = () => { if (current.length) chunks.push(current); current = []; size = 0; };
  for (const group of groups) {
    const groupSize = group.reduce((sum, item) => sum + estimate(item), 0);
    if (current.length && size + groupSize > budget) flush();
    for (const item of group) {
      const itemSize = estimate(item);
      if (current.length && size + itemSize > budget) flush();
      current.push(item);
      size += itemSize;
    }
  }
  flush();
  return chunks;
}

export function buildEdition(config: AppConfig, paths: DayPaths, coverPath?: string): EditionDocument {
  const list = readJson<PaperList>(paths.list);
  const editorial = readJson<EditorialDocument>(paths.editorial);
  const allKept = editorial.papers.filter((paper) => paper.decision === "keep");
  const selectedIds = new Set(selectForPublication(allKept, config.wechat.maxPapersPerEdition).map((paper) => paper.arxivId));
  const kept = allKept.filter((paper) => selectedIds.has(paper.arxivId)).sort((a, b) => {
    const direction = DIRECTIONS.indexOf(a.direction!) - DIRECTIONS.indexOf(b.direction!);
    const score = (b.score?.total ?? 0) - (a.score?.total ?? 0);
    return direction || score || a.arxivId.localeCompare(b.arxivId);
  });
  if (!kept.length) throw new Error("There are no kept papers to publish");
  const copy = loadCopy(paths, allKept, kept);
  const paperById = new Map(list.papers.map((paper) => [paper.arxivId, paper]));
  const editById = new Map(kept.map((paper) => [paper.arxivId, paper]));
  const copyById = new Map(copy.papers.map((paper) => [paper.arxivId, paper]));
  const orderedCopy = kept.map((paper) => copyById.get(paper.arxivId)!);
  const featured = selectFeatured(kept);
  const featuredIds = new Set(featured.map((paper) => paper.arxivId));
  const featuredCopy = kept.filter((paper) => featuredIds.has(paper.arxivId)).map((paper) => copyById.get(paper.arxivId)!);
  // The WeChat renderer expands Markdown substantially. Reserve enough room
  // for that expansion, then let `edition measure` make the final decision.
  const hard = config.wechat.maxRenderedCharacters;
  const target = hard === null
    ? (config.wechat.targetRenderedCharacters ?? Number.MAX_SAFE_INTEGER)
    : Math.min(config.wechat.targetRenderedCharacters ?? hard, Math.floor(hard / 6));
  const articleSpecs: Array<{ kind: "featured" | "overview"; title: string; items: CopyItem[] }> = [];
  if (featuredCopy.length) articleSpecs.push({ kind: "featured", title: `arXiv Agent 与大模型研究简报｜${displayDay(paths.key)}｜精选`, items: featuredCopy });
  const overviewChunks = chunkByBudget(orderedCopy, Math.max(1, target - copy.intro!.length - 500), editById, paperById);
  overviewChunks.forEach((items, index) => articleSpecs.push({
    kind: "overview",
    title: `arXiv Agent 与大模型研究简报｜${displayDay(paths.key)}｜入选论文全览${overviewChunks.length > 1 ? ` ${index + 1}/${overviewChunks.length}` : ""}`,
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
    const markdown = articleMarkdown(spec.title, copy.intro!, spec.kind, blocks, index === 0);
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
  }).slice(0, 6);
}

export function selectForPublication(items: EditorialItem[], limit: number | null): EditorialItem[] {
  const ordered = [...items].sort((a, b) => {
    const score = (b.score?.total ?? 0) - (a.score?.total ?? 0);
    return score || a.arxivId.localeCompare(b.arxivId);
  });
  return limit === null ? ordered : ordered.slice(0, limit);
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
    const result = spawnSync(process.execPath, [renderer, markdownPath, "--no-cite"], { encoding: "utf8", cwd: dirname(markdownPath) });
    if (result.status !== 0) throw new Error(`Failed to render ${basename(markdownPath)}: ${result.stderr.trim()}`);
    const rendered = JSON.parse(result.stdout) as { htmlPath: string };
    const document = readFileSync(rendered.htmlPath, "utf8");
    atomicWrite(markdownPath.replace(/\.md$/, ".html"), document);
    const html = extractRenderedContent(document);
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
  const publishedItems = selectForPublication(keptItems, config.wechat.maxPapersPerEdition);
  const kept = publishedItems.map((paper) => paper.arxivId).sort();
  const overview = edition.articles.filter((article) => article.kind === "overview").flatMap((article) => article.paperIds).sort();
  if (JSON.stringify(overview) !== JSON.stringify(kept)) throw new Error("Overview articles do not cover every kept paper exactly once");
  const expectedFeatured = selectFeatured(publishedItems).map((paper) => paper.arxivId).sort();
  const actualFeatured = edition.articles.filter((article) => article.kind === "featured").flatMap((article) => article.paperIds).sort();
  if (JSON.stringify(actualFeatured) !== JSON.stringify(expectedFeatured)) throw new Error("Featured article does not match the top six qualifying papers");
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
