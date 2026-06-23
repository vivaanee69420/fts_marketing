import { PromoBar } from "./PromoBar";
import { Brand } from "./Brand";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { BookButton } from "@/components/booking/BookButton";
import { CONFIG } from "@/lib/config";

export function Header() {
  return (
    <header className="sticky top-0 z-[60] border-b border-line bg-white/90 backdrop-blur-[10px]">
      <PromoBar />
      <div className="relative mx-auto flex max-w-[1320px] items-center justify-between gap-6 px-[26px] py-4">
        <Brand />
        <DesktopNav />
        <div className="flex items-center gap-4">
          <a
            href={`tel:${CONFIG.phoneHref}`}
            className="hidden whitespace-nowrap font-bold text-ink xl:inline"
          >
            {CONFIG.phone}
          </a>
          <BookButton variant="gold">Book consultation</BookButton>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
