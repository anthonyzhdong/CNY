import type { Metadata } from "next";
import Link from "next/link";
import { PhotoBrowser } from "@/components/PhotoBrowser";
import { PillLink } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Photo gallery",
  description: "Every festival, every lantern: photos from past Lunar New Year Festivals in Wellington.",
};

export default function PhotoGallery() {
  return (
    <>
      <PhotoBrowser
        intro={
          <div className="flex max-w-[900px] flex-col gap-6">
            <Link href="/gallery" className="label self-start tracking-[0.06em] text-ink-subtle">
              ← Gallery archive
            </Link>
            <h1 className="font-serif text-h1">
              Photo <em className="text-red">gallery</em>
            </h1>
            <p className="max-w-[560px] text-[clamp(19px,1.7vw,23px)] leading-[1.45] text-ink-muted">
              Every festival, every lantern. Tap a photo to see it full size.
            </p>
          </div>
        }
      />
      <section className="mx-gutter mb-[clamp(88px,11vw,168px)] flex flex-wrap items-center justify-between gap-6 rounded-sm bg-lime-soft p-[clamp(32px,4vw,56px)]">
        <div className="flex max-w-[620px] flex-col gap-2">
          <h2 className="font-serif text-[clamp(30px,3.2vw,44px)]">
            Got a great <em className="text-red">shot?</em>
          </h2>
          <p className="text-[17px] leading-[1.5] text-ink-muted">
            Tag <strong className="font-medium">#LunarNewYearWellington</strong> on Instagram and we might feature it
            here.
          </p>
        </div>
        <PillLink href="/gallery/films" variant="solid" size="lg" className="!font-normal">
          Watch the festival films →
        </PillLink>
      </section>
    </>
  );
}
