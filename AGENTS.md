# Agent Instructions

## 事实来源

- 需求与架构以 `docs/SOLUTION.md` 为准。
- 筛选范围、固定 taxonomy、评分及证据要求以 `.agents/skills/arxiv-paper-wechat/references/editorial-policy.md` 为准。
- 成稿结构与文案要求以 `.agents/skills/arxiv-paper-wechat/references/publication-policy.md` 为准。
- 失败停止条件和恢复动作以 `.agents/skills/arxiv-paper-wechat/references/error-handling.md` 为准。

修改上述行为时同步更新代码、Skill、reference、方案和测试，不要让同一规则散落成多个互相冲突的版本。

## 实现边界

- 确定性的网络、文件、并发、容量和事务逻辑使用 TypeScript CLI 实现。
- 论文理解、筛选、批评、评分输入和语义压缩由 LLM 完成。
- 不使用 arXiv API，不缓存列表 HTML，不迁移或写入旧 `runs/`。
- 不在主 Skill 中清理 PDF；只由显式调用的 `cleanup-paper-pdfs` Skill 执行。
- 只创建微信公众号草稿，不执行正式群发。

## 文件与数据

使用 `yyyyMMdd` 日期目录和无版本号 arXiv ID。长期论文数据写入 `repositories/papers/`，成功稿件写入 `repositories/publications/`，发布前产物写入 `.work/`。就绪标志必须采用临时文件加原子改名。保留 `.pdf.part` 供断点续传。

不要提交凭据、PDF、`.part`、`.tmp` 或 `.work/`。不要删除或覆盖与当前任务无关的用户文件。

## 提交规则

暂存、提交或处理提交历史前，读取并遵守 [Commit Rules](docs/COMMIT-RULES.md)。已读取且未变化的规则可以复用，不必每轮重读。

修改完成后默认保留工作区；用户明确要求提交时，按工程判断组织提交，使用已登记工程名和中文提交说明。提交、推送、创建 PR 和合并分别对应用户授权，已有明确的组合授权不重复确认。

## 验证

变更后至少运行：

```bash
npm test
git diff --check
```

修改主 Skill 时还要运行：

```bash
python3 "${CODEX_HOME:-$HOME/.codex}/skills/.system/skill-creator/scripts/quick_validate.py" .agents/skills/arxiv-paper-wechat
```

若 Skill 校验脚本不在上述位置，先定位当前环境安装的 `skill-creator/scripts/quick_validate.py`；不得把其他机器的绝对路径写入仓库规则。
