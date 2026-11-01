"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { CloseIcon, PlayIcon } from "@/components/Icons";
import type { Film } from "@/lib/media";

const embed = {
  YouTube: (id: string) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`,
  Vimeo: (id: string) => `https://player.vimeo.com/video/${id}?autoplay=1`,
};

const embedHosts = {
  YouTube: "youtube-nocookie.com/embed",
  Vimeo: "player.vimeo.com/video",
};

const watch = {
  YouTube: (id: string) => `https://www.youtube.com/watch?v=${id}`,
  Vimeo: (id: string) => `https://vimeo.com/${id}`,
};

type VideoModalProps = {
  film: Film | null;
  onNext: () => void;
  onClose: () => void;
};

/** The embed only mounts while the modal is open, so nothing loads until then. */
export function VideoModal({ film, onNext, onClose }: VideoModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const isOpen = film !== null;

  useEffect(() => {
    if (isOpen) dialog.current?.showModal();
    else dialog.current?.close();
  }, [isOpen]);

  return (
    <dialog
      ref={dialog}
      aria-label={film?.title}
      onClose={onClose}
      className="fixed inset-0 m-0 h-dvh max-h-none w-full max-w-none items-center justify-center bg-ink/94 px-gutter py-5 text-white open:flex backdrop:bg-transparent"
    >
      {film && (
        <div className="flex max-h-full w-full max-w-[1100px] flex-col gap-[18px] overflow-y-auto">
          <div className="flex items-center justify-between gap-4">
            <span className="font-mono text-[13px] text-lilac">{film.platform}</span>
            <button
              type="button"
              aria-label="Close film"
              onClick={onClose}
              className="flex size-[52px] flex-none items-center justify-center rounded-full bg-white text-ink focus-visible:outline-white"
            >
              <CloseIcon size={20} />
            </button>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-sm bg-black">
            {film.videoId ? (
              <iframe
                key={film.videoId}
                src={embed[film.platform](film.videoId)}
                title={film.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 size-full"
              />
            ) : (
              <>
                <Image src={film.thumb} alt="" fill sizes="1100px" className="object-cover opacity-55" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 p-4 text-center">
                  <span aria-hidden="true" className="flex size-[88px] items-center justify-center rounded-full bg-pink">
                    <PlayIcon size={30} />
                  </span>
                  <span className="rounded-sm bg-ink/80 px-2.5 py-1.5 font-mono text-xs">
                    {film.platform} embed · {embedHosts[film.platform]}/[VIDEO-ID]
                  </span>
                </div>
              </>
            )}
          </div>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
            <div className="flex max-w-[680px] flex-col gap-1.5">
              <p className="font-serif text-[clamp(28px,3vw,40px)] leading-[1.05]">{film.title}</p>
              <p className="text-base leading-[1.5] text-line">{film.blurb}</p>
              <p className="font-mono text-xs text-pink">
                {film.year} · {film.type} · {film.length}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href={film.videoId ? watch[film.platform](film.videoId) : "#"}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center rounded-full border border-white px-[18px] text-[15px] text-white hover:text-white"
              >
                Watch on {film.platform} ↗
              </a>
              <button type="button" onClick={onNext} className="min-h-11 rounded-full bg-lime px-[18px] text-[15px] text-ink">
                Next film →
              </button>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
