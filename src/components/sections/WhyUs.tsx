// src/components/sections/WhyUs.tsx
'use client';

import { useState } from 'react';

interface WhyUsItem {
  icon: string;
  title: string;
  description: string;
}

interface WhyUsProps {
  title: string;
  subtitle: string;
  items: WhyUsItem[];
}

export default function WhyUs({ title, subtitle, items }: WhyUsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const colors = [
    'from-yellow-400 to-turuncu-500',
    'from-green-400 to-emerald-500',
    'from-blue-400 to-cyan-500',
    'from-purple-400 to-pink-500',
    'from-red-400 to-rose-500',
    'from-indigo-400 to-lacivert-500',
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-turuncu-100 rounded-full text-turuncu-600 font-semibold text-sm mb-4">
            ✨ Neden Biz?
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer ${
                hoveredIndex === index
                  ? 'border-turuncu-500 shadow-2xl scale-105 z-10'
                  : 'border-gray-200 hover:border-gray-300 shadow-md'
              }`}
            >
              {/* Top Accent Line */}
              <div 
                className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${colors[index % colors.length]} transition-all ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r ${colors[index % colors.length]} text-white text-3xl mb-4 shadow-lg ${
                hoveredIndex === index ? 'scale-110 rotate-6' : ''
              } transition-all duration-300`}>
                <i className={item.icon} />
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-3 ${
                hoveredIndex === index ? 'text-turuncu-600' : 'text-gray-900'
              } transition-colors`}>
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Hover Effect Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-r ${colors[index % colors.length]} opacity-0 ${
                  hoveredIndex === index ? 'group-hover:opacity-5' : ''
                } rounded-2xl transition-opacity pointer-events-none`}
              />
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 bg-gradient-to-r from-lacivert-700 to-lacivert-500 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-turuncu-400 mb-2">15K+</div>
              <div className="text-blue-200 text-sm">Araç Aldık</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-turuncu-400 mb-2">%98</div>
              <div className="text-blue-200 text-sm">Memnuniyet</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-turuncu-400 mb-2">24 sa</div>
              <div className="text-blue-200 text-sm">Ort. İşlem</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-turuncu-400 mb-2">15+</div>
              <div className="text-blue-200 text-sm">Yıl Tecrübe</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Şimdi WhatsApp ile Teklif Alın</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}