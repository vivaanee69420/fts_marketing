import { cn } from "@/lib/cn";

/**
 * A single CDN video tile. Server component — renders a native <video> with
 * controls and `preload="none"` so offscreen videos never autoplay or fetch
 * until the visitor interacts. A reserved aspect-video box prevents layout shift.
 */
export function VideoTile({
  src,
  poster,
  label,
  className,
}: {
  src: string;
  poster?: string;
  label?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn(
        "relative m-0 overflow-hidden rounded-[14px] border border-line bg-ink shadow-sm",
        className,
      )}
    >
      <video
        className="aspect-video w-full bg-ink object-cover"
        src={src}
        poster={poster}
        preload="none"
        muted
        playsInline
        controls
      />
      {label && (
        <figcaption className="relative z-[2] bg-gradient-to-t from-[rgba(8,40,36,0.78)] to-transparent px-[18px] py-3 font-semibold text-white">
          {label}
        </figcaption>
      )}
    </figure>
  );
}
