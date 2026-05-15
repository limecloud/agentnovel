---
title: 客户端运行时标准
description: Agent Novel 客户端如何发现项目、组装上下文、执行任务和投影结果。
---

# 客户端运行时标准

客户端必须把 Novel 项目、Agent Runtime 和 UI 投影分开。项目文件是作品事实，Runtime 是执行事实，UI 是可见状态。

## 发现

1. 查找 `novel.json`。
2. 校验 schemaVersion 和 projectId。
3. 加载 chapters、volumes、currentSurface、currentChapterId。
4. 扫描 raw/compiled/canon/manuscript/outputs/exports。
5. 打开或创建 `.lime/runtime/project.db`。
6. 恢复最近 task、feed、diagnostics。

## 任务启动

任务输入 SHOULD 包含：surface、intent、chapterId、featureTool、targetRefs、writePolicy。

客户端根据 surface 选择默认代理：writing -> chapter，knowledge -> knowledge，analysis -> analysis，canon -> canon，revision -> revision，publish -> publish。

## 上下文装配

上下文应按顺序选择：

1. 用户显式目标。
2. 当前章节和场景目标。
3. 相关 canon 和 compiled memory。
4. 未解决 issue。
5. 最近 feed 和 proposal 状态。
6. raw/reference/knowledge source。
7. 导出和发布状态。

## 回写

写入必须走 use case / repository / controlled tool：

- 保存章节。
- 保存 proposal。
- 应用 proposal。
- 拒绝 proposal。
- 写入 canon candidate。
- 更新 revision issue。
- 创建 export package。

UI 不允许直接写文件，也不允许从聊天文本推断写入。

## 诊断

客户端 SHOULD 提供 task diagnostics 查看入口，包括 trace、tool events、token usage、failure 和 updatedAt。
