import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Manrope } from "next/font/google";
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
const manrope = Manrope({ subsets: ['latin'], display: 'swap', variable: '--font-manrope' });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Araban Nakit - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
    template: '%s | Araban Nakit',
  },
  description: siteConfig.description,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
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
    images: [{ url: '/Newimages/accident/damaged-front.jpg', width: 1800, height: 1200, alt: 'Hasarlı araç alımı - Araban Nakit' }],
  },
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description, images: ['/Newimages/accident/damaged-front.jpg'] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable} font-sans`} suppressHydrationWarning>
        <GoogleTagManager />
        <GoogleAnalytics />
        <FacebookPixel />

        <StructuredData />
        <Header />
        <main className="pt-[76px] lg:pt-[112px]">{children}</main>
        <Footer />
        <UnifiedFloatingButtons />
        <Analytics />
      </body>
    </html>
  );
}
