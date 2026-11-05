export type NavItem = { href: string; label: string };

// Current-page pill colour for each main nav item (DESIGN.md §4).
export const mainNav: (NavItem & { accent: string })[] = [
  { href: "/events", label: "Events", accent: "bg-pink" },
  { href: "/map", label: "Festival Guide", accent: "bg-mint" },
  { href: "/media", label: "News & Articles", accent: "bg-lilac" },
  { href: "/are-you-a-sheep", label: "Are you a sheep?", accent: "bg-lime" },
  { href: "/get-involved", label: "Registrations", accent: "bg-pink" },
  { href: "/sponsors", label: "Sponsors", accent: "bg-lilac" },
  { href: "/about#people", label: "Contact us", accent: "bg-mint" },
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
  { href: "/about#people", label: "Contact us" },
];

export const social = {
  facebook: "https://www.facebook.com/lnywellington",
  instagram: "https://www.instagram.com/lnywellington",
};
