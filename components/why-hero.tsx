"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getHeroPhoto, photoSrc } from "@/lib/site-photos";

export function WhyHero() {
  const hero = getHeroPhoto();
  const [failed, setFailed] = useState(false);

  return (
    <section className="relative min-h-[420px] overflow-hidden border-b border-emerald-950/20 sm:min-h-[520px]">
      {hero && !failed ? (
        <Image
          src={photoSrc(hero.file)}
          alt={hero.alt}
          fill
          priority
          className="object-cover"
          style={{ objectPosition: hero.objectPosition }}
          sizes="100vw"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-emerald-900" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/70 to-emerald-950/30" />
      <div className="relative mx-auto flex max-w-5xl flex-col justify-end px-6 py-16 sm:min-h-[520px] sm:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
          Why Jericho
        </p>
        <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Full courts. Broken nets. No lights.
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-emerald-100">
          Courts are almost always busy. Portable nets break often and stay broken until
          replaced. Park Board still calls this temporary.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/action" className="btn-primary">
            Email Park Board
          </Link>
          <a
            href="#see-it"
            className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            See the photos
          </a>
        </div>
      </div>
    </section>
  );
}
