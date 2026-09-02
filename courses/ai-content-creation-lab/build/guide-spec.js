// AI Content Creation Lab | Facilitator Guide content spec.
// Rendered to .docx by format_guide.js (TSP house color standard).
// Page callouts come from pages.js. Prompt drops come from prompts.js.

const P = require('./pages');
const PROMPTS = require('./prompts');

const prompt = (id, tag) => {
  const pr = PROMPTS.find((x) => x.id === id);
  return { type: 'prompt', tag: tag || `DROP IN CHAT: PROMPT ${pr.id}, ${pr.name.toUpperCase()}`, lines: pr.lines.filter((l) => l !== '') };
};
const wb = (page, line) => ({ type: 'workbook', tag: `Workbook p.${page}`, line });
const sp = (tag, ...lines) => ({ type: 'speaker', tag, lines });
const note = (text) => ({ type: 'note', text });
const timer = (duration) => ({ type: 'timer', duration });
const lab = (title, labtype, page, timing) => ({ type: 'lab', title, labtype, page, timing });
const debrief = (q1, q2, q3) => ({ type: 'debrief', q1, q2, q3 });
const brk = (label, duration) => ({ type: 'break', label, duration });
const body = (text) => ({ type: 'body', text });
const h = (text, level = 2) => ({ type: 'heading', level, text });

