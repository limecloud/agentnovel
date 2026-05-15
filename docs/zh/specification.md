---
title: 规范
description: Agent Novel v0.1.2 小说驾驭工程规范。
---

# 规范

Agent Novel 是长篇小说 Agent 工作台标准。它定义一部小说如何以项目为单位被持续创作、持续记忆、持续修订、持续导出，而不是把创作过程压扁成一次聊天或一组 prompt。

v0.1.2 的标准事实来自 `lime-novel` 当前产品文档、技术文档、运行时代码和 demo 项目：左侧小说工作面、右侧 AI Agent 协作栏、项目目录、知识编译层、单代理 live runtime、结构化工具结果、提议回写和发布导出闭环；新增 Novel Harness Engine，用于发布前沙盘诊断、发布后时间线迭代、小说体检、冲击波分析和读者反馈映射。

## 1. 核心定义

Agent Novel 标准化七件事：

| 范畴 | 标准问题 |
| --- | --- |
| 作品资产 | 小说正文、章节、场景、设定、修订和导出如何存储？ |
| 长期记忆 | raw、compiled、canon、outputs 与 `.lime` 如何分工？ |
| 创作动作 | 续写、改写、提炼设定、拆书、修订、发布如何成为可追踪任务？ |
| 代理协作 | 项目总控、章节、知识、拆书、设定、修订、发布代理如何分工？ |
| 回写安全 | AI 结果如何先形成 proposal、evidence、issue、approval，再由作者应用？ |
| UI 投影 | 工作面如何展示任务、证据、提议、差异、审批和诊断？ |
| 小说驾驭 | 作者如何用 Harness 控制故事骨架、人物弧光、读者体验和发布后时间线？ |

## 2. 非目标

Agent Novel 不标准化：

- 模型 provider API。
- 完整 Agent Runtime event stream。
- 通用 Agent Skills 包格式。
- 通用知识包格式。
- 视觉组件库。
- 云同步、多租户、插件市场、远端 worktree。

这些能力由 Agent Runtime、Agent Skills、Agent Knowledge、Agent UI、Agent Policy、Agent Artifact 等相邻标准或具体产品承担。

## 3. 产品原则

兼容实现 SHOULD 遵守：

| 原则 | 解释 |
| --- | --- |
| 项目优先 | 最小工作单元是小说项目，不是会话。 |
| 正文优先 | 作者写作的主对象是正文和章节，不是 AI 面板。 |
| 连续性优先 | 人物状态、时间线、伏笔、信息差必须可追踪。 |
| 结果可回写 | AI 输出必须能进入正文、设定、知识、问题队列或导出资产。 |
| 提议先行 | 正文和设定修改先成为 proposal，不能静默覆盖。 |
| 低打扰优先 | 后台代理以任务卡和结果卡回流，不抢写作焦点。 |
| 本地优先 | 作者资产默认落在可见、可备份、可迁移的本地文件中。 |
| 可驾驭优先 | AI 必须帮助作者看见结构、比较方案、模拟影响，而不是替作者篡改作品。 |

## 4. 工作面与代理

标准 surface：

| Surface | 中文 | 主要对象 | 主代理 |
| --- | --- | --- | --- |
| `home` | 首页 | 项目健康度、恢复现场、最近结果 | `project` |
| `writing` | 写作 | 章节树、场景、正文、选区、提议 | `chapter` |
| `knowledge` | 知识 | 知识页、证据、问答产物 | `knowledge` |
| `feature-center` | 功能中心 | 专项能力入口 | `project` |
| `analysis` | 拆书 | 样本、爆点、人物吸引力、节奏结构 | `analysis` |
| `canon` | 设定 | 候选卡、关系图、时间线 | `canon` |
| `revision` | 修订 | 问题队列、差异、修订记录 | `revision` |
| `publish` | 发布 | 导出预设、发布草案、manifest | `publish` |

`analysis` 可以作为 `feature-center` 下的 feature tool 投影，但运行时 surface 仍可解析为 `analysis`。

