# AI Release Digest — 10 October 2026

Coverage window: 10 October 2026, plus one Anthropic pricing update and three OpenAI items from 7 through 9 October that earlier issues missed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

### Claude Sonnet 5.5 cache-read price cut (around 7 October 2026; not in earlier issues)
Source: https://docs.anthropic.com/en/docs/about-claude/pricing
What Anthropic says:
- Cache reads for Sonnet 5.5 now cost 50 percent less: $0.10 per million tokens, down from $0.20, alongside the Claude Haiku 5.5 launch covered in the 9 October issue.
- Anthropic states this cuts the cost of Sonnet 5.5 on most agentic tasks by roughly 20 percent overall.

### How to use this at Touch Stone Publishers
1. Re-run the cost model for any Sonnet 5.5 workflow that leans on prompt caching, such as the board-brief and sector-brief silo scans that reuse large fixed context each run. A 20 percent typical-task saving changes the economics of running those scans more frequently.

---

## 2. OpenAI

### GPT-6.1 Sol Ultrafast mode (rollout completed 8 October 2026)
Source: https://developers.openai.com/api/docs/pricing
What OpenAI says:
- Ultrafast mode for GPT-6.1 Sol is now available to all API users, subject to rate limits, in the API, Codex, and ChatGPT Work, called with service_tier: "ultrafast" in the Responses API.
- Pricing: $12 input, $0.60 cached input, and $60 output per million tokens for short context, six times standard GPT-6.1 Sol pricing. Longer-context prompts over 272,000 input tokens cost more.
- Speed: up to 8 times faster token generation in Codex, up to 6 times faster in the API. In Codex and ChatGPT Work, access is on Pro 500, eligible usage-based Enterprise, and credit-based Edu plans.

### Disrupting AI-enabled "false front" operations (8 October 2026)
Source: https://openai.com/index/disrupting-ai-enabled-false-front-operations/
What OpenAI says:
- OpenAI banned two influence operations, one linked to Russia and one to Iran, both using its models alongside conventional tools to run front entities pushing geopolitical and conflict-related messaging.
- The Iranian campaign used seven fake journalist personas pitching articles to smaller outlets. The Russian campaign reportedly used people in Latin America to run a fake "think tank" and circulated fabricated "leaked" documents and audio scripts, some of which spread online.
- OpenAI notes the operations resembled pre-AI influence campaigns, with AI mainly easing some workflow steps rather than enabling something wholly new.

### Codex composer predictions beta (9 October 2026)
Source: https://help.openai.com/en/articles/20001601-composer-predictions-in-codex
What OpenAI says:
- Codex can now suggest a user's next message after it responds. Pressing Tab accepts the suggestion into the message box for review or editing before sending; accepting does not send automatically, and a prediction will not appear after every response.
- Limited to personal ChatGPT Pro users 18 and older, in the latest Codex desktop app, on local and SSH threads using GPT-6 Astra or GPT-6.1 Sol. Not available in Chat on web or desktop.
- On by default, toggled off via the Show predictions setting in Composer, under General settings. During the beta, generating predictions does not count toward Codex usage limits; sent messages, including accepted predictions, follow normal usage and billing.

### How to use this at Touch Stone Publishers
1. Reserve GPT-6.1 Sol Ultrafast for the rare same-day, large Codex task on the Build-a-Class site rather than everyday use; at six times standard pricing it is a deadline tool, not a default.
2. Treat the false-front operations report as board-brief and sector-brief material on AI-enabled influence operations, a recurring OpenAI disclosure category now worth tracking alongside Anthropic's own threat intelligence posts.
3. If Glenn or any team member uses ChatGPT Pro with the Codex desktop app, try composer predictions on the Build-a-Class site for one week; a free, opt-out next-message suggestion during the beta costs nothing to test.

---

## 3. Meta

Nothing new released in the window beyond Meta Connect 2026 and Meta Enterprise Platform detail already covered in the 23 September through 9 October issues.

---

## 4. xAI (Grok)

Nothing new released in the window beyond the grok-voice-transcribe-1.0 retirement already covered in the 4 October issue.

---

## Cross-vendor takeaways

1. Both Anthropic and OpenAI are now routinely publishing influence-operation and threat disclosures as a standing content category, not one-off news. Expect a running thread of these across future issues worth summarizing periodically for a dedicated governance brief.
2. Price-performance tiering keeps splitting further: standard, cached, and now Ultrafast rates on the same model, plus Anthropic's cache-only price cut on Sonnet 5.5. Worth a standing note in any cost model to check the current cache-read rate before estimating a workflow's cost.

---

## Upcoming
- xAI retires grok-imagine-image-quality on 2 November 2026.
- No confirmed dates for the next major vendor event as of this issue.

## Sources
- https://docs.anthropic.com/en/docs/about-claude/pricing
- https://developers.openai.com/api/docs/pricing
- https://openai.com/index/disrupting-ai-enabled-false-front-operations/
- https://help.openai.com/en/articles/20001601-composer-predictions-in-codex
