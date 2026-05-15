const base = process.env.VITEPRESS_BASE || '/'

const zhSidebar = [
  {
    text: '开始',
    items: [
      { text: '概览', link: '/zh/' },
      { text: '什么是 Agent Novel', link: '/zh/what-is-agent-novel' },
      { text: '规范', link: '/zh/specification' },
      { text: '作者快速开始', link: '/zh/authoring/quickstart' }
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
      { text: '小说工作台', link: '/zh/concepts/novel-workspace' }
    ]
  },
  {
    text: '契约',
    items: [
      { text: '项目包协议', link: '/zh/contracts/project-package' },
      { text: '上下文解析', link: '/zh/contracts/context-resolution' },
      { text: '代理工作流', link: '/zh/contracts/agent-workflows' },
      { text: '运行时事件', link: '/zh/contracts/runtime-events' },
      { text: '评审与审批', link: '/zh/contracts/review-and-approval' },
      { text: '产物与导出', link: '/zh/contracts/artifact-export' },
      { text: '安全与策略', link: '/zh/contracts/security-policy' }
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
      { text: 'v0.1.0 概览', link: '/zh/versions/v0.1.0/overview' },
      { text: 'v0.1.0 规范', link: '/zh/versions/v0.1.0/specification' },
      { text: 'v0.1.0 变更记录', link: '/zh/versions/v0.1.0/changelog' }
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
      { text: 'Author quickstart', link: '/en/authoring/quickstart' }
    ]
  },
  {
    text: 'Client implementation',
    items: [
      { text: 'Runtime standard', link: '/en/client-implementation/runtime-standard' }
    ]
  },
  {
    text: 'Concepts',
    items: [
      { text: 'Novel workspace', link: '/en/concepts/novel-workspace' }
    ]
  },
  {
    text: 'Contracts',
    items: [
      { text: 'Project package', link: '/en/contracts/project-package' },
      { text: 'Context resolution', link: '/en/contracts/context-resolution' },
      { text: 'Agent workflows', link: '/en/contracts/agent-workflows' },
      { text: 'Runtime events', link: '/en/contracts/runtime-events' },
      { text: 'Review and approval', link: '/en/contracts/review-and-approval' },
      { text: 'Artifact and export', link: '/en/contracts/artifact-export' },
      { text: 'Security and policy', link: '/en/contracts/security-policy' }
    ]
  },
  {
    text: 'Examples',
    items: [
      { text: 'Complete project example', link: '/en/examples/complete-project' }
    ]
  },
  {
    text: 'Reference',
    items: [
      { text: 'JSON Schemas', link: '/en/reference/json-schemas' },
      { text: 'Glossary', link: '/en/reference/glossary' },
      { text: 'Lime Novel source analysis', link: '/en/reference/lime-novel-source-analysis' },
      { text: 'Agent standards ecosystem', link: '/en/reference/agent-ecosystem' }
    ]
  },
  {
    text: 'Versions',
    items: [
      { text: 'v0.1.0 overview', link: '/en/versions/v0.1.0/overview' },
      { text: 'v0.1.0 specification', link: '/en/versions/v0.1.0/specification' },
      { text: 'v0.1.0 changelog', link: '/en/versions/v0.1.0/changelog' }
    ]
  }
]

export default {
  title: 'Agent Novel',
  description: 'A draft standard for agent-native long-form fiction workspaces.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    nav: [
      { text: '中文', link: '/zh/' },
      { text: 'English', link: '/en/' },
      { text: '规范', link: '/zh/specification' },
      { text: 'Specification', link: '/en/specification' },
      {
        text: 'v0.1.0',
        items: [
          { text: '中文概览', link: '/zh/versions/v0.1.0/overview' },
          { text: 'English overview', link: '/en/versions/v0.1.0/overview' }
        ]
      },
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
