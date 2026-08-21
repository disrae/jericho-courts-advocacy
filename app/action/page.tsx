import Link from "next/link";
import { EmailParkBoard } from "@/components/email-park-board";
import { SectionHeading } from "@/components/site-shell";

const pushback = [
  {
    q: "It's only temporary until the strategy.",
    a: "Three+ years of daily use is a pilot with results. Delay has a cost: portable gear, repainting, frustrated players.",
  },
  {
    q: "Tennis players will lose out.",
    a: "The proposal keeps tennis courts and upgrades the already-dedicated pop-up slab — no surprise loss.",
  },
  {
    q: "Lighting will bother neighbours.",
    a: "Pilot shielded LEDs, 9pm curfew, and consultation before install.",
  },
  {
    q: "Solar is gimmicky.",
    a: "Solar reduces grid trenching cost, supports climate goals, and extends hours without a new building.",
  },
] as const;

export default function ActionPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Take action"
        title="Help get Jericho courts funded"
        description="Pick one. Email takes about 2 minutes."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <EmailParkBoard />

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">2. Speak at a meeting</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            Register to depute (3 minutes) when court or capital items are on the agenda.
          </p>
          <p className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950">
            Jericho Beach has eight pickleball courts on a temporary basis since 2022.
            They&apos;re full every day, but still use portable nets and old asphalt,
            with no lights. Fund Jericho permanent courts in the next capital cycle —
            with resurfacing, fixed nets, and a solar lighting pilot.
          </p>
          <a
            href="https://parkboardmeetings.vancouver.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex text-sm font-semibold text-emerald-800 underline underline-offset-4"
          >
            Park Board meetings →
          </a>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900">3. Join the coalition</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            The Vancouver Pickleball Association&apos;s MORE campaign is already pushing
            for Jericho permanence by spring 2026. Align rather than duplicate.
          </p>
          <a
            href="https://vancouverpickleball.ca/more-campaign/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 btn-primary px-4 py-2"
          >
            VPA MORE campaign
          </a>
        </article>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Answers to pushback</h3>
        <dl className="mt-6 space-y-4">
          {pushback.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 p-5">
              <dt className="font-medium text-slate-900">&ldquo;{item.q}&rdquo;</dt>
              <dd className="mt-2 leading-relaxed text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-16 rounded-2xl border border-dashed border-emerald-900/20 bg-emerald-50/60 p-6">
        <p className="font-medium text-slate-900">For agents & collaborators</p>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Research, scrapers, and task backlog live in the project repo. This site is the
          public-facing campaign front door.
        </p>
        <Link
          href="/facts"
          className="mt-4 inline-flex text-sm font-semibold text-emerald-800 underline underline-offset-4"
        >
          Review the facts →
        </Link>
      </div>
    </div>
  );
}
