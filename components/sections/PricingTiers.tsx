import { CONFIG, gbp, type Tier } from "@/lib/config";
import { BookButton } from "@/components/booking/BookButton";
import { cn } from "@/lib/cn";

function TierCard({ t, arch, showPrice }: { t: Tier; arch: 1 | 2; showPrice: boolean }) {
  const price = arch === 1 ? t.price1 : t.price2;
  const fin = arch === 1 ? t.fin1 : t.fin2;
  return (
    <div
      className={cn(
        "relative flex flex-col rounded-[18px] bg-white p-[30px] px-7",
        t.feature ? "border-2 border-gold shadow-card" : "border border-line",
      )}
    >
      {t.feature && (
        <div className="absolute -top-[13px] left-1/2 -translate-x-1/2 rounded-full bg-gold px-[14px] py-[5px] text-[0.72rem] font-extrabold uppercase tracking-[0.08em] text-[#3a2c08]">
          Most popular
        </div>
      )}
      <div className="font-serif text-[1.55rem] text-ink">{t.name}</div>
      <div className="mb-[14px] text-[0.86rem] font-semibold text-muted">{t.material}</div>
      {showPrice && (
        <>
          <div className="font-serif text-[2.5rem] leading-none text-teal">
            {gbp(price)}
            <small className="font-sans text-[0.95rem] font-semibold text-muted">
              {" "}
              /{arch === 1 ? "arch" : "full mouth"}
            </small>
          </div>
          <div className="my-[6px] mb-[18px] text-[0.92rem] font-semibold text-ink2">
            Finance from {gbp(fin)}/month
          </div>
        </>
      )}
      <ul className="mb-[22px] mt-2 flex-1 list-none p-0">
        {t.perks.map((p) => (
          <li
            key={p}
            className="relative border-b border-soft py-2 pl-7 text-[0.95rem] before:absolute before:left-0 before:font-extrabold before:text-teal before:content-['✓']"
          >
            {p}
          </li>
        ))}
      </ul>
      <BookButton variant={t.feature ? "gold" : "teal"} block>
        Book consultation
      </BookButton>
    </div>
  );
}

export function PricingTiers({
  arch = 1,
  showPrice = false,
}: {
  arch?: 1 | 2;
  showPrice?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 items-stretch gap-[22px] md:grid-cols-3">
      {CONFIG.tiers.map((t) => (
        <TierCard key={t.name} t={t} arch={arch} showPrice={showPrice} />
      ))}
    </div>
  );
}
