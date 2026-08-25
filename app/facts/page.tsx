import type { Metadata } from "next";
import { SectionHeading, StatCard } from "@/components/site-shell";
import { getBaseline, links } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "The facts",
  description:
    "What is on the ground at Jericho Beach Park: eight pop-up pickleball courts, no lights, and still no permanent Park Board commitment.",
};

const gaps = [
  ["Surface quality", "Aging asphalt with pop-up lines", "Full resurface with dedicated pickleball lines"],
  ["Nets", "Portable nets in lockboxes", "Fixed, permanent net systems"],
  ["Permanence", "Temporary pop-up designation", "Permanent courts, funded as a capital project"],
  ["Evening play", "None — courts close at dusk", "Solar LED lighting with a neighbourhood curfew"],
] as const;

export default function FactsPage() {
  const data = getBaseline();

  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="The facts"
        title="Jericho courts today"
        description="Eight pop-up pickleball courts, no lights, and still no permanent commitment from the Park Board."
      />

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Location" value="Jericho Beach Park" note="West Point Grey, near Discovery Street" />
        <StatCard
          label="Pop-up since"
          value="Feb 2023"
          note="Extended indefinitely — still listed as temporary"
        />
        <StatCard
          label="Permanent nets"
          value="No"
          note="Players still use portable nets from lockboxes"
        />
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">On site vs. what we need</h3>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3 font-medium">Need</th>
                <th className="px-4 py-3 font-medium">Today</th>
                <th className="px-4 py-3 font-medium">Proposed</th>
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
            The Park Board maintains {data.city_context.park_board_tennis_courts_total}{" "}
            tennis courts across {data.city_context.parks_with_tennis} parks.
          </li>
          <li>
            Vancouver has about {data.city_context.outdoor_pickleball_courts_approx} outdoor
            pickleball courts for more than{" "}
            {data.city_context.population_approx.toLocaleString()} residents.
          </li>
          <li>
            The Sport Court Strategy still has no public timeline, years after it was promised.
          </li>
        </ul>
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold text-slate-900">Sources</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Drawn from City of Vancouver notices, Park Board documents, and the Vancouver
          Pickleball Association.
        </p>
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
