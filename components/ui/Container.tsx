import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Centered max-width wrapper (.wrap from the original: 1180px, 26px gutters). */
export function Container({
  children,
  className,
  wide,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div className={cn("mx-auto px-[26px]", wide ? "max-w-[1300px]" : "max-w-[1180px]", className)}>
      {children}
    </div>
  );
}
