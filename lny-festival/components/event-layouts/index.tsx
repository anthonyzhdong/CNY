import Link from "next/link";
import type { ComponentType } from "react";
import { Photo } from "@/components/Photo";
import { dayNames, typeColours, type Event } from "@/lib/events";

export type EventListProps = { events: Event[] };

/**
 * The event list layout is undecided (DESIGN.md §5). Every candidate from
 * reference/options/, plus the grid from reference/events.html, takes the same props: change `activeLayout` to swap.
 */
export const activeLayout: keyof typeof eventLayouts = "grid";

function TypeChip({ type }: { type: Event["type"] }) {
  return (
    <span className={`self-start rounded-[6px] px-2.5 py-1 text-[13px] font-medium ${typeColours[type]}`}>{type}</span>
  );
}

function ArrowBox() {
  return (
    <span aria-hidden="true" className="flex size-11 flex-none items-center justify-center rounded-lg border border-ink mobile:hidden">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

function byDay(events: Event[]) {
  return (["sat", "sun"] as const)
    .map((day) => ({ day, events: events.filter((event) => event.day === day) }))
    .filter((group) => group.events.length > 0);
}

function Grid({ events }: EventListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,300px),1fr))] gap-x-6 gap-y-10">
      {events.map((event) => (
        <Link key={event.slug} href={`/events/${event.slug}`} className="flex flex-col gap-3 text-ink">
          <div className="relative">
            <Photo src={event.img} alt={event.alt} ratio="4/3" sizes="(max-width: 720px) 100vw, 25vw" />
            <span
              className={`absolute left-3 top-3 rounded-full px-3 py-[5px] text-[13px] font-medium text-ink ${typeColours[event.type]}`}
            >
              {event.type}
            </span>
          </div>
          <span className="label text-red">{event.when}</span>
          <h2 className="font-serif text-[30px] leading-[1.05]">{event.name}</h2>
          <span className="text-[15px] text-ink-muted">{event.place}</span>
        </Link>
      ))}
    </div>
  );
}

