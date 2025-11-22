// src/components/layout/UnifiedFloatingButtons.tsx
'use client';

import { useState, type ReactNode } from 'react';
import { siteConfig } from '@/config/site';
import {
  trackCTAClick,
  trackWhatsAppClick,
  trackPhoneClick,
} from '@/lib/analytics';
import { FaPhone, FaWhatsapp, FaComments } from 'react-icons/fa';

type FloatingIconProps = {
  icon: ReactNode;
  label: string;
  description?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'call' | 'whatsapp' | 'chat';
};

function FloatingIcon({
  icon,
  label,
  description,
  href,
  onClick,
  variant = 'call',
}: FloatingIconProps) {
  const baseClasses =
    'flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:scale-110';

  const colorClasses =
    variant === 'whatsapp'
      ? 'bg-[#25D366] text-white hover:bg-[#20BA5A] shadow-lg'
      : variant === 'chat'
      ? 'bg-lacivert-600 text-white hover:bg-lacivert-700 shadow-lg'
      : variant === 'call'
      ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg'
      : 'bg-white text-lacivert-700 border border-slate-200 hover:shadow-xl';

  // 🔥 Glow animasyonu sadece call & whatsapp için
  const glowClasses =
    variant === 'whatsapp'
      ? 'before:absolute before:inset-0 before:rounded-full before:bg-[#25D366] before:opacity-40 before:blur-xl before:animate-pulse before:content-[""]'
      : variant === 'call'
      ? 'before:absolute before:inset-0 before:rounded-full before:bg-orange-400 before:opacity-40 before:blur-xl before:animate-pulse before:content-[""]'
      : '';

  const showBadge = variant === 'chat';

  const content = (
    <button
      type="button"
      onClick={onClick}
      className={`relative ${baseClasses} ${colorClasses} ${glowClasses}`}
      aria-label={label}
    >
      <span className="relative inline-flex items-center justify-center">
        {icon}
        {showBadge && (
          <>
            {/* Ping animasyonu */}
            <span className="absolute -top-1 -right-1 inline-flex h-3.5 w-3.5 rounded-full bg-red-500 opacity-75 animate-ping" />
            {/* Sabit kırmızı nokta */}
            <span className="absolute -top-1 -right-1 inline-flex h-3.5 w-3.5 rounded-full bg-red-500 border border-white" />
          </>
        )}
      </span>
    </button>
  );

  return (
    <div className="group relative flex items-center">
      {/* Hover ile açılan label */}
      <div className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 origin-right scale-95 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-0 transition-all duration-200">
        <div className="rounded-full bg-slate-900/95 text-white text-xs px-3 py-1.5 shadow-lg whitespace-nowrap flex flex-col gap-0.5">
          <span className="font-semibold text-[12px] group-hover:text-[13px] transition-all duration-200">
            {label}
          </span>
          {description && (
            <span className="text-[11px] opacity-85 group-hover:text-[12px] transition-all duration-200">
              {description}
            </span>
          )}
        </div>
      </div>

      {href ? (
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="block"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}

export default function UnifiedFloatingButtons() {
  const [showChat, setShowChat] = useState(false);

  const whatsappMessage =
    'Merhaba, aracımı satmak istiyorum. Marka/Model/Yıl ve hasar durumunu sizinle paylaşmak isterim.';

  const quickQuestions = [
    'Aracım farklı şehirde, yine de alım yapıyor musunuz?',
    'Pert kayıtlı aracım için de teklif verebilir misiniz?',
    'Ödemeyi nasıl ve ne zaman alacağım?',
  ];

  const handlePhone = () => {
    trackPhoneClick();
    trackCTAClick('Floating Call');
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp');
  };

  const handleChatToggle = () => {
    setShowChat((prev) => !prev);
    trackCTAClick(showChat ? 'Floating Chat Close' : 'Floating Chat Open');
  };

  const handleQuickQuestion = (q: string) => {
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
      q,
    )}`;
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp Quick Question');
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      {/* Desktop: sağ altta ikonlar */}
      <div className="hidden md:flex fixed bottom-24 right-4 z-40 flex-col items-end gap-3">
        <FloatingIcon
          icon={<FaPhone className="h-6 w-6" />}
          label="Hemen Ara"
          description={siteConfig.phoneDisplay}
          href={`tel:${siteConfig.phone}`}
          onClick={handlePhone}
          variant="call"
        />

        <FloatingIcon
          icon={<FaWhatsapp className="h-6 w-6" />}
          label="WhatsApp"
          description="Fotoğraf göndererek teklif alın"
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
            whatsappMessage,
          )}`}
          onClick={handleWhatsApp}
          variant="whatsapp"
        />

        <FloatingIcon
          icon={<FaComments className="h-6 w-6" />}
          label="Sohbet Başlat"
          description="Uzmanımızdan hızlı destek"
          onClick={handleChatToggle}
          variant="chat"
        />
      </div>

      {/* Mobile: altta sabit bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-slate-200">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2.5 gap-2">
          {/* Ara */}
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhone}
            className="relative flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2.5 text-xs font-semibold text-white hover:bg-orange-600 transition-colors overflow-visible"
          >
            {/* Glow */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-orange-400 opacity-40 blur-xl animate-pulse" />
            <FaPhone className="h-5 w-5" />
            <span>Ara</span>
          </a>

          {/* Sohbet */}
          <button
            type="button"
            onClick={handleChatToggle}
            className="relative flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-lacivert-600 px-3 py-2.5 text-xs font-semibold text-white hover:bg-lacivert-700 transition-colors"
          >
            <span className="relative inline-flex">
              <FaComments className="h-5 w-5" />
              {/* Mobile butonda da küçük badge */}
              <span className="absolute -top-1 -right-1 inline-flex h-3 w-3 rounded-full bg-red-500 border border-white" />
            </span>
            <span>Sohbet</span>
          </button>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
              whatsappMessage,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="relative flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white hover:bg-[#20BA5A] transition-colors overflow-visible"
          >
            {/* Glow */}
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-xl bg-[#25D366] opacity-40 blur-xl animate-pulse" />
            <FaWhatsapp className="h-5 w-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Sohbet kutusu – chat ikonunun yanında açılır */}
      {showChat && (
        <div className="fixed bottom-24 right-4 z-50 md:right-20 max-w-[calc(100vw-2.5rem)]">
          <div className="w-[340px] rounded-2xl border border-slate-200 bg-white shadow-xl">
            {/* Üst başlık */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 px-4 py-3">
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Uzmanımızla Hemen Görüşün
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  Araç bilgilerinizi iletin, ortalama{' '}
                  <span className="font-semibold">15 dakika</span> içinde size
                  dönüş yapalım.
                </p>
              </div>
              <button
                type="button"
                onClick={handleChatToggle}
                className="ml-2 rounded-full p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                aria-label="Sohbet penceresini kapat"
              >
                ×
              </button>
            </div>

            {/* İçerik */}
            <div className="px-4 py-3 space-y-3">
              {/* Örnek mesaj kutusu */}
              <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600">
                <p className="font-semibold text-slate-800 mb-1">
                  Örnek mesaj:
                </p>
                <p>
                  “Merhaba,{' '}
                  <span className="italic">
                    [Marka / Model / Yıl, km, hasar durumu]
                  </span>{' '}
                  aracımı satmak istiyorum. Tahmini teklif alabilir miyim?”
                </p>
              </div>

              {/* Hazır sorular */}
              <div className="space-y-1.5">
                <p className="text-[11px] font-semibold text-slate-700">
                  Hazır sorular:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {quickQuestions.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => handleQuickQuestion(q)}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Aksiyon butonları */}
              <div className="space-y-2 pt-1">
                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={handlePhone}
                  className="flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-3 py-2.5 text-sm font-semibold text-white hover:bg-orange-600 transition-colors"
                >
                  <FaPhone className="h-4 w-4" />
                  <span>Hemen Ara</span>
                </a>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                    whatsappMessage,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 py-2.5 text-sm font-semibold text-white hover:bg-[#20BA5A] transition-colors"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  <span>WhatsApp&apos;tan Yaz</span>
                </a>

                <a
                  href="/iletisim"
                  className="flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-3 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-200 transition-colors"
                >
                  <span>📨</span>
                  <span>İletişim Formunu Aç</span>
                </a>
              </div>
            </div>

            {/* Alt bilgi */}
            <div className="border-t border-slate-100 px-4 py-2.5 text-[11px] text-slate-500 flex items-center justify-between">
              <span>Çalışma saatleri: 09:00 – 19:00</span>
              <span>Ortalama dönüş: 15 dk</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
