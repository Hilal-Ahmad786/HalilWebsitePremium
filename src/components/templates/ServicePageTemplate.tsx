'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCheck, FaFileSignature, FaMapMarkerAlt, FaPhoneAlt, FaSearch, FaShieldAlt, FaTruck, FaWallet, FaWhatsapp } from 'react-icons/fa';
import { faqs } from '@/data/faq';
import { cities } from '@/data/cities';
import { Service } from '@/data/types';
import { siteConfig } from '@/config/site';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { OfferForm } from '@/components/ui/OfferForm';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { ValuationProcess } from '@/components/sections/ValuationProcess';
import { getServiceImage } from '@/data/media';
const steps = [
  ['01', FaPhoneAlt, 'Bilgileri Paylaşın', 'Telefon veya WhatsApp üzerinden araç bilgilerini iletin.'],
  ['02', FaSearch, 'İnceleme', 'Araç durumu ve gerekli belgeler değerlendirilir.'],
  ['03', FaFileSignature, 'Teklif & Onay', 'Size iletilen teklifi inceleyip kararınızı verin.'],
  ['04', FaWallet, 'Noter & Ödeme', 'Devir ve ödeme adımları güvenli şekilde tamamlanır.'],
] as const;
const publishedCities = cities.filter((city) => city.published);

