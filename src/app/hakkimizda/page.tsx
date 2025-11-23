// src/app/hakkimizda/page.tsx - UPDATED
import { Metadata } from 'next';
import { siteConfig, businessInfo } from '@/data/site';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: `Hakkımızda | ${siteConfig.name}`,
  description: `${siteConfig.name} hakkında bilgiler, vizyonumuz ve misyonumuz.`,
};

export default function AboutPage() {
  const milestones = [
    { year: '2008', title: 'Kuruluş', description: 'İstanbul\'da araç alım hizmeti başladı', icon: '🎯' },
    { year: '2012', title: '5000+ Araç', description: 'İlk 5000 araç alım işlemi tamamlandı', icon: '🚗' },
    { year: '2018', title: 'Türkiye Geneli', description: 'Hizmet ağı Türkiye\'ye yayıldı', icon: '🗺️' },
    { year: '2024', title: '15000+ Araç', description: 'Sektörün lider firması olduk', icon: '🏆' },
  ];

  const values = [
    {
      icon: '🤝',
      title: 'Güven',
      description: 'İşimizin temeli güven üzerine kuruludur. Her işlemde şeffaflık ve dürüstlük önceliğimizdir.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: '⚡',
      title: 'Hız',
      description: '30 dakikada teklif, aynı gün ödeme. Zamanınıza değer veriyoruz.',
      color: 'from-turuncu-500 to-turuncu-600',
    },
    {
      icon: '💰',
      title: 'Adil Fiyat',
      description: 'Piyasa araştırması yaparak size en iyi fiyatı garanti ediyoruz.',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: '🎯',
      title: 'Profesyonellik',
      description: 'Uzman ekibimizle en iyi hizmeti sunuyoruz.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const team = [
    { role: 'Ekspertiz Uzmanları', count: '8 Kişi', icon: '🔍', color: 'from-lacivert-500 to-lacivert-600' },
    { role: 'Müşteri Temsilcileri', count: '5 Kişi', icon: '📞', color: 'from-turuncu-500 to-turuncu-600' },
    { role: 'Evrak İşlemleri', count: '3 Kişi', icon: '📄', color: 'from-blue-500 to-blue-600' },
    { role: 'Lojistik Ekibi', count: '4 Kişi', icon: '🚚', color: 'from-green-500 to-green-600' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lacivert-800 via-lacivert-700 to-lacivert-800 text-white py-10 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 mb-6">
                <span className="w-2 h-2 bg-turuncu-400 rounded-full animate-pulse" />
                {businessInfo.foundedYear} Yılından Beri Hizmetinizdeyiz
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Türkiye&apos;nin En Güvenilir
                <span className="block text-turuncu-400">Araç Alım Merkezi</span>
              </h1>

              <p className="text-xl text-blue-200 leading-relaxed mb-8">
                {businessInfo.experienceYears}+ yıllık deneyimimiz, {businessInfo.vehiclesPurchased} araç alım işlemi
                ve {businessInfo.customerSatisfaction} müşteri memnuniyeti ile sektörün lideri olduk.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-turuncu-400">{businessInfo.vehiclesPurchased}</div>
                  <div className="text-sm text-blue-200">Araç Aldık</div>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-turuncu-400">{businessInfo.customerSatisfaction}</div>
                  <div className="text-sm text-blue-200">Memnuniyet</div>
                </div>
                <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
                  <div className="text-3xl font-bold text-turuncu-400">{businessInfo.teamSize}+</div>
                  <div className="text-sm text-blue-200">Uzman Ekip</div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🏆</div>
                    <div className="text-2xl font-bold">#1</div>
                    <div className="text-xs text-blue-200">Sektör Lideri</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">⚡</div>
                    <div className="text-2xl font-bold">30dk</div>
                    <div className="text-xs text-blue-200">Hızlı Teklif</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">✓</div>
                    <div className="text-2xl font-bold">%100</div>
                    <div className="text-xs text-blue-200">Güvenli</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🌟</div>
                    <div className="text-2xl font-bold">7/24</div>
                    <div className="text-xs text-blue-200">Destek</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-turuncu-50 to-orange-100 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-turuncu-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                🎯
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-700 leading-relaxed">
                Araç alım satım sürecini müşterilerimiz için güvenli, hızlı ve şeffaf hale getirmek.
                Profesyonel hizmet anlayışımız ve deneyimli ekibimizle sektörde fark yaratmak.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-lacivert-50 rounded-3xl p-8 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-lacivert-700 rounded-2xl flex items-center justify-center text-white text-3xl mb-6">
                🚀
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-gray-700 leading-relaxed">
                Türkiye&apos;nin en güvenilir ve tercih edilen araç alım satım platformu olmak.
                Teknoloji ve insan odaklı yaklaşımımızla sektöre yön vermek.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Başarı Hikayemiz</h2>
            <p className="text-xl text-gray-600">Yıllar içinde attığımız önemli adımlar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-turuncu-200">
                  <div className="text-5xl mb-4">{milestone.icon}</div>
                  <div className="text-4xl font-bold text-turuncu-500 mb-2">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </div>
                {index < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-1 bg-turuncu-500" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-xl text-gray-600">Bizi biz yapan prensipler</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 group hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-lacivert-700 to-lacivert-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ekibimiz</h2>
            <p className="text-xl text-blue-200">
              {businessInfo.teamSize} kişilik uzman ekibimizle hizmetinizdeyiz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className={`w-16 h-16 bg-gradient-to-r ${member.color} rounded-xl flex items-center justify-center text-4xl mb-4`}>
                  {member.icon}
                </div>
                <div className="text-2xl font-bold text-turuncu-400 mb-2">{member.count}</div>
                <div className="text-sm text-blue-200">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-turuncu-100 rounded-2xl flex items-center justify-center text-turuncu-500 text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hızlı İşlem</h3>
              <p className="text-gray-600">
                30 dakikada teklif, aynı gün ödeme. Zamanınız değerli.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center text-green-500 text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                💰
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">En İyi Fiyat</h3>
              <p className="text-gray-600">
                Piyasa araştırması yaparak size en yüksek fiyatı veriyoruz.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-500 text-4xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                🔒
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Güvenli İşlem</h3>
              <p className="text-gray-600">
                Noter onaylı, yasal prosedür ile %100 güvenli işlem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}