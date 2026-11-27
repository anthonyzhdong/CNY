"use client";

import { useState } from "react";
import { activeLayout, eventLayouts } from "@/components/event-layouts";
import { FilterPill } from "@/components/Pill";
import { events, periods, type EventPeriod, type EventType } from "@/lib/events";

const types = ["All", "Performance", "Food", "Family", "Workshop"];

export function EventBrowser() {
  const [period, setPeriod] = useState<EventPeriod>("weekend");
  const [type, setType] = useState("All");

  const matches = events.filter(
    (event) => event.period === period && (type === "All" || event.types.includes(type as EventType)),
  );
  const EventList = eventLayouts[activeLayout];

  return (
    <>
      <section
        aria-label="Filters"
        className="mx-gutter flex flex-wrap justify-between gap-x-8 gap-y-3.5 border-b border-t border-b-line border-t-ink py-5"
      >
        <div role="group" aria-label="Filter by date" className="flex flex-wrap items-center gap-2">
          <span className="label mr-1 text-red">When</span>
          {periods.map(({ value, label, dates }) => (
            <FilterPill key={value} size="sm" active={period === value} onClick={() => setPeriod(value)}>
              {label} · {dates}
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
        ) : type === "All" ? (
          <div className="flex flex-col items-start gap-2 rounded-sm bg-beige p-[clamp(28px,3vw,44px)]">
            <p className="font-serif text-[30px] leading-[1.05]">Programme coming soon.</p>
            <p className="text-[17px] text-ink-muted">
              Community-led events across Wellington will be listed here closer to February.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4 rounded-sm bg-beige p-[clamp(28px,3vw,44px)]">
            <p className="font-serif text-[30px] leading-[1.05]">Nothing on for that combination.</p>
            <button
              type="button"
              onClick={() => setType("All")}
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
