import Link from "next/link";
import { buildMailtoUrl } from "@/lib/park-board-email";

const nav = [
  { href: "/", label: "Home" },
  { href: "/facts", label: "Facts" },
  { href: "/action", label: "Take action" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-emerald-900/10 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="group flex flex-col">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
            Vancouver
          </span>
          <span className="text-lg font-semibold text-slate-900 group-hover:text-emerald-800">
            Jericho Courts
          </span>
        </Link>
        <nav className="flex gap-1 sm:gap-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <a href={buildMailtoUrl()} className="btn-primary px-3 py-2 sm:px-4">
          Email
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-600">
        <p className="font-medium text-slate-900">Jericho Courts Advocacy</p>
        <p className="mt-2 max-w-2xl leading-relaxed">
          Community campaign for permanent, quality courts at Jericho Beach Park.
          Built to coordinate research, data, and Park Board engagement.
        </p>
        <p className="mt-4 text-xs text-slate-500">
          Not affiliated with the City of Vancouver or Vancouver Park Board.
        </p>
      </div>
    </footer>
  );
}

export function StatCard({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note?: string;
}) {
  return (
    <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-emerald-800">{label}</p>
      <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>
      {note ? <p className="mt-2 text-sm leading-relaxed text-slate-600">{note}</p> : null}
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-lg leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </div>
  );
}
