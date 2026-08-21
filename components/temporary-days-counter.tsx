"use client";

const POPUP_EXTENDED = new Date("2023-02-24T00:00:00-08:00");

export function TemporaryDaysCounter() {
  const days = Math.floor(
    (Date.now() - POPUP_EXTENDED.getTime()) / (1000 * 60 * 60 * 24),
  );

  return (
    <div className="border-b border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm text-amber-950">
      <span className="font-semibold">{days.toLocaleString()} days</span> since Park
      Board called these courts &ldquo;temporary&rdquo; — still full every day.
    </div>
  );
}
