---
title: 诊断与轨迹契约
description: Agent Novel 任务诊断、工具事件和失败记录。
---

# 诊断与轨迹契约

诊断用于解释“代理为什么这样做”，也用于恢复和调试 live runtime。

## Trace Entry

```ts
type AgentTraceEntry = {
  role: 'system' | 'user' | 'assistant' | 'tool'
  turnIndex: number
  content?: string
  toolCallId?: string
  toolName?: string
  toolCalls?: Array<{ id: string; name: string }>
  stopReason?: string
}
```

## Tool Event

```ts
type AgentToolEvent = {
  turnIndex: number
  toolCallId: string
  toolName: string
  status: 'requested' | 'rejected' | 'started' | 'completed' | 'failed'
  isConcurrencySafe: boolean
  progressLabel?: string
  error?: string
  isStructuredOutputTool?: boolean
}
```

## Failure

失败记录 SHOULD 包含：

- subtype：最大轮次、结构化输出重试耗尽、执行错误。
- detail：中文可读原因。
- providerCode：provider 原生错误码或分类。
- stopReason：模型停止原因。
- turnCount：轮次。
- usage：input/output tokens。

诊断可以展示在 Agent 侧栏，但不应暴露密钥、完整敏感来源或无关系统路径。
