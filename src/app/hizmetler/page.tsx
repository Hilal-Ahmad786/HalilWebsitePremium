// src/app/hizmetler/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: `Hizmetlerimiz | ${siteConfig.name}`,
  description: 'Araç alım, ekspertiz, trafiğe çıkış ve takas hizmetlerimiz. Profesyonel, güvenilir ve hızlı çözümler.',
  keywords: ['araç alım hizmetleri', 'ekspertiz', 'trafiğe çıkış', 'araç takas'],
};

export default function ServicesPage() {
  const publishedServices = services.filter(s => s.published);

  const iconMap: { [key: string]: string } = {
    FaCar: '🚗',
    FaClipboardCheck: '📋',
    FaFileAlt: '📄',
    FaExchangeAlt: '🔄',
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 text-white py-5 overflow-hidden">
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
              Profesyonel Araç Hizmetleri
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tüm Hizmetlerimiz
              <span className="block text-turuncu-400">Tek Çatı Altında</span>
            </h1>

            <p className="text-xl text-blue-200 leading-relaxed">
              Araç alımından trafiğe çıkışa, ekspertizden takasa kadar
              ihtiyacınız olan tüm hizmetler için yanınızdayız.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {publishedServices.map((service, index) => {
              const gradients = [
                'from-lacivert-500 to-lacivert-600',
                'from-turuncu-500 to-turuncu-600',
                'from-blue-500 to-blue-600',
                'from-green-500 to-green-600',
              ];

              return (
                <div key={service.id} className="group">
                  <Link href={`/hizmetler/${service.slug}`}>
                    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-turuncu-200 overflow-hidden">
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${gradients[index % gradients.length]} p-8 text-white relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />

                        <div className="relative">
                          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                            {iconMap[service.icon]}
                          </div>
                          <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
                          <p className="text-white/90">{service.shortDescription}</p>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8">
                        {/* Features */}
                        <div className="mb-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span className="w-1 h-6 bg-turuncu-500 rounded-full" />
                            Özellikler
                          </h3>
                          <ul className="space-y-2">
                            {service.features.slice(0, 4).map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-gray-700">
                                <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* CTA */}
                        <div className="pt-6 border-t border-gray-200">
                          <div className="flex items-center justify-between">
                            <span className="text-turuncu-600 font-semibold group-hover:gap-2 transition-all flex items-center">
                              Detaylı Bilgi
                              <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                              </svg>
                            </span>
                            <div className="text-sm text-gray-500">
                              {service.features.length} Özellik
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Neden Bizi Tercih Etmelisiniz?
            </h2>
            <p className="text-xl text-gray-600">
              Tüm hizmetlerimizde aynı kaliteli hizmet anlayışı
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-turuncu-500 to-turuncu-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı İşlem</h3>
              <p className="text-gray-600">
                Tüm hizmetlerimizde hızlı ve profesyonel işlem garantisi. Zamanınız değerli.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                ✓
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenilir</h3>
              <p className="text-gray-600">
                15+ yıllık deneyim ve binlerce mutlu müşteri. Güven bizim önceliğimiz.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-3xl mb-6">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uygun Fiyat</h3>
              <p className="text-gray-600">
                Piyasanın en rekabetçi fiyatları. Ücretsiz ekspertiz ve danışmanlık.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-lacivert-700 to-lacivert-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Hangi Hizmet İçin Yardıma İhtiyacınız Var?
          </h2>
          <p className="text-xl text-blue-200 mb-8">
            Uzman ekibimiz tüm sorularınızı yanıtlamak için hazır
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp ile Sorun
            </a>

            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-turuncu-500 hover:bg-turuncu-600 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Hemen Ara: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}