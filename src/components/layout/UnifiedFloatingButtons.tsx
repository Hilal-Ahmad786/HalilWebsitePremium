// src/components/layout/UnifiedFloatingButtons.tsx
'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function UnifiedFloatingButtons() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkBusinessHours = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOnline(hour >= 9 && hour < 22);
    };
    checkBusinessHours();
    const interval = setInterval(checkBusinessHours, 60000);
    return () => clearInterval(interval);
  }, []);

  const handlePhoneClick = () => {
    trackPhoneClick();
    trackCTAClick('Floating Phone', 'floating-buttons');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp', 'floating-buttons');
  };

  const quickMessages = [
    { emoji: '🚗', text: 'Araç değerlendirmesi', message: 'Merhaba, aracım için değerlendirme almak istiyorum.' },
    { emoji: '📸', text: 'Fotoğraf göndermek istiyorum', message: 'Merhaba, araç fotoğraflarımı göndermek istiyorum.' },
    { emoji: '💰', text: 'Fiyat öğrenmek istiyorum', message: 'Merhaba, aracım için fiyat teklifi alabilir miyim?' },
    { emoji: '📞', text: 'Hemen görüşmek istiyorum', message: 'Merhaba, sizi aramak istiyorum. Müsait misiniz?' },
  ];

  return (
    <>
      {/* Desktop Floating Buttons */}
      <div className="hidden md:block">
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
        >
          {isChatOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
          {isOnline && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
          )}
        </button>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="fixed bottom-28 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>

        <a
          href={`tel:${siteConfig.phone}`}
          onClick={handlePhoneClick}
          className="fixed right-6 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all z-50 flex items-center justify-center"
          style={{ bottom: '12.5rem' }}
        >
          <i className="fas fa-phone-alt text-xl"></i>
        </a>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t shadow-2xl z-50">
        <div className="grid grid-cols-2 gap-0">
          <button
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="flex flex-col items-center py-3 active:bg-gray-100"
          >
            <div className="w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center mb-1">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <span className="text-xs font-semibold">Destek</span>
          </button>

          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="flex flex-col items-center py-2 bg-gradient-to-br from-orange-500 to-orange-600 text-white"
          >
            <div className="w-12 h-12 bg-white/25 rounded-full flex items-center justify-center mb-1">
              <i className="fas fa-phone-alt text-xl"></i>
            </div>
            <span className="text-xs font-bold">HEMEN ARA</span>
          </a>
        </div>
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 md:bottom-24 md:right-24 w-[90vw] max-w-sm bg-white rounded-2xl shadow-2xl z-50 border">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
            <h3 className="font-bold text-lg">Premium Auto Expert</h3>
            <p className="text-sm">{isOnline ? 'Çevrimiçi' : 'Çevrimdışı'}</p>
          </div>

          <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
            {quickMessages.map((item, index) => (
              <a
                key={index}
                href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(item.message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gray-50 hover:bg-blue-50 p-3 rounded-lg"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              </a>
            ))}

            <a
              href={`tel:${siteConfig.phone}`}
              className="block bg-orange-500 text-white p-4 rounded-lg text-center font-bold"
            >
              Hemen Ara: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}