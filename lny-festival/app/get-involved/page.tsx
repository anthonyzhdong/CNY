import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { PillLink, Tag } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Get involved",
  description: "Register as a stallholder, performer or volunteer for the 2027 Lunar New Year Festival in Wellington.",
};

type Row = {
  label: string;
  colour: string;
  src: string;
  alt: string;
  position?: string;
  title?: ReactNode;
  text: ReactNode;
  meta?: string;
  action: ReactNode;
};

const opens = (
  <span className="inline-flex min-h-[46px] flex-none items-center rounded-full border border-ink px-[18px] text-sm">
    Opens [DATE]
  </span>
);

const rows: Row[] = [
  {
    label: "01 · Stallholders",
    colour: "bg-pink-soft",
    src: "/images/photos/buns.jpg",
    alt: "A stallholder lifts pan-fried buns from a griddle",
    title: "Asian Market",
    text: (
      <>
        Asian culture is rich and diverse, so we welcome a broad range of <strong className="font-medium">craft</strong>{" "}
        and <strong className="font-medium">food</strong> stallholders to share Asian arts, crafts and cuisine.
      </>
    ),
    meta: "[Venue] · [Date] · [Hours]",
    action: opens,
  },
  {
    label: "02 · Performers",
    colour: "bg-lilac",
    src: "/images/photos/ribbon-dance.jpg",
    alt: "A young dancer twirls a silk ribbon on stage",
    position: "50% 25%",
    title: (
      <>
        Take the <em className="text-red">stage</em>
      </>
    ),
    text: "The festival is a stage for local community groups. Dance, music, martial arts and more — show Wellington what your group can do.",
    action: opens,
  },
  {
    label: "03 · Volunteers",
    colour: "bg-mint",
    src: "/images/photos/dragon-dance.jpg",
    alt: "Volunteers carry a dragon on poles",
    text: "More than 3,500 volunteers give their time and skills each year. Be part of the team that makes the festival happen.",
    action: (
      <PillLink href="#" variant="solid" className="flex-none">
        Register interest
      </PillLink>
    ),
  },
];

export default function GetInvolved() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Registrations"
          textClass="flex-[999_1_560px] max-w-[900px] gap-7"
          title={
            <>
              Get <em className="text-red">involved</em>
            </>
          }
          intro="Help us make Lunar New Year a celebration to remember in the coolest little capital in the world."
          art={{ name: "sheep-scuffle", box: "aspect-square max-w-[400px] flex-[1_1_280px]", fullGlow: true }}
        >
          <span className="inline-flex items-center gap-2.5 self-start rounded-full bg-white px-[18px] py-2.5 text-[15px]">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#82C6AD]" />
            2027 registrations open [DATE]
          </span>
        </PageHero>
      </Band>

      <Band tone="butter">
        <ol className="mx-gutter border-t border-ink">
          {rows.map(({ label, colour, src, alt, position, title, text, meta, action }) => (
            <li key={label} className="flex flex-wrap items-center gap-x-12 gap-y-6 border-b border-line py-10">
              <Photo
                src={src}
                alt={alt}
                ratio="4/3"
                position={position}
                sizes="(max-width: 720px) 100vw, 400px"
                className="w-full min-w-[min(100%,400px)] max-w-[400px] flex-[1_1_280px]"
              />
              <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-3.5">
                <Tag className={colour}>{label}</Tag>
                {title && <h2 className="font-serif text-[clamp(34px,3.6vw,52px)] leading-none">{title}</h2>}
                <p className="max-w-[580px] text-[18px] leading-[1.55] text-ink-soft">{text}</p>
                {meta && <p className="font-mono text-[13px] uppercase text-ink-muted">{meta}</p>}
              </div>
              {action}
            </li>
          ))}
        </ol>
      </Band>

      {/* Not connected to a mailing list yet. */}
      <section className="relative mx-gutter my-[clamp(56px,7vw,104px)] flex flex-wrap items-center justify-between gap-5 rounded-sm bg-mint p-[clamp(32px,4vw,56px)]">
        <form className="relative z-10 flex max-w-[520px] flex-[1_1_340px] flex-wrap gap-2">
          <input
            type="email"
            aria-label="Email address"
            placeholder="you@example.com"
            className="min-h-12 min-w-0 flex-[1_1_200px] rounded-full bg-beige px-[18px] text-[15px]"
          />
          <button type="button" className="min-h-12 rounded-full bg-ink px-[22px] text-[15px] font-medium text-white">
            Notify me
          </button>
        </form>
        <Illustration
          name="firecracker"
          className="absolute left-[44%] top-[-96px] w-[165px] mobile:hidden"
          sizes="165px"
          bob={2}
        />
      </section>
    </>
  );
}
