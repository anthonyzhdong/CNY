import type { ComponentProps } from "react";

const fades = {
  default: "bg-hero-fade",
  home: "bg-hero-fade-home",
  fixed: "bg-hero-fade-fixed",
  long: "bg-hero-fade-long",
};

type BandProps = ComponentProps<"div"> & {
  tone: "hero" | "white" | "mint" | "butter";
  /** Hero only. Each value sets where the beige starts fading to white. */
  fade?: keyof typeof fades;
  /** Colour bands get their standard padding unless a page sets its own. */
  flush?: boolean;
};

const backgrounds = {
  white: "bg-white",
  mint: "bg-mint-band",
  butter: "bg-butter-band",
};

export function Band({ tone, fade = "default", flush, className = "", ...props }: BandProps) {
  const isColour = tone === "mint" || tone === "butter";
  const background = tone === "hero" ? `${fades[fade]} pt-header` : backgrounds[tone];
  const padding = isColour && !flush ? "pt-[clamp(48px,6vw,88px)] pb-[clamp(24px,3vw,48px)]" : "";

  return (
    <div
      className={`flow-root ${background} ${padding} ${className}`}
      {...props}
    />
  );
}
