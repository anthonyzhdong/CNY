export type NewsItem = {
  date: string;
  title: string;
  /** Used where space is tight, e.g. "More news". */
  shortTitle?: string;
  summary: string;
  img: string;
};

export const featuredNews = {
  slug: "record-breaking-lunar-new-year-celebrations",
  date: "24 Feb 2026",
  title: "Record-breaking Lunar New Year celebrations bring Asia to Wellington’s waterfront",
  summary:
    "Wellington welcomed the Year of the Fire Horse in spectacular style, with record crowds for the most diverse programme in the festival’s 26-year history.",
  img: "/images/photos/dragon-dance.jpg",
};

export const news: NewsItem[] = [
  {
    date: "18 Feb 2026",
    title: "Wellington gallops into the Year of the Fire Horse",
    summary: "Lunar New Year celebrations are officially underway across the capital.",
    img: "/images/photos/lion-dance.jpg",
  },
  {
    date: "27 Jan 2026",
    title: "Asian Events Trust and Te Papa present world premiere of HORSES",
    shortTitle: "World premiere of HORSES with Te Papa",
    summary: "A major new dance work by Daniel Belton and Good Company Arts opens the 2026 festival.",
    img: "/images/photos/fan-dance.jpg",
  },
  {
    date: "27 Jan 2026",
    title: "Faces of the Festival — Daniel Belton, Good Company Arts",
    summary: "Meet the artistic director behind this year’s dance film premiere and artist talk at Te Papa.",
    img: "/images/photos/taiko.jpg",
  },
];
