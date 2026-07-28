// src/app/istanbul-hasarli-arac-alimi/page.tsx
import { Metadata } from 'next';
import HeroBanner from '@/components/sections/HeroBanner';
import WhyUs from '@/components/sections/WhyUs';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import ContactCTA from '@/components/sections/ContactCTA';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'İstanbul Hasarlı Araç Alımı | 7/24 En Yüksek Fiyat • Araban Nakit',
  description: 'İstanbul\'da hasarlı, kazalı, pert ve hurda araç alımı. 30 dakikada nakit teklif, ücretsiz ekspertiz, aynı gün ödeme. Tüm ilçelerde hizmet.',
  keywords: ['istanbul hasarlı araç alan', 'istanbul kazalı araç', 'istanbul araç alım'],
};

export default function IstanbulPage() {
  const whyUsItems = [
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Tüm İstanbul',
      description: 'Avrupa ve Anadolu yakasının tüm ilçelerinde hizmet veriyoruz.',
    },
    {
      icon: 'fas fa-truck',
      title: 'Ücretsiz Çekici',
      description: 'İstanbul genelinde ücretsiz çekici hizmeti sunuyoruz.',
    },
    {
      icon: 'fas fa-clock',
      title: '2 Saat İçinde',
      description: 'Aradığınızda 2 saat içinde yanınızdayız.',
    },
    {
      icon: 'fas fa-star',
      title: 'Lokal Uzman',
      description: 'İstanbul piyasasını en iyi bilen ekip.',
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'En İyi Fiyat',
      description: 'İstanbul\'da en yüksek fiyat garantisi.',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Güvenli İşlem',
      description: 'Noter onaylı, %100 yasal prosedür.',
    },
  ];

  const processSteps = [
    {
      icon: 'fas fa-phone-volume',
      title: 'İstanbul\'dan Arayın',
      description: 'Hangi ilçede olursanız olun, bizi arayın.',
    },
    {
      icon: 'fas fa-car',
      title: 'Yerinize Geliyoruz',
      description: 'Avrupa veya Anadolu yakası fark etmez.',
    },
    {
      icon: 'fas fa-clipboard-check',
      title: 'Ekspertiz',
      description: 'Yerinde detaylı ekspertiz yapıyoruz.',
    },
    {
      icon: 'fas fa-hand-holding-usd',
      title: 'Anında Ödeme',
      description: 'Noter ve nakit ödeme aynı gün.',
    },
  ];

  const istanbulDistricts = {
    avrupaYakasi: [
      'Beylikdüzü', 'Esenyurt', 'Avcılar', 'Küçükçekmece', 'Bahçelievler',
      'Bağcılar', 'Başakşehir', 'Sultangazi', 'Eyüpsultan', 'Gaziosmanpaşa',
      'Bayrampaşa', 'Esenler', 'Güngören', 'Zeytinburnu', 'Fatih',
      'Beyoğlu', 'Şişli', 'Beşiktaş', 'Sarıyer', 'Kağıthane', 'Arnavutköy',
    ],
    anadoluYakasi: [
      'Kadıköy', 'Ümraniye', 'Ataşehir', 'Maltepe', 'Kartal', 'Pendik',
      'Tuzla', 'Sancaktepe', 'Sultanbeyli', 'Çekmeköy', 'Beykoz',
      'Üsküdar', 'Şile', 'Adalar',
    ],
  };

  return (
    <div>
      <HeroBanner
        variant="kazali"
        tagline="İstanbul'da #1 Araç Alım Merkezi"
        title="İstanbul Hasarlı Araç Alımı"
        subtitle="Avrupa & Anadolu Yakası • Tüm İlçeler"
        highlight="2 Saat İçinde Yanınızdayız"
      />

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              İstanbul&apos;un Her Yerinde Hasarlı Araç Alımı
            </h2>
            <p className="text-lg leading-relaxed mb-6 text-gray-700">
              <strong className="text-turuncu-600">İstanbul hasarlı araç alan</strong> firmalar arasında en güvenilir adresiz.
              Beylikdüzü&apos;nden Kadıköy&apos;e, Sarıyer&apos;den Pendik&apos;e kadar{' '}
              <strong className="text-lacivert-700">İstanbul&apos;un tüm ilçelerinde</strong> kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz.
              Türkiye çapında{' '}
              <a
                href="https://hasarliaracalan.com/"
                target="_blank"
                rel="noopener"
                title="Hasarlı Araç Alan"
                className="font-semibold text-turuncu-600 hover:text-turuncu-500 underline"
              >
                hasarlı araç alan
              </a>{' '}
              partner ağımızla şehir dışındaki araçlarınız için de anında teklif sunuyoruz.
            </p>
            <div className="bg-turuncu-50 border-l-4 border-turuncu-500 p-4 rounded-r-xl">
              <p className="text-turuncu-800 font-semibold">
                ⚡ İstanbul Özel: Aradığınızda 2 saat içinde yerinizde ekspertiz!
              </p>
            </div>
          </div>
        </div>
      </section>

      <WhyUs
        title="İstanbul'da Neden Bizi Seçmelisiniz?"
        subtitle="Lokal bilgi • Hızlı hizmet • En iyi fiyat"
        items={whyUsItems}
      />

      {/* Districts Coverage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hizmet Verdiğimiz İlçeler
            </h2>
            <p className="text-xl text-gray-600">
              İstanbul&apos;un 39 ilçesinin tamamında aktif hizmet
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Avrupa Yakası */}
            <div className="bg-gradient-to-br from-lacivert-50 to-blue-50 rounded-2xl p-8 border border-lacivert-200">
              <h3 className="text-2xl font-bold text-lacivert-700 mb-6 flex items-center gap-2">
                <span className="text-3xl">🌉</span>
                Avrupa Yakası
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {istanbulDistricts.avrupaYakasi.map((district, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-turuncu-50 hover:border-turuncu-200 border border-gray-200 transition-all"
                  >
                    <svg className="w-4 h-4 text-turuncu-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{district}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Anadolu Yakası */}
            <div className="bg-gradient-to-br from-turuncu-50 to-orange-50 rounded-2xl p-8 border border-turuncu-200">
              <h3 className="text-2xl font-bold text-turuncu-700 mb-6 flex items-center gap-2">
                <span className="text-3xl">🌆</span>
                Anadolu Yakası
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {istanbulDistricts.anadoluYakasi.map((district, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg hover:bg-lacivert-50 hover:border-lacivert-200 border border-gray-200 transition-all"
                  >
                    <svg className="w-4 h-4 text-lacivert-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium text-gray-700">{district}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-turuncu-500 to-turuncu-600 text-white rounded-xl font-semibold shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span>Hangi ilçede olursanız olun, 2 saat içinde yanınızdayız!</span>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline
        title="İstanbul'da Araç Satış Süreci"
        subtitle="Arayın → Geliyoruz → Ekspertiz → Nakit"
        steps={processSteps}
      />

      {/* SEO Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              İstanbul&apos;da Hasarlı Araç Alımı Hakkında
            </h2>

            <p className="text-gray-700 leading-relaxed mb-4">
              İstanbul, Türkiye&apos;nin en büyük şehri olarak hasarlı araç alım satımında da en hareketli piyasaya sahiptir.
              Araban Nakit olarak, <strong>İstanbul hasarlı araç alan</strong> firmalar arasında 15 yıllık tecrübemizle
              sektörün öncüsüyüz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              İstanbul&apos;da Hangi İlçelerde Hizmet Veriyoruz?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Avrupa Yakası:</strong> Beylikdüzü, Esenyurt, Avcılar, Başakşehir, Şişli, Beşiktaş, Sarıyer başta olmak üzere tüm ilçelerde...
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Anadolu Yakası:</strong> Kadıköy, Ümraniye, Ataşehir, Maltepe, Kartal, Pendik ve diğer tüm ilçelerde hizmetinizdeyiz.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              İstanbul&apos;da Neden En İyi Fiyatı Veriyoruz?
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              İstanbul piyasasını yakından tanıyor, güncel fiyatları anlık takip ediyor ve geniş müşteri ağımız sayesinde
              araçları hemen satabiliyoruz. Bu sayede size <strong>İstanbul&apos;daki en yüksek fiyatı</strong> verebiliyoruz.
            </p>

            <div className="bg-turuncu-50 border-l-4 border-turuncu-500 p-6 rounded-r-xl my-8">
              <h4 className="font-bold text-lg text-turuncu-800 mb-2">
                📞 İstanbul&apos;dan Hemen Arayın!
              </h4>
              <p className="text-turuncu-700">
                {siteConfig.phoneDisplay} numaralı telefondan veya WhatsApp&apos;tan ulaşın,
                2 saat içinde yerinizde ekspertiz yapalım!
              </p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactCTA />
    </div>
  );
}