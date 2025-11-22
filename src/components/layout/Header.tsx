// src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

const serviceLinks = [
  { href: '/kazali-arac-alim', label: 'Kazalı Araç Alımı' },
  { href: '/hasarli-arac-alim', label: 'Hasarlı Araç Alımı' },
  { href: '/pert-arac-alim', label: 'Pert Araç Alımı' },
  { href: '/hurda-arac-alim', label: 'Hurda Araç Alımı' },
];

const cityLinks = [
  { href: '/istanbul-hasarli-arac-alimi', label: 'İstanbul' },
  { href: '/ankara-hasarli-arac-alimi', label: 'Ankara' },
  { href: '/izmir-hasarli-arac-alimi', label: 'İzmir' },
  { href: '/bursa-hasarli-arac-alimi', label: 'Bursa' },
  { href: '/antalya-hasarli-arac-alimi', label: 'Antalya' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [citiesOpen, setCitiesOpen] = useState(false);
  const pathname = usePathname();

  const handlePhone = () => {
    trackPhoneClick();
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setServicesOpen(false);
    setCitiesOpen(false);
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      {/* Top Bar - Contact Strip */}
      <div className="bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="hidden sm:inline">7/24 Hızlı Destek</span>
              <span className="sm:hidden">Aktif</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhone}
                className="hover:opacity-80 transition-opacity"
              >
                📞 {siteConfig.phoneDisplay}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="hover:opacity-80 transition-opacity"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMobile}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-lacivert-700 to-lacivert-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <span className="text-white font-bold text-xl">PA</span>
              </div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-turuncu-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-lg font-bold text-lacivert-700 leading-tight">
                {siteConfig.name}
              </div>
              <div className="text-xs text-gray-500">
                Güvenilir Araç Alımı
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                pathname === '/'
                  ? 'text-turuncu-500 bg-turuncu-50'
                  : 'text-gray-700 hover:text-turuncu-500 hover:bg-turuncu-50'
              }`}
            >
              Ana Sayfa
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-turuncu-500 hover:bg-turuncu-50 rounded-lg transition-all flex items-center gap-1"
              >
                Hizmetler
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cities Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setCitiesOpen(true)}
                onMouseLeave={() => setCitiesOpen(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-turuncu-500 hover:bg-turuncu-50 rounded-lg transition-all flex items-center gap-1"
              >
                Şehirler
                <svg
                  className={`w-4 h-4 transition-transform ${citiesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {citiesOpen && (
                <div
                  onMouseEnter={() => setCitiesOpen(true)}
                  onMouseLeave={() => setCitiesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                >
                  {cityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 transition-colors"
                    >
                      📍 {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                pathname.startsWith('/blog')
                  ? 'text-turuncu-500 bg-turuncu-50'
                  : 'text-gray-700 hover:text-turuncu-500 hover:bg-turuncu-50'
              }`}
            >
              Blog
            </Link>

            <Link
              href="/hakkimizda"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                pathname === '/hakkimizda'
                  ? 'text-turuncu-500 bg-turuncu-50'
                  : 'text-gray-700 hover:text-turuncu-500 hover:bg-turuncu-50'
              }`}
            >
              Hakkımızda
            </Link>
            <Link
  href="/iletisim"
  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
    pathname === '/iletisim'
      ? 'text-turuncu-500 bg-turuncu-50'
      : 'text-gray-700 hover:text-turuncu-500 hover:bg-turuncu-50'
  }`}
>
  İletişim
</Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:from-turuncu-600 hover:to-turuncu-700 transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hızlı Teklif Al
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            aria-label="Menüyü Aç"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={closeMobile}
              className="block px-4 py-3 text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 rounded-lg transition-colors"
            >
              Ana Sayfa
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 rounded-lg transition-colors"
              >
                <span>Hizmetler</span>
                <svg
                  className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-turuncu-600"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Cities */}
            <div>
              <button
                onClick={() => setCitiesOpen(!citiesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 rounded-lg transition-colors"
              >
                <span>Şehirler</span>
                <svg
                  className={`w-5 h-5 transition-transform ${citiesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {citiesOpen && (
                <div className="ml-4 mt-2 space-y-2">
                  {cityLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobile}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-turuncu-600"
                    >
                      📍 {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              onClick={closeMobile}
              className="block px-4 py-3 text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 rounded-lg transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/hakkimizda"
              onClick={closeMobile}
              className="block px-4 py-3 text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 rounded-lg transition-colors"
            >
              Hakkımızda
            </Link>
<Link
  href="/iletisim"
  onClick={closeMobile}
  className="block px-4 py-3 text-gray-700 hover:bg-turuncu-50 hover:text-turuncu-600 rounded-lg transition-colors"
>
  İletişim
</Link>
            {/* Mobile CTA */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="block mt-4 px-6 py-3 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white text-center rounded-full font-semibold shadow-lg"
            >
              💬 WhatsApp ile Teklif Al
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