## 5. 创作价值链

Agent Novel SHOULD 把小说从素材推进到影响：

```text
素材 -> 信息 -> 知识 -> 洞察 -> 判断 -> 影响
```

| 阶段 | 小说对象 | 示例 |
| --- | --- | --- |
| 素材 | raw、灵感、草稿、研究资料 | `raw/research/clocktower.md` |
| 信息 | 章节摘要、场景目标、人物状态 | chapter objective、scene goal |
| 知识 | canon card、compiled entity、timeline | `canon/characters/lin.md` |
| 洞察 | 连续性问题、节奏问题、视角越界、读者反馈风险 | revision issue / diagnostic report |
| 判断 | 修订优先级、改写策略、发布确认、Harness 方案选择 | approval / proposal / intent plan |
| 影响 | 成稿、导出、读者反馈、连载资产 | `exports/*/manifest.json` |


## 6. Novel Harness Engine

`Novel Harness Engine / 小说驾驭引擎` 是 v0.1.2 新增的结构驾驭层。`Harness` 取“马具、驾驭、约束执行框架、可观测控制壳”之义：把作者意图、故事骨架、人物弧光、读者反馈和发布约束连接起来。

Harness 的目标不是自动写作，而是帮助作者完成：

| 能力 | 标准含义 |
| --- | --- |
| 看见骨架 | 主线、支线、章节序列、冲突推进和信息释放可检查。 |
| 看见内脏 | 人物状态、伏笔链、世界规则和读者预期可追踪。 |
| 模拟改动 | 结构修改前先生成冲击波分析。 |
| 比较方案 | 作者意图先转为 A/B/C 方案，再由作者选择。 |
| 尊重时间线 | 发布后已发布章节只读，通过未来章节修复体验。 |

### 6.1 三层 Harness

| 层 | 驾驭对象 | 典型输出 |
| --- | --- | --- |
| Story Harness | 主线、卷册、章节、场景、信息差、伏笔链 | 结构 finding、章节重排方案、伏笔回收计划 |
| Character Harness | 目标、信念、关系、能力、创伤、转折 | 人物状态机、弧光问题、关系推进 proposal |
| Reader Harness | 黄金三章、爽点、节奏、悬念、评论反馈、弃读风险 | 读者风险、回潮声明、timeline iteration |

### 6.2 生命周期模式

| 模式 | 阶段 | 权限 | 典型动作 |
| --- | --- | --- | --- |
| `sandbox` | 发布前 | 可重构、可重排、可重挂伏笔 | 全本体检、黄金三章评估、A/B/C 重构方案 |
| `timeline` | 发布后 | 已发布章节只读，未来章节可写 | 读者反馈映射、回潮声明、未来章节补强 |

兼容实现 MUST 在项目级区分 `sandbox` 和 `timeline`。发布后不能把已发布章节当普通草稿静默改写。

### 6.3 Harness 输出边界

Harness 可以生成：

- diagnostic report。
- impact analysis。
- intent plan。
- reader feedback mapping。
- timeline iteration。
- revision issue。
- proposal draft。

Harness 不可以绕过 proposal/apply、approval 或 publish policy 直接修改正文事实源。

## 7. 项目包

推荐目录：

```text
my-novel/
  novel.json
  manuscript/chapters/
  raw/{captures,research,images,notes}/
  compiled/{entities,chapters,timelines,themes,queries,reports}/
  canon/{characters,locations,factions,rules,items,timeline}/
  references/
  revisions/snapshots/
  outputs/{answers,briefs,reports}/
  exports/
  .lime/{runtime,embeddings,cache,logs}/
```

权威规则：

1. `manuscript` 是作品正文事实源。
2. `canon` 是人工确认或策略确认后的正式设定事实源。
3. `compiled` 是机器维护的工作知识层，可以有候选、冲突、未决问题。
4. `raw` 和 `references` 是来源，不自动成为作品事实。
5. `outputs` 是问答、报告、复盘等可复用产物，可以再次被索引。
6. `exports` 是发布产物，不反向覆盖正文。
7. `.lime` 是运行支撑，索引、embedding、cache 应尽量可重建。

