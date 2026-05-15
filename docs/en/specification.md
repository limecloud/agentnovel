---
title: Specification
description: Agent Novel v0.1 draft specification.
---

# Specification

Agent Novel v0.1 defines a draft standard for agent-native long-form fiction workspaces. It describes durable novel project files, writing-agent task boundaries, proposals, evidence, approvals, exports and runtime semantics without replacing Agent Skills, Agent Knowledge, Agent Runtime or Agent UI.

## Boundary

| System | Owns |
| --- | --- |
| Agent Skills | Executable workflows, scripts and tool procedures. |
| Agent Knowledge | Source-grounded facts and safe runtime context. |
| Agent Novel | Novel project assets, writing workspace semantics and writeback boundaries. |
| Agent Runtime | Sessions, tasks, turns, tools, approvals, queues and events. |
| Agent UI | Projection of runtime and novel facts into visible controls. |

## Conformance levels

- `reader`: discover `novel.json` and read project assets.
- `workspace`: provide project workbench surfaces for manuscript, canon, revisions and exports.
- `agent-ready`: support tasks, context assembly, proposals, evidence, approvals and controlled writes.
- `full`: support schemas, runtime events, audit records, export manifests and adjacent standard interop.

## Project package

```text
my-novel/
├── novel.json
├── manuscript/
│   ├── chapters/
│   └── snapshots/
├── canon/
├── references/
├── revisions/
├── exports/
└── .lime/
    ├── runtime/
    ├── embeddings/
    ├── cache/
    └── logs/
```

Rules:

1. `manuscript/` and `canon/` are project fact sources.
2. `references/` is source material, not accepted story canon.
3. `revisions/` stores issues, proposals, diffs and applied records.
4. `exports/` stores publishable outputs and manifests.
5. `.lime/` stores runtime support data and must not become story authority.

## Required `novel.json` fields

| Field | Meaning |
| --- | --- |
| `schemaVersion` | Agent Novel schema version. |
| `projectId` | Stable project id. |
| `title` | Work title. |
| `language` | Primary language. |
| `manuscript` | Manuscript directory config. |
| `canon` | Story bible directory config. |

## Agent roles

- Project coordinator: restore state, summarize risks and route tasks.
- Chapter agent: create writing proposals and chapter diffs.
- Canon agent: extract candidates and check conflicts.
- Knowledge agent: import and answer from references.
- Analysis agent: study samples and produce analysis artifacts.
- Revision agent: create issues and repair proposals.
- Publish agent: run export checks and produce export manifests.

## Runtime semantics

Implementations should record context selection, missing context, proposals, evidence, approvals, asset updates and exports as structured events. Events explain execution; project files remain the durable story facts.

## Safety defaults

AI output should become a proposal before it becomes project fact. Accepted manuscript, canonical story bible facts, batch revision application and external publishing should require explicit policy or user approval.

## Schemas

Reference schemas live under `/schemas/` for project entries, chapter metadata, canon cards, agent tasks, revision issues, proposals, export manifests and runtime events.
