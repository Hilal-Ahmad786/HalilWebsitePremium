// src/components/sections/ProcessTimeline.tsx
'use client';
import { siteConfig } from '@/config/site';


interface ProcessStep {
  icon: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export default function ProcessTimeline({ title, subtitle, steps }: ProcessTimelineProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turuncu-100 rounded-full text-turuncu-600 font-semibold text-sm mb-4">
            <span className="w-2 h-2 bg-turuncu-500 rounded-full animate-pulse" />
            Basit & Hızlı Süreç
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-lacivert-500 via-turuncu-500 via-turuncu-500 to-green-500 transform -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const colors = [
                { border: 'border-lacivert-500', text: 'text-lacivert-500', bg: 'bg-lacivert-500' },
                { border: 'border-turuncu-500', text: 'text-turuncu-500', bg: 'bg-turuncu-500' },
                { border: 'border-turuncu-600', text: 'text-turuncu-600', bg: 'bg-turuncu-600' },
                { border: 'border-green-500', text: 'text-green-500', bg: 'bg-green-500' },
              ];
              const color = colors[index % colors.length];

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full lg:w-auto">
                    <div
                      className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 border-l-4 ${color.border}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-r ${color.bg} flex items-center justify-center text-3xl shadow-lg`}>
                          <i className={step.icon} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-5xl font-bold text-gray-200">{String(index + 1).padStart(2, '0')}</span>
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          <p className="text-gray-600 leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Center Circle Indicator */}
                  <div
                    className={`hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full border-4 ${color.border} shadow-xl items-center justify-center z-10`}
                  >
                    <span className="text-2xl"><i className={step.icon} /></span>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-lacivert-700 to-lacivert-500 rounded-2xl shadow-2xl">
            <div className="text-white text-left">
              <div className="text-2xl font-bold mb-2">Hemen Başlayın!</div>
              <div className="text-blue-200">Aracınız için teklif almak sadece 2 dakika</div>
            </div>
            <a
              href={`tel:${siteConfig.phone}`}
              onClick={() => { }}
              className="flex-shrink-0 px-8 py-4 bg-turuncu-500 hover:bg-turuncu-600 text-white font-bold rounded-xl shadow-lg transition-all flex items-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>{siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}