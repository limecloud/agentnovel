---
title: Live Agent Runtime
description: 对齐 lime-novel 已实现单代理 live runtime 的契约。
---

# Live Agent Runtime

Agent Novel v0.1.1 以 `lime-novel` 已实现 runtime 为参考基线。

## Provider 模式

| provider | 语义 |
| --- | --- |
| `legacy` | 无模型配置时使用本地规则 runtime，仍可产生 proposal、issue、publish artifact。 |
| `anthropic` | 对齐 Claude / Anthropic messages + tool use 主链。 |
| `openai-compatible` | 对齐 OpenAI 兼容 chat completions + tool calling。 |

配置来自环境变量或桌面端“AI Agent 引擎”设置。保存后只影响新任务，运行中任务不被中断。

## 单代理循环

```text
resolve config
-> build system prompt
-> build user prompt
-> model completion
-> tool calls
-> tool results
-> model completion
-> submit_task_result
-> persist task / feed / diagnostics
```

## 结构化收尾

任务结束前必须调用 `submit_task_result`。自然语言回答不算完成。

`submit_task_result` 包含：

```ts
type SubmittedTaskResult = {
  status: 'completed' | 'failed' | 'waiting_approval'
  summary: string
  artifacts: SubmittedTaskArtifact[]
}
```

## 失败语义

实现 MUST 显式失败，不允许伪造结果：

- 模型超时。
- provider 返回无效格式。
- 超过最大模型轮次。
- 超过结构化输出重试次数。
- 工具执行错误且无法恢复。

## 并发约束

- 只读工具可并发。
- 写工具串行。
- 结构化输出工具必须单独调用。
- 写作/修订 proposal 通常以 `waiting_approval` 结束。
