export type NavItem = { href: string; label: string };

// Current-page pill colour for each main nav item (DESIGN.md §4).
export const mainNav: (NavItem & { accent: string })[] = [
  { href: "/events", label: "Events", accent: "bg-pink" },
  { href: "/map", label: "Festival map", accent: "bg-mint" },
  { href: "/get-involved", label: "Get involved", accent: "bg-pink" },
  { href: "/about", label: "About", accent: "bg-mint" },
  { href: "/media", label: "Media", accent: "bg-lilac" },
  { href: "/traditions", label: "Traditions", accent: "bg-lime" },
];

export const footerNav: NavItem[] = [
  { href: "/events", label: "Events" },
  { href: "/map", label: "Festival map" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/are-you-a-sheep", label: "Are you a sheep?" },
  { href: "/traditions", label: "Traditions" },
  { href: "/gallery", label: "Gallery archive" },
  { href: "/gallery/films", label: "Festival films" },
  { href: "/media", label: "Media" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/about", label: "About" },
  { href: "#", label: "Contact us" }, // [Contact URL TBC]
];

// [Real URLs TBC]
export const social = {
  facebook: "#",
  instagram: "#",
};
