import type { Metadata } from "next";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { PillLink } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Thank you to the sponsors and supporters who make Wellington’s Lunar New Year Festival possible.",
};

// [Sponsor logos TBC]: tiles show names until real logos are supplied.
const principal = [
  { label: "Principal sponsor", name: "[Golden Sun logo]", size: "text-[26px]" },
  { label: "Organised by", name: "[Asian Events Trust logo]", size: "text-[22px]" },
  { label: "Supported by", name: "[Wellington City Council logo]", size: "text-[22px]" },
];

const sponsors = [
  "Four Winds Foundation",
  "Chinese Poll Tax Heritage Trust",
  "Ministry for Ethnic Communities",
  "NW Group",
  "Embassy of the People’s Republic of China",
  "Confucius Institute, Victoria University of Wellington",
];

const supporters = ["Good Company Arts", "PyroStar International", "Tantrum Productions", "Max Value", "WellingtonNZ", "Te Papa"];

const tile = "box-content flex aspect-video items-center justify-center rounded-sm text-center text-ink-muted";

export default function Sponsors() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Sponsors & partners"
          accent="bg-gold"
          padding="pt-[clamp(56px,8vw,112px)] pb-[clamp(40px,5vw,72px)]"
          title={
            <>
              Thank <em className="text-red">you</em>
            </>
          }
          introClass="max-w-[580px]"
          intro="The festival happens because of the generous organisations who back it. A big thank you to all of our sponsors and supporters."
          art={{
            name: "sheep-chopped",
            box: "aspect-square max-w-[340px] flex-[1_1_260px]",
            image: "left-[12%] top-[2%] w-[76%]",
          }}
        />
      </Band>

      <Band tone="butter">
        <section className="mx-gutter grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6 border-t border-ink py-9">
          {principal.map(({ label, name, size }) => (
            <div key={label} className="flex flex-col gap-3.5">
              <span className="label text-red">{label}</span>
              <div
                className={`box-content flex aspect-[3/2] items-center justify-center rounded-sm bg-white p-6 text-center font-medium ${size}`}
              >
                {name}
              </div>
            </div>
          ))}
        </section>
        <section className="mx-gutter flex flex-col gap-[18px] border-t border-line py-9">
          <h2 className="font-serif text-4xl">Sponsors</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
            {sponsors.map((name) => (
              <div key={name} className={`${tile} bg-white p-4 text-[15px]`}>
                {name}
              </div>
            ))}
          </div>
        </section>
        <section className="mx-gutter flex flex-col gap-[18px] border-t border-line py-9">
          <h2 className="font-serif text-4xl">Supporters of the festival</h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3">
            {supporters.map((name) => (
              <div key={name} className={`${tile} border border-line p-3 text-sm`}>
                {name}
              </div>
            ))}
          </div>
        </section>
      </Band>

      <section className="relative mx-gutter mb-[clamp(56px,6vw,88px)] mt-[clamp(32px,4vw,56px)] flex flex-wrap items-center justify-between gap-5 rounded-sm bg-lime p-[clamp(32px,4vw,56px)] text-moss-deep">
        <div className="flex max-w-[620px] flex-col gap-2.5">
          <h2 className="font-serif text-[clamp(32px,3.4vw,48px)] leading-[1.05]">
            Become a <em>sponsor</em>
          </h2>
          <p className="text-[17px] leading-[1.5]">
            Reach tens of thousands of festival-goers and support one of Wellington’s most-loved community celebrations.
          </p>
        </div>
        <PillLink href="#" variant="solid" size="lg" className="!px-6">
          Get the sponsorship pack
        </PillLink>
      </section>
    </>
  );
}
