// src/components/sections/ServicesComparison.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesComparison() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'kazali',
      title: 'Kazalı Araç Alımı',
      icon: '💥',
      color: 'from-red-500 to-turuncu-500',
      tagline: 'Kaza Geçirmiş Araçlar',
      description: 'Trafik kazası geçirmiş, çarpma veya devrilme hasarı olan tüm araçları en yüksek fiyata alıyoruz.',
      features: [
        'Ön/arka çarpma',
        'Yan vuruş',
        'Devrilme',
        'Çoklu hasar',
      ],
      benefits: [
        '30 dakikada teklif',
        'Piyasa üstü fiyat',
        'Aynı gün ödeme',
        'Ücretsiz ekspertiz',
      ],
      stats: { value: '5K+', label: 'Kazalı Araç' },
      link: '/kazali-arac-alim',
    },
    {
      id: 'hasarli',
      title: 'Hasarlı Araç Alımı',
      icon: '🔧',
      color: 'from-purple-500 to-indigo-500',
      tagline: 'Mekanik & Kaporta Hasarlı',
      description: 'Motor arızası, şanzıman problemi, elektrik arızası gibi mekanik hasarlı araçları alıyoruz.',
      features: [
        'Motor arızası',
        'Şanzıman problemi',
        'Kaporta hasarı',
        'Elektrik arızası',
      ],
      benefits: [
        'Her marka model',
        'Ücretsiz çekici',
        'Adil değerleme',
        'Hızlı işlem',
      ],
      stats: { value: '7K+', label: 'Hasarlı Araç' },
      link: '/hasarli-arac-alim',
    },
    {
      id: 'pert',
      title: 'Pert Araç Alımı',
      icon: '📋',
      color: 'from-blue-500 to-cyan-500',
      tagline: 'Sigorta Çıkışlı',
      description: 'Kasko pert, trafik pert veya sigorta şirketi çıkışlı tüm araçları yasal prosedürle alıyoruz.',
      features: [
        'Kasko pert',
        'Trafik pert',
        'Sigorta çıkışlı',
        'Pert belgeli',
      ],
      benefits: [
        'Yasal prosedür',
        'Evrak desteği',
        'Güvenli işlem',
        'Net fiyat',
      ],
      stats: { value: '2K+', label: 'Pert Araç' },
      link: '/pert-arac-alim',
    },
    {
      id: 'hurda',
      title: 'Hurda Araç Alımı',
      icon: '♻️',
      color: 'from-green-500 to-emerald-500',
      tagline: 'Çevre Dostu Geri Dönüşüm',
      description: 'Kullanım ömrü bitmiş, ekonomik ömrünü tamamlamış araçları hurda belgesi ile alıyoruz.',
      features: [
        'Hurda belgesi',
        'Kilo bazlı',
        'Çevre dostu',
        'Resmi işlem',
      ],
      benefits: [
        'Yasal geri dönüşüm',
        'Adil kilo fiyatı',
        'Belge düzenleme',
        'Ücretsiz nakliye',
      ],
      stats: { value: '1K+', label: 'Hurda Araç' },
      link: '/hurda-arac-alim',
    },
  ];

  const activeService = services[activeTab];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-lacivert-900/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turuncu-100 rounded-full text-turuncu-600 font-semibold text-sm mb-4">
            🚗 Hizmetlerimiz
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Hangi Araçları Alıyoruz?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kazalı, hasarlı, pert veya hurda—her türlü araç için en iyi teklif
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 py-4 rounded-xl font-semibold text-sm transition-all ${
                activeTab === index
                  ? 'bg-white text-gray-900 shadow-xl scale-105'
                  : 'bg-white/50 text-gray-600 hover:bg-white/80'
              }`}
            >
              {activeTab === index && (
                <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-xl bg-gradient-to-r ${service.color}`} />
              )}
              <div className="flex items-center gap-2">
                <span className="text-2xl">{service.icon}</span>
                <span>{service.title.split(' ')[0]}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Content Display */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Column - Info */}
            <div className={`p-8 lg:p-12 bg-gradient-to-br ${activeService.color} text-white relative overflow-hidden`}>
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <defs>
                    <pattern id="service-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#service-pattern)"/>
                </svg>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl text-5xl mb-6">
                  {activeService.icon}
                </div>

                {/* Title */}
                <div className="mb-6">
                  <div className="text-sm font-semibold mb-2 opacity-90">
                    {activeService.tagline}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">
                    {activeService.title}
                  </h3>
                  <p className="text-lg opacity-90 leading-relaxed">
                    {activeService.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl mb-6">
                  <div>
                    <div className="text-3xl font-bold">{activeService.stats.value}</div>
                    <div className="text-sm opacity-80">{activeService.stats.label}</div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={activeService.link}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-bold rounded-xl hover:scale-105 transition-all shadow-lg"
                >
                  <span>Detaylı Bilgi</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Features & Benefits */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                {/* Features */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-turuncu-500 rounded-full" />
                    Bu Kategoride Alınanlar
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {activeService.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-4 py-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-turuncu-500 rounded-full" />
                    Avantajlar
                  </h4>
                  <div className="space-y-3">
                    {activeService.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-gradient-to-r from-turuncu-50 to-turuncu-100/50 rounded-xl"
                      >
                        <div className="w-10 h-10 bg-turuncu-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="font-medium text-gray-900">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Box */}
                <div className="bg-gradient-to-br from-lacivert-700 to-lacivert-500 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">Hemen Teklif Alın</div>
                    <div className="text-blue-200 text-sm mb-4">
                      {activeService.title} için özel fiyat
                    </div>
                    <a
                      href="tel:+905551234567"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-turuncu-500 hover:bg-turuncu-600 text-white font-bold rounded-xl transition-all w-full justify-center"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                      <span>0555 751 22 20</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}