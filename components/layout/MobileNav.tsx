"use client";

import Link from "next/link";
import { useState } from "react";
import { NAV } from "@/lib/site";

/** Burger + slide-down menu for < lg. Children render inline (expanded). */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <div className="xl:hidden">
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="cursor-pointer border-none bg-transparent text-[26px] text-ink"
      >
        ☰
      </button>
      {open && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-3 border-b border-line bg-white px-[26px] py-[18px] shadow-card">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label}>
                <span className="text-[0.95rem] font-semibold text-ink2">{item.label}</span>
                <div className="flex flex-col gap-1 pl-3 pt-1">
                  {item.children.map((c) => (
                    <Link
                      key={c.href + c.label}
                      href={c.href}
                      onClick={() => setOpen(false)}
                      className="py-1 text-[0.92rem] font-semibold text-ink2 hover:text-teal"
                    >
                      {c.label}
                      {c.sub ? ` · ${c.sub}` : ""}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href!}
                onClick={() => setOpen(false)}
                className="text-[0.95rem] font-semibold text-ink2 hover:text-teal"
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      )}
    </div>
  );
}
