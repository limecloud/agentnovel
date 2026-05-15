---
title: 完整项目示例
description: 一个最小但完整的 Agent Novel 项目包示例。
---

# 完整项目示例

```text
mist-harbor/
├── novel.json
├── manuscript/
│   └── chapters/
│       └── chapter_001-opening.md
├── canon/
│   └── characters/
│       └── character_lina.md
├── references/
│   └── research/
│       └── harbor-history.md
├── revisions/
│   ├── issues/
│   │   └── issue_001_timeline.md
│   ├── proposals/
│   │   └── proposal_001_fix-opening.md
│   └── applied/
├── exports/
└── .lime/
    └── runtime/
```

## `novel.json`

```json
{
  "schemaVersion": "0.1.0",
  "projectId": "mist_harbor",
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
  }
}
```

## 提议流程

1. 章节代理读取当前章节和 `character_lina`。
2. 修订代理发现时间线冲突，写入 `revisions/issues/issue_001_timeline.md`。
3. 章节代理生成 `proposal_001_fix-opening.md`。
4. UI 展示差异和证据。
5. 作者确认后，客户端更新章节并写入 applied record。

这个流程保证 AI 输出不会在未经确认时成为正文事实。
