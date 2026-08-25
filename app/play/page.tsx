import type { Metadata } from "next";
import { CheckInBoard } from "@/components/check-in-board";
import { SectionHeading } from "@/components/site-shell";

export const metadata: Metadata = {
  title: "Check in",
  description:
    "Check in when you play at Jericho Beach Park. These numbers show how often the courts fill up.",
};

export default function PlayPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <SectionHeading
        eyebrow="At the courts"
        title="Check in when you play"
        description="A public record of how often Jericho fills up. Check in from your phone when you arrive — it takes a few seconds."
      />
      <div className="mt-10">
        <CheckInBoard />
      </div>
    </div>
  );
}
