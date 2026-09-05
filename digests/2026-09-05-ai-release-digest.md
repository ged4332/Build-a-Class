# AI Release Digest — 5 September 2026

Coverage window: 4 September after the previous issue, through 5 September 2026.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new in the window on Anthropic's newsroom or platform release notes.

---

## 2. OpenAI

### GPT-6 Astra (published within the day before this digest; OpenAI's page does not show an exact date stamp in search)
Sources: https://openai.com/index/gpt-6-astra/ and https://developers.openai.com/api/docs/models/gpt-6-astra
System card: https://deploymentsafety.openai.com/gpt-6-astra
Related, 1 September: "Path to Astra: critical capabilities and frontier safeguards" https://openai.com/index/path-to-astra/

What OpenAI says:
- "The most intelligent and aligned model in the world," setting "a new state of the art for computer use, browsing, software engineering, cybersecurity, science, and professional work."
- Computer use: 1.9 times faster task completion than GPT-5.6 Sol on the Mind2Web benchmark, with examples across game development and electrical engineering.
- Cybersecurity: significantly more token efficient and more capable at vulnerability identification and exploit development than GPT-5.6 Sol. On ExploitBench, Astra scored 100 percent against 78.5 percent for GPT-5.6 Sol. On cyber jailbreak evaluations it refuses 91.5 percent of requests, against 59 percent for GPT-5.6 Sol.
- Science: described as a major advance for scientific discovery, mathematics, and health, with new records across a suite of math and science evaluations.
- Suited to complex reasoning, coding, computer use, research, and document creation.
- API pricing: $10 per million input tokens and $50 per million output tokens at Standard. Separate rates apply to cache reads and writes. Prompts with more than 272K input tokens are priced at 2 times the input and cache rates and 1.5 times the output rate for the full request.
- Context window: 1,050,000 tokens. Maximum output: 128,000 tokens.
- Fast mode in the API delivers up to 2 times the speed of Standard at 2 times the Standard price.
- Developer availability: the OpenAI API as gpt-6-astra, plus Microsoft Azure and Amazon Bedrock.
- ChatGPT availability: GPT-6 Pro, powered by GPT-6 Astra, is rolling out to Pro $100, Pro $200, Business, and Enterprise plans. Plus plans get GPT-6 Astra in ChatGPT Work and Codex as it rolls out.

### How to use this at Touch Stone Publishers
1. Treat Astra as the whole-corpus model, not the default. Its price matches Claude Fable 5.1 at $10/$50, so the difference is the 1,050,000 token window. Use it for jobs that need one pass over everything: a consistency review of a full flagship set, playbook plus six white papers, or a quarter of board briefs fed to the topic radar to find recurring signals.
2. Respect the 272K line. Above it the whole request costs 2 times on input and 1.5 times on output. Chunk the Pryor course builds and daily briefs as you do now, and only cross 272K when a single read is the point of the job.
3. Test computer use on the publishing chain. The Mind2Web speed gain is aimed at browser tasks. Run WordPress publish, Postiz scheduling, and the Lulu upload on a staging site with approval gates before trusting it with the live site.
4. Check your plan before upgrading. GPT-6 Pro needs Pro $100 or above, Business, or Enterprise. On Plus, Astra arrives through ChatGPT Work and Codex on rollout. Do not move tiers until the bake-off below says it earns the spend.
5. Run a three-way Red Team bake-off. Same board brief, same Alpha/Beta/Gamma rubric, scored across Fable 5.1, GPT-6 Astra, and Grok 4.6. Pick a model per pipeline stage on results, not on launch claims.
6. Use the vulnerability work for the Build-a-Class site. Astra's ExploitBench result and Fable 5.1's new source-code vulnerability capability both apply. One security review of the Next.js codebase from each, compared, is a cheap way to see where they differ.

---

## 3. Meta

Nothing new in the window. Muse Spark 1.3 and the Muse Code plans were covered in the 4 September issue.

---

## 4. xAI (Grok)

Nothing new in the window. Search surfaced Grok Imagine Video 1.5 with text-to-video, native 1080p, and reference-to-video with preset voices, but xAI dates that release to 31 July 2026.

---

## Cross-vendor takeaways

1. Two frontier launches in five days at the same price. Claude Fable 5.1 on 1 September and GPT-6 Astra now, both at $10 in and $50 out per million tokens. Price is no longer the tiebreaker at the top. Context window, cache terms, and per-stage quality are.
2. Long context now has a surcharge structure. Astra doubles input cost above 272K tokens. Grok 4.6 gives 500K flat at $2/$6. Fable 5.1 sells cheap cache reads. Each vendor rewards a different prompt shape, so the stable-preamble pattern from the 3 September issue matters more, not less.
3. ChatGPT Work is a new name to watch. OpenAI's help pages pair it with Codex as the route for Plus users to reach Astra. Details were not in the search results and should be checked before any plan change.

---

## Sources
- https://openai.com/index/gpt-6-astra/
- https://developers.openai.com/api/docs/models/gpt-6-astra
- https://deploymentsafety.openai.com/gpt-6-astra
- https://openai.com/index/path-to-astra/
- https://help.openai.com/en/articles/20001354-gpt-56-in-chatgpt
- https://developers.openai.com/api/docs/pricing
- https://x.ai/news/grok-imagine-video-1-5
