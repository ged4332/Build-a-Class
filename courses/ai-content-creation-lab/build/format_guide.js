#!/usr/bin/env node
/**
 * TSP Guide Formatter | format_guide.js
 * Touch Stone Publishers universal .docx formatter engine.
 * Applies the TSP color-coded house standard to any facilitator guide,
 * LinkedIn Live runsheet, or teleprompter script.
 *
 * Usage:
 *   node format_guide.js --spec content-spec.json --out Output.docx [--teleprompter Teleprompter.docx]
 */

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  HeadingLevel,
} = require('docx');
const fs = require('fs');
const path = require('path');

// ─── PARSE ARGS ──────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
function getArg(flag) {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : null;
}
const specPath = getArg('--spec');
const outPath  = getArg('--out');
const tpPath   = getArg('--teleprompter');

if (!specPath || !outPath) {
  console.error('Usage: node format_guide.js --spec <spec.json> --out <output.docx> [--teleprompter <tp.docx>]');
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, 'utf8'));

// ─── COLOR PALETTE ───────────────────────────────────────────────────────────
const C = {
  SPEAKER:    'D6E4F7',  // Speaker Blue   | words Glenn says
  NOTE:       'F2F2F2',  // Facilitator Gray | stage directions
  LAB:        'FFF9C4',  // Lab Yellow     | activity blocks
  WORKBOOK:   'D4EDDA',  // Workbook Green | page callouts
  PROMPT:     'FFE8CC',  // Prompt Orange  | LLM/chat drops, timers
  MODULE_NAV: '1F3864',  // Module Navy    | title, major headers (white text)
  SECTION:    '2E5FA3',  // Section Blue   | subheaders (white text)
  BREAK:      'E8F4FD',  // Break Blue     | breaks, pacing
  WHITE:      'FFFFFF',  // Unshaded body
  CHAT_BG:    '1B2A4A',  // Chat Drop Block Navy background
  CHAT_BORDER:'B8860B',  // Chat Drop Block Gold border
  SKILL_CEIL: 'C0392B',  // Skill Ceiling Red accent border
};

const FONT = 'Arial';

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function shaded(hex) {
  return { fill: hex, type: ShadingType.CLEAR, color: 'auto' };
}

function para(text, { bold=false, size=22, color='000000', bg=null,
                      italic=false, allCaps=false, indent=null,
                      spacing={ before:60, after:60 }, align=null } = {}) {
  const run = new TextRun({ text, bold, size, color, font: FONT, italics: italic, allCaps });
  const opts = {
    children: [run],
    spacing,
    shading: bg ? shaded(bg) : undefined,
    indent: indent || undefined,
  };
  if (align) opts.alignment = align;
  return new Paragraph(opts);
}

function blank(bg=null) {
  return new Paragraph({
    children: [new TextRun({ text: '', font: FONT, size: 20 })],
    spacing: { before:30, after:30 },
    shading: bg ? shaded(bg) : undefined,
  });
}

function labelTag(text, bg) {
  return new Paragraph({
    children: [new TextRun({ text, bold:true, size:18, font:FONT, color:'444444', allCaps:true })],
    shading: shaded(bg),
    spacing: { before:50, after:20 },
    indent: { left:200 },
  });
}

function sectionHeader(text, level=1) {
  const bg  = level === 1 ? C.MODULE_NAV : C.SECTION;
  const sz  = level === 1 ? 28 : 24;
  return new Paragraph({
    children: [new TextRun({ text, bold:true, size:sz, font:FONT, color:'FFFFFF' })],
    shading: shaded(bg),
    spacing: { before:120, after:60 },
    indent: { left:200 },
  });
}

function divider() {
  return new Paragraph({
    children: [new TextRun({ text: '─'.repeat(80), font: FONT, size: 16, color: 'C8D0DC' })],
    spacing: { before:40, after:40 },
  });
}

// ─── BLOCK RENDERERS ─────────────────────────────────────────────────────────

function renderSpeaker(block) {
  const out = [];
  const tag = block.tag || 'SPEAKER LINE';
  out.push(labelTag(`🎙 ${tag}`, C.SPEAKER));
  for (const line of (block.lines || [])) {
    out.push(para(line, {
      bg: C.SPEAKER, italic: line.startsWith('"'),
      indent: { left:360, right:360 }, spacing:{ before:40, after:40 },
    }));
  }
  out.push(blank(C.SPEAKER));
  return out;
}

