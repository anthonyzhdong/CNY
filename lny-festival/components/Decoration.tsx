import Image from "next/image";

const assets = {
  flower: ["illustrations/flower.png", 629, 784],
  "sheep-chopped": ["illustrations/sheep-chopped.png", 617, 800],
  "sheep-lying": ["illustrations/sheep-lying.png", 872, 900],
  "sheep-rainbow": ["illustrations/sheep-rainbow.png", 770, 800],
  "sheep-scuffle": ["illustrations/sheep-scuffle.png", 800, 777],
  "sheep-standing": ["illustrations/sheep-standing.png", 900, 862],
  "sheep-thought-bubble": ["illustrations/sheep-thought-bubble.png", 575, 800],
  "sheep-tree": ["illustrations/sheep-tree.png", 647, 800],
  "chinese-knot": ["icons/chinese-knot.svg", 260, 250],
  firecracker: ["icons/firecracker.svg", 260, 250],
  "fortune-cookie": ["icons/fortune-cookie.svg", 260, 250],
  lantern: ["icons/lantern.svg", 260, 250],
  "red-packet": ["icons/red-packet.svg", 260, 250],
} as const;

export type IllustrationName = keyof typeof assets;

type IllustrationProps = {
  name: IllustrationName;
  className?: string;
  sizes: string;
  /** true for the default bob, or 2–4 for the staggered timings. */
  bob?: boolean | 2 | 3 | 4;
  /** Decorative by default. Only the Home hero sheep carry alt text. */
  alt?: string;
  preload?: boolean;
};

export function Illustration({ name, className = "", sizes, bob, alt = "", preload }: IllustrationProps) {
  const [path, width, height] = assets[name];
  const motion = bob ? `bob ${typeof bob === "number" ? `bob-${bob}` : ""}` : "";

  return (
    <Image
      src={`/images/${path}`}
      alt={alt}
      aria-hidden={alt ? undefined : true}
      width={width}
      height={height}
      sizes={sizes}
      preload={preload}
      className={`h-auto ${motion} ${className}`}
    />
  );
}

/** A pink blob for the hero glow. Position and size it with `className`. */
export function Glow({ className, variant }: { className: string; variant?: 2 | 3 }) {
  return <div className={`morph absolute bg-pink ${variant ? `morph-${variant}` : ""} ${className}`} />;
}
