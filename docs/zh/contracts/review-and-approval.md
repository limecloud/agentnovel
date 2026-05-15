---
title: 评审与审批
description: Agent Novel 的提议、证据、差异和人工确认协议。
---

# 评审与审批

Agent Novel 的默认安全模型是“提议先行，显式应用”。AI 可以快速生成候选结果，但成为作品事实前必须通过策略或作者动作。

## 结果类型

| 类型 | 是否作品事实 | 说明 |
| --- | --- | --- |
| `message` | 否 | 解释、进度、回答。 |
| `evidence` | 否 | 支撑判断的来源片段或引用。 |
| `proposal` | 否 | 可审查、可应用的变更建议。 |
| `issue` | 是 | 修订问题本身是项目维护事实。 |
| `canon candidate` | 否 | 候选设定，不是 canonical fact。 |
| `applied record` | 是 | 记录已应用的变更。 |
| `export artifact` | 是 | 已生成的发布产物和 manifest。 |

## Proposal 要求

每个 proposal SHOULD 包含：

| 字段 | 说明 |
| --- | --- |
| `proposalId` | 稳定 ID。 |
| `taskId` | 产生它的代理任务。 |
| `targetRefs` | 目标章节、设定、问题或导出路径。 |
| `summary` | 变更摘要。 |
| `riskLevel` | `low`、`medium`、`high`。 |
| `diff` | 可读差异或替换范围。 |
| `evidenceRefs` | 证据引用。 |
| `status` | `draft`、`ready`、`accepted`、`rejected`、`applied`。 |

## 审批触发

以下操作 SHOULD 触发审批：

- 覆盖或大幅修改已接受正文。
- 将候选设定升级为 canonical card。
- 删除、合并或重命名设定卡。
- 批量应用多个修订提议。
- 生成面向外部发布的最终包。
- 调用外部发布、同步、发送或生产环境 API。

## 审批 UI 最小信息

审批请求至少应展示：

1. 操作类型。
2. 影响路径或资产 ID。
3. 风险等级。
4. 差异摘要。
5. 证据或来源。
6. 可撤销性说明。
7. 明确的确认、拒绝或延后动作。

## 应用记录

成功应用 proposal 后，系统 SHOULD 写入 applied record：

```json
{
  "appliedId": "applied_01",
  "proposalId": "proposal_01",
  "taskId": "task_01",
  "targets": ["manuscript/chapters/chapter_001-opening.md"],
  "summary": "替换第二场景结尾并补齐角色动机。",
  "appliedBy": "user",
  "appliedAt": "2026-05-15T12:00:00Z"
}
```

## 失败和撤销

写入失败时，Runtime MUST 保留失败原因、已尝试路径和未完成状态。支持撤销的实现 SHOULD 保存写入前摘要或快照引用，但不要求每个客户端实现完整版本控制系统。
