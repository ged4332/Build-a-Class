# AI Release Digest — 3 September 2026

Coverage window: 1 August to 3 September 2026.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.
Company lens: Touch Stone Publishers (board intelligence briefs, Pryor course builds, LinkedIn and WordPress distribution, video, the Build-a-Class site).

Method note: this environment cannot open the vendor sites directly, so every item below was pulled through search restricted to the vendors' own domains. Each item links to the source page. Dates are the ones the source states.

---

## 1. Anthropic

### Claude Fable 5.1 and Claude Mythos 5.1 (1 September 2026)
Source: https://www.anthropic.com/claude-fable-and-mythos-5-1
System card: https://www-cdn.anthropic.com/0339e6a7c5c7b87f5c07798616dc32c215d14235/Claude%20Fable%205.1%20&%20Claude%20Mythos%205.1%20System%20Card.pdf

What Anthropic says:
- "The world's most advanced models for coding and knowledge work," with research capabilities they describe as an early glimpse of how AI will contribute to scientific progress.
- Fable 5.1 is "a Mythos-level model built for your most ambitious, long-running projects. It avoids easy-seeming shortcuts, fixes the root causes of problems rather than the symptoms, and keeps you updated as it works."
- Built for jobs that take hours and span many applications: working through a backlog in Cowork, picking up requests in Slack through Claude Tag (beta), operating a browser, or running unattended as a managed agent on the Claude Platform.
- Fable 5.1 and Mythos 5.1 are the same model with different safeguards. Fable 5.1 is generally available. Mythos 5.1 stays limited to vetted organizations through trusted-access programs for cybersecurity and life sciences.
- Safeguards are more precise: Fable 5.1 can now identify software vulnerabilities in source code, and biology safeguards intervene on benign requests 85 percent less often than at the Fable 5 launch.
- Pricing: $10 per million input tokens and $50 per million output tokens, unchanged from Fable 5. Cache reads drop to $0.25 per million tokens, 75 percent less than Fable 5. Anthropic estimates typical workloads cost about 25 percent less and highly agentic workloads up to roughly 45 percent less.
- Availability: Pro, Max, Team, and Enterprise plans; the Claude Platform; Amazon Web Services, Google Cloud, and Microsoft Foundry.

### Claude Sonnet 5 pricing made permanent (announced with the 1 September release)
Source: https://www.anthropic.com/claude-fable-and-mythos-5-1
- The $2 per million input and $10 per million output introductory price is now the standard price. The increase to $3/$15 scheduled for 1 September will not happen.

### Expanding support for scientists (27 August 2026)
Source: https://www.anthropic.com/news/expanding-support-for-scientists
- 10,000 seats opened for scientists worldwide, free or discounted for one year, through a new Claude team plan for scientists.

### Claude for Teachers and schools (28 August 2026)
Source: https://www.anthropic.com/news/claude-for-teachers
- Verified US K-12 educators get free access to premium Claude capabilities, a library of teaching skills, and a direct connection to evidence-based curricula. A dedicated offering for schools and districts launched alongside it.

### Also from the newsroom
- 4 August: Mariano-Florentino (Tino) Cuéllar joined as Anthropic's first Chief Global Affairs Officer. https://www.anthropic.com/news/tino-cuellar

### How to use this at Touch Stone Publishers
1. Move the long-running pipelines to Fable 5.1. The flagship pipeline, the Pryor course builder, and the Red Team gates are exactly the "hours-long, many-application" jobs it is built for. Run them in Cowork or as managed agents so they finish unattended.
2. Restructure prompts for the new cache price. Put the stable material first in every run: house style, course data files, the workbook map, the TSP voice rubric. Those tokens are now billed at $0.25 per million on re-read, so a long fixed preamble is cheap and the variable request goes last.
3. Keep Sonnet 5 as the volume model. At $2/$10 permanently it is the right default for LinkedIn reply variants, social adaptations, and first drafts. Reserve Fable 5.1 for judgment-heavy work: board briefs, editorial reviews, and hardening memos.
4. Use Claude Tag in Slack for delegation. Tag a request in plain language and it stages the task and reports back in a thread. Good fit for morning triage hand-offs and for the outreach review queue.
5. Watch Claude for Teachers as a packaging model. The "library of teaching skills" is the same pattern as the Pryor skills. If the education market is a target for the labs, that offering is the channel to study.

