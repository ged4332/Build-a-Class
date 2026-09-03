# AI Release Digests

Recurring digest of new releases from four official sources: Anthropic, OpenAI, Meta, and xAI (Grok). Each issue reports what the vendor says on its own channels, lists new features, pricing, and availability, and adds guidance on using each release at Touch Stone Publishers. Issues are emailed to Glenn.

## Files

- `YYYY-MM-DD-ai-release-digest.md`: the Markdown source of each issue that was emailed.

## How it runs

A Claude Code Routine named "AI Release Digest (Anthropic, OpenAI, Meta, xAI)" fires daily at 13:00 UTC (07:00 Mountain Daylight Time, 06:00 Mountain Standard Time). Each run wakes the Claude Code session that created it, which holds the Gmail connector, and that session:

1. Finds the last digest in Gmail sent mail (subject prefix "AI Release Digest") to set the coverage window; defaults to the last 7 days if none exists.
2. Researches only official vendor channels: anthropic.com and docs.anthropic.com; openai.com, help.openai.com, developers.openai.com, deploymentsafety.openai.com; ai.meta.com, about.fb.com, developer.meta.com, llama.com; x.ai and docs.x.ai. Direct fetches of these sites are blocked by the environment's egress proxy, so the run uses web search restricted to those domains.
3. Sends nothing if there are no new items in the window.
4. Otherwise saves the Markdown issue to this folder on branch `claude/ai-release-digest-2xbn0t`, pushes it, and emails one digest, HTML plus plain text, with per-vendor "What they say" sections, "How to use this at Touch Stone Publishers" actions, cross-vendor takeaways, and a sources list.

The Routine can be paused, edited, or deleted from the Routines list in Claude Code.
