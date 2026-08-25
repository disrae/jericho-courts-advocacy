import baseline from "@/data/jericho-courts-baseline.json";

export type Baseline = typeof baseline;

export function getBaseline(): Baseline {
  return baseline;
}

export const goals = [
  {
    priority: "Essential",
    title: "Permanent infrastructure",
    detail:
      "End the pop-up designation. Fixed courts at Jericho, not portable nets from a lockbox.",
  },
  {
    priority: "Essential",
    title: "Proper surfaces",
    detail:
      "Resurface aging asphalt to a durable acrylic court surface, built to Park Board standard.",
  },
  {
    priority: "Upgrade",
    title: "Fixed nets and windscreens",
    detail:
      "Permanent net systems and ball barriers so players can show up and play, not haul gear.",
  },
  {
    priority: "Pilot",
    title: "Solar court lighting",
    detail:
      "Directional LEDs with a neighbourhood curfew — more evening play without a new building.",
  },
] as const;

export const asks = [
  "Permanent pickleball designation at Jericho, with fixed nets",
  "Full resurfacing of all four court slabs",
  "Preserve tennis access on the remaining courts",
  "A solar LED lighting pilot, with neighbour consultation",
  "A public Sport Court Strategy timeline, with Jericho in the first round of upgrades",
] as const;

export const links = [
  {
    label: "Jericho Beach — City of Vancouver",
    href: "https://vancouver.ca/parks-recreation-culture/jericho-beach.aspx",
  },
  {
    label: "Pop-up courts extended (Feb 2023)",
    href: "https://vancouver.ca/news-calendar/vancouver-picklers-get-a-double-bounce-as-pop-up-court-project-is-extended.aspx",
  },
  {
    label: "Court sports asset needs",
    href: "https://vancouver.ca/parks-recreation-culture/63720.aspx",
  },
  {
    label: "VPA MORE campaign",
    href: "https://vancouverpickleball.ca/more-campaign/",
  },
  {
    label: "Park Board meetings",
    href: "https://parkboardmeetings.vancouver.ca/",
  },
] as const;
