import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { Figure } from "@/components/Editorial";
import { BackLink, Tag } from "@/components/Pill";
import { ShareLinks } from "@/components/ShareLinks";
import { featuredNews, news } from "@/lib/news";

export function generateStaticParams() {
  return [{ slug: featuredNews.slug }];
}

export const metadata: Metadata = {
  title: featuredNews.title,
  description: featuredNews.summary,
  openGraph: { images: [featuredNews.img] },
};

const stats = [
  { value: "10,000", label: "people on the waterfront", colour: "bg-pink" },
  { value: "10 min", label: "fireworks over the harbour", colour: "bg-mint" },
];

export default async function MediaArticle({ params }: PageProps<"/media/[slug]">) {
  const { slug } = await params;
  if (slug !== featuredNews.slug) notFound();

  return (
    <>
      <Band tone="hero" fade="fixed">
        <article className="flex flex-col">
          <div className="relative flex max-w-[calc(1100px+2*var(--spacing-gutter))] flex-col gap-[22px] px-gutter pb-10 pt-[clamp(40px,6vw,96px)]">
            <BackLink href="/media">← All news</BackLink>
            <Tag className="bg-lime">Press release · {featuredNews.date}</Tag>
            <h1 className="font-serif text-[clamp(44px,6vw,88px)] leading-[0.98] tracking-[-0.01em]">
              Record-breaking Lunar New Year celebrations bring Asia to{" "}
              <em className="text-red">Wellington’s waterfront</em>
            </h1>
            <p className="max-w-[760px] text-[clamp(19px,1.7vw,23px)] leading-[1.45] text-ink-muted">
              Wellington welcomed the Year of the Fire Horse in spectacular style, with record crowds for the most
              diverse and inclusive programme in the festival’s 26-year history.
            </p>
          </div>

          <div className="relative">
            <Figure
              src={featuredNews.img}
              alt="Performers swing a dragon in front of a large crowd on the waterfront"
              caption="Dragon dance on the Wellington waterfront"
            />
            <Illustration
              name="firecracker"
              className="absolute right-[calc(var(--spacing-gutter)+32px)] top-[-144px] w-[225px] mobile:hidden"
              sizes="225px"
              bob
            />
          </div>

          <div className="flex flex-wrap gap-x-16 gap-y-8 px-gutter py-[clamp(56px,7vw,104px)]">
            <aside className="flex max-w-[300px] flex-[1_1_220px] flex-col gap-4">
              <div className="flex flex-col gap-2.5">
                {stats.map(({ value, label, colour }) => (
                  <div key={value} className={`flex flex-col rounded-sm px-5 py-[18px] ${colour}`}>
                    <span className="font-serif text-[44px] italic leading-none">{value}</span>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
              <span className="label mt-3 text-red">Share</span>
              <ShareLinks pillClass="border border-ink" />
            </aside>

            <div className="flex min-w-0 max-w-[700px] flex-[999_1_520px] flex-col gap-[22px] text-[19px] leading-[1.65] text-ink-soft">
              <p>
                Wellington has welcomed the Year of the Fire Horse in spectacular style, with record crowds turning out
                over the weekend for the most diverse and inclusive programme in the 26-year history of the Wellington
                Lunar New Year Festival, organised by the Asian Events Trust.
              </p>
              <p>
                Across the capital, communities came together in a vibrant celebration of culture, colour and
                connection, turning the city into a living showcase of Asia in Wellington’s backyard.
              </p>
              <p>
                Audiences enjoyed performances highlighting culture and Lunar New Year traditions from China, the
                Philippines, Vietnam, Thailand, Japan and Korea, joined by local performers — Asian and non-Asian alike
                — who brought their own horse-inspired performances to the stage.
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.1] text-ink">
                Galloping into the <em className="text-red">New Year</em>
              </h2>
              <p>
                Saturday night drew unprecedented numbers to the waterfront. Thunderous taiko drummers and mesmerising
                dragon dancers energised the crowds, alongside a special late-night opening at the Museum of New Zealand
                Te Papa Tongarewa.
              </p>
              <p>
                An estimated 10,000 people packed the waterfront — with many more watching across the CBD — for a
                10-minute fireworks display that lit up the harbour.
              </p>
              <p>
                Summer weather continued into Sunday for a record-breaking Festival Day: five hours of traditional and
                contemporary performances, a bustling Asian Market of arts, crafts and food, and “Horsing Around”
                activities for families.
              </p>
              <blockquote className="relative my-7 flex flex-col gap-3.5 rounded-sm bg-lime p-[clamp(28px,3vw,44px)] text-moss-deep">
                <p className="font-serif text-[clamp(28px,2.8vw,38px)] italic leading-[1.15]">
                  “This year has shown the strength of our diversity and the power of coming together to celebrate it.”
                </p>
                <cite className="text-[15px] not-italic">
                  Linda Lim, Chair of the Asian Events Trust and Programme Director
                </cite>
                <Illustration
                  name="red-packet"
                  className="absolute bottom-[-40px] right-[-40px] w-[165px] mobile:hidden"
                  sizes="165px"
                  bob={2}
                />
              </blockquote>
              <p>
                “It was fantastic to see Wellingtonians turn out in such extraordinary numbers and engage so deeply with
                every part of the festival,” says Linda. “To see so many communities share their culture so generously —
                and the wider public embrace it — is truly special.”
              </p>
              <p>Once again, the festival showed that when communities unite, the result is vibrant, welcoming and memorable.</p>
              <div className="mt-4 flex flex-col gap-2 rounded-sm bg-white px-6 py-[22px] text-base leading-[1.5]">
                <strong className="font-medium">Media enquiries</strong>
                <span>[MEDIA CONTACT NAME] · [PHONE] · [EMAIL]</span>
              </div>
            </div>
          </div>
        </article>
      </Band>

      <Band tone="mint" last>
        <section className="mx-gutter mb-[clamp(56px,6vw,88px)] flex flex-col gap-5 border-t border-ink pt-7">
          <Tag className="bg-lilac">More news</Tag>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-10 gap-y-6">
            {news.slice(0, 2).map(({ date, title, shortTitle }) => (
              <Link key={title} href="#" className="flex flex-col gap-2">
                <span className="font-mono text-xs uppercase text-red">{date}</span>
                <span className="font-serif text-[28px] leading-[1.1]">{shortTitle ?? title}</span>
              </Link>
            ))}
          </div>
        </section>
      </Band>
    </>
  );
}
