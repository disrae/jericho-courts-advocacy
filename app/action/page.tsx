import Link from "next/link";
import { ActionBar } from "@/components/action-bar";
import { ShareLineBox } from "@/components/share-line";
import { SectionHeading } from "@/components/site-shell";
import { parkBoardEmail } from "@/lib/site-data";

const mailtoSubject = encodeURIComponent(
  "Fund permanent Jericho Beach courts",
);
const mailtoBody = encodeURIComponent(
  "Dear Commissioners,\n\nI support permanent, high-quality court infrastructure at Jericho Beach Park: resurfacing, fixed nets, preserved tennis access, a solar lighting pilot, and a public Sport Court Strategy timeline with Jericho in tranche 1.\n\nJericho is one of the city's busiest court sites yet still runs on temporary pop-up infrastructure. Please fund permanent upgrades in the next capital cycle.\n\nSincerely,\n[Your name]\n[Your address]",
);

export default function ActionPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="Take action"
        title="Help get Jericho courts funded"
        description="Pick one. Takes 5 minutes."
      />

      <div className="mt-10">
        <ActionBar />
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <article id="email" className="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-slate-900">1. Email the Park Board</h3>
          <p className="mt-3 leading-relaxed text-slate-600">
            Pre-filled draft — add your name and Vancouver address before sending.
          </p>
          <a
            href={`mailto:${parkBoardEmail}?subject=${mailtoSubject}&body=${mailtoBody}`}
            className="mt-4 inline-flex rounded-full bg-emerald-700 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            Open email draft
          </a>
          <details className="mt-4 rounded-xl bg-slate-50 p-4">
            <summary className="cursor-pointer font-medium text-emerald-800">
              Full letter template
            </summary>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
              <p>Dear Commissioners,</p>
              <p>
                I support permanent, high-quality court infrastructure at Jericho Beach
                Park: resurfacing, fixed nets, preserved tennis access, a solar lighting
                pilot, and a public Sport Court Strategy timeline with Jericho in tranche 1.
              </p>
              <p>
                Jericho is one of the city&apos;s busiest court sites yet still runs on
                temporary pop-up infrastructure. Please fund permanent upgrades in the
                next capital cycle.
              </p>
              <p>Sincerely,<br />[Your name]<br />[Your address]</p>
            </div>
          </details>
        </article>

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
            VPA&apos;s MORE campaign pushes Jericho permanence by spring 2026 — 1,486+
            petition signers. Align, don&apos;t duplicate.
          </p>
          <a
            href="https://vancouverpickleball.ca/more-campaign/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            VPA MORE campaign
          </a>
        </article>
      </div>

      <div className="mt-16 space-y-6">
        <ShareLineBox />
        <div className="rounded-2xl border border-dashed border-emerald-900/20 bg-emerald-50/60 p-6">
          <p className="font-medium text-slate-900">Need ammo first?</p>
          <Link
            href="/why"
            className="mt-2 inline-flex text-sm font-semibold text-emerald-800 underline underline-offset-4"
          >
            Read why Jericho →
          </Link>
        </div>
      </div>
    </div>
  );
}
