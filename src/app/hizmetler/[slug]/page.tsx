// ===== src/app/hizmetler/[slug]/page.tsx =====
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services } from '@/data/services';
import { siteConfig } from '@/data/site';
import { CTASection } from '@/components/sections';

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

  return (
    <>
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <ol className="flex items-center gap-2 text-gray-600">
              <li>
                <Link href="/" className="hover:text-turuncu-500">Ana Sayfa</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/#hizmetler" className="hover:text-turuncu-500">Hizmetler</Link>
              </li>
              <li>/</li>
              <li className="text-lacivert-700 font-medium">{service.title}</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-turuncu-500/10 text-turuncu-500 text-3xl mb-6">
              {service.icon === 'FaCar' && '🚗'}
              {service.icon === 'FaClipboardCheck' && '📋'}
              {service.icon === 'FaFileAlt' && '📄'}
              {service.icon === 'FaExchangeAlt' && '🔄'}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-lacivert-700 mb-4">
              {service.title}
            </h1>
            <p className="text-xl text-gray-600">
              {service.shortDescription}
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none mb-12">
              <div dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-lacivert-700 mb-4">
                  ✨ Özellikler
                </h3>
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="h-6 w-6 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-turuncu-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-lacivert-700 mb-4">
                  🎯 Avantajlar
                </h3>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <svg className="h-6 w-6 text-turuncu-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Other Services */}
          <div className="mt-16 max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-lacivert-700 mb-8 text-center">
              Diğer Hizmetlerimiz
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services
                .filter(s => s.published && s.id !== service.id)
                .slice(0, 3)
                .map(otherService => (
                  <Link
                    key={otherService.id}
                    href={`/hizmetler/${otherService.slug}`}
                    className="group bg-gray-50 rounded-xl p-6 hover:bg-turuncu-50 transition-colors"
                  >
                    <div className="text-3xl mb-3">
                      {otherService.icon === 'FaCar' && '🚗'}
                      {otherService.icon === 'FaClipboardCheck' && '📋'}
                      {otherService.icon === 'FaFileAlt' && '📄'}
                      {otherService.icon === 'FaExchangeAlt' && '🔄'}
                    </div>
                    <h3 className="font-bold text-lacivert-700 group-hover:text-turuncu-500 transition-colors mb-2">
                      {otherService.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {otherService.shortDescription}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}