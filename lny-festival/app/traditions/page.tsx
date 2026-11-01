import type { Metadata } from "next";
import Link from "next/link";
import { Band } from "@/components/Band";
import { Illustration, type IllustrationName } from "@/components/Decoration";
import { EditorialSection, Figure, InfoCard, Subhead } from "@/components/Editorial";
import { PageHero } from "@/components/PageHero";
import { Tag } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Traditions",
  description: "The start of the lunar calendar, a time for family reunions, and one of the most widely celebrated festivals in the world.",
};

const foods = [
  ["Dumplings", "bg-pink-soft", <>Shaped like old silver and gold ingots, for wealth.</>],
  ["Whole fish", "bg-mint-soft", <><em>Yú</em> sounds like “surplus”, for abundance all year.</>],
  ["Long noodles", "bg-lime-soft", <>For a long life, so never cut them.</>],
  ["Tangyuan", "bg-pink-soft", <>Sweet rice balls, round like a family reunited.</>],
  ["Nian gao", "bg-mint-soft", <>Sticky rice cake, for rising higher each year.</>],
  ["Mandarins", "bg-lime-soft", <>Golden fruit given for luck and good fortune.</>],
] as const;

const newYears = [
  ["Chūnjié", "bg-pink-soft", "China, Taiwan and Chinese communities worldwide: the Spring Festival."],
  ["Tết", "bg-mint-soft", "Vietnam: families share bánh chưng and visit the first guest of the year."],
  ["Seollal", "bg-lime-soft", "Korea: families bow to their elders and eat tteokguk, rice cake soup."],
  ["Tsagaan Sar", "bg-pink-soft", "Mongolia: the “White Moon”, a festival of visiting family and feasting."],
];

const greetings = [
  { text: "新年快乐", roman: "Xīnnián kuàilè", meaning: "Mandarin · Happy New Year" },
  { text: "恭喜發財", roman: "Gung hei fat choy", meaning: "Cantonese · Wishing you prosperity" },
  { text: "Chúc mừng năm mới", meaning: "Vietnamese · Happy New Year" },
  { text: "새해 복 많이 받으세요", roman: "Saehae bok mani badeuseyo", meaning: "Korean · Receive many blessings this year" },
];

function QuoteBand({
  colour,
  text,
  children,
}: {
  colour: string;
  text: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`relative mx-gutter rounded-sm px-[clamp(24px,6vw,120px)] py-[clamp(56px,7vw,104px)] ${colour}`}>
      <p className="relative mx-auto max-w-[900px] text-center font-serif text-[clamp(30px,3.6vw,52px)] italic leading-[1.15]">
        {text}
      </p>
      {children}
    </section>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-2 flex flex-col gap-2 rounded-sm bg-pink-soft px-7 py-6">
      <span className="label leading-[1.6] text-red">{title}</span>
      <p className="text-[18px]">{children}</p>
    </div>
  );
}

function BandIcon({ name, className, bob }: { name: IllustrationName; className: string; bob: 2 | 3 }) {
  return <Illustration name={name} className={`absolute mobile:hidden ${className}`} sizes="255px" bob={bob} />;
}

