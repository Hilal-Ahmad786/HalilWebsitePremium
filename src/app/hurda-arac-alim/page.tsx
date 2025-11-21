import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Hurda Araç Alan | Çevre Dostu Geri Dönüşüm • Premium Auto Expert',
  description: 'Hurda araç alımında #1! Kullanım ömrü bitmiş, hurdaya çıkmış tüm araçlar için resmi belgeli işlem ve anında ödeme.',
  keywords: ['hurda araç alan', 'hurda belgesi', 'eski araç hurdaya çıkarma'],
};

export default function HurdaAracPage() {
  const whyUsItems = [
    {
      icon: 'fas fa-recycle',
      title: 'Çevre Dostu',
      description: 'Yasal ve çevre dostu geri dönüşüm süreci.',
    },
    {
      icon: 'fas fa-certificate',
      title: 'Resmi Belge',
      description: 'Hurda belgesi ile yasal işlem garantisi.',
    },
    {
      icon: 'fas fa-weight',
      title: 'Kilo Bazlı',
      description: 'Güncel hurda fiyatları ile adil ödeme.',
    },
    {
      icon: 'fas fa-truck',
      title: 'Ücretsiz Taşıma',
      description: 'Aracınızı ücretsiz çekici ile alıyoruz.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone-volume',
      title: 'Başvuru',
      description: 'Bizi arayın, araç bilgilerini paylaşın.',
    },
    {
      icon: 'fas fa-file-alt',
      title: 'Evrak Kontrolü',
      description: 'Ruhsat ve kimlik kontrolü yapıyoruz.',
    },
    {
      icon: 'fas fa-stamp',
      title: 'Hurda İşlemi',
      description: 'Resmi hurda belgesi düzenliyoruz.',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Ödeme',
      description: 'Kilo bazlı anında nakit ödeme.',
    },
  ];

  return (
    <div>
      <HeroBanner
        variant="hurda"
        tagline="Çevre Dostu Araç Geri Dönüşüm"
        title="Hurda Araç Alımı"
        subtitle="Eski • Kullanım Ömrü Bitmiş • Hurdaya Çıkacak"
        highlight="Resmi Belgeli İşlem"
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-green-600">Hurda araç alan</strong> en güvenilir firma! 
            Eski, kullanım ömrü bitmiş araçlarınızı{' '}
            <strong className="text-orange-500">resmi hurda belgesi ile yasal olarak</strong> alıyoruz.
            Çevre dostu geri dönüşüm garantisi.
          </p>
        </div>
      </section>

      <WhyUs
        title="Hurda Araç Alımında Neden Biz?"
        subtitle="Resmi belge • Çevre dostu • Adil fiyat"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Hurda Araç Satış Süreci"
        subtitle="Resmi belgeli 4 adımda işlem"
        steps={processSteps}
      />

      <ContactCTA />
    </div>
  );
}