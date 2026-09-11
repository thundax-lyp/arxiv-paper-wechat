# CLI 工作流与数据契约

所有命令从仓库根目录执行：

```bash
CLI=".agents/skills/arxiv-paper-wechat/scripts/cli.ts"
npx -y bun "$CLI" <group> <command> --date yyyyMMdd
```

所有命令的 `--date` 都是精确日期，可使用 `yyyyMMdd`、`yyyy-MM-dd` 或 `yyyy/MM/dd`。CLI 不会自行顺移。Skill 负责跳过周末，并在 `papers crawl` 返回 `empty` 后计算下一候选日期、显式再次调用；找到 `ready` 后才把该日期固定为 `sourceDate`。

## 论文仓储

执行开始及最终回复前运行 `npx -y bun "$CLI" workflow status --date yyyyMMdd`。
这是只读诊断，返回 `scope: generate`、`complete`、各阶段 `stages`、`remaining` 和 `nextAction`。
未完成并不等于阻塞：按下一步继续。命令不会生成就绪文件，只有所有阶段通过、正式稿件与实测结果一致才报告生成完成。退出码 0 表示诊断执行成功，不表示流程完成；必须读取 `complete`。状态不认证 LLM 的阅读质量，也不代表微信发布完成。

```text
repositories/papers/yyyyMMdd/
├── list.json
├── editorial.json
├── pdf/<arxiv-id>.pdf
└── markdown/<arxiv-id>.md
```

阶段命令：

```bash
npx -y bun "$CLI" papers crawl --date 20260911
npx -y bun "$CLI" screening commit --date 20260911 --input /tmp/screening.json
npx -y bun "$CLI" screening validate --date 20260911
npx -y bun "$CLI" papers download --date 20260911 --concurrency 4
npx -y bun "$CLI" papers convert --date 20260911 --concurrency 4
npx -y bun "$CLI" papers ingest --date 20260911
npx -y bun "$CLI" papers status --date 20260911
```

`crawl` 从 arXiv `/catchup/<category>/YYYY-MM-DD` Web 页面只读取 New submissions。Cross submissions 仅表示既有论文在当天新增分类，Replacements 是已有论文更新，二者都不属于本项目的每日新稿。三个版面全部成功后原子写入 `list.json`。零篇列表同样写入并返回 `empty`；页面不可用返回 `unavailable`，解析或网络失败返回 `failed`。`crawl --refresh` 才会刷新已有列表。仍不使用 arXiv API、不缓存 HTML。旧式 ID（如 `cs/0609111`）在文件名中编码为 `cs__0609111`，JSON 内保留原 ID。下载以 `.pdf.part` 续传；转换抓取官方 `/html/<versioned-id>` 后直接原子写入 Markdown。HTML 缺失或无正文时，在列表的 `content` 字段记为 `unavailable` 并跳过，绝不使用 PDF/MinerU 兜底。

## 标题粗筛与 list.json

下载前必须完整阅读 [initial-screening-policy.md](initial-screening-policy.md)，只根据每篇 `title` 生成覆盖完整列表的粗筛输入：

```json
[
  { "arxivId": "2609.12345", "decision": "download", "reason": "标题直接指向 LLM 推理。" },
  { "arxivId": "2609.12346", "decision": "skip", "reason": "标题显示为纯图像分割任务。" }
]
```

`screening commit` 原子把结果写入 `list.json` 的 `screening` 字段；每篇必须恰好一条，`reason` 必填。`papers download`、`papers convert`、`papers ingest` 和正式编辑都会拒绝未完成粗筛的列表，并且只处理 `decision: "download"` 的候选。`skip` 的原因随 `list.json` 留存，用于解释未下载决定。

## editorial.json 输入

生成输入前必须完整阅读 [editorial-policy.md](editorial-policy.md)。该文件是过滤范围、固定 taxonomy、评分锚点和阅读证据要求的唯一来源；本文件只定义数据结构。

输入可以是数组或含 `papers` 数组的对象。每篇列表论文必须恰好出现一次。

