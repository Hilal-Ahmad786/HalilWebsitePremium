// src/app/[citySlug]/page.tsx - COMPLETE REPLACEMENT
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import CityHero from '@/components/sections/CityHero';
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
      <CityHero
        cityName={city.name}
        tagline={city.hero.tagline}
        title={city.hero.title}
        subtitle={city.hero.subtitle}
        highlight={city.hero.highlight}
        description={city.intro.content}
        stats={city.stats}
      />

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