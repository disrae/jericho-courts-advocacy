const STORAGE_KEY = "jericho-player-v1";

export type LocalPlayer = {
  playerKey: string;
  name: string;
};

function newPlayerKey(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  // Extremely old fallback — still UUID-shaped enough for our validator
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function readLocalPlayer(): LocalPlayer | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<LocalPlayer>;
    if (
      typeof parsed.playerKey === "string" &&
      typeof parsed.name === "string" &&
      parsed.name.trim().length > 0
    ) {
      return { playerKey: parsed.playerKey, name: parsed.name };
    }
  } catch {
    // ignore corrupt storage
  }
  return null;
}

export function writeLocalPlayer(player: LocalPlayer): void {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
}

export function ensureLocalPlayer(name: string): LocalPlayer {
  const existing = readLocalPlayer();
  const player: LocalPlayer = {
    playerKey: existing?.playerKey ?? newPlayerKey(),
    name: name.trim(),
  };
  writeLocalPlayer(player);
  return player;
}

export function clearLocalPlayer(): void {
  window.localStorage.removeItem(STORAGE_KEY);
}
