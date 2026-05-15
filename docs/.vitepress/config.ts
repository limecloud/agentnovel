const base = process.env.VITEPRESS_BASE || '/'

const zhSidebar = [
  {
    text: '开始',
    items: [
      { text: '概览', link: '/zh/' },
      { text: '什么是 Agent Novel', link: '/zh/what-is-agent-novel' },
      { text: '规范', link: '/zh/specification' },
      { text: '作者快速开始', link: '/zh/authoring/quickstart' },
      { text: '长篇写作闭环', link: '/zh/authoring/long-form-writing-loop' },
      { text: '小说驾驭引擎', link: '/zh/concepts/novel-harness-engine' }
    ]
  },
  {
    text: '客户端实现',
    items: [
      { text: '运行时标准', link: '/zh/client-implementation/runtime-standard' }
    ]
  },
  {
    text: '概念',
    items: [
      { text: '小说工作台', link: '/zh/concepts/novel-workspace' },
      { text: '小说驾驭引擎', link: '/zh/concepts/novel-harness-engine' }
    ]
  },
  {
    text: '核心契约',
    items: [
      { text: '项目包协议', link: '/zh/contracts/project-package' },
      { text: '章节与场景模型', link: '/zh/contracts/chapter-scene-model' },
      { text: '连续性与记忆', link: '/zh/contracts/continuity-memory' },
      { text: '知识编译层', link: '/zh/contracts/knowledge-compilation' },
      { text: '上下文解析', link: '/zh/contracts/context-resolution' },
      { text: '写作质量信号', link: '/zh/contracts/writing-quality-signals' },
      { text: '沙盘 Harness', link: '/zh/contracts/sandbox-harness' },
      { text: '时间线 Harness', link: '/zh/contracts/timeline-harness' },
      { text: '小说体检报告', link: '/zh/contracts/diagnostic-report' },
      { text: '冲击波分析', link: '/zh/contracts/impact-analysis' },
      { text: '读者反馈闭环', link: '/zh/contracts/reader-feedback-loop' }
    ]
  },
  {
    text: '代理与运行时',
    items: [
      { text: '代理工作流', link: '/zh/contracts/agent-workflows' },
      { text: 'Live Agent Runtime', link: '/zh/contracts/live-agent-runtime' },
      { text: '运行时工具', link: '/zh/contracts/runtime-tools' },
      { text: 'Agent Feed 投影', link: '/zh/contracts/agent-feed-projection' },
      { text: '诊断与轨迹', link: '/zh/contracts/diagnostics-trace' },
      { text: '运行时事件', link: '/zh/contracts/runtime-events' },
      { text: '评审与审批', link: '/zh/contracts/review-and-approval' },
      { text: '产物与导出', link: '/zh/contracts/artifact-export' },
      { text: '安全与策略', link: '/zh/contracts/security-policy' }
    ]
  },
  {
    text: '工作面',
    items: [
      { text: '首页', link: '/zh/surfaces/home' },
      { text: '写作', link: '/zh/surfaces/writing' },
      { text: '知识', link: '/zh/surfaces/knowledge' },
      { text: '拆书', link: '/zh/surfaces/analysis' },
      { text: '设定', link: '/zh/surfaces/canon' },
      { text: '修订', link: '/zh/surfaces/revision' },
      { text: '发布', link: '/zh/surfaces/publish' }
    ]
  },
  {
    text: '示例',
    items: [
      { text: '完整项目示例', link: '/zh/examples/complete-project' }
    ]
  },
  {
    text: '参考',
    items: [
      { text: 'JSON Schemas', link: '/zh/reference/json-schemas' },
      { text: '术语表', link: '/zh/reference/glossary' },
      { text: 'Lime Novel 来源分析', link: '/zh/reference/lime-novel-source-analysis' },
      { text: 'Agent 标准生态', link: '/zh/reference/agent-ecosystem' }
    ]
  },
  {
    text: '版本',
    items: [
      { text: 'v0.1.2 概览', link: '/zh/versions/v0.1.2/overview' },
      { text: 'v0.1.2 规范', link: '/zh/versions/v0.1.2/specification' },
      { text: 'v0.1.2 变更记录', link: '/zh/versions/v0.1.2/changelog' },
      { text: 'v0.1.1 概览', link: '/zh/versions/v0.1.1/overview' },
      { text: 'v0.1.1 规范', link: '/zh/versions/v0.1.1/specification' },
      { text: 'v0.1.1 变更记录', link: '/zh/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' }
    ]
  }
]

