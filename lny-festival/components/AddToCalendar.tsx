"use client";

import { dayNames, type Event } from "@/lib/events";

/** Downloads an all-day .ics entry. Add DTSTART times once they're confirmed. */
export function AddToCalendar({ event }: { event: Event }) {
  function download() {
    const start = dayNames[event.day].start;
    const ics = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Lunar New Year Festival//EN",
      "BEGIN:VEVENT",
      `UID:${event.slug}-2027@lunar-new-year-festival`,
      `DTSTAMP:${new Date().toISOString().replace(/[-:]|\.\d{3}/g, "")}`,
      `DTSTART;VALUE=DATE:${start}`,
      `SUMMARY:${event.name} — Lunar New Year Festival`,
      `LOCATION:${event.place}\\, Wellington`,
      `URL:${window.location.href}`,
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    link.download = `${event.slug}.ics`;
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <button
      type="button"
      onClick={download}
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink text-[15px] font-medium text-white"
    >
      Add to calendar
    </button>
  );
}
