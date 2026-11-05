import Image from "next/image";
import Link from "next/link";
import { Band } from "@/components/Band";
import { Glow, Illustration } from "@/components/Decoration";
import { Photo } from "@/components/Photo";
import { PillLink, Tag } from "@/components/Pill";
import { featuredNews, news } from "@/lib/news";

const greetings = [
  ["Chúc Mừng Năm Mới", "vi"],
  ["Saehae bog manh-i bad euseyo", "ko-Latn"],
  ["Sawasdee Pee Mai", "th-Latn"],
  ["Selamat tahun baru", "ms"],
  ["Maligayang Bagong Taon", "fil"],
];

const featured = [
  { href: "/events/lion-dance", when: "[Sat 20 February· 6-9:30pm]", name: "Light up the night", src: "/images/photos/lion-dance.jpg", alt: "performances, pop-up activities, lanterns and fireworks" },
  { href: "/events/dragon-dance", when: "[Sat 21 February· 10am - 5pm]", name: "A taste of Asia", src: "/images/photos/buns.jpg", alt: "cuisine, crafts and cultural entertainment", offset: true },
  { href: "/events/asian-market", when: "[Sun 21 February· 11am - 4:30pm]", name: "A flock of fun by the waterfront", src: "/images/photos/dragon-dance.jpg", alt: "family activities, performances and food trucks" },
];

const moments = [
  { src: "/images/photos/taiko.jpg", alt: "Taiko drummers" },
  { src: "/images/photos/ribbon-dance.jpg", alt: "Ribbon dancer", position: "50% 25%" },
  { src: "/images/photos/fan-dance.jpg", alt: "Fan dancers" },
  { src: "/images/photos/zodiac-paintings.jpg", alt: "Zodiac paintings" },
];

