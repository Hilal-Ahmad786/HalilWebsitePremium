// src/components/sections/TestimonialsSection.tsx
'use client';

import { useState } from 'react';
import { testimonials } from '@/data/testimonials';


export function TestimonialsSection() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Tümü', icon: '🚗' },
    { id: 'kazali', label: 'Kazalı', icon: '💥' },
    { id: 'hasarli', label: 'Hasarlı', icon: '🔧' },
    { id: 'pert', label: 'Pert', icon: '📋' },
    { id: 'hurda', label: 'Hurda', icon: '♻️' },
  ];

  // Extended testimonials with categories
  const extendedTestimonials = testimonials.map((t, index) => ({
    ...t,
    category: ['kazali', 'hasarli', 'pert', 'hurda'][index % 4],
    carType: ['Toyota Corolla 2018', 'Renault Megane 2015', 'VW Passat 2016', 'Fiat Doblo 2008'][index % 4],
  }));

  const filteredTestimonials = activeCategory === 'all'
    ? extendedTestimonials
    : extendedTestimonials.filter(t => t.category === activeCategory);

  const averageRating = 4.9;
  const totalReviews = 1250;

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="testimonial-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#testimonial-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turuncu-100 rounded-full text-turuncu-600 font-semibold text-sm mb-4">
            ⭐ Müşteri Yorumları
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Binlerce Mutlu Müşteri
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Aracını satan müşterilerimizin gerçek deneyimleri
          </p>

          {/* Rating Summary */}
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-3xl font-bold text-gray-900">{averageRating}</div>
              <div className="text-sm text-gray-500">{totalReviews} Değerlendirme</div>
            </div>
            <div className="h-16 w-px bg-gray-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-turuncu-500">%98</div>
              <div className="text-sm text-gray-500">Memnuniyet Oranı</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all ${activeCategory === cat.id
                ? 'bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
            >
              <span className="mr-2">{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.slice(0, 6).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-turuncu-200 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-turuncu-400 to-turuncu-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">{testimonial.date}</div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Car Info */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-lg text-sm text-gray-600 mb-3">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
                <span className="font-medium">{testimonial.carType}</span>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-4">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Verified Badge */}
              <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-xs text-gray-500 font-medium">Doğrulanmış Müşteri</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Siz de bu mutlu müşterilerimize katılın!</p>
          <a
            href="#"
            // target="_blank"
            // rel="noopener noreferrer"
            onClick={(e) => e.preventDefault()}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <span>Hemen Teklif Al</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}