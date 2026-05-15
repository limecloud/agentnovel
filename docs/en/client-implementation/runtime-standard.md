---
title: Runtime standard
description: Client runtime expectations for Agent Novel.
---

# Runtime standard

A compatible client treats the Novel project as durable facts, Agent Runtime as execution facts and Agent UI as projection.

Discovery starts with `novel.json`, then loads catalogs for chapters, canon, references, revisions and exports. Large files should be loaded lazily.

Read tools do not modify project files. Propose tools can create non-applied assets. Write tools require explicit policy or user action. External tools require approval.
