import rawEvents from "@/data/events.json";

export type EventType = "Performance" | "Food" | "Family" | "Workshop" | "Ceremony";

/** Festival weekend (20–21 Feb) or community events across Wellington (1–28 Feb). */
export type EventPeriod = "weekend" | "february";

export type Event = {
  slug: string;
  period: EventPeriod;
  /** Festival-weekend day; February events may not have one. */
  day?: "sat" | "sun";
  when: string;
  /** The part of `when` before the time, e.g. "Sat 20 Feb". */
  date: string;
  /** The part of `when` after the date, e.g. "Time TBC". */
  time: string;
  name: string;
  /** Short line under the name, e.g. "Cuisine, crafts and cultural entertainment". */
  summary?: string;
  place: string;
  type: EventType;
  img: string;
  alt: string;
  imgPosition?: string;
  tags?: { label: string; colour: string }[];
  lede?: string;
  description?: string[];
  /** Run sheet or highlights, e.g. stage programme then fireworks. */
  schedule?: { time?: string; what: string; detail?: string }[];
  performer?: string;
  organiser?: string;
  free?: boolean;
  /** Registration page for events that ask people to register. */
  register?: string;
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

export const periods: { value: EventPeriod; label: string; dates: string }[] = [
  { value: "weekend", label: "Festival weekend", dates: "20–21 Feb" },
  { value: "february", label: "Across Wellington", dates: "1–28 Feb" },
];

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

// Events without an entry here show placeholders on their detail page.
const details: Record<string, Partial<Event>> = {
  "light-up-the-night": {
    lede: "Experience the excitement of Lunar New Year across Wellington’s CBD, with pop-up activations bringing the city’s outdoor spaces to life, alongside a vibrant stage programme and food trucks in Frank Kitts Park.",
    description: [
      "As lanterns illuminate the park, the evening builds towards a spectacular waterfront fireworks display, lighting up the night and bringing everyone together to welcome the Year of the Sheep in style.",
    ],
    schedule: [
      { time: "6pm to 9pm", what: "Stage programme, Frank Kitts Park" },
      { time: "7.30pm to 8.30pm", what: "Pop-up activations, Courtenay Park & Te Papa forecourt" },
      { time: "9.30pm", what: "Festival fireworks, Wellington Waterfront" },
    ],
    organiser: "Asian Events Trust",
    free: true,
    goodToKnow: [
      "In the event of bad weather, the performances will be cancelled, and the fireworks display will move to Sunday 21 February.",
    ],
  },
  "a-taste-of-asia": {
    lede: "TSB Arena and Shed 6 come alive with food, music, art, crafts and cultural performances from across Asia.",
    description: [
      "A much-loved highlight of Wellington’s Lunar New Year celebrations, this is the heart of the festival – a welcoming and authentic celebration that brings Asia to Wellington’s doorstep, blending rich cultural traditions with contemporary expression in a uniquely Wellington setting.",
      "Explore the Asian Market, featuring food, art, craft and community information stalls, alongside a vibrant programme of traditional and contemporary cultural performances.",
    ],
    organiser: "Asian Events Trust",
    free: true,
  },
  "a-flock-of-fun-by-the-waterfront": {
    tags: [{ label: "Family friendly", colour: "bg-mint" }],
    lede: "A fun-filled celebration for the young and young at heart. Bring the whole family down to Wellington’s waterfront for a baa-rilliant afternoon of interactive activities and entertainment for all ages, including performances, give-it-a-go workshops, face painting, kids’ activities and food trucks.",
    description: ["There’s plenty to see, try and explore against the beautiful backdrop of the waterfront."],
    organiser: "Asian Events Trust",
    free: true,
  },
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
  "vietnamese-lunar-new-year-festival-2027": {
    lede: "Celebrate the Year of the Goat with Viet Hub NZ, who are bringing a little piece of Vietnam to Lower Hutt, filled with delicious food, colourful performances, cultural discoveries, hands-on workshops and plenty of festive fun!",
    schedule: [
      {
        what: "Live performances & entertainment",
        detail: "Cultural performances, traditional music, lion dances and amazing local talents bringing the festival to life!",
      },
      {
        what: "Vietnamese street food & festival market",
        detail: "Vietnamese street food, refreshing drinks, sweet treats and local market stalls.",
      },
      {
        what: "Explore Vietnam – cultural discovery stations",
        detail: "Vietnamese traditions, discover fascinating stories and learn what makes Tết so special.",
      },
      {
        what: "Vietnamese crafts",
        detail: "Create your own festive decorations, try Vietnamese folk painting, make traditional Tết couplets (câu đối) and take home something handmade.",
      },
      {
        what: "Traditional games and family fun",
        detail: "Vietnamese traditional games and interactive activities for children and adults alike!",
      },
      {
        what: "Cooking workshops",
        detail: "Learn how to make traditional treats through fun cooking experiences. Spaces may be limited.",
      },
    ],
    organiser: "VietHub",
    free: true,
    register: "https://events.humanitix.com/vietnamese-lunar-new-year-festival-2027-or-xuan-hoi-ngo-tet-xa-ma-gan",
  },
  "lunar-ny-at-te-papa": {
    lede: "Celebrate the Year of the Goat with a late-night museum opening, featuring activities, exhibition tours, talks and performances.",
    description: [
      "Explore the museum after hours and enjoy talks, performances and activities led by local Asian artists and creatives. Afterwards, head to the waterfront to enjoy Wellington City Council’s Lunar New Year fireworks display.",
    ],
    schedule: [
      {
        time: "6pm–9pm",
        what: "One Thousand Cranes: Senbazuru and Origami Making",
        detail: "Write a wish for the new year and fold it into an origami creation – help Te Papa grant your wish by making 1000 cranes over the evening. Learn how to make animals, shapes and more!",
      },
      {
        time: "6.15pm–7pm, 7.30pm–8.15pm",
        what: "Migration, Movement and Memory: Curator Talk with Richella Visakha",
        detail: "Join Richella Visakha, Curator Asian Aotearoa Histories, in the Passports exhibition to explore the history of Asian migration to Aotearoa and its impact on our lives today.",
      },
      {
        time: "7pm–8pm",
        what: "Word Wishes: Poetry Reading",
        detail: "Hear local Asian poets share their work, stories and wishes for the year ahead on Rongomaraeroa, Te Papa’s Marae. (Line-up TBC)",
      },
    ],
    organiser: "Te Papa",
    free: true,
  },
};

export const events: Event[] = rawEvents.map(({ d, ...event }) => {
  const slug = slugify(event.name);
  const [date, time] = event.when.split(" · ");
  return {
    ...event,
    slug,
    period: event.period as EventPeriod,
    day: d as Event["day"],
    type: event.type as EventType,
    date,
    time,
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
