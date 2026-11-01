import type { Metadata } from "next";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { EditorialSection } from "@/components/Editorial";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Are you a sheep?",
  description: "Find your zodiac animal and meet the gentle, creative sign leading us into 2027.",
};

const animals = [
  ["Rat", "1972 · 1984 · 1996 · 2008 · 2020"],
  ["Ox", "1973 · 1985 · 1997 · 2009 · 2021"],
  ["Tiger", "1974 · 1986 · 1998 · 2010 · 2022"],
  ["Rabbit", "1975 · 1987 · 1999 · 2011 · 2023"],
  ["Dragon", "1976 · 1988 · 2000 · 2012 · 2024"],
  ["Snake", "1977 · 1989 · 2001 · 2013 · 2025"],
  ["Horse", "1978 · 1990 · 2002 · 2014 · 2026"],
  ["Sheep", "1979 · 1991 · 2003 · 2015 · 2027"],
  ["Monkey", "1980 · 1992 · 2004 · 2016"],
  ["Rooster", "1981 · 1993 · 2005 · 2017"],
  ["Dog", "1982 · 1994 · 2006 · 2018"],
  ["Pig", "1983 · 1995 · 2007 · 2019"],
];

export default function AreYouASheep() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Year of the Sheep · 2027"
          accent="bg-lime"
          padding="pt-[clamp(64px,9vw,136px)] pb-section"
          title={
            <>
              Are you a <em className="text-red">sheep?</em>
            </>
          }
          intro="Find your zodiac animal and meet the gentle, creative sign leading us into 2027."
          art={{ name: "sheep-standing", image: "left-[12%] top-[4%] w-[76%]" }}
        />
      </Band>

      <section aria-labelledby="zodiac-heading" className="mx-gutter flex flex-col gap-10">
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2 id="zodiac-heading" className="font-serif text-[clamp(40px,4.6vw,64px)] leading-none">
            Find your <em className="text-red">animal</em>
          </h2>
          <p className="max-w-[420px] text-sm leading-[1.5] text-ink-muted">
            Look for your birth year. Born in January or early February? You may belong to the sign before — the new
            year starts with the new moon.
          </p>
        </div>
        <ol className="grid grid-cols-[repeat(auto-fill,minmax(170px,1fr))] gap-x-6 gap-y-8 mobile:grid-cols-2">
          {animals.map(([name, years], index) => {
            const number = String(index + 1).padStart(2, "0");

            return name === "Sheep" ? (
              <li
                key={name}
                className="relative col-span-2 flex min-h-[264px] flex-col justify-between gap-2.5 overflow-hidden rounded-sm bg-pink px-6 py-[22px]"
              >
                <Illustration
                  name="sheep-standing"
                  className="absolute right-[4%] top-[8%] w-[38%] max-w-[170px]"
                  sizes="170px"
                  bob
                />
                <span className="font-mono text-xs">{number} · This year</span>
                <span className="flex flex-col gap-1.5">
                  <span className="font-serif text-[52px] italic leading-[0.95]">{name}</span>
                  <span className="max-w-[60%] font-mono text-xs leading-[1.5]">{years}</span>
                </span>
              </li>
            ) : (
              <li
                key={name}
                className="flex min-h-[265px] flex-col justify-between gap-2.5 border-t border-ink px-5 py-[22px]"
              >
                <span className="font-mono text-xs text-red">{number}</span>
                <span className="flex flex-col gap-1.5">
                  <span className="font-serif text-4xl leading-none">{name}</span>
                  <span className="font-mono text-xs leading-[1.5] text-ink-muted">{years}</span>
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <Band tone="mint">
        <EditorialSection number="01" colour="bg-mint" title="The lunar calendar" padding="pt-[clamp(104px,12vw,192px)]">
          <p>
            Lunar New Year isn’t on the same date each year. It follows the lunar calendar, so the new year begins with
            the new moon and the date changes annually — usually between mid-January and late February.
          </p>
        </EditorialSection>
      </Band>

      <EditorialSection
        number="02"
        colour="bg-pink"
        title="Year of the Sheep"
        icon="sheep-lying"
        iconClass="!mt-6 w-[170px]"
        padding="pb-[clamp(104px,12vw,192px)] pt-[clamp(88px,11vw,168px)]"
      >
        <p className="font-serif text-[30px] leading-[1.2] text-ink">6 February 2027 to 25 January 2028</p>
        <p>
          2027 is the year of the Fire Sheep (sometimes called the Goat). The five elements — Wood, Fire, Earth, Metal
          and Water — rotate through the zodiac, and this year the Sheep is paired with Fire, adding warmth and spark to
          a famously gentle sign.
        </p>
        <p>[2027 festival tie-in copy — how the Sheep’s qualities come to life across the programme.]</p>
        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-4 text-ink">
          <div className="flex flex-col gap-2 rounded-sm bg-lime-soft p-[22px]">
            <span className="label leading-[1.6] text-moss">Years of the Sheep</span>
            <span className="text-[17px] leading-[1.5]">1931, 1943, 1955, 1967, 1979, 1991, 2003, 2015, 2027</span>
          </div>
          <div className="flex flex-col gap-2 rounded-sm bg-pink-soft p-[22px]">
            <span className="label leading-[1.6] text-red">Characteristics</span>
            <span className="text-[17px] leading-[1.5]">
              Gentle, creative and kind-hearted. Sheep value calm, harmony and the company of close friends.
            </span>
          </div>
        </div>
      </EditorialSection>
    </>
  );
}
