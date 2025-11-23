// src/app/[citySlug]/page.tsx - COMPLETE REPLACEMENT
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import ContactCTA from '@/components/sections/ContactCTA';
import { cities } from '@/data/cities';
import { siteConfig } from '@/config/site';

interface CityPageProps {
  params: Promise<{
    citySlug: string;
  }>;
}

export async function generateStaticParams() {
  return cities
    .filter(city => city.published)
    .map((city) => ({
      citySlug: city.slug,
    }));
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug && c.published);

  if (!city) {
    return {
      title: 'Şehir Bulunamadı',
    };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords,
    openGraph: {
      title: city.metaTitle,
      description: city.metaDescription,
      type: 'website',
    },
  };
}

export default async function CityPage({ params }: CityPageProps) {
  const { citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug && c.published);

  if (!city) {
    notFound();
  }

  return (
    <div>
      {/* MODERN HERO SECTION */}
      <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 text-white py-5 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-blue-200">
              <li>
                <Link href="/" className="hover:text-white">Ana Sayfa</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#sehirler" className="hover:text-white">Şehirler</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{city.name}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                {city.hero.tagline}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {city.hero.title}
                <span className="block text-turuncu-400 mt-2">{city.hero.subtitle}</span>
              </h1>

              <p className="text-xl text-blue-200 leading-relaxed mb-8">
                {city.intro.content}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>WhatsApp ile Teklif Al</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>Hemen Ara</span>
                </a>
              </div>

              {/* Highlight Box */}
              <div className="inline-flex items-center gap-3 px-6 py-4 bg-turuncu-500/20 backdrop-blur-sm border border-turuncu-500/30 rounded-xl">
                <div className="w-12 h-12 bg-turuncu-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <div className="font-bold text-lg">{city.hero.highlight}</div>
                  <div className="text-sm text-blue-200">Ücretsiz ekspertiz garantisi</div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">{city.name} İstatistikleri</h3>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">{city.stats.vehiclesBought}</div>
                    <div className="text-xs text-blue-200">Araç Aldık</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">{city.stats.responseTime}</div>
                    <div className="text-xs text-blue-200">Yanıt Süresi</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">{city.stats.satisfaction}</div>
                    <div className="text-xs text-blue-200">Memnuniyet</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-3xl font-bold text-turuncu-400 mb-1">{city.stats.experience}</div>
                    <div className="text-xs text-blue-200">Tecrübe</div>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">✓</div>
                    <div>
                      <div className="font-semibold">Ücretsiz Ekspertiz</div>
                      <div className="text-sm text-blue-200">Yerinde değerlendirme</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-turuncu-500 rounded-lg flex items-center justify-center">✓</div>
                    <div>
                      <div className="font-semibold">Anında Ödeme</div>
                      <div className="text-sm text-blue-200">Nakit/EFT aynı gün</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">✓</div>
                    <div>
                      <div className="font-semibold">Güvenli İşlem</div>
                      <div className="text-sm text-blue-200">Noter onaylı devir</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {city.intro.title}
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              {city.intro.content}
            </p>
            <div className="space-y-3">
              {city.intro.highlights.map((highlight, index) => (
                <div key={index} className="bg-turuncu-50 border-l-4 border-turuncu-500 p-4 rounded-r-xl">
                  <p className="text-turuncu-800 font-semibold">
                    ⚡ {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <WhyUs
        title={`${city.name}'da Neden Bizi Seçmelisiniz?`}
        subtitle="Lokal bilgi • Hızlı hizmet • En iyi fiyat"
        items={city.whyUs}
      />

      {/* Districts Coverage */}
      {city.districts && city.districts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Hizmet Verdiğimiz İlçeler
              </h2>
              <p className="text-xl text-gray-600">
                {city.name}&apos;ın her köşesinde aktif hizmet
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {city.districts.map((district, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl p-8 border ${idx === 0
                    ? 'bg-gradient-to-br from-lacivert-50 to-blue-50 border-lacivert-200'
                    : 'bg-gradient-to-br from-turuncu-50 to-orange-50 border-turuncu-200'
                    }`}
                >
                  <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${idx === 0 ? 'text-lacivert-700' : 'text-turuncu-700'
                    }`}>
                    {district.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {district.areas.map((area, areaIdx) => (
                      <div
                        key={areaIdx}
                        className={`flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:border-2 border border-gray-200 transition-all ${idx === 0
                          ? 'hover:bg-lacivert-50 hover:border-lacivert-200'
                          : 'hover:bg-turuncu-50 hover:border-turuncu-200'
                          }`}
                      >
                        <svg className={`w-4 h-4 flex-shrink-0 ${idx === 0 ? 'text-lacivert-500' : 'text-turuncu-500'
                          }`} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white rounded-xl font-semibold shadow-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Hangi ilçede olursanız olun, {city.stats.responseTime} içinde yanınızdayız!</span>
              </div>
            </div>
          </div>
        </section>
      )}

      <ProcessTimeline
        title={`${city.name}'da Araç Satış Süreci`}
        subtitle="Hızlı • Kolay • Güvenli"
        steps={city.process}
      />

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            {city.seoContent.sections.map((section, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}

            <div className="bg-turuncu-50 border-l-4 border-turuncu-500 p-6 rounded-r-xl my-8">
              <h4 className="font-bold text-lg text-turuncu-800 mb-2">
                📞 {city.name}&apos;dan Hemen Arayın!
              </h4>
              <p className="text-turuncu-700">
                {siteConfig.phoneDisplay} numaralı telefondan veya WhatsApp&apos;tan ulaşın,
                {city.stats.responseTime} içinde yerinizde ekspertiz yapalım!
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}