---
title: Agent 标准生态
description: Agent Novel 与相邻 Agent 标准的关系。
---

# Agent 标准生态

Agent Novel 只负责小说工作台协议。它必须链接相邻标准，而不是吞掉相邻职责。

| 标准 | 职责 |
| --- | --- |
| [Agent Skills](https://agentskills.io/) | 可执行能力、工作流、脚本和工具使用方法。 |
| [Agent Knowledge](https://limecloud.github.io/agentknowledge/) | 来源知识、文档、wiki、编译上下文和安全加载。 |
| [Agent Runtime](https://limecloud.github.io/agentruntime/) | 执行事实、任务、工具、队列、审批、恢复和事件流。 |
| [Agent UI](https://limecloud.github.io/agentui/) | 交互表面、任务卡、提议、证据和控制点。 |
| [Agent Evidence](https://limecloud.github.io/agentevidence/) | 证据、溯源、评审、回放和导出记录。 |
| [Agent Policy](https://limecloud.github.io/agentpolicy/) | 权限、风险、审批、保留、豁免和策略痕迹。 |
| [Agent Artifact](https://limecloud.github.io/agentartifact/) | 持久交付物、版本、部件、预览、导出和交接包。 |
| [Agent Tool](https://limecloud.github.io/agenttool/) | 工具声明、调用、进度、结果、权限和审计引用。 |
| [Agent Context](https://limecloud.github.io/agentcontext/) | 上下文表面、选择、预算、注入、压缩和缺失上下文事实。 |

## 合成关系

```text
Novel project files
  + Knowledge references
  + Skill workflows
  + Runtime execution facts
  + Policy decisions
  + Evidence refs
  + Artifact exports
  -> UI projection for the author
```

Agent Novel 的成功标准是：作者资产可以长期存在，Agent 执行可以被审计，UI 可以随时重建，而任何一层都不冒充另一层的事实源。
