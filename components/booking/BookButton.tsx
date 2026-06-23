"use client";

import type { ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { useBooking } from "./BookingProvider";

type Variant = "gold" | "teal" | "ghost" | "ghost-w";

/** Opens the shared booking modal. Used wherever the original called openBooking(). */
export function BookButton({
  children = "Book consultation",
  variant = "gold",
  size = "base",
  block,
  className,
}: {
  children?: ReactNode;
  variant?: Variant;
  size?: "base" | "lg";
  block?: boolean;
  className?: string;
}) {
  const { openBooking } = useBooking();
  return (
    <Button variant={variant} size={size} block={block} className={className} onClick={openBooking}>
      {children}
    </Button>
  );
}
