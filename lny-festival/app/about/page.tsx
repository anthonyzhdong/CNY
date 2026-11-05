import type { Metadata } from "next";
import { Band } from "@/components/Band";
import { Illustration } from "@/components/Decoration";
import { Figure } from "@/components/Editorial";
import { PageHero } from "@/components/PageHero";
import { Tag } from "@/components/Pill";

export const metadata: Metadata = {
  title: "About",
  description: "The Asian Events Trust brings the community together to deliver Wellington’s annual Lunar New Year celebration.",
};

const pillars = [
  { label: "Connection", colour: "bg-lime", text: "Bringing cultures and people together." },
  { label: "Community", colour: "bg-lilac", text: "Celebrating diversity, belonging and participation." },
  { label: "Creativity", colour: "bg-pink", text: "Showcasing traditional and contemporary artistic expression." },
];

const objectives = [
  { colour: "bg-lime", text: "Increase understanding of Lunar New Year traditions and provide opportunities for the wider community to engage with Asian arts and culture." },
  { colour: "bg-pink", text: "Enliven our streets, places and spaces with enriching arts and cultural experiences that increase understanding of Asian culture." },
  { colour: "bg-mint", text: "Create pride within the Asian community for their culture and engage youth, creating a pathway for Asian New Zealanders to be actively involved in preserving their cultural heritage." },
];

const timeline = [
  ["2001", "Inaugural Chinese New Year Festival held under the umbrella of the Wellington Chinese Sports and Cultural Centre"],
  ["2002", "Asian Events Trust founded as not-for-profit trust to organise new year celebrations"],
  ["2022", "Wellington’s much-loved Chinese New Year Festival rebranded to the Lunar New Year Festival"],
];

const people = [
  {
    name: "Linda Lim",
    role: "Founding Trustee · Chairperson",
    colour: "bg-pink-soft",
    bio: "Linda brings extensive experience in strategic relationships, stakeholder engagement, communications and event management, with a strong track record of delivering successful events and building meaningful partnerships across diverse communities. A founding Trustee and Chair of Asian Events Trust, she also leads the festival’s programme development, bringing together people, organisations and communities to deliver a vibrant and inclusive celebration.",
    remit: "Sponsorship, community liaison, media and publicity",
    email: "linda@asianeventstrust.co.nz",
  },
  {
    name: "Rita Tom",
    role: "Trustee · Finance Director",
    colour: "bg-mint-soft",
    bio: "A qualified Chartered Accountant with extensive experience in audit, management and financial reporting. Rita is a Trustee and Accountant for the Trust, and Finance Director for the festival. She also leads the management and delivery of the Asian Market, bringing strong financial and organisational expertise to the festival.",
    remit: "Funding and finances",
    email: "rita@asianeventstrust.co.nz",
  },
];

