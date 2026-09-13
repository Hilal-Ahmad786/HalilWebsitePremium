import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaBolt, FaMapMarkerAlt, FaShieldAlt, FaWallet } from 'react-icons/fa';
import { HeroSection } from '@/components/sections/HeroSection';
import { ContentDepth } from '@/components/sections/ContentDepth';
import { ProcessExperience } from '@/components/sections/ProcessExperience';
import { StatCounter } from '@/components/ui/StatCounter';
import { ctaImage, ogImage } from '@/data/media';
import { statistics } from '@/data/stats';

export const metadata: Metadata = {
  title: { absolute: 'Araban Nakit - Kazalı, Hasarlı, Pert & Hurda Araç Alımı' },
  description: 'Türkiye genelinde kazalı, hasarlı, pert ve hurda araç alımı. 30 dakikada teklif, ekspertiz ve satış süreci hakkında bilgi alın.',
  alternates: { canonical: '/' },
  openGraph: { url: '/', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Araban Nakit hasarlı araç alımı' }] },
};

const quickFacts = [
  [FaBolt, '30 Dakikada Teklif', 'Hızlı ve kolay süreç'],
  [FaMapMarkerAlt, 'Türkiye Geneli Hizmet', '81 ilde araç alımı'],
  [FaWallet, 'Aynı Gün Ödeme', 'Noter sonrası ödeme'],
  [FaShieldAlt, 'Güvenli İşlem', 'Noter onaylı süreç'],
] as const;

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="border-b border-line bg-surface">
        <div className="reveal site-container grid divide-y divide-line md:grid-cols-4 md:divide-x md:divide-y-0">
          {quickFacts.map(([Icon, title, copy]) => (
            <div key={title} className="flex gap-4 py-6 md:px-6">
              <Icon className="mt-1 text-lg" />
              <div>
                <h2 className="font-bold text-ink">{title}</h2>
                <p className="mt-1 text-sm text-muted">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-container py-10">
        <p className="reveal mx-auto max-w-4xl text-center text-lg leading-8 text-muted">
          Türkiye genelinde <a href="https://hasarliaracalan.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-ink underline decoration-accent decoration-4 underline-offset-4">hasarlı araç alan</a> uzman ekibimizle kazalı, pert ve hurda aracınız için 30 dakikada nakit teklif veriyor, noter devrinin ardından aynı gün ödeme yapıyoruz.
        </p>
      </section>

      <section className="border-y border-line bg-bg">
        <div className="reveal site-container grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          {statistics.map((stat) => (
            <StatCounter key={stat.id} value={Number(stat.value)} prefix={stat.prefix ?? ''} suffix={stat.suffix ?? ''} label={stat.label} className="text-center" />
          ))}
        </div>
      </section>

      <ContentDepth />
      <ProcessExperience />

      <section className="bg-ink text-white">
        <div className="site-container grid gap-10 py-16 lg:grid-cols-[1fr_.7fr] lg:py-24">
          <div className="reveal">
            <p className="eyebrow text-soft">HEMEN BAŞLAYIN</p>
            <h2 className="display mt-5 max-w-xl text-5xl leading-[1.02] sm:text-6xl">Aracınızı Satmanın <span className="text-accent">En Kolay Yolu.</span></h2>
            <p className="mt-5 max-w-lg text-soft">2 dakikada net teklif alın. Ücretsiz ekspertiz, noter süreci ve çekici hizmetiyle yanınızdayız.</p>
            <Link href="/#arac-sat" className="button-primary mt-8">Aracımı Değerlendir <FaArrowRight /></Link>
          </div>
          <div className="reveal relative min-h-[320px] overflow-hidden rounded-2xl bg-[#252724]">
            <Image src={ctaImage} alt="Premium otomotiv far detayı" fill sizes="(max-width:1024px) 100vw,40vw" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}
