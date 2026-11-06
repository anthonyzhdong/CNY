import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Band } from "@/components/Band";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Tag } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Registrations",
  description: "Register as a stallholder, performer or volunteer for the 2027 Lunar New Year Festival in Wellington.",
};

type Session = { name: string; note?: string; details: string };

type Row = {
  label: string;
  colour: string;
  src: string;
  alt: string;
  position?: string;
  title?: ReactNode;
  text: ReactNode;
  sessions?: Session[];
  action?: ReactNode;
};

const openForm = (href: string) => (
  <a
    href={href}
    className="inline-flex min-h-[46px] flex-none items-center rounded-full border border-ink px-[18px] text-sm"
  >
    Open Form
  </a>
);

const rows: Row[] = [
  {
    label: "01 · Stallholders and food trucks",
    colour: "bg-pink-soft",
    src: "/images/photos/buns.jpg",
    alt: "A stallholder lifts pan-fried buns from a griddle",
    title: (
      <>
        Bring your <em className="text-red">flavour</em>
      </>
    ),
    text: (
      <>
        Asian culture is rich and diverse, so we welcome a broad range of <strong className="font-medium">craft</strong>{" "}
        and <strong className="font-medium">food</strong> stallholders, and{" "}
        <strong className="font-medium">food trucks</strong> to share Asian arts, crafts and cuisine.
      </>
    ),
    sessions: [
      { name: "Light up the night", note: "Food trucks only", details: "Frank Kitts Park · 20 February · 6–9.30pm" },
      { name: "A taste of Asia", details: "Shed 6 and TSB Arena · 21 February · 10am to 5pm" },
      {
        name: "A flock of fun by the waterfront",
        note: "Food trucks only",
        details: "Frank Kitts Park · 21 February · 11am to 5pm",
      },
    ],
    action: openForm("https://forms.gle/AGvNCrkiyX2emPyg7"),
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
    text: "The festival is a stage for local community groups. Dance, music, martial arts and more — show Wellington the colour and creativity of your culture.",
    sessions: [
      { name: "Light up the night", details: "Frank Kitts Park · 20 February · 6–9.30pm" },
      { name: "A taste of Asia", details: "TSB Arena · 21 February · 11am to 5pm" },
      { name: "A flock of fun by the waterfront", details: "Frank Kitts Park · 21 February · 11am to 5pm" },
    ],
    action: openForm("https://forms.gle/L75R4HTzDQ3JmMZ29"),
  },
  {
    label: "03 · Community events",
    colour: "bg-mint-soft",
    src: "/images/photos/zodiac-paintings.jpg",
    alt: "Hand-painted zodiac cards on red paper",
    title: (
      <>
        Let’s work <em className="text-red">together</em>
      </>
    ),
    text: (
      <>
        <p>Organising your own Lunar New Year celebration? We’d love to hear from you!</p>
        <p>
          Register your event to be included in the wider Wellington Lunar New Year programme and help us bring
          communities together through celebrations happening across the region.
        </p>
      </>
    ),
    action: openForm("https://forms.gle/yhxjQJbk5BjB77bN9"),
  },
];

export default function Registrations() {
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
          <p className="max-w-[560px] text-[clamp(16px,1.3vw,18px)] leading-[1.5] text-ink-subtle">
            Please note registration does not guarantee acceptance. Confirmation of participation will be advised
            mid-December.
          </p>
          <span className="inline-flex items-center gap-2.5 self-start rounded-full bg-white px-[18px] py-2.5 text-[15px]">
            <span aria-hidden="true" className="size-2.5 rounded-full bg-[#82C6AD]" />
            2027 registrations open
          </span>
        </PageHero>
      </Band>

      <Band tone="butter">
        <ol className="mx-gutter border-t border-ink">
          {rows.map(({ label, colour, src, alt, position, title, text, sessions, action }) => (
            <li key={label} className="flex flex-wrap items-center gap-x-12 gap-y-6 border-b border-line py-10 last:border-b-0">
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
                <div className="max-w-[580px] space-y-3 text-[18px] leading-[1.55] text-ink-soft">{text}</div>
                {sessions && (
                  <ul className="mt-2 flex flex-col gap-4">
                    {sessions.map(({ name, note, details }) => (
                      <li key={name} className="flex flex-col gap-1">
                        <p className="text-[16px]">
                          <strong className="font-medium">{name}</strong>
                          {note && <span className="text-ink-muted"> – {note}</span>}
                        </p>
                        <p className="font-mono text-[13px] uppercase text-ink-muted">{details}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {action}
            </li>
          ))}
        </ol>
      </Band>
    </>
  );
}
