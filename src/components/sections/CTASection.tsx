
// ===== src/components/sections/CTASection.tsx =====
'use client';

import { ctaVariants } from '@/data/cta';
import { trackCTAClick } from '@/lib/analytics';

export function CTASection() {
  const cta = ctaVariants[0]; // Primary CTA

  return (
    <section className="py-20 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {cta.title}
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          {cta.description}
        </p>
        <a
          href={cta.buttonHref}
          onClick={() => trackCTAClick('bottom_cta')}
          className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-lg font-semibold text-turuncu-500 hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
        >
          {cta.buttonText}
        </a>
      </div>
    </section>
  );
}