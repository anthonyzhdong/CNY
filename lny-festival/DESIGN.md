# Lunar New Year Festival 2027 — Option D design spec

Wellington's Lunar New Year Festival, **20–21 February 2027**, Year of the (Fire) Sheep.
Presented by the Asian Events Trust, sponsored by Golden Sun.
Design direction: **"Editorial with life"**. Lots of white space and editorial serif type, with pastel accents and 3D sheep and icons in the margins.

Target stack: **Next.js (App Router) + TypeScript, deployed on Vercel.** Every page can be statically generated, so no server code is needed.

---

## 1. What's in this folder

| Path | What it is |
|---|---|
| `reference/*.html` | Rendered, static HTML of every page. Open them in a browser. **These are the visual source of truth.** All styles are inline, so read them for exact values. |
| `reference/*--*-open.html` | The photo lightbox and the film player in their open state. |
| `reference/options/events-layout-*.html` | Five candidate layouts for the event list. **Not decided yet:** build the listing so the layout can be swapped (see §6). |
| `public/images/…` | All images, ready to drop into the Next.js `public/` folder. |
| `public/fonts/…` | The two brand fonts (see the licence warning in §2). |
| `data/*.json` | Placeholder content for events, photos and films, taken from the designs. |

The reference HTML was exported from a design tool, so everything is inline styles and absolute paths into `public/`. Don't copy the markup verbatim. Rebuild it as components with the same visual result.

---

## 2. Design tokens

### Colour
| Token | Hex | Use |
|---|---|---|
| `ink` | `#2B2530` | Body text, dark buttons, active filter pill |
| `ink-soft` | `#3A3340` | Long-form paragraph text |
| `ink-muted` | `#4A4450` | Intro and supporting text |
| `ink-subtle` | `#6E6873` | Nav links, mono labels, captions |
| `red` | `#B5525A` | Italic accent words in headings, dates and times, link hover |
| `beige` | `#EFEEE7` | Top-banner background (fades to white) and cards that sit on white |
| `white` | `#FFFFFF` | Main page background, footer |
| `line` | `#D9D4DB` | Hairline dividers |
| `line-footer` | `#EDE7EA` | Footer top border |
| `mint-band` | `#E4F4F0` | "Blue" section band |
| `butter-band` | `#FDF1D8` | "Yellow" section band |
| `pink` | `#FDAAB2` | Primary accent: hero glow, CTA pills, tags |
| `pink-soft` | `#FDDCE1` | Soft pink cards and callouts |
| `lime` | `#D7EDAC` | Tags and cards |
| `lime-soft` | `#E7F4CD` | Soft green cards |
| `mint` | `#A1DFD7` | Tags and cards |
| `mint-soft` | `#DDF2EE` | Soft mint cards |
| `lilac` | `#E8CEDE` | Tags |
| `gold` | `#F2BE74` | Tags ("Award winner", Food) |

Event type → tag colour: Performance `pink`, Food `gold`, Family `mint`, Workshop `lime`, Ceremony `lilac`.

### Type
| Role | Font | Notes |
|---|---|---|
| Body and UI | **SF Pro Display Medium** (`public/fonts/sf-pro-display-medium.otf`), falling back to Outfit and then system-ui | 15–19px. Weight 500 for emphasis. |
| Display and headings | **Instrument Serif** (Google Fonts), 400 and italic | H1 `clamp(56px, 9vw, 132px)` / line-height 0.92 / letter-spacing −0.02em. Section H2 is roughly 40–64px. The accent word is usually an italic `<em>` in `red`. |
| Labels, dates, tags | **DM Mono** (Google Fonts) | 12–14px, uppercase, letter-spacing 0.06em |
| Masthead | **Generic G80** (`public/fonts/generic-g80.otf`) | Currently only baked into `festival-logo.png`. |

> ⚠️ **Font licences, check before launch.** Generic G80 is a *demo* licence. SF Pro is licensed by Apple and generally can't be self-hosted on a public website. Either buy proper licences or swap them: Inter or Outfit for SF Pro, and the licensed retail cut of Generic G80. Load fonts with `next/font/local` and `next/font/google`.

### Shape and spacing
- **Corner radius:** 4px on every image, card and panel. Pills are the exceptions:
  - CTA and link buttons: `999px` (fully round), min-height 44–48px.
  - **Selection and filter pills:** `8px`, the "less circle" look.
  - Current-page nav marker: `6px`.
  - Small tag chips: `999px` on most pages, `6px` in the event-layout options.
- **Page gutter:** `clamp(16px, 2.2vw, 32px)` left and right. Layout is **full width**, with no centred max-width container. Text blocks cap their own width (about 560–960px).
- **Section rhythm:** generous vertical padding, roughly `clamp(72px, 9vw, 136px)`. White space is a feature, so don't tighten it.
- **Breakpoint:** one main breakpoint at `max-width: 720px`. Decorations with `.deco-hide` are hidden there, and the hero sheep re-flow (see §4).