module.exports = {
  meta: {
    title: 'AI Content Creation Lab | Facilitator Guide',
    subtitle: 'Virtual on Microsoft Teams | 7:00am to 3:00pm Eastern | 5 seats | Glenn E. Daniels II, Touch Stone Publishers',
    type: 'facilitator',
  },
  sections: [
    // ───────────────────────── FRONT MATTER ─────────────────────────
    {
      type: 'module',
      title: 'HOW TO USE THIS GUIDE',
      timing: 'Read once the week before. Skim the pacing map the morning of.',
      content: [
        body('This guide is the truth document for the AI Content Creation Lab. Every time, every prompt, every workbook page number in the slides and the workbook comes from here. If two documents disagree, this one wins.'),
        body('Audience: small business owners, trade professionals, and founders. Five seats. They are not board members and they are not marketers. They are busy people who have started and stopped posting more times than they want to admit. Talk to them the way a good coach talks: direct, plain, respectful of their time, never talking down.'),
        body('Tool policy: tool-agnostic. Every prompt works in ChatGPT, Claude, or Gemini. Never tell a participant to switch tools mid-day. If one tool refuses or stalls, the fix is a smaller batch or a fresh conversation, not a different product.'),
        body('The one promise: everyone leaves with a Brand Voice Guide, four or five content pillars, a Context Block, a prompt library, and 30 days of posts drafted and edited. If the day runs long, protect that promise and cut from the places marked in the Contingencies section.'),
        {
          type: 'pacing_map',
          rows: [
            { block: '7:00 to 7:20', module: 'Module 0: Opening', labs: 'Intros', outputs: 'Rules of the day, one goal per person', break: '' },
            { block: '7:20 to 8:45', module: 'Module 1: Foundation', labs: 'Lab 1.1, 1.2, 1.3', outputs: 'Customer paragraph, Raw Material Bank, Brand Voice Guide', break: 'Break 8:45 to 9:00' },
            { block: '9:00 to 10:30', module: 'Module 2: Pillars, Platform, Context Block', labs: 'Lab 2.1, 2.2, 2.3', outputs: 'Platform choice, pillars, tested Context Block', break: '' },
            { block: '10:30 to 11:00', module: 'Module 3: The 30-Day Plan', labs: 'Lab 3.1', outputs: '30-Day Idea Map', break: '' },
            { block: '11:00 to 11:45', module: 'Working Lunch: Batch Drafting Sprint', labs: 'Prompts P7, P8; rolling 1:1s', outputs: '30 rough drafts', break: '' },
            { block: '11:45 to 1:00', module: 'Module 4: The Human Pass', labs: 'Lab 4.1, 4.2', outputs: 'Slop pattern named, posts 1 to 10 edited', break: 'Break 1:00 to 1:15' },
            { block: '1:15 to 2:20', module: 'Module 5: Multiply and Systemize', labs: 'Lab 5.1, 5.2, 5.3', outputs: 'One idea in three formats, posts 11 to 30 edited, Monday Routine', break: '' },
            { block: '2:20 to 2:50', module: 'Module 6: Publish and Commit', labs: 'Lab 6.1, 6.2', outputs: 'Post 1 live, 30-day commitment, partner', break: '' },
            { block: '2:50 to 3:00', module: 'Close', labs: '', outputs: 'Deliverables check, live offer, feedback', break: '' },
          ],
        },
      ],
    },

    // ───────────────────────── PRE-CLASS ─────────────────────────
    {
      type: 'module',
      title: 'PRE-CLASS: THE WEEK BEFORE',
      timing: 'Two emails, one Teams setup, one rehearsal',
      content: [
        h('Email 1: seven days out'),
        body('Subject: Your AI Content Creation Lab: what to bring. Body: thank them, restate the date and hours (7:00am to 3:00pm Eastern, on Microsoft Teams), attach the workbook PDF and the Prompt Sheet, and point them to page 3 of the workbook. Ask them to do the Before Class page and to reply with the AI tool they will use and the platform they post on most. That reply tells you who needs help before the day starts.'),
        h('Email 2: the day before'),
        body('Subject: Tomorrow, 7:00am Eastern. Body: the Teams link, the test link, a reminder to have two screens or a phone for the workbook, and one line: "Bring one real story from a job or client. That story becomes your first post." Keep it under 120 words.'),
        h('Teams setup'),
        note('Create the meeting with lobby off for invited attendees and on for everyone else. Turn on "Allow mic and camera for attendees". Create one breakout room named Coaching Room and assign nobody to it; you will move people in and out manually during the working lunch. Pin a chat message at 6:50am: "Prompts drop here all day. Copy from chat, paste into your AI tool. Raise your hand if stuck; I will come to you."'),
        note('Have the Prompt Sheet open in a text editor so each prompt is one copy and paste into chat. Do not screen share the Prompt Sheet; participants read it faster in chat.'),
        h('Your demo business'),
        note('Run every demo on one consistent example business so participants see the whole system take shape. Use a real client with permission, or the stock example: a two-truck residential plumbing company that wants more water heater replacements. Prepare its three writing samples, its Context Block, and one finished post before the day. Never demo on a participant business unless they volunteer.'),
        h('Rehearsal'),
        note('Run Prompts P0 through P8 on the demo business the day before in the tool most participants said they use. Save the outputs. If the tool behaves differently on the day, you have a fallback to paste into chat.'),
      ],
    },

    // ───────────────────────── MODULE 0 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 0: OPENING',
      timing: `7:00 to 7:20 | 20 minutes | Workbook p.${P.welcome} to p.${P.beforeClass}`,
      content: [
        note('6:45am: open the room. Camera on, music off, screen showing slide 1. Greet each person by name as they join and confirm they can hear you. Ask each to type the AI tool they are using into chat. That is your tool roster for the day.'),
        note('7:00 sharp. Start on time even with one person missing. Latecomers catch up during intros.'),
        sp('Welcome',
          'Good morning. It is seven o\'clock, and you have already done something most business owners never do. You blocked a whole day to fix the content problem instead of feeling bad about it.',
          'Here is what today is. By three o\'clock this afternoon you will have thirty days of posts written, edited by you, and sitting in a document ready to publish. You will have a system that refills that document in under two hours a week. And you will have published your first post before you log off.',
          'Here is what today is not. It is not a webinar. I am going to talk for a few minutes at a time, and then you are going to work. Most of the day, the only sound will be typing.'),
        sp('The tool question',
          'You are using ChatGPT, Claude, or Gemini. It does not matter which one. Every prompt I give you today works in all three. If someone tells you that you need a special tool, they are selling the tool. What you need is what you already know about your business, in a form the machine can use. That is what we build first.'),
        wb(P.welcome, `Open your workbook to page ${P.welcome}. That is the day map. Every block on that map ends with something you built, not something you learned.`),
        sp('Three rules',
          'Three rules for the day. One: camera on. Five people on a screen is a room. Five black squares is not. Two: your real business. Every exercise uses your real customers, your real jobs, your real words. No made-up examples. Three: done beats perfect. A rough post you published beats a polished post you never wrote.'),
        wb(P.beforeClass, `Page ${P.beforeClass}, bottom of the page. You wrote the one type of job or client you want more of. Read it once more. Everything we build today points at that.`),
        sp('Introductions',
          'Sixty seconds each. Your name, your business, and the one thing you want more of, straight off page three. I will go first so you can see how short sixty seconds is.'),
        note('Go first with the demo business. Then call names in the order they joined. Hard stop at 60 seconds per person; say "thank you, that is your first post" and move on. Write each person\'s "want more of" in your notes. You will use them in every debrief.'),
        sp('How to get help',
          'When you are stuck, raise your hand in Teams. I will come to you. If you get stuck on a prompt, the fix is almost always the same: open a new conversation and paste the block we build at ten o\'clock. You will hear me say that a lot today.'),
        sp('Bridge to Module 1',
          'Let\'s start with why the content the machine writes for you right now is bad. It is not the machine. It is that the machine knows nothing about you. We fix that in the next ninety minutes.'),
      ],
    },

    // ───────────────────────── MODULE 1 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 1: FOUNDATION',
      timing: `7:20 to 8:45 | 85 minutes | Workbook p.${P.lab11} to p.${P.lab13} | Outputs: customer paragraph, Raw Material Bank, Brand Voice Guide`,
      content: [
        h('MODULE OPENING (7:20 to 7:35)'),
        sp('Why AI content sounds like nobody',
          'Ask any AI tool to write a post for a plumber and you get the same post every plumber in America gets. Reliable. Trusted. Family-owned. Call today. Your customer has read that post a thousand times and it has never once made them pick up the phone.',
          'That is not the tool failing. That is the tool doing exactly what you asked. You gave it nothing, and it gave you the average of everything.',
          'There are five things the machine does not know about you. Who your customer is. What you want more of. How you talk. What you actually know. And what you believe that the guy down the street does not. This module gets all five out of your head and into a document.'),
        note('Show slide 6, the five things. Then screen share your AI tool with a blank conversation. Type "Write a social media post for a plumbing company." Read the result out loud, flat. Let them laugh. Close the share.'),
        sp('The demo',
          'That is what you get for free. Now watch what happens when the machine knows three sentences about the business.'),
        note('Paste the demo business Context Block and run the same request. Read the difference. Do not explain the Context Block yet; they build it at 9:50. This is only a preview of where the day is going. Two minutes, then move to Lab 1.1.'),

        // LAB 1.1
        lab('LAB 1.1: CUSTOMER AND OFFER SNAPSHOT', 'Writing Lab', `p.${P.lab11}`, '7:35 to 7:55 | 20 minutes'),
        wb(P.lab11, `Turn to page ${P.lab11}. Customer and Offer Snapshot. This is the person every post is written to.`),
        sp('Setup',
          'Content that works is written to one person. Not to a demographic. One person, in one situation, at the moment they start looking for someone like you.',
          'Fill in boxes one, two, and three. Write fast and plain. Who they are. What they are afraid of getting wrong when they hire someone in your field. And what you want more of, copied from page three and made sharper. Eight minutes. Go.'),
        timer('8 minutes writing'),
        note('While they write, move through the roster. Anyone still on box one after four minutes gets a question, not an answer: "Who called you last week that you wish would call every week?"'),
        sp('Run the prompt',
          'Now paste boxes one through three into the prompt I am dropping in chat. The machine hands you back one paragraph. Your job is to read it and cross out anything that is not true. Then write the final version in box four and save it in your document. Five minutes.'),
        prompt('P1'),
        timer('5 minutes'),
        note('Watch for the tool adding demographics nobody supplied ("busy professionals aged 35 to 55"). Tell them to delete anything the machine invented. That instruction repeats all day; say it early and often.'),
        sp('Share',
          'Read me one sentence from your final paragraph. The sentence that names the moment they go looking for you.'),
        note('One sentence each, no commentary from you beyond "good" or a single sharpening question. Four minutes total.'),
        debrief(
          'What did the machine add that was not true, and how fast did you spot it?',
          'How many of you wrote a customer who is afraid of being overcharged or ignored? That fear shows up in almost every field. Your content has to answer it before they call.',
          'Where in your business does this paragraph already exist? Your quotes, your voicemails, your website. It was there. Now it is written down.'),

        // LAB 1.2
        lab('LAB 1.2: THE RAW MATERIAL BANK', 'AI Interview Lab', `p.${P.lab12a} to p.${P.lab12b}`, '7:55 to 8:20 | 25 minutes'),
        wb(P.lab12a, `Pages ${P.lab12a} and ${P.lab12b}. The Raw Material Bank. Two pages, twenty-five lines.`),
        sp('Setup',
          'Your business already contains more content than you can post in a year. The problem is that it is in your head, and when you sit down to write, your head goes blank.',
          'So we will not ask you to write. We will let the machine interview you. The prompt in chat tells it to ask you one question at a time about the questions customers ask, the mistakes people make, how you do the work, stories from jobs, and what you believe that others in your field do not.',
          'Answer like you are talking to a new hire on the drive to a job. Do not polish. Type fast, or use the microphone on your phone if your tool has one. After twelve questions it hands you twenty-five topics in your own words.'),
        prompt('P2'),
        sp('Go',
          'Fifteen minutes on the interview. Then five to copy the topics onto pages five and six and cross out anything that is not true.'),
        timer('15 minutes interview, then 5 minutes transfer'),
        note('The most common stall: the tool asks all twelve questions at once instead of one at a time. Fix: reply "One question at a time. Ask the first one." Move through the roster and listen for people typing one-word answers. Tell them: "Answer that one the way you would say it to a customer. Two sentences."'),
        note('At 8:12 give a two-minute warning to finish the interview and ask for the list.'),
        wb(P.lab12b, `Bottom of page ${P.lab12b}. Circle your five strongest topics. The ones with a real detail in them: a number, the name of a part, a thing a customer actually said.`),
        debrief(
          'Which topic surprised you? The one you would never have thought to post about.',
          'Notice which category filled up fastest. For most trades it is customer questions. For most founders it is beliefs. That is your natural pillar, and you will see it again at 9:20.',
          'Every one of these twenty-five is a post. Some are three posts. You just found three months of content in fifteen minutes.'),

        // LAB 1.3
        lab('LAB 1.3: BRAND VOICE GUIDE', 'Voice Extraction Lab', `p.${P.lab13}`, '8:20 to 8:45 | 25 minutes'),
        wb(P.lab13, `Page ${P.lab13}. Brand Voice Guide. This is the page that stops the machine sounding like a machine.`),
        sp('Setup',
          'Here is the trick most people never learn. You do not describe your voice to the AI. You show it. You paste in how you already write to customers, and it tells you what your voice is.',
          'You brought three samples. An email, a text thread, a quote note. Names removed. Paste all three into the prompt in chat.',
          'What comes back is a description of your voice, eight rules, and two word lists. Then the important part: you edit it. If a rule is not how you talk, delete it. The machine describes. You decide.'),
        prompt('P3'),
        timer('8 minutes to run, 8 minutes to edit'),
        note('If someone has no samples, have them dictate a 90-second voicemail to a customer into their phone, transcribe it with the phone\'s voice-to-text, and use that as sample one. It works better than most emails.'),
        note('Watch for the tool describing everyone as "warm, professional, and approachable". Tell them: "If that rule could describe your competitor, delete it. Keep only the rules that are specifically you." Push for concrete rules: "Starts with the problem, not a greeting." "Uses the word folks." "Never says utilize."'),
        sp('Read one rule',
          'Everyone read me one rule from your list. The one that is most you.'),
        note('Round the room. Four minutes. If a rule is generic, ask "What would your best customer say is different about how you talk?" and let them rewrite it live.'),
        wb(P.lab13, `Save the final version in your document under the heading VOICE GUIDE. From now on it goes into every prompt you run. Page ${P.lab13} is the paper copy.`),
        debrief(
          'What did the machine get wrong about your voice, and how did you know?',
          'Most of you found that your real voice is shorter and blunter than the voice you thought you should use online. That is good news. Short and blunt is what gets read.',
          'You now have a paragraph that makes any AI tool write like you. That paragraph is worth more than any single post you will write today.'),
        sp('Module 1 close',
          'Look at what you have. A customer paragraph. Twenty-five topics. A voice guide. Ninety minutes ago the machine knew nothing about you. Now it knows the three things that matter most. Fifteen minutes. Stand up, get coffee, and be back at nine sharp.'),
        brk('☕ BREAK', '8:45 to 9:00 | 15 minutes'),
        note('During the break: read three voice guides over people\'s shoulders if they are still on screen. Note who has a strong one; you may ask them to share at 9:00. Check the tool roster for anyone whose tool is misbehaving.'),
      ],
    },

    // ───────────────────────── MODULE 2 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 2: PILLARS, PLATFORM, AND THE CONTEXT BLOCK',
      timing: `9:00 to 10:30 | 90 minutes | Workbook p.${P.lab21} to p.${P.lab23} | Outputs: platform decision, content pillars, tested Context Block`,
      content: [
        h('RE-ENTRY (9:00 to 9:05)'),
        note('Energy beat. Start with a question, not a slide.'),
        sp('Re-entry',
          'Quick one before we build. Hands up if the machine described your voice as "warm and professional." Right. Now hands up if you kept that rule. Good. That instinct, deleting what could describe anyone, is the whole skill. You will use it forty more times today.'),

        // LAB 2.1
        lab('LAB 2.1: PLATFORM DECISION', 'Decision Lab, no AI', `p.${P.lab21}`, '9:05 to 9:20 | 15 minutes'),
        wb(P.lab21, `Page ${P.lab21}. Platform Decision. Seven questions, three columns, score each one to three.`),
        sp('Setup',
          'You do not need to be everywhere. You need to be consistent on one platform where your customer already looks. Everywhere is how you end up nowhere.',
          'Score each row. Highest total wins. If it is a tie, pick the one you already open on your phone without thinking. Six minutes.'),
        timer('6 minutes'),
        note('Typical outcomes: trades and local services score Facebook or Instagram. Consultants, founders, and anyone selling to businesses score LinkedIn. Realtors split. Do not overrule anyone. If someone scores LinkedIn but has 40 connections and 900 Facebook friends, ask "Where would a post from you get seen this week?"'),
        sp('Platform rules',
          'Below the grid are the rules for each platform. Length, first line, links and hashtags. Copy the row for your platform. You will paste it into a prompt at lunch. These are rough rules. Rough rules kept every week beat perfect rules kept once.'),
        sp('Share',
          'Around the room: your platform and the row that decided it.'),
        note('One line each. Three minutes. Write each person\'s platform next to their name in your notes.'),
        debrief(
          'Which row surprised you?',
          'Notice that "I could post here without feeling like a fraud" often decides it. That is not a soft question. If you feel like a fraud, you stop posting. Consistency is the only thing that works, so pick where you can be consistent.',
          'You will not touch another platform for thirty days. Say it out loud if you need to.'),

        // LAB 2.2
        lab('LAB 2.2: CONTENT PILLARS', 'AI Sorting Lab', `p.${P.lab22}`, '9:20 to 9:45 | 25 minutes'),
        wb(P.lab22, `Page ${P.lab22}. Content Pillars. Five rows, and the first two are already named.`),
        sp('Setup',
          'A pillar is a subject you come back to over and over. Four or five of them, and the "what do I post" problem is gone for good. Every post belongs to a pillar. Every pillar has a job.',
          'Two are required. Proof: real stories and results, because people hire the contractor they already feel like they know. Answers: the questions customers actually ask, because the person searching at ten at night is asking one of them.',
          'The machine sorts your twenty-five topics into pillars. Paste your customer paragraph and your Raw Material Bank into the prompt. Then edit the names. If a pillar name sounds like a marketing department wrote it, rename it in words you would say to a customer.'),
        prompt('P4'),
        timer('10 minutes to run and edit, 5 minutes to check'),
        note('Common failure: six or seven pillars with two topics each. Tell them to merge until they have four or five with at least four topics each. Second failure: pillar names like "Thought Leadership." Ask "Would you say that phrase to a customer at the counter?" and let them rename it.'),
        wb(P.lab22, `Run the three checks at the bottom of page ${P.lab22}. Every topic in one pillar. Every name something you would say out loud. At least one pillar built from things that happened this month.`),
        sp('Share',
          'Read me your pillar names. Just the names.'),
        note('Five people, four to five names each. Two minutes. Praise the plain ones by name.'),
        debrief(
          'Which topic was hardest to place, and what does that tell you about it?',
          'Almost everyone has one pillar that is overflowing. That is the pillar your customers care about most. Post from it twice as often.',
          'Save the pillars under the heading PILLARS. They go into the Context Block in five minutes.'),

        // LAB 2.3
        note('9:45 to 9:50: transition. Have everyone open their document and put the four saved headings in order: CUSTOMER, VOICE GUIDE, PILLARS, RAW MATERIAL BANK. Then start Lab 2.3.'),
        lab('LAB 2.3: THE CONTEXT BLOCK', 'Assembly and Test Lab', `p.${P.lab23}`, '9:50 to 10:25 | 35 minutes'),
        wb(P.lab23, `Page ${P.lab23}. The Context Block. This is the most valuable page in the workbook.`),
        sp('Setup',
          'Everything you built this morning goes into one block of text. You paste it at the top of every AI conversation, today and every Monday for the rest of your life. That is the whole system. The Context Block is what turns a generic tool into your tool.',
          'The template is in chat. Fill every bracket from your document. Business, customer, what you want more of, voice, pillars, platform, rules. Add any word you hate to the rules line. Fifteen minutes to assemble it.'),
        prompt('P0', 'DROP IN CHAT: PROMPT P0, THE CONTEXT BLOCK (TEMPLATE)'),
        timer('15 minutes assembly'),
        note('Walk the roster. Check three things on every screen: the voice rules are pasted in full, not summarized; the "do not invent facts" line is still there; the platform is the one they chose at 9:20. Anyone who is done early: have them add three more words to the never-use list.'),
        sp('Test it',
          'Now we prove it works. New conversation. Paste the Context Block. Then paste the test prompt. The machine writes one post on one of your topics, and then criticizes its own work. It tells you three ways the post could be more about your business. Those three flags are the holes in your Context Block. Ten minutes.'),
        prompt('P5'),
        timer('10 minutes test'),
        note('Read two or three test posts over shoulders. They will be noticeably better than the 7:25 demo. Say so out loud to the room. Then have each person add one line to their Context Block based on the critique. Five minutes.'),
        wb(P.lab23, `Write what you added on page ${P.lab23}, then save the final block under the heading CONTEXT BLOCK. Every new AI conversation from now on starts with this paste. Never skip it.`),
        debrief(
          'What did the critique flag? Was it something the machine did not know, or something it knew and ignored?',
          'Most flags are missing detail: a price range, a part name, a neighborhood. The fix is always to add the detail to the block, not to argue with the post.',
          'You will paste this block a thousand times. Put it somewhere you can find it in five seconds. Top of your document. A note on your phone. Both.'),
        sp('Module 2 close',
          'Three hours in. You have a customer, a voice, pillars, a platform, and a block that makes any AI tool write as you. The next thirty minutes we plan the month. Then lunch, where the machine writes all thirty drafts while you eat.'),
        note('10:25 to 10:30: two-minute stretch, cameras can go off. Back at 10:30.'),
      ],
    },

    // ───────────────────────── MODULE 3 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 3: THE 30-DAY PLAN',
      timing: `10:30 to 11:00 | 30 minutes | Workbook p.${P.lab31a} to p.${P.lab31b} | Output: 30-Day Idea Map`,
      content: [
        sp('Why plan before drafting',
          'Here is the mistake everyone makes with AI. They ask for a post. Then another post. Then another. By the tenth one it is repeating itself and they are exhausted. Thirty separate requests is thirty chances for the machine to drift.',
          'Instead, we plan thirty ideas first. Then the machine drafts in batches of ten with the whole plan in front of it. No repeats. No drift.',
          'Twenty of the thirty are full posts. Ten are quick posts: a single question, a photo caption, a one-line tip. Quick posts are not filler. They are the ones that get comments. And they are the ones you can do on a day when you have five minutes.'),

        lab('LAB 3.1: THE 30-DAY IDEA MAP', 'AI Planning Lab', `p.${P.lab31a} to p.${P.lab31b}`, '10:35 to 11:00 | 25 minutes'),
        wb(P.lab31a, `Pages ${P.lab31a} and ${P.lab31b}. Thirty rows. Day, pillar, title, full or quick.`),
        sp('Setup',
          'Same conversation as your test post, so the Context Block is already loaded. Paste the prompt in chat. You get a table of thirty ideas rotating through your pillars.',
          'Then the human part. Copy the table into the workbook in your own words. Change any title that does not fit. Kill any idea you would not be proud of. Then circle five. The five you would be proudest to see published. Those get edited first this afternoon.',
          'Fifteen minutes to run and copy, five minutes to edit and circle.'),
        prompt('P6'),
        timer('15 minutes run and copy, 5 minutes edit and circle'),
        note('Copying thirty rows by hand takes longer than people expect. If someone is slow, tell them to copy day, pillar, and F or Q only, and leave titles in the document. The workbook is the map; the document is the source.'),
        note('Watch for the tool front-loading all quick posts into week four, or ignoring the "no consecutive pillar" rule. Fix: reply "Redo the table. No two consecutive days in the same pillar. No more than three quick posts per week."'),
        wb(P.lab31b, `Bottom of page ${P.lab31b}: save the full table in your document under IDEA MAP. Both lunch prompts need it pasted in.`),
        debrief(
          'Which five did you circle, and what do they have in common?',
          'Nearly everyone circles Proof posts. Stories. That is your customer telling you what they want to read. Notice it.',
          'You have never had a month planned before. Say so. Then notice how it feels to know what Tuesday\'s post is.'),
        sp('Bridge to lunch',
          'It is eleven o\'clock. Here is how lunch works. Eat with one hand. Draft with the other. In forty-five minutes the machine produces all thirty rough drafts. You are not editing. You are generating. And I am pulling each of you into the coaching room for eight minutes, one at a time.'),
      ],
    },

    // ───────────────────────── WORKING LUNCH ─────────────────────────
    {
      type: 'module',
      title: 'WORKING LUNCH: THE BATCH DRAFTING SPRINT',
      timing: `11:00 to 11:45 | 45 minutes | Workbook p.${P.lunch} | Output: 30 rough drafts | Rolling 1:1s in the Coaching Room`,
      content: [
        wb(P.lunch, `Page ${P.lunch}. The lunch checklist. Five steps in order, and your one-on-one slot.`),
        sp('Instructions',
          'Step one: new conversation, paste the Context Block. Step two: the first lunch prompt with posts one to ten and your Idea Map. Paste the output into your document under Week 1 and 2 Drafts. Step three: same prompt, posts eleven to twenty. Step four: the quick-post prompt for all ten quick posts. Step five: read three drafts and mark the one that sounds least like you. Bring that one back at 11:45.',
          'Do not edit anything. Editing is this afternoon. If you edit at lunch you will finish with six perfect posts and twenty-four blanks.',
          'Both prompts are in chat now. Your one-on-one slot is on page thirteen. When I call your name, come to the Coaching Room. Everyone else keeps drafting.'),
        prompt('P7'),
        prompt('P8'),
        note('Slots: 11:05, 11:13, 11:21, 11:29, 11:37. Eight minutes each, hard stop. Assign the order at 11:00 by who looked most stuck this morning; they go first. Move each person into the Coaching Room breakout manually, then move them back. Keep your own camera on in the main room between slots so the others do not feel abandoned.'),
        h('THE 8-MINUTE ONE-ON-ONE'),
        body('Three questions, in order. Do not fix their content for them. Find the one thing that is blocking them and remove it.'),
        sp('Question 1 (2 minutes)',
          'Read me the sentence from your Context Block that you are least sure about.'),
        note('Usually it is the customer paragraph or a vague voice rule. Sharpen it live and have them paste the fix.'),
        sp('Question 2 (3 minutes)',
          'Show me one draft that came back. What in it did you not give the machine?'),
        note('Find the invented fact. Delete it together. Then find the missing true detail from their Raw Material Bank and tell them that is the afternoon\'s edit.'),
        sp('Question 3 (3 minutes)',
          'What is going to stop you from doing this on a Monday morning in three weeks?'),
        note('Write their answer in your notes. It comes back at 2:05 in Lab 5.3. Common answers: "a busy week," "I forget," "I do not know if it is working." Do not solve it now. Name it and move on.'),
        h('BETWEEN SLOTS'),
        note('Scan the main room. Anyone with a tool that stalled: smaller batch, five posts instead of ten. Anyone who finished all three prompts early: have them run Prompt P14 on one photo they brought. That becomes a bonus post.'),
        note('11:43: two-minute warning in chat. "Save your document. Back at 11:45 with your worst draft."'),
      ],
    },

    // ───────────────────────── MODULE 4 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 4: THE HUMAN PASS',
      timing: `11:45 to 1:00 | 75 minutes | Workbook p.${P.lab41} to p.${P.lab42} | Outputs: slop pattern named, posts 1 to 10 edited`,
      content: [
        h('RE-ENTRY (11:45 to 11:55)'),
        note('First module after lunch. Energy beat: start with a volunteer, not a slide.'),
        sp('Read me your worst one',
          'Who has a draft that sounds like a robot? Read it to us. Flat voice, no acting.'),
        note('Take one volunteer. As they read, type the flags into chat in real time: "generic first line," "invented number," "hype word," "sentence over 25 words." Then say:'),
        sp('The pattern',
          'Every one of those flags is on the scorecard on page fourteen. AI drafts fail in the same seven ways, every time, for everyone. Once you can see the seven, you can fix a post in ninety seconds. This module teaches you to see them.',
          'Thirty drafts on your screen right now. About ten are good. About fifteen need one true detail. About five need a rebuild. By one o\'clock, posts one through ten are done. Done means you would put your name on them.'),

        // LAB 4.1
        lab('LAB 4.1: THE SLOP DETECTOR', 'Audit Lab', `p.${P.lab41}`, '11:55 to 12:15 | 20 minutes'),
        wb(P.lab41, `Page ${P.lab41}. The Slop Detector. Seven red flags, three posts.`),
        sp('Setup',
          'Pick three drafts. Your worst, one from the middle, and one you think is good. Read each against the seven flags and tick every one that applies. Do it by eye first. Then run the prompt in chat on your worst one and see if the machine finds what you found.',
          'Then the important part at the bottom of the page. Most people find the same flag in every post. Name yours. Then write one line for your Context Block rules that stops it. Twelve minutes.'),
        prompt('P9'),
        timer('12 minutes'),
        note('Common patterns and the rule that fixes each: generic first lines, add "Every post opens with a specific situation, never a greeting or a question about the reader\'s feelings." Invented numbers, add "Never use a number I did not give you." Slogans at the end, add "End with a next step or a question, never a tagline."'),
        sp('Share',
          'Your pattern and your new rule. One line each.'),
        note('Round the room. Have each person paste the new rule into their Context Block before moving on. Three minutes.'),
        debrief(
          'Did the machine find the same flags you found? Where did it disagree with you, and who was right?',
          'Almost every pattern comes down to specificity. The machine cannot be specific about your business unless you feed it the specifics. That is the entire afternoon.',
          'You just learned to grade a post in ninety seconds. That skill alone saves you an hour a week.'),

        // LAB 4.2
        lab('LAB 4.2: THE EDIT PASS, WEEKS 1 AND 2', 'Editing Lab', `p.${P.lab42}`, '12:15 to 12:55 | 40 minutes'),
        wb(P.lab42, `Page ${P.lab42}. The edit log. Ten rows, one per post.`),
        sp('Setup',
          'This is the part the machine cannot do, and it is the part that makes the content yours. For each of posts one through ten: add one true detail from a real job or client, cut anything you would not say out loud, and fix the first line.',
          'Write the detail you added in the log. A price. A part. A street. A thing the customer said. That log becomes your proof that these are your posts.',
          'When a post needs a full rebuild, use the prompt in chat. Give it the post and the true detail. It rewrites around the detail. Thirty minutes. Then a ten-minute peer swap.'),
        prompt('P10'),
        timer('30 minutes editing'),
        note('This is the longest quiet block of the day. Walk the roster twice. First pass at 12:25: check that people are adding details, not just deleting. Second pass at 12:40: check the log has at least five rows filled. Anyone under five, tell them to stop editing sentence by sentence and only fix the first line and add one detail per post.'),
        note('Watch for perfectionists rewriting post one for fifteen minutes. Say: "Three minutes per post. Anything longer goes on the later list."'),
        sp('Peer swap',
          'Ten minutes. Send one edited post to the person below you on the participant list in Teams chat. Read the one you receive. Reply with two lines: the sentence that sounded most like a real person, and one sentence you would cut. Then read what your partner said about yours.'),
        timer('10 minutes peer swap'),
        note('Pair by roster order: 1 with 2, 3 with 4, 5 with you. Read the fifth person\'s post yourself and reply in chat like a participant would.'),
        debrief(
          'What detail did you add that changed a post the most?',
          'Notice that the details that worked were small and specific. A dollar amount. A brand of water heater. A Tuesday. The machine wanted to be big and vague. You made it small and true.',
          'Your partner found a sentence to cut in every post. So will your customer. Cut it before they do.'),
        sp('Module 4 close',
          'Ten posts done. Look at post one from this morning and post one now. That difference is you. Fifteen minutes. Back at 1:15.'),
        brk('☕ BREAK', '1:00 to 1:15 | 15 minutes'),
      ],
    },

    // ───────────────────────── MODULE 5 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 5: MULTIPLY AND SYSTEMIZE',
      timing: `1:15 to 2:20 | 65 minutes | Workbook p.${P.lab51} to p.${P.lab53} | Outputs: one idea in three formats, posts 11 to 30 edited, the Monday Routine`,
      content: [
        h('RE-ENTRY (1:15 to 1:20)'),
        note('Energy beat. Quick and physical.'),
        sp('Re-entry',
          'Everyone hold up your workbook to the camera, open to page fifteen. Look at the room. Every one of those logs has ink on it. Six hours ago nobody here had a post. Now there are fifty finished ones on this call. Let\'s make it a hundred and fifty.'),

        // LAB 5.1
        lab('LAB 5.1: ONE IDEA, THREE FORMATS', 'Repurposing Lab', `p.${P.lab51}`, '1:20 to 1:40 | 20 minutes'),
        wb(P.lab51, `Page ${P.lab51}. One Idea, Three Formats.`),
        sp('Setup',
          'The people who seem to post constantly are not writing constantly. They are reusing. One good idea becomes a post, a forty-second phone video, a three-slide carousel, and a two-sentence story. Same idea, four pieces.',
          'Take your best post from the edit pass. Run the prompt in chat. Edit what comes back on page sixteen. The video script matters most: first line under eight words, because that is all anyone hears before they scroll.',
          'Twelve minutes.'),
        prompt('P11'),
        timer('12 minutes'),
        note('Tell the trades people directly: nobody wants a polished video from a plumber. They want the plumber. Phone against a coffee cup, read the first line, stop at forty seconds. If someone is willing, have them record the video live during this lab and drop it in chat. It is the best moment of the day when it happens.'),
        sp('Share',
          'Read me your first line of the video script. Under eight words.'),
        note('Round the room. Count words on your fingers on camera. Anyone over eight, have them cut it live.'),
        debrief(
          'Which of the three formats would you actually make this week, and why that one?',
          'The story version is the one most people ignore, and it is the easiest. Two sentences, once a day, from the job site. That is how you stay visible between posts.',
          'One post a week, multiplied by four formats, is a month of visibility from four ideas. That is the math that makes this sustainable.'),

        // LAB 5.2
        lab('LAB 5.2: THE EDIT PASS, WEEKS 3 AND 4', 'Editing Lab', `p.${P.lab52}`, '1:40 to 2:05 | 25 minutes'),
        wb(P.lab52, `Page ${P.lab52}. Posts eleven to twenty, then the ten quick posts.`),
        sp('Setup',
          'Same job as this morning, and you are faster now because you know your pattern. Posts eleven to twenty: one true detail, fix the first line, cut what you would not say. Three minutes each. Anything you cannot fix in three minutes goes on the later list at the bottom of the page.',
          'Then the quick posts. Read each one out loud. If it sounds like you, tick it. If not, rewrite it in one line. Twenty-five minutes. Twenty-five finished posts beat thirty half-finished ones.'),
        timer('25 minutes'),
        note('Prompts P9 and P10 are already in chat from this morning; point people back to them rather than re-dropping. Walk the roster once at 1:52. Anyone who has not started the quick posts by 1:55, tell them to stop full posts at whatever number they are on and do the quick posts now. Quick posts are the ones that get published on bad weeks.'),
        note('Early finishers: have them run Prompt P14 on two of the photos they brought. Two bonus posts.'),
        debrief(
          'How many went on the later list, and what do they have in common?',
          'The later list is usually one pillar. That is the pillar the machine understands least, and it tells you which part of your Context Block needs another sentence.',
          'Count your finished posts. Say the number out loud. That number was zero at seven this morning.'),

        // LAB 5.3
        lab('LAB 5.3: THE MONDAY ROUTINE', 'System Design Lab', `p.${P.lab53}`, '2:05 to 2:20 | 15 minutes'),
        wb(P.lab53, `Page ${P.lab53}. The Monday Routine. This is the page that matters in three weeks.`),
        sp('Setup',
          'Thirty days from now this calendar runs out. What happens then is the only thing that matters about today. The Monday Routine refills it in under two hours without a blank page.',
          'Six steps are on the page. Three things that happened last week. New conversation, Context Block, the Monday prompt. Edit pass. Five photos. Schedule. Reply to comments. The prompt in chat is the engine. Watch me run it on the demo business.'),
        prompt('P12'),
        note('Screen share. Paste the demo Context Block, then P12 with three real things from the demo business\'s week. Show five drafts appearing in under a minute. Close the share. Ninety seconds total.'),
        sp('Your version',
          'Now write your version of the six steps. Put a day and a time next to each. Then the bottom table: what will get in the way, and what you will do about it. At lunch each of you told me what would stop you. Write that down. Then write the answer to it. Eight minutes.'),
        timer('8 minutes'),
        note('Read back each person\'s lunch answer to them if they have forgotten it. "You said a busy week would stop you. What is the answer?" Push for a concrete answer: "On a busy week I only do steps one, two, and five. Thirty-five minutes."'),
        sp('Calendar',
          'Before you leave today, the Monday Routine goes on your actual calendar as a repeating event. Not a reminder. A blocked appointment with yourself. Do it now if you can.'),
        debrief(
          'What day and time did you pick, and why will that one survive a busy week?',
          'Everyone picks Monday morning. About half of you will move it to Sunday night within a month. Either is fine. Moving it is fine. Skipping it is the only failure.',
          'The system is not the posts. The system is the two hours. Protect the two hours and the posts take care of themselves.'),
      ],
    },

    // ───────────────────────── MODULE 6 ─────────────────────────
    {
      type: 'module',
      title: 'MODULE 6: PUBLISH AND COMMIT',
      timing: `2:20 to 2:50 | 30 minutes | Workbook p.${P.lab6} | Outputs: post 1 live, 30-day commitment, accountability partner`,
      content: [
        sp('Why we publish today',
          'Everything on your screen is worth nothing until one post is live. So we do not leave until one is. Not tomorrow. Now, with four other people watching, which is the only way most of us ever do the scary thing.'),

        lab('LAB 6.1: POST NUMBER ONE GOES LIVE', 'Publishing Lab', `p.${P.lab6}`, '2:25 to 2:40 | 15 minutes'),
        wb(P.lab6, `Page ${P.lab6}, top half. Six boxes. Tick them in order.`),
        sp('Setup',
          'Pick the post from Week 1 you are proudest of. Read it out loud once and fix anything you stumbled on. Add a photo if your platform wants one. Then publish it. If your platform can schedule, you may schedule it for tomorrow at 7:30am instead, but the button gets pressed today.',
          'Paste the link in chat when it is up. Then use the rest of the fifteen minutes to schedule posts two through five for the rest of this week.'),
        timer('15 minutes'),
        note('As each link arrives in chat, open it and read the first line out loud to the room. Every single one. This is the moment the day pays off; do not rush it. If someone is frozen, ask "What is the worst thing that happens if this goes up?" and wait.'),
        note('Scheduling help by platform: LinkedIn has a clock icon next to the Post button. Facebook Pages schedule through Meta Business Suite. Instagram schedules through the app for professional accounts, or through Meta Business Suite. Personal Facebook profiles cannot schedule; those people publish now and set phone reminders for posts two through five.'),

        lab('LAB 6.2: THE 30-DAY COMMITMENT', 'Commitment Lab', `p.${P.lab6}`, '2:40 to 2:50 | 10 minutes'),
        wb(P.lab6, `Page ${P.lab6}, bottom half. The commitment and the partner.`),
        sp('Setup',
          'Fill in the sentence. How many posts per week, on which platform, and when the Monday Routine happens. Write it the way you would say it to a customer: specific and dated.',
          'Then pick a partner from this call. Exchange numbers. Every Monday for thirty days you text each other one word: Posted. That is the whole agreement. Sign the page.'),
        note('Pair them yourself if they hesitate: match by platform where possible, so partners can see each other\'s posts. The fifth person partners with you; give them your number and mean it.'),
        sp('Read it',
          'Everyone read your commitment sentence out loud. Then we close.'),
        debrief(
          'What number did you commit to, and is it lower than you first wrote? Good. Lower and kept beats higher and abandoned.',
          'Every person here committed to fewer posts than they have already written today. You are starting thirty days ahead.',
          'The text on Monday is not for your partner. It is for you. Send it even if the post was a quick one.'),
      ],
    },

    // ───────────────────────── CLOSE ─────────────────────────
    {
      type: 'module',
      title: 'CLOSE',
      timing: `2:50 to 3:00 | 10 minutes | Workbook p.${P.deliverables}`,
      content: [
        wb(P.deliverables, `Page ${P.deliverables}. Thirteen boxes. Tick every one you have. If a box is empty, tell me now and we fix it before you log off.`),
        note('Read the thirteen items aloud quickly. Watch cameras for anyone not ticking. The two most commonly missed: the Prompt Sheet saved somewhere findable, and the Monday Routine on the calendar. Fix both live.'),
        sp('What you built',
          'Look at that list. At seven this morning you had a blank document and a feeling. Now you have a customer paragraph, a voice guide, pillars, a Context Block, an idea map, thirty posts, three extra formats, a weekly system, and one post already live. Nobody gave you that. You built it. The machine typed.'),
        sp('Live offer',
          'Two ways to keep this going if you want help, and neither needs a decision today. The Done-With-You Content Sprint is ninety minutes with me, one on one, to build your ninety-day calendar from the system you built today. Four hundred ninety-seven dollars. The monthly membership is a live session every month, a content review, and the group from today, for ninety-seven dollars a month. The details are in chat. Reply to the follow-up email if either is useful.'),
        { type: 'prompt', tag: 'DROP IN CHAT: NEXT STEPS', lines: [
          'Done-With-You Content Sprint: 90 minutes, one on one, your 90-day calendar built from today\'s system. $497.',
          'AI Content Creation Lab Monthly Membership: live monthly session, content review, this group. $97 per month.',
          'Reply to tomorrow\'s follow-up email or message Glenn directly. Nothing to decide today.',
        ] },
        sp('Feedback',
          'One more link in chat. Three questions, two minutes. What worked, what did not, what you would tell the next five people. Please do it before you close Teams; tomorrow you will not.'),
        { type: 'resource', url: '[FEEDBACK FORM LINK]', description: 'Three-question feedback form. Drop it and wait while they complete it.' },
        sp('Final close',
          'Tomorrow, post number two goes out. Then number three. Do not reread the whole calendar. Do not rebuild the system. Just publish the next one.',
          'Your competitor is not more talented than you. They are more visible. As of today, that is no longer true. Thank you for the day. Go publish.'),
        note('Stay on the call until the last person leaves. Some of the best questions come after the close. Send the follow-up email within 24 hours: their workbook pages are their own, but attach the Prompt Sheet again, the Sprint and membership details, and a one-line reminder of their commitment sentence, copied from your notes.'),
      ],
    },

    // ───────────────────────── CONTINGENCIES ─────────────────────────
    {
      type: 'module',
      title: 'CONTINGENCIES AND RECOVERY',
      timing: 'Read before the day. Use during it.',
      content: [
        h('If the day runs long'),
        body('Protect the promise: Context Block, thirty drafts, ten edited posts, Monday Routine, one post live. Cut in this order. First, shorten Lab 5.1 to a demo only (save 12 minutes). Second, move the quick-post edits in Lab 5.2 to homework (save 10 minutes). Third, drop the peer swap in Lab 4.2 (save 10 minutes). Never cut Lab 6.1. The published post is the day.'),
        h('If a participant\'s AI tool is down or refusing'),
        body('Free tiers rate-limit. First fix: wait two minutes and ask for five posts instead of ten. Second fix: a new conversation with the Context Block pasted fresh. Third fix: have them open any of the other two tools in a browser; every prompt is tool-agnostic and the Context Block travels. Do not spend more than three minutes of room time on one person\'s tool; move them to the Coaching Room during the next lab and sort it there.'),
        h('If someone has no writing samples for Lab 1.3'),
        body('Have them record a 90-second voicemail to an imaginary customer on their phone, use the phone\'s voice-to-text, and paste the transcript. A second sample can be their answer to any Lab 1.2 interview question. Spoken voice is usually a better sample than written anyway.'),
        h('If someone is far behind'),
        body('At any lab, the minimum viable output is: a Context Block, ten ideas, five drafted posts, one edited, one published. Tell them that directly at the working lunch one-on-one and re-scope their afternoon to it. Five published posts and a working system beats thirty drafts and no system.'),
        h('If Teams fails'),
        body('Have the backup meeting link ready in the pre-class email. If Teams drops for everyone, email the backup link and restart within five minutes. If it drops for one person, they can rejoin from the same link; do not stop the room. If screen sharing fails, paste the demo outputs from your rehearsal into chat instead of showing them live.'),
        h('If a participant is not a fit'),
        body('Occasionally someone arrives with no business yet, or a corporate marketing job. Do not rebuild the day. Have them run every lab on a real business they know well, ideally one they could help. The system still transfers.'),
        h('Tool differences to know'),
        body('ChatGPT tends to add emojis and headers unless told not to; the RULES line in P0 handles it. Claude tends to ask clarifying questions instead of drafting; reply "Proceed with your best assumption and tell me what you assumed." Gemini sometimes truncates long tables; ask for days 1 to 15, then 16 to 30. None of this needs to be taught to the room. Handle it one screen at a time.'),
      ],
    },
  ],
};
