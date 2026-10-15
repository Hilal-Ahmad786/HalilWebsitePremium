import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowRight, FaCheck, FaCheckCircle, FaClock, FaHandHoldingUsd, FaMapMarkerAlt, FaShieldAlt, FaTruck } from 'react-icons/fa';
import { cities } from '@/data/cities';
import { faqs } from '@/data/faq';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import { OfferForm } from '@/components/ui/OfferForm';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { HeroCtaButtons, FullCtaButtons } from '@/components/ui/CtaButtons';
import { CityStructuredData } from '@/components/seo/PageStructuredData';
import { getCityImage, getCityImageAlt } from '@/data/media';

interface Props { params: Promise<{ citySlug: string }> }
const trustStrip = [
  { icon: FaClock, title: 'Ücretsiz Ekspertiz', copy: 'Yerinde veya noter yanında, ücretsiz.' },
  { icon: FaTruck, title: 'Ücretsiz Çekici', copy: 'Yürür durumda olmayan araçlar için.' },
  { icon: FaShieldAlt, title: 'Noter Güvencesi', copy: 'Devir işlemi noter üzerinden yürütülür.' },
  { icon: FaHandHoldingUsd, title: 'Aynı Gün Ödeme', copy: 'Noter sonrası ödeme aynı gün yapılır.' },
] as const;

