# 固定异常处理与恢复规范

本文件规定主 Skill 遇到失败时的停止条件和恢复动作。任何 CLI 命令非零退出、产物状态不一致或外部调用结果不确定时，必须先按本规范处理。不得用跳过校验、删除断点文件、改日期或重复发布来掩盖错误。

## 通用原则

普通未完成状态不是异常：候选多、阅读耗时、上下文压缩和阶段结束都应继续执行。只在用户要求停止，或下述恢复动作无法解除实际阻塞时暂停。暂停前运行 `workflow status`，最终回复明确任务未完成，并提供错误或缺失信息、已尝试的恢复动作及剩余步骤。可自行补齐的编辑字段和文案校验错误应先修正，不能直接当作需要用户介入的阻塞。

1. CLI 只处理显式传入的精确日期。Skill 只在周末或 `papers crawl` 明确返回 `empty` 时推进候选日期；一旦选定 `sourceDate` 就保持不变。
2. 优先读取 CLI 的结构化输出、`.work/yyyyMMdd/*-error.json` 和状态文件，再决定动作。
3. 可安全重试的阶段只重跑同一日期、同一命令；有限重试耗尽后停止并报告失败对象。
4. 正式 readiness 文件只由 CLI 原子生成。不要手工把 `.part`、`.tmp` 或 pending 文件改名为正式文件。
5. 发布属于外部写操作；结果不确定时默认可能已经成功，禁止自动重发。

## 日期与列表抓取

| 现象 | 处理 |
| --- | --- |
| `publication next-date` 返回 `blocked: true` | 先检查列出的事务；未协调前不得开始新一期。 |
| 候选日期为周末 | Skill 不调用抓取，推进到下一日；不得回退到更早日期。 |
| 精确日期抓取返回 `empty` | 当天 `list.json` 已保存；Skill 推进到下一候选日期并显式再次调用 CLI。 |
| 候选日期晚于今天，或检查到今天仍无稿 | 停止并报告尚无可处理发布日；不得选择未来日期。CLI 对未来日期返回 `not_released`。 |
| 精确日期 Catchup Web 页面返回 400/404 | 返回 `unavailable` 并停止；不得把页面能力缺失当成空稿继续顺移。 |
| HTTP 超时、限流或临时 5xx | 允许 CLI 按配置有限重试；耗尽后保留 `crawl-error.json` 并停止。 |
| 页面结构变化、分页解析失败 | 不产生新的 `list.json`；报告 URL/版面和解析错误，先修复解析器再 `papers crawl --refresh`。不得改用 arXiv API。 |
| `--refresh` 失败但已有 `list.json` | 旧列表不是本次刷新成功的证据；明确报告刷新失败，不继续覆盖或混用数据。 |
| `screening commit` 缺论文、重复论文或缺少原因 | 修正仓库外临时 JSON 后重新提交；不得手工只改部分 `list.json`。 |
| 下载提示 screening 未就绪 | 先完整读取 `initial-screening-policy.md`，为列表每篇给出 `download`/`skip` 与原因，再运行 `screening commit`。 |

## PDF 下载与转换

| 现象 | 处理 |
| --- | --- |
| 下载中断 | 保留 `.pdf.part`，重跑 `papers download` 或 `papers ingest`；CLI 使用 HTTP Range 续传。 |
| 服务端不支持 Range | CLI 从头安全重写 `.part`；不要把旧分片拼接到完整响应。 |
| `416`、长度不符或 PDF 头无效 | CLI 丢弃不再可用的分片并重试；正式 `.pdf` 不得产生。 |
| PDF 单篇重试耗尽 | CLI 记录失败原因并按相关度从候补递补，最多取得 60 篇。候补耗尽时报告实际成功篇数和失败记录；转换与编辑只处理最终成功候选。 |
| arXiv HTML 返回 404/406、缺少正文或规整后异常短 | CLI 在 `list.json` 记录 `content.status: unavailable` 与原因，并从正式编辑候选中跳过。不得改用 MinerU、`pdftotext`、ar5iv 或摘要替代正文。 |
| HTML 网络请求临时失败 | CLI 按配置有限重试；耗尽后停止本阶段并报告。不得把网络故障标为 HTML 不存在。 |
| 磁盘满、无权限、原子改名失败 | 停止写入，保留可恢复的断点；清理空间或权限后重跑。主 Skill不得顺带删除历史 PDF。 |

