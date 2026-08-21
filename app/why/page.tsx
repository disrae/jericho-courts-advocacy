import { ActionBar } from "@/components/action-bar";
import { ShareLineBox } from "@/components/share-line";
import { SectionHeading, StatCard } from "@/components/site-shell";
import photoSlots from "@/data/photo-slots.json";
import testimonials from "@/data/testimonials.json";
import { gaps, getBaseline, links, pushback } from "@/lib/site-data";

export default function WhyPage() {
  const data = getBaseline();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Why Jericho"
        title="Full courts. Bad surfaces. No lights. Still &ldquo;temporary.&rdquo;"
        description="Everything the Park Board needs to see before they fund permanent upgrades."
      />

      <div className="mt-10">
        <ActionBar />
      </div>

      <section className="mt-16" id="numbers">
        <h3 className="text-xl font-semibold text-slate-900">By the numbers</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            label="Pickleball courts (pop-up)"
            value={String(data.courts.pickleball_popup.count)}
            note="Portable nets on converted tennis courts"
          />
          <StatCard
            label="Court lighting"
            value="0"
            note="No evening play infrastructure"
          />
          <StatCard
            label="City PB courts"
            value={`~${data.city_context.outdoor_pickleball_courts_approx}`}
            note={`For ${data.city_context.population_approx.toLocaleString()}+ residents`}
          />
          <StatCard
            label="Park Board tennis courts"
            value={String(data.city_context.park_board_tennis_courts_total)}
            note={`Across ${data.city_context.parks_with_tennis} parks — Jericho among busiest`}
          />
        </div>
      </section>

      <section className="mt-16" id="see-it">
        <h3 className="text-xl font-semibold text-slate-900">See it</h3>
        <p className="mt-2 text-slate-600">
          Photo slots — add real images from site visits. Every claim needs a picture or
          source.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {photoSlots.map((slot) => (
            <div
              key={slot.id}
              className="flex aspect-[4/3] flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center"
            >
              <p className="text-sm font-medium text-slate-700">{slot.caption}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-500">
                Photo needed
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16" id="voices">
        <h3 className="text-xl font-semibold text-slate-900">Voices</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="leading-relaxed text-slate-700">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-4 text-sm text-slate-500">{item.attribution}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="mt-16" id="gaps">
        <h3 className="text-xl font-semibold text-slate-900">What&apos;s broken vs. what we need</h3>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Need</th>
                <th className="px-4 py-3 font-medium">Today</th>
                <th className="px-4 py-3 font-medium">Target</th>
              </tr>
            </thead>
            <tbody>
              {gaps.map(([need, current, target]) => (
                <tr key={need} className="border-t border-slate-200">
                  <td className="px-4 py-3 font-medium text-slate-900">{need}</td>
                  <td className="px-4 py-3 text-slate-600">{current}</td>
                  <td className="px-4 py-3 text-emerald-800">{target}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16" id="pushback">
        <h3 className="text-xl font-semibold text-slate-900">They&apos;ll say&hellip;</h3>
        <dl className="mt-6 space-y-4">
          {pushback.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 p-5">
              <dt className="font-medium text-slate-900">&ldquo;{item.q}&rdquo;</dt>
              <dd className="mt-2 leading-relaxed text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Sources</h3>
        <ul className="mt-4 space-y-3">
          {links.map((link) => (
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

      <div className="mt-16 space-y-6">
        <ShareLineBox />
        <ActionBar />
      </div>
    </div>
  );
}
