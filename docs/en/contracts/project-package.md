---
title: Project package
description: Agent Novel directory and file authority contract.
---

# Project package

A project package is the durable unit of Agent Novel. It should be readable by desktop apps, agents, backup tools and authors using ordinary editors.

| Path | Authority | Purpose |
| --- | --- | --- |
| `novel.json` | Required entry | Project identity, language, directories and policy refs. |
| `manuscript/chapters/` | Manuscript authority | Accepted chapter Markdown. |
| `canon/` | Story bible authority | Characters, locations, factions, rules and timeline. |
| `references/` | Source material | Imported research and analysis samples. |
| `revisions/` | Revision facts | Issues, proposals and applied records. |
| `exports/` | Publishing facts | Export outputs and manifests. |
| `.lime/` | Runtime support | Indexes, caches, embeddings, logs and diagnostics. |

Indexes and caches are not fact authority.
