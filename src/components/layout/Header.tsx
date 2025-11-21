// ===== src/components/layout/Header.tsx =====
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackPhoneClick } from '@/lib/analytics';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-blue-700 font-bold text-xl">
            <i className="fas fa-car-crash text-2xl text-orange-500"></i>
            <span className="hidden sm:inline">{siteConfig.name}</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-orange-500 font-medium">
              Ana Sayfa
            </Link>

            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 font-medium flex items-center gap-1">
                Hizmetler
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[240px]">
                {siteConfig.services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/${service.slug}`}
                    className="block px-5 py-3 hover:bg-orange-500 hover:text-white transition"
                  >
                    <i className={`fas ${service.icon} mr-3`}></i>
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/hakkimizda" className="text-gray-700 hover:text-orange-500 font-medium">
              Hakkımızda
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition flex items-center gap-2"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp</span>
            </a>
            
              href={`tel:${siteConfig.phone}`}
              onClick={trackPhoneClick}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-orange-600 transition"
            >
              <i className="fas fa-phone-alt mr-2"></i>
              {siteConfig.phoneDisplay}
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="py-2 hover:text-orange-500">Ana Sayfa</Link>
              {siteConfig.services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}`} className="py-2 hover:text-orange-500">
                  <i className={`fas ${service.icon} mr-2`}></i>
                  {service.title}
                </Link>
              ))}
              <Link href="/hakkimizda" className="py-2 hover:text-orange-500">Hakkımızda</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}