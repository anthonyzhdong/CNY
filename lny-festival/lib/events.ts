import rawEvents from "@/data/events.json";

export type EventType = "Performance" | "Food" | "Family" | "Workshop" | "Ceremony";

export type Event = {
  slug: string;
  day: "sat" | "sun";
  when: string;
  /** The part of `when` after the date, e.g. "Time TBC". */
  time: string;
  name: string;
  place: string;
  type: EventType;
  img: string;
  alt: string;
  imgPosition?: string;
  tags?: { label: string; colour: string }[];
  lede?: string;
  description?: string[];
  performer?: string;
  goodToKnow?: string[];
  related?: string[];
};

export const typeColours: Record<EventType, string> = {
  Performance: "bg-pink",
  Food: "bg-gold",
  Family: "bg-mint",
  Workshop: "bg-lime",
  Ceremony: "bg-lilac",
};

export const dayNames = {
  sat: { long: "Saturday", date: "20 February", short: "Sat 20", start: "20270220" },
  sun: { long: "Sunday", date: "21 February", short: "Sun 21", start: "20270221" },
};

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/’/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Only the lion dance has real copy so far; other events show placeholders.
const details: Record<string, Partial<Event>> = {
  "lion-dance": {
    imgPosition: "55% 40%",
    alt: "A golden lion dancer rears up in front of a crowd of families sitting on the ground",
    tags: [{ label: "Family friendly", colour: "bg-mint" }],
    lede: "Drums, cymbals and a dancing lion — the lion dance is performed at New Year to bring good luck and chase away bad spirits.",
    description: [
      "Two performers move as one inside the lion, leaping, crouching and blinking in time with the beat. Watch for the moment the lion “plucks the greens” — a symbol of good fortune for the year ahead.",
    ],
    performer: "[PERFORMING GROUP]",
    goodToKnow: ["It’s loud! Ear protection is a good idea for little ones."],
    related: ["dragon-dance", "taiko-drumming", "asian-market"],
  },
};

export const events: Event[] = rawEvents.map(({ d, ...event }) => {
  const slug = slugify(event.name);
  return {
    ...event,
    slug,
    day: d as Event["day"],
    type: event.type as EventType,
    time: event.when.split(" · ")[1],
    ...details[slug],
  };
});

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}

export function relatedEvents(event: Event) {
  if (event.related) return event.related.map((slug) => getEvent(slug)!);
  const others = events.filter(({ slug }) => slug !== event.slug);
  return [...others.filter(({ type }) => type === event.type), ...others.filter(({ type }) => type !== event.type)].slice(0, 3);
}
