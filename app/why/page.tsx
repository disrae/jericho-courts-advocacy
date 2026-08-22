import Link from "next/link";
import { CampaignPhoto } from "@/components/campaign-photo";
import { WhyHero } from "@/components/why-hero";
import { SectionHeading, StatCard } from "@/components/site-shell";
import {
  campaignStrategy,
  getGalleryPhotos,
  getWidePhoto,
  sitePhotos,
} from "@/lib/site-photos";
import { getBaseline, links, pushback } from "@/lib/site-data";

const gaps = [
  ["Nets", "Portable lockbox — break often", "Fixed permanent net systems"],
  ["Permanence", "Temporary since Feb 2023", "Capital project + permanent allocation"],
  ["Demand", "Almost always busy", "Enough permanent capacity"],
  ["Evening play", "No court lighting", "Solar LED with curfew (pilot)"],
] as const;

export default function WhyPage() {
  const data = getBaseline();
  const feature = sitePhotos.find((p) => p.layout === "feature");
  const wide = getWidePhoto();
  const gallery = getGalleryPhotos().filter((p) => p.layout === "grid");

  return (
    <>
      <WhyHero />

      <div className="mx-auto max-w-5xl px-6 py-16">
        <section id="numbers">
          <SectionHeading
            eyebrow="By the numbers"
            title="Demand is already here"
            description="Jericho doesn't need a pilot to prove people will come. They already do — every day."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="Pickleball courts (pop-up)"
              value={String(data.courts.pickleball_popup.count)}
              note="Portable nets from lockboxes"
            />
            <StatCard label="Court lighting" value="0" note="Play stops at dusk" />
            <StatCard
              label="City PB courts"
              value={`~${data.city_context.outdoor_pickleball_courts_approx}`}
              note={`For ${data.city_context.population_approx.toLocaleString()}+ residents`}
            />
            <StatCard
              label="Status"
              value="Temporary"
              note="Extended Feb 2023 — not permanent per Park Board"
            />
          </div>
        </section>

        <section id="see-it" className="mt-20">
          <h2 className="text-2xl font-semibold text-slate-900">See it</h2>
          <p className="mt-2 max-w-2xl text-slate-600">
            Photos from Jericho Beach Park courts. Captions describe what players see —
            not what we wish were true.
          </p>

          <div className="mt-8 grid gap-6">
            {feature ? (
              <figure>
                <CampaignPhoto photo={feature} priority aspectClass="aspect-[16/10] sm:aspect-[21/9]" />
                <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
                  {feature.caption}
                </figcaption>
              </figure>
            ) : null}

            {wide ? (
              <figure>
                <CampaignPhoto photo={wide} aspectClass="aspect-[16/10]" />
                <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
                  {wide.caption}
                </figcaption>
              </figure>
            ) : null}

            <div className="grid gap-6 sm:grid-cols-2">
              {gallery.map((photo) => (
                <figure key={photo.id}>
                  <CampaignPhoto photo={photo} aspectClass="aspect-[4/3]" />
                  <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="strategy" className="mt-20 rounded-2xl border border-emerald-900/10 bg-emerald-50/50 p-8">
          <h2 className="text-2xl font-semibold text-slate-900">How we win</h2>
          <p className="mt-2 text-slate-600">
            Park Board funds capital projects when demand is documented and the ask is
            specific. This is the playbook.
          </p>
          <ol className="mt-8 space-y-5">
            {campaignStrategy.map((item) => (
              <li key={item.step} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-800 text-sm font-semibold text-white">
                  {item.step}
                </span>
                <div>
                  <p className="font-medium text-slate-900">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="gaps" className="mt-20">
          <h2 className="text-2xl font-semibold text-slate-900">What needs to change</h2>
          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="px-4 py-3 font-medium">Issue</th>
                  <th className="px-4 py-3 font-medium">Today</th>
                  <th className="px-4 py-3 font-medium">Target</th>
                </tr>
              </thead>
              <tbody>
                {gaps.map(([issue, today, target]) => (
                  <tr key={issue} className="border-t border-slate-200">
                    <td className="px-4 py-3 font-medium text-slate-900">{issue}</td>
                    <td className="px-4 py-3 text-slate-600">{today}</td>
                    <td className="px-4 py-3 text-emerald-800">{target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="pushback" className="mt-20">
          <h2 className="text-2xl font-semibold text-slate-900">They&apos;ll say&hellip;</h2>
          <dl className="mt-6 space-y-4">
            {pushback.map((item) => (
              <div key={item.q} className="rounded-2xl border border-slate-200 p-5">
                <dt className="font-medium text-slate-900">&ldquo;{item.q}&rdquo;</dt>
                <dd className="mt-2 leading-relaxed text-slate-600">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-20">
          <h2 className="text-2xl font-semibold text-slate-900">Sources</h2>
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

        <div className="mt-16 rounded-2xl bg-emerald-800 p-8 text-white">
          <p className="text-lg font-medium">Ready to push back?</p>
          <p className="mt-2 text-emerald-100">
            Send one email. Attach a photo if you can. It takes two minutes.
          </p>
          <Link href="/action" className="btn-primary mt-6 bg-white text-emerald-900 hover:bg-emerald-50">
            Take action
          </Link>
        </div>
      </div>
    </>
  );
}
