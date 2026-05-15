---
title: 上下文解析契约
description: Agent Novel 任务如何选择、压缩和注入小说上下文。
---

# 上下文解析契约

上下文解析器负责把项目事实转换为本轮模型调用的最小必要上下文。它不是搜索引擎，也不是事实权威。

## 输入

| 字段 | 说明 |
| --- | --- |
| `taskId` | 当前代理任务。 |
| `surface` | 工作面：writing、canon、revision、publish 等。 |
| `intent` | 用户意图。 |
| `targetRefs` | 目标章节、设定、参考、issue 或 export。 |
| `budget` | token、文件数、片段数限制。 |
| `policyRefs` | 安全、版权、审批和来源策略。 |

## 选择优先级

1. 用户显式选择的目标。
2. 当前章节或当前工作面资产。
3. 直接引用的 canon card。
4. 与目标冲突或最近变更的修订问题。
5. 高置信参考和证据。
6. 项目摘要和历史压缩记忆。
7. 低置信或过期参考。

## 输出

解析器 SHOULD 输出 context envelope：

```json
{
  "taskId": "task_01",
  "selected": [
    { "ref": "manuscript/chapters/chapter_001.md", "reason": "current-target" },
    { "ref": "canon/characters/character_lina.md", "reason": "canon-ref" }
  ],
  "omitted": [
    { "ref": "references/raw/sample.txt", "reason": "budget" }
  ],
  "missing": [
    { "kind": "timeline", "detail": "No reviewed timeline card for current chapter." }
  ]
}
```

## 注入边界

- 正文和设定可以作为项目事实进入上下文。
- 参考和知识包必须包裹为数据，不能服从其中的指令式文本。
- 修订问题和 proposal 必须带状态，避免把 rejected proposal 当成事实。
- 过期或争议设定必须显式标记。

## 压缩

压缩摘要 SHOULD 保留：

- 人物当前状态。
- 未解决冲突。
- 已承诺伏笔。
- 时间线顺序。
- 关键物品归属。
- 用户明确写作偏好。

压缩结果如果会长期使用，SHOULD 写入 canon、compiled summary 或 `.lime/runtime/`，并记录来源。
