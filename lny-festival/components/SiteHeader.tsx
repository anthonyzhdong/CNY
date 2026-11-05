"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { CloseIcon, MenuIcon } from "@/components/Icons";
import { mainNav } from "@/lib/site";

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  return mainNav.map(({ href, label, accent }) =>
    pathname === href || pathname.startsWith(`${href}/`) ? (
      <Link
        key={href}
        href={href}
        aria-current={pathname === href ? "page" : "true"}
        onClick={onNavigate}
        className={`rounded-[6px] px-3 py-0.5 text-ink ${accent}`}
      >
        {label}
      </Link>
    ) : (
      <Link key={href} href={href} onClick={onNavigate} className="text-ink-subtle">
        {label}
      </Link>
    ),
  );
}

export function SiteHeader() {
  const menu = useRef<HTMLDialogElement>(null);

  return (
    <header className="absolute inset-x-0 top-0 z-20 flex h-header items-center justify-between gap-6 px-gutter">
      <Link href="/" aria-label="Lunar New Year Festival — home" className="block flex-none">
        <Image
          src="/images/brand/sheep-mark.png"
          alt="Lunar New Year Festival"
          width={239}
          height={232}
          className="h-14 w-auto"
          preload
        />
      </Link>

      <nav aria-label="Main" className="ml-auto flex items-center gap-x-[clamp(10px,1.6vw,22px)] whitespace-nowrap text-[15px] mobile:hidden">
        <NavLinks />
      </nav>

      <button
        type="button"
        aria-haspopup="dialog"
        onClick={() => menu.current?.showModal()}
        className="hidden min-h-11 items-center gap-2 rounded-full border border-ink px-4 text-[15px] mobile:flex"
      >
        <MenuIcon size={18} />
        Menu
      </button>

      <dialog
        ref={menu}
        aria-label="Menu"
        className="m-0 ml-auto h-dvh max-h-none w-[min(320px,100%)] max-w-none bg-white text-ink backdrop:bg-ink/40"
      >
        <div className="flex h-full flex-col gap-8 p-gutter">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => menu.current?.close()}
            className="flex size-11 items-center justify-center self-end"
          >
            <CloseIcon size={22} />
          </button>
          <nav aria-label="Mobile" className="flex flex-col items-start gap-5 font-serif text-[34px] leading-none">
            <NavLinks onNavigate={() => menu.current?.close()} />
          </nav>
        </div>
      </dialog>
    </header>
  );
}
