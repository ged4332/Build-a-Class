# AI Release Digest — 23 September 2026

Coverage window: 23 September 2026, plus two Anthropic and OpenAI items dated 22 September that had not yet appeared when yesterday's issue closed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states. Today is day one of Meta Connect 2026.

---

## 1. Anthropic

### Claude Opus 5.5 (22 September 2026)
Sources: https://www.anthropic.com/claude-opus-5-5 and system card https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf
What Anthropic says:
- "A major step up from Opus 5" and the new leading model, with early testers seeing large jumps on their most complex work. Leads in agentic coding, computer use, and knowledge work.
- Anthropic's examples: one tester completed a 680,000-line code migration in under a day, work that would have taken an engineering team weeks. Asked to cut load times across every page of a web app, Opus 5.5 succeeded 39 of 40 times, while Opus 5 made smaller improvements that also changed the app's behavior.
- Pricing: $4 per million input tokens and $20 per million output tokens, 20 percent less than Opus 5. Cache reads at $0.20 per million tokens, 60 percent less than Opus 5. Anthropic estimates roughly 40 percent lower cost than Opus 5 on typical workloads at default settings.
- Output generation is more than 30 percent faster than Opus 5.
- On Anthropic's automated behavioral audit, its most comprehensive alignment test, Opus 5.5 is the strongest-performing model tested to date.

### Claude Cowork generally available on macOS and Windows (around 22 September 2026)
Source: https://docs.anthropic.com/en/release-notes/claude-apps and https://www.anthropic.com/product/claude-cowork
What Anthropic says:
- Cowork gives Claude permission to read, edit, and create files in folders you specify, so it completes tasks rather than describing how to do them. Built for non-coding knowledge work: research, analysis, document creation, and other multi-step tasks.
- When a task needs a browser, Claude opens one in the Cowork side panel instead of the user's own, so the user keeps working.
- Start a task from a phone and Claude keeps working in the cloud after the laptop closes. Check in, redirect, or review from anywhere.
- New enterprise features: role-based access control by group, group-level spend caps, usage analytics with OpenTelemetry support, and granular admin control over connectors and tools. Cowork usage is also available in the Analytics API.

### How to use this at Touch Stone Publishers
1. Move the heaviest flagship pipeline stages to Opus 5.5 first. The 40 percent typical-workload cost drop plus a documented jump in agentic coding and computer-use reliability makes it the new default for the White Paper and Executive Playbook drafting stages, ahead of a full re-run of the three-way bake-off from earlier issues.
2. Pilot Cowork for morning triage and outreach review on the desktop app now that it is GA on both macOS and Windows. Its phone-to-cloud handoff fits the pattern where Glenn starts a task before a meeting and reviews the result after.
3. Turn on Cowork's spend caps before any wider rollout. Group-level caps and role-based access are the guardrail to put in place before letting more than one person at Touch Stone run Cowork sessions unsupervised.
4. Re-run the Build-a-Class site security review on Opus 5.5 once available. Anthropic's own alignment-audit claim is the kind of result worth verifying directly on a real codebase rather than taking at face value.

---

## 2. OpenAI

### GPT-6 Sol and GPT-6 Luna (22 September 2026)
Sources: https://openai.com/index/introducing-gpt-6-sol-and-luna/
What OpenAI says:
- Combine strong coding performance with lower API prices, giving developers more room to iterate and teams more confidence to ask Codex to take on ambitious work. Build on the advances behind GPT-6 Astra, bringing much of its strength into faster, more affordable models for work at scale.
- Pricing: 50 percent lower API prices than GPT-5.6 promotional pricing for both Sol and Luna.
- Availability: in ChatGPT Work and Codex today for all Plus, Pro, Business, Enterprise, and Edu users. Free and Go users get GPT-6 Luna in the desktop app. In the API as gpt-6-sol and gpt-6-luna.

### Interactive flashcards in ChatGPT (date not stated by the source)
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
What OpenAI says:
- Ask for flashcards on a topic, or upload notes and ask ChatGPT to turn them into flashcards. Available on mobile and web for all plans.
- Tap a card to flip it, mark it known or to practice again, and shuffle the deck. Cards save automatically to the user's library for repeat practice.

