---
name: arxiv-paper-wechat
description: "Generate an arXiv Agent and LLM research brief by collecting cs.AI, cs.CL, and cs.MA papers, reviewing local Markdown, building capacity-safe articles, and optionally creating a WeChat draft."
license: Apache-2.0
metadata:
  version: 3.5.4
  author: Thundax
---

# arXiv Agent & LLM Research Brief

每次人工调用只处理一个 arXiv 发布日。TypeScript CLI 负责抓取、文件状态、并发、校验和发布事务；你负责论文理解、编辑判断、文案缩减和流程编排。封面位图必须通过 Codex `$imagegen` Skill 的内置图片生成模式创建。

## 开始执行

从仓库根目录调用 CLI：

```bash
CLI=".agents/skills/arxiv-paper-wechat/scripts/cli.ts"
npx -y bun "$CLI" publication next-date
```

- 用户指定日期时，将其规范化为 `yyyyMMdd`，并把它作为首个候选日期。
- 未指定日期时，使用 `publication next-date` 返回的日期。
- 若结果含 `blocked: true`，先处理列出的发布事务，不得开始新一期。
- CLI 始终只处理 `--date` 指定的精确日期，不会自行顺移。周末由你直接跳过；工作日执行 `papers crawl`，根据返回的 `ready` 或 `empty` 决定是否尝试下一日。

## 固定工作流

1. 从候选日期开始：周末直接推进一日；工作日执行 `papers crawl --date 候选日期`。返回 `empty` 时推进一日后显式再次调用，返回 `ready` 时将该日期固定为本期 `sourceDate`。不得超过上海时区的当天日期；`unavailable`、`failed` 或 `not_released` 时停止，不得当作空稿顺移。
2. **完整阅读 [references/initial-screening-policy.md](references/initial-screening-policy.md)**。结合 `list.json` 的标题和摘要判断相关性：为每篇论文输出 `download` 或 `skip` 和具体原因，为所有相关候选给出 `relevanceRank` 排序；CLI 取前 60 篇下载，失败按序递补；不评分、不分 taxonomy、不读取 PDF。写入仓库外临时 JSON，执行 `screening commit --date ... --input ...`，再执行 `screening validate`。未完成该阶段不得下载。
3. 对固定的 `sourceDate` 依次执行 `papers download` 和 `papers convert`（也可用精确日期执行 `papers ingest`），再确认 `papers status` 显示全部可编辑候选的 Markdown 完成。转换从 arXiv 官方 `https://arxiv.org/html/<versioned-id>` 直接生成 Markdown；不缓存 HTML。HTML 不存在或无有效正文时，CLI 会在 `list.json` 标为 `content.status: unavailable` 并跳过该论文；不得改用 MinerU、PDF 文本提取或其他 HTML 来源；不要删除 `.part`。
4. **完整阅读 [references/editorial-policy.md](references/editorial-policy.md)**，并以它作为当期筛选、固定 taxonomy 和评分的唯一质量口径。随后串行阅读最终下载候选的 `repositories/papers/yyyyMMdd/markdown/*.md`，一次性生成完整编辑结果，只保留最重要的最多 40 篇，不并发调用 LLM。
5. 将候选 JSON 写到仓库外临时文件，再执行 `editorial commit --date ... --input ...`；根据错误补齐后运行 `editorial validate`。
6. **完整阅读 [references/publication-policy.md](references/publication-policy.md)**，生成 `.work/yyyyMMdd/copy.json`：全览 `overview` 用紧凑短段落帮助筛选，精选 `featured` 独立扩写以帮助理解。中文标题突出具体问题或发现，下方展示英文原标题与三级 🌟 推荐度；在 `copy.json` 中填写 `recommendationLevel`，含义与证据边界遵循发布规范。发布稿不展示内部评分、核查状态或生产说明。选稿上限、篇幅参考、证据边界和链接要求以该规范为准；不得修改完整 `editorial.json`。CLI 按全览篇幅预算、尽量保持主题完整地分篇，再逐篇实测微信公众号渲染容量。
7. 运行 `cover prepare --date ...`，读取生成的 `cover-brief.json`，加载并遵循 Codex `$imagegen` Skill，使用默认内置图片工具生成一张封面。把选定成品复制到 brief 的 `outputPath`；不要创建本地图片 API wrapper，也不要使用需要 `OPENAI_API_KEY` 的 CLI fallback。封面采用小清新的研究编辑插画：以暖白纸张、低饱和薄荷绿/天蓝/浅黄和柔和晨光为基调；把精选论文的实际主题转成少量可读的视觉隐喻，例如工具调用用模块与连线、检索与核验用资料卡/放大镜、记忆用归档卡片、多智能体协作用松散协作节点。构图保持留白、纸张或水粉质感、克制的文具感，避免深色赛博空间、发光宇宙球、密集线路和与论文无关的通用科技图标。仍不得含文字、字母、数字、logo、水印、界面截图、真实人物或手部。
8. 运行 `cover validate --date ...`。图片必须无文字、数字、logo、水印、界面截图和真实人物，且通过 PNG/JPEG、最小尺寸与 21:9 比例硬校验；失败时重新生成或裁切后再验证。
9. 依次运行 `edition build`、`edition measure`、`edition validate`，完成字段、覆盖、链接与实渲染容量检查。不设置额外的正文或手机排版复核关卡，不要求浏览器预览；手机阅读效果由用户在微信草稿中查看。若超限，按报告语义缩减对应论文的 `copy.json` 内容并重新执行三条命令；禁止字符串硬截断。
10. 用户只要求生成时到此停止。用户要求推送草稿箱时，运行 `edition publish`。不得正式群发。

