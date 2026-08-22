"use client";

import Image from "next/image";
import { useState } from "react";
import type { SitePhoto } from "@/lib/site-photos";
import { photoSrc } from "@/lib/site-photos";

type CampaignPhotoProps = {
  photo: SitePhoto;
  priority?: boolean;
  className?: string;
  aspectClass?: string;
};

export function CampaignPhoto({
  photo,
  priority = false,
  className = "",
  aspectClass = "aspect-[4/3]",
}: CampaignPhotoProps) {
  const [failed, setFailed] = useState(false);
  const src = photoSrc(photo.file);

  if (failed) {
    return (
      <div
        className={`${aspectClass} flex items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-100 p-6 text-center ${className}`}
      >
        <p className="text-sm text-slate-500">
          Add <code className="text-xs">{photo.file}</code> to{" "}
          <code className="text-xs">public/photos/jericho/</code>
        </p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl ${aspectClass} ${className}`}>
      <Image
        src={src}
        alt={photo.alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition: photo.objectPosition }}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
