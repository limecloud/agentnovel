---
title: 作者快速开始
description: 如何把一个长篇小说项目整理为 Agent Novel 项目包。
---

# 作者快速开始

本指南面向工具作者、Agent 产品原型和希望把已有小说项目整理为 Agent Novel 项目包的开发者。

## 1. 创建项目入口

项目根目录必须有 `novel.json`：

```json
{
  "schemaVersion": "0.1.0",
  "projectId": "novel_demo",
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

## 2. 放置正文

把已接受正文放入 `manuscript/chapters/`。每章推荐 Markdown frontmatter：

```markdown
---
chapterId: chapter_001
title: 第一章 雾港来信
order: 1
status: draft
pov: 林娜
canonRefs:
  - character_lina
---

正文从这里开始。
```

## 3. 建立设定卡

把稳定设定放入 `canon/`。候选设定不要直接写入 canonical card，而是先写入 proposal 或 candidate。

```markdown
---
cardId: character_lina
type: character
name: 林娜
status: ready
confidence: high
sourceRefs:
  - manuscript/chapters/chapter_001-opening.md#scene-1
---

林娜是雾港档案馆的见习修复师。
```

## 4. 导入参考

把研究资料、拆书样本或知识包放入 `references/`。来源材料只作为上下文候选，不自动成为设定事实。

如果参考资料需要长期维护、引用和编译，优先使用 Agent Knowledge pack，并在 `references/` 中保留链接或副本。

## 5. 接入代理

最小 agent-ready 项目需要支持：

- 读取 `novel.json`。
- 加载当前章节。
- 搜索正文、设定和参考。
- 保存 proposal。
- 保存 revision issue。
- 显示 approval request。
- 用户确认后应用 proposal。

## 6. 验收清单

| 检查 | 通过标准 |
| --- | --- |
| 项目可发现 | 根目录存在合法 `novel.json`。 |
| 正文可迁移 | 章节 Markdown 不依赖单一应用数据库。 |
| 设定可审查 | 设定卡有类型、状态和来源。 |
| AI 可回写 | 输出先成为 proposal，不直接覆盖正文。 |
| 风险可见 | 高风险写入展示路径、差异、证据和撤销建议。 |
| 支撑可重建 | 索引、缓存和 embedding 不作为事实权威。 |
