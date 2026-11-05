"use client";

import { useState } from "react";
import { Illustration } from "@/components/Decoration";
import { PillLink } from "@/components/Pill";

const zones = [
  {
    name: "Cultural Entertainment",
    colour: "bg-pink",
    position: "left-[6%] top-[12%] w-[22%] h-[34%]",
    text: "Coming soon",
    items: [],
  },
  {
    name: "Craft Stalls",
    colour: "bg-lilac",
    position: "left-[6%] top-[58%] w-[20%] h-[28%]",
     text: "Coming soon",
    items: [],
  },
  {
    name: "Food Hall",
    colour: "bg-gold",
    position: "left-[34%] top-[12%] w-[24%] h-[30%]",
    text: "Coming soon",
    items: [],
  },
  {
    name: "Fun in the Park",
    colour: "bg-lime",
    position: "left-[34%] top-[56%] w-[26%] h-[30%]",
     text: "Coming soon",
    items: [],
  },
];

const key = [
  { label: "Performances", colour: "bg-pink" },
  { label: "Food", colour: "bg-gold" },
  { label: "Craft stalls", colour: "bg-lilac" },
  { label: "Family zone", colour: "bg-lime" },
];

const route = "border-[#D7A7CA] [border-style:dashed]";

export function ZoneMap() {
  const [selected, setSelected] = useState(0);
  const zone = zones[selected];
  const number = `0${selected + 1}`;

  return (
    <section className="flex flex-wrap items-start gap-10 px-gutter pb-[clamp(88px,11vw,168px)]">
      <div className="relative aspect-[16/11] min-w-0 flex-[999_1_640px] overflow-hidden rounded-sm bg-[#F6F1E4]">
        <div
          aria-hidden="true"
          className="wave absolute right-[-6%] top-[-10%] h-[130%] w-[44%] rounded-[48%_0_0_52%/40%_0_0_60%] bg-mint"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[8%] right-[6%] font-mono text-[clamp(10px,1vw,13px)] uppercase tracking-[0.2em] text-[#1F3B3A]"
        >
          Whanganui-a-Tara harbour
        </div>
        <div aria-hidden="true" className={`absolute left-[8%] right-[36%] top-[52%] h-0 border-t-[3px] ${route}`} />
        <div aria-hidden="true" className={`absolute bottom-[20%] left-[30%] top-[22%] w-0 border-l-[3px] ${route}`} />
        {zones.map(({ name, colour, position }, index) => (
          <button
            key={name}
            type="button"
            aria-pressed={selected === index}
            onClick={() => setSelected(index)}
            className={`absolute flex flex-col items-start justify-end gap-1 rounded-sm border-[3px] p-[clamp(8px,1.2vw,16px)] text-left mobile:p-1.5 text-ink transition-[transform,box-shadow] duration-200 hover:-translate-y-[3px] motion-reduce:transition-none ${position} ${colour} ${
              selected === index ? "border-ink shadow-[0_10px_24px_rgba(43,37,48,0.18)]" : "border-transparent"
            }`}
          >
            <span className="font-mono text-[clamp(10px,1vw,12px)] uppercase opacity-80">{`0${index + 1}`}</span>
            <span className="font-serif text-[clamp(16px,2vw,28px)] leading-none mobile:text-[13px]">{name}</span>
          </button>
        ))}
        <Illustration name="sheep-tree" className="pointer-events-none absolute left-[57%] top-[74%] w-[11%] mobile:top-[60%]" sizes="11vw" bob />
        <Illustration name="lantern" className="pointer-events-none absolute left-[1.5%] top-[51%] w-[10%]" sizes="10vw" bob={2} />
        <Illustration name="sheep-rainbow" className="pointer-events-none absolute left-[70%] top-[18%] w-[12%]" sizes="12vw" bob={3} />
        <Illustration name="chinese-knot" className="pointer-events-none absolute left-[24%] top-[4%] w-[9%]" sizes="9vw" bob={2} />
      </div>

      <aside className="flex max-w-[440px] flex-[1_1_320px] flex-col gap-4">
        <div aria-live="polite" className={`flex flex-col gap-3.5 rounded-sm p-7 ${zone.colour}`}>
          <span className="label">{number} · [Venue]</span>
          <h2 className="font-serif text-[40px] leading-none">{zone.name}</h2>
          <p className="text-[17px] leading-[1.5]">{zone.text}</p>
          <ul className="flex flex-col gap-1.5 text-[15px]">
            {zone.items.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span aria-hidden="true" className="size-1.5 flex-none rounded-full bg-ink" />
                {item}
              </li>
            ))}
          </ul>
          <PillLink href="/events" variant="solid" className="self-start px-[18px] !text-sm">
            See the programme
          </PillLink>
        </div>
        <div className="flex flex-col gap-2.5 rounded-sm bg-beige px-[22px] py-5 text-sm">
          <span className="label text-red">Key</span>
          <div className="flex flex-wrap gap-x-[18px] gap-y-2.5">
            {key.map(({ label, colour }) => (
              <span key={label} className="inline-flex items-center gap-2">
                <span aria-hidden="true" className={`size-3.5 rounded-sm ${colour}`} />
                {label}
              </span>
            ))}
            <span className="inline-flex items-center gap-2">
              <span aria-hidden="true" className={`w-[18px] border-t-[3px] ${route}`} />
              Walking route
            </span>
          </div>
        </div>
      </aside>
    </section>
  );
}
