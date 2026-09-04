# AI Release Digest — 4 September 2026

Coverage window: 4 September 2026, plus one item from 31 August that the 3 September issue missed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new dated 4 September on Anthropic's newsroom or release notes. Search surfaced Claude Design, but that launched on 17 April 2026 and is not new.

---

## 2. OpenAI

Nothing new dated 4 September on OpenAI's news page, ChatGPT release notes, or API changelog. The 1 September healthcare-sources item was covered in the previous issue.

---

## 3. Meta

### Muse Code out of beta, with paid plans (31 August 2026)
Source: https://developer.meta.com/ai/resources/blog/muse-code-new-plans-and-features/
Not in the 3 September issue. Included here so it is not missed.

What Meta says:
- Muse Code came out of beta on 31 August with new features: inter-session messaging, Workflow, and rewind in the CLI.
- Inter-session messaging: sessions can deliver messages to each other. When a change in one session affects what another is building, that session can pass a warning across. When one session settles a question another is blocked on, it can send the answer.
- Workflow: orchestrate large teams of subagents to solve complex engineering tasks, turning a big task into a coordinated team of agents that can review or build in parallel.
- Rewind: double Esc rolls the conversation history back to an earlier point in the session.
- A developer preview of the SDK is available.
- Subscription plans are rolling out: High Usage at $15 per month for bigger, code-heavy projects, and Power Usage at $50 per month for ambitious coding workflows.

### Muse Spark 1.3 (date not stated by the source)
Source: https://developer.meta.com/ai/models/muse-spark/
- The model page says Muse Spark 1.3 introduces max reasoning for challenging reasoning and agentic tasks, with improved real-world usability.
- Available through the Meta Model API and through OpenRouter.
- Meta's page does not state a release date. It appeared alongside the Muse Code release and was not in the previous issue.

### How to use this at Touch Stone Publishers
1. Put Muse Code on the Build-a-Class site at the $15 tier. It is the cheapest way to get a second coding agent next to Codex or Claude Code. Use Workflow to run a build agent and a review agent in parallel on each page change.
2. Map inter-session messaging to the course builds. One session owns the facilitator guide, another owns the slides and companion. When the guide changes a workbook page reference, the warning crosses automatically instead of waiting for the lab sync pass.
3. Add Muse Spark 1.3 max reasoning to the Red Team bake-off. Run one Alpha/Beta/Gamma audit through it via OpenRouter and compare against Fable 5.1 on the same brief. No new vendor setup is needed.
4. Use rewind for exploratory edits. Try a restructure of a build script, and roll back with double Esc if the output regresses, instead of re-running from scratch.

---

## 4. xAI (Grok)

Nothing new dated 4 September on x.ai/news or the docs release notes. Search surfaced the Speech to Text and Text to Speech APIs, but those launched on 17 April 2026 and are not new.

---

## Cross-vendor takeaways

1. A quiet day for three of the four vendors. The only movement is Meta turning Muse Code into a paid product with plans priced below the Claude and OpenAI coding tiers.
2. Multi-session and multi-agent coding is now table stakes: Codex Goal mode, Claude Code, and Muse Code Workflow all pitch parallel agents. The differentiator to test is cost per finished change on the Build-a-Class site, not features.

---

## Sources
- https://developer.meta.com/ai/resources/blog/muse-code-new-plans-and-features/
- https://developer.meta.com/ai/models/muse-spark/
- https://www.anthropic.com/news/claude-design-anthropic-labs
- https://x.ai/news/grok-stt-and-tts-apis
