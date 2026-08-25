import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/** Soft anti-spam: one check-in per playerKey per this window */
const COOLDOWN_MS = 45 * 60 * 1000;

/** How long someone stays on the "here now" board */
const HERE_NOW_MS = 3 * 60 * 60 * 1000;

const MAX_NAME_LEN = 40;

function normalizeName(raw: string): string {
  const name = raw.trim().replace(/\s+/g, " ");
  if (name.length < 1) {
    throw new Error("Name is required");
  }
  if (name.length > MAX_NAME_LEN) {
    throw new Error(`Name must be ${MAX_NAME_LEN} characters or fewer`);
  }
  return name;
}

function assertPlayerKey(playerKey: string): void {
  if (!/^[0-9a-f-]{36}$/i.test(playerKey)) {
    throw new Error("Invalid player key");
  }
}

export const checkIn = mutation({
  args: {
    playerKey: v.string(),
    name: v.string(),
  },
  returns: v.object({
    ok: v.literal(true),
    checkedInAt: v.number(),
    cooldownUntil: v.optional(v.number()),
    alreadyCheckedIn: v.boolean(),
  }),
  handler: async (ctx, args) => {
    assertPlayerKey(args.playerKey);
    const name = normalizeName(args.name);
    const now = Date.now();

    const existing = await ctx.db
      .query("players")
      .withIndex("by_player_key", (q) => q.eq("playerKey", args.playerKey))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, { name, lastSeenAt: now });
    } else {
      await ctx.db.insert("players", {
        playerKey: args.playerKey,
        name,
        createdAt: now,
        lastSeenAt: now,
      });
    }

    const recent = await ctx.db
      .query("checkIns")
      .withIndex("by_player_key_and_checked_in_at", (q) =>
        q.eq("playerKey", args.playerKey),
      )
      .order("desc")
      .first();

    if (recent && now - recent.checkedInAt < COOLDOWN_MS) {
      return {
        ok: true as const,
        checkedInAt: recent.checkedInAt,
        cooldownUntil: recent.checkedInAt + COOLDOWN_MS,
        alreadyCheckedIn: true,
      };
    }

    await ctx.db.insert("checkIns", {
      playerKey: args.playerKey,
      name,
      checkedInAt: now,
    });

    return {
      ok: true as const,
      checkedInAt: now,
      alreadyCheckedIn: false,
    };
  },
});

export const updateName = mutation({
  args: {
    playerKey: v.string(),
    name: v.string(),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    assertPlayerKey(args.playerKey);
    const name = normalizeName(args.name);
    const now = Date.now();

    const existing = await ctx.db
      .query("players")
      .withIndex("by_player_key", (q) => q.eq("playerKey", args.playerKey))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, { name, lastSeenAt: now });
    } else {
      await ctx.db.insert("players", {
        playerKey: args.playerKey,
        name,
        createdAt: now,
        lastSeenAt: now,
      });
    }

    return null;
  },
});

export const hereNow = query({
  args: {
    /** Client-passed clock so the query stays cacheable / deterministic */
    now: v.number(),
  },
  returns: v.array(
    v.object({
      name: v.string(),
      checkedInAt: v.number(),
    }),
  ),
  handler: async (ctx, args) => {
    const since = args.now - HERE_NOW_MS;
    const rows = await ctx.db
      .query("checkIns")
      .withIndex("by_checked_in_at", (q) => q.gte("checkedInAt", since))
      .order("desc")
      .take(200);

    // Latest check-in per playerKey
    const seen = new Set<string>();
    const unique: { name: string; checkedInAt: number }[] = [];
    for (const row of rows) {
      if (seen.has(row.playerKey)) continue;
      seen.add(row.playerKey);
      unique.push({ name: row.name, checkedInAt: row.checkedInAt });
    }
    return unique.slice(0, 40);
  },
});

export const stats = query({
  args: {
    now: v.number(),
  },
  returns: v.object({
    checkInsToday: v.number(),
    checkInsThisWeek: v.number(),
    uniquePlayersThisWeek: v.number(),
    totalCheckIns: v.number(),
  }),
  handler: async (ctx, args) => {
    const dayStart = startOfLocalDayApprox(args.now);
    const weekStart = args.now - 7 * 24 * 60 * 60 * 1000;

    const weekRows = await ctx.db
      .query("checkIns")
      .withIndex("by_checked_in_at", (q) => q.gte("checkedInAt", weekStart))
      .take(5000);

    const unique = new Set<string>();
    let checkInsToday = 0;
    for (const row of weekRows) {
      unique.add(row.playerKey);
      if (row.checkedInAt >= dayStart) checkInsToday += 1;
    }

    // Bounded count for total — good enough for early campaign stats
    const recentAll = await ctx.db
      .query("checkIns")
      .withIndex("by_checked_in_at")
      .order("desc")
      .take(10000);

    return {
      checkInsToday,
      checkInsThisWeek: weekRows.length,
      uniquePlayersThisWeek: unique.size,
      totalCheckIns: recentAll.length,
    };
  },
});

/** Approx Vancouver-local midnight using fixed UTC-7 offset (PDT). Good enough for v1 boards. */
function startOfLocalDayApprox(now: number): number {
  const VANCOUVER_OFFSET_MS = -7 * 60 * 60 * 1000;
  const local = now + VANCOUVER_OFFSET_MS;
  const dayMs = 24 * 60 * 60 * 1000;
  const localMidnight = Math.floor(local / dayMs) * dayMs;
  return localMidnight - VANCOUVER_OFFSET_MS;
}
