#!/usr/bin/env python3
"""Build/update Jericho court baseline and Vancouver court inventory snapshot."""

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

OUTPUT = Path(__file__).resolve().parent.parent / "data" / "jericho-courts-baseline.json"

# Curated baseline — update via research; scrapers can extend later.
BASELINE = {
    "site": {
        "name": "Jericho Beach Park",
        "city": "Vancouver",
        "province": "BC",
        "park_page": "https://vancouver.ca/parks-recreation-culture/jericho-beach.aspx",
    },
    "courts": {
        "tennis": {"count": 4, "surface": "hard/asphalt-class", "permanent_nets": True},
        "pickleball_popup": {
            "count": 8,
            "courts_converted_from_tennis": 2,
            "permanent_nets": False,
            "portable_net_lockboxes": True,
            "designation": "temporary_indefinite",
            "extended_since": "2023-02-24",
        },
        "lighting": {"present": False, "goal": "solar_led_pilot"},
    },
    "policy": {
        "permanent_status": "not_permanent_pending_sport_court_strategy",
        "sources": [
            "https://vancouver.ca/news-calendar/vancouver-picklers-get-a-double-bounce-as-pop-up-court-project-is-extended.aspx",
            "https://vancouverpickleball.ca/more-campaign/",
        ],
    },
    "advocacy_targets": [
        "Resurface all court slabs",
        "Permanent fixed nets and windscreens",
        "Permanent pickleball allocation at Jericho",
        "Solar-powered court lighting with curfew",
    ],
    "city_context": {
        "park_board_tennis_courts_total": 177,
        "parks_with_tennis": 50,
        "outdoor_pickleball_courts_approx": 38,
        "population_approx": 680000,
        "source_note": "VPA MORE campaign / Park Board asset docs",
    },
}


def main() -> None:
    payload = {
        "updated_at": datetime.now(timezone.utc).isoformat(),
        **BASELINE,
    }
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Wrote baseline to {OUTPUT}")


if __name__ == "__main__":
    main()
