'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Service } from '@/data/types';
import CTASection from '@/components/sections/CTASection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FaCar, FaClipboardCheck, FaFileAlt, FaExchangeAlt, FaCarCrash, FaTools, FaExclamationTriangle, FaRecycle, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

interface ServicePageTemplateProps {
    service: Service;
    otherServices: Service[];
}

export default function ServicePageTemplate({ service, otherServices }: ServicePageTemplateProps) {
    const iconMap: { [key: string]: React.ReactNode } = {
        FaCar: <FaCar />,
        FaClipboardCheck: <FaClipboardCheck />,
        FaFileAlt: <FaFileAlt />,
        FaExchangeAlt: <FaExchangeAlt />,
        FaCarCrash: <FaCarCrash />,
        FaTools: <FaTools />,
        FaExclamationTriangle: <FaExclamationTriangle />,
        FaRecycle: <FaRecycle />,
    };

    return (
        <>
            {/* MODERN Hero Section */}
            <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 text-white py-10 overflow-hidden">
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
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm">
                        <ol className="flex items-center gap-2 text-blue-200">
                            <li>
                                <Link href="/" className="hover:text-white">Ana Sayfa</Link>
                            </li>
                            <li>/</li>
                            <li>
                                <Link href="/hizmetler" className="hover:text-white">Hizmetler</Link>
                            </li>
                            <li>/</li>
                            <li className="text-white font-medium">{service.title}</li>
                        </ol>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                Profesyonel Hizmet
                            </div>

                            <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm text-5xl mb-6 ml-4 border border-white/20">
                                {iconMap[service.icon] || <FaCar />}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                                {service.title}
                            </h1>

                            <p className="text-xl text-blue-200 leading-relaxed mb-8">
                                {service.shortDescription}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-8">
                                <a
                                    href={`https://wa.me/${siteConfig.whatsapp}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl shadow-lg transition-all"
                                >
                                    <FaWhatsapp className="w-5 h-5" />
                                    <span>Hemen Teklif Al</span>
                                </a>

                                <a
                                    href={`tel:${siteConfig.phone}`}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold rounded-xl border border-white/20 transition-all"
                                >
                                    <FaPhoneAlt className="w-5 h-5" />
                                    <span>Hemen Ara</span>
                                </a>
                            </div>

                            {/* Quick Features */}
                            <div className="space-y-2">
                                {service.features.slice(0, 3).map((feature, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-blue-100">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="relative">
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                                <h3 className="text-2xl font-bold mb-6">Bu Hizmette</h3>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-turuncu-500 rounded-xl flex items-center justify-center text-white text-xl">✓</div>
                                        <div>
                                            <div className="font-bold">Anında Değerleme</div>
                                            <div className="text-sm text-blue-200">30 dakikada net fiyat</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center text-white text-xl">✓</div>
                                        <div>
                                            <div className="font-bold">Güvenli Ödeme</div>
                                            <div className="text-sm text-blue-200">Noter onaylı işlem</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">✓</div>
                                        <div>
                                            <div className="font-bold">Ücretsiz Hizmet</div>
                                            <div className="text-sm text-blue-200">Ekspertiz & evrak</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* REST OF THE PAGE */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: service.fullDescription }} />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 mt-12">
                                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                                    <h3 className="text-xl font-bold text-lacivert-700 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                                        Özellikler
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-gradient-to-br from-turuncu-50 to-orange-50 rounded-2xl p-6 border border-turuncu-200">
                                    <h3 className="text-xl font-bold text-lacivert-700 mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-turuncu-500 rounded-full"></span>
                                        Avantajlar
                                    </h3>
                                    <ul className="space-y-3">
                                        {service.benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-turuncu-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 font-medium">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                <div className="bg-gradient-to-br from-lacivert-700 to-lacivert-500 rounded-2xl p-6 text-white shadow-xl">
                                    <h3 className="text-2xl font-bold mb-4">Hemen Teklif Alın</h3>
                                    <p className="text-blue-200 mb-6 text-sm">
                                        {service.title} için özel fiyat teklifi alın
                                    </p>

                                    <div className="space-y-3">
                                        <a
                                            href={`https://wa.me/${siteConfig.whatsapp}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold rounded-xl transition-all"
                                        >
                                            <FaWhatsapp className="w-5 h-5" />
                                            <span>WhatsApp</span>
                                        </a>

                                        <a
                                            href={`tel:${siteConfig.phone}`}
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-turuncu-500 hover:bg-turuncu-600 text-white font-bold rounded-xl transition-all"
                                        >
                                            <FaPhoneAlt className="w-5 h-5" />
                                            <span>{siteConfig.phoneDisplay}</span>
                                        </a>
                                    </div>

                                    <div className="mt-6 pt-6 border-t border-white/20 text-center text-sm text-blue-200">
                                        ⚡ Ortalama yanıt süresi: 15 dakika
                                    </div>
                                </div>

                                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                                    <h4 className="font-bold text-gray-900 mb-4">Bu Hizmet İçin</h4>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm">İşlem Süresi</span>
                                            <span className="font-bold text-turuncu-600">24 saat</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm">Müşteri Sayısı</span>
                                            <span className="font-bold text-turuncu-600">5000+</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-600 text-sm">Memnuniyet</span>
                                            <span className="font-bold text-turuncu-600">%98</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <div>
                                            <div className="font-bold text-green-900">Güvenli İşlem</div>
                                            <div className="text-xs text-green-600">Noter onaylı</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-green-700">
                                        Tüm işlemlerimiz yasal prosedüre uygun, noter huzurunda gerçekleştirilir.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Services */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">
                            Diğer Hizmetlerimiz
                        </h2>
                        <p className="text-gray-600">
                            Size uygun diğer hizmet seçeneklerimizi inceleyin
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherServices
                            .slice(0, 3)
                            .map(otherService => (
                                <Link
                                    key={otherService.id}
                                    href={`/hizmetler/${otherService.slug}`}
                                    className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-turuncu-200"
                                >
                                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                                        {iconMap[otherService.icon] || <FaCar />}
                                    </div>
                                    <h3 className="text-xl font-bold text-lacivert-700 group-hover:text-turuncu-500 transition-colors mb-3">
                                        {otherService.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {otherService.shortDescription}
                                    </p>
                                    <div className="flex items-center text-turuncu-500 font-semibold text-sm group-hover:gap-2 transition-all">
                                        <span>Detaylı Bilgi</span>
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                    </div>
                </div>
            </section>

            <TestimonialsSection />
            <CTASection />
        </>
    );
}
