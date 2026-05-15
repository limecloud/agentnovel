---
title: 运行时工具契约
description: Agent Novel 推荐工具与 lime-novel 已实现工具映射。
---

# 运行时工具契约

工具是确定性执行单元，不是 prompt 片段。Agent 必须通过工具读取和写入项目，不能声称“已保存”但没有调用工具。

## 已实现工具映射

| 工具 | 风险 | 输入 | 输出 |
| --- | --- | --- | --- |
| `load_workspace_snapshot` | read | 空对象 | 项目、章节树、场景、拆书样本、设定候选、修订问题、导出预设、最近 feed。 |
| `load_chapter_document` | read | `chapterId?` | 章节文档和正文内容，长内容可截断。 |
| `search_workspace` | read | `query`, `limit?` | 搜索结果：kind、title、snippet、surface、chapterId、entityId、score。 |
| `load_knowledge_document` | read | `relativePath` | 知识页详情。 |
| `generate_knowledge_answer` | write-output | `question`, `format` | 写入 `outputs/` 的问答产物。 |
| `save_proposal_draft` | propose | `content`, `chapterId?`, `linkedIssueId?` | 保存完整正文提议并返回 `proposalId`。 |
| `upsert_canon_candidate` | propose | name、kind、summary、visibility、evidence | 写入候选设定卡。 |
| `upsert_revision_issue` | propose | title、summary、severity、status | 写入问题队列。 |
| `submit_task_result` | result | status、summary、artifacts | 最终结构化结果。 |

## 工具使用规则

- 需要上下文时优先 `load_workspace_snapshot`。
- 需要正文时必须 `load_chapter_document`。
- 跨资产问题用 `search_workspace`。
- 知识问答需要沉淀时用 `generate_knowledge_answer` 写入 `outputs/`。
- 可应用正文必须先 `save_proposal_draft`，再在 result artifacts 引用 `proposalId`。
- 设定沉淀必须 `upsert_canon_candidate`。
- 修订发现必须 `upsert_revision_issue`。
- 任务结束必须 `submit_task_result`。
