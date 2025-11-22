// src/components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

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
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="hidden sm:inline">7/24 Hızlı Destek</span>
              <span className="sm:hidden">Aktif</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhone}
                className="flex items-center gap-2 hover:opacity-85 transition-opacity"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15">
                  <FaPhoneAlt className="w-3.5 h-3.5 text-white" />
                </span>
                <span className="font-medium text-white">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white text-[#25D366]">
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </span>
                <span className="font-medium text-white">WhatsApp</span>
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl hover:bg-[#20BA5A] transition-all"
            >
              <FaWhatsapp className="w-5 h-5" />
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
              className="mt-4 flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full font-semibold shadow-lg"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>WhatsApp ile Teklif Al</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
