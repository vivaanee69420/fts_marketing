import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

export function Brand() {
  return (
    <Link href="/" className="flex items-center no-underline" aria-label={SITE_NAME}>
      {/* Full brand lockup (mark + wordmark). width/height declared to prevent CLS. */}
      <Image
        src="/logo.webp"
        alt={SITE_NAME}
        width={573}
        height={480}
        priority
        className="h-[80px] w-auto"
      />
    </Link>
  );
}
