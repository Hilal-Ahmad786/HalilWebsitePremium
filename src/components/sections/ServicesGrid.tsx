
// ===== src/components/sections/ServicesGrid.tsx =====
'use client';

import Link from 'next/link';
import { services } from '@/data/services';
import { trackCTAClick } from '@/lib/analytics';

export function ServicesGrid() {
  const publishedServices = services.filter(s => s.published);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-lacivert-700 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Araç alım satım sürecinde ihtiyacınız olan tüm hizmetleri profesyonel ekibimizle sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {publishedServices.map((service) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              {/* Icon */}
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-turuncu-500/10 text-turuncu-500 text-2xl">
                {service.icon === 'FaCar' && '🚗'}
                {service.icon === 'FaClipboardCheck' && '📋'}
                {service.icon === 'FaFileAlt' && '📄'}
                {service.icon === 'FaExchangeAlt' && '🔄'}
              </div>

              <h3 className="text-xl font-bold text-lacivert-700 mb-3 group-hover:text-turuncu-500 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.shortDescription}
              </p>

              <Link
                href={`/hizmetler/${service.slug}`}
                onClick={() => trackCTAClick(`service_${service.slug}`)}
                className="inline-flex items-center text-turuncu-500 font-semibold group-hover:gap-2 transition-all"
              >
                Detaylı Bilgi
                <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}