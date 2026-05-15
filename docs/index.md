---
layout: home

hero:
  name: Agent Novel
  text: A portable standard for agent-native long-form fiction workspaces.
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
  - title: Agent-ready
    details: "Define task, proposal, evidence and approval boundaries for writing agents."
  - title: Local-first
    details: "Keep author-owned assets in inspectable files and rebuild runtime support data."
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
