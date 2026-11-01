import { PlayIcon } from "@/components/Icons";
import { Photo } from "@/components/Photo";
import type { Film } from "@/lib/media";

const playColours = ["bg-pink", "bg-lime", "bg-mint", "bg-gold"];

type FilmTileProps = {
  film: Film;
  index: number;
  onPlay: () => void;
  /** The gallery page shows the length alone; the films page the full meta line. */
  compact?: boolean;
};

export function FilmTile({ film, index, onPlay, compact }: FilmTileProps) {
  return (
    <button
      type="button"
      aria-label={`Play: ${film.title}`}
      onClick={onPlay}
      className="group relative flex w-full flex-col gap-2.5 text-left text-ink"
    >
      <span className="relative block w-full">
        <Photo src={film.thumb} alt="" ratio="16/9" sizes="(max-width: 720px) 100vw, 33vw" />
        <span
          aria-hidden="true"
          className={`absolute left-1/2 top-1/2 -ml-8 -mt-8 flex size-16 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-[1.08] motion-reduce:transition-none ${playColours[index % playColours.length]}`}
        >
          <PlayIcon />
        </span>
        {!compact && (
          <span className="absolute bottom-2.5 right-2.5 rounded-sm bg-ink/85 px-2 py-[3px] font-mono text-xs text-white">
            {film.length}
          </span>
        )}
      </span>
      <span className="text-[18px] font-medium">{film.title}</span>
      {compact ? (
        <span className="font-mono text-xs text-red">{film.length}</span>
      ) : (
        <span className="label text-ink-subtle">
          {film.year} · {film.type} · {film.length}
        </span>
      )}
    </button>
  );
}
