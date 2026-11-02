import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { Glow, Illustration } from "@/components/Decoration";
import { PillLink } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Page not found",
};

const suggestions = [
  {
    href: "/events",
    label: "20–21 Feb 2027",
    title: (
      <>
        What’s <em className="text-red">on</em>
      </>
    ),
    cta: "All events →",
    card: "bg-pink-soft",
    labelColour: "text-red",
  },
  {
    href: "/map",
    label: "Festival guide",
    title: (
      <>
        Find your <em className="text-red">flock</em>
      </>
    ),
    cta: "Festival map →",
    card: "bg-mint-soft",
    labelColour: "text-[#1F5B53]",
  },
  {
    href: "/are-you-a-sheep",
    label: "Year of the Sheep",
    title: (
      <>
        Are you a <em>sheep?</em>
      </>
    ),
    cta: "Find your zodiac animal →",
    card: "bg-lime text-moss-deep",
    labelColour: "text-moss",
  },
  {
    href: "/traditions",
    label: "Traditions",
    title: (
      <>
        About the <em className="text-red">New Year</em>
      </>
    ),
    cta: "Myths, food & zodiac →",
    card: "bg-butter-band",
    labelColour: "text-[#8A5A10]",
  },
];

export default function NotFound() {
  return (
    <>
      <Band tone="hero" fade="long">
        <section className="flex flex-wrap items-center gap-x-12 gap-y-8 px-gutter pb-section pt-[clamp(48px,7vw,112px)]">
          <div className="flex min-w-0 max-w-[900px] flex-[999_1_560px] flex-col gap-6">
            <span className="label self-start rounded-full bg-pink px-3.5 py-1.5 tracking-[0.06em]">
              Error 404 · Page not found
            </span>
            <p
              aria-hidden="true"
              className="font-serif text-[clamp(120px,20vw,300px)] italic leading-[0.8] tracking-[-0.03em] text-red"
            >
              404
            </p>
            <h1 className="font-serif text-[clamp(44px,6vw,88px)] leading-[0.98] tracking-[-0.01em]">
              This sheep has <em className="text-red">wandered off</em>
            </h1>
            <p className="max-w-[560px] text-[clamp(19px,1.7vw,23px)] leading-[1.45] text-ink-muted">
              The page you’re looking for may have moved, been renamed, or never existed. Let’s get you back to the
              flock.
            </p>
            <div className="mt-2 flex flex-wrap gap-2.5">
              <PillLink href="/" variant="solid" size="lg">
                Back to home
              </PillLink>
              <PillLink href="/events" size="lg" className="!min-h-[50px]">
                Explore events
              </PillLink>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="relative aspect-square max-w-[400px] flex-[1_1_280px] mobile:hidden"
          >
            <Glow className="left-[6%] top-[14%] h-[62%] w-[66%] opacity-90 blur-[34px]" />
            <Glow variant={2} className="right-0 top-[34%] h-1/2 w-[52%] opacity-60 blur-[38px]" />
            <Glow variant={3} className="bottom-0 left-[18%] h-[36%] w-[48%] opacity-50 blur-[36px]" />
            <Illustration
              name="sheep-thought-bubble"
              className="absolute left-[12%] top-[4%] w-[76%]"
              sizes="300px"
              bob
            />
          </div>
        </section>
      </Band>

      <section
        aria-labelledby="lost-h"
        className="mx-gutter mb-[clamp(88px,11vw,168px)] flex flex-col gap-8 border-t border-ink pt-8"
      >
        <h2 id="lost-h" className="font-serif text-[clamp(36px,4vw,56px)] leading-none">
          Try one of <em className="text-red">these</em>
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-5">
          {suggestions.map(({ href, label, title, cta, card, labelColour }) => (
            <Link
              key={href}
              href={href}
              className={`flex min-h-60 flex-col justify-end gap-2.5 rounded-sm p-[clamp(24px,2.6vw,36px)] transition-transform duration-200 hover:-translate-y-[3px] motion-reduce:transition-none ${card}`}
            >
              <span className={`label ${labelColour}`}>{label}</span>
              <span className="font-serif text-[clamp(32px,3vw,44px)] leading-none">{title}</span>
              <span className="text-base">{cta}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
