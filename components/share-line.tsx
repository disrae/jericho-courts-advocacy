export const shareLine =
  "Jericho courts are full every day on 3+ year 'temporary' infrastructure. Vancouver Park Board: fund permanent courts, proper surfaces, and solar lighting at Jericho Beach.";

export function ShareLineBox() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
        Share this
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{shareLine}</p>
    </div>
  );
}
