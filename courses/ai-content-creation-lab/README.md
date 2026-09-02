# AI Content Creation Lab

A one-day, five-seat virtual intensive for small business owners, trade professionals, and founders. Participants leave with a Brand Voice Guide, four or five content pillars, a Context Block, a sixteen-prompt library that works in ChatGPT, Claude, or Gemini, and 30 days of posts drafted and edited. One post is published live before the class ends.

| | |
|---|---|
| Brand | Touch Stone Publishers (general market line, not the executive governance voice) |
| Facilitator | Glenn E. Daniels II |
| Delivery | Virtual, live on Microsoft Teams |
| Seats | 5 |
| Hours | 7:00am to 3:00pm Eastern (8 hours) |
| Breaks | 8:45 to 9:00, 1:00 to 1:15, plus a 45-minute working lunch at 11:00 |
| Price | $1,450 per seat ($1,250 early bird, $2,600 for two seats) |
| Tools | Tool-agnostic. Every prompt works in ChatGPT, Claude, and Gemini |

## The deliverables

| File | What it is | Who uses it |
|---|---|---|
| `AI-Content-Creation-Lab-Facilitator-Guide.docx` | The truth document. Minute-by-minute runsheet, speaker lines, facilitator notes, every prompt drop, every workbook callout, debriefs, the working-lunch one-on-one script, and contingencies. Color-coded to the TSP house standard. | Glenn |
| `AI-Content-Creation-Lab-Teleprompter.docx` | Speaker lines only, extracted from the guide, large type for reading on screen. | Glenn |
| `AI-Content-Creation-Lab-Slides.pptx` | 32 slides with speaker notes. Every lab slide shows the clock time, minutes, prompt, and workbook page. | Glenn, shared on Teams |
| `AI-Content-Creation-Lab-Workbook.docx` | 21-page participant workbook. Pre-work page, one page per lab, the 30-Day Idea Map, the working-lunch checklist, the Monday Routine, the commitment card. | Participants (sent seven days out) |
| `AI-Content-Creation-Lab-Prompt-Sheet.docx` | The sixteen prompts (P0 to P16), platform rules, and the Monday Routine in prompts. | Participants (sent seven days out and again after class) |

## The day

| Time (ET) | Block | Labs | Output |
|---|---|---|---|
| 7:00 | Module 0: Opening | Introductions | Rules of the day, one goal per person |
| 7:20 | Module 1: Foundation | 1.1 Customer Snapshot, 1.2 Raw Material Bank, 1.3 Brand Voice Guide | Customer paragraph, 25 topics, voice guide |
| 8:45 | Break | | |
| 9:00 | Module 2: Pillars, Platform, Context Block | 2.1 Platform Decision, 2.2 Content Pillars, 2.3 Context Block | One platform, pillars, tested Context Block |
| 10:30 | Module 3: The 30-Day Plan | 3.1 Idea Map | 30 ideas on a calendar (20 full, 10 quick) |
| 11:00 | Working Lunch: Batch Drafting Sprint | Prompts P7 and P8, rolling 8-minute one-on-ones | 30 rough drafts |
| 11:45 | Module 4: The Human Pass | 4.1 Slop Detector, 4.2 Edit Pass Weeks 1 and 2 | Slop pattern named, posts 1 to 10 edited |
| 1:00 | Break | | |
| 1:15 | Module 5: Multiply and Systemize | 5.1 One Idea Three Formats, 5.2 Edit Pass Weeks 3 and 4, 5.3 Monday Routine | Three formats, posts 11 to 30 edited, weekly system |
| 2:20 | Module 6: Publish and Commit | 6.1 Post One Goes Live, 6.2 30-Day Commitment | One post live, commitment, partner |
| 2:50 | Close | | Deliverables check, live offer, feedback |

## Rebuilding the documents

Everything is generated from source so a change made once flows to every document. Workbook page numbers live in `build/pages.js`; the guide and slides read from it, so callouts never drift. Prompts live in `build/prompts.js`; the guide's chat drops, the workbook, and the Prompt Sheet all read from it.

```bash
cd courses/ai-content-creation-lab/build
npm install
./build-all.sh
```

Requires Node 18 or newer. The facilitator guide is rendered by `build/format_guide.js`, a copy of the Touch Stone Publishers house formatter, with em dashes removed to match the Content Creation Lab style rule and the page set to US Letter.

| Source | Builds |
|---|---|
| `build/guide-spec.js` | Facilitator Guide and Teleprompter |
| `build/build-workbook.js` | Workbook |
| `build/build-prompt-sheet.js` | Prompt Sheet |
| `build/build-slides.js` | Slides |
| `build/prompts.js` | Shared prompt library |
| `build/pages.js` | Shared workbook page map |

`build/render.py` is an optional QA helper that converts any output to PDF and PNG with LibreOffice and PyMuPDF.

## Editing rules for this product line

- No em dashes anywhere. The build fails if one appears in the guide or prompts.
- Blank line between paragraphs. Conversational, direct, zero jargon. Never the boardroom register.
- Every workbook page must fit on one printed Letter page; the workbook build fails if the page count no longer matches `pages.js`.
