---
title: Specification
description: Agent Novel v0.1.2 draft specification summary.
---

# Specification

Agent Novel v0.1.2 is a draft standard for agent-native long-form fiction writing workspaces. The normative detail is maintained in Simplified Chinese; this page summarizes the core contract.

## Core idea

Agent Novel is not a prompt collection. It defines how a novel project is continuously written, remembered, revised and published:

```text
source material -> information -> knowledge -> insight -> judgment -> impact

Novel Harness Engine adds a steering layer for sandbox diagnostics, timeline repair, impact analysis and reader feedback mapping. Harness outputs are reports, options, issues and proposals; they do not bypass author approval or manuscript writeback rules.
```

## Implementation-grounded baseline

v0.1.1 is grounded in the current Lime Novel implementation:

- Surfaces: `home`, `writing`, `knowledge`, `feature-center`, `analysis`, `canon`, `revision`, `publish`.
- Agents: `project`, `chapter`, `knowledge`, `analysis`, `canon`, `revision`, `publish`.
- Runtime: `legacy`, `anthropic`, `openai-compatible`, single-agent loop, tool calling and `submit_task_result`.
- Tools: workspace snapshot, chapter loading, workspace search, knowledge loading, knowledge answer generation, proposal saving, canon candidate upsert, revision issue upsert and structured task result submission.
- UI projection: Agent Feed items for status, evidence, proposal, issue and approval.

## Project package

A recommended project shape is:

```text
my-novel/
├── novel.json
├── manuscript/chapters/
├── raw/{captures,research,images,notes}/
├── compiled/{entities,chapters,timelines,themes,queries,reports}/
├── canon/{characters,locations,factions,rules,items,timeline}/
├── references/
├── revisions/snapshots/
├── outputs/{answers,briefs,reports}/
├── exports/
└── .lime/{runtime,embeddings,cache,logs}/
```

Manuscript is story authority. Canon is confirmed story bible authority. Raw and references are source material. Compiled is working knowledge. Outputs are reusable answers and reports. `.lime` is runtime support.

## Writing model

A compatible system models chapters and scenes with objectives, goals, summaries, status and word counts. Writing agents create proposals or patches; they do not silently overwrite accepted manuscript.

## Runtime model

Read tools may run concurrently. Write/propose tools are serialized. Tasks must end with a structured result. Failures must be explicit, not fabricated success.

## Safety model

Durable changes to manuscript, confirmed canon, batch revisions and external publishing should require explicit policy or user approval. Imported sources and knowledge packs are data, not instructions.
