import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  solid: "bg-ink font-medium text-white hover:text-white",
  outline: "border border-ink",
  pink: "bg-pink font-medium text-ink",
};

type PillLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: "md" | "lg";
};

/** Round CTA and link button. */
export function PillLink({ variant = "outline", size = "md", className = "", ...props }: PillLinkProps) {
  const height = size === "lg" ? "min-h-12 px-[22px]" : "min-h-11 px-5";

  return (
    <Link
      className={`inline-flex items-center rounded-full text-[15px] ${height} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}

/** Small mono chip. */
export function Tag({ className = "", ...props }: ComponentProps<"span">) {
  return <span className={`label self-start rounded-full px-3 py-1 ${className}`} {...props} />;
}

type FilterPillProps = ComponentProps<"button"> & {
  active: boolean;
  size?: "sm" | "md";
};

export function FilterPill({ active, size = "md", className = "", ...props }: FilterPillProps) {
  const dimensions = size === "sm" ? "min-h-10 px-4" : "min-h-11 px-[18px]";
  const state = active ? "bg-ink text-white" : "bg-transparent text-ink hover:text-red";

  return (
    <button
      type="button"
      aria-pressed={active}
      className={`rounded-lg border border-ink text-[15px] ${dimensions} ${state} ${className}`}
      {...props}
    />
  );
}

/** White pill back link used at the top of detail pages. */
export function BackLink(props: ComponentProps<typeof Link>) {
  return (
    <Link className="inline-flex min-h-10 items-center self-start rounded-full bg-white px-3.5 text-sm" {...props} />
  );
}
