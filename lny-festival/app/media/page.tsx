import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { PillLink, Tag } from "@/components/Pill";
import { featuredNews, news } from "@/lib/news";

export const metadata: Metadata = {
  title: "News & media",
  description: "News, press releases and media enquiries for Wellington’s Lunar New Year Festival.",
};

export default function Media() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Media"
          accent="bg-lilac"
          titleClass="text-h1 tracking-normal"
          textClass="gap-6"
          sectionClass="items-end justify-between gap-x-12 gap-y-6"
          padding="pt-[clamp(56px,8vw,128px)] pb-[clamp(40px,5vw,72px)]"
          title={
            <>
              News &amp; <em className="text-red">media</em>
            </>
          }
          aside={
            <Illustration
              name="sheep-rainbow"
              className="absolute left-[52%] top-12 w-40 mobile:hidden"
              sizes="160px"
              bob
            />
          }
        />
      </Band>

      <Link
        href={`/media/${featuredNews.slug}`}
        className="mx-gutter flex flex-wrap items-center gap-x-12 gap-y-6 rounded-sm bg-pink-soft p-[clamp(20px,2.4vw,32px)] hover:text-ink"
      >
        <Photo
          src={featuredNews.img}
          alt="Performers swing a dragon in front of a large crowd"
          ratio="16/10"
          sizes="(max-width: 720px) 100vw, 720px"
          className="w-full min-w-[min(100%,720px)] max-w-[720px] flex-[1_1_420px]"
        />
        <div className="flex min-w-0 flex-[1_1_360px] flex-col gap-4 p-2">
          <Tag className="bg-beige text-red">Latest · {featuredNews.date}</Tag>
          <h2 className="font-serif text-[clamp(34px,3.6vw,52px)] leading-[1.02]">{featuredNews.title}</h2>
          <p className="text-[18px] leading-[1.55] text-ink-muted">{featuredNews.summary}</p>
          <span className="text-[15px] underline underline-offset-[3px]">Read article</span>
        </div>
      </Link>

      <Band tone="butter">
        <ul className="mx-gutter mt-10 border-t border-ink">
          {news.map(({ date, title, summary, img }) => (
            <li key={title} className="border-b border-line">
              {/* [Article links TBC] */}
              <Link href="#" className="flex flex-wrap items-center gap-x-10 gap-y-4 py-[26px]">
                <span className="flex-[0_0_140px] font-mono text-[13px] uppercase text-red">{date}</span>
                <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-1.5">
                  <h3 className="font-serif text-[30px] leading-[1.1]">{title}</h3>
                  <p className="text-base leading-[1.5] text-ink-muted">{summary}</p>
                </div>
                <div className="relative aspect-[3/2] w-[180px] flex-none overflow-hidden rounded-sm">
                  <Image src={img} alt="" fill sizes="180px" className="object-cover" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative mx-gutter mb-[clamp(56px,6vw,88px)] flex items-center justify-end gap-4 pt-7">
          <Illustration name="fortune-cookie" className="w-[120px] mobile:hidden" sizes="120px" bob={2} />
          <PillLink href="#">Older posts →</PillLink>
        </div>
      </Band>

      <section
        aria-labelledby="media-enq"
        className="relative mx-gutter mb-[clamp(88px,10vw,152px)] flex flex-wrap items-center justify-between gap-x-12 gap-y-6 rounded-sm bg-mint-soft p-[clamp(32px,4vw,56px)]"
      >
        <div className="flex min-w-0 flex-[999_1_420px] flex-col gap-2.5">
          <span className="label text-red">For journalists</span>
          <h2 id="media-enq" className="font-serif text-[clamp(32px,3.4vw,48px)] leading-[1.05]">
            Media <em className="text-red">enquiries</em>
          </h2>
          <p className="max-w-[560px] text-[17px] leading-[1.5] text-ink-soft">
            For interviews, images and festival information, contact [MEDIA CONTACT NAME] at [EMAIL] or [PHONE].
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <PillLink href="#" variant="solid" size="lg">
            Email the media team
          </PillLink>
          <PillLink href="#" size="lg">
            Download press kit
          </PillLink>
        </div>
        <Illustration
          name="red-packet"
          className="absolute right-[28%] top-[-84px] w-36 mobile:hidden"
          sizes="144px"
          bob
        />
      </section>
    </>
  );
}
