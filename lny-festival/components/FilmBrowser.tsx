"use client";

import { useState } from "react";
import { Band } from "@/components/Band";
import { FilmTile } from "@/components/FilmTile";
import { PlayIcon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import { FilterPill } from "@/components/Pill";
import { VideoModal } from "@/components/VideoModal";
import { films } from "@/lib/media";

const filters = ["All", "Highlights", "Performances", "Behind the scenes"];

export function FilmBrowser() {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const [featured, ...rest] = films;
  const matches = rest.filter((film) => filter === "All" || film.type === filter);

  return (
    <>
      <Band tone="butter">
        <section aria-label="Featured film" className="px-gutter pb-[clamp(72px,9vw,128px)]">
          <button
            type="button"
            aria-label={`Play: ${featured.title}`}
            onClick={() => setOpen(0)}
            className="group grid w-full grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-end gap-x-12 gap-y-6 text-left text-ink"
          >
            <span className="relative block">
              <Photo src={featured.thumb} alt="" ratio="16/9" sizes="(max-width: 720px) 100vw, 50vw" preload />
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -ml-11 -mt-11 flex size-[88px] items-center justify-center rounded-full bg-pink transition-transform duration-200 group-hover:scale-[1.08] motion-reduce:transition-none"
              >
                <PlayIcon size={30} />
              </span>
            </span>
            <span className="flex flex-col gap-3.5 pb-2">
              <span className="label self-start rounded-full bg-pink-soft px-3.5 py-1.5 tracking-[0.06em]">
                Featured · {featured.year}
              </span>
              <span className="font-serif text-[clamp(36px,4vw,60px)] leading-none">{featured.title}</span>
              <span className="max-w-[480px] text-[18px] leading-[1.5] text-ink-muted">{featured.blurb}</span>
              <span className="font-mono text-xs text-red">
                {featured.year} · {featured.type} · {featured.length}
              </span>
            </span>
          </button>
        </section>
      </Band>

      <section
        aria-label="All films"
        className="mx-gutter mb-[clamp(88px,11vw,168px)] flex flex-col gap-8 border-t border-ink pt-8"
      >
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <h2 className="font-serif text-[clamp(32px,3.4vw,48px)]">
            All <em className="text-red">films</em>
          </h2>
          <div role="group" aria-label="Filter films" className="flex flex-wrap gap-2">
            {filters.map((value) => (
              <FilterPill key={value} active={filter === value} onClick={() => setFilter(value)}>
                {value}
              </FilterPill>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,320px),1fr))] gap-x-7 gap-y-12">
          {matches.map((film, index) => (
            <FilmTile key={film.title} film={film} index={index + 1} onPlay={() => setOpen(films.indexOf(film))} />
          ))}
        </div>
      </section>

      <VideoModal
        film={open === null ? null : films[open]}
        onNext={() => setOpen((open! + 1) % films.length)}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
