// AI Content Creation Lab | Prompt Library (tool-agnostic)
// Every prompt works when pasted into ChatGPT, Claude, or Gemini.
// Square brackets mark the parts the participant fills in.

module.exports = [
  {
    id: 'P0',
    name: 'The Context Block',
    when: 'Lab 2.3. Paste this at the top of every new AI session, all day and every week after.',
    lines: [
      'You are helping me write social media content for my business. Use everything below in every reply. Do not invent facts, numbers, or results about my business. If you need a detail you do not have, ask me instead of making one up.',
      '',
      'ABOUT MY BUSINESS: [two or three sentences: what you do, where you do it, who you do it for]',
      'MY BEST CUSTOMER: [paste your customer description from Lab 1.1]',
      'WHAT I WANT MORE OF: [the job, client, or project type you want more of]',
      'MY VOICE: [paste your Brand Voice Guide from Lab 1.3]',
      'MY CONTENT PILLARS: [paste your pillars from Lab 2.2]',
      'MY PLATFORM: [LinkedIn, Facebook, or Instagram]',
      '',
      'RULES: Plain language. Short sentences. No hype. No hashtags and no emojis unless I ask for them. Never claim a result I did not give you. Sound like me, not like an ad. Do not use any of these words: game-changer, unlock, leverage, robust, empower, seamless, holistic, journey, transformative, elevate, delve, unleash.',
      '',
      'When I ask for a post, give me only the post. No introduction, no explanation, no closing comment.',
    ],
  },
  {
    id: 'P1',
    name: 'Sharpen Your Customer',
    when: 'Lab 1.1. Turn a rough description of your customer into one paragraph you can use all day.',
    lines: [
      'Here is a rough description of the customer I want more of: [paste your notes from the workbook].',
      '',
      'Rewrite it as one paragraph that names a specific person, their situation, the exact moment they go looking for someone like me, and the thing they are afraid of getting wrong. Use my words where you can. Do not add facts I did not give you. Keep it under 120 words.',
    ],
  },
  {
    id: 'P2',
    name: 'The Raw Material Interview',
    when: 'Lab 1.2. Let the AI interview you so you do not stare at a blank page.',
    lines: [
      'Interview me about my business so we can find content topics. Ask one question at a time and wait for my answer. Cover these areas: questions customers ask me constantly, mistakes I see people make before they call me, how I actually do the work step by step, stories from real jobs or clients, and things I believe that others in my field do not.',
      '',
      'After 12 questions, stop and give me a numbered list of 25 content topics built only from my answers. Use my exact words and details. No generic topics.',
    ],
  },
  {
    id: 'P3',
    name: 'Voice Extraction',
    when: 'Lab 1.3. Build your Brand Voice Guide from how you already write.',
    lines: [
      'Below are three samples of how I actually write or talk to customers. [Paste an email, a text message thread, and a voicemail or note you wrote. Remove names and private details first.]',
      '',
      'SAMPLE 1: [paste]',
      'SAMPLE 2: [paste]',
      'SAMPLE 3: [paste]',
      '',
      'Describe my voice in plain terms: typical sentence length, words and phrases I use, how I open, how I close, how formal I am, and whether I use humor. Then write a Voice Guide of 8 short rules I can paste into future prompts so you write like me. Then list 10 words or phrases that sound like me and 10 that do not.',
    ],
  },
  {
    id: 'P4',
    name: 'Build Your Pillars',
    when: 'Lab 2.2. Group your raw material into four or five content pillars.',
    lines: [
      'Here is my customer description: [paste]. Here are 25 topics from my business: [paste your Raw Material Bank].',
      '',
      'Group these into 4 or 5 content pillars. For each pillar give me: a name of 2 to 4 words, one sentence on what my customer gets from posts in this pillar, and the topics from my list that belong there. One pillar must be Proof (real stories and results). One pillar must be Answers (questions customers actually ask). Every topic must land in exactly one pillar.',
    ],
  },
  {
    id: 'P5',
    name: 'Test Post and Critique',
    when: 'Lab 2.3. Prove the Context Block works before you build on it.',
    lines: [
      'Write one post for my platform on this topic: [pick one topic from your Raw Material Bank].',
      '',
      'Then, under a line that says CRITIQUE, list three specific ways this post could be more about my business and less like something any business could post. Do not rewrite it yet.',
    ],
  },
  {
    id: 'P6',
    name: 'The 30-Day Idea Map',
    when: 'Lab 3.1. Thirty ideas on a calendar before you draft a single post.',
    lines: [
      'Using my content pillars, create 30 post ideas for the next 30 days. Rotate pillars so no two consecutive days use the same pillar.',
      '',
      'For each idea give me: the day number, the pillar, a one-line working title in plain words, and the format (story, tip, customer question, before and after, myth, how I work, or behind the scenes).',
      '',
      'Mark 20 of them as FULL posts and 10 as QUICK posts. A quick post is a single question, a photo caption, or a one-line tip. Spread the quick posts out, no more than three per week. Give me the result as a table with columns: Day, Pillar, Title, Format, Full or Quick.',
    ],
  },
  {
    id: 'P7',
    name: 'Batch Draft: Full Posts',
    when: 'Working lunch. Draft ten full posts at a time.',
    lines: [
      'Draft the FULL posts numbered [1 to 10] from my 30-Day Idea Map, which is pasted below.',
      '',
      'Platform rules: [paste the rules for your platform from workbook page 8].',
      '',
      'For every post: the first line must name a specific situation my customer recognizes. No hashtags. No emojis. End with one plain next step or one honest question. Number each post to match the map. Give me only the posts.',
      '',
      'IDEA MAP: [paste the table]',
    ],
  },
  {
    id: 'P8',
    name: 'Batch Draft: Quick Posts',
    when: 'Working lunch. Draft all ten quick posts in one go.',
    lines: [
      'Draft the 10 QUICK posts from my 30-Day Idea Map, pasted below. Each one is under 40 words. A question post asks one thing my customer has an opinion on. A photo caption tells the customer why what is in the photo matters to them, and I will add the photo. A one-line tip is something they can do today. Number each to match the map. Give me only the posts.',
      '',
      'IDEA MAP: [paste the table]',
    ],
  },
  {
    id: 'P9',
    name: 'The Slop Detector',
    when: 'Lab 4.1. Find the sentences that could belong to anyone.',
    lines: [
      'Review the post below against my Voice Guide. Flag every sentence that: could belong to any business in my field, uses a hype word, makes a claim I did not give you, runs longer than 25 words, or opens without naming a specific situation.',
      '',
      'List the flags with the exact sentence quoted. Then rewrite only the flagged sentences. Leave everything else untouched.',
      '',
      'POST: [paste]',
    ],
  },
  {
    id: 'P10',
    name: 'Specificity Injection',
    when: 'Lab 4.2. The fastest fix for a generic post is one true detail.',
    lines: [
      'Here is a post: [paste]. Here is a true detail from a real job or client: [one or two sentences: what happened, what it cost, what you found, what the customer said].',
      '',
      'Rewrite the post around that detail so it could only have come from my business. Keep my voice. Keep it under [word limit for your platform] words. Do not add any detail I did not give you.',
    ],
  },
  {
    id: 'P11',
    name: 'One Idea, Three Formats',
    when: 'Lab 5.1. Get three pieces out of every post you like.',
    lines: [
      'Take the post below and give me three more versions of the same idea:',
      '1. A 40-second video script I can film on my phone, spoken plainly, with a first line under 8 words and a last line that tells the viewer what to do next.',
      '2. A three-slide carousel outline: one headline and one sentence per slide.',
      '3. A two-sentence version for a story or status update.',
      '',
      'Keep my voice in all three. No hashtags. No emojis.',
      '',
      'POST: [paste]',
    ],
  },
  {
    id: 'P12',
    name: 'The Monday Prompt',
    when: 'Lab 5.3. Your weekly system in one prompt.',
    lines: [
      'It is Monday. Here are three things that happened in my business last week: [one line each: a job, a question, a problem, a win].',
      '',
      'Using my pillars and my Voice Guide, give me 5 post drafts for this week, one for each weekday. At least two must be built from the three things above. Each under [word limit for your platform] words. Number them Monday through Friday. Give me only the posts.',
    ],
  },
  {
    id: 'P13',
    name: 'Comment Reply',
    when: 'Any day. Keep the conversation going without sounding like a bot.',
    lines: [
      'Here is a comment someone left on my post: [paste]. Write a two-sentence reply in my voice that thanks them and adds one useful detail. No exclamation points. No emojis.',
    ],
  },
  {
    id: 'P14',
    name: 'Photo Caption',
    when: 'Any day. Turn a job-site or office photo into a post in one minute.',
    lines: [
      'Here is what is in this photo: [describe it in one or two sentences, including anything the customer would not notice]. Write a caption under 60 words in my voice that tells my customer why this matters to them. No hashtags unless my platform is Instagram, and then give me 5 at the end on a separate line.',
    ],
  },
  {
    id: 'P15',
    name: 'The Five-Minute Post',
    when: 'Any day. When you have five minutes and nothing ready.',
    lines: [
      'I have five minutes. Give me one post from my [pillar name] pillar that I can publish right now with no editing. Under 80 words. Start with a specific situation. End with a question my customer can answer in one line.',
    ],
  },
  {
    id: 'P16',
    name: 'Fix a Post That Sounds Like AI',
    when: 'Any day. When you read a draft and hear a robot.',
    lines: [
      'This post sounds like a machine wrote it: [paste]. Rewrite it so it sounds like me talking to one customer across a counter. Cut every sentence that does not add a fact, a story, or a next step. Shorter is better.',
    ],
  },
];