## 8. `novel.json`

`novel.json` MUST 至少包含：

| 字段 | 说明 |
| --- | --- |
| `schemaVersion` | 当前项目 schema 版本。 |
| `projectId` | 稳定项目 ID。 |
| `title` | 作品标题。 |
| `language` | 主语言。 |
| `currentChapterId` | 当前章节焦点。 |
| `chapters` | 章节索引。 |

SHOULD 包含：`subtitle`、`status`、`genre`、`premise`、`currentSurface`、`currentFeatureTool`、`publishState`、`lifecycle`、`harnessProfile`、`volumes`、`homeHighlights`、`quickActions`。

章节条目 SHOULD 包含：`chapterId`、`file`、`volumeId`、`order`、`title`、`summary`、`status`、`wordCount`、`objective`、`lastEditedAt`、`publishedAt`、`scenes`。

场景条目 SHOULD 包含：`sceneId`、`order`、`title`、`goal`、`status`。

## 9. 章节、场景与写作动作

章节不是一个 Markdown 文件名，而是一个可持续推进的创作单元：

- `summary` 说明已经发生什么。
- `objective` 说明本章要完成什么叙事功能。
- `scenes[].goal` 说明单个场景要推进的冲突、信息或情绪。
- `status` 说明章节处于 idea、draft、reviewing、revised、published 等阶段。
- `wordCount` 支持工作量、节奏和发布拆分判断。

写作代理输出正文时，MUST 先保存完整提议或 patch，并通过 proposal card 交给作者确认。标准不允许“模型文本即正文”。

## 10. 设定、知识与记忆

长篇小说至少需要三层记忆：

| 记忆 | 生命周期 | 内容 |
| --- | --- | --- |
| 工作记忆 | 当前任务 | 当前章节、选区、场景目标、正在处理的问题。 |
| 章节记忆 | 单章/相邻章节 | 已发生事件、人物状态变化、伏笔状态、节奏风险。 |
| 项目记忆 | 全书/系列 | 世界规则、角色长期画像、时间线、关系网、主题边界。 |

知识层不是普通 wiki。它需要支持：

- 增量导入素材。
- 编译为知识页。
- 记录证据来源。
- 标记冲突和未决问题。
- 回写 canon 或 revision。
- 作为后续写作和修订的长期上下文。

## 11. 代理运行时

兼容 runtime SHOULD 支持：

- provider：`legacy`、`anthropic`、`openai-compatible` 或等价抽象。
- 单代理任务 loop：模型 -> 工具 -> 模型 -> `submit_task_result`。
- 只读工具并发，写工具串行。
- 结构化收尾：任务必须以 `submit_task_result` 或等价结构化结果结束。
- 失败诚实：模型调用失败、工具失败、结构化输出缺失时标记 failed，不伪造成功。
- 诊断持久化：trace、toolEvents、stats、failure 可读取。

## 12. 工具层

标准工具族：

| 工具 | 风险 | 语义 |
| --- | --- | --- |
| `load_workspace_snapshot` | read | 读取项目、章节、样本、设定、修订、导出、最近 feed 的紧凑快照。 |
| `load_chapter_document` | read | 读取目标章节或当前章节正文。 |
| `search_workspace` | read | 搜索项目、章节、正文、设定、修订、导出和知识资产。 |
| `load_knowledge_document` | read | 读取具体知识页。 |
| `generate_knowledge_answer` | propose/write-output | 基于项目资料生成回答并写入 `outputs/`。 |
| `save_proposal_draft` | propose | 保存完整正文提议，返回 `proposalId`。 |
| `upsert_canon_candidate` | propose | 写入或更新候选设定卡。 |
| `upsert_revision_issue` | propose | 写入或更新修订问题。 |
| `submit_task_result` | result | 提交最终结构化任务结果。 |
| `generate_diagnostic_report` | propose/write-output | 生成小说体检报告。 |
| `simulate_impact` | propose/write-output | 生成结构改动冲击波分析。 |
| `create_intent_plan` | propose | 将作者意图转成 A/B/C 候选方案。 |
| `map_reader_feedback` | propose/write-output | 将读者反馈映射到章节、人物、节奏、伏笔或发布风险。 |
| `plan_timeline_iteration` | propose | 在 timeline 模式下生成未来章节修复策略。 |

