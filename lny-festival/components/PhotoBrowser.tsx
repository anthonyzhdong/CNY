"use client";

import { useState } from "react";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { Lightbox } from "@/components/Lightbox";
import { Photo } from "@/components/Photo";
import { FilterPill } from "@/components/Pill";
import { galleryYears, photos } from "@/lib/media";

const categories = ["All", "Performances", "Food", "Crafts", "Crowd"];
const pageSize = 16;

export function PhotoBrowser({ intro }: { intro: React.ReactNode }) {
  const [category, setCategory] = useState("All");
  const [year, setYear] = useState("All years");
  const [visible, setVisible] = useState(pageSize);
  const [open, setOpen] = useState<number | null>(null);

  const matches = photos.filter(
    (photo) => (category === "All" || photo.cat === category) && (year === "All years" || photo.year === year),
  );

  function filterBy(update: () => void) {
    update();
    setVisible(pageSize);
  }

  return (
    <>
      <Band tone="hero">
        <div className="relative flex flex-col gap-10 px-gutter pb-[clamp(48px,6vw,88px)] pt-[clamp(64px,9vw,136px)]">
          {intro}
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-ink pt-6">
            <div role="group" aria-label="Filter by type" className="flex flex-wrap gap-2">
              {categories.map((value) => (
                <FilterPill key={value} active={category === value} onClick={() => filterBy(() => setCategory(value))}>
                  {value}
                </FilterPill>
              ))}
            </div>
            <div role="group" aria-label="Filter by year" className="flex flex-wrap gap-2">
              {["All years", ...galleryYears].map((value) => (
                <FilterPill key={value} active={year === value} onClick={() => filterBy(() => setYear(value))}>
                  {value}
                </FilterPill>
              ))}
            </div>
          </div>
          <p aria-live="polite" className="label text-ink-subtle">
            {matches.length} {matches.length === 1 ? "photo" : "photos"}
          </p>
          <Illustration
            name="red-packet"
            className="absolute right-[clamp(24px,8vw,140px)] top-[72px] w-[170px] mobile:hidden"
            sizes="170px"
            bob
          />
          <Illustration
            name="sheep-standing"
            className="absolute right-[clamp(200px,22vw,360px)] top-[210px] w-[120px] [animation-delay:-1.6s] mobile:hidden"
            sizes="120px"
            bob
          />
        </div>
      </Band>

      <section aria-label="Photos" className="px-gutter pb-[clamp(88px,11vw,168px)]">
        <div className="gap-x-5 [columns:4_260px] mobile:gap-x-3 mobile:[columns:2]">
          {matches.slice(0, visible).map((photo, index) => (
            <button
              key={`${photo.year}-${photo.alt}`}
              type="button"
              aria-label={`Open photo: ${photo.alt}`}
              onClick={() => setOpen(index)}
              className="group mb-5 block w-full cursor-zoom-in break-inside-avoid text-left mobile:mb-3"
            >
              <Photo
                src={photo.src}
                alt={photo.alt}
                ratio={photo.ratio}
                sizes="(max-width: 720px) 50vw, 25vw"
                className="transition-[filter] duration-200 group-hover:brightness-[0.92]"
              />
              <span className="block pt-2 font-mono text-[11px] uppercase text-ink-subtle">
                {photo.year} · {photo.cat}
              </span>
            </button>
          ))}
        </div>
        {matches.length > visible && (
          <div className="flex justify-center pt-10">
            <button
              type="button"
              onClick={() => setVisible(visible + pageSize)}
              className="min-h-12 rounded-full border border-ink px-7 text-[15px]"
            >
              Load more photos
            </button>
          </div>
        )}
      </section>

      <Lightbox photos={matches} index={open} onChange={setOpen} onClose={() => setOpen(null)} />
    </>
  );
}