export async function generateStaticParams() { return cities.filter((city) => city.published).map((city) => ({ citySlug: city.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { citySlug } = await params;
  const city = cities.find((item) => item.slug === citySlug && item.published);
  return city ? {
    title: { absolute: city.metaTitle }, description: city.metaDescription, keywords: city.keywords,
    alternates: { canonical: `/${city.slug}` },
    openGraph: { title: city.metaTitle, description: city.metaDescription, url: `/${city.slug}`, type: 'website', images: [{ url: getCityImage(city.id), width: 1200, height: 900, alt: city.hero.title }] },
  } : { title: 'Şehir Bulunamadı' };
}

export default async function CityPage({ params }: Props) {
  const { citySlug } = await params;
  const city = cities.find((item) => item.slug === citySlug && item.published);
  if (!city) notFound();
  const image = getCityImage(city.id);
  const cityFaqs = [
    { question: `${city.name}'da hasarlı araç için nasıl teklif alabilirim?`, answer: `Telefon veya WhatsApp üzerinden araç bilgilerinizi paylaşarak ${city.name}'daki aracınız için teklif sürecini başlatabilirsiniz.` },
    { question: `${city.name}'da aracım çalışmıyorsa ne yapmalıyım?`, answer: 'Aracın durumu ve bulunduğu konum paylaşıldığında gerekli taşıma ve değerlendirme adımları için ekip yönlendirmesi yapılır.' },
    ...faqs.filter((faq) => faq.category === 'Ödeme' || faq.category === 'İşlemler').slice(0, 2),
  ];
  return <>
    <CityStructuredData city={city} />
    <section className="border-b border-line bg-surface"><div className="site-container grid gap-10 py-12 lg:grid-cols-[1.15fr_.75fr_.9fr] lg:items-center"><div><nav aria-label="Sayfa yolu" className="text-sm text-muted"><Link href="/">Ana Sayfa</Link><span className="px-2">/</span><span>{city.name}</span></nav><p className="eyebrow mt-10">TÜRKİYE GENELİ ARAÇ ALIM HİZMETİ</p><h1 className="display mt-4 text-4xl leading-tight sm:text-6xl">{city.hero.title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{city.intro.content}</p><HeroCtaButtons /></div><div className="relative min-h-[260px] overflow-hidden rounded-2xl bg-soft lg:min-h-[360px]"><Image src={image} alt={getCityImageAlt(city.id, city.name)} fill sizes="(max-width:1024px) 100vw,30vw" className="object-cover" priority /><span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-bold text-ink shadow-[0_8px_20px_rgba(22,24,23,.14)] backdrop-blur"><FaCheckCircle className="text-accent-ink" />{city.hero.highlight}</span></div><OfferForm compact source={`city_${city.slug}_form`} /></div></section>

    <section className="border-b border-line bg-surface"><div className="site-container grid grid-cols-2 gap-x-6 gap-y-6 py-8 sm:grid-cols-4">{trustStrip.map(({ icon: Icon, title, copy }) => <div key={title} className="flex gap-3"><Icon className="mt-1 shrink-0 text-lg text-accent-ink" /><div><p className="text-sm font-bold text-ink">{title}</p><p className="mt-1 text-xs leading-5 text-muted">{copy}</p></div></div>)}</div></section>

    <section className="border-b border-line bg-bg"><div className="reveal site-container grid grid-cols-2 gap-8 py-10 sm:grid-cols-4">{[[city.stats.vehiclesBought, 'Araç Alımı'], [city.stats.responseTime, 'Ortalama Yanıt'], [city.stats.satisfaction, 'Memnuniyet'], [city.stats.experience, 'Tecrübe']].map(([value, label]) => <div key={label} className="text-center"><p className="display text-3xl text-ink sm:text-4xl">{value}</p><p className="mt-1 text-sm text-muted">{label}</p></div>)}</div></section>

    <section className="site-container section-space"><div className="reveal max-w-3xl"><p className="eyebrow">{city.name.toLocaleUpperCase('tr-TR')} HİZMET AĞI</p><h2 className="display mt-4 text-4xl leading-tight">{city.intro.title}</h2><p className="mt-5 leading-8 text-muted">Şehrinizdeki aracın durumunu uzaktan ön değerlendirme ile paylaşabilir, gerekli olduğunda yerinde inceleme için süreç hakkında bilgi alabilirsiniz.</p></div><div className="reveal mt-8 grid gap-x-8 sm:grid-cols-2">{city.intro.highlights.map((item) => <div key={item} className="flex gap-3 border-t border-line py-4"><FaCheck className="mt-1 shrink-0 text-accent-ink" /><p className="text-muted">{item}</p></div>)}</div></section>

    <section className="border-y border-line bg-surface"><div className="reveal site-container section-space"><p className="eyebrow">NEDEN ARABAN NAKİT?</p><h2 className="display mt-4 text-4xl">{city.name}&apos;da araç satışı için destek</h2><div className="mt-10 grid gap-x-8 md:grid-cols-2 lg:grid-cols-3">{city.whyUs.map((item) => <div key={item.title} className="border-t border-line py-6"><FaShieldAlt className="text-lg" /><h3 className="display mt-5 text-xl">{item.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{item.description}</p></div>)}</div></div></section>

    {city.districts?.length ? <section className="reveal site-container section-space"><p className="eyebrow">BÖLGELER</p><h2 className="display mt-4 text-4xl">{city.name}&apos;da hizmet verdiğimiz bölgeler</h2><div className="mt-10 grid gap-8 lg:grid-cols-2">{city.districts.map((group) => <section key={group.title} className="border border-line bg-surface p-6"><h3 className="display text-2xl">{group.title.replace(/[^\p{L}\s]/gu, '').trim()}</h3><div className="mt-6 grid grid-cols-2 gap-2 text-sm text-muted">{group.areas.map((area) => <span key={area} className="border-b border-line py-2">{area}</span>)}</div></section>)}</div></section> : null}

    <section className="border-y border-line bg-surface"><div className="reveal site-container section-space"><p className="eyebrow">SÜREÇ</p><h2 className="display mt-4 text-4xl">{city.name}&apos;da Araç Satışı</h2><div className="mt-10 grid gap-5 md:grid-cols-4">{city.process.map((step, index) => <div key={step.title} className="border-t border-ink pt-5"><span className="font-bold text-muted">0{index + 1}</span><h3 className="display mt-8 text-xl">{step.title}</h3><p className="mt-3 text-sm leading-6 text-muted">{step.description}</p></div>)}</div></div></section>

    <section className="reveal site-container section-space grid gap-12 lg:grid-cols-[minmax(0,1fr)_350px]"><article className="prose">{city.seoContent.sections.map((section) => <div key={section.title}><h2>{section.title}</h2><p>{section.content}</p></div>)}</article><aside className="border-l border-line pl-6"><p className="eyebrow">HİZMETLERİMİZ</p><h2 className="display mt-4 text-2xl">Aracınızın durumuna göre çözüm</h2><div className="mt-5 divide-y divide-line border-y border-line">{services.filter((service) => service.published && ['kazali-arac-alim', 'hasarli-arac-alim', 'pert-arac-alim', 'hurda-arac-alim'].includes(service.slug)).map((service) => <Link key={service.id} href={`/hizmetler/${service.slug}`} className="group flex items-center justify-between gap-4 py-4 text-sm font-bold">{service.title}<FaArrowRight className="transition group-hover:translate-x-1" /></Link>)}</div></aside></section>

    <section className="reveal site-container section-space"><p className="eyebrow">DİĞER ŞEHİRLER</p><h2 className="display mt-4 text-4xl">Hizmet verdiğimiz diğer şehirler</h2><div className="mt-10 grid grid-cols-2 border-t border-line sm:grid-cols-3 lg:grid-cols-5">{cities.filter((item) => item.published && item.slug !== city.slug).map((item) => <Link key={item.slug} href={`/${item.slug}`} className="flex items-center gap-2 border-b border-line py-4 text-sm font-semibold text-muted hover:text-ink"><FaMapMarkerAlt className="text-xs" />{item.name}</Link>)}</div></section>

    <section className="border-y border-line bg-surface"><div className="reveal site-container section-space"><p className="eyebrow">SIK SORULAN SORULAR</p><h2 className="display mt-4 text-4xl">{city.name}&apos;da araç alımı hakkında</h2><div className="mt-8"><FaqAccordion items={cityFaqs} /></div></div></section>

    <section className="bg-ink text-white"><div className="reveal site-container py-14"><p className="eyebrow text-soft">{city.name.toLocaleUpperCase('tr-TR')} İÇİN TEKLİF</p><h2 className="display mt-3 text-3xl">Aracınızı birlikte değerlendirelim.</h2><p className="mt-3 max-w-xl text-soft">{siteConfig.phoneDisplay} numaralı telefondan veya WhatsApp&apos;tan bize ulaşabilirsiniz.</p><FullCtaButtons /></div></section>
  </>;
}
