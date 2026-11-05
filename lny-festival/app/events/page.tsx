import type { Metadata } from "next";
import { Band } from "@/components/Band";
import { EventBrowser } from "@/components/EventBrowser";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Events",
  description: "Performances, food, workshops and family fun across Te Whanganui-a-Tara Wellington. Every event is free.",
};

export default function Events() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="20–21 February 2027"
          padding="pt-[clamp(56px,8vw,112px)] pb-[clamp(32px,4vw,56px)]"
          title={
            <>
              What’s <em className="text-red">on</em>
            </>
          }
          art={{ name: "sheep-rainbow" }}
        >
          <div className="flex max-w-[640px] flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="label text-ink-subtle">20–21 February | The festival weekend</p>
              <p className="font-serif text-[clamp(24px,2.2vw,30px)] leading-[1.2]">
                Two days. One city. A world of celebration!
              </p>
              <p className="text-[clamp(17px,1.4vw,19px)] leading-[1.5] text-ink-muted">
                Experience the colour, flavour and energy of Asia as Wellington’s CBD and waterfront come alive with
                food, music, performances, cultural traditions from across Asia and a spectacular fireworks display.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="label text-ink-subtle">1–28 February | Lunar New Year (LNY) across Wellington</p>
              <p className="text-[clamp(17px,1.4vw,19px)] leading-[1.5] text-ink-muted">
                The celebrations extend beyond festival weekend, with community-led events and experiences bringing
                Wellington together throughout February.
              </p>
            </div>
          </div>
        </PageHero>
      </Band>
      <EventBrowser />
    </>
  );
}
