# AI Release Digest — 8 October 2026

Coverage window: 8 October 2026, plus three OpenAI items from 1 through 7 October that earlier issues missed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new released in the window on Anthropic's newsroom, platform release notes, or the Claude Code changelog.

---

## 2. OpenAI

### GPT-6 and Intelligent UI for everyone (7 October 2026; Free and Go rollout completes 8 October)
Source: https://openai.com/index/gpt-6-for-everyone/
What OpenAI says:
- ChatGPT now builds answers from text, visuals, and interactive elements, choosing the layout based on the question. Responses can include graphics, tappable buttons, forms, charts, and interactive experiences used directly in the conversation. A simple question still gets a simple text answer.
- Users can ask ChatGPT to build a working tool for a task, OpenAI's examples are a savings calculator, a bill splitter for a dinner with friends, and a playable game inside the conversation. Visuals for learning can be manipulated directly, changing an input to see what happens.
- GPT-6 can start replying before it finishes reasoning and add findings without another prompt. For web-search questions, GPT-6 Instant starts answering 44 percent sooner on average than GPT-5.6 Instant.
- Rollout: Plus, Pro, Business, and Enterprise got GPT-6 Sol with Intelligent UI in the Chat tab on 7 October; Free and Go get GPT-6 Luna starting 8 October. The Pro reasoning option continues to use GPT-6 Astra and does not support Intelligent UI. Work and Codex models are unchanged by this release. Older desktop apps for macOS and Windows do not support Intelligent UI; OpenAI directs those users to ChatGPT on the web.
- A Layout and visuals setting can be turned off, though OpenAI notes some visual elements may still appear even with it off.

### Decisions API public beta (6 October 2026)
Source: https://developers.openai.com/api/docs/guides/decisions
What OpenAI says:
- A new POST /v1/decisions endpoint that turns text and images into typed answers, which OpenAI states is 10 times faster than the Responses API for this kind of task. Runs on gpt-6-luna, currently the only supported model.
- A request has a model field, an input field (text, or messages with text and images), and a questions field. The response returns named answers, each either a probability, a choice from a fixed set with a confidence score, or a score against a rubric.
- Pricing: $0.10 per million input tokens on gpt-6-luna, with no cache or output-token charges, paying only for input tokens. No input caching is available yet. OpenAI expects general availability in the coming weeks.

### Virtual try-on for shopping (1 October 2026; not in earlier issues)
Source: https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search
What OpenAI says:
- A "Try on" button appears on clothing and accessory product listings in ChatGPT. Tapping it, then taking or uploading a selfie, generates a try-on image via ChatGPT Images. A photo of an item shared in conversation can also be used this way.
- Reference photos are saved for future try-ons and can be changed or deleted under Settings, Personalization, Reference photos. OpenAI states results may not exactly match the product or the user's appearance and does not promise fit or size; it advises checking the merchant's measurements and return policy before buying.
- Saved items can be organized into Favorites or folders in the ChatGPT Library.

### How to use this at Touch Stone Publishers
1. Treat Intelligent UI as a new output format to test for the Content Creation Lab's AI prompt sheets, an interactive calculator or quiz embedded directly in a ChatGPT answer is a richer deliverable than static text, worth one trial build.
2. Pilot the Decisions API for any classification step currently handled with the full Responses API, such as triaging outreach replies into categories. At $0.10 per million input tokens with no output charge, a pure yes/no or multiple-choice classification task gets meaningfully cheaper once the API leaves beta.
3. Note the virtual try-on feature as a sector-brief data point for Consumer and Retail: AI-generated fit visualization inside a chat interface is now a mainstream feature, not a startup differentiator.
4. Hold off building against the Decisions API in anything revenue-critical until OpenAI's stated general-availability date, given the beta's noted lack of input caching and early accuracy reports from developers.

---

## 3. Meta

Nothing new released in the window beyond Meta Connect 2026 detail already covered in the 23 September through 7 October issues.

---

## 4. xAI (Grok)

Nothing new released in the window beyond the grok-voice-transcribe-1.0 retirement already covered in the 4 October issue.

---

## Cross-vendor takeaways

1. OpenAI shipped three distinct kinds of release inside one week: a consumer UI shift (Intelligent UI), a new structured-output API (Decisions), and a commerce feature (virtual try-on). That breadth, after DevDay, suggests OpenAI is now shipping continuously rather than batching everything into events.
2. Structured, typed outputs at a fraction of chat-completion pricing is a notable new primitive. The Decisions API's $0.10-per-million-input, no-output-charge model is worth comparing against any classification step currently built on a full chat completion.

---

## Upcoming
No confirmed dates for the next vendor event as of this issue.

## Sources
- https://openai.com/index/gpt-6-for-everyone/
- https://developers.openai.com/api/docs/guides/decisions
- https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search
