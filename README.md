<div align="center">
  <img src="assets/arxiv-paper-wechat-hero.png" alt="arXiv Agent 与大模型研究简报工作流" width="100%" />
  <h1>📡 arXiv Agent 与大模型研究简报</h1>
  <p>把一个 arXiv 发布日整理成经过筛选、评分和编辑的微信公众号草稿。</p>
</div>

这是一个需要人工唤起的 Codex Skill。它采集 `cs.AI`、`cs.CL`、`cs.MA` 当日论文，在本地保存 PDF 和 Markdown，由 LLM 完成精读与编辑，再生成经过容量校验的微信公众号多图文草稿。

## 主要能力

- 按日期抓取 arXiv Web 列表；先按标题粗筛并记录跳过原因，再断点下载 PDF、从官方 HTML 并发生成 Markdown
- 使用固定范围、taxonomy 和评分口径筛选 Agent / LLM 论文
- 生成精选稿、论文全览和内容感知封面
- 按真实渲染 HTML 校验容量，只创建公众号草稿，不正式群发
- 分离本地论文仓储与已发稿件仓储，发布异常可安全恢复

## 使用

显式调用 `$arxiv-paper-wechat`：

```text
使用 $arxiv-paper-wechat 生成 2026-09-11 的研究简报，只生成，不发布。
```

指定日期是首个候选日：Skill 跳过周末，并在脚本明确报告当天无稿后尝试下一日，但不会选择未来日期。脚本每次只抓取传入的精确日期。不指定日期时，Skill 从最后一次成功归档的论文日期继续。每次调用只处理一期。

运行环境只需要 Node.js 和 `npx`：

```bash
npm test
```

## 数据目录

```text
repositories/papers/yyyyMMdd/                  # PDF、Markdown 与编辑结果
repositories/publications/yyyyMMdd/<media-id>/ # 已创建的公众号草稿
.work/yyyyMMdd/                                # 可丢弃的发布工作区
```

PDF 和临时文件不会进入 Git。超过 30 天的 PDF 由 `$cleanup-paper-pdfs` 单独清理。

## 文档

- [需求与设计方案](docs/SOLUTION.md)
- [Skill 工作流](.agents/skills/arxiv-paper-wechat/SKILL.md)
- [贡献指南](CONTRIBUTING.md)

## 许可证

[Apache License 2.0](LICENSE)
