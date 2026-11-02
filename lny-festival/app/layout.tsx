import type { Metadata } from "next";
import { DM_Mono, Instrument_Serif, Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin", "latin-ext"],
  weight: "400",
  style: ["normal", "italic"],
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  adjustFontFallback: false,
  fallback: ["monospace"],
});

export const metadata: Metadata = {
  title: {
    default: "Lunar New Year Festival 2027 | Te Whanganui-a-Tara Wellington",
    template: "%s | Lunar New Year Festival 2027",
  },
  description:
    "Welcome the Year of the Sheep with food, lion dances, lanterns and live performance in Te Whanganui-a-Tara Wellington, 20–21 February 2027.",
  openGraph: {
    siteName: "Lunar New Year Festival 2027",
    images: ["/images/photos/lion-dance.jpg"],
    locale: "en_NZ",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
    >
      <body className="relative flex min-h-screen flex-col overflow-x-clip font-sans font-medium">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-gutter focus:top-2 focus:z-30 focus:rounded-sm focus:bg-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-col">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
