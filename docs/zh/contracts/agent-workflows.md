---
title: 代理工作流
description: Agent Novel 中不同写作代理的任务边界。
---

# 代理工作流

Agent Novel 不规定具体模型、prompt 或 provider。它只规定小说代理在项目包上的任务边界、输入输出和写入控制。

## 通用任务输入

每个代理任务 SHOULD 包含：

| 字段 | 说明 |
| --- | --- |
| `taskId` | 稳定任务 ID。 |
| `surface` | `home`、`writing`、`canon`、`knowledge`、`analysis`、`revision`、`publish`。 |
| `intent` | 用户意图或系统触发原因。 |
| `targetRefs` | 目标章节、设定、参考、问题或导出。 |
| `contextBudget` | 上下文预算和优先级。 |
| `allowedTools` | 本轮允许工具列表。 |
| `writePolicy` | 自动提议、自动写入或必须审批。 |

## 项目总控代理

职责：

- 汇总当前项目状态和风险。
- 为作者恢复工作现场。
- 把模糊意图路由到具体工作面。
- 协调章节、设定、修订和发布任务。

输出 SHOULD 是计划、风险摘要或项目级 proposal，而不是直接改正文。

## 章节代理

职责：

- 续写当前章节。
- 根据提纲补场景。
- 改写局部段落。
- 保持当前章节与设定、时间线、人物关系一致。

输出 SHOULD 是 `writing proposal` 或 `chapter diff`。除非策略明确允许，章节代理 MUST NOT 直接覆盖 `manuscript/chapters/`。

## 设定代理

职责：

- 从正文和参考中提取候选设定。
- 合并重复角色、地点、组织和规则。
- 检查设定冲突和过期信息。
- 维护 story bible 的 reviewed 状态。

输出 SHOULD 是 `canon candidate`、`canon update proposal` 或 `canon conflict`。候选设定必须经过确认才能成为 canonical card。

## 知识代理

职责：

- 导入 `.txt`、`.md`、`.markdown` 等参考资料。
- 回答面向项目的资料问题。
- 为回答提供来源路径和片段。
- 将稳定知识推荐进入 Agent Knowledge pack 或 `references/` 派生文档。

输出 SHOULD 区分事实、推断和未知。缺少来源时应明确标记。

## 拆书代理

职责：

- 分析样本的结构、节奏、风格和章节钩子。
- 提炼可复用观察，但不照搬原文。
- 把分析结果关联到 `references/` 或知识包。

输出 SHOULD 是 analysis artifact、style note 或结构观察，不直接写入正文。

## 修订代理

职责：

- 检查连续性、剧情、语言和风格问题。
- 生成 issue 和可应用 proposal。
- 提供证据和差异预览。
- 在应用后更新 issue 状态。

修订代理 SHOULD 优先创建小粒度 proposal，避免一个提议横跨大量章节。

## 发布代理

职责：

- 检查缺章、标题、目录、未解决 issue 和导出格式。
- 生成 Markdown、EPUB 或其他发布包。
- 记录 export manifest 和预检结果。

发布代理 MAY 自动生成本地导出文件，但外部发布 MUST 经过审批和策略检查。

## 工具编排

工具执行 SHOULD 遵循：

1. 只读工具可并发。
2. 写工具串行。
3. 自动写入仅限低风险派生资产。
4. 正文、设定、发布和外部动作默认需要用户确认。
5. 每个工具结果都应能关联到 task、target 和 evidence。
