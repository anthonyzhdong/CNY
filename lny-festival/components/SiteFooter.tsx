import Image from "next/image";
import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/Icons";
import { Illustration } from "@/components/Decoration";
import { footerNav, social } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative mt-auto flex flex-col gap-[clamp(32px,4vw,56px)] border-t border-line-footer bg-white px-gutter pb-5 pt-[clamp(48px,6vw,88px)]">
      <Illustration
        name="lantern"
        className="absolute right-[clamp(16px,4vw,64px)] top-[-96px] w-36 mobile:hidden"
        sizes="144px"
        bob
      />
      <Link
        href="/"
        aria-label="Lunar New Year Festival — home"
        className="block w-full max-w-[480px] self-center"
      >
        <Image
          src="/images/brand/festival-logo.png"
          alt="Lunar New Year Festival, 20–21 February 2027, sponsored by Golden Sun"
          width={2000}
          height={202}
          sizes="(max-width: 512px) 100vw, 480px"
          className="h-auto w-full"
        />
      </Link>

      <div className="flex flex-wrap justify-between gap-x-12 gap-y-8">
        <div className="flex max-w-[420px] flex-[1_1_300px] flex-col gap-2.5">
          <p className="font-serif text-[26px] leading-[1.2]">
            Celebrating cultural diversity in Wellington and building strong communities.
          </p>
          <p className="text-sm text-ink-muted">
            Presented by the Asian Events Trust · Sponsored by Golden Sun
          </p>
        </div>

        {/* Not connected to a mailing list yet. */}
        <form className="flex max-w-[420px] flex-[1_1_300px] flex-col gap-2.5">
          <label htmlFor="footer-email" className="text-[15px] font-medium">
            Get festival updates
          </label>
          <div className="flex flex-wrap gap-2">
            <input
              id="footer-email"
              type="email"
              placeholder="you@example.com"
              className="min-h-[46px] min-w-0 flex-[1_1_200px] rounded-full border border-ink bg-beige px-4 text-[15px]"
            />
            <button
              type="button"
              className="min-h-11 rounded-full bg-pink px-5 text-[15px] font-medium text-ink"
            >
              Sign up
            </button>
          </div>
        </form>

        <nav
          aria-label="Footer"
          className="grid flex-[1_1_300px] grid-cols-2 content-start gap-x-6 gap-y-2.5 text-[15px]"
        >
          {footerNav.map(({ href, label }) => (
            <Link key={label} href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-3.5 text-[13px] text-ink-muted">
        <span>Te Whanganui-a-Tara Wellington · 2027</span>
        <div className="flex flex-wrap items-center gap-x-[18px] gap-y-1">
          <a href="#">Accessibility</a>
          <a href="#">Privacy</a>
          <a
            href={social.instagram}
            aria-label="Instagram"
            className="flex size-11 items-center justify-center"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href={social.facebook}
            aria-label="Facebook"
            className="flex size-11 items-center justify-center"
          >
            <FacebookIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
