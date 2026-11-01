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
          intro="Performances, food, workshops and family fun across Te Whanganui-a-Tara Wellington. Every event is free. Times and venues confirmed closer to the date."
          art={{ name: "sheep-rainbow" }}
        />
      </Band>
      <EventBrowser />
    </>
  );
}
