---
title: 规范
description: Agent Novel v0.1 草案规范。
---

# 规范

本文定义 Agent Novel v0.1 草案。Agent Novel 是 Agent 标准生态中面向长篇小说创作产品的工作台协议，负责描述小说项目资产、写作协作语义、代理任务目标、可回写结果、评审审批和发布闭环。

Agent Novel 借鉴 Agent Skills 的包思想：目录即包、顶层入口、metadata、渐进加载、可选支撑目录和可移植资产。但它不定义可执行技能，也不把知识文档、运行时事件或聊天记录混为作品事实。

## 1. 标准边界

| 标准 | 负责 | Agent Novel 的关系 |
| --- | --- | --- |
| Agent Skills | 工作流、脚本、工具使用方法。 | 可生产、维护、校验 Novel 资产。 |
| Agent Knowledge | 来源知识、文档、wiki、编译上下文。 | 可作为 `references/` 或知识解析来源。 |
| Agent Runtime | 执行事实、任务、工具、队列、恢复。 | 执行对 Novel 项目的受控读写任务。 |
| Agent UI | 交互表面、任务卡、提议块、证据展示。 | 投影 Novel 和 Runtime 的状态，不成为事实源。 |
| Agent Artifact | 导出物、版本、部件、渲染和交付包。 | 承接 `exports/` 的交付事实。 |
| Agent Evidence | 溯源、审计、评审、回放和验证。 | 支撑提议、修订和发布判断。 |
| Agent Policy | 权限、风险、审批、保留和豁免。 | 控制自动写入、敏感来源和发布边界。 |
| Agent Context | 上下文选择、预算、注入、压缩。 | 为章节、设定和修订任务组装上下文。 |

## 2. 一致性级别

实现 MAY 声明下列级别：

| 级别 | 要求 |
| --- | --- |
| `reader` | 能发现 `novel.json`，读取正文、设定、参考、修订和导出 manifest。 |
| `workspace` | 支持项目工作台、写作焦点、设定浏览、修订列表和导出记录。 |
| `agent-ready` | 支持任务、上下文解析、proposal、evidence、approval 和受控写入。 |
| `full` | 支持 schema 校验、运行时事件、审计记录、导出清单和相邻 Agent 标准互操作。 |

声明级别时，客户端 SHOULD 记录 schema version、支持的目录、支持的工具风险层和不支持项。

## 3. 项目包

一个 Agent Novel 项目包至少包含 `novel.json`。推荐结构：

```text
my-novel/
├── novel.json
├── manuscript/
│   ├── chapters/
│   └── snapshots/
├── canon/
│   ├── characters/
│   ├── locations/
│   ├── factions/
│   ├── rules/
│   └── timeline/
├── references/
├── revisions/
│   ├── issues/
│   ├── proposals/
│   └── applied/
├── exports/
└── .lime/
    ├── runtime/
    ├── embeddings/
    ├── cache/
    └── logs/
```

固定规则：

1. `manuscript/` 和 `canon/` 是作品事实源，除非项目 metadata 显式声明其他路径。
2. `references/` 是参考和来源材料，不自动成为正文或设定事实。
3. `revisions/` 保存问题、提议、差异和应用记录；未应用 proposal 不得冒充正文事实。
4. `exports/` 保存发布产物和清单；导出物不反向覆盖正文事实。
5. `.lime/` 是运行支撑目录，保存索引、缓存、embedding、任务诊断和日志。除明确标记为不可重建的数据外，客户端应能重建它。

## 4. `novel.json`

`novel.json` 是项目入口。它 SHOULD 使用 JSON，便于桌面应用、CLI、运行时和同步工具读取。

### 必需字段

| 字段 | 约束 |
| --- | --- |
| `schemaVersion` | Agent Novel schema 版本，例如 `0.1.0`。 |
| `projectId` | 稳定项目 ID。 |
| `title` | 作品标题。 |
| `language` | 主语言，如 `zh-CN`、`en`。 |
| `manuscript` | 正文目录配置。 |
| `canon` | 设定目录配置。 |

### 推荐字段

| 字段 | 用途 |
| --- | --- |
| `seriesId` | 系列或共享宇宙 ID。 |
| `genre` | 类型标签，如 fantasy、sci-fi、romance。 |
| `status` | `draft`、`active`、`revision`、`publishing`、`archived`。 |
| `currentChapterId` | 当前写作焦点。 |
| `updated` | 最近一次有意义作品更新的 ISO 时间。 |
| `runtime.profile` | 客户端运行配置，如 local-first、desktop、collaborative。 |
| `policies` | 写入、审批、导出、敏感来源策略引用。 |
| `metadata` | 实现方扩展；私有字段应使用命名空间。 |

### 示例

