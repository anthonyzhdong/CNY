"use client";

import { useState } from "react";
import { activeLayout, eventLayouts } from "@/components/event-layouts";
import { FilterPill } from "@/components/Pill";
import { events, type Event } from "@/lib/events";

const days: { label: string; value: Event["day"] | "both" }[] = [
  { label: "Both days", value: "both" },
  { label: "Sat 20", value: "sat" },
  { label: "Sun 21", value: "sun" },
];

const types = ["All", "Performance", "Food", "Family", "Workshop"];

export function EventBrowser() {
  const [day, setDay] = useState<(typeof days)[number]["value"]>("both");
  const [type, setType] = useState("All");

  const matches = events.filter(
    (event) => (day === "both" || event.day === day) && (type === "All" || event.type === type),
  );
  const EventList = eventLayouts[activeLayout];

  return (
    <>
      <section
        aria-label="Filters"
        className="mx-gutter flex flex-wrap justify-between gap-x-8 gap-y-3.5 border-b border-t border-b-line border-t-ink py-5"
      >
        <div role="group" aria-label="Filter by day" className="flex flex-wrap items-center gap-2">
          <span className="label mr-1 text-red">Day</span>
          {days.map(({ label, value }) => (
            <FilterPill key={value} size="sm" active={day === value} onClick={() => setDay(value)}>
              {label}
            </FilterPill>
          ))}
        </div>
        <div role="group" aria-label="Filter by type" className="flex flex-wrap items-center gap-2">
          <span className="label mr-1 text-red">Type</span>
          {types.map((value) => (
            <FilterPill key={value} size="sm" active={type === value} onClick={() => setType(value)}>
              {value}
            </FilterPill>
          ))}
        </div>
      </section>

      <section aria-label="Events" className="flex flex-col gap-5 px-gutter pb-[clamp(56px,6vw,96px)] pt-8">
        <p aria-live="polite" className="label text-ink-subtle">
          {matches.length} {matches.length === 1 ? "event" : "events"}
        </p>
        {matches.length > 0 ? (
          <EventList events={matches} />
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-sm bg-beige p-[clamp(28px,3vw,44px)]">
            <p className="font-serif text-[30px] leading-[1.05]">Nothing on for that combination.</p>
            <button
              type="button"
              onClick={() => {
                setDay("both");
                setType("All");
              }}
              className="inline-flex min-h-11 items-center rounded-full border border-ink px-5 text-[15px]"
            >
              Show all events
            </button>
          </div>
        )}
      </section>
    </>
  );
}
