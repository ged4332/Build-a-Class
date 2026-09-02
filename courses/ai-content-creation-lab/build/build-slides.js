#!/usr/bin/env node
// Builds the slide deck (.pptx) for the AI Content Creation Lab.
// Usage: node build-slides.js --out ../AI-Content-Creation-Lab-Slides.pptx

const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');
const P = require('./pages');

const args = process.argv.slice(2);
const outPath = args[args.indexOf('--out') + 1] || path.join(__dirname, '..', 'AI-Content-Creation-Lab-Slides.pptx');

// Palette: warm terracotta for a trades and founders room. Not boardroom navy.
const C = {
  terra: 'B85042', terraDark: '8F3A2F', charcoal: '2B2B2B', ink: '3A3A3A', muted: '6B6B6B',
  sand: 'F1EEE4', sandDeep: 'E7E8D1', sage: 'A7BEAE', sageDeep: '6F8F7E', white: 'FFFFFF',
  green: 'D4EDDA', orange: 'FFE8CC',
};
const HEAD = 'Cambria';
const BODY = 'Calibri';

const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 in
pres.author = 'Glenn E. Daniels II';
pres.company = 'Touch Stone Publishers';
pres.title = 'AI Content Creation Lab';

let slideNo = 0;

function chrome(slide, { dark = false, page = null, time = null } = {}) {
  slideNo += 1;
  const fg = dark ? C.sand : C.muted;
  slide.addText(`AI Content Creation Lab  |  Touch Stone Publishers`, { x: 0.5, y: 5.2, w: 6, h: 0.3, fontFace: BODY, fontSize: 9, color: fg, isTextBox: true, margin: 0 });
  slide.addText(String(slideNo), { x: 9.0, y: 5.2, w: 0.5, h: 0.3, fontFace: BODY, fontSize: 9, color: fg, align: 'right', isTextBox: true, margin: 0 });
  if (page) {
    slide.addShape(pres.ShapeType.roundRect, { x: 7.3, y: 5.15, w: 1.55, h: 0.36, fill: { color: C.green }, line: { color: C.green }, rectRadius: 0.08 });
    slide.addText(`Workbook p.${page}`, { x: 7.3, y: 5.15, w: 1.55, h: 0.36, fontFace: BODY, fontSize: 10, bold: true, color: '1E4D2B', align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  }
  if (time) {
    slide.addShape(pres.ShapeType.roundRect, { x: 7.55, y: 0.42, w: 1.95, h: 0.5, fill: { color: dark ? C.sand : C.terra }, line: { color: dark ? C.sand : C.terra }, rectRadius: 0.1 });
    slide.addText(time, { x: 7.55, y: 0.42, w: 1.95, h: 0.5, fontFace: BODY, fontSize: 12, bold: true, color: dark ? C.charcoal : C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  }
}

function titleText(slide, text, { dark = false, w = 6.8, size = 30 } = {}) {
  slide.addText(text, { x: 0.5, y: 0.35, w, h: 0.9, fontFace: HEAD, fontSize: size, bold: true, color: dark ? C.white : C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
}

function bullets(slide, items, { x = 0.5, y = 1.4, w = 5.6, h = 3.6, size = 15, color = C.ink } = {}) {
  slide.addText(items.map((t, i) => ({ text: t, options: { bullet: { indent: 14 }, breakLine: i < items.length - 1, paraSpaceAfter: 8 } })),
    { x, y, w, h, fontFace: BODY, fontSize: size, color, valign: 'top', isTextBox: true, margin: 0 });
}

// Big numbered cards in a row.
function cards(slide, items, { y = 1.45, h = 3.3, size = 13, x0 = 0.5, gap = 0.25, width = 9 } = {}) {
  const n = items.length;
  const w = (width - gap * (n - 1)) / n;
  items.forEach((it, i) => {
    const x = x0 + i * (w + gap);
    slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: C.sand }, line: { color: C.sand }, rectRadius: 0.12 });
    slide.addShape(pres.ShapeType.roundRect, { x: x + 0.2, y: y + 0.2, w: 0.7, h: 0.7, fill: { color: C.terra }, line: { color: C.terra }, rectRadius: 0.15 });
    slide.addText(it.n, { x: x + 0.2, y: y + 0.2, w: 0.7, h: 0.7, fontFace: HEAD, fontSize: 24, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
    slide.addText(it.title, { x: x + 0.2, y: y + 1.05, w: w - 0.4, h: 0.6, fontFace: HEAD, fontSize: 16, bold: true, color: C.charcoal, valign: 'top', isTextBox: true, margin: 0 });
    slide.addText(it.body, { x: x + 0.2, y: y + 1.65, w: w - 0.4, h: h - 1.85, fontFace: BODY, fontSize: size, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  });
}

// Right-hand lab panel: minutes, prompt, output.
function labPanel(slide, { minutes, prompt, output }) {
  const x = 6.4, y = 1.4, w = 3.1, h = 3.55;
  slide.addShape(pres.ShapeType.roundRect, { x, y, w, h, fill: { color: C.sand }, line: { color: C.sand }, rectRadius: 0.12 });
  slide.addText(String(minutes), { x: x + 0.2, y: y + 0.15, w: w - 0.4, h: 1.0, fontFace: HEAD, fontSize: 54, bold: true, color: C.terra, align: 'left', valign: 'middle', isTextBox: true, margin: 0 });
  slide.addText('minutes', { x: x + 0.2, y: y + 1.1, w: w - 0.4, h: 0.3, fontFace: BODY, fontSize: 12, color: C.muted, isTextBox: true, margin: 0 });
  slide.addShape(pres.ShapeType.roundRect, { x: x + 0.2, y: y + 1.55, w: w - 0.4, h: 0.5, fill: { color: C.orange }, line: { color: C.orange }, rectRadius: 0.08 });
  slide.addText(prompt, { x: x + 0.2, y: y + 1.55, w: w - 0.4, h: 0.5, fontFace: BODY, fontSize: 12, bold: true, color: '7A4A00', align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  slide.addText('You leave with', { x: x + 0.2, y: y + 2.2, w: w - 0.4, h: 0.3, fontFace: BODY, fontSize: 11, bold: true, color: C.muted, isTextBox: true, margin: 0 });
  slide.addText(output, { x: x + 0.2, y: y + 2.5, w: w - 0.4, h: h - 2.6, fontFace: BODY, fontSize: 13, color: C.charcoal, valign: 'top', isTextBox: true, margin: 0 });
}

function divider({ module, title, time, line, notes }) {
  const s = pres.addSlide();
  s.background = { color: C.charcoal };
  s.addShape(pres.ShapeType.roundRect, { x: 0.5, y: 0.6, w: 1.1, h: 1.1, fill: { color: C.terra }, line: { color: C.terra }, rectRadius: 0.2 });
  s.addText(module, { x: 0.5, y: 0.6, w: 1.1, h: 1.1, fontFace: HEAD, fontSize: 40, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  s.addText(title, { x: 0.5, y: 2.0, w: 9, h: 1.0, fontFace: HEAD, fontSize: 38, bold: true, color: C.white, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText(time, { x: 0.5, y: 3.0, w: 9, h: 0.5, fontFace: BODY, fontSize: 18, color: C.sage, isTextBox: true, margin: 0 });
  s.addText(line, { x: 0.5, y: 3.6, w: 9, h: 1.2, fontFace: BODY, fontSize: 16, italic: true, color: C.sand, valign: 'top', isTextBox: true, margin: 0 });
  chrome(s, { dark: true });
  if (notes) s.addNotes(notes);
  return s;
}

function breakSlide(label, time, line) {
  const s = pres.addSlide();
  s.background = { color: C.sandDeep };
  s.addText(label, { x: 0.5, y: 1.4, w: 9, h: 1.2, fontFace: HEAD, fontSize: 48, bold: true, color: C.charcoal, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  s.addText(time, { x: 0.5, y: 2.6, w: 9, h: 0.6, fontFace: BODY, fontSize: 24, color: C.terra, align: 'center', isTextBox: true, margin: 0 });
  s.addText(line, { x: 1.5, y: 3.4, w: 7, h: 0.9, fontFace: BODY, fontSize: 16, color: C.ink, align: 'center', valign: 'top', isTextBox: true, margin: 0 });
  chrome(s);
  s.addNotes('Cameras can go off. Be back on time; start on time even if one person is missing.');
}

function labSlide({ title, time, page, minutes, prompt, output, steps, notes, callout }) {
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, title, { size: 26 });
  bullets(s, steps, { x: 0.5, y: 1.4, w: 5.5, h: callout ? 2.6 : 3.5, size: 14 });
  if (callout) {
    s.addShape(pres.ShapeType.roundRect, { x: 0.5, y: 4.15, w: 5.5, h: 0.8, fill: { color: C.sandDeep }, line: { color: C.sandDeep }, rectRadius: 0.1 });
    s.addText(callout, { x: 0.65, y: 4.15, w: 5.2, h: 0.8, fontFace: BODY, fontSize: 13, italic: true, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  }
  labPanel(s, { minutes, prompt, output });
  chrome(s, { page, time });
  if (notes) s.addNotes(notes);
  return s;
}

// ───────────────────────────── SLIDES ─────────────────────────────

// 1 Title
{
  const s = pres.addSlide();
  s.background = { color: C.charcoal };
  s.addShape(pres.ShapeType.roundRect, { x: 0.5, y: 0.7, w: 1.3, h: 1.3, fill: { color: C.terra }, line: { color: C.terra }, rectRadius: 0.25 });
  s.addText('30', { x: 0.5, y: 0.7, w: 1.3, h: 1.3, fontFace: HEAD, fontSize: 44, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('AI Content Creation Lab', { x: 0.5, y: 2.2, w: 9, h: 1.0, fontFace: HEAD, fontSize: 44, bold: true, color: C.white, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('One day. Thirty days of content. A system you can run yourself.', { x: 0.5, y: 3.15, w: 9, h: 0.5, fontFace: BODY, fontSize: 20, color: C.sage, isTextBox: true, margin: 0 });
  s.addText('For small business owners, trade professionals, and founders\nVirtual on Microsoft Teams  |  7:00am to 3:00pm Eastern  |  Five seats', { x: 0.5, y: 3.9, w: 9, h: 0.8, fontFace: BODY, fontSize: 14, color: C.sand, valign: 'top', isTextBox: true, margin: 0 });
  s.addText('Glenn E. Daniels II  |  Touch Stone Publishers', { x: 0.5, y: 4.7, w: 9, h: 0.4, fontFace: BODY, fontSize: 13, bold: true, color: C.white, isTextBox: true, margin: 0 });
  chrome(s, { dark: true });
  s.addNotes('On screen from 6:45am. Greet each person by name. Ask them to type their AI tool into chat. Start at 7:00 sharp. Guide: Module 0.');
}

// 2 The promise
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'By 3:00pm you will have four things', { w: 9 });
  cards(s, [
    { n: '1', title: 'A Brand Voice Guide', body: 'Eight rules that make any AI tool sound like you, built from how you already write to customers.' },
    { n: '2', title: 'Content pillars', body: 'Four or five subjects you return to forever, built from your real jobs and real questions.' },
    { n: '3', title: 'A prompt library', body: 'Sixteen prompts that work in ChatGPT, Claude, and Gemini. One of them refills your calendar every Monday.' },
    { n: '4', title: '30 days of posts', body: 'Twenty full posts and ten quick posts, drafted by the machine and edited by you. One is live before you log off.' },
  ]);
  chrome(s, { page: P.welcome });
  s.addNotes('Speaker: Welcome, then The tool question. Not a webinar. Most of the day the only sound is typing.');
}

// 3 Day map
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'The day', { w: 6 });
  const rows = [
    ['7:00', 'Opening', 'Rules of the day, your one goal'],
    ['7:20', 'Module 1: Foundation', 'Customer, Raw Material Bank, Voice Guide'],
    ['8:45', 'Break', ''],
    ['9:00', 'Module 2: Pillars and Platform', 'Platform, pillars, your Context Block'],
    ['10:30', 'Module 3: The 30-Day Plan', '30 ideas on a calendar'],
    ['11:00', 'Working Lunch', 'All 30 drafts. One-on-one with Glenn'],
    ['11:45', 'Module 4: The Human Pass', 'Slop detector, edit Weeks 1 and 2'],
    ['1:00', 'Break', ''],
    ['1:15', 'Module 5: Multiply and Systemize', 'Three formats, Weeks 3 and 4, Monday Routine'],
    ['2:20', 'Module 6: Publish and Commit', 'Post one goes live. Your commitment'],
    ['2:50', 'Close', 'What you built. What happens tomorrow'],
  ];
  const tableRows = rows.map((r) => r.map((c, i) => ({ text: c, options: { fontFace: BODY, fontSize: 11, bold: i === 1, color: r[1] === 'Break' ? C.muted : C.charcoal, fill: { color: r[1] === 'Break' ? C.sandDeep : C.white }, margin: [3, 6, 3, 6] } })));
  s.addTable(tableRows, { x: 0.5, y: 1.35, w: 9, colW: [0.9, 3.1, 5.0], border: { type: 'solid', pt: 0.5, color: 'DDDDDD' }, rowH: 0.32 });
  chrome(s, { page: P.welcome });
  s.addNotes('Every block ends with something built, not something learned. Point at the working lunch: it is a work block with a one-on-one, not a break.');
}

// 4 Three rules
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Three rules', { w: 9 });
  cards(s, [
    { n: '1', title: 'Camera on', body: 'Five people on a screen is a room. Five black squares is not.' },
    { n: '2', title: 'Your real business', body: 'Real customers, real jobs, real words. No made-up examples, all day.' },
    { n: '3', title: 'Done beats perfect', body: 'A rough post you published beats a polished post you never wrote.' },
  ], { h: 2.9 });
  s.addText('Stuck? Raise your hand in Teams. Glenn comes to you.', { x: 0.5, y: 4.55, w: 9, h: 0.4, fontFace: BODY, fontSize: 14, italic: true, color: C.muted, isTextBox: true, margin: 0 });
  chrome(s, { page: P.welcome });
  s.addNotes('Speaker: Three rules, then How to get help. The fix for most stuck moments is a new conversation with the Context Block pasted in.');
}

// 5 Introductions
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Introductions: sixty seconds each', { w: 7 });
  s.addShape(pres.ShapeType.roundRect, { x: 0.5, y: 1.5, w: 4.2, h: 3.3, fill: { color: C.sand }, line: { color: C.sand }, rectRadius: 0.12 });
  s.addText([
    { text: 'Your name', options: { bullet: true, breakLine: true, paraSpaceAfter: 10 } },
    { text: 'Your business', options: { bullet: true, breakLine: true, paraSpaceAfter: 10 } },
    { text: 'The one thing you want more of', options: { bullet: true, breakLine: true, paraSpaceAfter: 10 } },
    { text: 'Straight off page 3. Do not improvise.', options: { italic: true, color: C.muted } },
  ], { x: 0.8, y: 1.7, w: 3.7, h: 2.9, fontFace: BODY, fontSize: 18, color: C.charcoal, valign: 'top', isTextBox: true, margin: 0 });
  s.addText('60', { x: 5.3, y: 1.4, w: 4.2, h: 2.2, fontFace: HEAD, fontSize: 120, bold: true, color: C.terra, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('seconds. Glenn goes first.', { x: 5.3, y: 3.6, w: 4.2, h: 0.5, fontFace: BODY, fontSize: 18, color: C.muted, align: 'center', isTextBox: true, margin: 0 });
  chrome(s, { page: P.beforeClass, time: '7:08  |  8 min' });
  s.addNotes('Go first on the demo business. Hard stop at 60 seconds. Write each person\'s "want more of" in your notes; you use them in every debrief.');
}

// 6 Module 1 divider
divider({ module: '1', title: 'Foundation', time: '7:20 to 8:45  |  Workbook pages 4 to 7', line: 'Ninety minutes ago the machine knew nothing about you. By the break it knows the three things that matter most.', notes: 'Guide: Module 1 opening. Run the blank-prompt demo on screen, then the Context Block demo. Two minutes each. Do not explain the Context Block yet.' });

// 7 Five things the machine does not know
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Five things the machine does not know about you', { w: 6.8, size: 24 });
  cards(s, [
    { n: '1', title: 'Your customer', body: 'Who calls, and at what moment.' },
    { n: '2', title: 'What you want', body: 'The job you want more of.' },
    { n: '3', title: 'How you talk', body: 'Your words. Not "reliable, trusted, family-owned."' },
    { n: '4', title: 'What you know', body: 'The questions you answer every week.' },
    { n: '5', title: 'What you believe', body: 'What the guy down the street gets wrong.' },
  ], { y: 1.5, h: 2.9, size: 12 });
  s.addText('Give it nothing and it gives you the average of everything.', { x: 0.5, y: 4.55, w: 9, h: 0.4, fontFace: HEAD, fontSize: 16, italic: true, color: C.terra, isTextBox: true, margin: 0 });
  chrome(s, { time: '7:20  |  15 min' });
  s.addNotes('Speaker: Why AI content sounds like nobody. Then the two demos. This module gets all five out of their heads and into a document.');
}

// 8 Lab 1.1
labSlide({
  title: 'Lab 1.1: Customer and Offer Snapshot', time: '7:35  |  20 min', page: P.lab11, minutes: 20, prompt: 'Prompt P1',
  output: 'One paragraph naming the person every post is written to, saved in your document.',
  steps: [
    'Boxes 1 to 3: who they are, what they are afraid of getting wrong, what you want more of. Eight minutes, fast and plain.',
    'Paste all three into Prompt P1.',
    'Cross out anything the machine invented. Write the final paragraph in box 4.',
    'Share one sentence: the moment they go looking for you.',
  ],
  callout: 'Written to one person, in one situation, at one moment. Never to a demographic.',
  notes: 'Watch for invented demographics ("busy professionals aged 35 to 55"). Delete anything the machine invented. Debrief questions are in the guide.',
});

// 9 Lab 1.2
labSlide({
  title: 'Lab 1.2: The Raw Material Bank', time: '7:55  |  25 min', page: P.lab12a, minutes: 25, prompt: 'Prompt P2',
  output: '25 content topics in your own words, on pages 5 and 6 and in your document.',
  steps: [
    'Let the machine interview you. One question at a time.',
    'Five areas: questions customers ask, mistakes people make, how you do the work, stories from jobs, what you believe that others do not.',
    'Answer like you are talking to a new hire on the drive to a job. Do not polish.',
    'Copy the 25 topics to the workbook. Circle your five strongest.',
  ],
  callout: 'Strong topics have a real detail in them: a number, a part, a thing a customer said.',
  notes: 'If the tool asks all twelve questions at once: "One question at a time. Ask the first one." Two-minute warning at 8:12.',
});

// 10 Lab 1.3
labSlide({
  title: 'Lab 1.3: Brand Voice Guide', time: '8:20  |  25 min', page: P.lab13, minutes: 25, prompt: 'Prompt P3',
  output: 'Eight voice rules and two word lists that make any AI tool write like you.',
  steps: [
    'You do not describe your voice. You show it. Paste three real samples: an email, a text thread, a quote note.',
    'The machine describes your voice, writes eight rules, and lists words that sound like you and words that do not.',
    'Edit. If a rule could describe your competitor, delete it.',
    'Read one rule to the room: the one that is most you.',
  ],
  callout: 'The machine describes. You decide.',
  notes: 'No samples? A 90-second voicemail to a customer, transcribed by the phone. Push for concrete rules: "Starts with the problem." "Never says utilize."',
});

// 11 Break
breakSlide('Break', '8:45 to 9:00', 'Back at nine sharp. Save your document first.');

// 12 Module 2 divider
divider({ module: '2', title: 'Pillars, Platform, and the Context Block', time: '9:00 to 10:30  |  Workbook pages 8 to 10', line: 'Everything from this morning goes into one block of text that turns a generic tool into your tool.', notes: 'Re-entry question: hands up if the machine called your voice "warm and professional." Hands up if you kept that rule. Deleting what could describe anyone is the whole skill.' });

// 13 Lab 2.1
labSlide({
  title: 'Lab 2.1: Platform Decision', time: '9:05  |  15 min', page: P.lab21, minutes: 15, prompt: 'No AI. Pen and paper.',
  output: 'One platform for the next 30 days, and the rules for it.',
  steps: [
    'Seven questions, three columns. Score each 1 to 3.',
    'Highest total wins. Ties go to the app you already open without thinking.',
    'Copy the platform rules row below the grid. It goes into your lunch prompt.',
    'Share: your platform and the row that decided it.',
  ],
  callout: 'Everywhere is how you end up nowhere. Consistent on one beats scattered on three.',
  notes: 'Trades and local services usually land on Facebook or Instagram. Consultants and founders land on LinkedIn. Do not overrule anyone.',
});

// 14 Lab 2.2
labSlide({
  title: 'Lab 2.2: Content Pillars', time: '9:20  |  25 min', page: P.lab22, minutes: 25, prompt: 'Prompt P4',
  output: 'Four or five pillars, each with a plain name and the topics that live in it.',
  steps: [
    'A pillar is a subject you come back to forever. Every post belongs to one.',
    'Two are required. Proof: real stories and results. Answers: the questions customers actually ask.',
    'Paste your customer paragraph and Raw Material Bank into Prompt P4.',
    'Rename anything a marketing department would say. Then run the three checks.',
  ],
  callout: 'Would you say the pillar name to a customer at the counter? If not, rename it.',
  notes: 'Merge until four or five pillars with at least four topics each. The overflowing pillar is the one customers care about most; post from it twice as often.',
});

// 15 Lab 2.3
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Lab 2.3: The Context Block', { size: 26 });
  s.addText('The paragraph you paste at the top of every AI conversation, today and every Monday for the rest of your life.', { x: 0.5, y: 1.3, w: 5.6, h: 0.7, fontFace: BODY, fontSize: 14, italic: true, color: C.muted, valign: 'top', isTextBox: true, margin: 0 });
  const parts = ['About my business', 'My best customer  (p.4)', 'What I want more of  (p.4)', 'My voice  (p.7)', 'My content pillars  (p.9)', 'My platform  (p.8)', 'Rules: no hype, no invented facts, words I hate'];
  parts.forEach((t, i) => {
    const y = 2.05 + i * 0.4;
    slideChip(s, 0.5, y, String(i + 1));
    s.addText(t, { x: 1.0, y, w: 5.0, h: 0.34, fontFace: BODY, fontSize: 13, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  });
  labPanel(s, { minutes: 35, prompt: 'Prompts P0 and P5', output: 'A tested Context Block, saved where you can find it in five seconds.' });
  chrome(s, { page: P.lab23, time: '9:50  |  35 min' });
  s.addNotes('Fifteen minutes to assemble, ten to test with P5, five to add what the critique flagged. Check every screen: voice rules pasted in full, "do not invent facts" still there, platform matches 9:20.');
}
function slideChip(s, x, y, label) {
  s.addShape(pres.ShapeType.roundRect, { x, y, w: 0.34, h: 0.34, fill: { color: C.terra }, line: { color: C.terra }, rectRadius: 0.08 });
  s.addText(label, { x, y, w: 0.34, h: 0.34, fontFace: BODY, fontSize: 11, bold: true, color: C.white, align: 'center', valign: 'middle', isTextBox: true, margin: 0 });
}

// 16 Module 3 divider
divider({ module: '3', title: 'The 30-Day Plan', time: '10:30 to 11:00  |  Workbook pages 11 and 12', line: 'Thirty separate requests is thirty chances for the machine to drift. Plan thirty ideas first, then draft in batches.', notes: 'Speaker: Why plan before drafting. Twenty full posts, ten quick posts. Quick posts are the ones that get comments and the ones you can do in five minutes.' });

// 17 Lab 3.1
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Lab 3.1: The 30-Day Idea Map', { size: 26 });
  s.addText('20', { x: 0.5, y: 1.35, w: 1.6, h: 1.1, fontFace: HEAD, fontSize: 60, bold: true, color: C.terra, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('full posts\n120 to 220 words, one true detail each', { x: 2.1, y: 1.35, w: 3.9, h: 1.1, fontFace: BODY, fontSize: 14, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('10', { x: 0.5, y: 2.5, w: 1.6, h: 1.1, fontFace: HEAD, fontSize: 60, bold: true, color: C.sageDeep, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('quick posts\na question, a photo caption, a one-line tip', { x: 2.1, y: 2.5, w: 3.9, h: 1.1, fontFace: BODY, fontSize: 14, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  bullets(s, ['Run Prompt P6 in the same conversation as your test post.', 'Copy the table to pages 11 and 12 in your own words. Kill anything you would not be proud of.', 'Circle five. Those get edited first.'], { x: 0.5, y: 3.7, w: 5.5, h: 1.3, size: 13 });
  labPanel(s, { minutes: 25, prompt: 'Prompt P6', output: 'Thirty ideas on a calendar. No two days in a row from the same pillar.' });
  chrome(s, { page: P.lab31a, time: '10:35  |  25 min' });
  s.addNotes('Copying thirty rows takes longer than people expect. Slow? Copy day, pillar, and F or Q only. If the tool front-loads quick posts or repeats pillars, ask it to redo the table.');
}

// 18 Working lunch
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Working Lunch: The Batch Drafting Sprint', { w: 6.8, size: 22 });
  s.addText('Eat with one hand. Draft with the other. You are generating, not editing.', { x: 0.5, y: 1.35, w: 5.6, h: 0.45, fontFace: BODY, fontSize: 13, italic: true, color: C.muted, isTextBox: true, margin: 0 });
  const steps = ['New conversation. Paste your Context Block.', 'Prompt P7, posts 1 to 10, with your Idea Map.', 'Prompt P7 again, posts 11 to 20.', 'Prompt P8, all ten quick posts.', 'Read three drafts. Mark the one that sounds least like you.'];
  steps.forEach((t, i) => {
    const y = 1.95 + i * 0.45;
    slideChip(s, 0.5, y, String(i + 1));
    s.addText(t, { x: 1.0, y, w: 5.1, h: 0.36, fontFace: BODY, fontSize: 13, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  });
  s.addShape(pres.ShapeType.roundRect, { x: 6.4, y: 1.4, w: 3.1, h: 3.55, fill: { color: C.sand }, line: { color: C.sand }, rectRadius: 0.12 });
  s.addText('One-on-one with Glenn', { x: 6.6, y: 1.55, w: 2.7, h: 0.4, fontFace: HEAD, fontSize: 15, bold: true, color: C.charcoal, isTextBox: true, margin: 0 });
  s.addText('Eight minutes each, in the Coaching Room. Everyone else keeps drafting.', { x: 6.6, y: 1.95, w: 2.7, h: 0.6, fontFace: BODY, fontSize: 11, color: C.muted, valign: 'top', isTextBox: true, margin: 0 });
  ['11:05', '11:13', '11:21', '11:29', '11:37'].forEach((t, i) => {
    s.addText(`${i + 1}    ${t}    ________________`, { x: 6.6, y: 2.6 + i * 0.42, w: 2.7, h: 0.36, fontFace: BODY, fontSize: 12, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  });
  chrome(s, { page: P.lunch, time: '11:00  |  45 min' });
  s.addNotes('Assign slot order by who looked most stuck this morning; they go first. The 8-minute one-on-one script is in the guide: three questions, do not fix their content for them. Two-minute warning at 11:43.');
}

// 19 Module 4 divider
divider({ module: '4', title: 'The Human Pass', time: '11:45 to 1:00  |  Workbook pages 14 and 15', line: 'AI drafts fail in the same seven ways, every time, for everyone. Once you can see the seven, you can fix a post in ninety seconds.', notes: 'Re-entry: "Who has a draft that sounds like a robot? Read it to us." Type the flags into chat in real time as they read.' });

// 20 Lab 4.1 seven red flags
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Lab 4.1: The seven red flags', { size: 26 });
  const flags = ['The first line could open a post for any business in your field', 'A claim, number, or result you did not give the machine', 'A hype word, or a word from your never-use list', 'A sentence past 25 words', 'No specific detail: no part, no price, no place', 'Ends with a slogan instead of a next step or a question', 'You would be embarrassed if a customer knew a machine wrote it'];
  flags.forEach((t, i) => {
    const y = 1.35 + i * 0.5;
    slideChip(s, 0.5, y + 0.04, String(i + 1));
    s.addText(t, { x: 1.0, y, w: 5.1, h: 0.42, fontFace: BODY, fontSize: 13, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  });
  labPanel(s, { minutes: 20, prompt: 'Prompt P9', output: 'Your pattern, named. One new rule added to your Context Block that prevents it.' });
  chrome(s, { page: P.lab41, time: '11:55  |  20 min' });
  s.addNotes('Three posts: worst, middle, one you think is good. By eye first, then P9 on the worst. Two or more ticks means a rewrite in Lab 4.2. Everyone pastes their new rule into the Context Block before moving on.');
}

// 21 Lab 4.2
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Lab 4.2: The Edit Pass, Weeks 1 and 2', { w: 6.8, size: 24 });
  cards(s, [
    { n: '+', title: 'Add one true detail', body: 'A price. A part. A street. A thing the customer said. Log it on page 15.' },
    { n: '−', title: 'Cut what you would not say', body: 'Read it out loud. Anything you stumble on goes.' },
    { n: '1', title: 'Fix the first line', body: 'A specific situation your customer recognizes. Never a greeting.' },
  ], { y: 1.4, h: 2.55, size: 13 });
  s.addText('Three minutes per post. Full rebuild needed? Prompt P10 with the post and the true detail.   Last ten minutes: peer swap in chat.', { x: 0.5, y: 4.15, w: 9, h: 0.8, fontFace: BODY, fontSize: 13, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  chrome(s, { page: P.lab42, time: '12:15  |  40 min' });
  s.addNotes('Longest quiet block of the day. Walk the roster at 12:25 and 12:40. Perfectionists: "Three minutes per post. Anything longer goes on the later list." Pair 1 with 2, 3 with 4, 5 with you.');
}

// 22 Break
breakSlide('Break', '1:00 to 1:15', 'Ten posts done. Look at post one from this morning and post one now. That difference is you.');

// 23 Module 5 divider
divider({ module: '5', title: 'Multiply and Systemize', time: '1:15 to 2:20  |  Workbook pages 16 to 18', line: 'The people who seem to post constantly are not writing constantly. They are reusing. And they have a Monday.', notes: 'Re-entry: everyone holds up the workbook to the camera, open to page 15. Every log has ink on it. Fifty finished posts on this call.' });

// 24 Lab 5.1
labSlide({
  title: 'Lab 5.1: One Idea, Three Formats', time: '1:20  |  20 min', page: P.lab51, minutes: 20, prompt: 'Prompt P11',
  output: 'Your best post as a phone video script, a three-slide carousel, and a two-sentence story.',
  steps: [
    'Take your best post from the edit pass. Run Prompt P11.',
    'Video script: first line under eight words. That is all anyone hears before they scroll.',
    'Carousel: one headline per slide. Story: two sentences from the job site.',
    'Share your video first line. Eight words or fewer.',
  ],
  callout: 'Nobody wants a polished video from a plumber. They want the plumber. Phone against a coffee cup, forty seconds.',
  notes: 'If anyone is willing, have them record the video live and drop it in chat. Count first-line words on your fingers on camera.',
});

// 25 Lab 5.2
labSlide({
  title: 'Lab 5.2: The Edit Pass, Weeks 3 and 4', time: '1:40  |  25 min', page: P.lab52, minutes: 25, prompt: 'Prompts P9 and P10',
  output: 'Posts 11 to 20 edited. Ten quick posts checked out loud.',
  steps: [
    'Same three moves, faster: one true detail, cut, fix the first line.',
    'Three minutes per post. Cannot fix it in three? It goes on the later list.',
    'Quick posts: read each out loud. Sounds like you? Tick it. If not, rewrite it in one line.',
    'Count your finished posts. Say the number out loud.',
  ],
  callout: 'Twenty-five finished posts beat thirty half-finished ones.',
  notes: 'Anyone who has not started quick posts by 1:55 stops full posts and does quick posts now. Early finishers run P14 on two photos.',
});

// 26 Lab 5.3 Monday routine
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Lab 5.3: The Monday Routine', { size: 26 });
  const steps = [['Three things that happened last week', '10'], ['New conversation, Context Block, Prompt P12', '10'], ['Edit pass: one true detail per post', '45'], ['Five photos from the week', '10'], ['Schedule the five posts', '15'], ['Reply to comments with Prompt P13', '15']];
  steps.forEach(([t, m], i) => {
    const y = 1.35 + i * 0.47;
    slideChip(s, 0.5, y + 0.04, String(i + 1));
    s.addText(t, { x: 1.0, y, w: 4.2, h: 0.4, fontFace: BODY, fontSize: 13, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
    s.addText(`${m} min`, { x: 5.2, y, w: 0.9, h: 0.4, fontFace: BODY, fontSize: 12, bold: true, color: C.terra, align: 'right', valign: 'middle', isTextBox: true, margin: 0 });
  });
  s.addText('Under two hours. On your calendar as a repeating appointment before you leave today.', { x: 0.5, y: 4.25, w: 5.6, h: 0.6, fontFace: BODY, fontSize: 13, italic: true, color: C.muted, valign: 'top', isTextBox: true, margin: 0 });
  labPanel(s, { minutes: 15, prompt: 'Prompt P12', output: 'Your six steps with a day and time on each, and your answer to what will get in the way.' });
  chrome(s, { page: P.lab53, time: '2:05  |  15 min' });
  s.addNotes('Demo P12 on the demo business for ninety seconds: five drafts in under a minute. Read back each person\'s lunch answer about what will stop them. Push for a concrete plan for busy weeks.');
}

// 27 Module 6 divider
divider({ module: '6', title: 'Publish and Commit', time: '2:20 to 2:50  |  Workbook page 19', line: 'Everything on your screen is worth nothing until one post is live. So we do not leave until one is.', notes: 'Speaker: Why we publish today. Four other people watching is the only way most of us do the scary thing.' });

// 28 Lab 6.1
labSlide({
  title: 'Lab 6.1: Post number one goes live', time: '2:25  |  15 min', page: P.lab6, minutes: 15, prompt: 'No prompt. Just the button.',
  output: 'One post live, or scheduled for 7:30am tomorrow. Posts 2 to 5 scheduled for this week.',
  steps: [
    'Pick the Week 1 post you are proudest of.',
    'Read it out loud once. Fix what you stumbled on. Add a photo if your platform wants one.',
    'Publish now, or schedule it for tomorrow at 7:30am. The button gets pressed today.',
    'Paste the link in chat. Then schedule posts 2 through 5.',
  ],
  callout: 'Frozen? What is the worst thing that happens if this goes up?',
  notes: 'Open every link as it arrives and read the first line to the room. Do not rush this. Scheduling help by platform is in the guide.',
});

// 29 Lab 6.2
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'Lab 6.2: Your 30-day commitment', { w: 7, size: 26 });
  s.addShape(pres.ShapeType.roundRect, { x: 0.5, y: 1.4, w: 9, h: 1.5, fill: { color: 'FFF9C4' }, line: { color: 'FFF9C4' }, rectRadius: 0.12 });
  s.addText('For the next 30 days I will publish ____ posts per week on ____________, and I will run my Monday Routine every __________ at ______.', { x: 0.8, y: 1.5, w: 8.4, h: 1.3, fontFace: HEAD, fontSize: 20, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
  cards(s, [
    { n: '1', title: 'Pick a partner', body: 'Someone on this call. Exchange numbers.' },
    { n: '2', title: 'Every Monday', body: 'One text. One word: "Posted."' },
    { n: '3', title: 'Sign the page', body: 'Then read your sentence to the room.' },
  ], { y: 3.1, h: 1.85, size: 12 });
  chrome(s, { page: P.lab6, time: '2:40  |  10 min' });
  s.addNotes('Pair them yourself if they hesitate, by platform where possible. The fifth person partners with you; give them your number and mean it. Lower and kept beats higher and abandoned.');
}

// 30 What you built
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'What you built today', { w: 6 });
  const left = ['Customer paragraph', 'Raw Material Bank: 25 topics', 'Brand Voice Guide', 'Platform decision and rules', 'Four or five content pillars', 'Context Block, tested', '30-Day Idea Map'];
  const right = ['20 full posts, drafted and edited', '10 quick posts, checked', 'One idea in three extra formats', 'Monday Routine, on your calendar', 'Post number one, live', 'Prompt Sheet, saved', 'A partner who texts you Monday'];
  const list = (items, x) => s.addText(items.map((t, i) => ({ text: t, options: { bullet: { code: '2713' }, breakLine: i < items.length - 1, paraSpaceAfter: 6 } })), { x, y: 1.4, w: 4.3, h: 3.4, fontFace: BODY, fontSize: 14, color: C.charcoal, valign: 'top', isTextBox: true, margin: 0 });
  list(left, 0.5);
  list(right, 5.2);
  s.addText('Nobody gave you that. You built it. The machine typed.', { x: 0.5, y: 4.6, w: 9, h: 0.4, fontFace: HEAD, fontSize: 16, italic: true, color: C.terra, isTextBox: true, margin: 0 });
  chrome(s, { page: P.deliverables, time: '2:50  |  10 min' });
  s.addNotes('Read the thirteen boxes on page 20 aloud. Watch cameras for anyone not ticking. Most commonly missed: Prompt Sheet saved somewhere findable, Monday Routine on the calendar. Fix both live.');
}

// 31 Next steps
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  titleText(s, 'If you want help keeping it going', { w: 6.8, size: 26 });
  s.addText('Nothing to decide today. Details are in chat and in tomorrow\'s email.', { x: 0.5, y: 1.2, w: 9, h: 0.4, fontFace: BODY, fontSize: 14, italic: true, color: C.muted, isTextBox: true, margin: 0 });
  const offer = (x, big, name, body) => {
    s.addShape(pres.ShapeType.roundRect, { x, y: 1.75, w: 4.35, h: 3.1, fill: { color: C.sand }, line: { color: C.sand }, rectRadius: 0.12 });
    s.addText(big, { x: x + 0.25, y: 1.9, w: 3.9, h: 0.9, fontFace: HEAD, fontSize: 40, bold: true, color: C.terra, valign: 'middle', isTextBox: true, margin: 0 });
    s.addText(name, { x: x + 0.25, y: 2.8, w: 3.9, h: 0.75, fontFace: HEAD, fontSize: 17, bold: true, color: C.charcoal, valign: 'middle', isTextBox: true, margin: 0 });
    s.addText(body, { x: x + 0.25, y: 3.6, w: 3.9, h: 1.15, fontFace: BODY, fontSize: 13, color: C.ink, valign: 'top', isTextBox: true, margin: 0 });
  };
  offer(0.5, '$497', 'Done-With-You Content Sprint', 'Ninety minutes, one on one with Glenn. Your 90-day calendar built from the system you made today.');
  offer(5.15, '$97 / month', 'Monthly Membership', 'A live session every month, a content review, and this group. Cancel any time.');
  chrome(s, { time: '2:55  |  3 min' });
  s.addNotes('Live offer, then the feedback form link. Wait while they complete it; tomorrow they will not.');
}

// 32 Close
{
  const s = pres.addSlide();
  s.background = { color: C.charcoal };
  s.addText('Your competitor is not more talented than you.', { x: 0.5, y: 1.3, w: 9, h: 1.0, fontFace: HEAD, fontSize: 34, bold: true, color: C.white, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('They are more visible.', { x: 0.5, y: 2.3, w: 9, h: 1.0, fontFace: HEAD, fontSize: 34, bold: true, color: C.sage, valign: 'middle', isTextBox: true, margin: 0 });
  s.addText('As of today, that is no longer true. Tomorrow, post number two. Do not reread the calendar. Do not rebuild the system. Just publish the next one.', { x: 0.5, y: 3.5, w: 9, h: 1.0, fontFace: BODY, fontSize: 16, color: C.sand, valign: 'top', isTextBox: true, margin: 0 });
  s.addText('Glenn E. Daniels II  |  Touch Stone Publishers', { x: 0.5, y: 4.6, w: 9, h: 0.4, fontFace: BODY, fontSize: 13, bold: true, color: C.white, isTextBox: true, margin: 0 });
  chrome(s, { dark: true });
  s.addNotes('Final close. Stay on the call until the last person leaves. Follow-up email within 24 hours.');
}

pres.writeFile({ fileName: outPath }).then((f) => console.log(`Slides written: ${f} (${slideNo} slides)`));