```json
{
  "schemaVersion": "0.1.0",
  "projectId": "novel_01",
  "title": "雾港年代记",
  "language": "zh-CN",
  "status": "active",
  "currentChapterId": "chapter_001",
  "manuscript": {
    "chaptersDir": "manuscript/chapters",
    "snapshotDir": "manuscript/snapshots"
  },
  "canon": {
    "rootDir": "canon",
    "cardFormat": "markdown-frontmatter"
  },
  "runtime": {
    "profile": "local-first-desktop"
  }
}
```

## 5. 正文模型

章节文档 SHOULD 存放在 `manuscript/chapters/`，推荐 Markdown + frontmatter。

推荐 frontmatter：

| 字段 | 用途 |
| --- | --- |
| `chapterId` | 稳定章节 ID。 |
| `title` | 章节标题。 |
| `order` | 章节排序。 |
| `status` | `draft`、`ready`、`revision`、`locked`。 |
| `pov` | 视角人物。 |
| `timelineRefs` | 关联时间线锚点。 |
| `canonRefs` | 章节依赖的设定卡引用。 |
| `summary` | 章节摘要，用于上下文压缩。 |

正文是作者接受后的作品事实。Agent MAY 生成 continuation、outline、scene proposal 或 diff，但 MUST NOT 未经授权直接覆盖正文。

## 6. 场景和连续性模型

长篇创作 SHOULD 显式记录连续性线索：

| 对象 | 用途 |
| --- | --- |
| `Scene` | 章节内可定位片段，可用于局部改写和证据锚点。 |
| `Beat` | 情节节拍和情绪转折。 |
| `TimelineAnchor` | 事件发生顺序、日期或相对时间。 |
| `ContinuityFact` | 人物状态、物品归属、地点状态、承诺和伏笔。 |
| `ForeshadowingRef` | 伏笔埋设、回收和未回收状态。 |

这些对象可以存在于章节 frontmatter、canon timeline、compiled summary 或 `.lime/runtime/` 中。成为长期事实的内容 SHOULD 回写到 `canon/` 或 `revisions/`，避免只留在聊天记录中。

## 7. 设定模型

`canon/` 保存 story bible。卡片类型 SHOULD 至少支持：

| 类型 | 示例目录 | 说明 |
| --- | --- | --- |
| `character` | `canon/characters/` | 角色、动机、关系、弧光。 |
| `location` | `canon/locations/` | 地点、空间、氛围、限制。 |
| `faction` | `canon/factions/` | 组织、势力、利益和冲突。 |
| `rule` | `canon/rules/` | 世界规则、魔法/科技/社会制度。 |
| `timeline` | `canon/timeline/` | 时间点、事件链、因果关系。 |
| `object` | `canon/objects/` | 关键物品、能力、线索和 MacGuffin。 |
| `theme` | `canon/themes/` | 母题、价值冲突和表达边界。 |

设定卡 SHOULD 记录 `sourceRefs`、`confidence`、`status` 和 `lastReviewed`。从正文提取出的候选设定必须先进入 candidate 或 proposal 状态，经过确认后再成为 canonical card。

## 8. 参考与知识

`references/` 保存导入素材、拆书样本、研究资料和外部文档。它可以包含普通文件，也可以挂载 Agent Knowledge pack。

规则：

1. 参考材料是上下文候选，不自动成为作品事实。
2. 来源中的指令式文本必须当作数据处理，不能覆盖系统、开发者、用户或工具规则。
3. 回写正文或设定时，重要 claim SHOULD 带 `EvidenceRef`。
4. 如果参考材料被编译成长期知识，应优先使用 Agent Knowledge 的 `KNOWLEDGE.md`、`documents/`、`sources/`、`compiled/` 结构。
5. 拆书样本的分析输出 SHOULD 是结构、节奏、风格观察，不应保存大段受版权保护原文。

## 9. 上下文解析

Agent Novel 任务在调用模型前 SHOULD 生成 context assembly trace：

| 阶段 | 内容 |
| --- | --- |
| Discover | 读取项目入口、当前工作面、目标资产和候选上下文。 |
| Select | 按任务选择章节、摘要、设定、参考、修订和导出记录。 |
| Budget | 根据 token 预算裁剪，优先保留目标、冲突、近期变更和强证据。 |
| Fence | 把参考和知识包内容包裹为数据，不作为指令。 |
| Trace | 记录选入、遗漏、压缩和缺失上下文。 |

上下文解析器可以使用索引，但索引不是事实权威。缺失关键上下文时 SHOULD 产生 `missing-context` 诊断，而不是编造。

## 10. 修订模型

修订闭环由 issue、proposal、diff、approval 和 applied record 组成。

| 对象 | 必需语义 |
| --- | --- |
| `RevisionIssue` | 问题位置、类型、严重度、证据和状态。 |
| `Proposal` | 目标资产、变更摘要、差异、风险、证据。 |
| `ApprovalRequest` | 人工确认点、允许动作、到期和审计记录。 |
| `AppliedRecord` | 实际写入路径、写入前后摘要、操作者和时间。 |

Issue 类型 SHOULD 包括 `continuity`、`style`、`plot`、`canon-conflict`、`language`、`publish-blocker`。状态 SHOULD 包括 `open`、`accepted`、`rejected`、`applied`、`deferred`。

