import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCalendar } from "@/components/AddToCalendar";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { Photo } from "@/components/Photo";
import { BackLink, PillLink, Tag } from "@/components/Pill";
import { ShareLinks } from "@/components/ShareLinks";
import { dayNames, events, getEvent, relatedEvents, typeColours } from "@/lib/events";

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/events/[slug]">): Promise<Metadata> {
  const event = getEvent((await params).slug);
  if (!event) return {};

  return {
    title: event.name,
    description: event.lede ?? `${event.name} at the Lunar New Year Festival, ${event.when}. Free for everyone.`,
    openGraph: { images: [event.img] },
  };
}

const bulletColours = ["bg-pink", "bg-lime", "bg-mint"];

export default async function EventDetail({ params }: PageProps<"/events/[slug]">) {
  const event = getEvent((await params).slug);
  if (!event) notFound();

  const day = dayNames[event.day];
  const words = event.name.split(" ");
  const lastWord = words.pop();
  const goodToKnow = [
    ...(event.goodToKnow ?? []),
    "Outdoor event — [rain plan].",
    "[Accessibility details: step-free access, seating, accessible toilets].",
  ];

  return (
    <>
      <Band tone="hero">
        <section className="flex flex-col gap-5 px-gutter pb-8 pt-[clamp(32px,5vw,72px)]">
          <BackLink href="/events">← All events</BackLink>
          <div className="flex flex-wrap gap-2">
            <Tag className={typeColours[event.type]}>{event.type}</Tag>
            {event.tags?.map(({ label, colour }) => (
              <Tag key={label} className={colour}>
                {label}
              </Tag>
            ))}
          </div>
          <h1 className="font-serif text-h1">
            {words.join(" ")} <em className="text-red">{lastWord}</em>
          </h1>
          <p className="font-mono text-sm uppercase text-red">
            {day.short} Feb 2027 · [Time] · {event.place}
          </p>
        </section>
      </Band>

      <section className="flex flex-wrap items-start gap-x-14 gap-y-10 px-gutter pb-[clamp(56px,7vw,104px)]">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-8">
          <Photo
            src={event.img}
            alt={event.alt}
            ratio="16/9"
            position={event.imgPosition}
            sizes="(max-width: 720px) 100vw, 66vw"
            preload
          />
          <div className="flex max-w-[680px] flex-col gap-5 text-[19px] leading-[1.6] text-ink-soft">
            <p className="text-[22px] leading-[1.45] text-ink">{event.lede ?? "[Event description]"}</p>
            {event.description?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              Performed by <strong className="font-medium">{event.performer ?? "[PERFORMING GROUP]"}</strong>.
            </p>
          </div>
          <div className="flex max-w-[680px] flex-col gap-3.5 border-t border-line pt-6">
            <h2 className="font-serif text-[34px]">Good to know</h2>
            <ul className="flex flex-col gap-2.5 text-[17px] leading-[1.5] text-ink-soft">
              {goodToKnow.map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className={`mt-2 size-2 flex-none rounded-full ${bulletColours[index % bulletColours.length]}`}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="flex max-w-[420px] flex-[1_1_320px] flex-col gap-4">
          <div className="flex flex-col gap-[18px] rounded-sm bg-beige p-7">
            <dl className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <dt className="label text-red">When</dt>
                <dd className="text-[18px] font-medium">
                  {day.long} {day.date} 2027
                  <br />
                  [Start] – [Finish]
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="label text-red">Where</dt>
                <dd className="text-[18px] font-medium">{event.place}, Te Whanganui-a-Tara Wellington</dd>
              </div>
            </dl>
            <AddToCalendar event={event} />
            <PillLink href="/map" size="lg" className="!min-h-[50px] justify-center">
              See it on the festival map
            </PillLink>
          </div>
          <div className="relative flex flex-col gap-2 rounded-sm bg-pink-soft px-6 py-[22px]">
            <span className="label text-red">Share</span>
            <ShareLinks pillClass="bg-beige" />
            <Illustration
              name="red-packet"
              className="absolute right-[-14px] top-[-36px] w-[150px] mobile:hidden"
              sizes="150px"
              bob
            />
          </div>
        </aside>
      </section>

      <Band tone="butter" last>
        <section className="mx-gutter mb-[clamp(56px,6vw,88px)] flex flex-col gap-6 border-t border-ink pt-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-serif text-[clamp(32px,3.4vw,48px)]">
              You might also <em className="text-red">like</em>
            </h2>
            <PillLink href="/events" className="!px-[18px]">
              All events →
            </PillLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-x-6 gap-y-8">
            {relatedEvents(event).map(({ slug, img, when, name }) => (
              <Link key={slug} href={`/events/${slug}`} className="flex flex-col gap-2.5">
                <Photo src={img} alt="" ratio="4/3" sizes="(max-width: 720px) 100vw, 33vw" />
                <span className="label text-red">{when}</span>
                <span className="font-serif text-[28px] leading-[1.05]">{name}</span>
              </Link>
            ))}
          </div>
        </section>
      </Band>
    </>
  );
}
