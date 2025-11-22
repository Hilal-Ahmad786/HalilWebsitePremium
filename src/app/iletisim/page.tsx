// src/app/iletisim/page.tsx
'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { trackFormSubmit, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    carInfo: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      trackFormSubmit('contact_page_form');
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', phone: '', email: '', carInfo: '', message: '' });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactMethods = [
    {
      icon: '📞',
      title: 'Telefon',
      value: siteConfig.phoneDisplay,
      href: `tel:${siteConfig.phone}`,
      color: 'from-turuncu-500 to-turuncu-600',
      onClick: trackPhoneClick,
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      value: 'Mesaj Gönder',
      href: `https://wa.me/${siteConfig.whatsapp}`,
      color: 'from-green-500 to-green-600',
      onClick: trackWhatsAppClick,
    },
    {
      icon: '📧',
      title: 'E-posta',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      color: 'from-lacivert-500 to-lacivert-600',
    },
    {
      icon: '📍',
      title: 'Adres',
      value: siteConfig.address,
      color: 'from-gray-600 to-gray-700',
    },
  ];

  const features = [
    { icon: '⚡', text: '30 Dakikada Yanıt' },
    { icon: '🔒', text: 'Güvenli İletişim' },
    { icon: '🎯', text: 'Doğru Fiyat' },
    { icon: '✅', text: 'Hızlı İşlem' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              7/24 Destek Hattı Aktif
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Size Nasıl
              <span className="block text-turuncu-400">Yardımcı Olabiliriz?</span>
            </h1>
            
            <p className="text-xl text-blue-200 leading-relaxed">
              Aracınız hakkında merak ettikleriniz için bize ulaşın. 
              Uzman ekibimiz en kısa sürede size dönüş yapacaktır.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="group">
                {method.href ? (
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={method.onClick}
                    className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 hover:border-turuncu-200"
                  >
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} text-white text-3xl mb-4 group-hover:scale-110 transition-transform`}>
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600">{method.value}</p>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${method.color} text-white text-3xl mb-4`}>
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600">{method.value}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Hızlı Teklif Formu
                  </h2>
                  <p className="text-gray-600">
                    Formu doldurun, size en kısa sürede dönüş yapalım
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500 focus:border-transparent transition-all"
                      placeholder="Ad Soyad"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500 focus:border-transparent transition-all"
                      placeholder="0555 123 45 67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500 focus:border-transparent transition-all"
                      placeholder="ornek@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Araç Bilgisi
                    </label>
                    <input
                      type="text"
                      name="carInfo"
                      value={formData.carInfo}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500 focus:border-transparent transition-all"
                      placeholder="Örn: 2018 Toyota Corolla"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Mesajınız
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-turuncu-500 focus:border-transparent transition-all resize-none"
                      placeholder="Aracınız hakkında detaylı bilgi verin..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-turuncu-500 to-turuncu-600 hover:from-turuncu-600 hover:to-turuncu-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : 'Teklif Al'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                      <p className="text-green-700 font-semibold">✓ Mesajınız başarıyla gönderildi!</p>
                      <p className="text-green-600 text-sm mt-1">En kısa sürede size dönüş yapacağız.</p>
                    </div>
                  )}

                  <div className="text-center text-sm text-gray-500 pt-4 border-t">
                    🔒 Bilgileriniz güvende • SSL korumalı
                  </div>
                </form>
              </div>
            </div>

            {/* Info Sidebar */}
            <div className="order-1 lg:order-2 space-y-6">
              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-turuncu-50 to-orange-100 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Neden Bizi Aramalısınız?
                </h3>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-xl flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span className="font-medium text-gray-900">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-turuncu-500 rounded-full" />
                  Çalışma Saatlerimiz
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Pazartesi - Cuma</span>
                    <span className="font-semibold text-gray-900">09:00 - 19:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Cumartesi</span>
                    <span className="font-semibold text-gray-900">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600">Pazar</span>
                    <span className="font-semibold text-gray-900">10:00 - 16:00</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Acil Durum: 7/24
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-gradient-to-br from-lacivert-700 to-lacivert-500 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Rakamlarla Biz</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">15K+</div>
                    <div className="text-sm text-blue-200">Araç Aldık</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">%98</div>
                    <div className="text-sm text-blue-200">Memnuniyet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">15 dk</div>
                    <div className="text-sm text-blue-200">Ort. Yanıt</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">15+</div>
                    <div className="text-sm text-blue-200">Yıl Tecrübe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ofisimizi Ziyaret Edin</h2>
            <p className="text-gray-600">İstanbul merkez ofisimizden bize ulaşabilirsiniz</p>
          </div>
          
          <div className="bg-gray-200 rounded-2xl overflow-hidden h-96 flex items-center justify-center border-4 border-white shadow-xl">
            <div className="text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg font-semibold">Google Maps Entegrasyonu</p>
              <p className="text-sm mt-2">Harita buraya eklenecek</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}