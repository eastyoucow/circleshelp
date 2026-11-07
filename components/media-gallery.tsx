import Image from "next/image";
import type { MediaItem } from "@/content/types";
import { cn } from "@/lib/utils";

type MediaGalleryProps = {
  media: MediaItem[];
  className?: string;
};

export function MediaGallery({ media, className }: MediaGalleryProps) {
  if (media.length === 0) return null;

  return (
    <div
      className={cn(
        "grid gap-4 sm:grid-cols-2",
        media.length === 1 && "sm:grid-cols-1",
        className,
      )}
    >
      {media.map((item) => {
        if (item.type === "video") {
          return (
            <div
              key={item.src}
              className="overflow-hidden rounded-2xl bg-black/5"
            >
              <video
                controls
                preload="metadata"
                className="aspect-[4/3] h-full w-full object-cover"
                src={item.src}
              >
                <track kind="captions" />
              </video>
            </div>
          );
        }

        return (
          <div
            key={item.src}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-black/5"
          >
            <Image
              src={item.src}
              alt={item.alt ?? ""}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
          </div>
        );
      })}
    </div>
  );
}
