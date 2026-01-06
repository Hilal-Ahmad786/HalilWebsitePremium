
// src/components/ui/CustomerCarePopup.tsx
'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';


export default function CustomerCarePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem('popupShown');

    if (!popupShown) {
      const timer = setTimeout(() => {
        setIsVisible(true);
        // setIsOpen(true); // Disabled for demo
        setTimeout(() => setIsOpen(true), 100);
        sessionStorage.setItem('popupShown', 'true');
      }, 15000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleWhatsAppClick = () => {
    handleClose();
  };

  const handlePhoneClick = () => {
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={handleClose}
      />

      <div
        className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[95%] max-w-md transition-all duration-300 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/90 rounded-full shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-5 text-white text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full text-xs font-semibold mb-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Şimdi Müsait
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Hemen Size Yardımcı Olalım!</h3>
            <p className="text-sm text-orange-100">Aracınız için en yüksek teklifi alın</p>
          </div>

          <div className="px-6 pt-4 pb-4">
            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Merhaba, aracım hakkında bilgi almak istiyorum.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-lg flex items-center justify-center gap-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp ile Mesaj Gönder
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhoneClick}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-5 py-3 rounded-xl font-bold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg flex items-center justify-center gap-2.5"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
                Hemen Ara: {siteConfig.phoneDisplay}
              </a>
            </div>

            <div className="text-center pt-4">
              <p className="text-xs text-gray-500">
                🔒 Güvenli ve Hızlı İşlem Garantisi
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