## 编辑结果

`editorial commit` 失败时，根据错误修正临时输入并重新提交，不能直接编辑正式 `editorial.json` 绕过校验。

- 缺少或重复论文：对照 `list.json`，保证每个 arXiv ID 恰好一条结果。
- taxonomy 或分值非法：重新读取 [editorial-policy.md](editorial-policy.md)，按固定枚举和区间修正。
- `keep` 字段、作者机构或证据不足：回到论文 Markdown 核实；未知信息明确写未披露，禁止猜测。
- 任何单篇未完成：不提交部分 `editorial.json`，也不进入文案和封面阶段。

## 文案、封面与容量

| 现象 | 处理 |
| --- | --- |
| `copy.json` 漏稿、重复、存在占位语或包含 drop 论文 | 重新读取 [publication-policy.md](publication-policy.md)，依据 `editorial.json` 修正结构化字段，保证所有 keep 论文恰好一次。 |
| 旧七栏文案、缺少精选必填字段、精选整段复制全览或把精选栏目写入全览 | 回读论文与内部编辑记录，独立重写 `overview` / `featured` 及精选专属短述；不拼接迁移，不修改旧成功归档。 |
| `$imagegen` 不可用或生成失败 | 停止封面阶段并报告；不要静默改用需要 API Key 的 CLI fallback，也不要用占位图。 |
| 封面格式、尺寸或 21:9 校验失败 | 重新生成或裁切成品，再运行 `cover validate`。换图后旧 `cover.json` 自动失效。 |
| 微信硬上限为 `null` | 只允许 build/measure；validate/publish 必须停止，等待真实接口实测配置。 |
| 单篇文章超限 | 先确认 CLI 已按保守源长度自动拆分；若仍超 100,000 个真实渲染字符，再根据测量报告语义缩减对应 `copy.json` 内容，重新 build → measure → validate；禁止字符串硬截断。 |
| 单个论文块本身超限 | 只缩减该论文发布文案；不得删论文或修改完整 `editorial.json`。 |
| 稿件数量超过多图文上限 | 优先压缩文案以重新分篇；仍无法满足时停止并报告，禁止丢稿。 |

## 微信发布与事务

发布前的 dry-run 或校验失败不创建草稿，修复后可重试。真正调用微信后遵循以下规则：

| 现象 | 处理 |
| --- | --- |
| `40164 invalid ip` | 事务记为可重试的 `failed`；将当前实际出口 IP 加入公众号白名单后重试同一日期，不要修改 AppSecret。 |
| `40125 invalid appsecret` | 事务记为可重试的 `failed`；核对所选账号的 `WECHAT_APP_ID` 与 `WECHAT_APP_SECRET` 后重试同一日期。凭据仍只保存在 `.baoyu-skills/.env`。 |
| 缺少凭据或封面 | 补齐本地配置或重新验证封面；禁止发布。 |
| 微信返回成功且本地归档成功 | 事务为 `archived`，同一 fingerprint 永不再次发布。 |
| 已获得 `media_id`，但本地归档失败 | 保留 `draft_created` 事务，运行 `publication reconcile --date ...`，只补归档。 |
| 用户明确要求纳入已知的流程外探测草稿 | 在当前 edition 已通过校验、且无已有事务时，运行 `publication adopt --date ... --media-id ...`；不得用于结果不确定的请求。 |
| 发布进程超时、崩溃或返回结果无法解析 | 事务标记 `uncertain`。人工检查微信草稿箱；若草稿存在，用其 `media_id` 执行 `publication reconcile --date ... --media-id ...`。 |
| `uncertain` 且草稿箱确认不存在 | 不自动重发。向用户报告证据，由用户明确决定后续处理。 |

任何未归档事务都会阻止下一期。只有能确定发生在创建草稿前的 `failed` 允许修复后重试同一日期；`publishing`、`uncertain` 或 `draft_created` 不得重发。`publication reconcile` 绝不能再次调用微信创建草稿。