### Motion
- `bob`: illustrations float with `translate: 0 -12px` and back over 4s, ease-in-out, infinite. They're staggered with different durations and delays (4.6s/−1.4s, 3.6s/−2.2s, 5s/−0.6s).
- `morph`: the hero glow is 3–4 blurred `pink` blobs (`filter: blur(30–64px)`, opacity 0.5–0.9) that slowly change border-radius and drift over 12–18s.
- Everything is disabled under `prefers-reduced-motion: reduce`.

---

## 3. The page background pattern (important)

Every page follows the same structure:

1. **Top banner band:** the header and the page hero sit on `linear-gradient(180deg, #EFEEE7 0%, #EFEEE7 55%, #FFFFFF 100%)`. On the Home page the beige is solid behind the sheep and masthead, then fades to white through the welcome text. On the Media article, whose hero is very tall, the fade uses fixed stops (`0px → 420px beige, white by 760px`).
2. **Everything below is white.**
3. **One or two colour bands per page**, either `mint-band` or `butter-band`, full width, solid, with vertical padding. Which section gets a band:

| Page | Band(s) |
|---|---|
| Home | butter → *Festival moments* |
| About | butter → *Our objectives*; mint → *Our people* |
| Media article | mint → *More news* |
| Event detail | butter → *You might also like* |
| Events | none, white only |
| Gallery archive | mint → *Festival films* |
| Festival map | butter → *Printable maps & programmes* |
| Media | butter → news list and "Older posts" |
| Get involved | butter → the three registration rows |
| Are you a sheep? | mint → *The lunar calendar* |
| Sponsors | butter → all three sponsor tiers |
| Traditions | butter → *04 Food for good fortune*; mint → *07 Lantern Festival* and *Say it like a local* |
| Photo gallery | none |
| Festival films | butter → featured film |

4. **Cards on white sections use `beige`**, and cards inside a colour band stay **white**.
5. The **footer is white** with a 1px `line-footer` top border wherever the last section above it is white.

A `<Band tone="hero | white | mint | butter">` component covers all of this.

---

## 4. Shared components

- **`SiteHeader`**
  - Sheep mark logo on the left (`brand/sheep-mark.png`, 56px tall), linking home.
  - Nav on the right: Events · Festival map · Get involved · About · Media · Traditions.
  - Facebook and Instagram icon links (40px hit area). Real URLs are TBC.
  - The current page gets a pill: `padding 2px 12px`, `radius 6px`, background is the page's accent (Events and Get involved `pink`, About and Festival map `mint`, Traditions `lime`, Media `lilac`). Pages outside the main nav show no marker.
  - Mobile needs a menu. It hasn't been designed yet, so keep it simple: a menu button and a sheet.
- **`SiteFooter`**
  - White background. A lantern icon peeks over the top-right edge (`top: -96px`, bobbing).
  - Centred full logo (`brand/festival-logo.png`, max-width 480px).
  - Mission line in serif: "Celebrating cultural diversity in Wellington and building strong communities." and "Presented by the Asian Events Trust · Sponsored by Golden Sun".
  - Newsletter form: an email input with a beige fill and round corners, plus a pink "Sign up" button.
  - A two-column nav grid: Events, Festival map, Get involved, Are you a sheep?, Traditions, Gallery archive, Festival films, Media, Sponsors, About, Contact us.
  - Bottom row: "Te Whanganui-a-Tara Wellington · 2027", Accessibility, Privacy, Instagram, Facebook.
- **`PageHero`**: a mono pill label, a big serif H1 with an italic red accent word, an intro paragraph, and usually a bobbing illustration over the pink morph glow on the right (hidden under 720px).
- **`Pill` / `Tag` / `FilterPill`**: see the radius rules in §2. A filter pill is active when it's `ink` filled with white text, and inactive when it's transparent with a 1px `ink` border.
- **`SectionHeading`**: a mono number pill ("01"), a serif H2, and an optional bobbing icon underneath.
- **`Decoration`**: an absolutely positioned bobbing illustration or icon, with `aria-hidden`, `alt=""`, and `.deco-hide` on mobile.
- **`Lightbox` / `VideoModal`**: see §5.

Illustrations (`public/images/illustrations`) and 3D icons (`public/images/icons`: knot, red packet, fortune cookie, firecracker, gold lantern) are decorative only.

---

## 5. Pages and routes

