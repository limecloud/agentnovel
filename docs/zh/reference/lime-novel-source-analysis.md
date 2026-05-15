---
title: Lime Novel 来源分析
description: 从 lime-novel 当前项目抽象 Agent Novel v0.1 的事实来源。
---

# Lime Novel 来源分析

本页记录 Agent Novel v0.1 的主要来源。它不是 `lime-novel` 的实现文档，而是说明哪些当前事实被提升为标准语义。

## 产品事实来源

`lime-novel/docs/prd/lime-novel-electron-product-design.md` 提供了核心产品判断：

- Lime Novel 是独立的 AI Agent 小说桌面工作台，不是聊天侧栏。
- 核心原则是项目优先、正文优先、连续性优先、结果可回写、低打扰优先。
- 代理层包含项目总控、章节、设定、修订、发布、研究等角色。
- 技能不是提示词，而是受控能力单元。
- 子代理可以分叉，但不能污染主写作上下文。
- 长篇项目必须有记忆提炼和上下文压缩。

`lime-novel/docs/prd/lime-novel-ui-design.md` 提供了 UI 投影判断：

- 左侧小说工作面优先，右侧 AI 代理协作栏辅助。
- 右栏分建议视图和对话视图。
- 消息类型包括说明、证据、提议、任务和审批。
- AI 结果默认先提议，再应用。
- 证据必须可见，后台代理不能抢焦点。

`lime-novel/docs/prd/lime-novel-knowledge-base-design.md` 提供了知识层判断：

- 小说知识库不同于通用研究 wiki。
- 导入素材、编译知识、针对项目提问、健康检查和回写项目应形成闭环。
- 知识页、证据和回写需要在同一工作面协作。

## 技术事实来源

`lime-novel/docs/tech/architecture-overview.md` 提供六层架构：用户交互层、应用编排层、小说领域层、代理运行时层、基础设施层和桌面平台层。

`lime-novel/docs/tech/module-boundaries.md` 提供模块边界：`apps/desktop`、`packages/shared-kernel`、`packages/domain-novel`、`packages/application`、`packages/agent-runtime`、`packages/infrastructure`。

`lime-novel/docs/tech/data-model.md` 提供项目目录判断：

```text
my-novel/
  novel.json
  manuscript/
  canon/
  revisions/
  exports/
  references/
  .lime/
```

`lime-novel/docs/tech/agent-runtime.md` 提供当前 runtime 落地边界：

- `anthropic` 和 `openai-compatible` provider。
- 单代理 session loop。
- 工具调用编排。
- `submit_task_result` 结构化收尾。
- 与 Electron IPC、TaskEventDto、AgentFeed 协议兼容。
- 无模型配置时回退到 legacy 规则型 runtime。
- 当前未实现多代理、MCP、远端 worktree、插件市场和长期记忆压缩。

## 已提升为 Agent Novel v0.1 的标准语义

| Lime Novel 事实 | Agent Novel 抽象 |
| --- | --- |
| `novel.json` + 项目目录 | 项目包入口和文件事实源协议。 |
| `manuscript/` | 正文权威层。 |
| `canon/` | story bible 和设定事实层。 |
| `references/` | 来源和知识候选层。 |
| `revisions/` | issue、proposal、applied record 闭环。 |
| `exports/` | 发布产物和 manifest 层。 |
| `.lime/` | 运行支撑、缓存、索引、日志层。 |
| AgentFeed 右栏 | Agent UI 投影，不是事实源。 |
| live agent tools | Runtime 读写工具分层。 |
| proposal / canon candidate / revision issue | 可回写结果模型。 |

## 暂未提升为必需标准

以下能力被记录为 future work，不进入 v0.1 必需协议：

- 多代理协同。
- MCP 工具接入。
- 远端执行和 worktree。
- 动态插件发现与隔离运行。
- 长时记忆压缩与恢复。
- 云同步和多用户权限。