### How to use this at Touch Stone Publishers
1. Route Codex-driven work on the Build-a-Class site through GPT-6 Sol or Luna now that pricing is 50 percent below GPT-5.6 promotional rates. Compare Sol against Astra on the same task; Sol is built to bring most of Astra's strength at a fraction of the cost.
2. Use Luna as the low-cost default for high-volume, low-stakes generation, tagging the content archive, drafting reply variants, and triaging prospect lists, the same role Luna played under GPT-5.6.
3. Turn the Pryor course AI prompt sheets into flashcard decks with the interactive flashcards feature. It is a zero-build way to give attendees a review tool between sessions, and decks persist in each user's ChatGPT library.

---

## 3. Meta

Day one of Meta Connect 2026, at Meta's Menlo Park campus, 23 to 24 September.

### Meta Glasses (23 September 2026)
Sources: https://www.meta.com/blog/introducing-meta-glasses-a-range-of-new-styles-from-meta-and-essilorluxottica-starting-at-299/
What Meta says:
- A new line built with EssilorLuxottica, 26 styles across colors, lenses, and frames, including sun, Transitions, polarized, and clear lens options.
- Starting price: $299.
- The first AI glasses to launch with Meta AI powered by Muse Spark from day one, in the US and Canada. Muse Spark is also now available on Ray-Ban Meta and Oakley Meta glasses.

### Muse Voice Transcribe (Meta Connect 2026)
Sources: https://developer.meta.com/ai/models/muse-voice-transcribe/ and https://developer.meta.com/ai/resources/blog/meet-muse-voice-transcribe-streaming-speech-to-text/
What Meta says:
- Meta's first real-time audio perception model. Supports real-time streaming and one-shot transcription, with speaker diarization, voice activity detection, and endpointing handled inside the same model.
- Available on the Meta Model API at $3.00 per 1,000 minutes, which is $0.18 per hour.

### How to use this at Touch Stone Publishers
1. Compare Muse Voice Transcribe against Grok Voice Transcribe 2.0 and OpenAI's dictation model on the same LinkedIn Live recording. At $0.18 per hour it undercuts Grok's $0.10-per-hour batch rate only at scale, since Meta's price includes real-time streaming and diarization built in; test which gives the cleanest names and tickers.
2. Treat the Meta Glasses launch as a live example of "the model perceives, then acts" for the Content Creation Lab curriculum. It is a concrete, consumer-priced device attendees can hold up as what an AI-glasses workflow looks like, useful for the module on emerging tools small businesses should watch.
3. Hold off on any Muse Spark glasses integration for TSP's own workflows until day two of Connect closes; developer sessions on 24 September may add API details not yet public.

---

## 4. xAI (Grok)

Nothing new released in the window on x.ai/news or the docs release notes.

---

## Cross-vendor takeaways

1. Three frontier launches inside 48 hours. Claude Opus 5.5, GPT-6 Sol and Luna, and Grok 4.7 (from the previous issue) all landed within two days of each other, each cheaper or faster than its predecessor at the same or lower price. Re-run the cross-model bake-off on the flagship pipeline this week rather than waiting for the next quiet stretch.
2. Real-time voice is becoming table stakes. Muse Voice Transcribe, Grok Voice Transcribe 2.0, and OpenAI's dictation model now compete on price per hour and built-in diarization. The transcript is becoming a commodity input; the differentiator is what happens to it downstream.
3. Meta Connect continues tomorrow. Expect a further issue covering day two, 24 September, likely with more AI glasses developer detail and possibly new Muse Spark capabilities.

---

## Upcoming
- Meta Connect 2026 day two, 24 September, Menlo Park.
- OpenAI DevDay 2026, 29 September, Fort Mason, San Francisco. https://openai.com/index/devday-2026/

## Sources
- https://www.anthropic.com/claude-opus-5-5
- https://www-cdn.anthropic.com/fc1b44717c85dc068bc6ba5024219938094694bd/Claude%20Opus%205.5%20System%20Card.pdf
- https://docs.anthropic.com/en/release-notes/claude-apps
- https://www.anthropic.com/product/claude-cowork
- https://openai.com/index/introducing-gpt-6-sol-and-luna/
- https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- https://www.meta.com/blog/introducing-meta-glasses-a-range-of-new-styles-from-meta-and-essilorluxottica-starting-at-299/
- https://developer.meta.com/ai/models/muse-voice-transcribe/
- https://developer.meta.com/ai/resources/blog/meet-muse-voice-transcribe-streaming-speech-to-text/
