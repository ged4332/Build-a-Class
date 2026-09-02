#!/usr/bin/env python3
"""QA helper: convert a .docx or .pptx to PDF with LibreOffice, then render
pages to PNG for visual inspection. Prints page count and first text line.

Usage: python3 render.py <file> <outdir> [--dpi 80] [--pages 1,2,3]
"""
import os
import subprocess
import sys

src = os.path.abspath(sys.argv[1])
outdir = os.path.abspath(sys.argv[2])
dpi = 80
pages = None
if '--dpi' in sys.argv:
    dpi = int(sys.argv[sys.argv.index('--dpi') + 1])
if '--pages' in sys.argv:
    pages = [int(x) for x in sys.argv[sys.argv.index('--pages') + 1].split(',')]
os.makedirs(outdir, exist_ok=True)
profile = os.path.join(outdir, 'lo-profile')
subprocess.run(['soffice', '--headless', f'-env:UserInstallation=file://{profile}', '--convert-to', 'pdf', '--outdir', outdir, src],
               check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL, timeout=300)
pdf = os.path.join(outdir, os.path.splitext(os.path.basename(src))[0] + '.pdf')
import pymupdf  # noqa: E402
doc = pymupdf.open(pdf)
print(f'{os.path.basename(src)}: {len(doc)} pages -> {pdf}')
stem = os.path.splitext(os.path.basename(src))[0]
for i, page in enumerate(doc):
    n = i + 1
    first = page.get_text().strip().split('\n')
    print(f'  p{n:02d} | {first[0][:70] if first else ""}')
    if pages is None or n in pages:
        pix = page.get_pixmap(dpi=dpi)
        pix.save(os.path.join(outdir, f'{stem}-p{n:02d}.png'))
