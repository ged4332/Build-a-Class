#!/usr/bin/env node
// Builds the participant workbook (.docx) for the AI Content Creation Lab.
// Usage: node build-workbook.js --out ../AI-Content-Creation-Lab-Workbook.docx

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, PageBreak,
  AlignmentType, BorderStyle, WidthType, ShadingType, HeightRule, Footer,
  PageNumber, LevelFormat,
} = require('docx');
const fs = require('fs');
const path = require('path');
const P = require('./pages');
const PROMPTS = require('./prompts');

const args = process.argv.slice(2);
const outPath = args[args.indexOf('--out') + 1] || path.join(__dirname, '..', 'AI-Content-Creation-Lab-Workbook.docx');

const FONT = 'Arial';
const NAVY = '1F3864';
const SECTION = '2E5FA3';
const LAB = 'FFF9C4';
const GREEN = 'D4EDDA';
const ORANGE = 'FFE8CC';
const GRAY = 'F2F2F2';
const RULE = 'BFBFBF';
const CONTENT_W = 9360; // 6.5in in DXA

const shade = (hex) => ({ fill: hex, type: ShadingType.CLEAR, color: 'auto' });
const border = { style: BorderStyle.SINGLE, size: 6, color: RULE };
const borders = { top: border, bottom: border, left: border, right: border };

function run(text, o = {}) {
  return new TextRun({ text, font: FONT, size: o.size || 22, bold: o.bold, italics: o.italic, color: o.color, allCaps: o.caps });
}
function p(text, o = {}) {
  return new Paragraph({
    children: Array.isArray(text) ? text : [run(text, o)],
    spacing: o.spacing || { before: 60, after: 60 },
    alignment: o.align,
    shading: o.bg ? shade(o.bg) : undefined,
    indent: o.indent,
    numbering: o.numbering,
    keepNext: o.keepNext,
  });
}
function title(text, meta) {
  const out = [
    new Paragraph({
      children: [run(text, { bold: true, size: 32, color: 'FFFFFF' })],
      shading: shade(NAVY), spacing: { before: 0, after: 40 }, indent: { left: 200 },
    }),
  ];
  if (meta) out.push(new Paragraph({
    children: [run(meta, { size: 18, color: 'FFFFFF' })],
    shading: shade(SECTION), spacing: { before: 0, after: 160 }, indent: { left: 200 },
  }));
  return out;
}
function h2(text) {
  return p(text, { bold: true, size: 24, color: NAVY, spacing: { before: 160, after: 60 }, keepNext: true });
}
function body(text, o = {}) { return p(text, { ...o, spacing: o.spacing || { before: 40, after: 80 } }); }
function callout(text, bg = GREEN, o = {}) {
  return p(text, { ...o, bg, indent: { left: 200, right: 200 }, spacing: { before: 60, after: 60 } });
}
function bullet(text, level = 0) {
  return new Paragraph({ children: [run(text)], numbering: { reference: 'bullets', level }, spacing: { before: 30, after: 30 } });
}
function checkbox(text) {
  return new Paragraph({ children: [run('☐  ' + text)], spacing: { before: 40, after: 40 }, indent: { left: 200 } });
}
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }

// Bordered writing box with n ruled lines.
function writeBox(lines, o = {}) {
  const h = o.lineHeight || 420; // twips per line (~0.29in)
  const rows = [];
  for (let i = 0; i < lines; i++) {
    rows.push(new TableRow({
      height: { value: h, rule: HeightRule.EXACT },
      children: [new TableCell({
        width: { size: CONTENT_W, type: WidthType.DXA },
        borders: { top: i === 0 ? border : { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' }, bottom: border, left: border, right: border },
        margins: { top: 40, bottom: 40, left: 120, right: 120 },
        children: [new Paragraph({ children: [run(i === 0 && o.label ? o.label : '', { size: 18, color: '808080', italic: true })], spacing: { before: 0, after: 0 } })],
      })],
    }));
  }
  return new Table({ width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: [CONTENT_W], rows });
}

// Generic table. widths in DXA must sum to CONTENT_W. rows are arrays of strings.
function table(headers, rows, widths, o = {}) {
  const rowH = o.rowHeight;
  const mk = (cells, isHeader, ri) => new TableRow({
    tableHeader: isHeader,
    height: !isHeader && rowH ? { value: rowH, rule: HeightRule.EXACT } : undefined,
    children: cells.map((c, i) => new TableCell({
      width: { size: widths[i], type: WidthType.DXA },
      borders,
      shading: isHeader ? shade(NAVY) : (o.shadeFirstCol && i === 0 ? shade(GRAY) : undefined),
      margins: { top: 50, bottom: 50, left: 100, right: 100 },
      children: [new Paragraph({
        children: [run(c, { size: o.size || 18, bold: isHeader || (o.boldFirstCol && i === 0), color: isHeader ? 'FFFFFF' : undefined })],
        spacing: { before: 0, after: 0 },
      })],
    })),
  });
  return new Table({
    width: { size: CONTENT_W, type: WidthType.DXA },
    columnWidths: widths,
    rows: [mk(headers, true), ...rows.map((r, i) => mk(r, false, i))],
  });
}

function promptBox(id) {
  const pr = PROMPTS.find((x) => x.id === id);
  const out = [p(`PROMPT ${pr.id}: ${pr.name.toUpperCase()}`, { bold: true, size: 18, color: '444444', bg: ORANGE, indent: { left: 200 }, spacing: { before: 80, after: 20 } })];
  for (const line of pr.lines) out.push(p(line, { size: 18, bg: ORANGE, indent: { left: 200, right: 200 }, spacing: { before: 20, after: 20 } }));
  out.push(p('', { bg: ORANGE, spacing: { before: 0, after: 60 } }));
  return out;
}

const timeMeta = (lab, time, mins, prompt) => [lab, time + ' ET', mins + ' minutes', prompt ? 'Uses ' + prompt : null].filter(Boolean).join('  |  ');

// ───────────────────────────── PAGES ─────────────────────────────
const pages = [];

// 1 COVER
pages.push([
  new Paragraph({ children: [run('', { size: 22 })], spacing: { before: 2400, after: 0 } }),
  new Paragraph({ children: [run('AI CONTENT CREATION LAB', { bold: true, size: 56, color: 'FFFFFF' })], shading: shade(NAVY), spacing: { before: 200, after: 0 }, indent: { left: 300 } }),
  new Paragraph({ children: [run('Participant Workbook', { size: 32, color: 'FFFFFF' })], shading: shade(NAVY), spacing: { before: 0, after: 0 }, indent: { left: 300 } }),
  new Paragraph({ children: [run('One day. Thirty days of content. A system you can run yourself.', { size: 22, color: 'FFFFFF', italic: true })], shading: shade(NAVY), spacing: { before: 60, after: 200 }, indent: { left: 300 } }),
  new Paragraph({ children: [run('', { size: 22 })], spacing: { before: 600, after: 0 } }),
  p('For small business owners, trade professionals, and founders', { size: 24, spacing: { before: 100, after: 40 } }),
  p('Virtual on Microsoft Teams  |  7:00am to 3:00pm Eastern  |  5 seats', { size: 22, color: '444444' }),
  new Paragraph({ children: [run('', { size: 22 })], spacing: { before: 1800, after: 0 } }),
  p('Name: ______________________________________', { size: 22 }),
  p('Business: ____________________________________', { size: 22 }),
  p('Cohort date: __________________________________', { size: 22 }),
  new Paragraph({ children: [run('', { size: 22 })], spacing: { before: 1200, after: 0 } }),
  p('Glenn E. Daniels II  |  Touch Stone Publishers', { bold: true, size: 22 }),
]);

// 2 WELCOME + DAY MAP
pages.push([
  ...title('Welcome', 'Read this page before 7:00am'),
  h2('The promise'),
  body('You will leave today with four things: a Brand Voice Guide that tells any AI tool how to sound like you, four or five content pillars built from your real business, a prompt library you can run every week, and 30 days of posts drafted and edited by you. Not notes about content. Content.'),
  h2('How today works'),
  body('This is a work day, not a webinar. You will spend most of the day typing, not listening. Glenn demonstrates each step for a few minutes, then you do it for your business while he moves between the five of you. Everything you build goes in this workbook or in a document on your own computer. Keep both open.'),
  h2('The day map'),
  table(['Time (ET)', 'Block', 'What you build'], [
    ['7:00', 'Opening', 'The rules of the day and your one goal'],
    ['7:20', 'Module 1: Foundation', 'Customer snapshot, Raw Material Bank, Brand Voice Guide'],
    ['8:45', 'Break (15 min)', ''],
    ['9:00', 'Module 2: Pillars and Platform', 'Platform choice, content pillars, your Context Block'],
    ['10:30', 'Module 3: The 30-Day Plan', '30 post ideas on a calendar'],
    ['11:00', 'Working Lunch (45 min)', 'Batch draft all 30 posts while you eat. One-on-one check-in with Glenn'],
    ['11:45', 'Module 4: The Human Pass', 'Slop detector, edit pass on Weeks 1 and 2'],
    ['1:00', 'Break (15 min)', ''],
    ['1:15', 'Module 5: Multiply and Systemize', 'One idea in three formats, Weeks 3 and 4, your Monday routine'],
    ['2:20', 'Module 6: Publish and Commit', 'Post number one goes live. Your 30-day commitment'],
    ['2:50', 'Close', 'What you built and what happens tomorrow'],
    ['3:00', 'Done', ''],
  ], [1400, 3200, 4760]),
  h2('Three rules'),
  bullet('Camera on. Five people on a screen is a room. Five black squares is not.'),
  bullet('Your business, not a made-up one. Every exercise uses real customers, real jobs, real words.'),
  bullet('Done beats perfect. A rough post you published beats a polished post you never wrote.'),
]);

// 3 BEFORE CLASS
pages.push([
  ...title('Before Class', 'Do this the day before. It takes about 45 minutes.'),
  h2('Gather these and put them in one folder on your computer'),
  checkbox('Three samples of how you actually write to customers: an email, a text thread, a quote or proposal note. Remove names.'),
  checkbox('Five questions customers ask you all the time. One line each. Do not polish them.'),
  checkbox('Two stories from real jobs or clients. Two or three sentences each. What happened, what you did, how it ended.'),
  checkbox('Five to ten photos from your work: a job site, a finished project, your truck, your desk, your team.'),
  checkbox('Your logo and one decent photo of you. Phone quality is fine.'),
  h2('Set up your tools'),
  checkbox('An AI tool you are logged into and have used at least once: ChatGPT, Claude, or Gemini. Free tiers work. Paid tiers are faster.'),
  checkbox('Microsoft Teams installed and tested. Join the test link Glenn sent you. Check your camera and microphone.'),
  checkbox('Login to the social platform you post on most (LinkedIn, Facebook, or Instagram). You will publish one post live today.'),
  checkbox('A blank document open and saved as "Content System - [your business]". Every output today goes in it.'),
  checkbox('This workbook printed, or open on a second screen or tablet. You will write in it all day.'),
  h2('Set up your screen'),
  body('Two screens is ideal: Teams on one, your AI tool and blank document on the other. One screen works if you put Teams in a small window in the corner. A phone next to your laptop is a fine second screen for the workbook.'),
  h2('Your one goal for today'),
  body('Write the one type of job, client, or project you want more of. Be specific. "More commercial repaint jobs over $8,000" beats "more customers".'),
  writeBox(3),
]);

// 4 LAB 1.1
pages.push([
  ...title('Lab 1.1: Customer and Offer Snapshot', timeMeta('Module 1', '7:35', 20, 'Prompt P1')),
  body('Content that works is written to one person. This page names that person. Write fast and plain. You will sharpen it with the AI in a minute.'),
  h2('1. The customer you want more of'),
  body('Who are they? What kind of business or household? What are they dealing with the moment they start looking for someone like you?', { size: 20 }),
  writeBox(4),
  h2('2. What they are afraid of getting wrong'),
  body('The thing they worry about when hiring someone in your field. Price surprises. No-shows. Being talked down to. Work that fails in a year.', { size: 20 }),
  writeBox(3),
  h2('3. What you want more of'),
  body('The job, client, or project type. Copy it from page 3 and make it sharper.', { size: 20 }),
  writeBox(2),
  h2('4. Your sharpened customer paragraph'),
  body('Paste 1 through 3 into Prompt P1. Edit what comes back until every sentence is true. Write the final version here and save it in your document.', { size: 20 }),
  writeBox(5),
]);

// 5 LAB 1.2 (1 of 2)
pages.push([
  ...title('Lab 1.2: Raw Material Bank (1 of 2)', timeMeta('Module 1', '7:55', 25, 'Prompt P2')),
  body('Your business already contains more content than you can post in a year. This page collects it. Run Prompt P2 and answer the questions out loud or by typing. Then copy the 25 topics the AI gives you onto these two pages, in your own words. Cross out anything that is not true.'),
  h2('Questions customers ask all the time (aim for 6)'),
  writeBox(6, { lineHeight: 400 }),
  h2('Mistakes people make before they call you (aim for 5)'),
  writeBox(5, { lineHeight: 400 }),
  h2('How you actually do the work, step by step (aim for 5)'),
  writeBox(5, { lineHeight: 400 }),
]);

// 6 LAB 1.2 (2 of 2)
pages.push([
  ...title('Lab 1.2: Raw Material Bank (2 of 2)', 'Keep going. Rough is fine.'),
  h2('Stories from real jobs or clients (aim for 5)'),
  writeBox(5, { lineHeight: 400 }),
  h2('Things you believe that others in your field do not (aim for 4)'),
  writeBox(4, { lineHeight: 400 }),
  h2('Circle your five strongest topics'),
  body('The ones with a real detail in them: a number, a name of a part, a thing a customer said. These become your first five full posts.', { size: 20 }),
  callout('Save the full list of 25 in your document under the heading RAW MATERIAL BANK. You will paste it into Prompt P4 in Module 2.', GREEN),
  h2('Notes from the debrief'),
  writeBox(4, { lineHeight: 400 }),
]);

// 7 LAB 1.3
pages.push([
  ...title('Lab 1.3: Brand Voice Guide', timeMeta('Module 1', '8:20', 25, 'Prompt P3')),
  body('AI tools default to a voice that belongs to nobody. This page fixes that. Paste your three writing samples into Prompt P3. Read what comes back and correct it. If a rule is not how you talk, delete it. The AI describes; you decide.'),
  h2('My voice in one sentence'),
  writeBox(2),
  h2('My 8 voice rules (edited, in my words)'),
  table(['#', 'Rule'], [['1', ''], ['2', ''], ['3', ''], ['4', ''], ['5', ''], ['6', ''], ['7', ''], ['8', '']], [600, 8760], { rowHeight: 400 }),
  h2('Sounds like me / Does not sound like me'),
  table(['Words and phrases I use', 'Words and phrases I never use'], [['', ''], ['', ''], ['', ''], ['', ''], ['', '']], [4680, 4680], { rowHeight: 400 }),
  callout('Save the final version in your document under the heading VOICE GUIDE. This block goes into every prompt you run from now on.', GREEN),
]);

// 8 LAB 2.1
pages.push([
  ...title('Lab 2.1: Platform Decision', timeMeta('Module 2', '9:05', 15)),
  body('You do not need to be everywhere. You need to be consistent on one platform where your customer already looks. Score each row 1 to 3. Highest total wins. Ties go to the platform you already use most.'),
  table(['Question', 'LinkedIn', 'Facebook', 'Instagram'], [
    ['My best customer spends time here (1 rarely, 3 weekly)', '', '', ''],
    ['My competitors who are winning are visible here', '', '', ''],
    ['I already have an account and some contacts here', '', '', ''],
    ['My work is visual and photos sell it', '', '', ''],
    ['My customer is a business or a professional', '', '', ''],
    ['My customer is a homeowner or a local household', '', '', ''],
    ['I could post here without feeling like a fraud', '', '', ''],
    ['TOTAL', '', '', ''],
  ], [4860, 1500, 1500, 1500], { rowHeight: 400, boldFirstCol: false }),
  h2('My primary platform for the next 30 days'),
  writeBox(1),
  h2('Platform rules (paste the row for your platform into Prompt P7)'),
  table(['Platform', 'Length', 'First line', 'Links, hashtags, emojis'], [
    ['LinkedIn', '120 to 220 words', 'Under 12 words. No greeting.', 'No link in the post. No hashtags. No emojis.'],
    ['Facebook', '80 to 180 words', 'A specific local situation.', 'Link is fine at the end. No hashtags. Emojis only if you use them in real life.'],
    ['Instagram', 'Caption under 125 words plus a photo', 'Hook in the first 8 words.', 'No link. 5 to 10 hashtags on the last line. Emojis sparingly.'],
  ], [1500, 2000, 2400, 3460], { size: 16 }),
  callout('A quick guide to what each platform rewards is on page 20 of this workbook. Rough rules are enough for today. Consistency beats optimization.', GRAY),
]);

// 9 LAB 2.2
pages.push([
  ...title('Lab 2.2: Content Pillars', timeMeta('Module 2', '9:20', 25, 'Prompt P4')),
  body('Pillars are the four or five subjects you will keep coming back to. They stop the "what do I post" problem forever. Paste your customer paragraph and your Raw Material Bank into Prompt P4. Then edit what comes back: rename anything that sounds like a marketing department wrote it.'),
  table(['Pillar name (2 to 4 words)', 'What my customer gets from it', 'Topics from my bank that live here'], [
    ['1. PROOF (required)', '', ''],
    ['2. ANSWERS (required)', '', ''],
    ['3.', '', ''],
    ['4.', '', ''],
    ['5. (optional)', '', ''],
  ], [2400, 3200, 3760], { rowHeight: 1150, size: 18 }),
  h2('Check'),
  checkbox('Every one of my 25 topics lands in exactly one pillar'),
  checkbox('Every pillar name is a phrase I would say out loud to a customer'),
  checkbox('At least one pillar is built from things that happened this month'),
  callout('Save the final pillars in your document under the heading PILLARS.', GREEN),
]);

// 10 LAB 2.3
pages.push([
  ...title('Lab 2.3: Your Context Block', timeMeta('Module 2', '9:50', 35, 'Prompts P0 and P5')),
  body('The Context Block is the most valuable thing you build today. It is the paragraph you paste at the top of every AI session so the tool writes as you, for your customer, about your business. Assemble it in your document from the pieces below, then test it with Prompt P5.'),
  h2('Assembly checklist'),
  checkbox('ABOUT MY BUSINESS: two or three plain sentences'),
  checkbox('MY BEST CUSTOMER: paragraph from page 4'),
  checkbox('WHAT I WANT MORE OF: one line from page 4'),
  checkbox('MY VOICE: the 8 rules from page 7'),
  checkbox('MY CONTENT PILLARS: from page 9'),
  checkbox('MY PLATFORM: from page 8'),
  checkbox('RULES: copy from Prompt P0 and add any words you hate'),
  h2('Test post: what did the critique flag?'),
  body('Run Prompt P5. The AI writes one post and then criticizes its own work. Write the three flags here. They tell you what is still missing from your Context Block.', { size: 20 }),
  writeBox(3),
  h2('What I added to the Context Block after the test'),
  writeBox(3),
  callout('Save it under the heading CONTEXT BLOCK. Start every new AI conversation by pasting it. Never skip this step.', GREEN),
]);

// 11 LAB 3.1 (Weeks 1-2)
const ideaRows = (from, to) => Array.from({ length: to - from + 1 }, (_, i) => [String(from + i), '', '', '']);
pages.push([
  ...title('Lab 3.1: The 30-Day Idea Map (Days 1 to 15)', timeMeta('Module 3', '10:35', 25, 'Prompt P6')),
  body('Run Prompt P6 and copy the result here in your own words. F = full post, Q = quick post. Change anything that does not fit your business. Circle the five ideas you would be proudest to publish; those get edited first.', { size: 20 }),
  table(['Day', 'Pillar', 'Working title', 'F/Q'], ideaRows(1, 15), [700, 2200, 5660, 800], { rowHeight: 360, size: 16 }),
]);

// 12 LAB 3.1 (Weeks 3-4)
pages.push([
  ...title('Lab 3.1: The 30-Day Idea Map (Days 16 to 30)', 'Twenty full posts and ten quick posts. No two days in a row from the same pillar.'),
  table(['Day', 'Pillar', 'Working title', 'F/Q'], ideaRows(16, 30), [700, 2200, 5660, 800], { rowHeight: 360, size: 16 }),
  callout('Save the full table in your document under the heading IDEA MAP. Prompts P7 and P8 need it pasted in.', GREEN),
]);

// 13 WORKING LUNCH
pages.push([
  ...title('Working Lunch: The Batch Drafting Sprint', timeMeta('Working Lunch', '11:00', 45, 'Prompts P7 and P8')),
  body('Eat with one hand. Draft with the other. In 45 minutes the AI will produce all 30 rough drafts. You are not editing yet. You are generating. Glenn will pull each of you into the coaching room for an 8-minute one-on-one while the others keep working.'),
  h2('Run these in order'),
  checkbox('New AI conversation. Paste your Context Block.'),
  checkbox('Prompt P7 with posts 1 to 10 and your Idea Map. Paste the output into your document under WEEK 1 AND 2 DRAFTS.'),
  checkbox('Prompt P7 again with posts 11 to 20. Paste under WEEK 3 AND 4 DRAFTS.'),
  checkbox('Prompt P8 for the 10 quick posts. Paste under QUICK POSTS.'),
  checkbox('Read three drafts. Mark the one that sounds least like you. Bring it to Module 4.'),
  h2('My one-on-one slot'),
  table(['Slot', 'Time', 'Name'], [['1', '11:05', ''], ['2', '11:13', ''], ['3', '11:21', ''], ['4', '11:29', ''], ['5', '11:37', '']], [1200, 1800, 6360], { rowHeight: 380 }),
  h2('The one question I want to ask Glenn'),
  writeBox(2),
  h2('If the AI stalls or produces junk'),
  bullet('Check the Context Block is in this conversation. If you opened a new chat, paste it again.'),
  bullet('Ask for five posts instead of ten. Smaller batches, better drafts.'),
  bullet('If a draft has a fact you did not give it, delete the fact. Never publish an invented detail.'),
]);

// 14 LAB 4.1
pages.push([
  ...title('Lab 4.1: The Slop Detector', timeMeta('Module 4', '11:55', 20, 'Prompt P9')),
  body('AI drafts fail in predictable ways. Run three of your posts through this scorecard by eye, then through Prompt P9. Tick every box that applies. A post with two or more ticks gets rewritten in Lab 4.2.'),
  table(['Red flag', 'Post A', 'Post B', 'Post C'], [
    ['The first line could open a post for any business in my field', '', '', ''],
    ['There is a claim, number, or result I did not give the AI', '', '', ''],
    ['It uses a hype word or a word from my "never use" list', '', '', ''],
    ['A sentence runs past 25 words', '', '', ''],
    ['There is no specific detail: no part, no price, no place, no name of a thing', '', '', ''],
    ['It ends with a slogan instead of a next step or a question', '', '', ''],
    ['I would be embarrassed if a customer knew a machine wrote it', '', '', ''],
    ['TOTAL TICKS', '', '', ''],
  ], [5460, 1300, 1300, 1300], { rowHeight: 420, size: 17 }),
  h2('The pattern in my drafts'),
  body('Most people find the same flag in every post. Name yours. Then add one line to your Context Block RULES that prevents it.', { size: 20 }),
  writeBox(3),
  callout('Rule added to my Context Block: ______________________________________________', ORANGE),
]);

// 15 LAB 4.2
pages.push([
  ...title('Lab 4.2: The Edit Pass, Weeks 1 and 2', timeMeta('Module 4', '12:15', 40, 'Prompt P10')),
  body('This is the part the AI cannot do. Go through posts 1 to 10. For each one, add one true detail from a real job or client, cut anything you would not say out loud, and fix the first line. Use Prompt P10 when a post needs a full rebuild. Log your edits so you can see your own pattern.'),
  table(['Post', 'The true detail I added', 'Done'], Array.from({ length: 10 }, (_, i) => [String(i + 1), '', '']), [800, 7560, 1000], { rowHeight: 420, size: 18 }),
  h2('Peer swap'),
  body('Send one edited post to your partner in Teams chat. Read theirs. Reply with one line: the sentence that sounded most like a real person, and one sentence you would cut.', { size: 20 }),
  writeBox(3),
]);

// 16 LAB 5.1
pages.push([
  ...title('Lab 5.1: One Idea, Three Formats', timeMeta('Module 5', '1:20', 20, 'Prompt P11')),
  body('Take your best post from the edit pass. Run Prompt P11. You get a phone video script, a carousel outline, and a story version. Now one idea gives you four pieces of content. Edit them here.'),
  h2('The post I chose (number and title)'),
  writeBox(1),
  h2('40-second phone video script (first line under 8 words)'),
  writeBox(6, { lineHeight: 400 }),
  h2('Three-slide carousel: one headline per slide'),
  table(['Slide 1', 'Slide 2', 'Slide 3'], [['', '', '']], [3120, 3120, 3120], { rowHeight: 900 }),
  h2('Two-sentence story or status version'),
  writeBox(3, { lineHeight: 400 }),
  callout('Film the video this week. Prop the phone against a coffee cup, read the first line, and stop after 40 seconds. Nobody wants polish from a plumber. They want the plumber.', GRAY),
]);

// 17 LAB 5.2
pages.push([
  ...title('Lab 5.2: The Edit Pass, Weeks 3 and 4', timeMeta('Module 5', '1:40', 25, 'Prompts P9 and P10')),
  body('Same job as Lab 4.2, faster now that you know your pattern. Posts 11 to 20 and the 10 quick posts. Any post you cannot fix in three minutes gets moved to a "later" list. Twenty-five finished posts beat thirty half-finished ones.'),
  table(['Post', 'True detail added', 'Done'], Array.from({ length: 10 }, (_, i) => [String(i + 11), '', '']), [800, 7560, 1000], { rowHeight: 380, size: 18 }),
  h2('Quick posts (Q1 to Q10)'),
  body('Read each one out loud. If it sounds like you, tick it. If not, rewrite it in one line here.', { size: 20 }),
  table(['Q', 'Keep as is', 'Rewrite', 'Q', 'Keep as is', 'Rewrite'], [['1', '', '', '6', '', ''], ['2', '', '', '7', '', ''], ['3', '', '', '8', '', ''], ['4', '', '', '9', '', ''], ['5', '', '', '10', '', '']], [600, 1200, 2880, 600, 1200, 2880], { rowHeight: 380, size: 16 }),
  h2('Moved to "later"'),
  writeBox(2),
]);

// 18 LAB 5.3
pages.push([
  ...title('Lab 5.3: The Monday Routine', timeMeta('Module 5', '2:05', 15, 'Prompt P12')),
  body('Thirty days from now this calendar runs out. The Monday Routine is how you refill it in under two hours a week without ever staring at a blank page. Write your version below. Put it on your calendar before you leave today.'),
  table(['Step', 'What I do', 'Minutes', 'Day and time'], [
    ['1', 'Write down three things that happened last week: a job, a question, a problem, a win', '10', ''],
    ['2', 'New AI conversation. Paste Context Block. Run Prompt P12', '10', ''],
    ['3', 'Edit pass: one true detail per post, fix first lines, cut anything I would not say', '45', ''],
    ['4', 'Take or pick five photos from the week', '10', ''],
    ['5', 'Schedule the five posts using my platform’s built-in scheduler', '15', ''],
    ['6', 'Reply to every comment from last week using Prompt P13', '15', ''],
    ['', 'TOTAL', '105', ''],
  ], [700, 5460, 1200, 2000], { rowHeight: 520, size: 17 }),
  h2('What will stop me, and what I will do about it'),
  table(['What will get in the way', 'My answer to it'], [['', ''], ['', ''], ['', '']], [4680, 4680], { rowHeight: 520 }),
  callout('The system is not the posts. The system is the Monday Routine. Protect the two hours.', GRAY),
]);

// 19 LAB 6.1 + 6.2
pages.push([
  ...title('Lab 6.1 and 6.2: Publish and Commit', timeMeta('Module 6', '2:25', 25)),
  h2('Lab 6.1: Post number one goes live (15 minutes)'),
  checkbox('Pick the post from Week 1 you are proudest of'),
  checkbox('Read it out loud once. Fix anything you stumbled on.'),
  checkbox('Add a photo if your platform wants one'),
  checkbox('Publish it now, or schedule it for tomorrow at 7:30am if your platform supports scheduling'),
  checkbox('Paste the link in Teams chat'),
  checkbox('Schedule posts 2 through 5 for the rest of this week'),
  h2('Lab 6.2: My 30-day commitment (10 minutes)'),
  body('Write it as a sentence you would say to a customer. Specific. Measurable. Dated.', { size: 20 }),
  callout('For the next 30 days I will publish ______ posts per week on ______________ , and I will run my Monday Routine every ____________ at ________ .', LAB),
  h2('Accountability partner'),
  body('Pick one person from today. Exchange numbers. Text each other every Monday with one word: "Posted."', { size: 20 }),
  table(['Partner', 'Phone or email', 'First check-in date'], [['', '', '']], [3120, 3120, 3120], { rowHeight: 500 }),
  h2('Signed'),
  writeBox(2),
]);

// 20 DELIVERABLES + platform guide
pages.push([
  ...title('What You Built Today', 'Check every box before you sign off at 3:00pm'),
  checkbox('Customer paragraph (page 4), saved in my document'),
  checkbox('Raw Material Bank: 25 topics (pages 5 and 6)'),
  checkbox('Brand Voice Guide: 8 rules plus word lists (page 7)'),
  checkbox('Platform decision and platform rules (page 8)'),
  checkbox('Four or five content pillars (page 9)'),
  checkbox('Context Block, tested (page 10)'),
  checkbox('30-Day Idea Map (pages 11 and 12)'),
  checkbox('20 full posts, drafted and edited'),
  checkbox('10 quick posts, drafted and checked'),
  checkbox('One idea in three extra formats (page 16)'),
  checkbox('My Monday Routine, on my calendar (page 18)'),
  checkbox('Post number one published or scheduled (page 19)'),
  checkbox('Prompt Sheet saved where I can find it'),
  h2('What each platform rewards (rough guide)'),
  table(['Platform', 'What gets seen', 'What gets ignored'], [
    ['LinkedIn', 'Plain first lines, real stories, posts that read as one person talking. Comments in the first hour.', 'Links in the post body. Corporate voice. Posting and vanishing.'],
    ['Facebook', 'Local detail, photos of real work, questions neighbors want to answer. Replies to every comment.', 'Stock photos. Salesy language. Posts with no picture.'],
    ['Instagram', 'One strong photo or short video. Captions that sound like a person. Stories from the job site.', 'Blurry photos. Twenty hashtags. Captions written for a search engine.'],
  ], [1500, 3930, 3930], { size: 16 }),
  h2('Tomorrow'),
  body('Post number two goes out. Then number three. Do not reread the whole calendar. Do not rebuild the system. Just publish the next one.'),
  h2('If you want help keeping it going'),
  body('Glenn will explain two options at the close: the Done-With-You Content Sprint, a 90-minute private session to build your 90-day calendar, and the monthly membership with a live session and content review. Details on the sheet he drops in chat. Nothing to decide today.', { size: 20 }),
]);

// 21 NOTES
pages.push([
  ...title('Notes', 'Things Glenn said that I want to remember'),
  writeBox(24, { lineHeight: 400 }),
  p('Glenn E. Daniels II  |  Touch Stone Publishers', { bold: true, size: 18, align: AlignmentType.CENTER, spacing: { before: 200, after: 0 } }),
]);

// ───────────────────────────── ASSEMBLE ─────────────────────────────
if (pages.length !== P.notes) {
  console.error(`Page count mismatch: built ${pages.length} pages, pages.js expects ${P.notes}`);
  process.exit(1);
}
const children = [];
pages.forEach((pg, i) => { if (i > 0) children.push(pageBreak()); children.push(...pg); });

const doc = new Document({
  numbering: { config: [{ reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 520, hanging: 260 } } } }] }] },
  styles: { default: { document: { run: { font: FONT, size: 22 } } } },
  sections: [{
    properties: { page: { size: { width: 12240, height: 15840 }, margin: { top: 1080, bottom: 1000, left: 1440, right: 1440 } } },
    footers: {
      default: new Footer({ children: [new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [run('AI Content Creation Lab  |  Touch Stone Publishers  |  Page ', { size: 16, color: '808080' }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 16, color: '808080' })],
      })] }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buf) => {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, buf);
  console.log(`Workbook written: ${outPath} (${Math.round(buf.length / 1024)}KB, ${pages.length} pages)`);
});
