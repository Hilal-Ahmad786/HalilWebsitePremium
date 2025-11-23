// src/components/sections/HeroBanner.tsx - COMPLETE REPLACEMENT
'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

interface HeroBannerProps {
  variant?: 'default' | 'kazali' | 'hasarli' | 'pert' | 'hurda';
  tagline: string;
  title: string;
  subtitle: string;
  highlight: string;
}

export default function HeroBanner({
  variant = 'default',
  tagline,
  title,
  subtitle,
  highlight
}: HeroBannerProps) {
  const handlePhoneClick = () => {
    trackPhoneClick();
    trackCTAClick('Hero Phone',);
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('Hero WhatsApp',);
  };




  // Variant-specific icons and colors
  const variantConfig = {
    default: { icon: '🚗', gradient: 'from-lacivert-800 via-lacivert-500 to-lacivert-800' },
    kazali: { icon: '💥', gradient: 'from-lacivert-800 via-lacivert-500 to-lacivert-800' },
    hasarli: { icon: '🔧', gradient: 'from-lacivert-800 via-lacivert-500 to-lacivert-800' },
    pert: { icon: '📋', gradient: 'from-lacivert-800 via-lacivert-500 to-lacivert-800' },
    hurda: { icon: '♻️', gradient: 'from-lacivert-800 via-lacivert-500 to-lacivert-800' },
  };

  const config = variantConfig[variant];

  return (
    <section className={`relative bg-gradient-to-br ${config.gradient} text-white py-20 overflow-hidden`}>
      {/* Background Pattern */}
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <div className="inline-flex items-center mr-3 gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {tagline}
            </div>

            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-5xl mb-6 border border-white/20">
              {config.icon}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {title}
              <span className="block text-turuncu-400 mt-2">{subtitle}</span>
            </h1>

            <p className="text-xl text-blue-200 leading-relaxed mb-8">
              {highlight}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp-500 hover:bg-whatsapp-600 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>WhatsApp ile Teklif Al</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Hemen Ara</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/20">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <div>
                  <div className="text-sm font-bold">4.9/5.0</div>
                  <div className="text-xs text-blue-200">1,250 Yorum</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="text-sm font-bold">15K+</div>
                  <div className="text-xs text-blue-200">Araç Aldık</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div>
                  <div className="text-sm font-bold">30 dk</div>
                  <div className="text-xs text-blue-200">Hızlı Teklif</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6">Neden Bizi Seçmelisiniz?</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-turuncu-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Ücretsiz Ekspertiz</div>
                    <div className="text-sm text-blue-200">Yerinde detaylı değerlendirme</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">En Yüksek Fiyat</div>
                    <div className="text-sm text-blue-200">Piyasa üstü teklif garantisi</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Anında Ödeme</div>
                    <div className="text-sm text-blue-200">Nakit/EFT aynı gün</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✓
                  </div>
                  <div>
                    <div className="font-bold text-lg mb-1">Güvenli İşlem</div>
                    <div className="text-sm text-blue-200">Noter onaylı yasal prosedür</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-turuncu-400">%98</div>
                    <div className="text-xs text-blue-200">Memnuniyet</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-turuncu-400">7/24</div>
                    <div className="text-xs text-blue-200">Hizmet</div>
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