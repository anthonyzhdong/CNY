import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
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

// Reading `params` ties the page to one URL, so it renders behind Suspense to keep the shared shell instant.
export default function EventPage({ params }: PageProps<"/events/[slug]">) {
  return (
    <Suspense fallback={<Band tone="hero"><div className="min-h-[60vh]" /></Band>}>
      <EventDetail params={params} />
    </Suspense>
  );
}

async function EventDetail({ params }: Pick<PageProps<"/events/[slug]">, "params">) {
  const event = getEvent((await params).slug);
  if (!event) notFound();

  const day = event.day && dayNames[event.day];
  const words = event.name.split(" ");
  const lastWord = words.pop();

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
          {event.summary && <p className="text-[clamp(19px,1.7vw,23px)] leading-[1.45] text-ink-muted">{event.summary}</p>}
          <p className="font-mono text-sm uppercase text-red">
            {event.date} 2027 · {event.time} · {event.place}
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
            {event.schedule && (
              <ul className="flex flex-col border-t border-line">
                {event.schedule.map(({ time, what, detail }) => (
                  <li key={what} className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-3 last:border-b-0">
                    {time && <span className="w-[170px] flex-none font-mono text-[15px] uppercase text-red">{time}</span>}
                    <span className="flex min-w-0 flex-[1_1_240px] flex-col gap-1">
                      {detail ? <span className="text-ink">{what}</span> : what}
                      {detail && <span className="text-[17px] font-light leading-[1.55] text-ink-muted">{detail}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {!event.organiser && (
              <p>
                Performed by <strong className="font-medium">{event.performer ?? "[PERFORMING GROUP]"}</strong>.
              </p>
            )}
          </div>
          {(event.organiser || event.free) && (
            <dl className="flex max-w-[680px] flex-wrap gap-x-14 gap-y-4 border-t border-line pt-6">
              {event.organiser && (
                <div className="flex flex-col gap-1">
                  <dt className="label text-red">Organisers</dt>
                  <dd className="text-[19px] font-medium">{event.organiser}</dd>
                </div>
              )}
              {event.free && (
                <div className="flex flex-col gap-1">
                  <dt className="label text-red">Entry</dt>
                  <dd className="text-[19px] font-medium">
                    Free event{event.register && <span className="font-normal text-ink-muted">, registration required</span>}
                  </dd>
                </div>
              )}
            </dl>
          )}
          {event.goodToKnow && (
            <div className="flex max-w-[680px] flex-col gap-3.5 border-t border-line pt-6">
              <h2 className="font-serif text-[34px]">Good to know</h2>
              <ul className="flex flex-col gap-2.5 text-[17px] leading-[1.5] text-ink-soft">
                {event.goodToKnow.map((item, index) => (
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
          )}
        </div>

        <aside className="flex max-w-[420px] flex-[1_1_320px] flex-col gap-4">
          <div className="flex flex-col gap-[18px] rounded-sm bg-beige p-7">
            <dl className="flex flex-col gap-3.5">
              <div className="flex flex-col gap-1">
                <dt className="label text-red">When</dt>
                <dd className="text-[18px] font-medium">
                  {day ? `${day.long} ${day.date}` : event.date} 2027
                  <br />
                  {event.time}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="label text-red">Where</dt>
                <dd className="text-[18px] font-medium">
                  {event.place}
                  {event.period === "weekend" && ", Te Whanganui-a-Tara Wellington"}
                </dd>
              </div>
            </dl>
            {event.register && (
              <PillLink href={event.register} variant="solid" size="lg" className="!min-h-[50px] justify-center">
                Register your attendance
              </PillLink>
            )}
            {event.day && <AddToCalendar event={event} />}
            {event.period === "weekend" && (
              <PillLink href="/map" size="lg" className="!min-h-[50px] justify-center">
                See it on the festival map
              </PillLink>
            )}
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

      <Band tone="butter">
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
