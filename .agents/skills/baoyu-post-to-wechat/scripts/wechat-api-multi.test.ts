import { afterAll, describe, expect, test } from "bun:test";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

import { buildDraftArticle, loadMultiManifest } from "./wechat-api.ts";

const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), "wechat-multi-test-"));

afterAll(() => {
  fs.rmSync(tempDir, { recursive: true, force: true });
});

describe("multi-article manifests", () => {
  test("resolves article paths relative to the manifest", () => {
    const articlePath = path.join(tempDir, "article.md");
    const manifestPath = path.join(tempDir, "manifest.json");
    fs.writeFileSync(articlePath, "# Article\n", "utf-8");
    fs.writeFileSync(
      manifestPath,
      JSON.stringify({ articles: [{ path: "article.md", title: "Override" }] }),
      "utf-8",
    );

    const manifest = loadMultiManifest(manifestPath);

    expect(manifest?.articles).toEqual([{ path: articlePath, title: "Override" }]);
  });

  test("builds one WeChat article payload per manifest entry", () => {
    const article = buildDraftArticle({
      title: "Featured",
      author: "Thundax",
      digest: "Summary",
      content: "<p>Body</p>",
      thumbMediaId: "cover-id",
      articleType: "news",
      needOpenComment: 1,
      onlyFansCanComment: 0,
    });

    expect(article).toEqual({
      article_type: "news",
      title: "Featured",
      author: "Thundax",
      digest: "Summary",
      content: "<p>Body</p>",
      thumb_media_id: "cover-id",
      need_open_comment: 1,
      only_fans_can_comment: 0,
    });
  });
});
