import Link from "next/link";
import { CONFIG } from "@/lib/config";
import { CdnImage } from "@/components/ui/CdnImage";
import { BookButton } from "@/components/booking/BookButton";

export function CentresGrid() {
  return (
    <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
      {CONFIG.centres.map((c) => {
        const href = c.slug ? `/full-arch-solutions-${c.slug}/` : "/clinics/";
        return (
          <div key={c.name} className="overflow-hidden rounded-card border border-line bg-white">
            <div className="relative h-[120px] bg-gradient-to-br from-teal to-teal-l text-white">
              {c.img && <CdnImage src={c.img} alt={`${c.name} clinic`} sizes="(max-width:940px) 100vw, 33vw" />}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,40,36,0.6)] to-transparent" />
              <span className="absolute bottom-3 left-4 z-[2] font-serif text-[1.2rem]">{c.name}</span>
            </div>
            <div className="px-5 py-[18px]">
              <div className="mb-3 text-[0.9rem] text-muted">{c.addr}</div>
              <div className="flex flex-wrap items-center gap-3">
                <Link href={href} className="text-[0.92rem] font-bold text-teal hover:underline">
                  More info →
                </Link>
                <BookButton variant="ghost">Book here →</BookButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