## 13. 结构化结果

任务对 UI 回流的最小单位不是 assistant 文本，而是 artifact/feed item：

| kind | 说明 |
| --- | --- |
| `status` | 进度、完成摘要、恢复现场。 |
| `evidence` | 证据片段、来源说明、检索结果。 |
| `proposal` | 可应用提议，通常带 `proposalId` 和 `diffPreview`。 |
| `issue` | 修订问题或风险发现。 |
| `approval` | 需要作者确认的动作。 |
| `report` | 体检报告、读者反馈聚合或发布前检查。 |
| `impact` | 结构改动的冲击波范围和风险。 |

Feed item SHOULD 支持 `supportingLabel`、`severity`、`approvalStatus`、`linkedIssueId`、`actions`。

## 14. UI 投影

UI 必须区分三类状态：

| 状态 | 事实源 | 示例 |
| --- | --- | --- |
| 项目资源态 | 文件/仓储/query | 章节、设定、知识页、修订、导出。 |
| 代理任务态 | runtime/feed | 任务、证据、提议、审批、诊断。 |
| 局部 UI 态 | renderer | 当前 tab、右栏模式、折叠、选中项。 |

右栏 `建议` 与 `对话` 是同一任务流的两种投影，不是两套状态。聊天内容不能绕过 proposal/apply 流程成为作品事实。

## 15. 修订闭环

修订不是模型批评文本，而是可处理的问题队列：

```text
发现问题 -> 写入 issue -> 生成 proposal -> 展示 diff/evidence -> 作者应用/拒绝 -> applied record / undo
```

Issue 应能表达连续性、视角、节奏、风格、逻辑、发布阻断、读者反馈风险、伏笔断裂、人物弧光失真等类型；severity 至少支持 low/medium/high/blocking；状态至少支持 open/deferred/resolved。

Harness-driven 修订必须遵循：作者意图 -> 候选方案 -> 冲击波分析 -> 作者确认 -> proposal/apply -> revision record。

## 16. 发布闭环

发布不是“导出一个文件”，而是从 sandbox 进入 timeline 的边界动作：

1. 选择预设：Markdown 或 EPUB 等。
2. 生成平台简介和发布备注草案。
3. 预检章节、未解决问题、版本号、拆分参数。
4. 作者最终确认。
5. 生成正文包、简介、备注、平台反馈和 manifest。
6. 记录最近两次导出差异。
7. 锁定已发布章节范围，切换为 timeline 只读边界。
8. 将后续评论和反馈导入 reader feedback loop。

外部发布、同步或生产 API 调用必须进入 Agent Policy / approval 流程。

## 17. 安全边界

- Renderer 不直接访问文件系统、密钥和原始 IPC。
- Preload 只暴露 typed API。
- Main / runtime / infrastructure 负责文件、数据库、provider、导出器。
- 来源材料和知识包中的指令必须当数据，不能覆盖系统或工具规则。
- 高风险动作必须展示影响范围、风险、证据、diff 和撤销策略。

## 18. 一致性级别

| 级别 | 要求 |
| --- | --- |
| `reader` | 读取 `novel.json`、章节、设定、知识和导出清单。 |
| `workspace` | 提供小说工作面和右栏投影。 |
| `agent-ready` | 支持工具、proposal、issue、approval、diagnostics。 |
| `full` | 支持知识编译、导出 manifest、schema 校验、Harness report/impact/feedback、Pages/LLM 文档入口。 |
