# AI Release Digest — 9 September 2026

Coverage window: 6 September through 9 September 2026, plus corrections and one catch-up item held from earlier checks.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new released in the window. The Claude Code changelog for 8 September records a regression fix for LLM-gateway and proxy setups that use the CLAUDE_CODE_USE_GATEWAY setting. No model or product announcements.
Source: https://code.claude.com/docs/en/changelog

---

## 2. OpenAI

### Codex Remote generally available on all ChatGPT plans (date not stated by the source)
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
What OpenAI says:
- From the ChatGPT mobile app, users can start or continue work on a connected Mac or Windows host, review progress, and approve actions from their phone.
- Available on all ChatGPT plans. The release notes page does not show the date this entry was added.

### GPT-Live (early August 2026; not in the 3 September issue, included so it is not missed)
Sources: https://openai.com/index/introducing-gpt-live/ and https://deploymentsafety.openai.com/gpt-live
What OpenAI says:
- A new generation of voice models built on a full-duplex architecture, so it can listen and speak at the same time. It can show it is paying attention with short acknowledgements, handle quick back-and-forth, or stay quiet while you think.
- For questions that need web search, deeper reasoning, or more complex work, it delegates to frontier models in the background and brings the result back into the conversation. At launch it used GPT-5.5 behind the scenes.
- Two models, GPT-Live-1 and GPT-Live-1 mini, rolling out to ChatGPT users globally on iOS, Android, and ChatGPT.com. An API sign-up form exists for GPT-Live-1.

### GPT-6 Astra rollout clarification (3 September release; detail added after the 5 September issue)
Sources: https://openai.com/index/gpt-6-astra/ and https://openai.com/index/safety-overview-gpt-6-astra/
- OpenAI states Astra rolled out on 3 September to a limited set of organizations, is not yet generally available, and will reach all ChatGPT Plus, Pro, Business, and Enterprise users plus the API, Microsoft Azure, and AWS Bedrock over the coming days.
- Astra carries added safety monitoring that can pause or stop a conversation when an agent may have misread instructions, for the user to review.
- Related posts: https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/ and https://openai.com/index/pacing-model-development-cyber-capabilities/

### Upcoming
- OpenAI DevDay 2026 is 29 September at Fort Mason, San Francisco. Applications are closed. The keynote livestream is free. https://openai.com/index/devday-2026/

### How to use this at Touch Stone Publishers
1. Use Codex Remote for the Build-a-Class site while away from the desk. Start a change on the Mac, then review and approve from the phone between sessions. It fits the approve-from-anywhere pattern the morning triage already uses.
2. Try GPT-Live as a rehearsal partner. Full-duplex voice with interruptions is close to a live audience. Run the Wednesday Live Dissection talking points against it once before going on air, and use it to pressure-test the teleprompter pacing for a Pryor class.
3. Hold on any ChatGPT plan change for Astra until it reaches your tier. OpenAI says days, not weeks. Re-check the release notes before DevDay.
4. Put DevDay on the calendar. The 29 September keynote is where API pricing and Codex changes usually land. Plan the three-way Red Team bake-off from the 5 September issue for the week after, so it uses whatever ships.

---

## 3. Meta

### Muse, a personal AI agent (8 September 2026)
Sources: https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/ and https://ai.meta.com/muse/
What Meta says:
- "The world's first personal AI agent built for everyone." Muse "doesn't just answer questions, it actually does the work." It helps people stay on top of things, takes tasks and projects off their plate, and turns long-term goals into action plans.
- Powered by Muse Spark, described as Meta's most capable model to date, built for real-world agentic work.
- Runs on Muse Secure VM, a dedicated secure computer with its own browser. It can work on a person's behalf across the apps they use daily, open a browser, fill out forms, and negotiate on their behalf.
- For longer tasks, Muse keeps working after the app is closed and comes back when something changes or when it needs approval.
- Remembers what matters to a person, makes suggestions unprompted, and acts on details mentioned once. Meta's examples: turning a saved Instagram recipe reel into a grocery list, suggesting a dinner party menu, and remembering friends' dietary restrictions before sending invites.
- Privacy: Muse does not share a person's conversations or VM data with Meta's ad systems. Later this year Meta will introduce Muse Confidential VM, where the whole VM, including data and conversations, is encrypted with a key only the user holds, so not even Meta can access it.
- Availability: rolling out in the US on iOS, Android, and muse.ai, coming soon to AI glasses. Free for most of what people need, with subscription plans for people who want to do more. The announcement does not state plan prices.

