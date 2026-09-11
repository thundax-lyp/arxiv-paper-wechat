---
name: cleanup-paper-pdfs
description: Manually inspect and delete PDF caches older than the configured retention period from the date-partitioned local paper repository. Use only when explicitly asked to clean old paper PDFs; never run as part of the daily paper or publishing workflow.
license: Apache-2.0
metadata:
  version: 1.0.0
  author: Thundax
  openclaw:
    emoji: "🧹"
    requires:
      bins: ["bun"]
---

# 清理本地论文 PDF

仅在用户明确要求清理旧论文 PDF 时使用。不要从 `arxiv-paper-wechat` 或其他流程自动调用。

## 边界

- 只处理论文仓储中名称为 `yyyyMMdd` 的日期目录。
- 只删除严格超过保留天数的 `pdf/` 目录。
- 永远保留 `list.json`、`editorial.json`、`markdown/` 和已发稿件仓储。
- 不按文件修改时间判断，使用日期目录名计算年龄。
- 删除可中断、可重跑；已删除的目录会被跳过。

## 执行

先运行预览：

```bash
npx -y bun {baseDir}/scripts/cleanup.ts --dry-run
```

向用户报告候选日期、PDF 目录数量和预计释放空间。获得用户对这些目标的明确确认后，才执行：

```bash
npx -y bun {baseDir}/scripts/cleanup.ts --execute
```

默认读取仓库根目录 `arxiv-paper-wechat.config.json`。仅在用户明确指定时使用 `--config`、`--retention-days` 或 `--as-of yyyyMMdd` 覆盖。执行结束后报告成功删除和失败的确切目录；有失败时不得声称清理完成。
