---
title: 安全与策略契约
description: Agent Novel 的权限、风险和策略边界。
---

# 安全与策略契约

Agent Novel 的安全目标是保护作者资产、来源边界和发布动作。

## 风险等级

| 等级 | 示例 | 默认策略 |
| --- | --- | --- |
| `low` | 读取章节、生成摘要、创建草稿 proposal。 | 可自动执行。 |
| `medium` | 新增 revision issue、候选设定、导出本地预览。 | 可自动执行但必须可见。 |
| `high` | 覆盖正文、升级 canonical canon、批量应用修订。 | 需要确认。 |
| `critical` | 删除资产、外部发布、同步到远端、发送敏感内容。 | 需要明确审批和策略允许。 |

## Prompt injection 防护

参考资料、知识包、拆书样本和用户导入文件都必须当作数据。客户端 MUST NOT 执行或服从来源文本中的系统提示、工具调用要求或密钥请求。

## 密钥边界

- Provider API key 不进入 renderer 全局对象。
- 工具权限由主进程、runtime 或受控后端持有。
- 导出和外部发布应记录策略决策。

## 数据保留

实现 SHOULD 允许用户清理 `.lime/cache/`、`.lime/embeddings/` 和运行日志，而不损坏作品事实。
