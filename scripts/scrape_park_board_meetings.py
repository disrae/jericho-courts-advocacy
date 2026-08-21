#!/usr/bin/env python3
"""Scrape Vancouver Park Board meeting site for court-related agenda items."""

from __future__ import annotations

import json
import re
import sys
import time
from datetime import datetime, timezone
from pathlib import Path
from urllib.parse import urljoin

import requests
from bs4 import BeautifulSoup

BASE_URL = "https://parkboardmeetings.vancouver.ca/"
KEYWORDS = re.compile(
    r"jericho|pickleball|tennis|court|sport court|resurfac|lighting|solar",
    re.IGNORECASE,
)
OUTPUT = Path(__file__).resolve().parent.parent / "data" / "park-board-meetings.json"
RAW_DIR = Path(__file__).resolve().parent.parent / "data" / "raw"
RATE_LIMIT_SEC = 1.0


def fetch(url: str, session: requests.Session) -> str | None:
    time.sleep(RATE_LIMIT_SEC)
    response = session.get(url, timeout=30)
    if response.status_code == 403:
        print(f"warn: {url} returned 403 — site may block datacenter IPs", file=sys.stderr)
        return None
    response.raise_for_status()
    return response.text


def extract_links(html: str, base: str) -> list[dict[str, str]]:
    soup = BeautifulSoup(html, "lxml")
    items: list[dict[str, str]] = []
    for anchor in soup.find_all("a", href=True):
        href = anchor["href"]
        text = " ".join(anchor.get_text(" ", strip=True).split())
        if not text or len(text) < 4:
            continue
        full_url = urljoin(base, href)
        if "parkboardmeetings.vancouver.ca" not in full_url:
            continue
        if KEYWORDS.search(text) or KEYWORDS.search(full_url):
            items.append({"title": text, "url": full_url})
    return items


def dedupe(items: list[dict[str, str]]) -> list[dict[str, str]]:
    seen: set[str] = set()
    out: list[dict[str, str]] = []
    for item in items:
        if item["url"] in seen:
            continue
        seen.add(item["url"])
        out.append(item)
    return out


def main() -> int:
    session = requests.Session()
    session.headers.update(
        {
            "User-Agent": "JerichoCourtsAdvocacy/1.0 (+research; respectful scrape)",
        }
    )

    RAW_DIR.mkdir(parents=True, exist_ok=True)
    matches: list[dict[str, str]] = []
    html = fetch(BASE_URL, session)
    if html:
        (RAW_DIR / "parkboard-home.html").write_text(html, encoding="utf-8")
        matches.extend(extract_links(html, BASE_URL))

    # Try common listing paths
    for path in ["/meetings", "/agendas", "/"]:
        try:
            page_html = fetch(urljoin(BASE_URL, path), session)
            if page_html:
                matches.extend(extract_links(page_html, BASE_URL))
        except requests.RequestException as exc:
            print(f"warn: could not fetch {path}: {exc}", file=sys.stderr)

    matches = dedupe(matches)

    payload = {
        "scraped_at": datetime.now(timezone.utc).isoformat(),
        "source": BASE_URL,
        "keywords": KEYWORDS.pattern,
        "match_count": len(matches),
        "matches": matches,
        "scrape_notes": (
            "Park Board meeting site may block cloud/datacenter IPs (403). "
            "Re-run locally or paste agenda PDFs into data/raw/ for manual indexing."
            if not matches
            else None
        ),
    }

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(payload, indent=2), encoding="utf-8")
    print(f"Wrote {len(matches)} matches to {OUTPUT}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
