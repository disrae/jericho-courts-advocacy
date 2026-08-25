import type { Metadata } from "next";
import { CheckInBoard } from "@/components/check-in-board";
import { EmailParkBoard } from "@/components/email-park-board";
import { SectionHeading } from "@/components/site-shell";
import { buildMailtoUrl } from "@/lib/park-board-email";

export const metadata: Metadata = {
  title: "Check in",
  description:
    "Check in when you play at Jericho Beach Park. These numbers show how often the courts fill up.",
};

export default function PlayPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-16">
      <SectionHeading
        eyebrow="At the courts"
        title="Check in when you play"
        description="A public record of how often Jericho fills up. Check in from your phone when you arrive — it takes a few seconds."
      />
      <div className="mt-6 sm:mt-10">
        <CheckInBoard />
      </div>

      <div id="email" className="mt-10 scroll-mt-24 sm:mt-14">
        <section className="rounded-2xl bg-emerald-900 p-5 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200 sm:text-sm">
            Next step
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
            Tell the city these courts get used
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-emerald-50/90 sm:text-base">
            Check-ins prove demand. An email asks the Park Board to fund permanent
            courts, proper surfaces, and lights. Two minutes — the letter is already
            written.
          </p>
          <a
            href={buildMailtoUrl()}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-50 sm:w-auto"
          >
            Email the Park Board
          </a>
        </section>

        <div className="mt-4 sm:mt-6">
          <EmailParkBoard
            title="Or copy the letter"
            description="If your mail app didn't fill in the letter, copy it here and paste it into the email body. Add your name and address, then send."
            showMailButton={false}
          />
        </div>
      </div>
    </div>
  );
}
