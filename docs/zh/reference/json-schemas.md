---
title: JSON Schemas
description: Agent Novel v0.1.1 参考 JSON Schema。
---

# JSON Schemas

Agent Novel v0.1.1 的 schema 用于 lint、导入校验、运行时诊断和互操作测试。schema 是参考契约，不禁止 `metadata` 或实现方扩展。

| Schema | 用途 |
| --- | --- |
| [`agent-feed-item.schema.json`](/schemas/agent-feed-item.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`agent-task.schema.json`](/schemas/agent-task.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`analysis-sample.schema.json`](/schemas/analysis-sample.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`canon-card.schema.json`](/schemas/canon-card.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`chapter-frontmatter.schema.json`](/schemas/chapter-frontmatter.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`export-manifest.schema.json`](/schemas/export-manifest.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`knowledge-document.schema.json`](/schemas/knowledge-document.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`novel-project.schema.json`](/schemas/novel-project.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`proposal.schema.json`](/schemas/proposal.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`revision-issue.schema.json`](/schemas/revision-issue.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`revision-record.schema.json`](/schemas/revision-record.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`runtime-event.schema.json`](/schemas/runtime-event.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`submitted-task-result.schema.json`](/schemas/submitted-task-result.schema.json) | Agent Novel v0.1.1 参考 schema。 |
| [`workspace-shell.schema.json`](/schemas/workspace-shell.schema.json) | Agent Novel v0.1.1 参考 schema。 |

## 使用建议

- 导入项目时先校验 `novel-project.schema.json`。
- 启动 Agent 任务前校验 task 和 workspace shell。
- 保存 proposal、issue、feed item、export manifest 前做最小 schema 校验。
- Runtime 诊断和 feed 投影应优先对齐 DTO，而不是解析自然语言。
