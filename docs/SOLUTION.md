# arXiv Agent 与大模型研究简报 — 需求与设计方案

状态：方案已确认，微信公众号容量上限待实测  
适用范围：`arxiv-paper-wechat` 主 Skill 及 `cleanup-paper-pdfs` 清理 Skill

## 目标

系统通过人工唤起，把指定 arXiv 发布日中 `cs.AI`、`cs.CL`、`cs.MA` 版面的论文沉淀到本地论文仓储，经 Skill 完成筛选、编辑和评分后，生成符合微信公众号容量限制的多篇稿件集，并推送到公众号草稿箱。成功推送的内容归档到已发稿件仓储。

## 核心原则

- Skill 负责日期选择、内容理解、编辑判断和流程编排；TypeScript CLI 负责确定性处理和硬校验。
- 主 Skill 明确依赖 Codex `$imagegen` Skill 生成封面位图；项目 CLI 不实现图片生成模型调用，只负责准备内容 brief、约束输出位置并校验成品。
- 主 Skill 仅由人工唤起，每次默认处理一个 arXiv 发布日，不运行定时任务或后台轮询。
- 本地论文仓储和已发稿件仓储是两个长期数据域；待发布工作区只是可丢弃的中间目录。
- 抓取使用 arXiv Web 列表及分页，不依赖 arXiv API，也不缓存原始 HTML。
- 微信容量必须由代码基于最终渲染 HTML 强制校验，不接受 LLM 猜测。
- PDF 清理由独立、显式调用的 Skill 完成，不能增加主 Skill 的日常负担。

## 日期规则

日期以 arXiv Web 元数据对应的论文日期为准，持久化格式为 `yyyyMMdd`。

1. 用户显式指定日期时，将其作为首个候选日期；支持 `yyyyMMdd`、`yyyy-MM-dd` 和 `yyyy/MM/dd`。
2. 未指定日期时，先检查是否存在待协调的发布事务。
3. 从已发稿件仓储查找最新的 `draft_created` 记录，以其 `sourceDate` 推进到下一工作日。
4. 没有发布记录时，使用配置中的 `startDate`。
5. Skill 跳过周六、周日；工作日把精确日期传给 `papers crawl`。只有脚本返回 `empty` 时，Skill 才推进到下一候选日期并再次显式调用。
6. 候选日期不得超过上海时区的当天日期；到今天仍无稿时停止，不得选择未来日期。CLI 对传入的未来日期返回 `not_released`。
7. 网络、解析或精确日期页面不可用分别返回 `failed` / `unavailable`，不得作为空稿继续顺移。
8. 每次人工唤起只处理一期；找到首个有稿日期后，将其固定为当期 `sourceDate`。

`sourceDate` 是论文所属日期，`draftCreatedAt` 是微信草稿创建时间。补发历史稿件时，下一期必须根据 `sourceDate` 而非实际推送时间计算。

## 数据与目录

```text
repositories/
├── papers/
│   └── 20260911/
│       ├── list.json
│       ├── editorial.json
│       ├── pdf/
│       │   ├── 2609.12345.pdf
│       │   └── 2609.12346.pdf.part
│       └── markdown/
│           ├── 2609.12345.md
│           └── 2609.12346.md.tmp
└── publications/
    └── 20260911/
        └── <media-id>/
            ├── edition.json
            ├── copy.json
            ├── articles/
            ├── cover.png
            └── receipt.json

.work/
└── 20260911/
    ├── cover-brief.json
    ├── cover.png
    ├── cover.json            # 尺寸、比例及内容指纹校验回执
    └── ...                   # 其余可丢弃的待发布产物
```

`list.json`、最终 Markdown、`editorial.json` 和已发稿件仓储进入 Git。`pdf/`、`.part`、`.tmp` 和 `.work/` 不进入 Git。现有 `runs/` 不迁移，只作为实现和结果参考。

同一论文以不带版本号的 arXiv ID 为稳定身份。发现 `v2`、`v3` 等新版本时，在原位置更新 PDF、Markdown 和元数据，并保留当前 `version`、`published`、`updated` 信息，不创建重复论文。

## 主流程