export default function Home() {
  return (
    <>
      <Band tone="hero" fade="home">
        <section aria-label="Festival flock" className="relative aspect-[5/2] w-full mobile:aspect-[4/3]">
          <Glow className="left-[10%] top-[18%] h-[64%] w-[34%] opacity-75 blur-[60px]" />
          <Glow variant={2} className="left-[40%] top-[30%] h-[56%] w-[28%] opacity-50 blur-[64px]" />
          <Glow variant={3} className="right-[8%] top-[10%] h-[60%] w-[30%] opacity-60 blur-[60px]" />
          <Illustration
            name="sheep-standing"
            alt="A woolly sheep standing"
            className="absolute left-[6%] top-[8%] w-[22%] mobile:left-[2%] mobile:w-[42%]"
            sizes="(max-width: 720px) 42vw, 22vw"
            bob
            preload
          />
          <Illustration
            name="sheep-rainbow"
            alt="Two sheep riding a rainbow"
            className="absolute left-[30%] top-[2%] w-[20%] mobile:left-[56%] mobile:w-[40%]"
            sizes="(max-width: 720px) 40vw, 20vw"
            bob={2}
            preload
          />
          <Illustration
            name="sheep-scuffle"
            alt="Two sheep in a playful scuffle"
            className="absolute left-[52%] top-[18%] w-[20%] mobile:left-[28%] mobile:top-[44%] mobile:w-[42%]"
            sizes="(max-width: 720px) 42vw, 20vw"
            bob={3}
          />
          <Illustration
            name="sheep-tree"
            alt="Sheep growing on a pink tree"
            className="absolute left-[74%] top-[4%] w-[17%] mobile:hidden"
            sizes="17vw"
            bob={4}
          />
          <Illustration
            name="flower"
            className="absolute left-[90%] top-[52%] w-[8%] mobile:hidden"
            sizes="8vw"
            bob={2}
          />
        </section>

        <section className="relative mt-[-8vw] px-gutter mobile:mt-2">
          <h1>
            <Image
              src="/images/brand/festival-logo.png"
              alt="20–21 February 2027 · Lunar New Year Festival · Sponsored by Golden Sun"
              width={2000}
              height={202}
              sizes="100vw"
              className="h-auto w-full"
              preload
            />
          </h1>
        </section>

        <section className="flex flex-wrap items-end justify-between gap-x-12 gap-y-6 px-gutter pb-[clamp(56px,7vw,96px)] pt-[clamp(40px,5vw,72px)]">
          <div className="flex min-w-0 max-w-[820px] flex-[999_1_560px] flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <p className="text-[17px]" lang="zh-Latn">Xīn nián kuài lè, Gōng xǐ fā cái</p>
              <ul className="flex flex-col gap-0.5 text-sm text-ink-muted">
                {greetings.map(([text, lang]) => (
                  <li key={text} lang={lang}>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <p className="font-serif text-[clamp(30px,3.4vw,48px)] leading-[1.12]">
              Welcome the <em className="text-red">Year of the Sheep</em> with food, music, performances and cultural traditions from across Asia in
              Te Whanganui-a-Tara Wellington.

            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <PillLink href="/events" variant="solid" size="lg">
              Explore events
            </PillLink>
            <PillLink href="/map" size="lg">
              Plan your visit
            </PillLink>
            <PillLink href="#" size="lg">
              Register for 2027 festival
            </PillLink>
          </div>
        </section>
      </Band>

      <Band tone="white">
        <section
          aria-labelledby="home-events"
          className="flex flex-col gap-10 px-gutter pb-[clamp(56px,7vw,96px)] pt-section"
        >
          <div className="flex flex-wrap items-end justify-between gap-5">
            <h2 id="home-events" className="max-w-[900px] font-serif text-h2-lg">
              20-21 February - <em className="text-red">festival weekend.</em> Two days. One city. A world of celebration
            </h2>
            <PillLink href="/events">All events →</PillLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-x-6 gap-y-10">
            {featured.map(({ href, when, name, src, alt, offset }) => (
              <Link
                key={href}
                href={href}
                className={`flex flex-col gap-2.5 ${offset ? "mt-[clamp(0px,6vw,88px)]" : ""}`}
              >
                <Photo src={src} alt="" ratio="4/5" sizes="(max-width: 720px) 100vw, 33vw" />
                <span className="label text-red">{when}</span>
                <span className="font-serif text-[30px] leading-[1.05]">{name}</span>
                <span className="text-[15px] text-ink-muted">{alt}</span>
              </Link>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="home-news"
          className="relative mx-gutter mb-section flex flex-col gap-8 border-t border-ink pt-[clamp(32px,4vw,48px)]"
        >
          <Illustration
            name="red-packet"
            className="absolute right-[22%] top-[-84px] w-[140px] mobile:hidden"
            sizes="140px"
            bob={3}
          />
          <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <div className="flex flex-col gap-3.5">
              <h2 id="home-news" className="font-serif text-h2 leading-none">
                News &amp; <em className="text-red">articles</em>
              </h2>
            </div>
            <PillLink href="/media">All news →</PillLink>
          </div>
          <div className="flex flex-wrap items-stretch gap-x-12 gap-y-8">
            <Link
              href={`/media/${featuredNews.slug}`}
              className="flex min-w-0 flex-[999_1_520px] flex-col gap-[18px] rounded-sm bg-pink-soft p-[clamp(20px,2.4vw,32px)] hover:text-ink"
            >
              <Photo
                src={featuredNews.img}
                alt="Performers swing a dragon in front of a large crowd"
                ratio="16/9"
                sizes="(max-width: 720px) 100vw, 60vw"
              />
              <Tag className="bg-beige text-red">Latest · {featuredNews.date}</Tag>
              <h3 className="font-serif text-[clamp(30px,3vw,44px)] leading-[1.04]">{featuredNews.title}</h3>
              <p className="max-w-[640px] text-[17px] leading-[1.55] text-ink-muted">{featuredNews.summary}</p>
              <span className="mt-auto text-[15px] underline underline-offset-[3px]">Read article</span>
            </Link>
            <ul className="flex min-w-0 flex-[1_1_360px] flex-col">
              {news.map(({ date, title, img }, i) => (
                <li key={title} className="border-b border-line">
                  {/* [Article links TBC] */}
                  <Link href="#" className={`flex items-start gap-5 ${i === 0 ? "pb-6" : "py-6"}`}>
                    <span className="flex min-w-0 flex-auto flex-col gap-2">
                      <span className="label text-red">{date}</span>
                      <span className="font-serif text-[26px] leading-[1.1]">{title}</span>
                    </span>
                    <span className="relative aspect-square w-28 flex-none overflow-hidden rounded-sm">
                      <Image src={img} alt="" fill sizes="112px" className="object-cover" />
                    </span>
                  </Link>
                </li>
              ))}
             
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5 px-gutter pb-section">
          <Link
            href="/are-you-a-sheep"
            className="relative flex min-h-[calc(320px+2*clamp(28px,3vw,44px))] flex-col justify-end gap-2.5 overflow-hidden rounded-sm bg-lime p-[clamp(28px,3vw,44px)]"
          >
            <Illustration
              name="sheep-lying"
              className="absolute right-[6%] top-[8%] w-[34%]"
              sizes="(max-width: 720px) 34vw, 17vw"
              bob
            />
            <span className="label text-moss">Year of the Sheep</span>
            <span className="font-serif text-[clamp(36px,3.6vw,52px)] leading-none text-moss-deep">
              Are you a <em>sheep?</em>
            </span>
            <span className="text-base text-moss-deep">Find your zodiac animal →</span>
          </Link>
          <Link
            href="/map"
            className="relative flex min-h-[calc(320px+2*clamp(28px,3vw,44px))] flex-col justify-end gap-2.5 overflow-hidden rounded-sm bg-pink-soft p-[clamp(28px,3vw,44px)]"
          >
            <Illustration
              name="firecracker"
              className="absolute right-[2%] top-[-4%] w-[52%] max-w-[330px] -scale-x-100"
              sizes="330px"
              bob={2}
            />
            <span className="label text-red">Festival guide</span>
            <span className="font-serif text-[clamp(36px,3.6vw,52px)] leading-none">
              Find your <em className="text-red">flock</em>
            </span>
            <span className="text-base">Maps &amp; programmes →</span>
          </Link>
        </section>
      </Band>

      <Band tone="butter" flush className="pt-[clamp(48px,6vw,88px)]">
        <section aria-labelledby="home-moments" className="mx-gutter mb-section flex flex-col gap-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="home-moments" className="font-serif text-h2">
              Festival <em className="text-red">moments</em>
            </h2>
            <PillLink href="/gallery">Gallery archive →</PillLink>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3">
            {moments.map(({ src, alt, position }) => (
              <Photo key={src} src={src} alt={alt} ratio="1/1" position={position} sizes="(max-width: 720px) 50vw, 25vw" />
            ))}
          </div>
        </section>
      </Band>

      <Band tone="white" className="pt-[clamp(48px,6vw,88px)]">
        <section
          aria-labelledby="home-about"
          className="mx-gutter flex flex-wrap gap-x-16 gap-y-8 border-t border-ink pb-[clamp(56px,6vw,96px)] pt-[clamp(40px,5vw,72px)]"
        >
          <h2 id="home-about" className="max-w-80 flex-[1_1_220px] font-serif text-[40px] leading-[1.05]">
            About the festival
          </h2>
          <div className="flex min-w-0 max-w-[760px] flex-[999_1_520px] flex-col gap-6">
            <p className="text-[19px] leading-[1.6] text-ink-soft">
              Presented by the Asian Events Trust, the festival began as Wellington’s much-loved Chinese New Year
              Festival and became the Lunar New Year Festival in 2022 - a vibrant, inclusive, city-wide Pan-Asian festival
              of connection, culture and creativity, bringing people together to celebrate tradition, contemporary
              expression and Wellington’s creative spirit.
            </p>
            
          </div>
        </section>
      </Band>
    </>
  );
}
