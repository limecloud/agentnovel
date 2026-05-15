---
title: JSON Schemas
description: Agent Novel v0.1 参考 JSON Schema。
---

# JSON Schemas

Agent Novel v0.1 提供参考 JSON Schema，用于 lint、导入校验、互操作测试和运行时诊断。它们不是完整实现，也不限制 `metadata` 扩展。

| Schema | 用途 |
| --- | --- |
| [`novel-project.schema.json`](/schemas/novel-project.schema.json) | 校验 `novel.json`。 |
| [`chapter-frontmatter.schema.json`](/schemas/chapter-frontmatter.schema.json) | 校验章节 frontmatter。 |
| [`canon-card.schema.json`](/schemas/canon-card.schema.json) | 校验设定卡 metadata。 |
| [`agent-task.schema.json`](/schemas/agent-task.schema.json) | 校验代理任务输入。 |
| [`revision-issue.schema.json`](/schemas/revision-issue.schema.json) | 校验修订问题。 |
| [`proposal.schema.json`](/schemas/proposal.schema.json) | 校验可回写提议。 |
| [`export-manifest.schema.json`](/schemas/export-manifest.schema.json) | 校验导出清单。 |
| [`runtime-event.schema.json`](/schemas/runtime-event.schema.json) | 校验 Novel 语义事件 envelope。 |

## 使用建议

- 导入项目时先校验 `novel.json`。
- 保存 proposal、issue、export manifest 前进行 schema 校验。
- Runtime 事件可按 `runtime-event.schema.json` 做最小 envelope 校验。
- 对私有扩展使用 `metadata.<namespace>`，避免污染标准字段。
