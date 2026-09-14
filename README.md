<div align="center">
  <img src="assets/arxiv-paper-wechat-hero.png" alt="arXiv Agent 与大模型研究简报工作流" width="100%" />
  <h1>📡 arXiv Agent 与大模型研究简报</h1>
  <p>把一个 arXiv 发布日整理成经过筛选、评分和编辑的微信公众号草稿。</p>
</div>

这是一个需要人工唤起的 Codex Skill。它从 arXiv Web 的精确日期页面采集 `cs.AI`、`cs.CL`、`cs.MA` 的新投稿，在本地保存 PDF 和由官方 HTML 转换的 Markdown；LLM 据此完成筛选与编辑，最后生成经真实渲染容量校验的微信公众号多图文稿件集，并可选择创建草稿。

## 主要能力

- 按精确日期抓取 arXiv Catchup Web 列表，只纳入 New submissions；不使用 arXiv API，也不缓存列表 HTML
- 先由 LLM 基于标题和摘要完成完整粗筛，再下载相关度最高的最多 60 篇；失败时按排序递补
- 支持 PDF 断点续传，并从官方 arXiv HTML 并发转换 Markdown；缺少有效 HTML 的论文会被明确标记并跳过
- 使用固定范围、taxonomy 和评分口径阅读全文，最多保留最重要的 40 篇 Agent / LLM 论文
- 生成精选稿、论文全览，以及由 `$imagegen` 生成并校验的内容感知封面
- 按真实渲染 HTML 校验容量；默认只生成，得到明确授权时仅创建公众号草稿，绝不正式群发
- 分离本地论文仓储与已发稿件仓储，发布异常可安全恢复

## 使用

在 Codex 中显式调用 `$arxiv-paper-wechat`：

```text
使用 $arxiv-paper-wechat 生成 2026-09-11 的研究简报，只生成，不发布。
```

每次调用只处理一期。指定日期是首个候选日：Skill 跳过周末，并且只在脚本明确报告当天无稿时尝试下一日；不会选择未来日期。CLI 每次只处理传入的精确日期。不指定日期时，Skill 从最后一次成功创建草稿的论文日期继续；如没有历史记录，则从配置的 `startDate` 开始。

若要创建微信公众号草稿，明确说明“创建草稿”或“推送到草稿箱”。这要求已配置被 Git 忽略的 `.baoyu-skills/.env` 凭据；创建成功后会归档回执。不要把它理解为正式发布。

### 命令行排障

CLI 的每条命令都需要精确日期，便于安全续作和定位单一阶段：

```bash
npm run cli -- papers ingest --date 20260911
npm run cli -- screening validate --date 20260911
npm run cli -- editorial validate --date 20260911
npm run cli -- cover validate --date 20260911
npm run cli -- edition validate --date 20260911
npm run cli -- workflow status --date 20260911
```

正常使用时由 Skill 编排这些步骤；不要在粗筛完成前下载，也不要跳过封面、稿件集或容量校验。遇到失败、状态冲突或不确定的发布结果，请遵循 [异常处理与恢复规范](.agents/skills/arxiv-paper-wechat/references/error-handling.md)。

运行和验证需要 Node.js、`npx` 与网络访问；CLI 会通过 `npx` 获取 Bun：

```bash
npm test
```

## 数据目录

```text
repositories/papers/yyyyMMdd/                  # PDF、Markdown 与编辑结果
repositories/publications/yyyyMMdd/<media-id>/ # 已创建的公众号草稿
.work/yyyyMMdd/                                # 可丢弃的发布工作区
```

`list.json`、最终 Markdown、`editorial.json` 和成功归档的稿件会进入 Git；PDF、`.part`、`.tmp`、`.work/` 及微信凭据不会进入 Git。超过保留期的 PDF 仅由显式调用的 `$cleanup-paper-pdfs` 单独清理。

## 文档

- [需求与设计方案](docs/SOLUTION.md)
- [Skill 工作流](.agents/skills/arxiv-paper-wechat/SKILL.md)
- [编辑质量规范](.agents/skills/arxiv-paper-wechat/references/editorial-policy.md)
- [稿件质量与编排规范](.agents/skills/arxiv-paper-wechat/references/publication-policy.md)
- [贡献指南](CONTRIBUTING.md)

## 许可证

[Apache License 2.0](LICENSE)
