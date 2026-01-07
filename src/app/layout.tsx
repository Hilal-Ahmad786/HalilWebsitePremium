import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import UnifiedFloatingButtons from "@/components/layout/UnifiedFloatingButtons";
import ThemeOptimizer from "@/components/providers/ThemeOptimizer";

import { StructuredData } from "@/components/seo/StructuredData";
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: 'Araban Nakit - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    template: '%s | Araban Nakit',
  },
  description: siteConfig.description,
  keywords: [
    'kazalı araç alan',
    'hasarlı araç alan',
    'pert araç alan',
    'hurda araç alan',
    'istanbul araç alım',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: siteConfig.url,
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} font-sans`}>
        <ThemeOptimizer />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />


        <StructuredData />
        <Header />
        <main className="pt-[120px] md:pt-[104px]">{children}</main>
        <Footer />
        <UnifiedFloatingButtons />

      </body>
    </html>
  );
}