// src/components/layout/FloatingButtons.tsx
'use client';

import { siteConfig } from '@/data/site';
import {
  trackPhoneClick,
  trackWhatsAppClick,
  trackCTAClick,
} from '@/lib/analytics';

export default function FloatingButtons() {
  const handlePhone = () => {
    trackPhoneClick();
    trackCTAClick('Floating Call', 'floating');
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp', 'floating');
  };

  return (
    <>
      {/* Desktop: sağda dikey buton grubu */}
      <div className="hidden md:flex fixed right-6 bottom-8 z-40 flex-col gap-3">
        <div className="rounded-2xl bg-ink text-white px-4 py-3 shadow-xl shadow-slate-900/20 flex flex-col gap-2 max-w-[220px]">
          <p className="text-xs text-slate-300">Tek tuşla teklif almak için:</p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-between gap-2 rounded-xl bg-brand-600 px-3 py-2 text-xs font-semibold text-white hover:bg-brand-700 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">💬</span>
              <span>WhatsApp’tan Teklif Al</span>
            </span>
          </button>
          <button
            onClick={handlePhone}
            className="inline-flex items-center justify-between gap-2 rounded-xl bg-white/10 px-3 py-2 text-xs font-medium text-slate-100 hover:bg-white/15 transition-colors"
          >
            <span className="flex items-center gap-2">
              <span className="text-base">📞</span>
              <span>Hemen Ara</span>
            </span>
            <span className="text-[11px] opacity-80">
              {siteConfig.phoneDisplay}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile: altta sabit bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-slate-200">
        <div className="mx-auto flex max-w-md items-center gap-2 px-3 py-2">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhone}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-ink"
          >
            📞 Ara
          </a>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-brand-600 px-3 py-2 text-xs font-semibold text-white"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>
    </>
  );
}