| Route | Reference file | Notes and interactions |
|---|---|---|
| `/` | `home.html` | Hero of **5 bobbing sheep** over the pink glow (don't change this). On mobile it re-flows to 3 sheep at a 4:3 ratio. The masthead image overlaps the bottom of the sheep area (`margin-top: -8vw`, reset on mobile). Then the greeting and welcome copy with two CTAs, the award strip, 3 featured events, the "Are you a sheep?" and "Find your flock" (map) panels, Festival moments (photo grid), and the About info row. |
| `/traditions` | `traditions.html` | Long-form editorial in 7 numbered sections, with quote bands, a food card grid and a greetings block. |
| `/registrations` | `get-involved.html` | 3 rows (Stallholders, Performers, Volunteers) with "Opens [DATE]" or "Register interest", and an email notify box. |
| `/about` | `about.html` | AET mission, three pillars (Connection, Ownership, a 3,500+ volunteers stat card), 3 objectives, a timeline, and *Our people* (Linda Lim, Rita Tom) with mailto buttons. |
| `/media` | `media.html` | Featured article card, news list, and a "Media enquiries" mint banner with "Email the media team" and "Download press kit". |
| `/media/[slug]` | `media-article.html` | Article with a stat sidebar, pull-quote, share links and "More news". |
| `/events` | `events.html` | **Filters:** Day (Both days / Sat 20 / Sun 21) and Type (All / Performance / Food / Family / Workshop) in client state, plus a count label and an empty state. The **list layout isn't final**: the current grid was rejected, and the five candidates are in `reference/options/`. They all lead with the photo. Make the list a swappable component. |
| `/events/[slug]` | `event-detail.html` | Tags, title, date/time/venue, a large image, description, a "Good to know" list, and a sidebar card with Add to calendar (.ics), See it on the map, and Share. Related events sit below. **All events are free**, so don't show price UI. |
| `/sponsors` | `sponsors.html` | Tiers (Principal / Organised by / Supported by, then Sponsors, then Supporters) as logo tiles (currently placeholders), and a "Become a sponsor" CTA. |
| `/map` | `festival-map.html` | An illustrated map with 4 clickable zones (Cultural Entertainment, Craft Stalls, Food Hall, Fun in the Park). Selecting a zone highlights it and fills a side panel with what's there, plus printable PDF cards. |
| `/are-you-a-sheep` | `are-you-a-sheep.html` | A grid of the 12 zodiac animals with their years. The Sheep tile spans 2 columns, is pink and has the sheep illustration. Then the lunar calendar explainer and the Year of the Sheep details (6 Feb 2027 – 25 Jan 2028, Fire Sheep). |
| `/gallery` | `gallery.html` | Year tabs (2026–2023), a photo grid, 3 film tiles and links to the full pages. |
| `/gallery/photos` | `photo-gallery.html`, `photo-gallery--lightbox-open.html` | Type and year filters and a masonry grid. Clicking opens a **lightbox** with prev/next, an "n / total" counter, caption and credit, closing on Esc and supporting arrow keys. |
| `/gallery/films` | `festival-films.html`, `festival-films--player-open.html` | A featured film and a filterable grid. Clicking opens a **modal player**, not a new page. |

### Lightbox and video modal
- Use a real modal: `<dialog>` or Radix Dialog with a focus trap, Esc to close, return focus to the trigger, and `aria-modal`.
- **Video:** YouTube and Vimeo embeds that only mount when the modal opens. Use `https://www.youtube-nocookie.com/embed/{id}?autoplay=1` and `https://player.vimeo.com/video/{id}?autoplay=1`. Show a "Watch on YouTube/Vimeo ↗" link and "Next film →".
- Consider syncing the open item to the URL (`?photo=` or `?film=`) so items can be shared.

---

## 6. Data

`data/events.json`, `data/photos.json` and `data/films.json` hold the design placeholder content. Suggested types:

```ts
type Event = { slug: string; day: 'sat' | 'sun'; start?: string; end?: string; when: string; name: string;
  place: string; type: 'Performance' | 'Food' | 'Family' | 'Workshop' | 'Ceremony'; img: string; alt: string; description?: string };
type Photo = { src: string; alt: string; cat: 'Performances' | 'Food' | 'Crafts' | 'Crowd'; year: string; ratio: string; credit?: string };
type Film  = { title: string; type: 'Highlights' | 'Performances' | 'Behind the scenes'; year: string; length: string;
  platform: 'YouTube' | 'Vimeo'; videoId: string; thumb: string; blurb: string };
```

Start with typed local data (JSON or TS) and `generateStaticParams`. A headless CMS can come later.

---

## 7. Placeholders still waiting on real content

Anything in `[SQUARE BRACKETS]`, specifically:

- event venues, times and performers, plus the rain plan and accessibility details
- registration open dates
- the media contact and press kit
- sponsor logos
- real Facebook and Instagram URLs
- photographer credits
- film video IDs and lengths
- About info row hours

---

## 8. Build notes

- **Next.js, Vercel:**
  - Use the App Router, TypeScript and static generation throughout.
  - Use `next/image` for photos with proper `sizes`, `next/font` for fonts, and `metadata` per route (with Open Graph images).
  - Set up redirects from the old site's URLs in `next.config` if paths change.
- **Styling:** CSS Modules or Tailwind both work. Put the tokens in §2 into CSS variables or a Tailwind theme first, then build components.
- **Accessibility:**
  - 44px minimum touch targets.
  - Visible focus rings (`outline: 3px solid #B5525A`).
  - Decorative images get `alt=""` and `aria-hidden`.
  - Filter groups use `role="group"` and `aria-pressed`.
  - The current nav item gets `aria-current="page"`.
  - Respect reduced motion.
- **Te reo Māori:** keep "Te Whanganui-a-Tara Wellington" with its macrons and hyphens exactly as written.
