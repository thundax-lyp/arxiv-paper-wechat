# 贡献指南

## 项目结构

主 Skill 位于 `.agents/skills/arxiv-paper-wechat/`。其 TypeScript CLI 按职责拆分在 `scripts/`：`papers.ts` 负责采集、下载和转换，`editorial.ts` 校验编辑结果，`cover.ts` 处理封面，`edition.ts` 构建稿件集，`publication.ts` 管理微信事务。PDF 清理由独立的 `.agents/skills/cleanup-paper-pdfs/` Skill 提供。

长期数据分别存放在 `repositories/papers/yyyyMMdd/` 和 `repositories/publications/yyyyMMdd/`；`.work/yyyyMMdd/` 只保存可丢弃的发布前产物。旧 `runs/` 仅供参考。

## 开发与测试

从仓库根目录执行：

```bash
npm test
npx -y bun .agents/skills/arxiv-paper-wechat/scripts/cli.ts --help
python3 /Users/thundax/.codex/skills/.system/skill-creator/scripts/quick_validate.py .agents/skills/arxiv-paper-wechat
```

测试使用 `bun:test`，文件名以 `.test.ts` 结尾。测试应使用临时目录，不得调用真实微信接口；除专门的集成验证外，也不要依赖实时 arXiv 数据。

## 编码规范

使用 TypeScript ESM、两空格缩进和分号。函数与变量使用 `camelCase`，类型使用 `PascalCase`。网络、文件状态、并发和硬校验必须由 CLI 确定性完成；语义筛选与文案压缩留给 LLM。作为就绪标志的文件应先写临时文件，再原子改名。

## 提交变更

提交标题使用简短祈使句，例如 `Add resumable PDF downloads`。Pull Request 应说明受影响的流程阶段、配置或数据契约变化，并在输出结构变化时附代表性 JSON 或 Markdown。提交前运行 `npm test` 和 `git diff --check`。

不要提交 `.baoyu-skills/.env`、`.work/`、PDF、`.part` 或 `.tmp` 文件。修改筛选、评分、成稿或异常策略时，应同步对应 reference 和 `docs/SOLUTION.md`。
