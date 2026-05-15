# Agent Novel

Agent Novel 是一个面向 AI Agent 长篇小说工作台的草案标准。它定义小说项目、正文、设定、参考、知识、修订、发布、代理任务、证据、审批和 UI 投影如何被文件化、事件化、审计化，并与 Agent Skills、Agent Knowledge、Agent Runtime、Agent UI 等相邻标准协同。

本标准来自 `lime-novel` 当前实现和文档的工程抽象，也借鉴 Agent Skills 的包思想：目录即包、顶层入口、YAML/JSON metadata、渐进加载、可选支撑目录、可版本化资产。但 Agent Novel 不把小说项目伪装成 Skill，也不把代理运行时塞进项目文件。

## Core boundary

| Standard | Owns | Entry point | Runtime behavior |
| --- | --- | --- | --- |
| Agent Skills | 可执行能力、流程、脚本、工具使用方式。 | `SKILL.md` | 通过信任和激活检查后执行或遵循。 |
| Agent Knowledge | 有来源的事实、文档、wiki、编译上下文。 | `KNOWLEDGE.md` | 包裹为数据，安全进入上下文。 |
| Agent Novel | 长篇小说项目资产、写作工作台语义、代理协作闭环。 | `novel.json` + 项目目录 | 作为作品事实源和代理任务目标，不直接执行。 |
| Agent Runtime | session、task、turn、tool、approval、event 等执行事实。 | runtime control plane | 调度模型、工具、队列、恢复和事件流。 |
| Agent UI | 运行时事实到可见界面和控制点的投影。 | UI projection | 渲染状态、任务、提议、证据和人工输入。 |

## What v0.1 defines

- Novel project package: `novel.json`、`manuscript/`、`canon/`、`references/`、`revisions/`、`exports/`、`.lime/`。
- Manuscript authority: 已接受章节、场景、快照和写作焦点。
- Canon authority: 角色、地点、组织、规则、时间线、冲突和评审状态。
- Reference and knowledge boundary: 导入资料、拆书样本、研究资料、Agent Knowledge pack 挂载和来源安全。
- Revision and approval loop: issue、proposal、diff、approval request、applied record、undo hint。
- Publishing loop: export manifest、artifact refs、preflight checks、external publish approval。
- Runtime semantics: writing-agent task input/output、tool risk tier、event families、context assembly trace。
- UI projection: 左侧作品工作面优先，右侧 Agent 协作栏低打扰，聊天文本不成为作品事实。
- JSON Schemas: 项目入口、代理任务、修订问题、提议、设定卡、导出清单、运行时事件。

## Pack shape

```text
my-novel/
├── novel.json              # required: project identity, structure, language, current focus
├── manuscript/             # manuscript authority: chapters and snapshots
│   ├── chapters/
│   └── snapshots/
├── canon/                  # maintained story bible: characters, locations, factions, rules, timeline
├── references/             # imported sources, research materials, analysis samples, knowledge packs
├── revisions/              # issues, proposals, diffs, applied records
├── exports/                # publishable outputs and manifests
└── .lime/                  # local runtime support, rebuildable where possible
    ├── runtime/
    ├── embeddings/
    ├── cache/
    └── logs/
```

## Runtime architecture

```text
writer intent / UI action
  -> Novel workspace resolver
  -> context assembly over manuscript, canon, references, revisions, exports
  -> Agent Runtime task
  -> tools with read / propose / write / external risk tiers
  -> proposal / evidence / approval / artifact facts
  -> Agent UI projection
  -> explicit user apply back to Novel project files
```

Compatible implementations should:

1. Treat manuscript and canon as project facts, not chat history.
2. Keep generated suggestions separate from accepted work until the user applies them.
3. Persist enough evidence and task state to explain why a change is proposed.
4. Keep provider keys, file access and write tools outside renderer-only UI code.
5. Prefer local, inspectable files for author-owned assets.
6. Model long-form continuity explicitly instead of relying on one prompt window.
7. Rebuild indexes and caches from visible assets whenever possible.

## Documentation

- [中文首页](docs/zh/index.md)
- [什么是 Agent Novel](docs/zh/what-is-agent-novel.md)
- [规范](docs/zh/specification.md)
- [作者快速开始](docs/zh/authoring/quickstart.md)
- [客户端运行时标准](docs/zh/client-implementation/runtime-standard.md)
- [项目包协议](docs/zh/contracts/project-package.md)
- [上下文解析](docs/zh/contracts/context-resolution.md)
- [运行时事件](docs/zh/contracts/runtime-events.md)
- [JSON Schemas](docs/zh/reference/json-schemas.md)
- [完整项目示例](docs/zh/examples/complete-project.md)

## LLM entrypoints

- [`llms.txt`](llms.txt): concise navigation index for AI clients.
- [`llms-full.txt`](llms-full.txt): compact current documentation bundle.
- [`llm.txt`](llm.txt) and [`llm-full.txt`](llm-full.txt): compatibility aliases.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static site is generated at `docs/.vitepress/dist`.

## Status

`Agent Novel v0.1.0` is a draft. It intentionally starts from the proven needs in `lime-novel` and avoids premature standardization of cloud sync, marketplace plugins, distributed multi-agent execution, MCP integration, remote worktrees or long-term memory compression.
