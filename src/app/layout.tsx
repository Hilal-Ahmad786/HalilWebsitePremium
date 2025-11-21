// ===== src/app/layout.tsx =====
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer, FloatingButtons } from "@/components/layout";
import { GoogleTagManager, GoogleAnalytics, FacebookPixel } from "@/components/tracking";
import { siteConfig } from "@/data/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.metaTitle || siteConfig.name,
  description: siteConfig.metaDescription || siteConfig.description,
  keywords: [
    "araç alım",
    "ikinci el araç",
    "araç satış",
    "ekspertiz",
    "İstanbul araç alım",
    "güvenilir araç alım",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.metaTitle || siteConfig.name,
    description: siteConfig.metaDescription || siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle || siteConfig.name,
    description: siteConfig.metaDescription || siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        {/* Tracking Scripts */}
        <GoogleTagManager />
        <GoogleAnalytics />
        <FacebookPixel />

        {/* Layout */}
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
