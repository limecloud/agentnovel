---
title: 客户端运行时标准
description: Agent Novel 客户端如何发现、加载、解析上下文和安全回写。
---

# 客户端运行时标准

兼容客户端需要把 Novel 项目当成事实源，把 Agent Runtime 当成执行事实源，把 UI 当成投影。三者不能互相替代。

## 发现流程

1. 从用户选择的目录查找 `novel.json`。
2. 校验 `schemaVersion`、`projectId`、`title`、`language`、`manuscript`、`canon`。
3. 读取 catalog：章节列表、设定卡目录、参考目录、修订和导出摘要。
4. 延迟加载正文和大型参考文件。
5. 记录 schema 兼容性和缺失能力。

## 上下文加载

客户端 SHOULD 按任务选择上下文：

| 任务 | 优先上下文 |
| --- | --- |
| 续写章节 | 当前章节、最近摘要、相关设定、时间线、未解决问题。 |
| 提取设定 | 目标正文片段、已有设定卡、候选冲突。 |
| 修订检查 | 目标章节、相关 canon、历史 issue、风格约束。 |
| 发布预检 | 章节顺序、标题、未解决 issue、导出策略。 |
| 项目问答 | 相关参考、设定、正文摘要和 evidence refs。 |

## 写入策略

默认写入策略：

- `read` 工具不改项目文件。
- `propose` 工具只能写入 proposal、candidate、issue 等未应用资产。
- `write` 工具必须由用户动作或策略授权。
- `external` 工具必须经过审批，不得由模型单独决定。

## 事件投影

Runtime 事件进入 UI 时 SHOULD 投影为：

| 事件 | UI |
| --- | --- |
| `task.started` | 任务卡开始。 |
| `novel.context.selected` | 上下文摘要或证据入口。 |
| `tool.call.started` | 工具进度。 |
| `novel.proposal.created` | 提议块。 |
| `novel.approval.required` | 审批条。 |
| `novel.asset.updated` | 应用成功记录。 |
| `task.failed` | 可恢复错误。 |

UI 不应解析普通 assistant 文本来判断是否已写入；写入事实必须来自受控 API 和事件。

## 故障处理

| 故障 | 客户端行为 |
| --- | --- |
| `novel.json` 缺失 | 提示不是 Agent Novel 项目，可提供导入向导。 |
| schema 过新 | 只读打开或提示升级。 |
| 章节引用缺失 | 标记 missing context，不编造。 |
| 写入冲突 | 停止应用，展示冲突路径和重试选项。 |
| 模型失败 | 标记 task failed，不伪造成功结果。 |
| 导出失败 | 保留 preflight 和错误日志，不删除源文件。 |