export default function ServicePageTemplate({ service, otherServices }: { service: Service; otherServices: Service[] }) {
  const image = getServiceImage(service.slug);
  const serviceFaqs = service.serviceFaqs && service.serviceFaqs.length > 0
    ? service.serviceFaqs
    : faqs.filter((faq) => faq.category === 'Genel' || faq.category === 'Hizmetler').slice(0, 5);
  const related = (service.relatedServiceSlugs && service.relatedServiceSlugs.length > 0
    ? service.relatedServiceSlugs.map((slug) => otherServices.find((item) => item.slug === slug)).filter((item): item is Service => Boolean(item))
    : otherServices
  ).slice(0, 3);

  return <>
    <section className="border-b border-line bg-surface"><div className="site-container grid gap-10 py-12 lg:grid-cols-[1.1fr_.9fr] lg:py-16"><div><nav aria-label="Sayfa yolu" className="text-sm text-muted"><Link href="/">Ana Sayfa</Link><span className="px-2">/</span><Link href="/hizmetler">Hizmetler</Link><span className="px-2">/</span><span>{service.title}</span></nav><p className="eyebrow mt-10">PROFESYONEL ARAÇ ALIM HİZMETİ</p><h1 className="display mt-4 text-4xl leading-tight sm:text-6xl">{service.title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-muted">{service.shortDescription}</p><div className="mt-8 flex flex-wrap gap-3"><a href="#teklif" className="button-primary">Ücretsiz Teklif Al <FaArrowRight /></a><a href={`tel:${siteConfig.phone}`} onClick={trackPhoneClick} className="button-dark"><FaPhoneAlt />{siteConfig.phoneDisplay}</a></div></div><div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-soft"><Image src={image} alt={`${service.title} için hasarlı araç`} fill priority sizes="(max-width:1024px) 100vw,45vw" className="object-cover" /></div></div></section>

    <section className="site-container section-space grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]"><article className="prose"><div dangerouslySetInnerHTML={{ __html: service.fullDescription }} /><h2>Bu Hizmet Kapsamında</h2><ul>{service.features.map((item) => <li key={item}>{item}</li>)}</ul><h2>Size Sağladığımız Avantajlar</h2><ul>{service.benefits.map((item) => <li key={item}>{item}</li>)}</ul></article><aside className="space-y-5 lg:sticky lg:top-24 lg:h-fit"><div id="teklif"><OfferForm compact source={`service_${service.slug}_form`} /></div><div className="border border-line bg-surface p-5"><div className="flex gap-3"><FaShieldAlt className="mt-1" /><div><h2 className="display text-lg">Güvenli İşlem</h2><p className="mt-2 text-sm leading-6 text-muted">İşlemler noter onaylı süreçle yürütülür.</p></div></div><div className="mt-5 flex gap-3"><FaTruck className="mt-1" /><p className="text-sm leading-6 text-muted">Gerektiğinde çekici desteği için ekibimizle görüşebilirsiniz.</p></div></div></aside></section>

    {service.vehicleTypes && service.vehicleTypes.length > 0 && (
      <section className="border-y border-line bg-surface"><div className="reveal site-container section-space"><p className="eyebrow">HANGİ ARAÇLARI ALIYORUZ?</p><h2 className="display mt-4 text-4xl leading-tight">Aracınızın durumu ne olursa olsun değerlendiriyoruz</h2><div className="mt-10 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">{service.vehicleTypes.map((item) => <div key={item.title}><h3 className="display text-lg leading-snug">{item.title}</h3><p className="mt-2 text-sm leading-6 text-muted">{item.description}</p></div>)}</div></div></section>
    )}

    {service.valuationFactors && service.valuationFactors.length > 0 && (
      <>
        <ValuationProcess />
        <section className="reveal site-container -mt-8 pb-[clamp(4rem,8vw,7.5rem)]"><p className="eyebrow">DEĞERLENDİRMEDE DİKKATE ALINAN KRİTERLER</p><div className="mt-6 grid gap-x-8 gap-y-5 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">{service.valuationFactors.map((item) => <div key={item.title} className="flex gap-3"><FaCheck className="mt-1 shrink-0 text-xs text-accent-ink" aria-hidden /><div><h3 className="font-bold text-ink">{item.title}</h3><p className="mt-1 text-sm leading-6 text-muted">{item.description}</p></div></div>)}</div></section>
      </>
    )}

    {service.documents && service.documents.length > 0 ? (
      <section className="border-y border-line bg-surface"><div className="reveal site-container section-space grid gap-10 lg:grid-cols-[.78fr_1.22fr]"><div><p className="eyebrow">SATIŞ İÇİN NELER GEREKİR?</p><h2 className="display mt-4 text-4xl leading-tight">Süreci hızlandıran birkaç belge</h2><p className="mt-5 max-w-md leading-8 text-muted">Aşağıdaki bilgi ve belgeler hazır olduğunda satış süreci daha hızlı ilerler; eksik olsa da ön değerlendirmeye başlayabiliriz.</p></div><div className="border-t border-line">{service.documents.map((item, index) => <div key={item} className="flex gap-5 border-b border-line py-5"><span className="display text-xl text-muted">0{index + 1}</span><p className="pt-1 font-semibold text-ink">{item}</p></div>)}</div></div></section>
    ) : (
      <section className="border-y border-line bg-surface"><div className="reveal site-container section-space grid gap-10 lg:grid-cols-[.78fr_1.22fr]"><div><p className="eyebrow">NASIL DEĞERLENDİRİYORUZ?</p><h2 className="display mt-4 text-4xl leading-tight">Sürecin her aşaması açık ve takip edilebilir.</h2><p className="mt-5 max-w-md leading-8 text-muted">Araç bilgisi, mevcut durum ve satış için gereken adımlar birlikte değerlendirilir. Teklifinize karar vermek için gereken bilgileri net biçimde paylaşıyoruz.</p></div><div className="border-t border-line">{['Araç bilgileri ve mevcut hasar durumu', 'Varsa eksper, servis veya sigorta belgeleri', 'Aracın bulunduğu konum ve teslim koşulları'].map((item, index) => <div key={item} className="flex gap-5 border-b border-line py-5"><span className="display text-xl text-muted">0{index + 1}</span><p className="pt-1 font-semibold text-ink">{item}</p></div>)}</div></div></section>
    )}

    <section className="reveal site-container section-space"><p className="eyebrow">SATIŞ ADIMLARI</p><h2 className="display mt-4 text-4xl">Tekliften devire planlı süreç</h2><div className="mt-10 grid gap-5 md:grid-cols-4">{steps.map(([number, Icon, title, copy]) => <div key={number} className="border-t border-ink pt-5"><span className="font-bold text-muted">{number}</span><Icon className="mt-7 text-xl" /><h3 className="display mt-5 text-xl">{title}</h3><p className="mt-3 text-sm leading-6 text-muted">{copy}</p></div>)}</div></section>

    {service.scenarios && service.scenarios.length > 0 && (
      <section className="border-y border-line bg-surface"><div className="reveal site-container section-space"><p className="eyebrow">SIK KARŞILAŞILAN DURUMLAR</p><h2 className="display mt-4 text-4xl">Aracınızın durumu bunlardan biri olabilir</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{service.scenarios.map((item) => <div key={item.title} className="border border-line bg-bg p-5"><h3 className="display text-lg leading-snug">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{item.description}</p></div>)}</div></div></section>
    )}

    <section className="reveal site-container section-space"><p className="eyebrow">SIK SORULAN SORULAR</p><h2 className="display mt-4 text-4xl">Merak edilenler</h2><div className="mt-8"><FaqAccordion items={serviceFaqs} /></div></section>

    <section className="border-y border-line bg-surface"><div className="reveal site-container section-space"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">HİZMET BÖLGELERİ</p><h2 className="display mt-4 text-4xl">Türkiye genelinde araç alımı</h2><p className="mt-5 max-w-lg leading-8 text-muted">Bulunduğunuz şehirdeki araç alım hizmeti hakkında bilgi almak için ilgili şehir sayfasını inceleyebilir veya doğrudan bize ulaşabilirsiniz.</p></div></div><div className="mt-10 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5">{publishedCities.map((city) => <Link key={city.slug} href={`/${city.slug}`} className="flex items-center gap-2 border-b border-line py-4 text-sm font-semibold text-muted hover:text-ink"><FaMapMarkerAlt className="text-xs" />{city.name}</Link>)}</div></div></section>

    <section className="reveal site-container section-space"><p className="eyebrow">İLGİLİ HİZMETLER</p><div className="mt-7 grid gap-3 md:grid-cols-3">{related.map((item) => <Link key={item.id} href={`/hizmetler/${item.slug}`} className="group flex items-center justify-between border border-line bg-bg p-5 transition-colors hover:border-ink"><div><h2 className="display text-lg">{item.title}</h2><p className="mt-2 text-sm text-muted">{item.shortDescription}</p></div><FaArrowRight className="shrink-0 transition group-hover:translate-x-1" /></Link>)}</div></section>
    <section className="bg-ink text-white"><div className="site-container flex flex-col justify-between gap-6 py-14 md:flex-row md:items-center"><div><p className="eyebrow text-soft">ARACINIZI BUGÜN DEĞERLENDİRİN</p><h2 className="display mt-3 text-3xl">Teklif almak için bize ulaşın.</h2></div><a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="button-whatsapp"><FaWhatsapp />WhatsApp ile Yaz</a></div></section>
  </>;
}
