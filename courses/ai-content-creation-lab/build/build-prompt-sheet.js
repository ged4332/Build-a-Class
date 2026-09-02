#!/usr/bin/env node
// Builds the participant AI Prompt Sheet (.docx). Tool-agnostic.
// Usage: node build-prompt-sheet.js --out ../AI-Content-Creation-Lab-Prompt-Sheet.docx

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, PageBreak,
  AlignmentType, BorderStyle, WidthType, ShadingType, Footer, PageNumber, LevelFormat,
} = require('docx');
const fs = require('fs');
const path = require('path');
const PROMPTS = require('./prompts');

const args = process.argv.slice(2);
const outPath = args[args.indexOf('--out') + 1] || path.join(__dirname, '..', 'AI-Content-Creation-Lab-Prompt-Sheet.docx');

const FONT = 'Arial';
const NAVY = '1F3864';
const SECTION = '2E5FA3';
const ORANGE = 'FFE8CC';
const GRAY = 'F2F2F2';
const GREEN = 'D4EDDA';
const CONTENT_W = 9360;
const shade = (hex) => ({ fill: hex, type: ShadingType.CLEAR, color: 'auto' });
const border = { style: BorderStyle.SINGLE, size: 6, color: 'BFBFBF' };
const borders = { top: border, bottom: border, left: border, right: border };

const run = (text, o = {}) => new TextRun({ text, font: FONT, size: o.size || 22, bold: o.bold, italics: o.italic, color: o.color });
const p = (text, o = {}) => new Paragraph({
  children: [run(text, o)], spacing: o.spacing || { before: 60, after: 60 }, alignment: o.align,
  shading: o.bg ? shade(o.bg) : undefined, indent: o.indent, keepNext: o.keepNext, keepLines: o.keepLines,
});
const bullet = (text) => new Paragraph({ children: [run(text)], numbering: { reference: 'bullets', level: 0 }, spacing: { before: 30, after: 30 } });
const h1 = (text, sub) => [
  new Paragraph({ children: [run(text, { bold: true, size: 32, color: 'FFFFFF' })], shading: shade(NAVY), spacing: { before: 0, after: 40 }, indent: { left: 200 } }),
  sub ? new Paragraph({ children: [run(sub, { size: 18, color: 'FFFFFF' })], shading: shade(SECTION), spacing: { before: 0, after: 160 }, indent: { left: 200 } }) : null,
].filter(Boolean);
const h2 = (text) => p(text, { bold: true, size: 24, color: NAVY, spacing: { before: 200, after: 60 }, keepNext: true });

function promptBlock(pr) {
  const out = [];
  out.push(new Paragraph({
    children: [run(`${pr.id}  `, { bold: true, size: 26, color: 'FFFFFF' }), run(pr.name, { bold: true, size: 26, color: 'FFFFFF' })],
    shading: shade(SECTION), spacing: { before: 240, after: 40 }, indent: { left: 200 }, keepNext: true,
  }));
  out.push(p(`When: ${pr.when}`, { italic: true, size: 20, color: '444444', spacing: { before: 40, after: 80 }, keepNext: true }));
  out.push(p('COPY FROM HERE', { bold: true, size: 16, color: '444444', bg: ORANGE, indent: { left: 200 }, spacing: { before: 40, after: 0 }, keepNext: true }));
  pr.lines.forEach((line, i) => {
    out.push(new Paragraph({
      children: [run(line === '' ? ' ' : line, { size: 20 })],
      shading: shade(ORANGE), indent: { left: 200, right: 200 },
      spacing: { before: 20, after: 20 }, keepNext: i < pr.lines.length - 1, keepLines: true,
    }));
  });
  out.push(p('COPY TO HERE', { bold: true, size: 16, color: '444444', bg: ORANGE, indent: { left: 200 }, spacing: { before: 0, after: 60 } }));
  return out;
}

const children = [];