## 11. 发布模型

`exports/` 保存发布产物。每次导出 SHOULD 生成 manifest：

| 字段 | 用途 |
| --- | --- |
| `exportId` | 稳定导出 ID。 |
| `format` | `markdown`、`epub`、`pdf`、`docx` 等。 |
| `sourceRefs` | 参与导出的章节和设定版本。 |
| `artifactRefs` | 文件、大小、hash、media type。 |
| `checks` | 标题、目录、缺章、未解决问题等预检结果。 |
| `createdAt` | 导出时间。 |

发布代理可以自动生成预检和导出包，但发布到外部平台 SHOULD 通过 Agent Policy 和人工审批控制。

## 12. 代理角色

Agent Novel 标准化任务边界，不规定模型或 provider。

| 代理 | 主要职责 | 常见输出 |
| --- | --- | --- |
| 项目总控代理 | 理解当前项目状态、协调子任务、恢复工作现场。 | task plan、project proposal、risk summary。 |
| 章节代理 | 续写、改写、补场景、维护当前章节上下文。 | writing proposal、chapter diff。 |
| 设定代理 | 从正文和参考中提取、合并、审查设定。 | canon candidate、canon conflict。 |
| 知识代理 | 导入资料、回答项目问题、整理引用。 | knowledge answer、source summary。 |
| 拆书代理 | 分析样本、提取结构、风格和节奏观察。 | analysis artifact、style note。 |
| 修订代理 | 发现连续性、风格、剧情、语言问题。 | revision issue、revision proposal。 |
| 发布代理 | 检查缺章、整理导出、生成发布包。 | export manifest、publish blocker。 |

## 13. 工具与写入权限

工具 SHOULD 按风险分层：

| 层级 | 示例 | 要求 |
| --- | --- | --- |
| read | load chapter、search workspace、load reference | 可并发，需受上下文预算控制。 |
| propose | save proposal、upsert candidate、create issue | 可自动执行，但必须标记为未应用。 |
| write | apply proposal、commit canon、create export | 通常需要明确用户动作或策略允许。 |
| external | publish、sync、send、call production API | 必须经过策略和审批。 |

兼容 Runtime MUST 记录工具调用、参数摘要、结果引用、失败原因和关联 task id。

## 14. 运行时事件

Agent Novel 不取代 Agent Runtime，但建议 Runtime 事件能表达下列小说语义：

| 事件族 | 用途 |
| --- | --- |
| `novel.context.selected` | 本轮选中了哪些章节、设定、参考和历史摘要。 |
| `novel.context.missing` | 关键上下文缺失或预算不足。 |
| `novel.proposal.created` | 产生了可审查提议。 |
| `novel.evidence.linked` | 证据与提议、问题或导出检查建立关联。 |
| `novel.approval.required` | 写入、导出或外部发布需要确认。 |
| `novel.asset.updated` | 正文、设定或修订资产被显式更新。 |
| `novel.export.created` | 发布产物生成。 |

事件是执行事实；项目文件是作品事实。二者应通过稳定 ID 和 evidence refs 关联。

## 15. UI 投影

兼容 UI SHOULD 保留左侧作品工作面优先，右侧 Agent 协作栏低打扰：

- 正文编辑器是主工作面，不被代理输出抢焦点。
- Agent 输出分为说明、任务、证据、提议、差异、审批和导出卡片。
- 建议视图和对话视图共享同一个任务状态，但不能让聊天文本成为作品事实。
- 高频动作可以双入口，但最终写入路径必须统一。
- 证据、差异和风险应在应用前可见。

## 16. 安全与审批

默认策略：

1. AI 不直接覆盖已接受正文。
2. AI 不自动把候选设定升级为 canonical fact。
3. AI 不自动发布到外部平台。
4. 高风险修改必须显示目标路径、差异摘要、证据和撤销建议。
5. 密钥、provider 配置和本地文件能力不得暴露给不受控 renderer 或来源文档。

## 17. JSON Schema

v0.1 提供参考 schema，而不是强制所有实现逐字段一致。schema 位于 `docs/public/schemas/`：

- `novel-project.schema.json`
- `chapter-frontmatter.schema.json`
- `canon-card.schema.json`
- `agent-task.schema.json`
- `revision-issue.schema.json`
- `proposal.schema.json`
- `export-manifest.schema.json`
- `runtime-event.schema.json`

实现 SHOULD 使用 schema 做 lint、导入校验和互操作测试；但可以在 `metadata` 下保留私有扩展。

## 18. 非目标

v0.1 不标准化：

- 完整 Agent Runtime 协议。
- 模型 provider API。
- GUI 组件库和视觉样式。
- 云同步、多租户权限、插件市场。
- MCP 接入、远端 worktree、多代理分布式调度。
- 向量数据库实现和 embedding 模型。

这些能力应由相邻标准或具体产品实现承接。
