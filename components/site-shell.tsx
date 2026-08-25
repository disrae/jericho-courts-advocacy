import Link from "next/link";
import { buildMailtoUrl } from "@/lib/park-board-email";

const nav = [
  { href: "/", label: "Home" },
  { href: "/facts", label: "Facts" },
  { href: "/play", label: "Check in" },
  { href: "/action", label: "Take action" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-emerald-900/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="group min-w-0 shrink">
          <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-emerald-700 sm:text-xs">
            Vancouver
          </span>
          <span className="block truncate text-base font-semibold text-slate-900 group-hover:text-emerald-800 sm:text-lg">
            Jericho Courts
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
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
        <div className="flex shrink-0 items-center gap-2">
          <a href={buildMailtoUrl()} className="btn-primary px-3 py-2 text-sm sm:px-4">
            Email
          </a>
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-emerald-950/15 bg-white text-slate-800 [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Menu</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </summary>
            <nav className="absolute right-0 z-50 mt-2 w-52 rounded-2xl border border-slate-200 bg-white p-2 shadow-lg">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-900"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm text-slate-600">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-medium text-slate-900">Jericho Courts</p>
            <p className="mt-2 max-w-md leading-relaxed">
              A community campaign for permanent, quality courts at Jericho Beach Park.
            </p>
          </div>
          <nav className="flex flex-col gap-2 sm:text-right">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-emerald-800"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-slate-500">
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
    <div className="rounded-2xl border border-emerald-900/10 bg-white p-4 shadow-sm sm:p-5">
      <p className="text-xs font-medium text-emerald-800 sm:text-sm">{label}</p>
      <p className="mt-1.5 text-2xl font-semibold tracking-tight text-slate-900 sm:mt-2 sm:text-3xl">
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
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
