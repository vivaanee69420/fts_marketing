import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site";
import { BookingProvider } from "@/components/booking/BookingProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { organization } from "@/lib/jsonld";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Fixed Teeth Solutions — Full Arch Dental Implant Specialists | Eat. Smile. Live. Again.",
    template: "%s | Fixed Teeth Solutions",
  },
  description:
    "The UK's full arch dental implant specialists. Fixed teeth in a day from £7,997 per arch. Free consultation + 3D scan across 5 Kent & London clinics. Finance available.",
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <JsonLd data={organization()} />
        <BookingProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