详细 JSON 结构和命令见 [references/workflow.md](references/workflow.md)。编辑阶段必须读取 [references/editorial-policy.md](references/editorial-policy.md)，成稿阶段必须读取 [references/publication-policy.md](references/publication-policy.md)；不要只依赖本文件的摘要。任何命令失败、产物状态冲突或发布结果不确定时，必须读取并遵循 [references/error-handling.md](references/error-handling.md)。

## 完成与暂停

- 开始和最终回复前运行 `workflow status --date ...`。生成任务必须完成正式编辑、文案、封面、构建、实测和校验，且该命令返回 `complete: true`，才能报告完成；`complete: false` 时按 `nextAction` 继续。它只检查产物，不证明 LLM 已阅读论文；仍须履行编辑规范的阅读与证据要求。
- 阶段进度用中间消息汇报。候选多、阅读耗时、上下文压缩或某个阶段结束都不是暂停理由；恢复上下文后接着未完成步骤执行，不把进度汇报作为最终答复，也不要求用户再次说“继续”。
- 只有用户要求停止，或按 [异常处理规范](references/error-handling.md) 恢复后仍存在真实阻塞，才可未完成退出。最终回复必须明确“未完成”，列出具体阻塞证据、已尝试的恢复动作和剩余步骤；不能仅说“仍需阅读”。
- 用户要求推送时，生成完成后还必须创建草稿并归档成功，才算完成用户任务；状态命令的 `scope: generate` 不代表已发布。保持已有发布授权与事务恢复规则。

## 硬约束

- 不使用 arXiv API，不缓存 HTML，不写入旧 `runs/`。
- 候选日期无论文时只可由 Skill 向后查找，跳过周末，且绝不能超过上海时区的当天日期；CLI 不负责选择日期。
- 抓取使用 arXiv 精确日期 Catchup Web 页面，只纳入 New submissions；Cross submissions 是旧稿新增分类，不作为每日新稿，Replacements 也不纳入。不得把页面不可用误判为空稿。
- 三个版面全部成功后原子写入当天 `list.json`；即使论文数为零也写入，作为该精确日期已完成检查的标志。粗筛结果也只能由 `screening commit` 原子写回该文件。
- PDF 下载、转换和正式编辑都只处理标记为 `download` 的论文；每篇 `skip` 必须在 `list.json` 中保留具体原因。
- 不清理历史 PDF。清理由显式调用的 `cleanup-paper-pdfs` Skill 独立完成。
- 微信硬上限未配置、实渲染超限、封面无效或发布事务未协调时，禁止发布。
- `publication.json` 为 `uncertain` 或 `draft_created` 时，先核对微信草稿箱，再用 `publication reconcile --date ... --media-id ...` 补归档；绝不能再次发布同一稿件。
- 凭据只放在被 Git 忽略的 `.baoyu-skills/.env`。
