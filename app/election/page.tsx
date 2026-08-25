import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/site-shell";
import { asks } from "@/lib/site-data";
import {
  formatElectionDate,
  getParkBoardElection,
} from "@/lib/election-2026";

export const metadata: Metadata = {
  title: "2026 Park Board election",
  description:
    "Who’s running for Vancouver Park Board, why it matters for Jericho courts, and what to ask before October 17.",
};

const relevanceLabel = {
  ask: "Ask them",
  "priority-ask": "Priority ask — incumbents / past board",
} as const;

export default function ElectionPage() {
  const data = getParkBoardElection();
  const electionDay = formatElectionDate(data.electionDate);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="October 17, 2026"
        title="Park Board election & Jericho"
        description="Voters elect 7 Park Board commissioners. They decide parks capital — including whether Jericho stays a pop-up or becomes permanent."
      />

      <p className="mt-6 max-w-2xl rounded-2xl border border-amber-200/80 bg-amber-50/80 px-4 py-3 text-sm leading-relaxed text-amber-950">
        {data.disclaimer} Last updated {data.lastUpdated}.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-emerald-800">Election day</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
            {electionDay}
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-emerald-800">Seats</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
            {data.seats} commissioners
          </p>
          <p className="mt-1 text-sm text-slate-600">Citywide ballot — pick up to 7</p>
        </div>
        <div className="rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-medium text-emerald-800">Why here</p>
          <p className="mt-2 text-lg font-semibold tracking-tight text-slate-900">
            Capital & courts
          </p>
          <p className="mt-1 text-sm text-slate-600">Not a full voter guide</p>
        </div>
      </div>

      <section className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Why this race matters</h3>
        <ul className="mt-4 space-y-3 text-slate-600">
          {data.whyItMatters.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Ask every candidate</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
          Almost nobody has a published Jericho pledge yet. Use these at all-candidates
          meetings, DMs, and doorsteps — then share answers with other players.
        </p>
        <ol className="mt-6 space-y-3">
          {data.voterAsks.map((q, i) => (
            <li
              key={q}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 leading-relaxed text-slate-800"
            >
              <span className="mr-2 font-semibold text-emerald-800">{i + 1}.</span>
              {q}
            </li>
          ))}
        </ol>
        <p className="mt-4 text-sm text-slate-600">
          Full campaign asks:{" "}
          <Link href="/action" className="font-medium text-emerald-800 underline underline-offset-4">
            Take action
          </Link>
          {" · "}
          <Link href="/facts" className="font-medium text-emerald-800 underline underline-offset-4">
            Facts
          </Link>
        </p>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Slates, recreation lens</h3>
        <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
          Party themes that touch parks and recreation — not rankings. Press incumbents
          and former commissioners hardest on Jericho capital timing.
        </p>

        <div className="mt-8 space-y-6">
          {data.parties.map((party) => (
            <article
              key={party.id}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold text-slate-900">{party.name}</h4>
                <span className="text-xs font-semibold uppercase tracking-wide text-emerald-800">
                  {relevanceLabel[party.jerichoRelevance as keyof typeof relevanceLabel]}
                </span>
              </div>
              <p className="mt-3 leading-relaxed text-slate-600">{party.recreationNote}</p>
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {party.candidates.map((c) => (
                  <li
                    key={c.name}
                    className="rounded-xl bg-slate-50 px-3 py-2.5 text-sm text-slate-700"
                  >
                    <span className="font-medium text-slate-900">{c.name}</span>
                    {"incumbent" in c && c.incumbent ? (
                      <span className="ml-2 text-xs font-semibold text-emerald-800">
                        Incumbent
                      </span>
                    ) : null}
                    {c.note ? (
                      <span className="mt-0.5 block text-slate-500">{c.note}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
              <a
                href={party.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 hover:decoration-emerald-800"
              >
                {party.sourceLabel} →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-6 sm:p-8">
        <h3 className="text-xl font-semibold text-slate-900">Before you vote</h3>
        <ul className="mt-4 space-y-2 text-slate-700">
          <li>Confirm final nominees closer to election day (lists still shifting).</li>
          <li>
            Cross-check platforms on{" "}
            <a
              href="https://votemate.org/bc2026/candidates/?race=172&riding=794"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-emerald-900 underline underline-offset-4"
            >
              VoteMate
            </a>{" "}
            and party sites.
          </li>
          <li>You can vote for up to {data.seats} Park Board commissioners.</li>
          <li>
            Keep emailing the current board too — capital planning does not pause for
            campaigns.{" "}
            <Link href="/action#email" className="font-medium text-emerald-900 underline underline-offset-4">
              Email template
            </Link>
          </li>
        </ul>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Our capital asks</h3>
        <ul className="mt-4 space-y-2 text-slate-600">
          {asks.map((ask) => (
            <li key={ask} className="flex gap-3 leading-relaxed">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-700" />
              <span>{ask}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Sources</h3>
        <ul className="mt-4 space-y-3">
          {data.sources.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 hover:decoration-emerald-800"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
