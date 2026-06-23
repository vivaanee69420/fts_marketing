import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "gold" | "teal" | "ghost" | "ghost-w";
type Size = "base" | "lg";

const VARIANTS: Record<Variant, string> = {
  gold: "bg-gold text-[#3a2c08] border-gold hover:bg-gold-d hover:border-gold-d",
  teal: "bg-teal text-white border-teal hover:bg-teal-d hover:border-teal-d",
  ghost: "bg-transparent text-teal border-line hover:border-teal hover:bg-soft",
  "ghost-w": "bg-transparent text-white border-white/45 hover:bg-white/10 hover:border-white",
};

const SIZES: Record<Size, string> = {
  base: "px-7 py-[15px] text-base",
  lg: "px-[34px] py-[18px] text-[1.06rem]",
};

const base =
  "inline-flex items-center justify-center gap-2 font-bold rounded-full border-[1.6px] " +
  "leading-none text-center transition-[background,transform,border-color] duration-150 " +
  "hover:-translate-y-px cursor-pointer";

function classes(variant: Variant, size: Size, className?: string, block?: boolean) {
  return cn(base, VARIANTS[variant], SIZES[size], block && "w-full", className);
}

type CommonProps = { variant?: Variant; size?: Size; block?: boolean; children: ReactNode };

export function ButtonLink({
  href,
  variant = "teal",
  size = "base",
  block,
  className,
  children,
  ...rest
}: CommonProps & { href: string; className?: string } & Omit<ComponentProps<typeof Link>, "href" | "className">) {
  return (
    <Link href={href} className={classes(variant, size, className, block)} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "teal",
  size = "base",
  block,
  className,
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button className={classes(variant, size, className, block)} {...rest}>
      {children}
    </button>
  );
}
