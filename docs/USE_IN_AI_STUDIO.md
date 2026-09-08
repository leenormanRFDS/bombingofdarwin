# Use in Google AI Studio

This repository already exists in GitHub, has been imported into AI Studio, and is deployed.

The task is to install and use governance inside that existing repository.

## Canonical project structure

Use:

- `AGENTS.md`
- `skills/`

If an `agents/` folder exists from a failed workaround and contains no unique required content, it may be deleted after inspection. The canonical configuration remains `AGENTS.md` and `skills/` at repository root.

## Step 1 — Add files to GitHub

Add these root-level files/folders to the existing repository:

- `AGENTS.md`
- `AI_SYSTEM.md`
- `skills/`
- `config/`
- `data/`
- `docs/`
- `scripts/`

Commit and push.

## Step 2 — Verify on GitHub.com

Confirm the actual repository shows:
- `AGENTS.md`
- `skills/spatial-story/SKILL.md`
- `skills/premium-interaction/SKILL.md`
- `skills/historical-content/SKILL.md`
- `skills/visitor-growth/SKILL.md`
- `skills/release-qa/SKILL.md`

## Step 3 — Pull/sync into the existing AI Studio project

Do not create a new app.

Confirm these files are visible in AI Studio's code tree.

## Step 4 — Governance initialisation prompt

```text
PROJECT GOVERNANCE INITIALISATION

This repository contains the operating system for The Bombing of Darwin digital experience.

This repository uses the ROOT agent structure:

AGENTS.md
skills/

Before making application changes, read:

1. AGENTS.md
2. config/decision-matrix.json
3. config/design-tokens.json
4. config/motion-tokens.json
5. docs/TEAM_OPERATING_MANUAL.md

Inspect the specialist workflows under:

skills/

Treat these files as persistent project governance.

Do not rewrite or delete governance files unless I explicitly ask you to modify the operating system.

Do not simulate the named practitioners.
They are quality and disciplinary benchmarks.

For every future implementation task:
1. inspect the current implementation;
2. classify the task;
3. identify the lead Authority;
4. read the relevant skills/<skill>/SKILL.md;
5. preserve unrelated working behaviour;
6. implement the requested outcome directly;
7. test and verify;
8. stop.

Do not modify application code during this initialisation.

Reply only with:
1. confirmation governance was found;
2. the five Authorities;
3. the five skills;
4. missing/unreadable governance files;
5. confirmation no application code changed.
```

## Step 5 — Read-only audit

After successful initialisation, ask AI Studio for a read-only architecture/UX audit before allowing changes.

## System Instructions field

If the AI Studio surface exposes a separate System Instructions field, `AI_SYSTEM.md` may be pasted there as a compatibility layer.

The repository remains the canonical governance source.

## Existing project docs

Retain existing project files such as:
- `PROJECT.md`
- `PHOTOGRAPHY-BRIEF.md`

Treat them as existing project context.

If they conflict with `AGENTS.md`, report the conflict.

## Git rule

A change is not considered safely persisted until the commit is visible on GitHub.com.