function renderNote(block) {
  const text = block.text || '';
  return [
    labelTag('📌 FACILITATOR NOTE', C.NOTE),
    para(text, { bg: C.NOTE, italic:true, indent:{ left:300 }, spacing:{ before:30, after:30 } }),
    blank(C.NOTE),
  ];
}

function renderWorkbook(block) {
  const tag  = block.tag || 'WORKBOOK';
  const line = block.line || '';
  return [
    labelTag(`📖 ${tag.toUpperCase()}`, C.WORKBOOK),
    para(line, { bg: C.WORKBOOK, italic: line.startsWith('"'), indent:{ left:360, right:360 }, spacing:{ before:40, after:40 } }),
    blank(C.WORKBOOK),
  ];
}

function renderPrompt(block) {
  const tag   = block.tag || 'DROP IN CHAT';
  const lines = block.lines || (block.text ? [block.text] : []);
  const out   = [];
  out.push(labelTag(`📋 ${tag}`, C.PROMPT));
  for (const line of lines) {
    out.push(para(line, { bg: C.PROMPT, indent:{ left:300, right:300 }, spacing:{ before:30, after:30 } }));
  }
  out.push(blank(C.PROMPT));
  return out;
}

function renderTimer(block) {
  return [
    para(`⏱ TIMER: ${block.duration}`, {
      bg: C.PROMPT, bold:true, indent:{ left:200 }, spacing:{ before:40, after:40 },
    }),
  ];
}

function renderResource(block) {
  return [
    labelTag('🔗 DROP IN CHAT', C.PROMPT),
    para(block.url || '', { bg: C.PROMPT, indent:{ left:300 }, spacing:{ before:20, after:10 } }),
    para(block.description || '', { bg: C.PROMPT, italic:true, indent:{ left:300 }, spacing:{ before:10, after:30 } }),
    blank(C.PROMPT),
  ];
}

function renderLab(block) {
  const title   = block.title   || 'LAB';
  const labtype = block.labtype || '';
  const page    = block.page    || '';
  const timing  = block.timing  || '';
  const header  = labtype ? `${title} | ${labtype}` : title;
  const meta    = [page, timing].filter(Boolean).join(' | ');
  const out     = [];
  out.push(sectionHeader(header, 2));
  if (meta) out.push(para(meta, { bg: C.LAB, bold:true, indent:{ left:200 }, spacing:{ before:30, after:30 } }));
  return out;
}

function renderScenario(block) {
  const out = [];
  if (block.variant) {
    const label = `Scenario | Variant ${block.variant}${block.label ? ` (${block.label})` : ''}:`;
    out.push(para(label, { bg: C.LAB, bold:true, indent:{ left:200 }, spacing:{ before:40, after:20 } }));
  }
  out.push(para(block.text || '', { bg: C.WHITE, indent:{ left:300, right:300 }, spacing:{ before:30, after:30 } }));
  return out;
}

function renderConstraint(block) {
  return [
    para(`Constraint: ${block.text || ''}`, {
      bg: C.LAB, bold:true, italic:true,
      indent:{ left:200 }, spacing:{ before:30, after:30 },
    }),
  ];
}

function renderDebrief(block) {
  const out = [];
  out.push(para('DEBRIEF:', { bg: C.LAB, bold:true, allCaps:true, indent:{ left:200 }, spacing:{ before:50, after:20 } }));
  if (block.q1) out.push(para(`Q1 (Decision): ${block.q1}`, { bg: C.LAB, indent:{ left:360 }, spacing:{ before:20, after:20 } }));
  if (block.q2) out.push(para(`Q2 (Pattern): ${block.q2}`,   { bg: C.LAB, indent:{ left:360 }, spacing:{ before:20, after:20 } }));
  if (block.q3) out.push(para(`Q3 (Application): ${block.q3}`, { bg: C.LAB, indent:{ left:360 }, spacing:{ before:20, after:40 } }));
  out.push(blank(C.LAB));
  return out;
}

function renderBreak(block) {
  const label = block.label || 'BREAK';
  const dur   = block.duration ? ` | ${block.duration}` : '';
  return [
    blank(),
    para(`${label}${dur}`, {
      bg: C.BREAK, bold:true, align: AlignmentType.CENTER,
      spacing:{ before:60, after:60 },
    }),
    blank(),
  ];
}

function renderBody(block) {
  return [para(block.text || '', { spacing:{ before:60, after:60 } })];
}

function renderHeading(block) {
  const level = block.level || 2;
  return [sectionHeader(block.text || '', level)];
}

