---
layout: home

hero:
  name: Agent Novel
  text: A portable standard for agent-native long-form fiction harnesses.
  tagline: "Choose a language to continue."
  actions:
    - theme: brand
      text: 简体中文
      link: /zh/
    - theme: alt
      text: English
      link: /en/

features:
  - title: Novel-first
    details: "Treat manuscript, canon, revisions and exports as project facts, not chat messages."
  - title: Harness-ready
    details: "Model sandbox, timeline, diagnostics, impact analysis and reader feedback loops."
  - title: Agent-ready
    details: "Define task, proposal, evidence and approval boundaries for writing agents."
---

<script setup>
if (typeof window !== 'undefined') {
  const base = import.meta.env.BASE_URL || '/'
  const lang = window.navigator.language || ''
  const target = lang.toLowerCase().startsWith('zh') ? 'zh/' : 'en/'
  const normalizedBase = base.endsWith('/') ? base : `${base}/`
  if (window.location.pathname === normalizedBase || window.location.pathname === '/') {
    window.setTimeout(() => {
      window.location.href = `${normalizedBase}${target}`
    }, 80)
  }
}
</script>
