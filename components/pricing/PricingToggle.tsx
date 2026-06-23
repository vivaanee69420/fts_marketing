"use client";

import { useState } from "react";
import { PricingTiers } from "@/components/sections/PricingTiers";
import { cn } from "@/lib/cn";

const OPTIONS: { arch: 1 | 2; label: string }[] = [
  { arch: 1, label: "1 jaw: upper or lower" },
  { arch: 2, label: "2 jaws: upper + lower" },
];

/** 1-arch / full-mouth toggle that drives the priced PricingTiers grid. */
export function PricingToggle() {
  const [arch, setArch] = useState<1 | 2>(1);
  return (
    <>
      <div className="mb-4 flex justify-center">
        <div
          role="tablist"
          aria-label="Jaw pricing"
          className="inline-flex gap-1 rounded-full border border-line bg-soft p-[5px]"
        >
          {OPTIONS.map((o) => {
            const active = arch === o.arch;
            return (
              <button
                key={o.arch}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setArch(o.arch)}
                className={cn(
                  "cursor-pointer rounded-full px-[22px] py-[10px] text-[0.92rem] font-extrabold transition-colors",
                  active ? "bg-teal text-white" : "text-muted hover:text-teal",
                )}
              >
                {o.label}
              </button>
            );
          })}
        </div>
      </div>
      <PricingTiers arch={arch} showPrice />
    </>
  );
}
