---
title: 运行时事件契约
description: Agent Novel 推荐的小说语义事件族。
---

# 运行时事件契约

Agent Novel 不定义完整事件总线，但建议兼容 Agent Runtime 的实现使用稳定事件族表达小说语义。

## 基本 envelope

```json
{
  "eventId": "evt_01",
  "type": "novel.proposal.created",
  "taskId": "task_01",
  "projectId": "novel_01",
  "timestamp": "2026-05-15T12:00:00Z",
  "payload": {}
}
```

## 推荐事件族

| 事件 | 负载重点 |
| --- | --- |
| `novel.context.selected` | selected refs、omitted refs、budget、missing context。 |
| `novel.context.missing` | 缺失类型、目标、影响和建议动作。 |
| `novel.proposal.created` | proposal id、目标、风险、摘要。 |
| `novel.evidence.linked` | evidence ref、claim、target。 |
| `novel.approval.required` | action id、操作类型、风险、可选动作。 |
| `novel.asset.updated` | 路径、资产类型、来源 proposal、应用人。 |
| `novel.export.created` | export id、格式、artifact refs、检查结果。 |
| `novel.issue.detected` | issue id、类型、严重度、位置。 |

## 事件与文件事实的关系

事件记录“发生过什么”，文件记录“当前事实是什么”。事件可以解释文件变化，但不能替代 `manuscript/`、`canon/`、`revisions/` 和 `exports/`。

## 大结果

大段正文、完整差异或导出文件 SHOULD 存为 artifact 或项目文件，并在事件中使用 ref，而不是把大结果直接塞进事件 payload。
