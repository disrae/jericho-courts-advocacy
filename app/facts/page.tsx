import { SectionHeading, StatCard } from "@/components/site-shell";
import { getBaseline, links } from "@/lib/site-data";

const gaps = [
  ["Surface quality", "Aging asphalt, pop-up lines", "Full resurface + dedicated PB lines"],
  ["Nets", "Portable lockbox", "Fixed permanent net systems"],
  ["Permanence", "Temporary designation", "Capital project + permanent allocation"],
  ["Evening play", "None", "Solar LED with curfew (pilot)"],
] as const;

export default function FactsPage() {
  const data = getBaseline();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Current state"
        title="Jericho courts today"
        description="Baseline facts for advocacy — verify on-site before public use."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Location" value="Jericho Beach Park" note="West Point Grey, Discovery St area" />
        <StatCard
          label="Pop-up since"
          value="Feb 2023"
          note="Extended indefinitely — still not permanent per Park Board"
        />
        <StatCard
          label="Permanent PB nets"
          value="No"
          note="VPA portable nets in smartphone lockboxes"
        />
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Gaps vs. target</h3>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Need</th>
                <th className="px-4 py-3 font-medium">Current</th>
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
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">City context</h3>
        <ul className="mt-4 space-y-2 text-slate-600">
          <li>
            Park Board maintains {data.city_context.park_board_tennis_courts_total}{" "}
            tennis courts across {data.city_context.parks_with_tennis} parks
          </li>
          <li>
            ~{data.city_context.outdoor_pickleball_courts_approx} outdoor pickleball
            courts for {data.city_context.population_approx.toLocaleString()}+ residents
          </li>
          <li>Sport Court Strategy timeline still unclear after years of delay</li>
        </ul>
      </div>

      <div className="mt-16">
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
      </div>
    </div>
  );
}
