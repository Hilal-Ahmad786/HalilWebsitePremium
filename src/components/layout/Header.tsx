// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { useState } from 'react';

// Hizmetler alt menüsü
const serviceLinks = [
  { href: '/hizmetler/kazali-arac-alimi', label: 'Kazalı Araç Alımı' },
  { href: '/hizmetler/hasarli-arac-alimi', label: 'Hasarlı Araç Alımı' },
  { href: '/hizmetler/pert-arac-alimi', label: 'Pert Araç Alımı' },
  { href: '/hizmetler/hurda-arac-alimi', label: 'Hurda Araç Alımı' },
];

// Şehirler alt menüsü (sayfaları sonra yapacağız)
const cityLinks = [
  { href: '/istanbul-hasarli-arac-alimi', label: 'İstanbul' },
  { href: '/ankara-hasarli-arac-alimi', label: 'Ankara' },
  { href: '/izmir-hasarli-arac-alimi', label: 'İzmir' },
  { href: '/bursa-hasarli-arac-alimi', label: 'Bursa' },
  { href: '/antalya-hasarli-arac-alimi', label: 'Antalya' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openServicesMobile, setOpenServicesMobile] = useState(false);
  const [openCitiesMobile, setOpenCitiesMobile] = useState(false);

  const handlePhone = () => {
    trackPhoneClick();
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
  };

  const isHome = pathname === '/';
  const isOnServices = serviceLinks.some((s) => pathname.startsWith(s.href));
  const isOnCities = cityLinks.some((c) => pathname.startsWith(c.href));
  const isOnBlog = pathname.startsWith('/blog');
  const isOnAbout = pathname.startsWith('/hakkimizda');

  const closeMobileMenu = () => {
    setOpen(false);
    setOpenServicesMobile(false);
    setOpenCitiesMobile(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-slate-200">
      {/* Üst bar */}
      <div className="hidden md:flex items-center justify-between px-6 lg:px-10 py-2 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          7/24 Ara &amp; WhatsApp ile Hızlı Teklif
        </span>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhone}
            className="flex items-center gap-2 hover:text-lacivert-900 transition-colors"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
              📞
            </span>
            <span>{siteConfig.phoneDisplay}</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="flex items-center gap-2 hover:text-lacivert-900 transition-colors"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-100">
              💬
            </span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Ana bar */}
      <div className="px-4 sm:px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
        {/* Logo / Site adı */}
        <Link href="/" className="flex items-center gap-3" onClick={closeMobileMenu}>
          <div className="h-9 w-9 rounded-2xl bg-lacivert-900 text-white flex items-center justify-center text-sm font-semibold">
            {siteConfig.name.substring(0, 2).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm sm:text-base text-lacivert-900">
              {siteConfig.name}
            </span>
            <span className="text-[11px] text-slate-500 hidden sm:block">
              Hasarlı · Kazalı · Pert · Hurda Araç Alımı
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 text-sm">
          {/* Ana sayfa */}
          <Link
            href="/"
            className={[
              'px-3 py-2 rounded-full transition-colors',
              isHome
                ? 'bg-lacivert-900 text-white'
                : 'text-slate-600 hover:text-lacivert-900 hover:bg-slate-100',
            ].join(' ')}
          >
            Ana Sayfa
          </Link>

          {/* Hizmetler dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={[
                'px-3 py-2 rounded-full transition-colors inline-flex items-center gap-1',
                isOnServices
                  ? 'bg-lacivert-900 text-white'
                  : 'text-slate-600 hover:text-lacivert-900 hover:bg-slate-100',
              ].join(' ')}
            >
              <span>Hizmetler</span>
              <span className="text-[10px]">▾</span>
            </button>
            <div className="pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition absolute left-0 mt-2 w-56 rounded-2xl bg-white shadow-lg border border-slate-100 z-50">
              <div className="py-2">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-lacivert-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Şehirler dropdown */}
          <div className="relative group">
            <button
              type="button"
              className={[
                'px-3 py-2 rounded-full transition-colors inline-flex items-center gap-1',
                isOnCities
                  ? 'bg-lacivert-900 text-white'
                  : 'text-slate-600 hover:text-lacivert-900 hover:bg-slate-100',
              ].join(' ')}
            >
              <span>Şehirler</span>
              <span className="text-[10px]">▾</span>
            </button>
            <div className="pointer-events-none opacity-0 translate-y-1 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition absolute left-0 mt-2 w-56 rounded-2xl bg-white shadow-lg border border-slate-100 z-50">
              <div className="py-2">
                {cityLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-lacivert-900"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Blog */}
          <Link
            href="/blog"
            className={[
              'px-3 py-2 rounded-full transition-colors',
              isOnBlog
                ? 'bg-lacivert-900 text-white'
                : 'text-slate-600 hover:text-lacivert-900 hover:bg-slate-100',
            ].join(' ')}
          >
            Blog
          </Link>

          {/* Hakkımızda */}
          <Link
            href="/hakkimizda"
            className={[
              'px-3 py-2 rounded-full transition-colors',
              isOnAbout
                ? 'bg-lacivert-900 text-white'
                : 'text-slate-600 hover:text-lacivert-900 hover:bg-slate-100',
            ].join(' ')}
          >
            Hakkımızda
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhone}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-lacivert-900 hover:bg-slate-50 transition-colors"
          >
            <span className="text-xs">Ara</span>
            <span className="text-[13px] font-semibold">
              {siteConfig.phoneDisplay}
            </span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 rounded-full bg-turuncu-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-turuncu-700 transition-colors"
          >
            <span className="text-sm">WhatsApp’tan Teklif Al</span>
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex lg:hidden h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-700"
          aria-label="Menüyü aç"
        >
          <span className="sr-only">Menü</span>
          {open ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1 text-sm">
            {/* Ana sayfa */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={[
                'px-3 py-2 rounded-lg',
                isHome
                  ? 'bg-lacivert-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100',
              ].join(' ')}
            >
              Ana Sayfa
            </Link>

            {/* Hizmetler (accordion) */}
            <div>
              <button
                type="button"
                onClick={() => setOpenServicesMobile((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <span>Hizmetler</span>
                <span className="text-xs">{openServicesMobile ? '−' : '+'}</span>
              </button>
              {openServicesMobile && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Şehirler (accordion) */}
            <div>
              <button
                type="button"
                onClick={() => setOpenCitiesMobile((v) => !v)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                <span>Şehirler</span>
                <span className="text-xs">{openCitiesMobile ? '−' : '+'}</span>
              </button>
              {openCitiesMobile && (
                <div className="ml-4 mt-1 flex flex-col gap-1">
                  {cityLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="px-3 py-1.5 rounded-lg text-slate-700 hover:bg-slate-100"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Blog */}
            <Link
              href="/blog"
              onClick={closeMobileMenu}
              className={[
                'px-3 py-2 rounded-lg',
                isOnBlog
                  ? 'bg-lacivert-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100',
              ].join(' ')}
            >
              Blog
            </Link>

            {/* Hakkımızda */}
            <Link
              href="/hakkimizda"
              onClick={closeMobileMenu}
              className={[
                'px-3 py-2 rounded-lg',
                isOnAbout
                  ? 'bg-lacivert-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100',
              ].join(' ')}
            >
              Hakkımızda
            </Link>

            {/* Alt kısım CTA'lar (mobil) */}
            <div className="mt-3 flex flex-col gap-2">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhone}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-lacivert-900"
              >
                📞 Hemen Ara
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-turuncu-600 px-3 py-2 text-sm font-semibold text-white hover:bg-turuncu-700 transition-colors"
              >
                💬 WhatsApp Teklifi
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