function renderChatDropBlock(block) {
  // Special override: Gold border, Navy background, white text
  const border = { style: BorderStyle.THICK, size: 12, color: C.CHAT_BORDER };
  return [
    new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      borders: { top: border, bottom: border, left: border, right: border },
      rows: [
        new TableRow({ children: [
          new TableCell({
            shading: shaded(C.CHAT_BG),
            margins: { top: 200, bottom: 200, left: 300, right: 300 },
            children: [
              para('CHAT DROP LINK | copy and paste into live chat', { bold:true, color:'FFFFFF', size:20, bg:C.CHAT_BG, allCaps:true }),
              blank(C.CHAT_BG),
              para(block.url || '[URL HERE]', { bold:true, color:'B8860B', size:22, bg:C.CHAT_BG }),
              blank(C.CHAT_BG),
              para(block.instruction || '', { color:'DDDDDD', size:20, italic:true, bg:C.CHAT_BG }),
            ],
          }),
        ]}),
      ],
    }),
    blank(),
  ];
}

function renderPacingMap(block) {
  const rows  = block.rows || [];
  const hdrs  = ['Block', 'Module', 'Labs', 'Key Outputs', 'Break After?'];
  const hdrRow = new TableRow({
    children: hdrs.map(h => new TableCell({
      shading: shaded(C.MODULE_NAV),
      margins: { top:100, bottom:100, left:150, right:150 },
      children: [para(h, { bold:true, color:'FFFFFF', size:18, bg:C.MODULE_NAV })],
    })),
  });
  const dataRows = rows.map((r, i) => new TableRow({
    children: [
      new TableCell({ shading: shaded(i%2===0 ? C.BREAK : C.WHITE), margins:{top:80,bottom:80,left:150,right:150}, children: [para(r.block||'', { size:18 })] }),
      new TableCell({ shading: shaded(i%2===0 ? C.BREAK : C.WHITE), margins:{top:80,bottom:80,left:150,right:150}, children: [para(r.module||'', { size:18, bold:true })] }),
      new TableCell({ shading: shaded(i%2===0 ? C.BREAK : C.WHITE), margins:{top:80,bottom:80,left:150,right:150}, children: [para(r.labs||'', { size:18 })] }),
      new TableCell({ shading: shaded(i%2===0 ? C.BREAK : C.WHITE), margins:{top:80,bottom:80,left:150,right:150}, children: [para(r.outputs||'', { size:18 })] }),
      new TableCell({ shading: shaded(i%2===0 ? C.BREAK : C.WHITE), margins:{top:80,bottom:80,left:150,right:150}, children: [para(r.break||'', { size:18, italic:true })] }),
    ],
  }));
  return [
    para('PACING MAP', { bold:true, size:24, allCaps:true, spacing:{ before:80, after:40 } }),
    new Table({ width:{ size:100, type:WidthType.PERCENTAGE }, rows:[hdrRow, ...dataRows] }),
    blank(),
  ];
}

// ─── MAIN RENDER ─────────────────────────────────────────────────────────────

function renderBlock(block) {
  switch (block.type) {
    case 'speaker':       return renderSpeaker(block);
    case 'note':          return renderNote(block);
    case 'workbook':      return renderWorkbook(block);
    case 'prompt':        return renderPrompt(block);
    case 'timer':         return renderTimer(block);
    case 'resource':      return renderResource(block);
    case 'lab':           return renderLab(block);
    case 'scenario':      return renderScenario(block);
    case 'constraint':    return renderConstraint(block);
    case 'debrief':       return renderDebrief(block);
    case 'break':         return renderBreak(block);
    case 'body':          return renderBody(block);
    case 'heading':       return renderHeading(block);
    case 'chat_drop_block': return renderChatDropBlock(block);
    case 'pacing_map':    return renderPacingMap(block);
    default:
      console.warn(`⚠ Unrecognized block type: "${block.type}" | skipping`);
      return [];
  }
}

