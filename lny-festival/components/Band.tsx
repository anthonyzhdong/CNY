import type { ComponentProps } from "react";

type BandProps = ComponentProps<"div"> & {
  tone: "hero" | "white" | "mint" | "butter";
  /** Hero only. `home` holds the beige longer; `fixed` suits very tall heroes. */
  fade?: "default" | "home" | "fixed";
  /** Colour bands get their standard padding unless a page sets its own. */
  flush?: boolean;
  /** Set on a colour band that ends the page: the footer then drops its top border. */
  last?: boolean;
};

const backgrounds = {
  white: "bg-white",
  mint: "bg-mint-band",
  butter: "bg-butter-band",
};

const fades = {
  default: "bg-hero-fade",
  home: "bg-hero-fade-home",
  fixed: "bg-hero-fade-fixed",
};

export function Band({ tone, fade = "default", flush, last, className = "", ...props }: BandProps) {
  const isColour = tone === "mint" || tone === "butter";
  const background = tone === "hero" ? `${fades[fade]} pt-header` : backgrounds[tone];
  const padding = isColour && !flush ? "pt-[clamp(48px,6vw,88px)] pb-[clamp(24px,3vw,48px)]" : "";

  return (
    <div
      data-last-band={last || undefined}
      className={`flow-root ${background} ${padding} ${className}`}
      {...props}
    />
  );
}
