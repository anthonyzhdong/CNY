"use client";

import Image from "next/image";
import { useEffect, useRef, type KeyboardEvent } from "react";
import { ArrowIcon, CloseIcon } from "@/components/Icons";
import type { Photo } from "@/lib/media";

type LightboxProps = {
  photos: Photo[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
};

const control = "flex flex-none items-center justify-center rounded-full text-ink focus-visible:outline-white";

export function Lightbox({ photos, index, onChange, onClose }: LightboxProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = index !== null;

  useEffect(() => {
    if (isOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [isOpen]);

  const photo = isOpen ? photos[index] : null;
  const step = (delta: number) => {
    if (isOpen) onChange((index + delta + photos.length) % photos.length);
  };

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") step(-1);
    if (event.key === "ArrowRight") step(1);
  }

  return (
    <dialog
      ref={dialog}
      aria-label={photo?.alt}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none flex-col gap-4 bg-ink/94 px-gutter pb-6 pt-5 text-white open:flex backdrop:bg-transparent"
    >
      {photo && (
        <>
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[13px] text-lilac">
              {index! + 1} / {photos.length}
            </span>
            <button type="button" aria-label="Close" onClick={onClose} className={`${control} size-[52px] bg-white`}>
              <CloseIcon size={20} />
            </button>
          </div>
          <div className="flex min-h-0 flex-auto items-center justify-center gap-5">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className={`${control} size-[52px] bg-pink mobile:hidden`}
            >
              <ArrowIcon direction="left" size={22} />
            </button>
            <div className="relative h-full min-w-0 max-w-[1200px] flex-auto">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1320px) 100vw, 1200px" className="rounded-sm object-contain" />
            </div>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className={`${control} size-[52px] bg-lime mobile:hidden`}
            >
              <ArrowIcon size={22} />
            </button>
          </div>
          <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-end justify-between gap-x-6 gap-y-3">
            <div className="flex flex-col gap-1">
              <p className="font-serif text-[28px] leading-[1.15]">{photo.alt}</p>
              <p className="text-sm text-line">
                {photo.year} · {photo.cat} · Photo: {photo.credit ?? "[Photographer name]"}
              </p>
            </div>
            <div className="flex gap-2">
              <button type="button" aria-label="Previous photo" onClick={() => step(-1)} className={`${control} size-11 bg-pink`}>
                <ArrowIcon direction="left" size={20} />
              </button>
              <button type="button" aria-label="Next photo" onClick={() => step(1)} className={`${control} size-11 bg-lime`}>
                <ArrowIcon size={20} />
              </button>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