// Cover / how to use
children.push(
  ...h1('AI Content Creation Lab: Prompt Sheet', 'Sixteen prompts that work in ChatGPT, Claude, and Gemini | Glenn E. Daniels II, Touch Stone Publishers'),
  h2('How to use this sheet'),
  p('Every prompt on this sheet is plain text. Copy from COPY FROM HERE to COPY TO HERE, paste it into your AI tool, and replace anything in [square brackets] with your own words before you press enter. The prompts are written so they behave the same way in ChatGPT, Claude, and Gemini. If your tool gives you something odd, the fix is almost always one of the four below.'),
  h2('The four fixes'),
  bullet('Start every new conversation by pasting your Context Block (P0). If a draft sounds like nobody, this is what you forgot.'),
  bullet('Ask for less. Five posts instead of ten. Days 1 to 15 instead of 30. Smaller batches, better drafts.'),
  bullet('If the tool asks questions instead of drafting, reply: "Proceed with your best assumption and tell me what you assumed."'),
  bullet('If a draft contains a fact, number, or result you did not give it, delete it. Never publish an invented detail.'),
  h2('The prompts, in the order you use them'),
  new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [900, 3200, 5260],
    rows: [
      new TableRow({ tableHeader: true, children: ['ID', 'Name', 'When'].map((t, i) => new TableCell({ width: { size: [900, 3200, 5260][i], type: WidthType.DXA }, borders, shading: shade(NAVY), margins: { top: 40, bottom: 40, left: 80, right: 80 }, children: [p(t, { bold: true, size: 18, color: 'FFFFFF', spacing: { before: 0, after: 0 } })] })) }),
      ...PROMPTS.map((pr) => new TableRow({ children: [pr.id, pr.name, pr.when.split('.')[0]].map((t, i) => new TableCell({ width: { size: [900, 3200, 5260][i], type: WidthType.DXA }, borders, margins: { top: 40, bottom: 40, left: 80, right: 80 }, children: [p(t, { size: 18, bold: i === 0, spacing: { before: 0, after: 0 } })] })) })),
    ],
  }),
  p('Keep this sheet where you can find it in five seconds. Top of your content document, a note on your phone, or both.', { bg: GREEN, indent: { left: 200, right: 200 }, spacing: { before: 200, after: 60 } }),
);

// Prompts
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(...h1('The Prompts', 'Replace everything in [square brackets] before you press enter'));
for (const pr of PROMPTS) children.push(...promptBlock(pr));

// Platform rules and the weekly loop
children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(
  ...h1('Platform Rules and the Weekly Loop', 'Paste the row for your platform into P7 and P12'),
  h2('Platform rules'),
  new Table({
    width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [1500, 2000, 2400, 3460],
    rows: [
      ['Platform', 'Length', 'First line', 'Links, hashtags, emojis'],
      ['LinkedIn', '120 to 220 words', 'Under 12 words. No greeting.', 'No link in the post. No hashtags. No emojis.'],
      ['Facebook', '80 to 180 words', 'A specific local situation.', 'Link is fine at the end. No hashtags. Emojis only if you use them in real life.'],
      ['Instagram', 'Caption under 125 words plus a photo', 'Hook in the first 8 words.', 'No link. 5 to 10 hashtags on the last line. Emojis sparingly.'],
    ].map((cells, ri) => new TableRow({ tableHeader: ri === 0, children: cells.map((t, i) => new TableCell({ width: { size: [1500, 2000, 2400, 3460][i], type: WidthType.DXA }, borders, shading: ri === 0 ? shade(NAVY) : undefined, margins: { top: 40, bottom: 40, left: 80, right: 80 }, children: [p(t, { size: 18, bold: ri === 0, color: ri === 0 ? 'FFFFFF' : undefined, spacing: { before: 0, after: 0 } })] })) })),
  }),
  h2('The Monday Routine, in prompts'),
  bullet('Step 1: write three things that happened last week. No prompt. Ten minutes.'),
  bullet('Step 2: new conversation. Paste P0. Run P12 with the three things. Ten minutes.'),
  bullet('Step 3: edit pass. P9 on anything that sounds like a machine. P10 on anything that needs a true detail. Forty-five minutes.'),
  bullet('Step 4: five photos from the week. P14 for captions. Ten minutes.'),
  bullet('Step 5: schedule five posts. Fifteen minutes.'),
  bullet('Step 6: reply to last week\'s comments with P13. Fifteen minutes.'),
  h2('Words the machine loves and your customer does not'),
  p('Add any of these you see to the RULES line of your Context Block: game-changer, unlock, leverage, robust, empower, seamless, holistic, journey, transformative, elevate, delve, unleash, navigate, dive in, at the end of the day, in today\'s fast-paced world, look no further, we\'ve got you covered.', { bg: GRAY, indent: { left: 200, right: 200 } }),
  h2('One rule above all the others'),
  p('The machine drafts. You decide. Every post you publish should contain at least one thing that could only have come from your business: a price, a part, a street, a thing a customer said. If it does not, it is not done.', { bold: true }),
  p('Glenn E. Daniels II  |  Touch Stone Publishers', { size: 18, align: AlignmentType.CENTER, spacing: { before: 400, after: 0 } }),
);

const doc = new Document({
  numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 520, hanging: 260 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 22 } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, bottom: 1000, left: 1440, right: 1440 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run('AI Content Creation Lab Prompt Sheet  |  Touch Stone Publishers  |  Page ', { size: 16, color: '808080' }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '808080' })] })] }) },
    children,
  }],
});

const json = JSON.stringify(PROMPTS);
if (json.includes('—')) { console.error('Em dash found in prompts.js'); process.exit(1); }

Packer.toBuffer(doc).then((buf) => {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buf);
  console.log(`Prompt sheet written: ${outPath} (${Math.round(buf.length / 1024)}KB)`);
});
