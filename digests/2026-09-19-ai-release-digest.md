# AI Release Digest — 19 September 2026

Coverage window: 18 September after the previous issue, through 19 September 2026, plus one 14 September retirement earlier checks missed.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new released in the window on Anthropic's newsroom, platform release notes, or the Claude Code changelog.

---

## 2. OpenAI

### GPT-5.3-Codex-Spark retired (14 September 2026; not in earlier issues)
Sources: https://developers.openai.com/codex/changelog and https://openai.com/index/introducing-gpt-5-3-codex-spark/
What OpenAI says:
- GPT-5.3-Codex-Spark was deprecated on 14 September. The research preview is no longer available in the ChatGPT desktop app, Codex CLI, or IDE extension.
- Codex-Spark launched as a research preview on 12 February 2026 as a smaller version of GPT-5.3-Codex built for real-time coding at more than 1,000 tokens per second.
- OpenAI's developer forum shows Pro users reporting a visible Spark quota but no model in the picker. That is forum discussion, not an OpenAI statement, and matches the deprecation.

### How to use this at Touch Stone Publishers
1. Check any Codex configuration for the Build-a-Class site. If a script, IDE setting, or CLI profile pins the Codex-Spark model name, it fails now. Move it to the default Codex model or to GPT-6 Astra where the plan allows.
2. Add this to the custom GPT inventory from the 18 September issue. The retirement list for September is now o3, Atlas, the DALL·E GPT, Codex-Spark, and custom GPTs. One pass through every pinned model name and GPT link covers all five.

---

## 3. Meta

Nothing new released in the window. Meta Connect runs 23 to 24 September, four days from now.

---

## 4. xAI (Grok)

### Grok Voice Transcribe 2.0 (published about 17 September 2026; the page does not show an exact date stamp in search)
Sources: https://x.ai/news/grok-voice-transcribe-2 and https://docs.x.ai/developers/model-capabilities/audio/voice
What xAI says:
- Described as one of the most accurate transcription models available today, and twice as accurate as Grok Voice Transcribe 1.0 at the same price.
- On short-phrase sets, word error rate drops from 20.6 percent to 6.8 percent.
- Transcribes dozens of languages, detects the language automatically, and follows mid-recording language switches in a single pass.
- Pricing unchanged from 1.0: batch transcription at $0.10 per hour of audio, streaming at $0.20 per hour, including diarization, timestamps, and key terms.
- API model name: grok-voice-transcribe-2.0.

### How to use this at Touch Stone Publishers
1. Transcribe the Wednesday LinkedIn Live recordings with it. A 45-minute show costs about 8 cents in batch. Diarization separates Glenn from guests, and key terms let the board-brief vocabulary be passed in so names and tickers come out right.
2. Turn Pryor class recordings into facilitator-guide source material. Timestamps line up the transcript with the slide deck, which feeds the pryor-lab-expander with real instructor language instead of reconstructed notes.
3. Use it as the intake for the viral video engine. A transcript of any recorded session is the raw input for the Descript-ready production script. Batch pricing makes it cheap enough to transcribe everything and pick later.
4. Compare against OpenAI's dictation model from the 3 September issue. Grok's number is a published word error rate and a per-hour price. Run one show recording through both and keep the one with fewer name errors.

---

## Cross-vendor takeaways

1. Transcription is now priced like storage. At $0.10 per hour, every recorded session at Touch Stone Publishers can be transcribed by default and searched later. The bottleneck moves from cost to where the transcripts live.
2. September retirements keep stacking at OpenAI. Five sunsets in one month is a signal to keep model names in one config file per pipeline, not scattered across scripts.
3. Meta Connect starts 23 September. Expect the next issue with Meta content to be a large one.

---

## Upcoming
- Meta Connect 2026, 23 to 24 September. https://www.meta.com/connect/
- OpenAI DevDay 2026, 29 September, Fort Mason, San Francisco. https://openai.com/index/devday-2026/

## Sources
- https://x.ai/news/grok-voice-transcribe-2
- https://docs.x.ai/developers/model-capabilities/audio/voice
- https://x.ai/voice/speech-to-text
- https://developers.openai.com/codex/changelog
- https://openai.com/index/introducing-gpt-5-3-codex-spark/
