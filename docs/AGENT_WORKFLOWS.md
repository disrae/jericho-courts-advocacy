# Agent Workflows

## Roles agents can play

| Role | Examples | Autonomy |
|------|----------|----------|
| **Researcher** | Scrape meetings, summarize reports, comparables | High |
| **Data** | Run scrapers, clean CSV, update baseline JSON | High |
| **Writer** | Letters, deputations, media pitches | Draft only |
| **Planner** | Sequencing tasks, risk updates | High |
| **Outreach** | Find contacts, draft emails | **No send** without human |

## Standard research loop

```
1. Read agents/tasks/BACKLOG.md for top task
2. Gather sources → save raw in data/raw/
3. Extract structured facts → data/*.json or *.csv
4. Update docs with citations
5. Open PR or commit with clear message
6. Mark task done in BACKLOG
```

## Scraping guidelines

- Respect `robots.txt` and rate limits (default 1 req/sec in scripts)
- Store `scraped_at` timestamp on all datasets
- Prefer official sources (vancouver.ca, parkboardmeetings.vancouver.ca)
- Do not scrape personal data from social media into repo

## Commit conventions

```
data: refresh park board meeting index
docs: add commissioner questions from 2025-11 meeting
scripts: fix shape your city parser
campaign: draft solar lighting one-pager
```

## Human checkpoints

Require user approval before:

- Sending email to commissioners or VPA
- Posting on social media as campaign
- Filing FOI requests
- Committing personal info to repo

## Suggested agent splits

**Agent A — Meetings & policy:** `scrape_park_board_meetings.py`, update STRATEGY risks  
**Agent B — Court data:** usage surveys, comparables, cost research  
**Agent C — Campaigns:** letters, talking points, solar pitch refinements  

## Environment

```bash
cd /agent
python3 -m venv .venv && source .venv/bin/activate
pip install -r scripts/requirements.txt
```

Optional: set `GITHUB_TOKEN` for API rate limits if adding GitHub Actions later.
