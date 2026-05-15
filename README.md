# Agent Novel

Agent Novel 是面向长篇小说 AI Agent 产品的工作台与小说驾驭工程标准。它不是“写作提示词集合”，也不是“泛 Agent 标准换皮”，而是从 `lime-novel` 的真实产品设计、技术实现、运行时工具和小说写作闭环中抽象出来的协议：如何让一部小说在本地持续积累记忆、持续推进章节、持续沉淀设定、持续发现问题，最后稳定导出发布。

一句话：Agent Novel 的目标不是“帮作者写一段”，而是“让作者驾驭一部长篇：持续写完、修完、发出去，并在发布后继续通过未来章节修复读者体验”。

`Novel Harness Engine / 小说驾驭引擎` 是 v0.1.2 的核心新增层。这里的 `Harness` 取“马具、驾驭、约束执行框架、可观测控制壳”之义：把作者意图、故事骨架、人物弧光、伏笔链、节奏、读者反馈和发布约束连接起来，让作者牵引复杂长篇，而不是被复杂性拖着跑。

## 核心边界

| 层 | Agent Novel 负责什么 | 不负责什么 |
| --- | --- | --- |
| 小说工作台 | 首页、写作、知识、拆书、设定、修订、发布这些小说专用工作面语义。 | 具体 React 组件库和视觉样式。 |
| 作品资产 | `novel.json`、正文、场景、设定、知识编译、修订、导出产物的文件协议。 | 云同步、多租户账户、远端协作。 |
| 创作闭环 | 章节目标、场景推进、人物状态、伏笔、信息差、连续性和发布预检。 | 单次 prompt 模板或通用聊天格式。 |
| 小说驾驭引擎 | Story/Character/Reader Harness、沙盘模式、时间线模式、小说体检、冲击波分析、读者反馈映射。 | 替作者决定故事方向或自动覆盖正文。 |
| 代理协作 | 项目总控、章节、知识、拆书、设定、修订、发布代理的任务边界。 | 模型 provider API 的完整封装。 |
| 回写安全 | proposal、evidence、issue、approval、diff、applied record。 | 直接执行任意来源文本或绕过作者确认。 |

## 来自 `lime-novel` 的事实

本标准 v0.1.2 继续对齐当前 `lime-novel` 已实现和已文档化事实，并加入 Novel Harness Engine 作为结构驾驭层：

- 产品原则：项目优先、正文优先、连续性优先、结果可回写、低打扰优先。
- 工作面：`home`、`writing`、`knowledge`、`feature-center/analysis`、`canon`、`revision`、`publish`。
- 代理：`project`、`chapter`、`knowledge`、`analysis`、`canon`、`revision`、`publish`。
- 运行时：`legacy`、`anthropic`、`openai-compatible`，单代理 loop，tool calling，`submit_task_result` 结构化收尾。
- 工具：读取工作区、读取章节、搜索、读知识页、生成知识回答、保存正文提议、写入候选设定、写入修订问题、提交任务结果。
- 数据：`novel.json` 中的 `volumes`、`chapters[].objective`、`chapters[].scenes`、`homeHighlights`、`quickActions`。
- 产物：知识导入到 `raw/research`，问答写入 `outputs/`，发布导出 Markdown/EPUB 与 manifest。
- 驾驭工程：发布前使用 `sandbox` 做全本沙盘诊断与重构，发布后使用 `timeline` 尊重已发布章节不可逆性，通过未来章节修复体验。

## 推荐项目形态

```text
my-novel/
├── novel.json
├── manuscript/
│   └── chapters/
├── raw/
│   ├── captures/
│   ├── research/
│   ├── images/
│   └── notes/
├── compiled/
│   ├── entities/
│   ├── chapters/
│   ├── timelines/
│   ├── themes/
│   ├── queries/
│   └── reports/
├── canon/
│   ├── characters/
│   ├── locations/
│   ├── factions/
│   ├── rules/
│   ├── items/
│   └── timeline/
├── references/
├── revisions/
│   └── snapshots/
├── outputs/
│   ├── answers/
│   ├── briefs/
│   └── reports/
├── exports/
└── .lime/
    ├── runtime/
    ├── embeddings/
    ├── cache/
    └── logs/
```

核心判断：正文是作品本体，`canon` 是正式设定，`compiled` 是工作知识层，`outputs` 是可复用问答/报告产物，`.lime` 是运行支撑层。

## 文档入口

- [中文规范](docs/zh/specification.md)
- [长篇写作闭环](docs/zh/authoring/long-form-writing-loop.md)
- [章节与场景模型](docs/zh/contracts/chapter-scene-model.md)
- [小说驾驭引擎](docs/zh/concepts/novel-harness-engine.md)
- [沙盘 Harness](docs/zh/contracts/sandbox-harness.md)
- [时间线 Harness](docs/zh/contracts/timeline-harness.md)
- [小说体检报告](docs/zh/contracts/diagnostic-report.md)
- [冲击波分析](docs/zh/contracts/impact-analysis.md)
- [读者反馈闭环](docs/zh/contracts/reader-feedback-loop.md)
- [知识编译层](docs/zh/contracts/knowledge-compilation.md)
- [Live Agent Runtime](docs/zh/contracts/live-agent-runtime.md)
- [运行时工具契约](docs/zh/contracts/runtime-tools.md)
- [工作面标准](docs/zh/surfaces/writing.md)
- [Lime Novel 来源分析](docs/zh/reference/lime-novel-source-analysis.md)

## LLM 入口

- [`llms.txt`](llms.txt)：AI 客户端简洁导航。
- [`llms-full.txt`](llms-full.txt)：当前核心中文上下文合集。
- [`llm.txt`](llm.txt) / [`llm-full.txt`](llm-full.txt)：兼容别名。

## 本地开发

```bash
npm install
npm run dev
npm run build
```

## Status

当前版本：`v0.1.2`。本版本重心是加入 `Novel Harness Engine / 小说驾驭引擎`：把发布前沙盘、发布后时间线、小说体检、冲击波分析和读者反馈映射纳入标准。`v0.1.0` 与 `v0.1.1` 保留为历史版本，不改写历史 tag。