---

## 2. OpenAI

### GPT-5.6 in ChatGPT: August update (6 August 2026)
Sources: https://deploymentsafety.openai.com/gpt-5-6-august-update and https://help.openai.com/en/articles/6825453-chatgpt-release-notes
What OpenAI says:
- ChatGPT was updated with a more capable model and expanded access. Free and Go users get a new default model for everyday chats. Plus and Pro users get an updated GPT-5.6 Sol with a slider that chooses how much effort ChatGPT spends on a response.
- Background for the family (GA on 9 July 2026): GPT-5.6 Sol is the flagship, Terra the balanced everyday model, Luna the fast and affordable model. https://openai.com/index/gpt-5-6/
- API features carried in the family: Multi-agent (beta) runs concurrent subagents and synthesizes their work in a single request. Programmatic Tool Calling in the Responses API lets the model write and run in-memory programs that coordinate tools, and it is Zero Data Retention compatible. Prompt caching gained explicit cache breakpoints and a 30-minute minimum cache life.

### GPT-5.6 Sol price cut (from 21 August 2026)
Source: https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/
- API and credit pricing for GPT-5.6 Sol reduced by more than 20 percent for three months starting 21 August. List prices per million tokens: Sol $5 in / $30 out, Terra $2.50 / $15, Luna $1 / $6. OpenAI also stated Luna costs 80 percent less and Terra 20 percent less from 30 July.

### Ultrafast mode preview
Source: https://openai.com/index/previewing-ultrafast/
- A new API service tier that runs GPT-5.6 Sol up to 14 times faster, powered by Cerebras, up to 750 output tokens per second. Limited preview for select customers, expanding as capacity grows.

### ChatGPT for Teens (18 August 2026)
Source: https://openai.com/news/
- A teen experience with dedicated under-18 evaluations that measure model behavior against teen-specific safeguards. Users believed to be under 18 get restrictions on sexual content and gore.

### Healthcare sources in ChatGPT (1 September 2026)
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- ChatGPT can now connect to healthcare sources. Eligible ChatGPT for Clinicians users in the US get Healthcare Public Data, a plugin bringing together nine apps for biomedical research, clinical trials, medication information, Medicare data, and provider records.

### Codex updates
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- Appshots in the Codex macOS app attach an app window to a Codex thread with a hotkey, including a screenshot and available text.
- Goal mode is generally available across the Codex app, IDE extension, and CLI: define an outcome and success criteria and let Codex keep working toward it.

### Retirements and deprecations
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- Atlas browser stopped working on 9 August. Browser-based agent capabilities are moving into ChatGPT and Codex, with multiple tabs, downloads, improved navigation, and account login support.
- OpenAI o3 was retired from ChatGPT on 26 August after a 90-day sunset.
- The official DALL·E GPT was retired on 30 August.
- A new speech-to-text dictation model rolled out to all plans with better accuracy across languages and accents.

### How to use this at Touch Stone Publishers
1. Tier the workload by model. Luna at $1/$6 is the tagging and classification engine: run the content archive, the prospect lists, and the topic-radar signal scoring through it. Terra handles everyday drafting. Sol is for the sector and board briefs where reasoning quality is the product.
2. Use the effort slider deliberately. Low effort for quick edits and reply variants. High effort for the quarterly governance report and anything going in front of a board chair.
3. Try Multi-agent for the five-silo board scan. One request can fan out a subagent per silo and synthesize, which mirrors the current scan-in-order design and may cut wall-clock time.
4. Put Codex Goal mode on the Build-a-Class site. Define the outcome and acceptance criteria and let it iterate. Appshots let you attach the running Next.js page to a thread instead of describing it.
5. Audit dependencies now. Any workflow that called o3, Atlas, or the DALL·E GPT is broken as of late August. Move image generation to Muse Image, Grok Imagine, or the current OpenAI image models.
6. Use the new dictation model for capturing LinkedIn Live recaps and course notes on the phone. The accuracy gains across accents matter for interview-style content.

