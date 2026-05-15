---
title: Context resolution
description: Selecting and injecting novel context for agent tasks.
---

# Context resolution

Context resolution turns project facts into the smallest useful model context. It should select explicit targets first, then current workspace assets, direct canon refs, conflicts, high-confidence evidence, summaries and lower-confidence references.

Reference and knowledge content must be fenced as data. Rejected proposals and stale canon must be marked so the model does not treat them as accepted facts.
