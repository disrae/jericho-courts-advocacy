import Link from "next/link";
import { SectionHeading, StatCard } from "@/components/site-shell";
import { asks, getBaseline, goals } from "@/lib/site-data";

export default function HomePage() {
  const data = getBaseline();

  return (
    <>
      <section className="relative overflow-hidden border-b border-emerald-900/10 bg-[radial-gradient(circle_at_top_left,_#d1fae5_0,_transparent_45%),linear-gradient(180deg,_#ffffff_0%,_#f8faf8_100%)]">
        <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-700">
            Jericho Beach Park
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl">
            Permanent courts. Proper surfaces. Lights when it matters.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
            Jericho is one of Vancouver&apos;s busiest outdoor court sites — full
            every day on temporary pop-up infrastructure. We&apos;re organizing for
            Park Board to fund permanent upgrades: resurfacing, fixed nets, and a
            solar lighting pilot.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/action" className="btn-primary">
              Take action
            </Link>
            <Link href="/facts" className="btn-secondary">
              See the facts
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Pickleball courts (pop-up)"
            value={String(data.courts.pickleball_popup.count)}
            note="On 2 converted tennis courts — portable nets"
          />
          <StatCard
            label="Tennis courts"
            value={String(data.courts.tennis.count)}
            note="Hard/asphalt-class surface"
          />
          <StatCard
            label="Court lighting"
            value="0"
            note="No evening play infrastructure today"
          />
          <StatCard
            label="City PB courts"
            value={`~${data.city_context.outdoor_pickleball_courts_approx}`}
            note={`For ~${Math.round(data.city_context.population_approx / 1000)}k residents`}
          />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <SectionHeading
            eyebrow="The goal"
            title="What we're asking the Park Board to deliver"
            description="Aligned with the Vancouver Pickleball Association's push for Jericho permanence by spring 2026 — with a west-side flagship vision."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {goals.map((goal) => (
              <article
                key={goal.title}
                className="rounded-2xl border border-slate-200 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-700">
                  {goal.priority}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {goal.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">{goal.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16">
        <SectionHeading
          eyebrow="The ask"
          title="Five concrete requests"
          description="Use these in letters, deputations, and commissioner meetings."
        />
        <ol className="mt-8 space-y-4">
          {asks.map((ask, index) => (
            <li
              key={ask}
              className="flex gap-4 rounded-2xl border border-emerald-900/10 bg-white p-5 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800">
                {index + 1}
              </span>
              <p className="pt-1 leading-relaxed text-slate-700">{ask}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-emerald-900 text-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
            One line
          </p>
          <p className="mt-4 max-w-3xl text-2xl font-medium leading-snug sm:text-3xl">
            Jericho proves demand every day — it&apos;s time to match that with
            permanent courts, proper surfaces, and responsible solar lighting.
          </p>
          <Link
            href="/action"
            className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50"
          >
            Email template & talking points
          </Link>
        </div>
      </section>
    </>
  );
}
