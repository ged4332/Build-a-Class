# AI Release Digest — 4 October 2026

Coverage window: 4 October 2026, plus one xAI retirement from 2 October that the 3 October issue missed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new released in the window on Anthropic's newsroom, platform release notes, or the Claude Code changelog.

---

## 2. OpenAI

Nothing new released in the window beyond DevDay 2026 detail already covered in the 30 September through 3 October issues.

---

## 3. Meta

Nothing new released in the window beyond Meta Connect 2026 detail already covered in the 23 September through 3 October issues.

---

## 4. xAI (Grok)

### grok-voice-transcribe-1.0 retired (2 October 2026; not in earlier issues)
Source: https://docs.x.ai/developers/model-capabilities/audio/voice
What xAI says:
- grok-voice-transcribe-1.0 is deprecated and reached end of life on 2 October 2026. All requests to that model slug now route to grok-voice-transcribe-2.0 automatically, at the same price, with higher accuracy.

### How to use this at Touch Stone Publishers
1. Confirm no script or integration pins the grok-voice-transcribe-1.0 slug by name. Requests are rerouted automatically so nothing breaks, but anything hardcoded to the old slug is quietly running on a different model now, worth a one-time check rather than an assumption.

---

## Cross-vendor takeaways

1. A clean, quiet retirement. xAI handled this one the easy way, routing old requests to the newer model at the same price instead of a hard cutoff, a lower-friction pattern than several of OpenAI's retirements this quarter.
2. Four straight short issues now. The DevDay and Connect backlog appears fully cleared; the next substantial issue will likely need a new announcement, not a missed detail.

---

## Upcoming
No confirmed dates for the next vendor event as of this issue.

## Sources
- https://docs.x.ai/developers/model-capabilities/audio/voice