function buildDocChildren(spec) {
  const children = [];

  // Title block
  children.push(
    para(spec.meta.title || 'TSP Guide', { bold:true, size:32, color:'FFFFFF', bg:C.MODULE_NAV, allCaps:true, align:AlignmentType.CENTER, spacing:{ before:120, after:60 } }),
    para(spec.meta.subtitle || '', { size:22, color:'CCCCCC', bg:C.MODULE_NAV, align:AlignmentType.CENTER, spacing:{ before:0, after:120 } }),
    blank(),
  );

  // Color key
  const keyItems = [
    [C.SPEAKER,  'Speaker Lines | what Glenn says out loud'],
    [C.NOTE,     'Facilitator Notes | what Glenn knows but does not say'],
    [C.LAB,      'Lab Activity Blocks | participant work time'],
    [C.WORKBOOK, 'Workbook Page Callouts | navigation to workbook'],
    [C.PROMPT,   'LLM Prompts, Chat Drops, Timing Cues'],
  ];
  children.push(para('COLOR KEY', { bold:true, size:18, allCaps:true, spacing:{ before:40, after:20 } }));
  for (const [hex, label] of keyItems) {
    children.push(para(`  ${label}`, { bg: hex, size:18, spacing:{ before:20, after:10 } }));
  }
  children.push(blank());
  children.push(divider());

  // Sections
  for (const section of (spec.sections || [])) {
    if (section.title) children.push(sectionHeader(section.title, 1));
    if (section.timing) children.push(para(section.timing, { bg:C.BREAK, indent:{ left:200 }, spacing:{ before:30, after:30 } }));
    for (const block of (section.content || [])) {
      children.push(...renderBlock(block));
    }
    children.push(divider());
  }

  return children;
}

// Teleprompter extract | Speaker Blue lines only
function buildTeleprompterChildren(spec) {
  const children = [];
  children.push(
    para(`${spec.meta.title || 'TSP Guide'} | TELEPROMPTER EXTRACT`, {
      bold:true, size:28, color:'FFFFFF', bg:C.MODULE_NAV, allCaps:true,
      align:AlignmentType.CENTER, spacing:{ before:120, after:60 },
    }),
    para('Speaker lines only. Stage directions and facilitator notes removed.', {
      size:18, italic:true, color:'666666', align:AlignmentType.CENTER, spacing:{ before:0, after:120 },
    }),
    blank(),
  );

  for (const section of (spec.sections || [])) {
    let sectionHasLines = false;
    const sectionBlocks = [];

    for (const block of (section.content || [])) {
      if (block.type === 'speaker' || block.type === 'workbook') {
        if (!sectionHasLines && section.title) {
          sectionBlocks.push(para(section.title, {
            bold:true, size:22, allCaps:true, color:'FFFFFF', bg:C.MODULE_NAV,
            spacing:{ before:80, after:40 }, indent:{ left:200 },
          }));
          sectionHasLines = true;
        }
        const lines = block.lines || (block.line ? [block.line] : []);
        for (const line of lines) {
          // Bold the first word for scanning
          const firstSpace = line.indexOf(' ');
          const firstWord  = firstSpace > -1 ? line.slice(0, firstSpace) : line;
          const rest        = firstSpace > -1 ? line.slice(firstSpace) : '';
          sectionBlocks.push(new Paragraph({
            children: [
              new TextRun({ text: firstWord, bold:true, font:FONT, size:26 }),
              new TextRun({ text: rest, font:FONT, size:26, italics: line.startsWith('"') }),
            ],
            spacing: { before:80, after:80 },
            indent: { left:720, right:720 },
          }));
        }
        sectionBlocks.push(blank());
      }
    }
    children.push(...sectionBlocks);
  }

  return children;
}

// ─── BUILD & WRITE ───────────────────────────────────────────────────────────
async function main() {
  // Main formatted guide
  const mainDoc = new Document({
    sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top:1080, bottom:1080, left:1080, right:1080 } } },
                 children: buildDocChildren(spec) }],
  });
  const mainBuf = await Packer.toBuffer(mainDoc);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, mainBuf);
  console.log(`✅ Formatted guide written: ${outPath} (${Math.round(mainBuf.length/1024)}KB)`);

  // Teleprompter extract (optional)
  if (tpPath) {
    const tpDoc = new Document({
      sections: [{ properties: { page: { size: { width: 12240, height: 15840 }, margin: { top:2160, bottom:2160, left:2160, right:2160 } } },
                   children: buildTeleprompterChildren(spec) }],
    });
    const tpBuf = await Packer.toBuffer(tpDoc);
    fs.mkdirSync(path.dirname(tpPath), { recursive: true });
    fs.writeFileSync(tpPath, tpBuf);
    console.log(`✅ Teleprompter extract written: ${tpPath} (${Math.round(tpBuf.length/1024)}KB)`);
  }
}

main().catch(err => { console.error('❌ Error:', err.message); process.exit(1); });