```text
人工唤起 Skill
  → Skill 解析候选日期并按需推进
  → CLI crawl 精确日期的全部版面
  → LLM 结合标题与摘要排序，取相关度前 60 篇下载，失败按序递补
  → download 并发下载候选 PDF
  → convert 并发抓取官方 HTML 并生成 Markdown
  → Skill 串行生成 editorial.json
  → 生成并缩减公众号文案
  → CLI 生成封面 brief
  → Codex imagegen Skill 生成封面
  → CLI 校验封面
  → 拆分文章并生成 edition.json
  → 代码校验最终 HTML 容量
  → 创建微信公众号多图文草稿
  → 归档发布回执与原样稿件集
```

用户明确要求“只生成、不发布”时，流程在稿件集校验完成后停止。

封面使用小清新的研究编辑插画，而非通用赛博网络图：以暖白纸张、低饱和薄荷绿/天蓝/浅黄和柔和晨光为视觉基调；从当期精选论文提取工具调用、检索核验、记忆或协作等具体隐喻，采用少量模块、资料卡、放大镜、归档卡片或协作节点表达。画面保留足够留白和纸张/水粉质感，不使用深色宇宙感、密集霓虹线路、UI 或与论文无关的科技符号；继续禁止文字、logo、水印、人物和手部。

生成完成以 `workflow status --date yyyyMMdd` 的 `complete: true` 为门槛：清单、粗筛、PDF、可用 Markdown、正式编辑、文案、封面、构建、实测与正式稿件校验均须通过。该命令只读复用现有校验，输出阶段、剩余工作和下一步，不写就绪标志，不认证 LLM 阅读质量。推送任务还须成功创建草稿并归档；生成就绪不等于发布完成。

阶段进度使用中间消息；候选数量、耗时、上下文压缩不能成为停止原因。未完成时按状态继续，只有用户停止或异常恢复后仍有真实阻塞才退出，并报告具体证据、已尝试恢复和剩余步骤。

## CLI 设计

所有确定性能力使用 Bun/TypeScript CLI。独立阶段命令用于排障和补数据，总控命令复用相同函数。

```text
papers crawl | download | convert | ingest | status
screening commit | validate
editorial commit | validate
cover prepare | validate
edition build | measure | validate | publish
publication list | show | reconcile
```

典型调用：

```bash
arxiv-paper-wechat papers ingest --date 20260911
arxiv-paper-wechat screening commit --date 20260911 --input screening.json
arxiv-paper-wechat editorial commit --date 20260911 --input editorial.json
arxiv-paper-wechat cover prepare --date 20260911
arxiv-paper-wechat cover validate --date 20260911
arxiv-paper-wechat edition build --date 20260911
arxiv-paper-wechat edition validate --date 20260911
arxiv-paper-wechat edition publish --date 20260911
```

所有 CLI 命令只处理 `--date` 指定的精确日期，不自行顺移。Skill 负责候选日期推进：周末直接跳过；工作日调用 `papers crawl`，仅在返回 `empty` 时尝试下一日；返回 `ready` 后把该日期固定并显式传给其余命令。

## 列表抓取

`papers crawl` 抓取指定精确日期的三个版面，解析论文元数据和真实 PDF 地址，并按基础 arXiv ID 去重。数据来自 arXiv 官方 `/catchup/<category>/YYYY-MM-DD` Web 页面：只纳入 New submissions。Cross submissions 是既有论文在当天新增分类，Replacements 是已有论文更新，均不作为每日新稿。该页面一次返回当天完整批次，无需依赖 `recent` 页面或用论文提交日期推断发布批次。

- 不保存 HTML；解析失败时保留错误信息但不产生正式列表。
- 只有所有版面均成功后，才原子写入 `list.json`。
- `list.json` 存在表示该精确日期已经完成检查；零篇也写入并返回 `empty`。默认不重新抓取，`--refresh` 才允许刷新。
- 列表包含日期、版面、抓取时间、论文 ID、版本、标题、作者、摘要、分类及 PDF URL。
- 旧式 arXiv ID 在 JSON 中保持原值，例如 `cs/0609111`；仅文件名安全编码为 `cs__0609111`。

## 标题与摘要粗筛

抓取完成后、下载前，LLM 读取 `list.json` 的标题和摘要，对全部论文给出相关性判断、具体原因及相关候选的唯一 `relevanceRank`。CLI 仅下载按相关度排序的前 60 篇；每篇有限重试仍失败时记录 `downloadError`，原子更新列表并从后续候补递补，直到成功候选达到 60 篇或候补耗尽。摘要缺失时先修复列表，不回退到只看标题。相关性由 LLM 判断，不使用关键词规则替代；此阶段不做正式 taxonomy 和质量评分。旧下载文件保留，只有当前排名入选的候选进入转换。

