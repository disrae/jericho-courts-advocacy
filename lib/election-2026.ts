import election from "@/data/park-board-election-2026.json";

export type Election2026 = typeof election;

export function getParkBoardElection(): Election2026 {
  return election;
}

export function formatElectionDate(iso: string): string {
  const parts = iso.split("-").map(Number);
  const y = parts[0] ?? 2026;
  const m = parts[1] ?? 1;
  const d = parts[2] ?? 1;
  const date = new Date(Date.UTC(y, m - 1, d));
  return date.toLocaleDateString("en-CA", {
    timeZone: "America/Vancouver",
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
