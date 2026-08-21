import Link from "next/link";

export function ActionBar({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={
        compact
          ? "flex flex-wrap gap-3"
          : "rounded-2xl border border-emerald-900/15 bg-emerald-700 p-6 text-white sm:flex sm:items-center sm:justify-between"
      }
    >
      {!compact ? (
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
            Next step
          </p>
          <p className="mt-1 text-lg font-medium">
            Tell the Park Board Jericho needs permanent courts.
          </p>
        </div>
      ) : null}
      <div className="flex flex-wrap gap-3">
        <Link
          href="/action#email"
          className={
            compact
              ? "rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
              : "rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
          }
        >
          Email Park Board
        </Link>
        <Link
          href="/why"
          className={
            compact
              ? "rounded-full border border-emerald-900/15 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-50"
              : "rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-600"
          }
        >
          Why Jericho
        </Link>
      </div>
    </div>
  );
}
