// src/app/page.tsx
import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/HeroSection';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import ServicesComparison from '@/components/sections/ServicesComparison';
import CTASection from '@/components/sections/CTASection';
import TrustBadges from '@/components/sections/TrustBadges';
import CoverageArea from '@/components/sections/CoverageArea';

export const metadata: Metadata = {
  title: 'Premium Auto Expert - Kazalı, Hasarlı, Pert & Hurda Araç Alımı',
  description: 'İstanbul\'da En Güvenilir Araç Alım Merkezi. 30 dakikada nakit teklif, ücretsiz ekspertiz, 7/24 hizmet.',
};

export default function HomePage() {
  const whyUsItems = [
    {
      icon: 'fas fa-clock',
      title: '30 Dakikada Teklif',
      description: 'Ekspertiz sonrası 30 dakika içinde nakit teklif alın.',
    },
    {
      icon: 'fas fa-search',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde veya noter yanında ekspertiz—%100 ücretsiz.',
    },
    {
      icon: 'fas fa-truck-moving',
      title: 'Ücretsiz Çekici',
      description: 'Aracınızı ücretsiz çekiciyle alırız.',
    },
    {
      icon: 'fas fa-headset',
      title: '7/24 Destek',
      description: 'Her adımda yanınızdayız—anında yanıt.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Güvenli İşlem',
      description: 'Noter onaylı, %100 yasal süreç.',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'En Yüksek Fiyat',
      description: 'Piyasa üstü teklif garantisi.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone-volume',
      title: 'Bize Ulaşın',
      description: '7/24 çağrı merkezi | WhatsApp.',
    },
    {
      icon: 'fas fa-search-location',
      title: 'Ücretsiz Ekspertiz',
      description: 'Yerinde inceleme + rapor.',
    },
    {
      icon: 'fas fa-file-signature',
      title: 'Teklif & Onay',
      description: 'Piyasa üstü en iyi fiyat.',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Noter & Nakit',
      description: 'Noter devir → anında ödeme.',
    },
  ];

  return (
    <div className="home-page">
      <HeroSection />
      <TrustBadges />
      <WhyUs
        title="Premium Auto'yu Seçin"
        subtitle="30 Dakikada Teklif • Ücretsiz Ekspertiz • Ücretsiz Çekici • 7/24 Destek"
        items={whyUsItems}
      />
      <ServicesComparison />
      <ProcessTimeline
        title="4 Adımda Araç Satışı"
        subtitle="Kazalı, Hasarlı, Pert & Hurda araçlar için tüm aşamalar."
        steps={processSteps}
      />
      <TestimonialsSection />
      <CoverageArea />
      <CTASection />
    </div>
  );
}