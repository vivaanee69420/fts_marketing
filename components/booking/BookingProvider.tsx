"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { GHLEmbed } from "./GHLEmbed";

type BookingCtx = { open: boolean; openBooking: () => void; closeBooking: () => void };

const Ctx = createContext<BookingCtx | null>(null);

export function useBooking() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}

export function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openBooking = useCallback(() => setOpen(true), []);
  const closeBooking = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <Ctx.Provider value={{ open, openBooking, closeBooking }}>
      {children}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-[rgba(10,34,30,0.55)] px-[18px] py-10 backdrop-blur-[4px]"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeBooking();
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Book your free consultation"
        >
          <div className="m-auto w-full max-w-[560px] overflow-hidden rounded-[20px] bg-white shadow-lg">
            <div className="relative bg-gradient-to-br from-teal-d to-teal px-[30px] py-6 text-white">
              <button
                onClick={closeBooking}
                aria-label="Close"
                className="absolute right-5 top-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-full border-none bg-white/20 text-lg text-white"
              >
                ×
              </button>
              <h3 className="m-0 mb-1 text-white">Book your free consultation</h3>
              <p className="m-0 text-[0.92rem] text-[#cdeae3]">
                Free 3D scan · specialist assessment · written plan · no obligation
              </p>
            </div>
            <div className="px-[30px] py-7">
              {/* iframe only mounts when the modal is open — true facade load */}
              <GHLEmbed />
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
}