下载、转换和正式编辑都要求粗筛覆盖当天完整列表，并只处理排序后最终入选的最多 60 篇候选。`skip` 原因永久保留在列表中，作为未下载的审计记录。规范见 [标题与摘要粗筛规范](../.agents/skills/arxiv-paper-wechat/references/initial-screening-policy.md)。

## PDF 下载与 Markdown 转换

`papers download` 只读取已完成粗筛的 `list.json`，按配置并发下载标记为 `download` 的论文。正式 PDF 已存在且有效时跳过；未完成内容写入 `.pdf.part`。重跑时优先使用 HTTP `Range` 续传，服务端不支持续传则重新写临时文件。只有长度和 PDF 文件头校验通过后才能原子改名为 `.pdf`。

`papers convert` 从每篇论文的官方 `https://arxiv.org/html/<versioned-id>` 抓取 HTML，直接规整为 Markdown；原始 HTML 不落盘。HTML 比本地 PDF 解析更快，并保留标题、链接、公式 TeX 和图注等结构。最终 Markdown 以原子写入保存，并在 frontmatter 标记 `converter: "arxiv-html"` 和精确 `htmlUrl`。

PDF 仍按仓储规范下载和保留，但不再参与 Markdown 转换。HTML 返回 404/406、缺少正文或转换结果异常短时，CLI 在 `list.json` 写入 `content.status: "unavailable"` 与原因，并将该论文排除在正式编辑之外；这是显式跳过，不使用 MinerU、`pdftotext`、ar5iv 或其他兜底来源。

`papers ingest` 是外层总控：先完成 crawl，再启动下载池和 HTML 转换池；每篇 PDF 下载完成后立即进入转换队列，无需等待全部下载结束。默认下载并发为 4、转换并发为 4，允许配置或 CLI 覆盖。单篇任务有限重试，其他论文继续执行；存在未解决失败时总控返回非零退出码。重复运行根据 `.pdf`、`.part`、`.md` 和 HTML 可用性状态恢复。

## 编辑整理

论文全部转换后，主 Skill 串行读取当天 Markdown，一次性完成筛选、批改、标签、方向和评分，按重要性最多保留 40 篇，不设计多 LLM 并发或可续作的评审任务系统。

过滤范围、固定 taxonomy、评分锚点与阅读证据要求固化在 [编辑质量规范](../.agents/skills/arxiv-paper-wechat/references/editorial-policy.md)，它是编辑判断的唯一质量口径。主 Skill 每期开始编辑前必须完整读取；流程和 CLI 重构不得隐式改变该规范。

结果先写临时文件，经 `editorial commit` 校验后原子生成 `editorial.json`。每篇 `list.json` 论文必须恰好有一个结果：

- `drop`：至少包含 `arxivId`、`decision`、`tags` 和明确的 `reason`。
- `keep`：还必须包含作者机构、代码地址、方向、摘要、批评、方法、创新、训练、结果、推荐理由及四项评分。

方向为固定单选枚举，评分由新意 0–3、影响力 0–3、证据强度 0–2、受众匹配度 0–2 构成；具体定义以编辑质量规范为准。总分由 CLI 计算，不低于 7 才能进入精选。

## 稿件集与容量控制

完整 `editorial.json` 不受公众号字数限制影响。发布文案单独保存到 `.work/yyyyMMdd/copy.json`，LLM 可以根据代码给出的预算和超限报告进行语义缩减，但不得修改完整编辑结果。

`edition build` 按方向、评分和 arXiv ID 稳定排序，先生成精选主稿，再将全部入选论文（含精选）按方向和容量组织成全览文章。全览使用保守源长度自动分篇，`edition measure` 必须通过真实微信公众号渲染器逐篇判断，硬上限为 100,000 字符。单篇论文是不可拆分的内容块。脚本不得从字符串中间硬截断；单个内容块超限时必须交给 Skill 缩减后重建。

