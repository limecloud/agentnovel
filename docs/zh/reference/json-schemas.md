---
title: JSON Schemas
description: Agent Novel v0.1.2 参考 JSON Schema。
---

# JSON Schemas

Agent Novel v0.1.2 的 schema 用于 lint、导入校验、运行时诊断和互操作测试。schema 是参考契约，不禁止 `metadata` 或实现方扩展。

| Schema | 用途 |
| --- | --- |
| [`agent-feed-item.schema.json`](/schemas/agent-feed-item.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`agent-task.schema.json`](/schemas/agent-task.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`analysis-sample.schema.json`](/schemas/analysis-sample.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`canon-card.schema.json`](/schemas/canon-card.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`chapter-frontmatter.schema.json`](/schemas/chapter-frontmatter.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`export-manifest.schema.json`](/schemas/export-manifest.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`harness-profile.schema.json`](/schemas/harness-profile.schema.json) | Novel Harness Engine 项目配置。 |
| [`diagnostic-report.schema.json`](/schemas/diagnostic-report.schema.json) | 小说体检报告。 |
| [`impact-analysis.schema.json`](/schemas/impact-analysis.schema.json) | 结构改动冲击波分析。 |
| [`intent-plan.schema.json`](/schemas/intent-plan.schema.json) | 作者意图到 A/B/C 修订方案。 |
| [`knowledge-document.schema.json`](/schemas/knowledge-document.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`novel-project.schema.json`](/schemas/novel-project.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`proposal.schema.json`](/schemas/proposal.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`revision-issue.schema.json`](/schemas/revision-issue.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`revision-record.schema.json`](/schemas/revision-record.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`reader-feedback.schema.json`](/schemas/reader-feedback.schema.json) | 读者反馈聚合与结构映射。 |
| [`runtime-event.schema.json`](/schemas/runtime-event.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`submitted-task-result.schema.json`](/schemas/submitted-task-result.schema.json) | Agent Novel v0.1.2 参考 schema。 |
| [`timeline-iteration.schema.json`](/schemas/timeline-iteration.schema.json) | 发布后追加式修复计划。 |
| [`workspace-shell.schema.json`](/schemas/workspace-shell.schema.json) | Agent Novel v0.1.2 参考 schema。 |

## 使用建议

- 导入项目时先校验 `novel-project.schema.json`。
- 启动 Agent 任务前校验 task 和 workspace shell。
- 保存 proposal、issue、feed item、export manifest 前做最小 schema 校验。
- Runtime 诊断和 feed 投影应优先对齐 DTO，而不是解析自然语言。
- Harness 相关 report、impact、intent plan 和 reader feedback 应作为结构化产物保存，不能只存在于聊天文本。
