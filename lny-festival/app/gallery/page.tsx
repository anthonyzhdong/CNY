import type { Metadata } from "next";
import { GalleryArchive } from "@/components/GalleryArchive";

export const metadata: Metadata = {
  title: "Gallery archive",
  description: "Photos and films from past Lunar New Year Festivals in Wellington.",
};

export default function Gallery() {
  return <GalleryArchive />;
}
