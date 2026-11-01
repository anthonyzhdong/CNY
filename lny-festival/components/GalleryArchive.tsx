"use client";

import Link from "next/link";
import { useState } from "react";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { FilmTile } from "@/components/FilmTile";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { FilterPill, PillLink } from "@/components/Pill";
import { VideoModal } from "@/components/VideoModal";
import { films, galleryYears, photos } from "@/lib/media";

// Repeating tile spans for the editorial grid.
const tileSpans = [
  "col-span-2 row-span-2",
  "row-span-2",
  "",
  "",
  "col-span-2",
  "",
  "",
];

// The placeholder set has seven distinct images, so every year tab shows all of
// them, rotated per year, until real photos replace data/photos.json.
const tileImages = ["dragon-dance", "ribbon-dance", "zodiac-paintings", "buns", "lion-dance", "taiko", "fan-dance"];

function tilesFor(year: string) {
  const offset = galleryYears.indexOf(year);
  const rotated = [...tileImages.slice(offset), ...tileImages.slice(0, offset)];

  return rotated.map((image) => {
    const src = `/images/photos/${image}.jpg`;
    return photos.find((photo) => photo.src === src && photo.year === year) ?? photos.find((photo) => photo.src === src)!;
  });
}

const [firstFilm, ...otherFilms] = films.slice(0, 3);
const featuredFilms = [{ ...firstFilm, title: "Dragon dance highlights" }, ...otherFilms];

export function GalleryArchive() {
  const [year, setYear] = useState(galleryYears[0]);
  const [open, setOpen] = useState<number | null>(null);
  const tiles = tilesFor(year);

  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Archive"
          accent="bg-lilac"
          padding="pt-[clamp(64px,9vw,136px)] pb-[clamp(64px,8vw,120px)]"
          textClass="max-w-[900px] gap-6"
          sectionClass="items-end justify-between gap-x-12 gap-y-6"
          title={
            <>
              Gallery <em className="text-red">archive</em>
            </>
          }
          intro="Photos and films from past festivals."
          aside={
            <>
              <div role="group" aria-label="Choose a year" className="flex flex-wrap gap-2">
                {galleryYears.map((value) => (
                  <FilterPill key={value} active={year === value} onClick={() => setYear(value)}>
                    {value}
                  </FilterPill>
                ))}
              </div>
              <Illustration
                name="sheep-thought-bubble"
                className="absolute left-[58%] top-10 w-[130px] mobile:hidden"
                sizes="130px"
                bob
              />
            </>
          }
        />
      </Band>

      <section aria-label="Photos" className="flex flex-col gap-6 px-gutter pb-[clamp(88px,11vw,168px)]">
        <p aria-live="polite" className="label text-ink-subtle">
          {year} · photos
        </p>
        <div className="grid auto-rows-[clamp(160px,16vw,260px)] grid-cols-4 gap-5 [grid-auto-flow:dense] mobile:auto-rows-[150px] mobile:grid-cols-2">
          {tiles.map(({ src, alt }, index) => (
            <figure key={alt} className={`relative overflow-hidden rounded-sm ${tileSpans[index % tileSpans.length]}`}>
              <Photo src={src} alt={alt} ratio="auto" sizes="(max-width: 720px) 100vw, 50vw" className="!absolute inset-0" />
            </figure>
          ))}
        </div>
        <PillLink href="/gallery/photos" size="lg" className="mt-4 !min-h-[50px] self-center !px-7">
          See the full photo gallery →
        </PillLink>
      </section>

      <Band tone="mint" last>
        <section
          aria-label="Films"
          className="mx-gutter mb-[clamp(88px,11vw,168px)] flex flex-col gap-8 border-t border-ink pt-10"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
            <h2 className="font-serif text-[clamp(32px,3.4vw,48px)]">
              Festival <em className="text-red">films</em>
            </h2>
            <Link href="/gallery/films" className="border-b border-current text-[15px]">
              All films →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] gap-x-7 gap-y-10">
            {featuredFilms.map((film, index) => (
              <FilmTile key={film.title} film={film} index={index} onPlay={() => setOpen(index)} compact />
            ))}
          </div>
        </section>
      </Band>

      <VideoModal
        film={open === null ? null : featuredFilms[open]}
        onNext={() => setOpen((open! + 1) % featuredFilms.length)}
        onClose={() => setOpen(null)}
      />
    </>
  );
}
