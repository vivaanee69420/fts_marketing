import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type Tone = "default" | "soft" | "teal" | "ink";

const TONES: Record<Tone, string> = {
  default: "bg-white text-ink",
  soft: "bg-cream text-ink",
  teal: "bg-gradient-to-br from-teal-d to-teal text-[#eaf6f2] [&_h2]:text-white [&_h3]:text-white",
  ink: "bg-ink text-[#dbe7e3] [&_h2]:text-white [&_h3]:text-white",
};

/** Full-bleed section with the original 84px vertical rhythm and tone variants. */
export function Section({
  children,
  tone = "default",
  className,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("py-[84px]", TONES[tone], className)}>
      {children}
    </section>
  );
}

export function Kicker({
  children,
  center,
  gold,
}: {
  children: ReactNode;
  center?: boolean;
  gold?: boolean;
}) {
  return (
    <span className={cn("kicker", center && "kicker-center", gold && "kicker-gold")}>
      {children}
    </span>
  );
}
