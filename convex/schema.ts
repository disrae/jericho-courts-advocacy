import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  players: defineTable({
    /** Browser-generated UUID stored in localStorage */
    playerKey: v.string(),
    name: v.string(),
    createdAt: v.number(),
    lastSeenAt: v.number(),
  }).index("by_player_key", ["playerKey"]),

  checkIns: defineTable({
    playerKey: v.string(),
    name: v.string(),
    checkedInAt: v.number(),
  })
    .index("by_checked_in_at", ["checkedInAt"])
    .index("by_player_key_and_checked_in_at", ["playerKey", "checkedInAt"]),
});