export default function Traditions() {
  return (
    <>
      <Band tone="hero">
        <PageHero
          label="Traditions"
          accent="bg-lime"
          textClass="flex-[999_1_560px] max-w-[960px] gap-7"
          title={
            <>
              About the <em className="text-red">Lunar New Year</em>
            </>
          }
          introClass="max-w-[600px]"
          intro="The start of the lunar calendar, a time for family reunions, and one of the most widely celebrated festivals in the world."
          art={{
            name: "sheep-thought-bubble",
            box: "aspect-square max-w-[380px] flex-[1_1_280px]",
            image: "left-[14%] top-0 w-[72%]",
            fullGlow: true,
          }}
        />
      </Band>

      <Figure
        src="/images/photos/dragon-dance.jpg"
        alt="Performers swing a long green and pink dragon on poles in front of a seated crowd"
        caption="Dragon dance, Wellington waterfront"
      />

      <EditorialSection number="01" colour="bg-mint" title="The festival" icon="chinese-knot" iconClass="w-[225px]">
        <p>
          Lunar New Year marks the beginning of the lunar calendar, which follows the cycle of the moon. It usually
          falls between mid-January and late February. Celebrated with great enthusiasm in China and embraced by
          communities around the world, it is one of the most widely observed festivals anywhere.
        </p>
        <p>
          It is a time for family reunions, joyful celebrations and welcoming good fortune. Families come together to
          honour their ancestors, share generous meals and exchange good wishes for the year ahead.
        </p>
      </EditorialSection>

      <QuoteBand
        colour="bg-lime text-moss-deep"
        text="Red decorations, symbols of prosperity and good luck, fill homes and streets with positive energy."
      >
        <BandIcon name="firecracker" className="right-[-10px] top-[-105px] w-[255px]" bob={3} />
      </QuoteBand>

      <EditorialSection number="02" colour="bg-pink" title="Myths & superstitions" icon="red-packet" iconClass="w-[300px]">
        <p>
          Some myths and superstitions carry special meaning at Lunar New Year. Each one helps make sure the year begins
          smoothly.
        </p>
        <Subhead>Hongbao — red envelopes</Subhead>
        <p>
          Red envelopes, or <em>hongbao</em> in Mandarin, are one of the most loved traditions. Decorated with gold
          designs and characters of good wishes, they are given to share blessings and goodwill. Red stands for luck,
          prosperity and happiness.
        </p>
        <Callout title="The legend of Sui">
          A demon called <em>Sui</em> frightened children at New Year — until people found it feared the colour red and
          loud noises. Money in red envelopes, and firecrackers, became a way to keep children safe.
        </Callout>
        <p>
          Today friends and colleagues exchange hongbao too. The amount matters less than the gesture: a wish for
          prosperity and good fortune.
        </p>
        <Subhead>Cleaning the house</Subhead>
        <p>
          Before New Year, families clean their homes from top to bottom to sweep away the bad luck of the past year — a
          practical and symbolic fresh start. A clean, calm home is believed to invite good luck and prosperity.
        </p>
        <Subhead>A few more for luck</Subhead>
        <p>Many families follow small customs in the first days of the new year, so nothing gets in the way of good fortune.</p>
        <div className="my-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-3">
          <InfoCard title="Do" colour="bg-lime-soft">
            Wear red, settle old debts, fill the rice jar, and greet everyone with good wishes.
          </InfoCard>
          <InfoCard title="Avoid" colour="bg-pink-soft">
            Sweeping on New Year’s Day (you might sweep the luck away), cutting your hair, breaking things and saying the
            number four, which sounds like “death”.
          </InfoCard>
        </div>
      </EditorialSection>

      <QuoteBand
        colour="bg-mint-soft text-[#1F3B37]"
        text="Welcome to the Year of the Fire Sheep — gentle, creative and kind."
      >
        <BandIcon name="chinese-knot" className="left-[-10px] top-[-110px] w-[200px]" bob={2} />
      </QuoteBand>

      <EditorialSection number="03" colour="bg-lilac" title="The zodiac" icon="sheep-standing" iconClass="w-[230px]">
        <p>
          Each lunar year is named after one of twelve animals: the Rat, Ox, Tiger, Rabbit, Dragon, Snake, Horse, Sheep,
          Monkey, Rooster, Dog and Pig. The cycle repeats every twelve years, and each animal is said to shape the
          personality of people born in its year.
        </p>
        <Callout title="The Great Race">
          Legend says the Jade Emperor held a race across a river to decide the order of the zodiac. The clever Rat rode
          on the Ox’s back and leapt ahead at the finish, which is why the Rat comes first.
        </Callout>
        <Subhead>2027 is the Year of the Sheep</Subhead>
        <p>
          The Year of the Sheep begins on 6 February 2027. People born in Sheep years are thought to be gentle, calm,
          creative and caring. The character <em>羊</em> (yáng) can mean sheep, goat or ram, so you’ll see all three in
          decorations.
        </p>
        <p>
          <Link href="/are-you-a-sheep" className="border-b border-current text-red">
            Find your animal: are you a sheep? →
          </Link>
        </p>
      </EditorialSection>

      <Figure
        src="/images/photos/buns.jpg"
        alt="Trays of golden pan-fried buns at a market stall"
        caption="Food hall, Lunar New Year Festival"
        gap="gap-3"
      />

      <Band tone="butter">
        <EditorialSection number="04" colour="bg-gold" title="Food for good fortune" icon="fortune-cookie" iconClass="w-[260px]">
          <p>
            The reunion dinner on New Year’s Eve is the most important meal of the year. Many dishes are chosen because
            their name or shape stands for something lucky.
          </p>
          <div className="my-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,200px),1fr))] gap-3">
            {foods.map(([title, colour, text]) => (
              <InfoCard key={title} title={title} colour={colour}>
                {text}
              </InfoCard>
            ))}
          </div>
        </EditorialSection>
      </Band>

      <EditorialSection number="05" colour="bg-mint" title="Lion & dragon dances" icon="firecracker" iconClass="w-[200px]">
        <p>
          Drums, cymbals and gongs announce the dancers long before you see them. The noise and colour chase away bad
          luck and welcome the new year.
        </p>
        <Subhead>The dragon</Subhead>
        <p>
          In Chinese culture the dragon is a symbol of wisdom, power and good fortune. A team of dancers carries the long
          dragon on poles, making it twist and ripple through the crowd. The longer the dragon, the more luck it is said
          to bring.
        </p>
        <Subhead>The lion</Subhead>
        <p>
          The lion dance is performed by two dancers, one as the head and one as the tail, moving in time with the drum.
          Lions visit homes and shops to scare off bad spirits, and often finish by “plucking the greens”: reaching for
          lettuce and a red envelope hung up high, a sign of a prosperous year ahead.
        </p>
      </EditorialSection>

      <Figure
        src="/images/photos/lion-dance.jpg"
        alt="A golden lion dancer performs in front of a crowd of families"
        caption="Lion dance, Te Whanganui-a-Tara Wellington"
        gap="gap-3"
      />

      <EditorialSection number="06" colour="bg-lime" title="Celebrated across Asia" icon="red-packet" iconClass="w-[230px]">
        <p>
          Lunar New Year isn’t only Chinese. Communities across Asia and around the world celebrate, each with their own
          name, food and customs.
        </p>
        <div className="my-2 grid grid-cols-[repeat(auto-fill,minmax(min(100%,260px),1fr))] gap-3">
          {newYears.map(([title, colour, text]) => (
            <InfoCard key={title} title={title} colour={colour}>
              {text}
            </InfoCard>
          ))}
        </div>
        <p>Here in Wellington, the festival brings all of these communities together.</p>
      </EditorialSection>

      <Band tone="mint">
        <EditorialSection number="07" colour="bg-pink" title="The Lantern Festival" icon="lantern" iconClass="w-[200px]">
          <p>
            Celebrations last fifteen days and end with the Lantern Festival, on the first full moon of the year. Streets
            glow with lanterns, families eat tangyuan together, and people try to solve riddles written on the lanterns.
          </p>
        </EditorialSection>
        <section
          aria-labelledby="greet-h"
          className="mx-gutter mb-section flex flex-col gap-8 rounded-sm bg-white p-[clamp(40px,5vw,72px)] mobile:p-6"
        >
          <h2 id="greet-h" className="font-serif text-[clamp(36px,4vw,56px)] leading-none">
            Say it like a <em className="text-red">local</em>
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-x-10 gap-y-8">
            {greetings.map(({ text, roman, meaning }) => (
              <div key={text} className="flex flex-col gap-1.5 border-t border-ink pt-4">
                <span className="font-serif text-[32px] leading-[1.1] text-red">{text}</span>
                {roman && <span className="text-[17px] font-medium">{roman}</span>}
                <span className="label text-ink-subtle">{meaning}</span>
              </div>
            ))}
          </div>
        </section>
      </Band>

      <Link
        href="/events"
        className="relative mx-gutter mb-[clamp(56px,6vw,88px)] flex flex-wrap items-center justify-between gap-3 border-t border-ink py-8 hover:text-ink"
      >
        <Tag className="!self-center bg-lilac">Next</Tag>
        <span className="font-serif text-[clamp(32px,4vw,56px)]">
          See what’s on at the <em className="text-red">festival</em> →
        </span>
      </Link>
    </>
  );
}