成稿结构与写作要求固化在 [稿件质量与编排规范](../.agents/skills/arxiv-paper-wechat/references/publication-policy.md)。发布稿最多收录 40 篇，精选取其中总分 `>=7` 的前 6 篇；评分只用于内部选择。`copy.json` 分别保存独立撰写的 `overview`（约 100–160 字）和 `featured`（约 450–700 字，复杂论文可延长）。精选在深入解读前依次给出问题、结论、新意，深入解读后给出编辑点评和为什么值得读；全览仍只使用紧凑短段落。字数是编辑参考。CLI 生成简短导读、纯文本标题、主题分组与末尾“阅读论文 PDF”，代码入口仅在文案给出核心解读理由且有已核实代码地址时追加。发布稿不展示评分、关键词、序号、核查状态、生产说明、固定七栏或目录表；作者机构不再必填展示；每篇显示英文原标题与三级 🌟 阅读推荐度，推荐度不代表结论可靠性。全览没有每篇固定论文数上限，按压缩后篇幅预算尽量保持主题完整，证据边界在撰写阶段落实，程序检查通过后按用户授权直接推送草稿，由用户在手机上查看。旧七栏文案需重新撰写，成功归档不改写。

`edition measure` 使用 `baoyu-post-to-wechat` 的真实 Markdown 渲染路径计算最终 HTML 容量。`edition validate` 必须检查：

- 每篇文章不超过实测硬上限，并尽量低于安全目标值。
- 稿件数量不超过一个微信多图文草稿的实测容量。
- 所有保留论文覆盖完整，除精选引用外不丢失、不重复。
- 标题、日期、顺序、路径、封面和文章文件一致。

全部校验通过后生成唯一的 `edition.json`，发布命令只接受该稿件集。容量上限未实测或未配置时，允许 build 和 measure，但 validate/publish 必须失败关闭。边界值必须通过真实草稿 API 测试得到，不能由 LLM 或经验值替代。

## 封面生成

`cover prepare` 从精选论文中提取标题、方向和编辑摘要，生成 `.work/yyyyMMdd/cover-brief.json`。主 Skill 必须读取该 brief 并调用 Codex `$imagegen` Skill 的内置图片生成模式；不创建本地图片 API wrapper，也不要求 `OPENAI_API_KEY`。最终项目资产必须从 ImageGen 默认输出位置复制到 `.work/yyyyMMdd/cover.png`。

封面采用内容感知的现代研究简报视觉，禁止文字、数字、logo、水印、界面截图和真实人物。构图目标为 `21:9`，主体保留在中央安全区域。`cover validate` 读取真实 PNG/JPEG 尺寸，要求最小 `1200×500`、宽高比与 `21:9` 偏差不超过 3%，并把文件哈希写入 `cover.json`。稿件构建会校验该回执及哈希；封面被替换后必须重新验证。

## 发布与归档事务

发布目标是微信公众号草稿箱，不是正式群发。微信成功返回 `media_id` 后，状态记为 `draft_created`。

发布前创建本地事务记录并保存稿件集指纹。成功后把 `edition.json`、`copy.json`、文章、封面及包含 `mediaId`、`sourceDate`、`draftCreatedAt` 的回执原样归档到已发稿件仓储。若微信成功而本地归档失败，事务必须保留 `media_id`；`publication reconcile` 只补齐归档，绝不能再次调用微信创建草稿。

发布前还必须校验微信凭据、真实封面、作者机构、稿件路径和日期一致性。凭据只允许存在于被 Git 忽略的 `.baoyu-skills/.env`。

## 异常处理与恢复

阶段失败的停止条件、可重试范围和禁止动作固化在 [异常处理与恢复规范](../.agents/skills/arxiv-paper-wechat/references/error-handling.md)。任何 CLI 非零退出、产物状态冲突或外部发布结果不确定时，主 Skill 必须读取该规范；不得通过跳过校验、删除断点、切换日期或自动重发继续流程。

抓取、下载和转换只允许对同一日期安全续作；单篇失败不阻止其他任务完成，但阶段最终必须非零并阻止编辑。编辑结果必须整批通过校验。发布失败若无法证明微信未创建草稿，一律标记为 `uncertain`，人工核对草稿箱后只允许凭已有 `media_id` 协调归档。

## 独立 PDF 清理

主 Skill 不清理 PDF，也不自动调用清理能力。超过 30 天的 PDF 由显式调用的 `cleanup-paper-pdfs` Skill 单独处理。

该 Skill 先 dry-run，列出候选 `yyyyMMdd/pdf/`、目录数和预计释放空间；用户确认目标后才执行删除。年龄按日期目录名计算，只删除严格超过配置保留期的 `pdf/`，永久保留 Markdown、列表、编辑结果和已发稿件。清理可中断、可重跑，失败必须逐项报告。

## 配置

