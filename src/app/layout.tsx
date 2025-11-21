// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import UnifiedFloatingButtons from "@/components/layout/UnifiedFloatingButtons";
import { GoogleTagManager, GoogleAnalytics, FacebookPixel } from "@/components/tracking";
import { siteConfig } from '@/config/site';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: 'Premium Auto Expert - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    template: '%s | Premium Auto Expert',
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
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        <GoogleTagManager />
        <GoogleAnalytics />
        <FacebookPixel />

        <Header />
        <main className="pt-[120px] md:pt-[104px]">{children}</main>
        <Footer />
        <UnifiedFloatingButtons />
      </body>
    </html>
  );
}