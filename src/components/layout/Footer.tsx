// src/components/layout/Footer.tsx
'use client';
import Link from 'next/link';
import { siteConfig } from '@/config/site';


export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Ana Sayfa', href: '/' },
    { label: 'Hakkımızda', href: '/hakkimizda' },
    { label: 'Blog', href: '/blog' },
    { label: 'İletişim', href: '/iletisim' },
  ];

  const services = [
    { label: 'Kazalı Araç Alımı', href: '/kazali-arac-alim' },
    { label: 'Hasarlı Araç Alımı', href: '/hasarli-arac-alim' },
    { label: 'Pert Araç Alımı', href: '/pert-arac-alim' },
    { label: 'Hurda Araç Alımı', href: '/hurda-arac-alim' },
  ];

  const cities = ['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya', 'Adana'];

  return (
    <footer className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-500 to-lacivert-800 text-white overflow-hidden">
      {/* Wave Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute bottom-0 w-full h-64" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
        <svg className="absolute bottom-0 w-full h-48" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,30 C150,90 350,30 600,60 C850,90 1050,30 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-14 w-auto rounded-2xl flex items-center justify-center shadow-lg">
                <img src="/logo.jpg" alt="Araban Nakit Logo" className="h-full w-auto object-contain" />
              </div>

            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-6">
              {siteConfig.description}. 7/24 hizmet, anında ödeme ve ücretsiz ekspertiz garantisi.
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm">✓ 15+ Yıl Tecrübe</div>
              <div className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg text-sm">✓ 50K+ Müşteri</div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                  Kurumsal
                </h3>
                <ul className="space-y-3">
                  {quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-blue-200 hover:text-turuncu-400 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-2 bg-turuncu-400 rounded-full transition-all"></span>
                        <span className="text-sm">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                  Hizmetlerimiz
                </h3>
                <ul className="space-y-3">
                  {services.map((service) => (
                    <li key={service.href}>
                      <Link
                        href={service.href}
                        className="text-blue-200 hover:text-turuncu-400 transition-colors flex items-center gap-2 group"
                      >
                        <span className="w-0 group-hover:w-2 h-2 bg-turuncu-400 rounded-full transition-all"></span>
                        <span className="text-sm">{service.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                  İletişim
                </h3>
                <ul className="space-y-4">
                  <li>
                    <a
                      className="flex items-start gap-3 text-blue-200 hover:text-turuncu-400 transition-colors group"
                    >
                      <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-turuncu-500/20">
                        📞
                      </span>
                      <div>
                        <div className="text-xs text-blue-400">Telefon</div>
                        <div className="text-sm font-semibold">{siteConfig.phoneDisplay}</div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="flex items-start gap-3 text-blue-200 hover:text-turuncu-400 transition-colors group"
                    >
                      <span className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-turuncu-500/20">
                        📧
                      </span>
                      <div>
                        <div className="text-xs text-blue-400">E-posta</div>
                        <div className="text-sm font-semibold">{siteConfig.email}</div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Cities We Serve */}
        <div className="border-t border-lacivert-800 pt-8 mb-8">
          <h3 className="text-lg font-bold mb-4">Hizmet Verdiğimiz Şehirler</h3>
          <div className="flex flex-wrap gap-2">
            {cities.map((city) => (
              <span
                key={city}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-turuncu-500/20 transition-colors cursor-pointer"
              >
                📍 {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-lacivert-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-blue-300">
              © {currentYear} {siteConfig.name}. Tüm hakları saklıdır.
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-blue-400 mr-2">Bizi Takip Edin:</span>
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-turuncu-500/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              )}
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-turuncu-500/20 rounded-full flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-blue-300">
              <Link href="/gizlilik-politikasi" className="hover:text-turuncu-400 transition-colors">
                Gizlilik
              </Link>
              <span>•</span>
              <Link href="/kvkk" className="hover:text-turuncu-400 transition-colors">
                KVKK
              </Link>
              <span>•</span>
              <Link href="/kullanim-sartlari" className="hover:text-turuncu-400 transition-colors">
                Şartlar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
