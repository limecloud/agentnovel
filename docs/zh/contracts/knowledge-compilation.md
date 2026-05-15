---
title: 知识编译层
description: raw、compiled、canon、manuscript、outputs 的小说知识库闭环。
---

# 知识编译层

小说知识库不是通用 wiki。它是持续从素材、正文、设定和代理输出中编译出来的项目长期记忆。

## 目录分层

```text
raw/
  captures/
  research/
  images/
  notes/
compiled/
  entities/
  chapters/
  timelines/
  themes/
  queries/
  reports/
canon/
  characters/
  locations/
  rules/
  items/
  timeline/
manuscript/
  chapters/
outputs/
  answers/
  briefs/
  reports/
```

| 层 | 角色 |
| --- | --- |
| `raw` | 原始输入，不自动可信。 |
| `compiled` | 机器维护的工作知识层，可包含候选和冲突。 |
| `canon` | 已确认稳定事实。 |
| `manuscript` | 正文事实源。 |
| `outputs` | 问答、报告、导出辅助材料，可再次被读取。 |

## 知识页最小协议

```yaml
id: kb-character-lin-qingyuan
type: character
title: 林清远
status: candidate
sources:
  - manuscript/chapters/012-before-the-lock-turns.md
related:
  - kb-location-clocktower
  - kb-item-key
updatedAt: 2026-04-03T15:10:00+08:00
```

正文建议结构：

- 简述。
- 当前可信事实。
- 证据来源。
- 与其他页面的关系。
- 未决问题。
- 反向链接。

## 核心工作流

```text
导入素材 -> 编译知识 -> 项目问答 -> 健康检查 -> 回写项目
```

### 导入素材

支持 `.txt`、`.md`、`.markdown` 等文本材料。导入后进入 `raw/research`，保留来源路径和导入时间。

### 编译知识

编译不是摘要，而是把材料拆成实体、章节、时间线、主题、冲突和未决问题。

### 项目问答

项目问答不是一次性气泡，应该写入 `outputs/answers/`，成为后续可读资产。

### 健康检查

检查知识层是否存在：过期、冲突、无来源、重复实体、未回收伏笔、未解决 high issue。

### 回写项目

稳定事实回写 `canon`，修订洞察回写 issue，写作建议回写 proposal。