### Upcoming
- Meta Connect 2026 runs 23 to 24 September. Expect Meta AI, Muse, and glasses announcements that week. https://www.meta.com/connect/

### How to use this at Touch Stone Publishers
1. Treat Muse as an audience signal before a tool. The Content Creation Lab's buyers, solopreneurs, trades professionals, and real estate agents, will meet a persistent agent through Muse first. Build one lab module around "give it a goal, approve the steps" using Muse as the example they already have on their phone.
2. Use it as a competitor reference for how you package agent workflows. Muse's approval-on-return and memory behaviors are the consumer version of what Grok Bot and Cowork do for work. Note what feels natural to a non-technical user and mirror that in the lab's AI prompt sheets.
3. Keep client and NDA material out of it until Muse Confidential VM ships. Meta's own wording says the user-held key arrives later this year. Until then, treat the VM as Meta-visible.
4. Watch for the Meta Model API and Muse Spark version behind Muse. If the consumer agent runs on a newer Spark than the 1.3 on the developer page, that is the model to bake off against Luna and Sonnet 5 for social adaptation work.
5. Plan Meta Connect coverage. Two days of announcements on 23 and 24 September are a natural LinkedIn Live topic and a sector intel signal for the Technology rotation.

---

## 4. xAI (Grok)

Nothing new released in the window. Two corrections and one piece of context.

### Correction to the 3 September issue: Grok 4.6 pricing tiers
Source: https://docs.x.ai/developers/release-notes
- xAI's docs list Grok 4.6 API pricing as $2 input, $0.50 cached input, and $6 output per million tokens below 200k prompt tokens, and $4, $1, and $12 above 200k. The first issue gave only the $2/$6 base rate.
- Every xAI API response now returns a cost_in_usd_ticks field in the usage object across chat, Responses, image, video, and streaming. The release-notes page does not state the date this was added.

### Context: Grok Bot posts
- 3 September: "Designing Grok Bot for a world of persistent agents." https://x.ai/news/designing-grok-bot
- 4 September: a case study where Grok Bot was given vendor spend, contract, and usage data and found more than $100,000 in direct savings.

### How to use this at Touch Stone Publishers
1. Re-cost the whole-course idea from the 3 September issue. A coaching guide plus workbook plus build scripts may cross 200k tokens, which doubles the rate. Either keep the pass under 200k or accept $4/$12 for the single-read benefit.
2. Log cost per run with the new usage field. Add cost_in_usd_ticks to the run record for any Grok pipeline stage so the bake-off compares cost per finished brief, not list price.
3. Read the Grok Bot design post before the pilot. It states how persistence and approvals are meant to work, which is the behavior to test on the WordPress plus Postiz flow.

---

## Cross-vendor takeaways

1. Every vendor now ships a persistent agent for a non-technical user. Muse for consumers, Grok Bot for teams, Cowork and Claude Tag for knowledge work, Codex Remote for approving work from a phone. The lab curriculum should teach the pattern, not any one product.
2. Two announcement windows are coming in a fortnight. Meta Connect on 23 and 24 September and OpenAI DevDay on 29 September. Expect the next large digest issues those weeks.
3. Long-context pricing keeps splitting into tiers. Grok 4.6 at 200k and GPT-6 Astra at 272K both double input cost past a line. Chunking is a cost control now, not a workaround.

---

## Sources
- https://code.claude.com/docs/en/changelog
- https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- https://openai.com/index/introducing-gpt-live/
- https://deploymentsafety.openai.com/gpt-live
- https://openai.com/index/gpt-6-astra/
- https://openai.com/index/safety-overview-gpt-6-astra/
- https://openai.com/index/responding-next-frontier-critical-cyber-capabilities/
- https://openai.com/index/pacing-model-development-cyber-capabilities/
- https://openai.com/index/devday-2026/
- https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/
- https://ai.meta.com/muse/
- https://www.meta.com/connect/
- https://docs.x.ai/developers/release-notes
- https://x.ai/news/designing-grok-bot
