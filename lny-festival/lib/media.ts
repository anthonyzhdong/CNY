import rawFilms from "@/data/films.json";
import rawPhotos from "@/data/photos.json";

export type Photo = {
  src: string;
  alt: string;
  cat: "Performances" | "Food" | "Crafts" | "Crowd";
  year: string;
  ratio: string;
  credit?: string;
};

export type Film = {
  title: string;
  type: "Highlights" | "Performances" | "Behind the scenes";
  year: string;
  length: string;
  platform: "YouTube" | "Vimeo";
  /** [Video IDs TBC]: the player shows a placeholder until these are added. */
  videoId?: string;
  thumb: string;
  blurb: string;
};

export const photos = rawPhotos as Photo[];
export const films = rawFilms as Film[];
export const galleryYears = ["2026", "2025", "2024", "2023"];
