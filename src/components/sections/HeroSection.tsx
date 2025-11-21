// ===== src/components/sections/HeroSection.tsx =====
'use client';

import Link from 'next/link';
import { heroContent } from '@/data/hero';
import { trackCTAClick } from '@/lib/analytics';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lacivert-700 via-lacivert-600 to-lacivert-700 py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block rounded-full bg-turuncu-500/20 px-4 py-1 text-sm font-medium text-turuncu-300">
              {heroContent.badges?.[0] || 'Güvenilir Hizmet'}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {heroContent.title}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300">
              {heroContent.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={heroContent.primaryCTA.href}
                onClick={() => trackCTAClick('hero_primary')}
                className="inline-flex items-center justify-center rounded-lg bg-turuncu-500 px-8 py-4 text-lg font-semibold text-white hover:bg-turuncu-600 transition-all hover:scale-105 shadow-lg"
              >
                {heroContent.primaryCTA.text}
              </a>
              
              <a
                href={heroContent.secondaryCTA.href}
                onClick={() => trackCTAClick('hero_secondary')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-lacivert-700 transition-all"
              >
                {heroContent.secondaryCTA.text}
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 pt-4">
              {heroContent.badges?.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-2xl bg-turuncu-500/10 border-4 border-turuncu-500/20 flex items-center justify-center">
              <span className="text-6xl">🚗</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}