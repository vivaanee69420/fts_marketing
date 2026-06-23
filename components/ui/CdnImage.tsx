import Image from "next/image";
import { cn } from "@/lib/cn";

/**
 * Cover image from the GHL/filesafe CDN, rendered inside a relatively-positioned
 * parent (the `.ph` pattern). Uses next/image for lazy-loading + the API, but
 * images are passed through unoptimized (see next.config.ts).
 */
export function CdnImage({
  src,
  alt,
  priority,
  className,
  sizes = "(max-width: 940px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
