// src/components/sections/ServiceHero.tsx
'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';


interface ServiceHeroProps {
  serviceName: string;
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

const iconMap: { [key: string]: string } = {
  FaCar: '🚗',
  FaClipboardCheck: '📋',
  FaFileAlt: '📄',
  FaExchangeAlt: '🔄',
};

export default function ServiceHero({
  serviceName,
  icon,
  title,
  description,
  features = [],
}: ServiceHeroProps) {
  const handleWhatsApp = () => {
  };

  const handlePhone = () => {
  };

  const displayIcon = iconMap[icon] || '🚗';

  return (
    <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-500 to-lacivert-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      {/* Animated Background Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-lacivert-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-orange-100">
            <li>
              <Link href="/" className="hover:text-white">Ana Sayfa</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
            </li>
            <li>/</li>
            <li className="text-white font-medium">{serviceName}</li>
          </ol>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Profesyonel Hizmet
            </div>

            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm text-5xl mb-6 border border-white/30">
              {displayIcon}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
            </h1>

            <p className="text-xl text-orange-100 leading-relaxed mb-8">
              {description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#"
                // target="_blank"
                // rel="noopener noreferrer"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Hemen Teklif Al</span>
              </a>

              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold rounded-xl border border-white/30 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Bizi Arayın</span>
              </a>
            </div>

            {/* Quick Features */}
            {features && features.length > 0 && (
              <div className="space-y-2">
                {features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-orange-100">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Benefits Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Bu Hizmette</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Hızlı İşlem</div>
                    <div className="text-sm text-orange-100">24 saat içinde tamamlanır</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">En İyi Fiyat</div>
                    <div className="text-sm text-orange-100">Piyasa üstü teklif garantisi</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔒</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Güvenli</div>
                    <div className="text-sm text-orange-100">Noter onaylı işlem</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Ücretsiz</div>
                    <div className="text-sm text-orange-100">Ekspertiz ve evrak masrafı yok</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-100">⭐ 5000+ mutlu müşteri</span>
                  <span className="text-orange-100">💯 %98 memnuniyet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}