import { Fraunces, Inter } from "next/font/google";

// Self-hosted via next/font (replaces the original Google Fonts <link>).
// Exposed as CSS variables consumed by the Tailwind theme in globals.css.
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});
