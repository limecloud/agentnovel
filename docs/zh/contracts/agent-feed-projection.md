---
title: Agent Feed 投影契约
description: 右侧 AI 协作栏如何投影任务、证据、提议、问题和审批。
---

# Agent Feed 投影契约

Agent Feed 是右侧建议视图和对话视图共享的事实源。它不是聊天日志，也不是项目正文事实源。

## Feed Item

```ts
type AgentFeedItem = {
  itemId: string
  taskId: string
  kind: 'status' | 'evidence' | 'proposal' | 'issue' | 'approval'
  title: string
  body: string
  supportingLabel?: string
  severity?: 'low' | 'medium' | 'high'
  proposalId?: string
  approvalId?: string
  approvalStatus?: 'pending' | 'accepted' | 'rejected'
  linkedIssueId?: string
  diffPreview?: { before: string; after: string }
  actions?: FeedAction[]
  createdAt: string
}
```

## 视图投影

| 视图 | 投影逻辑 |
| --- | --- |
| 当前代理 | 显示主代理、风险、记忆来源、后台任务、运行轨迹。 |
| 建议 | 优先展示 proposal、issue、evidence、approval，并做去重。 |
| 对话 | 按时间展示消息和结构化卡片，保留输入框。 |

## Action

Feed action 支持：

- prompt：继续追问或要求再生成一版。
- apply-proposal：应用正文提议。
- reject-proposal：拒绝正文提议。
- apply-publish-synopsis：回填发布简介。
- apply-publish-notes：回填发布备注。
- open-publish-confirm：打开发布最终确认。

Action 是受控入口，不允许卡片携带任意代码或任意工具调用。
