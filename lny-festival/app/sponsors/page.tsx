import type { Metadata } from "next";
import Image from "next/image";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sponsors",
  description: "Thank you to the sponsors and supporters who make Wellington’s Lunar New Year Festival possible.",
};

// Logos: set `logo` to a path under /public (e.g. "/images/brand/golden-sun.png");
// tiles fall back to the sponsor name until a logo is supplied.
type Sponsor = { name: string; logo?: string };

const tiers: { title: string; sponsors: Sponsor[]; grid: string; tile: string }[] = [
  {
    title: "Principal sponsor",
    sponsors: [{ name: "Golden Sun", logo: "/images/brand/golden-sun.png" }],
    grid: "grid-cols-[minmax(0,420px)]",
    tile: "aspect-[3/2] bg-white p-8 text-[26px] font-medium",
  },
  {
    title: "Dragon sponsors",
    sponsors: [
      { name: "Four Winds Foundation", logo: "/images/brand/four-winds.png" },
      { name: "Ethnic Communities Development Fund", logo: "/images/brand/ethnic-communities.jpg" },
      { name: "Wellington City Council", logo: "/images/brand/wellington-city-council.png" },
      { name: "Venues Wellington", logo: "/images/brand/venues-wellington.png" },
      { name: "Stonewood Homes", logo: "/images/brand/stonewood-homes.png" },
    ],
    grid: "grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-5",
    tile: "aspect-[3/2] bg-white p-6 text-lg font-medium",
  },
  {
    title: "Lion sponsors",
    sponsors: [
      { name: "Armstrongs", logo: "/images/brand/armstrongs.png" },
      { name: "NW Group", logo: "/images/brand/nw-group.jpg" },
      { name: "The Embassy of the People’s Republic of China", logo: "/images/brand/embassy-prc.png" },
      { name: "Confucius Institute of Victoria University of Wellington", logo: "/images/brand/confucius-institute.jpg" },
      { name: "Chinese Poll Tax Heritage Trust", logo: "/images/brand/chinese-poll-tax-heritage-trust.png" },
      { name: "Oaks Hotels, Resorts & Suites Wellington", logo: "/images/brand/oaks-hotels.png" },
    ],
    grid: "grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4",
    tile: "aspect-video bg-white p-4 text-[15px]",
  },
  {
    title: "Supporters",
    sponsors: [
      { name: "Tantrum Productions", logo: "/images/brand/tantrum-productions.png" },
      { name: "Pyrostar International", logo: "/images/brand/pyrostar.jpeg" },
      { name: "Wellington Airport", logo: "/images/brand/wellington-airport.png" },
      { name: "Wellington Xiamen Association", logo: "/images/brand/wellington-xiamen-association.png" },
      { name: "Max Value Supermarket", logo: "/images/brand/max-value.jpeg" },
    ],
    grid: "grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-3",
    tile: "aspect-video border border-line bg-white p-3 text-sm",
  },
];

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
          intro="We thank our funders, sponsors, and supporters for their generous support of the festival through financial support and in-kind services."
          art={{
            name: "sheep-chopped",
            box: "aspect-square max-w-[340px] flex-[1_1_260px]",
            image: "left-[12%] top-[2%] w-[76%]",
          }}
        />
      </Band>

      <Band tone="butter">
        {tiers.map(({ title, sponsors, grid, tile }, i) => (
          <section
            key={title}
            className={`mx-gutter flex flex-col gap-[18px] border-t py-9 ${i === 0 ? "border-ink" : "border-line"}`}
          >
            <h2 className="font-serif text-4xl">{title}</h2>
            <div className={`grid ${grid}`}>
              {sponsors.map(({ name, logo }) => (
                <div
                  key={name}
                  className={`relative flex items-center justify-center rounded-sm text-center text-ink-muted ${tile}`}
                >
                  {logo ? (
                    <Image src={logo} alt={name} fill sizes="420px" className="object-contain p-[inherit]" />
                  ) : (
                    name
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
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
      </section>
    </>
  );
}
