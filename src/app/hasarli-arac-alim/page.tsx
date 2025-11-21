import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import ContactCTA from '@/components/sections/ContactCTA';

export const metadata: Metadata = {
  title: 'Hasarlı Araç Alan | En Yüksek Fiyat Garantisi • Premium Auto Expert',
  description: 'Hasarlı araç alımında #1! Motor, şanzıman, kaporta hasarı olan tüm araçlar için en iyi fiyat. Ücretsiz ekspertiz ve anında ödeme.',
  keywords: ['hasarlı araç alan', 'hasarlı araç satmak', 'motor arızalı araç'],
};

export default function HasarliAracPage() {
  const whyUsItems = [
    {
      icon: 'fas fa-tools',
      title: 'Her Hasar Türü',
      description: 'Motor, şanzıman, kaporta—tüm hasarlar için alım yapıyoruz.',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'En Yüksek Fiyat',
      description: 'Hasarlı araçlar için piyasanın en iyi teklifini sunuyoruz.',
    },
    {
      icon: 'fas fa-truck-pickup',
      title: 'Ücretsiz Çekici',
      description: 'Hasar nedeniyle hareket etmeyen araçları ücretsiz çekiyoruz.',
    },
    {
      icon: 'fas fa-file-contract',
      title: 'Kolay Evrak',
      description: 'Tüm yasal işlemleri biz hallediyoruz—sorunsuz devir.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone',
      title: 'İletişim',
      description: 'Bizi arayın veya WhatsApp\'tan hasar fotoğraflarını gönderin.',
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Ekspertiz',
      description: 'Uzman ekibimiz hasarı yerinde değerlendirir.',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Teklif',
      description: 'En yüksek fiyat teklifini anında alın.',
    },
    {
      icon: 'fas fa-handshake',
      title: 'İşlem',
      description: 'Noter devir ve anında nakit ödeme.',
    },
  ];

  return (
    <div>
      <HeroBanner
        variant="hasarli"
        tagline="Her Türlü Hasarlı Araç İçin"
        title="Hasarlı Araç Alımı"
        subtitle="Motor • Şanzıman • Kaporta Hasarı"
        highlight="En Yüksek Fiyat Garantisi"
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <p className="text-lg leading-relaxed mb-6">
            <strong className="text-purple-600">Hasarlı araç alan</strong> firmalar arasında en güvenilir adresiz. 
            Motor arızası, şanzıman problemi, kaporta hasarı—fark etmeksizin{' '}
            <strong className="text-orange-500">tüm hasarlı araçlar</strong> için en yüksek fiyatı veriyoruz.
          </p>
        </div>
      </section>

      <WhyUs
        title="Neden Hasarlı Araç Alan Yerler Arasında Biz?"
        subtitle="En yüksek fiyat • Ücretsiz çekici • Hızlı işlem"
        items={whyUsItems}
      />

      <ProcessTimeline
        title="Hasarlı Araç Satış Süreci"
        subtitle="4 kolay adımda aracınızı satın"
        steps={processSteps}
      />

      <ContactCTA />
    </div>
  );
}