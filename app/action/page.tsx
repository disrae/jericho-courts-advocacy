import type { Metadata } from "next";
import Link from "next/link";
import { EmailParkBoard } from "@/components/email-park-board";
import { SectionHeading } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Take action",
  description:
    "Email the Park Board, speak at a meeting, join the VPA campaign, or prep for the Park Board election.",
};

const pushback = [
  {
    q: "It's only temporary until the strategy.",
    a: "More than three years of daily use is a completed pilot. Delay has a cost: portable gear, extra maintenance, and courts that never catch up to demand.",
  },
  {
    q: "Tennis players will lose out.",
    a: "The proposal keeps tennis courts and upgrades the already-dedicated pop-up slab. Nobody is asking for a surprise conversion.",
  },
  {
    q: "Lighting will bother neighbours.",
    a: "Start with a pilot: shielded LEDs, a 9pm curfew, and consultation before anything is installed.",
  },
  {
    q: "Solar is gimmicky.",
    a: "Solar cuts the cost of trenching to the grid, supports the city's climate goals, and extends playable hours without a new building.",
  },
] as const;

export default function ActionPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Take action"
        title="Help get Jericho courts funded"
        description="Pick one. An email takes about two minutes."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div id="email" className="contents">
          <EmailParkBoard />
        </div>

        <article className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">2. Speak at a meeting</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            Register to speak for three minutes when court or capital items are on the
            Park Board agenda.
          </p>
          <p className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm leading-relaxed text-emerald-950">
            Jericho Beach has eight pickleball courts that have run as a pop-up since
            2023. They are full every day, yet players still use portable nets and aging
            asphalt, with no lights. Please fund permanent Jericho courts in the next
            capital cycle — resurfacing, fixed nets, and a solar lighting pilot.
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
            The Vancouver Pickleball Association&apos;s MORE campaign is already calling
            for Jericho permanence by spring 2026. Join that effort.
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

        <article className="rounded-2xl border border-emerald-900/15 bg-emerald-50/50 p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold text-slate-900">4. Vote Park Board — Oct 17</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            Commissioners decide parks capital. See who&apos;s running and what to ask
            about Jericho before election day.
          </p>
          <Link href="/election" className="mt-4 btn-secondary px-4 py-2">
            2026 election guide
          </Link>
        </article>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">What we hear</h3>
        <dl className="mt-6 space-y-4">
          {pushback.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 p-5">
              <dt className="font-medium text-slate-900">&ldquo;{item.q}&rdquo;</dt>
              <dd className="mt-2 leading-relaxed text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

