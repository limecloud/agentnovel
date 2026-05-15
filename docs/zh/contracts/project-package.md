---
title: 项目包协议
description: Agent Novel 项目目录、novel.json 和知识编译目录协议。
---

# 项目包协议

Agent Novel 项目包必须同时服务作者、桌面应用、Agent Runtime、搜索索引和导出器。核心目标是：作品资产可见、可迁移，运行支撑可重建，代理结果可审计。

## 目录 profile

### 基础作品 profile

```text
novel.json
manuscript/chapters/
canon/
references/
revisions/
exports/
.lime/
```

### 知识编译 profile

```text
raw/
compiled/
canon/
manuscript/
outputs/
```

推荐实现同时支持二者：`references/` 可作为通用入口，`raw/compiled/outputs` 作为小说知识库的规范化子层。

## `novel.json` 示例

```json
{
  "schemaVersion": 1,
  "projectId": "proj-lime-novel",
  "title": "钟塔尽头的雨季",
  "subtitle": "代理优先的长篇小说工作台",
  "status": "drafting",
  "language": "zh-CN",
  "genre": "悬疑 / 都市奇幻",
  "premise": "女主在父亲失踪后的旧钟楼里，逐步揭开一条被整座城市默许的时间裂缝。",
  "currentSurface": "writing",
  "currentChapterId": "chapter-12",
  "volumes": [],
  "chapters": [],
  "homeHighlights": [],
  "quickActions": []
}
```

## 章节索引

章节条目不是重复正文，而是运行时和 UI 的索引：

- `file` 指向正文。
- `summary` 是章节已发生事实。
- `objective` 是章节叙事目标。
- `scenes` 提供场景级工作面结构。
- `lastEditedAt` 支持恢复现场。

## `.lime` 目录

`.lime/runtime/project.db` 可保存：

- agent tasks。
- agent feed。
- proposals。
- revision issue state。
- diagnostics。
- evidence snippets。
- memory snapshots。

`.lime/cache`、`.lime/embeddings` 应可重建；`.lime/logs` 可清理但应避免泄露敏感信息。
