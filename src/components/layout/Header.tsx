// ===== src/components/layout/Header.tsx =====
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/data/site';
import { mainNavigation } from '@/data/navigation';
import { trackPhoneClick } from '@/lib/analytics';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-lacivert-700">
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {mainNavigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-turuncu-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={trackPhoneClick}
              className="inline-flex items-center gap-2 rounded-lg bg-turuncu-500 px-4 py-2 text-sm font-semibold text-white hover:bg-turuncu-600 transition-colors"
            >
              📞 {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Menü</span>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            {mainNavigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block py-2 text-sm font-medium text-gray-700 hover:text-turuncu-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => {
                trackPhoneClick();
                setMobileMenuOpen(false);
              }}
              className="block py-2 text-sm font-medium text-turuncu-500"
            >
              📞 {siteConfig.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
