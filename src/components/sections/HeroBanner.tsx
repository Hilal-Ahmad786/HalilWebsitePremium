// src/components/sections/HeroBanner.tsx
'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics';

interface HeroBannerProps {
  variant?: 'default' | 'kazali';
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
    trackCTAClick('Hero Phone', 'hero');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('Hero WhatsApp', 'hero');
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            {tagline}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {title}
          </h1>

          <p className="text-xl md:text-2xl mb-3 text-blue-100">
            {subtitle}
          </p>

          <p className="text-2xl md:text-3xl font-bold text-orange-400 mb-8">
            {highlight}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={handlePhoneClick}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fas fa-phone-alt"></i>
              Hemen Ara: {siteConfig.phoneDisplay}
            </a>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition shadow-lg flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-2xl"></i>
              WhatsApp ile Yaz
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
