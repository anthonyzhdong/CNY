import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { PillLink } from "@/components/Pill";
import { ZoneMap } from "@/components/ZoneMap";

export const metadata: Metadata = {
  title: "Festival map",
  description: "Find your flock: explore the festival zones and download printable maps and programmes.",
};

const printables = [
  { title: "Cultural Entertainment programme", colour: "bg-pink-soft", label: "text-red" },
  { title: "Fun in the Park map & programme", colour: "bg-lime-soft", label: "text-[#649276]" },
  { title: "Craft stalls map", colour: "bg-[#F3E7EF]", label: "text-red" },
  { title: "Food hall map", colour: "bg-[#FBEBCF]", label: "text-[#8A5A10]" },
];

export default function FestivalMap() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Festival guide"
          accent="bg-mint"
          padding="pt-[clamp(64px,9vw,136px)] pb-[clamp(56px,7vw,104px)]"
          sectionClass="items-end justify-between gap-x-12 gap-y-6"
          title={
            <>
              Find your <em className="text-red">flock</em>
            </>
          }
          intro="Tap a zone on the map to see what’s happening there. Layout shown is based on 2026 — the 2027 map is coming soon."
          aside={
            <PillLink href="#" variant="solid" size="lg">
              Download printable map (PDF)
            </PillLink>
          }
        />
      </Band>

      <ZoneMap />

      <Band tone="butter">
        <section className="mx-gutter mb-[clamp(88px,11vw,168px)] flex flex-col gap-8 border-t border-ink pt-10">
          <h2 className="font-serif text-[clamp(32px,3.4vw,48px)]">
            Printable maps &amp; <em className="text-red">programmes</em>
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
            {printables.map(({ title, colour, label }) => (
              <Link key={title} href="#" className={`flex min-h-[184px] flex-col gap-2 rounded-sm p-[22px] ${colour}`}>
                <span className={`label ${label}`}>PDF</span>
                <span className="text-xl font-medium">{title}</span>
              </Link>
            ))}
          </div>
        </section>
      </Band>
    </>
  );
}
