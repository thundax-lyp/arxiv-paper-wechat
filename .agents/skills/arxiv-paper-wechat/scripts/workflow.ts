import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { AppConfig, DayPaths, readJson } from "./core";
import { status, PaperList, validateScreening } from "./papers";
import { EditorialDocument, validateEditorial } from "./editorial";
import { requireValidatedCover } from "./cover";
import { EditionDocument, loadCopy, selectForPublication, validateEdition } from "./edition";

/** Read-only inspection. Missing work is actionable, not permission to stop. */
export function workflowStatus(config: AppConfig, paths: DayPaths) {
  const stages: Array<{ stage: string; complete: boolean; nextAction: string; error?: string }> = [];
  const check = (stage: string, nextAction: string, inspect: () => void) => {
    try { inspect(); stages.push({ stage, complete: true, nextAction }); }
    catch (error) { stages.push({ stage, complete: false, nextAction, error: error instanceof Error ? error.message : String(error) }); }
  };
  const require = (condition: unknown, message: string) => { if (!condition) throw new Error(message); };
  check("list", "papers crawl", () => {
    const list = readJson<PaperList>(paths.list);
    require(list.sourceDate === paths.key && list.papers.length > 0, "No papers for this source date; apply Skill date-selection rules");
  });
  check("screening", "screening commit / screening validate", () => { validateScreening(readJson<PaperList>(paths.list)); });
  check("download", "papers download", () => {
    const s = status(paths);
    require(s.listReady && s.screeningReady && s.pdfComplete === s.screeningDownload, "Candidate PDFs are incomplete");
  });
  check("markdown", "papers convert", () => {
    const s = status(paths);
    require(s.listReady && s.screeningReady && Number(s.markdownComplete) + Number(s.htmlUnavailable) === s.screeningDownload, "Candidate Markdown is incomplete");
  });
  check("editorial", "Read candidate Markdown, then editorial commit / editorial validate", () => { validateEditorial(paths); });
  check("copy", "Write copy.json, then edition build", () => {
    const editorial = readJson<EditorialDocument>(paths.editorial);
    const kept = editorial.papers.filter(paper => paper.decision === "keep");
    loadCopy(paths, kept, selectForPublication(kept, config.wechat.maxPapersPerEdition));
  });
  check("cover", "cover prepare / imagegen / cover validate", () => {
    const edition = existsSync(paths.pendingEdition) ? readJson<EditionDocument>(paths.pendingEdition) : undefined;
    requireValidatedCover(paths, edition ? resolve(paths.workDir, edition.coverPath) : paths.cover);
  });
  check("build", "edition build", () => {
    const edition = readJson<EditionDocument>(paths.pendingEdition);
    require(edition.sourceDate === paths.key && edition.articles.length > 0, "No built articles for this date");
  });
  check("measure", "edition measure", () => {
    const edition = readJson<EditionDocument>(paths.pendingEdition);
    require(edition.measuredAt && edition.articles.length > 0 && edition.articles.every(a => Number.isFinite(a.renderedCharacters)), "Articles have not all been measured");
  });
  check("validate", "edition validate", () => {
    const { edition } = validateEdition(config, paths, false);
    require(JSON.stringify(readJson(paths.edition)) === JSON.stringify(edition), "Validated edition is missing or stale; run edition validate");
  });
  const remaining = stages.filter(stage => !stage.complete);
  return { sourceDate: paths.key, complete: remaining.length === 0, scope: "generate", stages,
    nextAction: remaining[0]?.nextAction ?? null, remaining: remaining.map(stage => stage.stage) };
}
