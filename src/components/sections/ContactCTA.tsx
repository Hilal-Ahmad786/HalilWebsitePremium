// src/components/sections/ContactCTA.tsx - COMPLETE REPLACEMENT
'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function ContactCTA() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date(now);
      endOfDay.setHours(23, 59, 59, 999);

      const diff = endOfDay.getTime() - now.getTime();

      return {
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    trackCTAClick('CTA WhatsApp', );
  };

  const handlePhone = () => {
    trackPhoneClick();
    trackCTAClick('CTA Phone', );
  };

  const benefits = [
    { icon: '✓', text: 'Ücretsiz ekspertiz ve değerlendirme' },
    { icon: '✓', text: 'Piyasa üstü fiyat garantisi' },
    { icon: '✓', text: 'Aynı gün noter ve ödeme' },
    { icon: '✓', text: 'Ücretsiz çekici hizmeti' },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-turuncu-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Urgency & Info */}
          <div className="text-white space-y-6">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full text-red-300 font-semibold text-sm animate-pulse">
              🔥 Bugün İçin Özel Fırsat
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Aracınızı Satmadan Önce
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-turuncu-400 to-turuncu-600">
                  Bizi Mutlaka Arayın!
                </span>
              </h2>
              <p className="text-xl text-blue-200">
                Bugün arayanlara <span className="text-turuncu-400 font-bold">ekstra %10 bonus</span> fiyat veriyoruz.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-center mb-4">
                <div className="text-sm text-blue-200 mb-2">Kampanya Bitiş Süresi</div>
                <div className="flex items-center justify-center gap-4">
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                      <div className="text-3xl font-bold">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-blue-300 mt-1">Saat</div>
                    </div>
                  </div>
                  <div className="text-2xl">:</div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                      <div className="text-3xl font-bold">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-blue-300 mt-1">Dakika</div>
                    </div>
                  </div>
                  <div className="text-2xl">:</div>
                  <div className="text-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[70px]">
                      <div className="text-3xl font-bold">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <div className="text-xs text-blue-300 mt-1">Saniye</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {benefit.icon}
                  </div>
                  <span className="text-blue-100">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <div className="text-sm font-bold">4.9/5.0</div>
                  <div className="text-xs text-blue-300">1,250 Yorum</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="text-sm font-bold">15K+</div>
                  <div className="text-xs text-blue-300">Araç Aldık</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - CTA Card */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-turuncu-500/20 rounded-2xl backdrop-blur-sm rotate-12" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500/20 rounded-2xl backdrop-blur-sm -rotate-12" />

            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-turuncu-500 to-turuncu-600 rounded-2xl mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Hemen İletişime Geçin</h3>
                <p className="text-gray-600">2 dakikada net teklif alın</p>
              </div>

              {/* Quick Contact Options */}
              <div className="space-y-3">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="group block w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-xl p-4 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <div className="text-left">
                        <div className="font-bold">WhatsApp ile Yaz</div>
                        <div className="text-sm opacity-90">Anında Yanıt</div>
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={handlePhone}
                  className="group block w-full bg-gradient-to-r from-turuncu-500 to-turuncu-600 hover:from-turuncu-600 hover:to-turuncu-700 text-white rounded-xl p-4 transition-all shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <div className="text-left">
                        <div className="font-bold">Hemen Ara</div>
                        <div className="text-sm opacity-90">{siteConfig.phoneDisplay}</div>
                      </div>
                    </div>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>SSL Güvenli • KVKK Uyumlu • Güvenli İletişim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}