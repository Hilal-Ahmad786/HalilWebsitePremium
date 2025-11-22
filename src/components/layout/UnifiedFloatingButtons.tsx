// src/components/layout/UnifiedFloatingButtons.tsx
'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function UnifiedFloatingButtons() {
  const [showChat, setShowChat] = useState(false);

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp', 'floating-buttons');
  };

  const handlePhone = () => {
    trackPhoneClick();
    trackCTAClick('Floating Phone', 'floating-buttons');
  };

  return (
    <>
      {/* Desktop: Always visible vertical buttons on bottom right */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-50 flex-col gap-3">
        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsApp}
          className="flex items-center gap-3 px-4 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-xl shadow-lg transition-all group"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
        </a>

        {/* Phone Button */}
        <a
          href={`tel:${siteConfig.phone}`}
          onClick={handlePhone}
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-turuncu-500 to-turuncu-600 hover:from-turuncu-600 hover:to-turuncu-700 text-white rounded-xl shadow-lg transition-all group"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Ara</span>
        </a>

        {/* Chat Button - Opens dialog */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl shadow-lg transition-all group"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
          <span className="whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">Mesaj</span>
        </button>
      </div>

      {/* Chat Dialog Box */}
      {showChat && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setShowChat(false)}
          />
          <div className="hidden md:block fixed right-6 bottom-32 z-50 w-80">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-2xl">👋</span>
                  </div>
                  <div>
                    <div className="font-bold text-white">Premium Auto</div>
                    <div className="text-xs text-blue-100">Çevrimiçi</div>
                  </div>
                </div>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-white hover:bg-white/20 rounded-lg p-1"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-4 bg-gray-50 h-64 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-gray-600 mb-4">Size nasıl yardımcı olabiliriz?</p>
                  <div className="space-y-2">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleWhatsApp}
                      className="block px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-[#20BA5A] transition-colors"
                    >
                      WhatsApp ile Yaz
                    </a>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      onClick={handlePhone}
                      className="block px-4 py-2 bg-turuncu-500 text-white rounded-lg hover:bg-turuncu-600 transition-colors"
                    >
                      Hemen Ara
                    </a>
                    <a
                      href="/iletisim"
                      className="block px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      İletişim Formu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Mobile: Bottom bar - unchanged */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhone}
            className="flex flex-col items-center justify-center py-3 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-turuncu-500 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span className="text-xs font-medium text-gray-700">Ara</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsApp}
            className="flex flex-col items-center justify-center py-3 bg-[#25D366] hover:bg-[#20BA5A] transition-colors"
          >
            <svg className="w-6 h-6 text-white mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span className="text-xs font-medium text-white">WhatsApp</span>
          </a>

          <button
            onClick={() => setShowChat(!showChat)}
            className="flex flex-col items-center justify-center py-3 hover:bg-gray-50 transition-colors"
          >
            <svg className="w-6 h-6 text-blue-500 mb-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
            </svg>
            <span className="text-xs font-medium text-gray-700">Mesaj</span>
          </button>
        </div>
      </div>

      {/* Mobile Chat Dialog */}
      {showChat && (
        <div className="md:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl max-h-[70vh] flex flex-col">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 flex items-center justify-between rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <div>
                  <div className="font-bold text-white">Premium Auto</div>
                  <div className="text-xs text-blue-100">Çevrimiçi</div>
                </div>
              </div>
              <button 
                onClick={() => setShowChat(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 flex-1 flex items-center justify-center">
              <div className="text-center w-full">
                <p className="text-gray-600 mb-6 text-lg">Size nasıl yardımcı olabiliriz?</p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleWhatsApp}
                    className="block px-6 py-4 bg-[#25D366] text-white rounded-xl hover:bg-[#20BA5A] transition-colors text-lg font-semibold"
                  >
                    WhatsApp ile Yaz
                  </a>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    onClick={handlePhone}
                    className="block px-6 py-4 bg-turuncu-500 text-white rounded-xl hover:bg-turuncu-600 transition-colors text-lg font-semibold"
                  >
                    Hemen Ara
                  </a>
                  <a
                    href="/iletisim"
                    className="block px-6 py-4 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors text-lg font-semibold"
                  >
                    İletişim Formu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}