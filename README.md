# Jericho Courts Advocacy

Agent-assisted campaign to get **Jericho Beach courts** in Vancouver upgraded: paved/resurfaced surfaces, **permanent nets**, and ideally **solar-powered lighting**.

This repo is the operating system for research, data, outreach, and Park Board engagement — built so humans and AI agents can pick up work in parallel.

## The goal

| Priority | Outcome |
|----------|---------|
| **P1** | Permanent pickleball/tennis infrastructure at Jericho (not “pop-up” portable nets) |
| **P1** | Proper court surfacing (resurface/repair asphalt → durable acrylic/plexipave-class surface) |
| **P2** | Permanent fixed nets + windscreens/ball barriers |
| **P3** | Solar + court lighting for evening play (w/ noise/light spill mitigation plan) |

**Target:** Park Board commitment to fund and deliver upgrades, with Jericho as a flagship west-side court hub.

## Why Jericho

- 4 tennis courts + 8 pop-up pickleball courts (2 southern tennis courts converted indefinitely since Feb 2023)
- One of the busiest outdoor court sites in Vancouver
- Park Board explicitly says pop-ups are **temporary** pending a Sport Court Strategy
- [Vancouver Pickleball Association MORE campaign](https://vancouverpickleball.ca/more-campaign/) already asks for Jericho permanence by **spring 2026**

## Repo layout

```
docs/           Strategy, stakeholders, Park Board process, agent workflows
data/           Baseline facts, scraped datasets, meeting notes (JSON/CSV)
scripts/        Scrapers and data pipelines
campaigns/      Letters, talking points, solar/lighting pitch
agents/         Task backlog and agent-specific instructions
```

## Quick start

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r scripts/requirements.txt

# Scrape Park Board meeting agendas for court-related items
python scripts/scrape_park_board_meetings.py

# Refresh court inventory baseline
python scripts/scrape_court_data.py
```

## For agents

Read these first:

1. [`docs/STRATEGY.md`](docs/STRATEGY.md) — phases, theory of change, open questions
2. [`docs/AGENT_WORKFLOWS.md`](docs/AGENT_WORKFLOWS.md) — what agents can do safely vs. what needs human approval
3. [`agents/tasks/BACKLOG.md`](agents/tasks/BACKLOG.md) — prioritized task queue

**Rules of engagement:**
- Do not impersonate the user or VPA in outbound email without explicit approval
- Cite sources in `data/` when adding claims
- Park Board public comment and deputations require a real person — agents draft, humans deliver

## Key links

- [Jericho Beach — City of Vancouver](https://vancouver.ca/parks-recreation-culture/jericho-beach.aspx)
- [Pop-up courts extended (Feb 2023)](https://vancouver.ca/news-calendar/vancouver-picklers-get-a-double-bounce-as-pop-up-court-project-is-extended.aspx)
- [Court sports asset needs (Park Board)](https://vancouver.ca/parks-recreation-culture/63720.aspx)
- [Shape Your City — engagement platform](https://www.shapeyourcity.ca/)
- [VPA MORE campaign](https://vancouverpickleball.ca/more-campaign/)
- [Park Board meetings](https://parkboardmeetings.vancouver.ca/)

## Status

**Phase 0 — Foundation** (this repo): research scaffold, data pipelines, advocacy templates.

See [`docs/STRATEGY.md`](docs/STRATEGY.md) for the full roadmap.
