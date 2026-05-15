---
title: 章节与场景模型
description: Agent Novel 的章节、场景、节拍和正文提议协议。
---

# 章节与场景模型

章节是长篇写作的主要推进单位，场景是章节内部的行动和信息单位。Agent Novel 要求二者都可被 Agent 读取、定位和回写。

## Chapter

推荐字段：

```ts
type Chapter = {
  chapterId: string
  file: string
  volumeId?: string
  order: number
  title: string
  summary: string
  status: 'idea' | 'draft' | 'reviewing' | 'revised' | 'published'
  wordCount: number
  objective: string
  lastEditedAt: string
  scenes: Scene[]
}
```

关键字段解释：

- `summary` 是已经发生的事实摘要。
- `objective` 是章节叙事功能，不等于简介。
- `status` 决定代理动作风险：published 章节改动风险高于 draft。
- `wordCount` 用于节奏、拆分和导出判断。

## Scene

```ts
type Scene = {
  sceneId: string
  order: number
  title: string
  goal: string
  status: 'planned' | 'drafting' | 'completed' | 'revised'
}
```

场景必须有 goal。没有 goal 的场景通常会变成解释、闲聊或重复铺垫。

## Beat

Beat 是场景内部的微小转折，可选但推荐：

| Beat | 作用 |
| --- | --- |
| hook | 场景开头钩子。 |
| pressure | 角色遭遇压力。 |
| choice | 角色做出选择。 |
| reveal | 新信息揭示。 |
| turn | 情绪或局势转折。 |
| exit-hook | 结尾钩子。 |

## 正文提议

章节代理生成正文时 SHOULD 产出：

- 完整正文提议，适合替换当前章。
- 局部 patch，适合选区改写。
- diffPreview，给右栏展示。
- reason，解释为什么这样改。
- evidenceRefs，说明依赖的章节、设定或知识。

`save_proposal_draft` 保存的是完整正文提议；应用时由仓储处理快照、状态和 feed action。

## 选区改写

选区改写需要额外记录：

- 选区所在章节。
- 选区前后邻接段落。
- 选区目标：更克制、更悬疑、更清晰、更像某角色声音等。
- 不允许改动的 canon 或伏笔。

如果缺少精确选区，代理应生成建议或候选 patch，而不是猜测覆盖范围。
