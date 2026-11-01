import type { ReactNode } from "react";
import { Glow, Illustration, type IllustrationName } from "@/components/Decoration";

type HeroArt = {
  name: IllustrationName;
  /** Size of the art box: flex-basis, max-width and aspect ratio. */
  box?: string;
  /** Position of the illustration within the box. */
  image?: string;
  /** Some heroes carry a fourth, smaller glow. */
  fullGlow?: boolean;
};

type PageHeroProps = {
  label: string;
  accent?: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Max-width class for the intro paragraph. */
  introClass?: string;
  /** Replaces the default heading scale, e.g. for About's long statement. */
  titleClass?: string;
  /** Section padding, which varies from page to page. */
  padding?: string;
  textClass?: string;
  sectionClass?: string;
  art?: HeroArt;
  /** Extra content under the intro. */
  children?: ReactNode;
  /** Content opposite the text, e.g. a CTA or year tabs. */
  aside?: ReactNode;
};

/** Mono pill, big serif H1 and intro, with optional art over the pink glow. */
export function PageHero({
  label,
  accent = "bg-pink",
  title,
  intro,
  introClass = "max-w-[560px]",
  titleClass = "text-h1",
  padding = "pt-[clamp(56px,8vw,128px)] pb-[clamp(48px,6vw,88px)]",
  textClass = "flex-[999_1_560px] max-w-[900px] gap-6",
  sectionClass = "items-center gap-8",
  art,
  children,
  aside,
}: PageHeroProps) {
  return (
    <section className={`relative flex flex-wrap px-gutter ${padding} ${sectionClass}`}>
      <div className={`relative flex min-w-0 flex-col ${textClass}`}>
        <span className={`label self-start rounded-full px-3.5 py-1.5 tracking-[0.06em] ${accent}`}>{label}</span>
        <h1 className={`font-serif ${titleClass}`}>{title}</h1>
        {intro && <p className={`text-[clamp(19px,1.7vw,23px)] leading-[1.45] text-ink-muted ${introClass}`}>{intro}</p>}
        {children}
      </div>
      {art && (
        <div
          aria-hidden="true"
          className={`relative mobile:hidden ${art.box ?? "aspect-square max-w-[360px] flex-[1_1_260px]"}`}
        >
          <Glow className="left-[6%] top-[14%] h-[62%] w-[66%] opacity-90 blur-[34px]" />
          <Glow variant={2} className="right-0 top-[34%] h-1/2 w-[52%] opacity-60 blur-[38px]" />
          <Glow variant={3} className="bottom-0 left-[18%] h-[36%] w-[48%] opacity-50 blur-[36px]" />
          {art.fullGlow && <Glow variant={2} className="left-[34%] top-[4%] h-[30%] w-[34%] opacity-55 blur-[30px]" />}
          <Illustration
            name={art.name}
            className={`absolute ${art.image ?? "left-[8%] top-[4%] w-[84%]"}`}
            sizes="340px"
            bob
          />
        </div>
      )}
      {aside}
    </section>
  );
}