const enSidebar = [
  {
    text: 'Start here',
    items: [
      { text: 'Overview', link: '/en/' },
      { text: 'What is Agent Novel?', link: '/en/what-is-agent-novel' },
      { text: 'Specification', link: '/en/specification' },
      { text: 'Author quickstart', link: '/en/authoring/quickstart' },
      { text: 'Long-form writing loop', link: '/en/authoring/long-form-writing-loop' },
      { text: 'Novel Harness Engine', link: '/en/concepts/novel-harness-engine' }
    ]
  },
  {
    text: 'Contracts',
    items: [
      { text: 'Project package', link: '/en/contracts/project-package' },
      { text: 'Chapter and scene model', link: '/en/contracts/chapter-scene-model' },
      { text: 'Continuity and memory', link: '/en/contracts/continuity-memory' },
      { text: 'Knowledge compilation', link: '/en/contracts/knowledge-compilation' },
      { text: 'Live Agent Runtime', link: '/en/contracts/live-agent-runtime' },
      { text: 'Runtime tools', link: '/en/contracts/runtime-tools' },
      { text: 'Agent Feed projection', link: '/en/contracts/agent-feed-projection' },
      { text: 'Sandbox Harness', link: '/en/contracts/sandbox-harness' },
      { text: 'Timeline Harness', link: '/en/contracts/timeline-harness' },
      { text: 'Diagnostic Report', link: '/en/contracts/diagnostic-report' },
      { text: 'Impact Analysis', link: '/en/contracts/impact-analysis' },
      { text: 'Reader Feedback Loop', link: '/en/contracts/reader-feedback-loop' }
    ]
  },
  {
    text: 'Surfaces',
    items: [
      { text: 'Home', link: '/en/surfaces/home' },
      { text: 'Writing', link: '/en/surfaces/writing' },
      { text: 'Knowledge', link: '/en/surfaces/knowledge' },
      { text: 'Analysis', link: '/en/surfaces/analysis' },
      { text: 'Canon', link: '/en/surfaces/canon' },
      { text: 'Revision', link: '/en/surfaces/revision' },
      { text: 'Publish', link: '/en/surfaces/publish' }
    ]
  },
  {
    text: 'Reference',
    items: [
      { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
      { text: 'Lime Novel source analysis', link: '/en/reference/lime-novel-source-analysis' },
      { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' }
    ]
  },
  {
    text: 'Versions',
    items: [
      { text: 'v0.1.2 overview', link: '/en/versions/v0.1.2/overview' },
      { text: 'v0.1.2 specification', link: '/en/versions/v0.1.2/specification' },
      { text: 'v0.1.2 changelog', link: '/en/versions/v0.1.2/changelog' },
      { text: 'v0.1.1 overview', link: '/en/versions/v0.1.1/overview' },
      { text: 'v0.1.1 changelog', link: '/en/versions/v0.1.1/changelog' },
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' }
    ]
  }
]

export default {
  title: 'Agent Novel',
  description: 'A draft standard for agent-native long-form fiction writing workspaces.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '中文', link: '/zh/' },
      { text: 'English', link: '/en/' },
      { text: '规范', link: '/zh/specification' },
      { text: '写作闭环', link: '/zh/authoring/long-form-writing-loop' },
      { text: 'Harness', link: '/zh/concepts/novel-harness-engine' },
      { text: 'v0.1.2', link: '/zh/versions/v0.1.2/overview' },
      { text: 'GitHub', link: 'https://github.com/limecloud/agentnovel' }
    ],
    sidebar: {
      '/zh/': zhSidebar,
      '/en/': enSidebar
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/limecloud/agentnovel' }
    ],
    search: {
      provider: 'local'
    }
  }
}
