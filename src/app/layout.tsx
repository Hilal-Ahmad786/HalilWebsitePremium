import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";
import UnifiedFloatingButtons from "@/components/layout/UnifiedFloatingButtons";
import { GoogleTagManager, GoogleAnalytics, FacebookPixel } from "@/components/tracking";
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
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`} suppressHydrationWarning>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
          crossOrigin="anonymous"
        />
        <GoogleTagManager />
        <GoogleAnalytics />
        <FacebookPixel />

        <StructuredData />
        <Header />
        <main className="pt-[120px] md:pt-[104px]">{children}</main>
        <Footer />
        <UnifiedFloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}