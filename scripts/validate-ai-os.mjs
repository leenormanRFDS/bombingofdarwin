#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
const required = [
  'config/design-tokens.json','config/motion-tokens.json','config/decision-matrix.json',
  'data/historical-canon.json','data/story-beats.json',
  'data/entities/aircraft.json','data/entities/vessels.json','data/entities/locations.json','data/entities/sources.json'
];
let failed = false;
const parsed = {};

const fail = m => { failed = true; console.error(`✗ ${m}`); };
const pass = m => console.log(`✓ ${m}`);

for (const rel of required) {
  const f = path.join(root, rel);
  if (!fs.existsSync(f)) { fail(`Missing ${rel}`); continue; }
  try { parsed[rel] = JSON.parse(fs.readFileSync(f,'utf8')); pass(`Valid JSON: ${rel}`); }
  catch (e) { fail(`Invalid JSON: ${rel} — ${e.message}`); }
}

const matrix = parsed['config/decision-matrix.json'];
if (matrix) {
  const auth = new Set(matrix.authorities || []);
  for (const [task, rule] of Object.entries(matrix.tasks || {})) {
    if (!auth.has(rule.lead)) fail(`${task}: unknown lead ${rule.lead}`);
  }
}

const canon = parsed['data/historical-canon.json'];
const beats = parsed['data/story-beats.json'];
if (canon && beats) {
  const ids = new Set((canon.claims || []).map(x => x.id));
  for (const beat of beats.beats || []) {
    for (const ref of beat.truthRefs || []) {
      if (!ids.has(ref)) fail(`${beat.id}: missing truthRef ${ref}`);
    }
  }
}

if (failed) process.exit(1);
console.log('\nAI operating-system validation passed.');
