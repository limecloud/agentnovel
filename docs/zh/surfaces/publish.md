---
title: 发布工作面
description: 导出预设、发布草案、manifest、发布代理和 timeline 切换。
---

# 发布工作面

发布工作面负责把作品资产转成可交付产物，也负责把项目从 `sandbox` 推进到 `timeline`。

## 能力

- Markdown 导出。
- EPUB 导出。
- 平台简介草案。
- 发布备注草案。
- 版本比较。
- 资产检查。
- 发布前 Harness 锁定。
- 最终确认。

## 发布前 Harness 锁定

正式导出前应检查：

- 小说体检报告是否存在 blocking issue。
- 黄金三章是否通过作者设定的最低标准。
- confirmed canon 是否与正文一致。
- 高风险伏笔是否有回收计划。
- 未解决修订 issue 是否被作者确认延后。
- 将进入只读状态的章节范围。

## 导出结果

每次导出生成目录和 `manifest.json`，记录 preset、version、synopsis、splitChapters、notes、feedback 和 files。

发布 manifest SHOULD 记录：

- lifecycle mode 切换时间。
- publishedChapterRefs。
- harness profile 快照。
- 未解决但已确认放行的 issue。

## 发布后 timeline

发布完成后，项目进入或部分进入 `timeline`：

- 已发布章节只读。
- 新反馈进入 reader feedback loop。
- 修订建议默认落在未来章节。
- 回潮声明、未来桥段和伏笔回收成为主要修复方式。

## 审批

最终导出需要作者确认。外部发布或同步必须走更严格策略。
