import type { Metadata } from "next";
import { Anton, Figtree } from "next/font/google";
import Image from "next/image";
import { PrintButton } from "@/components/print-button";

export const metadata: Metadata = {
  title: "Poster",
  description: "Printable Jericho courts check-in poster",
  robots: { index: false, follow: false },
};

const display = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poster-display",
});

const sans = Figtree({
  subsets: ["latin"],
  variable: "--font-poster-sans",
});

export default function PosterPage() {
  return (
    <div
      data-print-poster
      className={`${display.variable} ${sans.variable} poster-root`}
    >
      <div className="poster-toolbar no-print">
        <p>Letter size · Print → Save as PDF · tape at the courts</p>
        <PrintButton />
      </div>

      <article className="poster-sheet" aria-label="Jericho courts poster">
        <div className="poster-sky" aria-hidden />
        <div className="poster-court" aria-hidden />

        <header className="poster-brand">
          <p className="poster-kicker">Jericho Beach Park</p>
          <h1 className="poster-title">We need you.</h1>
          <p className="poster-sub">
            Check in when you play. Show the Park Board these courts get used.
          </p>
        </header>

        <div className="poster-hero">
          <Image
            src="/paddle.png"
            alt=""
            width={420}
            height={420}
            className="poster-paddle"
            priority
          />
        </div>

        <div className="poster-qr-block">
          <div className="poster-qr-frame">
            <Image
              src="/qr-play.png"
              alt="QR code to check in at jerichoneedslove.com/play"
              width={320}
              height={320}
              className="poster-qr"
              priority
            />
          </div>
          <p className="poster-scan">Scan to check in</p>
          <p className="poster-url">jerichoneedslove.com/play</p>
        </div>

        <footer className="poster-foot">
          Permanent courts · Proper surfaces · Lights after dark
        </footer>
      </article>
    </div>
  );
}
