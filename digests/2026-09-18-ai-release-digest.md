# AI Release Digest — 18 September 2026

Coverage window: 17 September after the previous issue, through 18 September 2026.
Sources: official Anthropic, OpenAI, Meta, and xAI channels only. No third-party press.

Method note: this environment cannot open the vendor sites directly, so items were pulled through search restricted to the vendors' own domains. Each item links to its source page. Dates are the ones the source states.

---

## 1. Anthropic

Nothing new released in the window. Search surfaced the ant CLI, a command-line client for the Claude API with Admin API coverage, but Anthropic's release notes place it at the end of June 2026.

---

## 2. OpenAI

### Custom GPTs are being retired in favor of plugins (migration opened 17 September 2026)
Sources: https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq and https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
What OpenAI says:
- OpenAI is planning to retire custom GPTs and is encouraging users to move to plugins, which bring reusable instructions and connected apps together. OpenAI says it will help migrate GPTs to plugins.
- Timeline for affected Enterprise workspaces: 11 September, admin notice. 17 September, target for the migration experience and a user banner. 25 September, planned end of new custom GPT creation. 11 December, scheduled retirement.
- OpenAI states the dates are subject to change, and that other plans may follow the same transition with in-product announcements coordinated with Enterprise.
- Threads on OpenAI's developer forum are asking how personal Plus accounts migrate. That is forum discussion, not an OpenAI statement. The FAQ page is the source to watch for the Plus timeline.

### How to use this at Touch Stone Publishers
1. Inventory every custom GPT in use before 25 September. Any GPT built for the Pryor prompt sheets, the LinkedIn reply variants, or lab exercises will stop accepting new builds on that date and stop working on 11 December if the schedule holds. List them now so nothing is lost.
2. Rebuild the ones that matter as plugins. OpenAI's stated replacement is a plugin with reusable instructions plus connected apps. The Data plugin and the education plugins from earlier issues are the pattern. Each Pryor course's AI prompt sheet can become one plugin per course.
3. Update the Content Creation Lab curriculum. If any lab module teaches attendees to build a custom GPT, that module is out of date within a week. Teach the plugin path instead, or teach a vendor-neutral pattern that works in Claude Projects, Grok Bot, and ChatGPT plugins alike.
4. Watch the FAQ page for the Plus and Business schedule. The dated timeline applies to Enterprise. OpenAI says other plans will follow. The 25 September creation cutoff is the date to check against first.

---

## 3. Meta

Nothing new released in the window. Meta Connect runs 23 to 24 September, five days from now.

---

## 4. xAI (Grok)

Nothing new released in the window. The xAI news page shows activity between 3 and 16 September, but no dated release page beyond the Grok Bot posts already covered has resolved in search.

---

## Cross-vendor takeaways

1. Retirements are releases too. This is the third OpenAI sunset in a month after o3, Atlas, and the DALL·E GPT. Anything built on a vendor's packaging layer, a GPT, a plugin, a skill, needs a rebuild plan the day it ships, not the day it is retired.
2. Plugins are OpenAI's new unit of reuse. GPTs, the Data plugin, the education plugins, and ChatGPT for Financial Services all now sit on the same plugin base. That is where OpenAI expects a company's institutional prompts to live.
3. The next two issues will be busy. Meta Connect on 23 and 24 September and OpenAI DevDay on 29 September.

---

## Upcoming
- Meta Connect 2026, 23 to 24 September. https://www.meta.com/connect/
- OpenAI DevDay 2026, 29 September, Fort Mason, San Francisco. https://openai.com/index/devday-2026/

## Sources
- https://help.openai.com/en/articles/20001519-custom-gpt-retirement-and-migration-faq
- https://help.openai.com/en/articles/10128477-chatgpt-enterprise-edu-release-notes
- https://help.openai.com/en/articles/6825453-chatgpt-release-notes
- https://docs.anthropic.com/en/release-notes/api
