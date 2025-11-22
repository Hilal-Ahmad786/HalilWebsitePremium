// src/components/sections/HeroSection.tsx
'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export function HeroSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: '⚡',
      title: '30 Dakika',
      subtitle: 'Hızlı Teklif',
    },
    {
      icon: '💰',
      title: 'En Yüksek',
      subtitle: 'Fiyat Garantisi',
    },
    {
      icon: '🚚',
      title: 'Ücretsiz',
      subtitle: 'Çekici Hizmeti',
    },
    {
      icon: '✓',
      title: 'Anında',
      subtitle: 'Nakit Ödeme',
    },
  ];

  const stats = [
    { value: '15K+', label: 'Araç Alımı' },
    { value: '%98', label: 'Memnuniyet' },
    { value: '7/24', label: 'Destek' },
  ];

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    trackCTAClick('Hero WhatsApp', );
  };

  const handlePhone = () => {
    trackPhoneClick();
    trackCTAClick('Hero Phone', );
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-lacivert-800 via-lacivert-500 to-lacivert-800 overflow-hidden pt-32 md:pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-turuncu-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-lacivert-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Türkiye'nin En Güvenilir Hasarlı Araç Alım Platformu
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Hasarlı Aracınız
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-turuncu-400 to-turuncu-600">
                  En İyi Fiyata
                </span>
              </h1>
              <p className="text-xl text-blue-200 max-w-xl">
                30 dakikada teklif alın, aynı gün nakit ödeyin.
                Ücretsiz ekspertiz ve çekici hizmeti ile.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onMouseEnter={() => setActiveFeature(index)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeFeature === index
                      ? 'bg-turuncu-500 shadow-lg scale-105'
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20'
                  }`}
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div className="text-left">
                    <div className="text-sm font-bold">{feature.title}</div>
                    <div className="text-xs opacity-90">{feature.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsApp}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-turuncu-500 to-turuncu-600 rounded-xl font-bold text-lg shadow-2xl hover:shadow-turuncu-500/50 transition-all overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative">💬</span>
                <span className="relative">WhatsApp ile Teklif Al</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhone}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-xl font-bold text-lg hover:bg-white/20 transition-all"
              >
                <span>📞</span>
                <span>Hemen Ara</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-turuncu-400">{stat.value}</div>
                  <div className="text-sm text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Card */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-turuncu-500 to-turuncu-600 rounded-2xl flex items-center justify-center text-4xl shadow-xl rotate-12">
                🚗
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 font-medium mb-2">Hızlı Başvuru</div>
                  <h3 className="text-2xl font-bold text-gray-900">Aracınızı Değerlendirelim</h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Araç Tipi
                    </label>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500">
                      <option>Kazalı Araç</option>
                      <option>Hasarlı Araç</option>
                      <option>Pert Araç</option>
                      <option>Hurda Araç</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon Numaranız
                    </label>
                    <input
                      type="tel"
                      placeholder="0555 751 22 20"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500"
                    />
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
                    Ücretsiz Teklif Al
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 pt-4 border-t border-gray-100">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Bilgileriniz güvende • SSL korumalı</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-lacivert-500/20 rounded-2xl backdrop-blur-sm border border-white/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-blue-200">Yıl Tecrübe</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-center">
          <div className="text-sm mb-2">Daha Fazla Bilgi</div>
          <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
