
// src/components/sections/ContactCTA.tsx
'use client';

import { siteConfig } from '@/config/site';
import { trackCTAClick, trackWhatsAppClick, trackPhoneClick } from '@/lib/analytics';

export default function ContactCTA() {
  const handlePhoneClick = () => {
    trackPhoneClick();
    trackCTAClick('CTA Phone', 'contact-cta');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick();
    trackCTAClick('CTA WhatsApp', 'contact-cta');
  };

  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Hemen Aracınızı Değerlendirelim!
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Ücretsiz ekspertiz ve en iyi fiyat teklifi için bize ulaşın
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${siteConfig.phone}`}
            onClick={handlePhoneClick}
            className="w-full sm:w-auto bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            <i className="fas fa-phone-alt mr-2"></i>
            {siteConfig.phoneDisplay}
          </a>

          <a
            href={`https://wa.me/${siteConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="w-full sm:w-auto bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg"
          >
            <i className="fab fa-whatsapp text-2xl mr-2"></i>
            WhatsApp ile İletişim
          </a>
        </div>
      </div>
    </section>
  );
}