---
title: 修订工作面
description: 问题队列、小说体检、冲击波分析、证据、差异和修订代理。
---

# 修订工作面

修订工作面把问题变成可处理队列，也承载 Novel Harness Engine 的主要操作：体检、方案、模拟、确认和记录。

## 问题队列

每个 issue 至少包含：标题、摘要、章节、severity、status 和证据。

Harness issue 还应包含：

- harnessLayer：Story、Character 或 Reader。
- lifecycleMode：sandbox 或 timeline。
- targetRefs：章节、场景、人物、伏笔、导出版本或反馈来源。
- impactRef：冲击波分析。
- readerExperienceRisk：读者体验风险。

## 修订动作

- 延后。
- 标记解决。
- 生成最小改写 proposal。
- 生成 A/B/C 候选方案。
- 运行冲击波分析。
- 应用或拒绝 proposal。
- 撤销 applied record。

## 小说体检

修订工作面应支持：

- 单章体检。
- 连续章节体检。
- 黄金三章专项评估。
- 人物弧光扫描。
- 伏笔完整性扫描。
- 节奏频谱扫描。
- 发布前阻断项扫描。

体检报告只能生成 report、issue、plan 或 proposal，不能直接改正文。

## Harness-driven 修订流程

```text
作者意图
-> 体检或检索证据
-> A/B/C 修订方案
-> 冲击波分析
-> 作者选择
-> proposal/apply
-> revision record
```

修订记录必须保留作者为什么选中某方案，也要保留为什么拒绝其他方案。否则系统无法学习作者的结构偏好。

## 修订代理

修订代理不应输出泛泛批评，而应输出带目标、证据、严重度、影响范围和建议动作的问题。

在 `timeline` 模式下，修订代理不能建议直接回改已发布章节；它应该生成 timeline iteration、回潮声明或未来章节补强方案。
