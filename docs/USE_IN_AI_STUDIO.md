# Use in Google AI Studio

## Build mode
Keep this operating system in the website Git repository. Import/sync the repository in AI Studio.

First prompt:

```text
This repository contains the project operating system.

Before modifying the app, read:
1. .agents/AGENTS.md
2. config/decision-matrix.json
3. config/design-tokens.json

For each task, also read the relevant .agents/skills/*/SKILL.md.

Treat these as project governance. Do not rewrite or delete them unless explicitly asked.
Inspect the current implementation before changing it. Preserve unrelated functionality. Implement directly, verify and stop.
```

## Managed Agents / Agents Playground
Keep `.agents/AGENTS.md` and `.agents/skills/` intact when mounting/cloning the repo.

## System Instructions field
Where a System Instructions field exists, paste `AI_SYSTEM.md`. Do not paste all detailed docs into it.

## Git
Commit this folder with the website. Suggested commit:
`chore: add Bombing of Darwin AI operating system`

## Do not use PDF for governance
Use Markdown for instruction/doctrine and JSON for exact rules/data. Reserve PDFs for visual/archival evidence.