```json
{
  "arxivId": "2609.12345",
  "decision": "keep",
  "tags": ["tool-use", "agent"],
  "direction": "Agent系统与工具使用",
  "authorsOrg": "作者与机构",
  "codeUrl": "https://github.com/example/project",
  "summary": "研究问题与结论",
  "critique": "优点、局限与可信度",
  "method": "方法或系统结构",
  "innovation": "创新点",
  "training": "训练与数据设置；不适用时说明",
  "results": "关键实验结果",
  "recommendation": "为何值得读",
  "score": { "novelty": 2, "impact": 2, "evidence": 2, "audienceFit": 2 }
}
```

`drop` 只要求 `arxivId`、`decision`、`tags` 和明确的 `reason`。`direction` 和四项评分必须严格遵循固定编辑质量规范。

提交与校验：

```bash
npx -y bun "$CLI" editorial commit --date 20260911 --input /tmp/editorial.json
npx -y bun "$CLI" editorial validate --date 20260911
```

## copy.json 与稿件集

生成前必须完整阅读 [publication-policy.md](publication-policy.md)。CLI 会确定性生成总览表、方向分组和固定正文结构；LLM 只提供忠于 `editorial.json` 的精炼字段。

`.work/yyyyMMdd/copy.json` 只包含保留论文，每篇恰好一次：

```json
{
  "sourceDate": "20260911",
  "intro": "本期导读",
  "papers": [
    {
      "arxivId": "2609.12345",
      "title": "中文标题",
      "summary": "研究问题与结论",
      "critique": "优点、局限与可信度",
      "method": "方法或系统结构",
      "innovation": "核心创新",
      "training": "训练与数据设置；不适用时明确说明",
      "results": "关键结果与证据",
      "recommendation": "为什么值得读"
    }
  ]
}
```

所有字段均为必填且不得使用占位语。精选稿由 CLI 从总分 `>=7` 的论文中最多取 4 篇；全览稿覆盖全部保留论文。两类稿件都含 `方向 | 序号 | 论文 | 评分 | 关键词` 总览表，并按方向组织完整正文。

## 封面

```bash
npx -y bun "$CLI" cover prepare --date 20260911
```

读取 `.work/20260911/cover-brief.json`，调用 Codex `$imagegen` Skill 的默认内置工具生成封面，再把最终图片复制到 brief 中的 `outputPath`。项目不使用自建图片脚本或 Image API fallback。

```bash
npx -y bun "$CLI" cover validate --date 20260911
```

校验成功生成 `cover.json`。图片必须为至少 `1200×500` 的 PNG/JPEG，宽高比须在 `21:9` 的 3% 误差内；换图后必须重新校验。

构建使用配置的安全目标初步分篇；测量调用 `baoyu-post-to-wechat` 的真实 Markdown 渲染器；校验以实测硬上限为准。

```bash
npx -y bun "$CLI" edition build --date 20260911
npx -y bun "$CLI" edition measure --date 20260911
npx -y bun "$CLI" edition validate --date 20260911
npx -y bun "$CLI" edition publish --date 20260911 --dry-run
npx -y bun "$CLI" edition publish --date 20260911
```

`edition.pending.json` 是构建/测量结果；只有校验成功才原子生成 `edition.json`。发布成功后归档到 `repositories/publications/yyyyMMdd/<media-id>/`。

## 发布恢复

```bash
npx -y bun "$CLI" publication list
npx -y bun "$CLI" publication show --date 20260911
npx -y bun "$CLI" publication reconcile --date 20260911 --media-id MEDIA_ID
npx -y bun "$CLI" publication adopt --date 20260911 --media-id MEDIA_ID
```

发布命令失败后事务会标记为 `uncertain`。先在微信草稿箱确认是否创建成功；成功则用原 `media_id` 协调归档，未确认前不要重发。
`publication adopt` 仅用于用户明确要求或已知的、通过流程外容量探测创建的草稿；它先校验当前 edition，再建立 `draft_created` 事务并归档，不能用于不确定的发布结果。

出现任何失败或状态冲突时，按 [固定异常处理与恢复规范](error-handling.md) 判断停止条件和恢复动作。
