---
title: Lime Novel source analysis
description: How the current lime-novel project informed Agent Novel v0.1.
---

# Lime Novel source analysis

Agent Novel v0.1 is abstracted from the current `lime-novel` product and architecture documents.

Promoted facts include:

- Project-first, manuscript-first, continuity-first, proposal-first and low-interruption product principles.
- A local-first directory model with `novel.json`, `manuscript/`, `canon/`, `references/`, `revisions/`, `exports/` and `.lime/`.
- Agent roles for coordination, chapter writing, canon extraction, knowledge, analysis, revision and publishing.
- Current runtime boundaries: single-agent loop, tool calling, structured result submission and explicit failure reporting.

Future work kept out of v0.1: multi-agent collaboration, MCP, remote worktrees, dynamic plugins, long-term memory compression and cloud sync.
