# Data

| File | Description |
|------|-------------|
| `jericho-courts-baseline.json` | Curated facts about Jericho courts |
| `park-board-meetings.json` | Scraped meeting/agenda links matching keywords |
| `raw/` | Raw HTML dumps from scrapers |
| `outreach-log.csv` | Human outreach tracking (create when needed) |
| `photos/jericho/` | Site inspection photos |

Run scrapers from repo root:

```bash
python scripts/scrape_court_data.py
python scripts/scrape_park_board_meetings.py
```
