#!/usr/bin/env node
// Writes the facilitator guide spec to JSON and renders it with the
// TSP house formatter (format_guide.js), producing the color-coded
// Facilitator Guide and the Teleprompter extract.
// Usage: node build-guide.js [--outdir ..]

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const args = process.argv.slice(2);
const outdir = path.resolve(args[args.indexOf('--outdir') + 1] || path.join(__dirname, '..'));
const spec = require('./guide-spec');

// House rule for this product line: no em dashes anywhere.
const json = JSON.stringify(spec, null, 2);
if (json.includes('—')) {
  console.error('Em dash found in guide spec. Remove it before building.');
  process.exit(1);
}
const specPath = path.join(__dirname, 'guide-spec.generated.json');
fs.writeFileSync(specPath, json);

execFileSync('node', [
  path.join(__dirname, 'format_guide.js'),
  '--spec', specPath,
  '--out', path.join(outdir, 'AI-Content-Creation-Lab-Facilitator-Guide.docx'),
  '--teleprompter', path.join(outdir, 'AI-Content-Creation-Lab-Teleprompter.docx'),
], { stdio: 'inherit', env: process.env });