---

## 3. Meta

### Muse Spark 1.2 and Muse Code beta (August 2026)
Source: https://developer.meta.com/ai/resources/blog/build-with-muse-code/
What Meta says:
- Muse Spark 1.2 is the latest release in the Muse Spark series from Meta Superintelligence Labs.
- Muse Code is an early beta of a purpose-built coding agent optimized for long-horizon, multi-agent coding workflows.
- Context from July: Muse Spark 1.1 (https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/) is "a multimodal reasoning model built for agentic tasks, with major gains in tool and computer use, coding, and multimodal understanding," and launched with a public preview of the Meta Model API for developers.

### Meta AI now acts (July 2026, still rolling out)
Source: https://about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/
- Meta AI can make plans, connect to email and calendar apps, create slides, and handle tasks on your behalf, in the Meta AI app and at meta.ai.

### Muse Image and Muse Video (7 July 2026)
Sources: https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/ and https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/
- Muse Image is Meta Superintelligence Labs' first image generation model, live in Meta AI. It uses reasoning to understand complex prompts and blends multiple photos into downloadable creations.
- Muse Video is in early preview, built on the same pretraining base, with native audio support.

### What did not happen
- No new open-weights Llama release appeared on Meta's official channels in August or early September. Meta positions Muse Spark as reaching Llama 4 Maverick capability with over an order of magnitude less compute.

### How to use this at Touch Stone Publishers
1. Test the Meta Model API in public preview for cost-sensitive jobs. Muse Spark 1.2 is worth a bake-off against Luna and Sonnet 5 on social adaptation tasks where the output lands on Facebook and Instagram anyway.
2. Use Muse Image inside Meta AI for the Content Creation Lab ads. The lab's Facebook and Instagram creative should be produced in the platform whose feed it runs in. Multi-photo blending suits before-and-after and testimonial composites.
3. Point Muse Code at the Build-a-Class site as a comparison run. It is a beta, so treat it as a second opinion next to Codex or Claude Code, not the primary tool.
4. Track Muse Video for the viral video engine. Native audio is the feature that would let a script go straight to a draft cut. Not production-ready yet.

---

## 4. xAI (Grok)

Note: xAI's site and documentation now carry the "SpaceXAI" name. The source URLs are unchanged.

### Grok 4.6 (model card dated 12 August 2026)
Sources: https://x.ai/news/grok-4-6 and https://docs.x.ai/developers/grok-4-6
What xAI says:
- Builds on Grok 4.5 "with a particular focus on long-running agents and more ambitious interactive and visual work."
- "Especially strong at turning a broad product idea into a working first version," researching unfamiliar domains, structuring the application, implementing core interactions, and refining through several rounds of feedback.
- Frontier results across agentic coding and knowledge-work benchmarks; matches GPT-5.6 Sol on the Artificial Analysis Intelligence Index.
- API: 500k context window, text and image inputs, text output, no text output limit.
- Pricing: $2 per million input tokens and $6 per million output. A fast variant costs twice that.
- Available in Cursor, Grok Build, the xAI API, OpenRouter, Vercel, and Cloudflare.

### Grok Bot beta (11 August 2026), expanded to more plans
Sources: https://x.ai/news/introducing-grok-bot and https://x.ai/news/grok-bot-more-plans
- "Durable AI teammates that work on a persistent cloud computer, with messaging, approvals, connectors, and routines."
- A Bot has a name, a job, its own conversation, and working context that develops over time.
- Uses connectors and MCP where available, and computer use for apps and websites without a clean API, "so work finishes in the real tools rather than as chat drafts."
- Learns workflows from live demonstration: walk it through a multi-step path once, and it persists that path as a routine to re-run on a schedule or on demand.
- Available to SuperGrok, SuperGrok Plus, SuperGrok Heavy, and Cursor Pro, Pro+, Ultra, and Cursor Teams subscribers on desktop and iOS. A later note says it is now included with all SuperGrok, Cursor Pro, and Cursor Teams plans.

