
// ===== src/app/hakkimizda/page.tsx =====
import { Metadata } from 'next';
import { siteConfig, businessInfo } from '@/data/site';
import { CTASection } from '@/components/sections';

export const metadata: Metadata = {
  title: `Hakkımızda | ${siteConfig.name}`,
  description: `${siteConfig.name} hakkında bilgiler, vizyonumuz ve misyonumuz.`,
};

export default function AboutPage() {
  return (
    <>
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-lacivert-700 mb-6">
              Hakkımızda
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8">
                {businessInfo.experienceYears} yıllık deneyimimizle İstanbul'un güvenilir araç alım satım firmasıyız.
              </p>

              <h2>Misyonumuz</h2>
              <p>
                Araç alım satım sürecini müşterilerimiz için güvenli, hızlı ve şeffaf hale getirmek. 
                Profesyonel hizmet anlayışımız ve deneyimli ekibimizle sektörde fark yaratmak.
              </p>

              <h2>Vizyonumuz</h2>
              <p>
                Türkiye'nin en güvenilir ve tercih edilen araç alım satım platformu olmak. 
                Teknoloji ve insan odaklı yaklaşımımızla sektöre yön vermek.
              </p>

              <h2>Değerlerimiz</h2>
              <ul>
                <li><strong>Güven:</strong> İşimizin temeli güven üzerine kuruludur.</li>
                <li><strong>Şeffaflık:</strong> Tüm süreçlerimizde tam şeffaflık sağlarız.</li>
                <li><strong>Profesyonellik:</strong> Uzman ekibimizle en iyi hizmeti sunarız.</li>
                <li><strong>Müşteri Odaklılık:</strong> Müşteri memnuniyeti önceliğimizdir.</li>
              </ul>

              <h2>Neden Bizi Seçmelisiniz?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                    {businessInfo.experienceYears} Yıllık Deneyim
                  </h3>
                  <p className="text-gray-600">
                    {businessInfo.foundedYear} yılından beri sektörde hizmet veriyoruz.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                    {businessInfo.teamSize} Kişilik Uzman Ekip
                  </h3>
                  <p className="text-gray-600">
                    Profesyonel ve deneyimli ekibimizle hizmetinizdeyiz.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">🚗</div>
                  <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                    {businessInfo.vehiclesPurchased} Araç Alımı
                  </h3>
                  <p className="text-gray-600">
                    Binlerce araç alım satım işlemi gerçekleştirdik.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="text-3xl mb-3">⭐</div>
                  <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                    {businessInfo.customerSatisfaction} Müşteri Memnuniyeti
                  </h3>
                  <p className="text-gray-600">
                    Müşterilerimizin büyük çoğunluğu memnun ayrılıyor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}