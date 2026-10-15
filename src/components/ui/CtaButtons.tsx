'use client';

import Link from 'next/link';
import { FaArrowRight, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

/**
 * Tracked WhatsApp/phone (and optionally "Ücretsiz Teklif Al") CTA buttons.
 * A tiny client island so pages that render these can stay Server Components
 * — click tracking needs an onClick handler, which can't be passed from a
 * Server Component.
 */
export function HeroCtaButtons({ className = 'mt-8 flex flex-wrap gap-3' }: { className?: string }) {
  return (
    <div className={className}>
      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="button-whatsapp"><FaWhatsapp />WhatsApp ile Teklif Al</a>
      <a href={`tel:${siteConfig.phone}`} onClick={trackPhoneClick} className="button-dark"><FaPhoneAlt />{siteConfig.phoneDisplay}</a>
    </div>
  );
}

export function FullCtaButtons({ className = 'mt-6 flex flex-wrap gap-3' }: { className?: string }) {
  return (
    <div className={className}>
      <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="button-whatsapp"><FaWhatsapp />WhatsApp ile Yaz</a>
      <a href={`tel:${siteConfig.phone}`} onClick={trackPhoneClick} className="button-dark"><FaPhoneAlt />{siteConfig.phoneDisplay}</a>
      <Link href="/#arac-sat" className="button-primary">Ücretsiz Teklif Al <FaArrowRight /></Link>
    </div>
  );
}
