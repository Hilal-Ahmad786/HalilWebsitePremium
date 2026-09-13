'use client';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function UnifiedFloatingButtons() {
  return (
    <>
      {/* Mobile / small devices: fixed bottom bar, Ara + WhatsApp */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg/95 p-3 pb-[calc(.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-lg gap-2">
          <a href={`tel:${siteConfig.phone}`} onClick={trackPhoneClick} className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-line py-3 text-sm font-bold text-ink">
            <FaPhoneAlt />Ara
          </a>
          <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp py-3 text-sm font-bold text-[#0b2815]">
            <FaWhatsapp />WhatsApp
          </a>
        </div>
      </div>

      {/* Desktop: floating Ara + WhatsApp buttons, bottom-right. Compact icon
          buttons that expand to show a label on hover/focus, so they stay out
          of the way of page content (e.g. the hero form) at rest. */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackWhatsAppClick}
          aria-label="WhatsApp ile yaz"
          className="group flex h-14 w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-whatsapp px-0 text-[#0b2815] shadow-[0_12px_30px_rgba(22,24,23,.22)] transition-all duration-200 ease-out hover:w-[168px] hover:justify-start hover:rounded-lg hover:px-4 focus-visible:w-[168px] focus-visible:justify-start focus-visible:rounded-lg focus-visible:px-4"
        >
          <FaWhatsapp className="shrink-0 text-xl" />
          <span className="hidden whitespace-nowrap text-sm font-bold group-hover:inline group-focus-visible:inline">WhatsApp ile Yaz</span>
        </a>
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={trackPhoneClick}
          aria-label={`Telefon: ${siteConfig.phoneDisplay}`}
          className="group flex h-14 w-14 items-center justify-center gap-2 overflow-hidden rounded-full bg-ink px-0 text-white shadow-[0_12px_30px_rgba(22,24,23,.22)] transition-all duration-200 ease-out hover:w-[168px] hover:justify-start hover:rounded-lg hover:px-4 focus-visible:w-[168px] focus-visible:justify-start focus-visible:rounded-lg focus-visible:px-4"
        >
          <FaPhoneAlt className="shrink-0 text-lg" />
          <span className="hidden whitespace-nowrap text-sm font-bold group-hover:inline group-focus-visible:inline">{siteConfig.phoneDisplay}</span>
        </a>
      </div>
    </>
  );
}
