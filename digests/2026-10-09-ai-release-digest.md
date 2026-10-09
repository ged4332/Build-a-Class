# AI Release Digest — 9 October 2026

Coverage window: 9 October 2026, plus four Anthropic items from 7 and 8 October that the 8 October issue missed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

### Claude Haiku 5.5 (7 October 2026; not in earlier issues)
Sources: https://www.anthropic.com/claude-haiku-5-5 and https://www.anthropic.com/document/claude-haiku-5-5-system-card
What Anthropic says:
- Anthropic's fastest and most capable small model to date. A 1 million token context window, 128,000 max output tokens, and adaptive thinking through an effort parameter, its first Haiku-class model with an adjustable effort setting to trade cost against intelligence.
- Pricing: $0.10 per million input tokens and $0.50 per million output tokens for prompts up to 100,000 tokens; $0.50 input and $2.50 output per million above that. Up to 90 percent savings with prompt caching, 50 percent with batch processing. Anthropic states it costs roughly 75 percent less on average to run than Haiku 4.5.
- Recommended for quick, repetitive workloads such as summaries, context compaction, database queries, and classification, and as a subagent working alongside larger models. Anthropic also describes it as a strong computer-use agent for form filling, data entry, and moving information between apps.
- Its system card reports major alignment-evaluation improvements over Haiku 4.5. Available on Claude.ai (Free, Pro, Max, Team, Enterprise), via the API as claude-haiku-5-5, and on Amazon Bedrock, Google Cloud, and Microsoft Foundry.
- Migration note: code written for Haiku 4.5 can break on Haiku 5.5. Manual extended thinking via budget_tokens now returns a 400 error.

### Introducing the Anthropic Cyber Mission (8 October 2026; not in earlier issues)
Sources: https://www.anthropic.com/news/anthropic-cyber-mission and https://www.anthropic.com/news/critical-infrastructure-defense
What Anthropic says:
- A long-term commitment to securing widely relied-on systems, with a Critical Infrastructure Defense Program as its centerpiece. It puts frontier Claude models, on-site engineers, and threat research into the hands of the trusted providers that operators of operational technology already use, starting with power grids, water systems, transportation networks, and government systems.
- Reasoning: operational technology is hard to patch, since those systems often cannot be taken offline, so known vulnerabilities can stay unresolved for years.
- Founding partners: Accenture, Booz Allen, CrowdStrike, Deloitte, Dragos, Hitachi, Insane Cyber, Nozomi Networks, Palo Alto Networks, PwC, and Rockwell Automation. Anthropic says several are already using Claude to fix vulnerabilities for their customers; the first phase works with a small provider cohort to learn what works.
- Project Glasswing has been folded into the expanded Cyber Verification Program covered in the 7 October issue, with critical infrastructure operators of any size, including regional hospitals and municipal utilities, now qualifying for Defense Access.
- The Mission also includes an open-source software track: an opt-in OSS Scanner (also announced 8 October) giving free, periodic security scans by Anthropic's strongest models to participating open-source projects, built on the Project Glasswing work, plus automated triage and patching for projects that want it.
- Anthropic states it has offered Claude models and technical support to more than half of US states and some large public critical infrastructure operators since launching a state, local, tribal, and territorial government program in June.

### Other 8 October items (brief)
- Genesis Mission funding: Anthropic pledged $150 million over three years to a federal AI-for-science initiative, making Claude available to more than 15 agencies including NASA, NIH, and NSF. Source: https://www.anthropic.com/news/genesis-mission-commitment
- 2026 Usage Policy update: clarifies requirements for high-risk use cases in health and finance, adds controls for Claude autonomously taking physical actions, and addresses abusive behavior toward models. Source: https://www.anthropic.com/news/2026-usage-policy-update

### How to use this at Touch Stone Publishers
1. Move high-volume, low-stakes steps in the Pryor course pipeline and the board-brief silo scans to Claude Haiku 5.5. At roughly 75 percent less cost than Haiku 4.5 with an adjustable effort dial, it is the new default for summarization, classification, and context-compaction tasks that currently run on a larger model.
2. Audit any script using manual extended thinking (budget_tokens) before switching to Haiku 5.5, since Anthropic states that call now errors.
3. Treat the Cyber Mission's named partner list, Accenture, Deloitte, PwC, CrowdStrike, Palo Alto Networks among them, as a board-brief and sector-brief citation for how frontier AI vendors are now embedding directly with critical-infrastructure security providers rather than selling a general-purpose API.
4. Log the Genesis Mission's $150 million science commitment and the Usage Policy's new physical-action controls as two more data points for a brief on how AI governance and public-sector AI funding are evolving in parallel this quarter.

---

## 2. OpenAI

Nothing new released in the window beyond GPT-6 Intelligent UI, the Decisions API, and virtual try-on detail already covered in the 8 October issue.

---

## 3. Meta

Nothing new released in the window. Meta's recent posts (a Singapore AI-glasses donation, two data-center explainer pieces) are not product, pricing, or feature announcements and are noted here only to confirm the window was checked.

---

## 4. xAI (Grok)

Nothing new released in the window. For planning purposes: xAI's docs list grok-imagine-image-quality as scheduled for retirement on 2 November 2026, well outside this issue's window but worth a calendar note if any TSP workflow uses that model slug.

---

## Cross-vendor takeaways

1. Anthropic had its busiest 48 hours of the month, shipping a new small model and launching a major cross-industry security initiative on consecutive days, while OpenAI and Meta stayed quiet. Vendors are clearly not synchronizing release timing.
2. The Cyber Mission continues a pattern from the 7 October issue: Anthropic is building credentialed, partner-embedded programs for specific professional domains (life sciences, cyber, now critical infrastructure specifically) rather than one general safety policy for everyone.

---

## Upcoming
- xAI retires grok-imagine-image-quality on 2 November 2026.
- No confirmed dates for the next major vendor event as of this issue.

## Sources
- https://www.anthropic.com/claude-haiku-5-5
- https://www.anthropic.com/document/claude-haiku-5-5-system-card
- https://www.anthropic.com/news/anthropic-cyber-mission
- https://www.anthropic.com/news/critical-infrastructure-defense
- https://www.anthropic.com/news/genesis-mission-commitment
- https://www.anthropic.com/news/2026-usage-policy-update