function Timetable({ events }: EventListProps) {
  return (
    <div className="flex flex-col gap-14">
      {byDay(events).map(({ day, events }) => (
        <div key={day} className="flex flex-col">
          <h2 className="mb-3 font-serif text-[clamp(40px,4.4vw,64px)] leading-none">
            {dayNames[day].long} <em className="text-red">{dayNames[day].date}</em>
          </h2>
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="grid grid-cols-[minmax(0,300px)_110px_minmax(0,1fr)_44px] items-center gap-x-8 gap-y-4 border-t border-line py-5 mobile:grid-cols-1"
            >
              <Photo src={event.img} alt={event.alt} ratio="3/2" sizes="(max-width: 720px) 100vw, 300px" />
              <span className="font-mono text-[15px] text-red">[{event.time}]</span>
              <span className="flex min-w-0 flex-col gap-2">
                <span className="font-serif text-[clamp(26px,2.4vw,34px)] leading-[1.05]">{event.name}</span>
                <span className="flex flex-wrap items-center gap-x-3.5 gap-y-2">
                  <TypeChip type={event.type} />
                  <span className="text-[15px] text-ink-muted">{event.place}</span>
                </span>
              </span>
              <ArrowBox />
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

function TwoDayColumns({ events }: EventListProps) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,520px),1fr))] items-start gap-x-8 gap-y-12">
      {byDay(events).map(({ day, events }) => (
        <div key={day} className="flex flex-col gap-3.5">
          <div className="flex items-baseline justify-between gap-3 border-b border-ink pb-3.5">
            <h2 className="font-serif text-[clamp(40px,4vw,56px)] leading-none">{dayNames[day].long}</h2>
            <span className="label text-red">{dayNames[day].date}</span>
          </div>
          {events.map((event) => (
            <Link
              key={event.slug}
              href={`/events/${event.slug}`}
              className="flex flex-col gap-4 rounded-sm bg-beige px-3 pb-[22px] pt-3"
            >
              <Photo src={event.img} alt={event.alt} ratio="16/9" sizes="(max-width: 720px) 100vw, 50vw" />
              <span className="flex min-w-0 flex-col gap-2 px-2">
                <span className="font-mono text-[13px] text-red">[{event.time}]</span>
                <span className="font-serif text-[28px] leading-[1.05]">{event.name}</span>
                <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <TypeChip type={event.type} />
                  <span className="text-sm text-ink-muted">{event.place}</span>
                </span>
              </span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

function FeaturedPlusList({ events }: EventListProps) {
  const [featured, ...rest] = events;

  return (
    <>
      <Link
        href={`/events/${featured.slug}`}
        className="grid grid-cols-[minmax(0,2fr)_minmax(0,1fr)] items-end gap-x-12 gap-y-7 pb-12 mobile:grid-cols-1"
      >
        <Photo src={featured.img} alt={featured.alt} ratio="16/9" sizes="(max-width: 720px) 100vw, 66vw" />
        <span className="flex flex-col gap-[18px] pb-2">
          <span className="label text-ink-subtle">Don’t miss</span>
          <span className="font-serif text-[clamp(48px,5.6vw,84px)] leading-[0.95]">{featured.name}</span>
          <span className="font-mono text-sm text-red">
            {dayNames[featured.day].short} Feb · [{featured.time}] · {featured.place}
          </span>
          <span className="inline-flex min-h-12 items-center self-start rounded-full bg-pink px-6 text-[15px] font-medium text-ink">
            Event details →
          </span>
        </span>
      </Link>
      {rest.length > 0 && (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,600px),1fr))] gap-x-12 border-t border-ink">
          {rest.map((event) => (
            <Link key={event.slug} href={`/events/${event.slug}`} className="flex items-center gap-[22px] border-b border-line py-[22px]">
              <Photo src={event.img} alt="" ratio="4/3" sizes="(max-width: 720px) 46vw, 300px" className="w-[46%] flex-none" />
              <span className="flex min-w-0 flex-auto flex-col gap-2">
                <span className="font-mono text-[13px] text-red">
                  {dayNames[event.day].short} · [{event.time}]
                </span>
                <span className="font-serif text-[30px] leading-[1.05]">{event.name}</span>
                <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <TypeChip type={event.type} />
                  <span className="text-sm text-ink-muted">{event.place}</span>
                </span>
              </span>
              <ArrowBox />
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

function BigTypeIndex({ events }: EventListProps) {
  return (
    <div className="flex flex-col border-t border-ink">
      {events.map((event, index) => (
        <Link
          key={event.slug}
          href={`/events/${event.slug}`}
          className="group grid grid-cols-[260px_minmax(0,1fr)_auto] items-center gap-x-9 gap-y-4 border-b border-line py-5 mobile:grid-cols-1"
        >
          <Photo
            src={event.img}
            alt={event.alt}
            ratio="3/2"
            sizes="(max-width: 720px) 100vw, 260px"
            className="transition-transform duration-250 group-hover:-rotate-[1.5deg] group-hover:scale-[1.03] motion-reduce:transition-none"
          />
          <span className="flex min-w-0 flex-wrap items-baseline gap-x-6 gap-y-1.5">
            <span className="font-serif text-[clamp(40px,5.4vw,80px)] leading-[0.95] tracking-[-0.01em] group-hover:text-red">
              {event.name}
            </span>
            <span className="font-mono text-[13px] text-red">
              {dayNames[event.day].short} · [{event.time}] · {event.place}
            </span>
          </span>
          <span className="flex items-center gap-3.5">
            <span className="font-mono text-[13px] text-ink-subtle">{String(index + 1).padStart(2, "0")}</span>
            <TypeChip type={event.type} />
          </span>
        </Link>
      ))}
    </div>
  );
}

function AlternatingEditorial({ events }: EventListProps) {
  return (
    <div className="flex flex-col gap-8">
      {events.map((event, index) => (
        <Link
          key={event.slug}
          href={`/events/${event.slug}`}
          className={`flex flex-wrap items-stretch ${index % 2 ? "flex-row-reverse" : "flex-row"}`}
        >
          <Photo
            src={event.img}
            alt={event.alt}
            ratio="3/2"
            sizes="(max-width: 720px) 100vw, 60vw"
            className="min-w-0 flex-[3_1_620px]"
          />
          <span className="flex min-w-0 max-w-[480px] flex-[2_1_320px] flex-col justify-center gap-4 p-[clamp(24px,4vw,56px)]">
            <span className="flex items-center gap-3">
              <span className={`size-3.5 rounded-full ${typeColours[event.type]}`} />
              <span className="label text-ink-subtle">{event.type}</span>
            </span>
            <span className="font-serif text-[clamp(40px,4.4vw,64px)] leading-[0.95]">{event.name}</span>
            <span className="font-mono text-sm text-red">
              {dayNames[event.day].short} Feb · [{event.time}]
            </span>
            <span className="text-base text-ink-muted">{event.place}</span>
            <span className="self-start border-b border-current text-[15px]">Event details →</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

export const eventLayouts = {
  grid: Grid,
  timetable: Timetable,
  "two-day-columns": TwoDayColumns,
  "featured-plus-list": FeaturedPlusList,
  "big-type-index": BigTypeIndex,
  "alternating-editorial": AlternatingEditorial,
} satisfies Record<string, ComponentType<EventListProps>>;
