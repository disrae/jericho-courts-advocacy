"use client";

import { useMutation, useQuery } from "convex/react";
import { useEffect, useState, type FormEvent } from "react";
import { api } from "@/convex/_generated/api";
import {
  ensureLocalPlayer,
  readLocalPlayer,
  type LocalPlayer,
} from "@/lib/player";
import { StatCard } from "@/components/site-shell";

function formatRelative(at: number, now: number): string {
  const mins = Math.max(0, Math.round((now - at) / 60000));
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.round(mins / 60);
  return `${hours}h ago`;
}

export function CheckInBoard() {
  const [now, setNow] = useState(() => Date.now());
  const [player, setPlayer] = useState<LocalPlayer | null>(null);
  const [nameInput, setNameInput] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const hereNow = useQuery(api.checkIns.hereNow, { now });
  const stats = useQuery(api.checkIns.stats, { now });
  const checkIn = useMutation(api.checkIns.checkIn);

  useEffect(() => {
    const existing = readLocalPlayer();
    if (existing) {
      setPlayer(existing);
      setNameInput(existing.name);
    }
    const id = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  async function onCheckIn(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setStatus(null);
    try {
      const local = ensureLocalPlayer(nameInput);
      setPlayer(local);
      const result = await checkIn({
        playerKey: local.playerKey,
        name: local.name,
      });
      setNow(Date.now());
      if (result.alreadyCheckedIn) {
        setStatus("You're already checked in. You can check in again after 45 minutes.");
      } else {
        setStatus(`You're on the board as ${local.name}.`);
      }
    } catch (err) {
      setStatus(err instanceof Error ? err.message : "Check-in failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="space-y-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          label="Check-ins today"
          value={stats ? String(stats.checkInsToday) : "—"}
        />
        <StatCard
          label="Check-ins this week"
          value={stats ? String(stats.checkInsThisWeek) : "—"}
        />
        <StatCard
          label="Players this week"
          value={stats ? String(stats.uniquePlayersThisWeek) : "—"}
        />
        <StatCard
          label="All-time check-ins"
          value={stats ? String(stats.totalCheckIns) : "—"}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <form
          onSubmit={onCheckIn}
          className="rounded-2xl border border-emerald-900/10 bg-white p-6 shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900">
            {player ? `Welcome back, ${player.name}` : "Check in at Jericho"}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Check in when you arrive. We remember your name on this phone — no
            account, no email.
          </p>
          <label className="mt-5 block text-sm font-medium text-slate-700">
            First name or nickname
            <input
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              maxLength={40}
              required
              placeholder="e.g. Alex"
              className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-emerald-700/30 focus:ring-2"
            />
          </label>
          <button
            type="submit"
            disabled={busy || nameInput.trim().length < 1}
            className="btn-primary mt-5 w-full disabled:opacity-60"
          >
            {busy ? "Checking in…" : "I'm playing"}
          </button>
          {status ? (
            <p className="mt-4 text-sm leading-relaxed text-emerald-900">{status}</p>
          ) : null}
          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            One check-in every 45 minutes per device. Names show publicly on this
            page — keep it friendly.
          </p>
        </form>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">Here now</h3>
          <p className="mt-2 text-sm text-slate-600">
            Checked in within the last 3 hours.
          </p>
          {!hereNow ? (
            <p className="mt-6 text-sm text-slate-500">Loading…</p>
          ) : hereNow.length === 0 ? (
            <p className="mt-6 text-sm text-slate-500">
              No one has checked in in the last three hours.
            </p>
          ) : (
            <ul className="mt-6 divide-y divide-slate-100">
              {hereNow.map((row) => (
                <li
                  key={`${row.name}-${row.checkedInAt}`}
                  className="flex items-baseline justify-between gap-3 py-3"
                >
                  <span className="font-medium text-slate-900">{row.name}</span>
                  <span className="shrink-0 text-xs text-slate-500">
                    {formatRelative(row.checkedInAt, now)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