export default function About() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="About"
          accent="bg-mint"
          titleClass="max-w-[1000px] text-[clamp(40px,5.4vw,80px)] leading-[1.02] tracking-[-0.015em]"
          textClass="flex-[999_1_600px] gap-7"
          title={
            <>
              Asian Events Trust (AET) was established to provide a framework to{" "}
              <em className="text-red">bring the community together</em> to deliver an annual celebration of the Lunar
              New Year in Wellington.
            </>
          }
          art={{
            name: "sheep-tree",
            box: "aspect-[4/5] max-w-[340px] flex-[1_1_260px]",
            image: "left-[6%] top-0 w-[88%]",
            fullGlow: true,
          }}
        />
      </Band>

      <Figure
        src="/images/photos/lion-dance.jpg"
        alt="A golden lion dancer performs in front of a crowd of families"
        caption="Lion dance, Te Whanganui-a-Tara Wellington"
        position="50% 40%"
      />

      <section className="flex flex-col gap-14 px-gutter py-section">
        <div className="flex max-w-[960px] flex-col gap-5">
          <h2 className="font-serif text-[clamp(28px,3vw,42px)] leading-[1.2] text-ink-soft">
            A Pan-Asian festival of <em className="text-red">connection, community</em> and{" "}
            <em className="text-red">creativity</em>
          </h2>
          <p className="max-w-[760px] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-ink-soft">
            At its heart, the festival is about connection, community and creativity – creating opportunities for
            people of all ages and backgrounds to come together, share cultures, build understanding and experience the
            richness of Asia in Wellington’s own backyard.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-5">
          {pillars.map(({ label, colour, text }) => (
            <div key={label} className={`flex h-full flex-col gap-4 rounded-sm px-7 pb-8 pt-7 ${colour}`}>
              <Tag className="bg-white">{label}</Tag>
              <p className="text-[19px] leading-[1.5] text-ink">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <Band tone="butter">
        <section className="mx-gutter flex flex-wrap gap-x-16 gap-y-6 border-t border-line py-[clamp(48px,6vw,88px)]">
          <div className="flex max-w-80 flex-[1_1_220px] flex-col gap-5">
            <h2 className="font-serif text-[40px] leading-[1.05]">Our objectives</h2>
            <Illustration name="fortune-cookie" className="w-[210px] mobile:hidden" sizes="210px" bob={2} />
          </div>
          <ol className="flex min-w-0 flex-[999_1_520px] flex-col">
            {objectives.map(({ colour, text }, index) => (
              <li key={colour} className="flex items-start gap-5 border-b border-line py-6 text-[19px] leading-[1.5]">
                <span className={`label inline-flex size-8 flex-none items-center justify-center rounded-full ${colour}`}>
                  {`0${index + 1}`}
                </span>
                {text}
              </li>
            ))}
          </ol>
        </section>
      </Band>

      <section className="mx-gutter mb-[clamp(56px,6vw,88px)] grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        {timeline.map(([date, text]) => (
          <div key={date} className="flex flex-col gap-2 rounded-sm bg-beige p-6">
            <span className="font-mono text-xs text-red">{date}</span>
            <span className="text-[17px]">{text}</span>
          </div>
        ))}
      </section>

      <Band tone="mint">
        <section
          aria-labelledby="people"
          className="relative mx-gutter flex flex-col gap-10 border-t border-line pb-[clamp(88px,11vw,168px)] pt-[clamp(48px,6vw,88px)]"
        >
          <div className="flex max-w-[720px] flex-col gap-4">
            <h2 id="people" className="font-serif text-[clamp(40px,4.4vw,64px)] leading-none">
              Our <em className="text-red">people</em>
            </h2>
            <p className="text-[clamp(18px,1.5vw,21px)] leading-[1.5] text-ink-muted">
              The festival organisers are the trustees and advisors of Asian Events Trust, and produce the event outside of their
              paid employment.
            </p>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] gap-6">
            {people.map(({ name, role, colour, bio, remit, email }) => (
              <article key={name} className="flex flex-col gap-4 rounded-sm bg-white p-[clamp(24px,3vw,40px)]">
                <Tag className={colour}>{role}</Tag>
                <h3 className="font-serif text-4xl leading-none">{name}</h3>
                <p className="text-[17px] leading-[1.6] text-ink-soft">{bio}</p>
                <div className="mt-auto flex flex-col gap-2.5 border-t border-line pt-4">
                  <span className="text-sm text-ink-subtle">{remit}</span>
                  <a
                    href={`mailto:${email}`}
                    className="inline-flex min-h-11 items-center self-start rounded-full bg-ink px-5 text-[15px] text-white hover:text-white max-[380px]:px-4 max-[380px]:text-sm"
                  >
                    {email}
                  </a>
                </div>
              </article>
            ))}
          </div>
          <article className="flex flex-col gap-4 rounded-sm bg-white p-[clamp(24px,3vw,40px)]">
            <Tag className="bg-lilac">Trustee Advisors</Tag>
            <p className="max-w-[880px] text-[clamp(18px,1.5vw,21px)] leading-[1.5] text-ink-muted">
              Linda and Rita are supported by Trustee Advisors, to help oversee the direction of the festival and help
              from within their areas of expertise.
            </p>
            <div className="flex max-w-[880px] flex-col gap-4 text-[17px] leading-[1.6] text-ink-soft">
              <p>
                <em className="font-serif text-[1.4em] leading-none text-red">Jacqui Dong</em> and{" "}
                <em className="font-serif text-[1.4em] leading-none text-red">Nicky Lim</em> bring valuable skills and
                fresh perspectives to the festival through their respective areas of expertise. Jacqui, a software
                engineer based in London, oversees festival design, branding and visual assets, including the website,
                while Nicky, an optometrist, supports performer coordination and management, providing essential
                backstage and behind-the-scenes support to ensure the smooth delivery of quality stage programmes.
              </p>
              <p>
                Both have grown up with the festival, progressing from performers to valued contributors, bringing the
                insights and perspectives of a younger generation to help keep the festival evolving, relevant and fresh.
              </p>
            </div>
          </article>
        </section>
      </Band>
    </>
  );
}
