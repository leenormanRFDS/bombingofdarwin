# The Bombing of Darwin — AI Operating System

A repository-ready operating system for Google AI Studio, GitHub and production development.

## Files

- `agents/AGENTS.md` — compact constitution and agent execution protocol.
- `agents/skills/*/SKILL.md` — task-specific workflows.
- `AI_SYSTEM.md` — copy/paste system-instruction version.
- `docs/` — detailed human-readable doctrine.
- `config/` — exact machine-readable design, motion and routing rules.
- `data/` — canonical historical/story structures.
- `scripts/validate-ai-os.mjs` — zero-dependency JSON/reference validator.

## Recommended use

### AI Studio Build mode
Keep this folder inside the website repository and sync/import the repo through GitHub. In the first prompt tell the agent:

> Read `agents/AGENTS.md`, `config/decision-matrix.json` and the relevant `agents/skills/*/SKILL.md` before changing the application. Treat these as project governance. Inspect existing implementation first. Preserve unrelated functionality.

### AI Studio Managed Agents / Agents Playground
Keep `agents/AGENTS.md` and `agents/skills/` intact. This structure matches Google's managed-agent configuration model.

### System Instructions field
If the AI Studio surface exposes a System Instructions field, paste `AI_SYSTEM.md`. Do not paste the whole `/docs` directory into the system field.

## Task format

```text
TASK
[Specific change.]

OUTCOME
[What the visitor should understand, feel or be able to do.]

PRESERVE
[Approved behaviours/components that must survive.]

LEAD AUTHORITY
[DESIGN | EXPERIENCE | TRUTH | TECHNOLOGY | VISITOR_GROWTH]

SKILL
[spatial-story | premium-interaction | historical-content | visitor-growth | release-qa]

CONSTRAINTS
[Historical/accessibility/performance/commercial constraints.]

DELIVER
Implement directly. Do not redesign unrelated sections.
Verify the requested outcome and stop.
```

## Source-of-truth order

1. Verified historical/cultural evidence and approved cultural authority.
2. `data/historical-canon.json` and linked sources.
3. `config/` machine-readable rules.
4. `agents/AGENTS.md`.
5. `/docs`.
6. Current task brief.
7. Existing conventions, unless they conflict with the above.

## File formats

Use Markdown for doctrine/instructions and JSON for exact rules/data. Use PDF for archival source material where page layout, images, maps or scanned documents matter.

## Validate

Run:

```bash
node scripts/validate-ai-os.mjs
```
