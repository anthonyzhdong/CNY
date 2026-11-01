import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { FilmBrowser } from "@/components/FilmBrowser";

export const metadata: Metadata = {
  title: "Festival films",
  description: "Highlights, performances and behind-the-scenes films from past Lunar New Year Festivals in Wellington.",
};

export default function FestivalFilms() {
  return (
    <>
      <Band tone="hero">
        <section className="relative flex flex-col gap-6 px-gutter pb-[clamp(48px,6vw,88px)] pt-[clamp(64px,9vw,136px)]">
          <Link href="/gallery" className="label self-start tracking-[0.06em] text-ink-subtle">
            ← Gallery archive
          </Link>
          <h1 className="font-serif text-h1">
            Festival <em className="text-red">films</em>
          </h1>
          <p className="max-w-[560px] text-[clamp(19px,1.7vw,23px)] leading-[1.45] text-ink-muted">
            Highlights, performances and behind-the-scenes from past festivals. Films play right here.
          </p>
          <Illustration
            name="fortune-cookie"
            className="absolute right-[clamp(24px,8vw,140px)] top-20 w-[190px] mobile:hidden"
            sizes="190px"
            bob
          />
          <Illustration
            name="sheep-lying"
            className="absolute right-[clamp(220px,24vw,400px)] top-[230px] w-[150px] [animation-delay:-2s] mobile:hidden"
            sizes="150px"
            bob
          />
        </section>
      </Band>
      <FilmBrowser />
    </>
  );
}
