// src/app/hizmetler/[slug]/page.tsx - COMPLETE REPLACEMENT
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import CTASection from '@/components/sections/CTASection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services
    .filter(service => service.published)
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.published);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: service.metaTitle || `${service.title} | ${siteConfig.name}`,
    description: service.metaDescription || service.shortDescription,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.published);

  if (!service) {
    notFound();
  }

  const iconMap: { [key: string]: string } = {
    FaCar: '🚗',
    FaClipboardCheck: '📋',
    FaFileAlt: '📄',
    FaExchangeAlt: '🔄',
  };

  return (
    <>
      {/* MODERN Hero Section */}
      <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-10 w-64 h-64 bg-turuncu-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
              </li>
              <li>/</li>
              <li className="text-white font-medium">{service.title}</li>
            </ol>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                Profesyonel Hizmet
              </div>
              
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-5xl mb-6 border border-white/20">
                {iconMap[service.icon]}
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl text-blue-200 leading-relaxed mb-8">
                {service.shortDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl shadow-lg transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <span>Hemen Teklif Al</span>
                </a>
                
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  <span>Hemen Ara</span>
                </a>
              </div>

              {/* Quick Features */}
              <div className="space-y-2">
                {service.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-blue-100">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Bu Hizmette</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-turuncu-500 rounded-xl flex items-center justify-center text-white text-xl">✓</div>
                    <div>
                      <div className="font-bold">Anında Değerleme</div>
                      <div className="text-sm text-blue-200">30 dakikada net fiyat</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">✓</div>
                    <div>
                      <div className="font-bold">Güvenli Ödeme</div>
                      <div className="text-sm text-blue-200">Noter onaylı işlem</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">✓</div>
                    <div>
                      <div className="font-bold">Ücretsiz Hizmet</div>
                      <div className="text-sm text-blue-200">Ekspertiz & evrak</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* REST OF THE PAGE - Keep existing content section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-12">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-lacivert-700 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                    Özellikler
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-turuncu-50 to-orange-50 rounded-2xl p-6 border border-turuncu-200">
                  <h3 className="text-xl font-bold text-lacivert-700 mb-4 flex items-center gap-2">
                    <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                    Avantajlar
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-turuncu-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700 font-medium">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-lacivert-700 to-lacivert-500 rounded-2xl p-6 text-white shadow-xl">
                  <h3 className="text-2xl font-bold mb-4">Hemen Teklif Alın</h3>
                  <p className="text-blue-200 mb-6 text-sm">
                    {service.title} için özel fiyat teklifi alın
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl transition-all"
                    >
                      <span>💬</span>
                      <span>WhatsApp</span>
                    </a>
                    
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-turuncu-500 hover:bg-turuncu-600 text-white font-bold rounded-xl transition-all"
                    >
                      <span>📞</span>
                      <span>{siteConfig.phoneDisplay}</span>
                    </a>
                  </div>

                  <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm text-blue-200">
                    ⚡ Ortalama yanıt süresi: 15 dakika
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h4 className="font-bold text-gray-900 mb-4">Bu Hizmet İçin</h4>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">İşlem Süresi</span>
                      <span className="font-bold text-turuncu-600">24 saat</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Müşteri Sayısı</span>
                      <span className="font-bold text-turuncu-600">5000+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 text-sm">Memnuniyet</span>
                      <span className="font-bold text-turuncu-600">%98</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                  <div className="flex items-center gap-3 mb-3">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <div className="font-bold text-green-900">Güvenli İşlem</div>
                      <div className="text-xs text-green-600">Noter onaylı</div>
                    </div>
                  </div>
                  <p className="text-sm text-green-700">
                    Tüm işlemlerimiz yasal prosedüre uygun, noter huzurunda gerçekleştirilir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Diğer Hizmetlerimiz
            </h2>
            <p className="text-gray-600">
              Size uygun diğer hizmet seçeneklerimizi inceleyin
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services
              .filter(s => s.published && s.id !== service.id)
              .slice(0, 3)
              .map(otherService => (
                <Link
                  key={otherService.id}
                  href={`/hizmetler/${otherService.slug}`}
                  className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-turuncu-200"
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {iconMap[otherService.icon]}
                  </div>
                  <h3 className="text-xl font-bold text-lacivert-700 group-hover:text-turuncu-500 transition-colors mb-3">
                    {otherService.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {otherService.shortDescription}
                  </p>
                  <div className="flex items-center text-turuncu-500 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Detaylı Bilgi</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <CTASection />
    </>
  );
}