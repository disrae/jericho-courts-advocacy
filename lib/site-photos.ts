import photos from "@/data/site-photos.json";

export type SitePhoto = (typeof photos)[number];

export const sitePhotos: SitePhoto[] = photos;

export function photoSrc(file: string): string {
  return `/photos/jericho/${file}`;
}

export function getHeroPhoto(): SitePhoto | undefined {
  return sitePhotos.find((p) => p.layout === "hero");
}

export function getWidePhoto(): SitePhoto | undefined {
  return sitePhotos.find((p) => p.layout === "wide");
}

export function getGalleryPhotos(): SitePhoto[] {
  return sitePhotos.filter((p) => p.layout === "grid" || p.layout === "feature");
}

export const campaignStrategy = [
  {
    step: "1",
    title: "Show what commissioners won't see",
    detail: "Photos of broken nets, full courts, and dark evenings — on the site and in deputations.",
  },
  {
    step: "2",
    title: "Make the ask impossible to punt",
    detail: "Permanent designation, resurfacing, fixed nets, lighting pilot — named in every email.",
  },
  {
    step: "3",
    title: "Get a budget line, not another strategy",
    detail: "Jericho is proven demand. Push for capital funding in the next Park Board cycle.",
  },
  {
    step: "4",
    title: "Bring allies, not noise",
    detail: "Align with VPA's MORE campaign. Tennis stays. Neighbours get a lighting plan.",
  },
] as const;
