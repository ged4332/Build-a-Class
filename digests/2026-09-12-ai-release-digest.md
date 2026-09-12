# AI Release Digest — 12 September 2026

Coverage window: 10 September after the previous issue, through 12 September 2026. The 10 September OpenAI releases below were published after the 10 September issue went out and were not caught by the 11 September check.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new released in the window. Anthropic published a threat intelligence report on 10 September and ran a Claude Code workshop on 11 September. Neither is a product release.

---

## 2. OpenAI

Five releases on 10 September.

### Agents API, public beta (10 September 2026)
Sources: https://openai.com/index/introducing-the-agents-api/ and https://openai.com/index/the-next-evolution-of-the-agents-sdk/
What OpenAI says:
- Build agents with a managed Codex harness while OpenAI handles session orchestration, context compaction, and recovery.
- Durable sessions continue work across turns, stream progress, and connect your own tools and MCP servers.
- Run agents in OpenAI-hosted sandboxes, or connect a sandbox from your own infrastructure or a supported provider.
- OpenAI's framing: useful agents need a harness that manages context, uses tools efficiently, and coordinates subagents, plus infrastructure that keeps them running reliably for days with files, code execution, and saved intermediate results.
- Pricing: standard API pricing based on tokens and tool use. Available to all API customers in public beta.

### GPT-Live-1 in the API (10 September 2026)
Sources: https://openai.com/index/introducing-gpt-live-1-in-the-api/ and https://developers.openai.com/api/docs/models/gpt-live-1
What OpenAI says:
- Brings ChatGPT's full-duplex voice conversations to the API. The model listens and speaks at the same time.
- Delegates deeper reasoning and tool calls to a backend text model, such as GPT-6 Astra or a third-party model.
- Developers shape tone, pace, and conversational style through the system prompt.
- Handles background noise and silence without interrupting or narrating every step aloud.
- Telephony support for full-duplex voice agents on phone calls, from restaurant reservations to customer support.
- OpenAI cites an early evaluation with Speak where interruptions fell by almost 80 percent versus turn-based systems.
- Pricing: voice sessions at $0.05 per minute, billed per second. Backend model and tool usage billed separately.

### ChatGPT for Financial Services (10 September 2026)
Sources: https://openai.com/index/introducing-chatgpt-financial-services/ and https://openai.com/solutions/industries/financial-services/
What OpenAI says:
- A tailored ChatGPT Work experience that combines built-in financial data with GPT-6 Astra's reasoning for research, financial models, and customized client materials.
- Shaped by a design partnership with Morgan Stanley and Evercore. Initial focus: investment banking and equity research.
- Built-in premium data from Daloopa, PitchBook, LSEG News, and Crunchbase, indexed and hosted by OpenAI, with granular citations so figures trace back to sources.
- Builds on ChatGPT Enterprise's SAML SSO, SCIM provisioning, and role-based access. Business data is not used for training by default, is encrypted at rest and in transit, and has configurable retention. Compliance teams can export workspace logs through the OpenAI Compliance Platform.

### Data plugin for ChatGPT Work and Codex (10 September 2026)
Source: https://help.openai.com/en/articles/20001518-using-the-data-plugin-in-chatgpt-work-and-codex
What OpenAI says:
- Analyze connected business data in ChatGPT Work and Codex. Ask a business question, investigate changes, or create an interactive dashboard or report.
- Refine with follow-up questions and bring in your team's metric definitions and other business context.

### Box, Dropbox, and SharePoint in ChatGPT Library (10 September 2026)
Source: https://help.openai.com/en/articles/6825453-chatgpt-release-notes
What OpenAI says:
- Box, Dropbox, and SharePoint join Google Drive in ChatGPT Library. Browse and search files and folders, then add them to a conversation through Add from Library or @mentions without re-uploading.
- Keep a file open beside the conversation while asking ChatGPT to summarize, analyze, compare, or create from it. Select a folder and ask ChatGPT to work across the files it contains.
- Rolling out to Go, Plus, Pro, Business, Edu, Healthcare, and Enterprise users on the web, in both Chat and Work.

### How to use this at Touch Stone Publishers
1. Read ChatGPT for Financial Services as a sector intel signal, not a tool to buy. It is the Financials rotation's Monday story: Morgan Stanley and Evercore co-designing a banker workbench with hosted PitchBook and LSEG data is a board-level shift in how research desks are staffed. The citation-tracing feature is also the standard a Touch Stone brief should meet.
2. Price a voice front door for the labs at $0.05 per minute. GPT-Live-1 with telephony is the first vendor quote on a phone agent for seat availability and application questions. A 4-minute call costs 20 cents plus backend tokens. Compare against the Grok Voice option from the 3 September issue before building either.
3. Use the Agents API as the benchmark for the scheduled TSP runs. Durable sessions, context compaction, and hosted sandboxes are the same shape as Cowork and managed agents on the Claude Platform. Run the board brief pipeline once on each and compare cost per finished brief with the same rubric.
4. Connect Dropbox or SharePoint to ChatGPT Library if the Pryor course files live there. Folder-level work means a coaching guide, workbook, and prior build can be referenced in one conversation without uploads. Check retention settings first; the Library reads live files.
5. Try the Data plugin on the outreach tracker. Reply rate and meeting-booked rate by batch, as a dashboard the tsp-outreach-review loop can read, is exactly the kind of connected-data question it is built for. Needs a ChatGPT Work seat.

---

## 3. Meta

Nothing new in the window. Muse plan pricing is still not stated on Meta's pages. Meta Connect is 23 to 24 September.

---

## 4. xAI (Grok)

Nothing new in the window. Grok Build v1.0.25 on 9 September was a CLI patch with keyboard, hook, and dictation fixes and no new capability.

---

## Cross-vendor takeaways

1. OpenAI is now selling by vertical and by harness. Financial Services is the first named industry edition on GPT-6 Astra, and the Agents API is the managed harness underneath. Expect Anthropic and xAI to answer with the same two moves; watch DevDay on 29 September for the next verticals.
2. Voice has a list price. $0.05 per minute on GPT-Live-1 sets the number every phone-agent idea gets measured against, including the lab's registration line and any client-facing intake.
3. Files are becoming context, not uploads. Library folders in ChatGPT, Muse Secure VM on Meta, and Grok Bot connectors all point the same way. Where the course files and briefs live now determines which agent can reach them first.

---

## Upcoming
- Meta Connect 2026, 23 to 24 September. https://www.meta.com/connect/
- OpenAI DevDay 2026, 29 September, Fort Mason, San Francisco. https://openai.com/index/devday-2026/

## Sources
- https://openai.com/index/introducing-the-agents-api/
- https://openai.com/index/the-next-evolution-of-the-agents-sdk/
- https://openai.com/index/introducing-gpt-live-1-in-the-api/
- https://developers.openai.com/api/docs/models/gpt-live-1
- https://openai.com/index/introducing-chatgpt-financial-services/
- https://openai.com/solutions/industries/financial-services/
- https://help.openai.com/en/articles/20001518-using-the-data-plugin-in-chatgpt-work-and-codex
- https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- https://openai.com/products/release-notes/
