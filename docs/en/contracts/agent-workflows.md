---
title: Agent workflows
description: Writing-agent task boundaries in Agent Novel.
---

# Agent workflows

Every agent task should declare a surface, intent, targets, context budget, allowed tools and write policy.

Read tools may run concurrently. Write tools should be serialized. Durable changes to accepted manuscript, canonical facts and external publishing should require approval unless policy explicitly allows them.
