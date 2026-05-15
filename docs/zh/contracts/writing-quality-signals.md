---
title: 写作质量信号
description: 长篇小说代理应识别和输出的质量信号。
---

# 写作质量信号

Agent Novel 不规定文学审美，但规定长篇小说代理应该能结构化识别哪些质量信号。

## 信号表

| 信号 | 说明 | 常见处理 |
| --- | --- | --- |
| 视角越界 | POV 角色知道了不该知道的信息。 | revision issue + 最小改写 proposal。 |
| 人物失真 | 角色行为不符合当前欲望、恐惧或状态。 | evidence + character state update。 |
| 节奏塌陷 | 场景没有目标、重复解释、缺少行动压力。 | scene goal rewrite。 |
| 伏笔断裂 | 埋设无回收、回收无证据、线索突然消失。 | timeline / foreshadowing issue。 |
| 信息泄露 | 提前揭示反派、真相、规则或隐藏动机。 | high severity issue。 |
| 设定冲突 | 新文本和 canon 或 compiled facts 冲突。 | canon conflict / candidate review。 |
| 情绪跳变 | 角色情绪转折缺少触发。 | local rewrite proposal。 |
| 语言漂移 | 叙述声音或角色台词突然变味。 | style proposal。 |
| 发布阻断 | 缺章、标题缺失、未解决高风险问题。 | publish blocker。 |

## 输出要求

每个质量信号 SHOULD 带：

- target：章节、场景、段落或设定卡。
- evidence：原文或来源引用。
- severity：low / medium / high。
- impact：影响读者理解、悬念、人物可信度或发布。
- suggestedAction：生成 proposal、更新 canon、延后处理或直接忽略。
