import baseline from "@/data/jericho-courts-baseline.json";

export type Baseline = typeof baseline;

export function getBaseline(): Baseline {
  return baseline;
}

export const goals = [
  {
    priority: "P1",
    title: "Permanent infrastructure",
    detail: "End the pop-up designation. Fixed courts at Jericho, not portable lockbox nets.",
  },
  {
    priority: "P1",
    title: "Proper surfaces",
    detail: "Resurface aging asphalt to Park Board quality — acrylic or plexipave-class.",
  },
  {
    priority: "P2",
    title: "Fixed nets & windscreens",
    detail: "Permanent net systems and ball barriers so players stop hauling gear.",
  },
  {
    priority: "P3",
    title: "Solar court lighting",
    detail: "Pilot directional LEDs with a curfew — more evening play, less grid trenching.",
  },
] as const;

export const asks = [
  "Permanent pickleball designation at Jericho with fixed nets",
  "Full resurfacing of all four court slabs",
  "Preserve tennis access on remaining courts",
  "Solar LED lighting pilot with neighbour consultation",
  "Public Sport Court Strategy timeline with Jericho in tranche 1",
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
