// src/components/layout/UnifiedFloatingButtons.tsx
'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function UnifiedFloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const checkOnline = () => {
      const now = new Date();
      const hour = now.getHours();
      setIsOnline(hour >= 9 && hour < 22);
    };
    checkOnline();
    const interval = setInterval(checkOnline, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      setShowPulse(false);
    }
  }, [isExpanded]);

  const handlePhoneClick = () => {
    trackPhoneClick();
    trackCTAClick('Floating Phone', 'floating-buttons');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('Floating WhatsApp', 'floating-buttons');
  };

  const quickActions = [
    {
      icon: '💬',
      label: 'WhatsApp',
      href: `https://wa.me/${siteConfig.whatsapp}`,
      color: 'from-green-500 to-green-600',
      onClick: handleWhatsAppClick,
      angle: -45,
    },
    {
      icon: '📞',
      label: 'Ara',
      href: `tel:${siteConfig.phone}`,
      color: 'from-lacivert-600 to-lacivert-700',
      onClick: handlePhoneClick,
      angle: -90,
    },
    {
      icon: '📧',
      label: 'Mail',
      href: `mailto:${siteConfig.email}`,
      color: 'from-turuncu-500 to-turuncu-600',
      onClick: () => trackCTAClick('Floating Email', 'floating-buttons'),
      angle: -135,
    },
  ];

  return (
    <>
      {/* Desktop Floating Widget */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        {/* Expanded Quick Actions */}
        {isExpanded && (
          <div className="absolute bottom-0 right-0 mb-20">
            {quickActions.map((action, index) => {
              const radius = 80;
              const angleRad = (action.angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <a
                  key={index}
                  href={action.href}
                  target={action.href.startsWith('http') ? '_blank' : undefined}
                  rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  onClick={action.onClick}
                  className="absolute group"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    animation: `fadeInScale 0.3s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-r ${action.color} shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition-transform`}
                  >
                    {action.icon}
                  </div>
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {action.label}
                  </div>
                </a>
              );
            })}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-16 h-16 bg-gradient-to-r from-turuncu-500 to-turuncu-600 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all flex items-center justify-center"
        >
          {showPulse && (
            <span className="absolute inset-0 rounded-full bg-turuncu-400 animate-ping opacity-75"></span>
          )}

          {isOnline && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full animate-pulse"></span>
          )}

          <span
            className="relative text-2xl text-white transition-transform"
            style={{
              transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
            }}
          >
            {isExpanded ? '✕' : '💬'}
          </span>
        </button>

        {/* Info Card */}
        {isExpanded && (
          <div
            className="absolute bottom-20 right-0 w-64 bg-white rounded-2xl shadow-2xl p-4"
            style={{ animation: 'fadeInUp 0.3s ease-out' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-lacivert-700 to-lacivert-800 rounded-xl flex items-center justify-center text-white font-bold">
                PA
              </div>
              <div>
                <div className="font-bold text-gray-900">Premium Auto</div>
                <div className="text-xs text-gray-500 flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                  {isOnline ? 'Çevrimiçi' : 'Çevrimdışı'}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-3">Size nasıl yardımcı olabiliriz?</p>
            <div className="text-xs text-gray-500">
              Ortalama yanıt süresi:{' '}
              <span className="font-semibold text-turuncu-600">2 dakika</span>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl">
        <div className="grid grid-cols-3 divide-x divide-gray-200">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl mb-1">📞</span>
            <span className="text-xs font-medium text-gray-700">Ara</span>
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="flex flex-col items-center justify-center py-4 bg-green-50 hover:bg-green-100 transition-colors relative"
          >
            {showPulse && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            )}
            <span className="text-2xl mb-1">💬</span>
            <span className="text-xs font-medium text-green-700">WhatsApp</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex flex-col items-center justify-center py-4 hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl mb-1">📧</span>
            <span className="text-xs font-medium text-gray-700">Mail</span>
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
