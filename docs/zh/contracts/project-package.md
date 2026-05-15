---
title: 项目包协议
description: Agent Novel 项目目录和文件事实源协议。
---

# 项目包协议

项目包是 Agent Novel 的核心资产单位。它应该能被桌面应用打开，被 Agent Runtime 读取，被备份工具复制，也能被作者用普通编辑器检查。

## 目录职责

| 路径 | 权威性 | 说明 |
| --- | --- | --- |
| `novel.json` | 必需入口 | 项目身份、语言、状态、目录和策略引用。 |
| `manuscript/chapters/` | 正文权威 | 已接受章节 Markdown。 |
| `manuscript/snapshots/` | 历史参考 | 手动或自动生成的正文快照。 |
| `canon/` | 设定权威 | story bible 卡片。 |
| `references/` | 参考来源 | 导入素材、研究文档、拆书样本。 |
| `revisions/` | 修订事实 | issue、proposal、applied record。 |
| `exports/` | 发布事实 | 导出产物和 manifest。 |
| `.lime/` | 运行支撑 | 索引、缓存、embedding、日志、任务诊断。 |

## 文件命名

实现 SHOULD 使用稳定 ID 与可读 slug 组合，例如：

```text
manuscript/chapters/chapter_001-opening.md
canon/characters/character_lina.md
revisions/issues/issue_20260515_continuity.md
exports/export_20260515_epub/manifest.json
```

文件名不是唯一身份；唯一身份应在 frontmatter 或 JSON 字段中保存。

## Markdown frontmatter

正文、设定和修订提议可以使用 Markdown frontmatter。推荐字段：

| 字段 | 适用 | 说明 |
| --- | --- | --- |
| `id` | all | 稳定 ID。 |
| `type` | canon / revision | `character`、`rule`、`proposal` 等。 |
| `status` | all | `draft`、`ready`、`candidate`、`applied` 等。 |
| `sourceRefs` | canon / revision | 证据或来源引用。 |
| `updated` | all | 最近事实更新时间。 |
| `agentTaskId` | generated assets | 产生该资产的任务 ID。 |

## `.lime/` 运行目录

`.lime/` 不应污染作者主资产，但可以保存系统支撑数据：

| 路径 | 内容 | 可重建 |
| --- | --- | --- |
| `.lime/runtime/` | task snapshots、diagnostics、settings refs。 | 部分可重建。 |
| `.lime/embeddings/` | 向量数据和分块元数据。 | 是。 |
| `.lime/cache/` | 搜索、编译、导出缓存。 | 是。 |
| `.lime/logs/` | 本地诊断日志。 | 通常不可完全重建。 |

客户端 MUST NOT 把 `.lime/cache/` 或 `.lime/embeddings/` 当作作品事实权威。

## 迁移

项目迁移 SHOULD 遵循：

1. 先备份 `novel.json`、`manuscript/`、`canon/`、`references/`、`revisions/`、`exports/`。
2. 检查 `schemaVersion` 和目录字段。
3. 只对受影响文件做最小迁移。
4. 在 `revisions/` 或 `.lime/logs/` 记录迁移摘要。
5. 重建索引和缓存，而不是复制不兼容运行数据。