### Grok Voice Think Fast 2.0 (5 August 2026)
Source: https://x.ai/news/grok-voice-think-fast-2
- Next-generation voice model with improved intelligence, transcription accuracy, and conversational ability, plus gains in speech reasoning and tool-use reliability. Speech-to-speech supported. The grok-voice-latest alias routes to it from 5 August.

### Grok Imagine Image 2.0 updates
Source: https://docs.x.ai/developers/release-notes
- Quality defaults to auto. Image editing accepts up to five source images per request, up from three. Generation and editing now accept 21:9 cinematic widescreen and 5:2 wide banner ratios.

### How to use this at Touch Stone Publishers
1. Use Grok 4.6's 500k context for whole-course work. A coaching guide plus a workbook plus the build scripts fit in one request, which makes the lab sync and page-citation checks a single pass at $2/$6.
2. Pilot Grok Bot on one repetitive flow with approvals on. The WordPress publish plus Postiz scheduling sequence is a candidate: demonstrate it once, let it persist the routine, and keep the approval gate so nothing posts unreviewed.
3. Consider Voice 2.0 for a voice front door on the labs. Speech-to-speech with tool use could answer seat availability and pricing questions and hand off to the application form.
4. Use the new aspect ratios. 21:9 for LinkedIn article banners and 5:2 for email headers, and five-image editing for composite thumbnails in the video engine.

---

## Cross-vendor takeaways

1. Prices fell everywhere this month. Anthropic cut cache reads 75 percent and froze Sonnet 5. OpenAI cut Sol 20 percent and Luna 80 percent. Grok 4.6 launched at $2/$6. Re-cost every pipeline before the quarter closes.
2. Every vendor shipped the same idea: an agent that persists and finishes work in real tools. Cowork and managed agents, Multi-agent and Goal mode, Meta AI that acts, Grok Bot. Pick one as the system of record for scheduled TSP runs and treat the others as specialists.
3. Long context is now a commodity. 500k on Grok, hours-long jobs on Fable 5.1, 30-minute cache floors on GPT-5.6. Design prompts as stable preambles plus small variable tails.
4. Cleanup is due. Retired o3 and DALL·E on OpenAI, deprecated Atlas, model-alias changes on xAI voice. Check every script that pins a model name.

---

## Sources
- https://www.anthropic.com/claude-fable-and-mythos-5-1
- https://www.anthropic.com/claude/fable
- https://www.anthropic.com/news/expanding-support-for-scientists
- https://www.anthropic.com/news/claude-for-teachers
- https://www.anthropic.com/news/tino-cuellar
- https://docs.anthropic.com/en/docs/about-claude/pricing
- https://openai.com/index/gpt-5-6/
- https://openai.com/index/advancing-the-price-performance-frontier-with-gpt-5-6/
- https://openai.com/index/previewing-ultrafast/
- https://deploymentsafety.openai.com/gpt-5-6-august-update
- https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- https://developers.openai.com/api/docs/pricing
- https://developer.meta.com/ai/resources/blog/build-with-muse-code/
- https://ai.meta.com/blog/introducing-muse-spark-meta-model-api/
- https://about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/
- https://about.fb.com/news/2026/07/introducing-muse-image-meta-ai/
- https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/
- https://x.ai/news/grok-4-6
- https://docs.x.ai/developers/grok-4-6
- https://x.ai/news/introducing-grok-bot
- https://x.ai/news/grok-bot-more-plans
- https://x.ai/news/grok-voice-think-fast-2
- https://docs.x.ai/developers/release-notes
