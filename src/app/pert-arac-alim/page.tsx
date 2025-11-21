import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Pert Araç Alan | Sigorta Çıkışlı Araçlar • Premium Auto Expert',
  description: 'Pert (sigorta çıkışlı) araç alımında uzman! Kasko pert kayıtlı tüm araçlar için en iyi fiyat ve yasal işlem garantisi.',
  keywords: ['pert araç alan', 'sigorta çıkışlı araç', 'pert belgeli araç satmak'],
};

export default function PertAracPage() {
  const whyUsItems = [
    {
      icon: 'fas fa-file-medical-alt',
      title: 'Pert Uzmanı',
      description: 'Sigorta pert süreçlerinde 15 yıllık deneyim.',
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Yasal Güvence',
      description: 'Tüm pert işlemleri yasal prosedüre uygun.',
    },
    {
      icon: 'fas fa-coins',
      title: 'Adil Değerleme',
      description: 'Pert durumuna göre en iyi piyasa fiyatı.',
    },
    {
      icon: 'fas fa-clock',
      title: 'Hızlı Süreç',
      description: 'Pert evrakları ile 24 saat içinde işlem.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-file-upload',
      title: 'Pert Belgesini Gönderin',
      description: 'WhatsApp\'tan pert raporunu paylaşın.',
    },
    {
      icon: 'fas fa-calculator',
      title: 'Değerleme',
      description: 'Pert durumuna göre fiyat hesaplıyoruz.',
    },
    {
      icon: 'fas fa-stamp',
      title: 'Yasal İşlemler',
      description: 'Pert devir işlemlerini tamamlıyoruz.',
    },
    {
      icon: 'fas fa-money-check-alt',
      title: 'Anında Ödeme',
      description: 'Noter sonrası anında nakit/EFT.',
    },
  ];

  return (
    <div>
      <HeroBanner
        variant="pert"
        tagline="Sigorta Çıkışlı Araçlar İçin"
        title="Pert Araç Alımı"
        subtitle="Kasko Pert • Trafik Pert • Tüm Pert Türleri"
        highlight="Yasal İşlem Garantisi"
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-orange-600">Pert araç alan</strong> en güvenilir merkez! 
            Kasko pert, trafik pert, sigorta çıkışlı tüm araçlar için{' '}
            <strong className="text-orange-500">yasal prosedür ve en iyi fiyat</strong> garantisi veriyoruz.
          </p>
        </div>
      </section>

      <WhyUs
        title="Pert Araç Alımında Neden Biz?"
        subtitle="Yasal güvence • Adil değerleme • Hızlı işlem"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Pert Araç Satış Süreci"
        subtitle="Pert belgesi ile 4 adımda satış"
        steps={processSteps}
      />

      <ContactCTA />
    </div>
  );
}