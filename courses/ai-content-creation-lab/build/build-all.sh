#!/usr/bin/env bash
# Rebuilds every deliverable for the AI Content Creation Lab.
# Requires Node 18+ and the npm packages docx and pptxgenjs.
#   cd courses/ai-content-creation-lab/build && npm install && ./build-all.sh
set -euo pipefail
cd "$(dirname "$0")"
OUT=".."

node build-workbook.js     --out "$OUT/AI-Content-Creation-Lab-Workbook.docx"
node build-prompt-sheet.js --out "$OUT/AI-Content-Creation-Lab-Prompt-Sheet.docx"
node build-guide.js        --outdir "$OUT"
node build-slides.js       --out "$OUT/AI-Content-Creation-Lab-Slides.pptx"

echo
echo "Built:"
ls -1 "$OUT"/*.docx "$OUT"/*.pptx