```json
{
  "paperRepository": "repositories/papers",
  "publicationRepository": "repositories/publications",
  "workspaceDirectory": ".work",
  "startDate": "20260622",
  "categories": ["cs.AI", "cs.CL", "cs.MA"],
  "listPageSize": 50,
  "downloadConcurrency": 4,
  "convertConcurrency": 2,
  "maxRetries": 3,
  "retryDelayMs": 2000,
  "pdfRetentionDays": 30,
  "wechat": {
    "targetRenderedCharacters": 100000,
    "maxRenderedCharacters": 100000,
    "maxArticlesPerEdition": 30,
    "maxPapersPerEdition": 40
  }
}
```

配置文件提供默认值；日期和并发参数可以由 CLI 显式覆盖。微信硬上限字段在完成实测前必须保持未配置状态。

## 非目标

- 不运行定时任务、后台守护进程或无人值守的自动发布。
- 不使用 arXiv API 或保存原始列表 HTML。
- 不构建多 LLM 并行评审、任务领取或评审断点系统。
- 不自动正式群发公众号文章，也不管理阅读数据。
- 不迁移现有 `runs/` 历史数据。
- 不在主 Skill 中扫描或删除旧 PDF。

## 验收标准

1. 未指定日期时能从最后一个 `draft_created.sourceDate` 推导下一工作日；无历史时使用 `startDate`。
2. CLI 严格抓取传入日期；Skill 能跳过周末，并在 `empty` 后显式传入下一候选日，且永不超过当天。
3. 任一版面失败时不产生新的 `list.json`；全部成功后保存一份去重列表，零篇列表也作为检查完成标志，且不保存 HTML。
4. Catchup Web 列表可解析旧式 ID，JSON 保持原 ID，文件路径不产生意外子目录；页面不支持的历史日期返回 `unavailable`。
5. 下载中断保留 `.part`，重跑能续传或安全重下；无效或不完整 PDF 不会成为正式文件。
6. 下载与转换可分别执行，也能由 ingest 以两个并发池重叠运行。
7. 转换失败不产生正式 Markdown；重跑跳过已完成文件并补齐缺失项。
8. `editorial.json` 覆盖当天全部论文；drop 有理由，keep 有完整字段且总分由代码复算。
9. 完整编辑结果不因发布限制被截断，缩减内容仅存在于发布工作区和最终稿件归档。
10. 稿件集能按最终 HTML 硬上限分篇；未配置实测边界或任一文章超限时禁止发布。
11. 发布稿总收录量最多 40 篇；精选稿最多 6 篇且不以低分稿补位；精选按“问题、结论、新意 → 深入解读 → 编辑点评、为什么值得读”组织，全览无遗漏并优先保持主题完整；全览与精选独立撰写，发布稿去除管理信息，保留解释结论必需的证据与限制。
12. 封面由 Codex `$imagegen` Skill 生成；格式、最小尺寸、21:9 比例和内容指纹未经 CLI 验证时不能构建稿件集。
13. 微信成功后只产生一个 `draft_created` 稿件集归档；本地归档失败可凭原 media ID 协调恢复且不会重复发稿。
14. Git 不包含 PDF、临时文件、工作区或微信密钥，但包含列表、最终 Markdown、编辑结果和已发稿件。
15. 主 Skill 的正常执行不会触发 PDF 清理；独立清理 Skill 未获明确调用和确认时不会删除文件。

## 待实测项

- 微信单篇文章最终 HTML 的硬容量上限。
- 建议采用的安全目标容量。
- 单个多图文草稿允许包含的最大文章数。

## 相关入口

- [Main Skill](../.agents/skills/arxiv-paper-wechat/SKILL.md)
- [Editorial Quality Policy](../.agents/skills/arxiv-paper-wechat/references/editorial-policy.md)
- [Publication Quality Policy](../.agents/skills/arxiv-paper-wechat/references/publication-policy.md)
- [Error Handling Policy](../.agents/skills/arxiv-paper-wechat/references/error-handling.md)
- [PDF Cleanup Skill](../.agents/skills/cleanup-paper-pdfs/SKILL.md)
- [WeChat Publishing Skill](../.agents/skills/baoyu-post-to-wechat/SKILL.md)

渲染和草稿发布统一传入 `--no-cite`，关闭外链编号与文末重复链接汇总，保留每篇末尾的 PDF 入口。`edition measure` 在 Markdown 旁保存本次实测的 HTML，供排错留存，不作为推送前人工复核关卡。
