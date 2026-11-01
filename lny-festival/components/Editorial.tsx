import type { ComponentProps, ReactNode } from "react";
import { Illustration, type IllustrationName } from "@/components/Decoration";
import { Photo } from "@/components/Photo";
import { Tag } from "@/components/Pill";

type SectionHeadingProps = {
  number: string;
  colour: string;
  title: ReactNode;
  icon?: IllustrationName;
  /** Icon width class. */
  iconClass?: string;
};

export function SectionHeading({ number, colour, title, icon, iconClass = "" }: SectionHeadingProps) {
  return (
    <div className="flex max-w-80 flex-[1_1_220px] flex-col gap-2.5">
      <Tag className={colour}>{number}</Tag>
      <h2 className="font-serif text-[40px] leading-[1.05]">{title}</h2>
      {icon && <Illustration name={icon} className={`mt-7 mobile:hidden ${iconClass}`} sizes="300px" bob />}
    </div>
  );
}

type EditorialSectionProps = SectionHeadingProps & {
  padding?: string;
  children: ReactNode;
};

/** Numbered two-column section: heading and icon left, long-form copy right. */
export function EditorialSection({
  padding = "py-section",
  children,
  ...heading
}: EditorialSectionProps) {
  return (
    <section className={`relative flex flex-wrap gap-x-16 gap-y-6 px-gutter ${padding}`}>
      <SectionHeading {...heading} />
      <div className="flex min-w-0 max-w-[680px] flex-[999_1_520px] flex-col gap-5 text-[19px] leading-[1.6] text-ink-soft">
        {children}
      </div>
    </section>
  );
}

export function Subhead(props: ComponentProps<"h3">) {
  return <h3 className="mt-6 text-[22px] font-medium text-red" {...props} />;
}

type FigureProps = {
  src: string;
  alt: string;
  caption: string;
  position?: string;
  /** Gap class between the image and its caption. */
  gap?: string;
};

export function Figure({ src, alt, caption, position, gap = "gap-2.5" }: FigureProps) {
  return (
    <figure className={`mx-gutter flex flex-col ${gap}`}>
      <Photo src={src} alt={alt} ratio="21/9" position={position} sizes="100vw" />
      <figcaption className="label text-ink-subtle">{caption}</figcaption>
    </figure>
  );
}

export function InfoCard({ title, colour, children }: { title: string; colour: string; children: ReactNode }) {
  return (
    <div className={`flex flex-col gap-1.5 rounded-sm px-[22px] py-5 ${colour}`}>
      <span className="text-[18px] font-medium text-ink">{title}</span>
      <span className="text-base leading-[1.5] text-ink-soft">{children}</span>
    </div>
  );
}
