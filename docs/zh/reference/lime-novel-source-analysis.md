---
title: Lime Novel 来源分析
description: Agent Novel v0.1.1 从 lime-novel 真实文档和实现中抽象出的标准事实。
---

# Lime Novel 来源分析

v0.1.1 重写时不再只参考目录，而是读取了 `lime-novel` 的 PRD、技术文档、DTO、domain model、runtime tools、renderer surfaces 和 runtime smoke。

## 产品文档事实

`docs/prd/lime-novel-electron-product-design.md` 提供：

- 目标不是帮写一段，而是陪作者持续写完、修完、发出去。
- 代理不是聊天侧栏，而是项目总控、章节、设定、修订、发布、研究的中台。
- 技能是受控能力单元，不是提示词。
- 子代理可以分叉，但不能污染主写作上下文。
- 长篇项目需要工作记忆、章节记忆、项目记忆。
- 能力按场景动态激活。
- 工具编排、任务面板、权限边界是一等能力。

`docs/prd/lime-novel-knowledge-base-design.md` 提供：

- 小说知识库是知识编译层，不是通用 wiki。
- 核心目录：raw、compiled、canon、manuscript、outputs。
- 工作流：导入素材、编译知识、项目问答、健康检查、回写项目。
- 知识页字段：id、type、title、status、sources、related、updatedAt。

`docs/prd/lime-novel-ui-design.md` 提供：

- UI 结构：左侧小说工作面 + 右侧 AI 代理协作栏。
- 右栏双态：建议和对话共享任务、证据、提议、审批状态。
- 工作面：首页、写作、设定、修订、发布。
- 结果类型：任务卡、证据卡、提议块、差异卡、审批条、风险卡。

## 技术文档事实

`docs/tech/architecture-overview.md` 提供六层架构和双中枢：作品中枢与代理中枢。

`docs/tech/data-model.md` 提供 Series、Project、Volume、Chapter、Scene、CanonCard、RevisionIssue、RevisionProposal、ApprovalRequest 和 SQLite 表建议。

`docs/tech/agent-runtime.md` 提供当前已实现 runtime：provider、单代理 loop、工具调用、结构化结果、诊断持久化和未实现边界。

`docs/tech/state-architecture.md` 提供三层状态：项目资源态、代理任务态、局部 UI 态，以及请求流/事件流分离。

`docs/tech/desktop-architecture.md` 提供 Electron Main、Preload、Renderer、Background Workers 的安全边界。

## 代码事实

`packages/domain-novel/src/index.ts` 提供标准 surface、agent type、task status、risk level 和领域类型。

`packages/application/src/dto/index.ts` 提供 UI/IPC DTO：AgentFeedItem、AgentTask、Diagnostics、KnowledgeDocument、AnalysisSample、ExportHistory 等。

`packages/agent-runtime/src/live-agent-prompts.ts` 提供各 surface 的真实提示约束。

`packages/agent-runtime/src/live-agent-workspace-tools.ts`、`live-agent-persistence-tools.ts`、`live-agent-result-tool.ts` 提供真实工具集合。

`apps/desktop/src/renderer/src/features/*` 提供工作面实现：写作、知识、拆书、设定、修订、发布、AgentSidebar。

`scripts/runtime-smoke.mjs` 证明项目、章节保存、写作 proposal、设定候选、修订问题、知识问答、知识导入、Markdown/EPUB 导出和诊断持久化已经形成闭环。

## v0.1.1 提升结果

本标准将上述事实提升为：

- 工作面标准。
- 项目包标准。
- 知识编译标准。
- 章节/场景/记忆标准。
- 运行时工具标准。
- Agent Feed 投影标准。
- 诊断标准。
- 发布导出标准。
