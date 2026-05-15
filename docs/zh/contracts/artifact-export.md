---
title: 产物与导出契约
description: Agent Novel 如何记录发布产物和交付包。
---

# 产物与导出契约

导出是把当前作品事实转换为可交付产物。导出文件不是正文事实源，但它们是发布事实。

## Export manifest

每次导出 SHOULD 在 `exports/<exportId>/manifest.json` 保存：

| 字段 | 说明 |
| --- | --- |
| `exportId` | 稳定导出 ID。 |
| `projectId` | 项目 ID。 |
| `format` | markdown、epub、pdf、docx 等。 |
| `sourceRefs` | 参与导出的章节、设定或快照。 |
| `artifactRefs` | 输出文件、media type、size、digest。 |
| `checks` | 预检结果。 |
| `createdAt` | 导出时间。 |

## 预检

发布代理 SHOULD 至少检查：

- 章节是否缺失或排序异常。
- 标题和目录是否完整。
- 是否存在未解决 high severity issue。
- 是否有 rejected proposal 被误用。
- 导出格式是否满足目标平台限制。

## 与 Agent Artifact 的关系

Agent Novel 可以在本地 `exports/` 保存 manifest；Agent Artifact 可以进一步标准化 artifact envelope、part、version、render manifest 和 handoff package。二者通过 `artifactRefs` 关联。
