'use client';
import Image from 'next/image';
import { FaCheckCircle, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { OfferForm } from '@/components/ui/OfferForm';
import { StatCounter } from '@/components/ui/StatCounter';
import { siteConfig } from '@/config/site';
import { heroImage } from '@/data/media';
import { statistics } from '@/data/stats';
import { trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

const heroStats = ['Yıllık Tecrübe', 'Satın Alınan Araç', 'Müşteri Memnuniyeti']
  .map((label) => statistics.find((stat) => stat.label === label))
  .filter((stat): stat is NonNullable<typeof stat> => Boolean(stat));

export function HeroSection() {
  return (
    <section id="arac-sat" className="overflow-hidden border-b border-line bg-bg">
      <div className="site-container grid min-h-[680px] items-center gap-8 py-14 lg:grid-cols-[1.35fr_.8fr_1fr] lg:gap-10 lg:py-16">
        <div>
          <p className="hero-anim eyebrow mb-6">TÜRKİYE GENELİ ARAÇ ALIM MERKEZİ</p>
          <h1 className="hero-anim hero-anim-2 display max-w-[620px] text-[3.15rem] leading-[.94] text-ink sm:text-6xl lg:text-[4.1rem] xl:text-[4.5rem]">
            Hasarlı Aracınız<br /><span className="mt-3 inline-block bg-accent px-2 py-1 text-[.92em] leading-none">En İyi Fiyata</span>
          </h1>
          <p className="hero-anim hero-anim-3 mt-7 max-w-xl text-lg leading-8 text-muted">30 dakikada teklif alın, aynı gün nakit ödeyin. Ücretsiz ekspertiz ve çekici hizmeti ile.</p>
          <div className="hero-anim hero-anim-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick} className="button-whatsapp"><FaWhatsapp />WhatsApp ile Teklif Al</a>
            <a href={`tel:${siteConfig.phone}`} onClick={trackPhoneClick} className="button-dark"><FaPhoneAlt />Hemen Ara</a>
          </div>
          <div className="hero-anim hero-anim-4 mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-6">
            {heroStats.map((stat) => (
              <StatCounter key={stat.id} value={Number(stat.value)} suffix={stat.suffix ?? ''} label={stat.label} immediate />
            ))}
          </div>
        </div>
        <div className="hero-anim hero-anim-3 relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-soft">
            <Image src={heroImage} alt="Ön bölümünde çarpışma hasarı bulunan araç" fill priority sizes="(max-width:1024px) 70vw,28vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-transparent to-transparent" />
          </div>
          <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1.5 text-xs font-bold text-ink shadow-[0_8px_20px_rgba(22,24,23,.14)] backdrop-blur">
            <FaCheckCircle className="text-accent-ink" />Ücretsiz Ekspertiz
          </span>
          <p className="absolute bottom-5 left-5 max-w-[11rem] text-sm font-bold leading-5 text-white">Hasar, aracınızın değerini sıfırlamaz.</p>
        </div>
        <div className="hero-anim hero-anim-4" id="hizli-teklif">
          <OfferForm source="hero_form" />
        </div>
      </div>
    </section>
  );
}
