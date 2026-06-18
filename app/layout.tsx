import type { Metadata } from "next";
import "./globals.css";
import { display, body, mono } from "@/lib/fonts";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Commercial Truck Repair & DOT Inspections | Iron Forge, Sedalia CO",
    template: "%s | Iron Forge Commercial Repair",
  },
  description:
    "Iron Forge runs in-shop DOT inspections and full medium-duty truck and trailer repair in Sedalia, CO. One stop between Castle Rock and Colorado Springs.",
  applicationName: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Commercial Truck Repair & DOT Inspections | Iron Forge, Sedalia CO",
    description:
      "In-shop DOT inspections and full medium-duty repair under one roof, between Castle Rock and Colorado Springs.",
    locale: "en_US",
    url: SITE.url,
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Iron Forge Commercial Repair, Sedalia CO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Truck Repair & DOT Inspections | Iron Forge, Sedalia CO",
    description:
      "In-shop DOT inspections and full medium-duty repair under one roof, between Castle Rock and Colorado Springs.",
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-btn focus:bg-gold focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:uppercase focus:text-ink"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={localBusinessSchema()} />
      </body>
    </html>
  );
}
