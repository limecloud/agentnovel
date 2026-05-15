---
layout: home
title: Agent Novel
description: 面向 Agent 的长篇小说工作台标准。

hero:
  name: Agent Novel
  text: 面向 Agent 的长篇小说工作台标准。
  tagline: "把小说正文、设定、修订、发布、证据和代理任务拆成可维护、可审计、可回写的协议。"
  actions:
    - theme: brand
      text: 阅读规范
      link: /zh/specification
    - theme: alt
      text: 作者快速开始
      link: /zh/authoring/quickstart
    - theme: alt
      text: LLM 完整上下文
      link: ../llms-full.txt

features:
  - title: 作品优先
    details: "正文、设定、修订、导出是作品事实源；对话只是交互方式，不是小说资产模型。"
  - title: 代理可协作
    details: "项目总控、章节、设定、知识、拆书、修订、发布代理有清晰任务边界。"
  - title: 提议先行
    details: "AI 结果默认先形成 proposal、evidence 和 approval，再由作者显式应用。"
  - title: 本地优先
    details: "作者资产保存在可见文件系统中，索引、缓存、embedding 和日志尽量可重建。"
  - title: 上下文可追踪
    details: "每次模型调用都能解释选入、遗漏、压缩和缺失的章节、设定、参考与修订事实。"
  - title: 生态协同
    details: "Novel 只定义小说工作台协议，与 Runtime、UI、Knowledge、Artifact、Evidence、Policy 分层。"
---

## Agent Novel 定义什么

| 契约 | 回答的问题 |
| --- | --- |
| 项目包 | 一个长篇小说项目应该怎样存储、迁移和被 Agent 读取？ |
| 作品事实源 | 哪些文件是正文、设定、修订、发布的权威来源？ |
| 上下文解析 | 每次任务如何选择、压缩、注入和追踪小说上下文？ |
| 代理任务 | 不同写作代理可以读取什么、提出什么、回写什么？ |
| 审批闭环 | 哪些结果必须人工确认，如何记录风险和证据？ |
| 运行时事件 | 如何记录 proposal、evidence、approval、asset update 和 export？ |
| UI 投影 | 工作台怎样展示任务、提议、证据、差异和导出？ |
| 生态互操作 | Novel 与 Skills、Knowledge、Runtime、UI 等标准如何分清边界？ |

## 快速入口

- [什么是 Agent Novel？](./what-is-agent-novel.md)
- [最新规范](./specification.md)
- [作者快速开始](./authoring/quickstart.md)
- [客户端运行时标准](./client-implementation/runtime-standard.md)
- [项目包协议](./contracts/project-package.md)
- [上下文解析](./contracts/context-resolution.md)
- [代理工作流](./contracts/agent-workflows.md)
- [运行时事件](./contracts/runtime-events.md)
- [评审与审批](./contracts/review-and-approval.md)
- [产物与导出](./contracts/artifact-export.md)
- [安全与策略](./contracts/security-policy.md)
- [JSON Schemas](./reference/json-schemas.md)
- [完整项目示例](./examples/complete-project.md)

## 面向 AI 客户端

- [llms.txt](../llms.txt)：简洁导航索引。
- [llms-full.txt](../llms-full.txt)：当前核心文档合集。
- [llm.txt](../llm.txt) 与 [llm-full.txt](../llm-full.txt)：兼容别名。
