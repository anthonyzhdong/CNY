import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "4/5". */
  ratio: string;
  sizes: string;
  position?: string;
  className?: string;
  preload?: boolean;
};

export function Photo({ src, alt, ratio, sizes, position, className = "", preload }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden rounded-sm ${className}`} style={{ aspectRatio: ratio }}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="object-cover"
        style={position ? { objectPosition: position } : undefined}
      />
    </div>
  );
}
