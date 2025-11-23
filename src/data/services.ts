// src/data/services.ts
import { Service } from './types';

export const services: Service[] = [
  {
    id: 'arac-alim',
    slug: 'arac-alim',
    title: 'Profesyonel Araç Alım',
    shortDescription: 'En iyi fiyatlarla aracınızı hızlı ve güvenli şekilde satın alıyoruz.',
    fullDescription: `
      <p>Aracınızı satmak istediğinizde en önemli konu güven ve doğru fiyattır. Biz, sektörde yılların deneyimiyle en profesyonel araç alım hizmetini sunuyoruz.</p>
      
      <h3>Nasıl Çalışır?</h3>
      <p>Aracınızın detaylı ekspertizini yaparak gerçek piyasa değerini belirliyoruz. Tüm evrak işlemlerini biz hallediyor, ödemeni anında yapıyoruz.</p>
      
      <h3>Neden Bizi Seçmelisiniz?</h3>
      <ul>
        <li>Anında nakit ödeme</li>
        <li>Profesyonel ekspertiz hizmeti</li>
        <li>Tüm marka ve modeller</li>
        <li>Kredi ve haciz kontrolü</li>
        <li>Ücretsiz evrak işlemleri</li>
      </ul>
    `,
    icon: 'FaCar',
    features: [
      'Anında nakit ödeme',
      'Tüm markalar kabul edilir',
      'Ücretsiz ekspertiz',
      'Evrak işlemleri bizden',
      '7/24 destek hattı',
    ],
    benefits: [
      'Güvenli ödeme garantisi',
      'Profesyonel değerleme',
      'Hızlı işlem süreci',
      'Şeffaf fiyatlandırma',
    ],
    image: '/images/services/arac-alim.jpg',
    order: 1,
    metaTitle: 'Araç Alım Hizmeti | Premium Auto Expert',
    metaDescription: 'İstanbul\'da en iyi fiyatlarla araç alım hizmeti. Anında nakit ödeme, ücretsiz ekspertiz.',
    published: true,
  },
  {
    id: 'ekspertiz',
    slug: 'ekspertiz',
    title: 'Detaylı Ekspertiz Hizmeti',
    shortDescription: 'Aracınızın gerçek durumunu öğrenin, bilinçli karar verin.',
    fullDescription: `
      <p>Araç alım satımında en kritik adım ekspertizdir. Profesyonel ekibimiz, son teknoloji cihazlarla aracınızı en ince ayrıntısına kadar inceliyor.</p>
      
      <h3>Ekspertiz Kapsamı</h3>
      <ul>
        <li>Boya ölçümü ve kaporta kontrolü</li>
        <li>Motor ve şanzıman test</li>
        <li>Elektronik sistem kontrolü</li>
        <li>Kasa ve şase muayenesi</li>
        <li>İç mekan detaylı inceleme</li>
        <li>Test sürüşü</li>
      </ul>
      
      <h3>Ekspertiz Raporu</h3>
      <p>Detaylı fotoğraflı rapor ile aracın tüm bilgilerine ulaşabilirsiniz.</p>
    `,
    icon: 'FaClipboardCheck',
    features: [
      'Profesyonel cihazlarla ölçüm',
      'Detaylı fotoğraflı rapor',
      'Kaza ve hasar tespiti',
      'Araç değer analizi',
      'Test sürüşü dahil',
    ],
    benefits: [
      'Güvenli alım satım',
      'Şeffaf değerleme',
      'Doğru fiyatlama',
      'Risk minimizasyonu',
    ],
    image: '/images/services/ekspertiz.jpg',
    order: 2,
    metaTitle: 'Ekspertiz Hizmeti | Premium Auto Expert',
    metaDescription: 'Profesyonel araç ekspertiz hizmeti. Detaylı rapor, güvenli alım satım.',
    published: true,
  },
  {
    id: 'trafige-cikis',
    slug: 'trafige-cikis',
    title: 'Trafiğe Çıkış İşlemleri',
    shortDescription: 'Aracınızı alıp trafiğe çıkış işlemlerini tamamlıyoruz.',
    fullDescription: `
      <p>Satın aldığımız araçları kendi adımıza trafiğe çıkararak tüm yasal sorumluluğu üstleniyoruz.</p>
      
      <h3>İşlem Süreci</h3>
      <ol>
        <li>Araç teslim alma</li>
        <li>Noter işlemleri</li>
        <li>Trafik tescil</li>
        <li>Plakalama</li>
        <li>Sigorta düzenleme</li>
      </ol>
      
      <p>Tüm işlemler 1-2 gün içinde tamamlanır.</p>
    `,
    icon: 'FaFileAlt',
    features: [
      'Hızlı işlem süreci',
      'Noter işlemleri',
      'Trafik kayıt',
      'Sigorta düzenleme',
      'Evrak takibi',
    ],
    benefits: [
      'Zahmetsiz süreç',
      'Yasal güvence',
      'Hızlı teslim',
      'Profesyonel destek',
    ],
    image: '/images/services/trafige-cikis.jpg',
    order: 3,
    metaTitle: 'Trafiğe Çıkış İşlemleri | Premium Auto Expert',
    metaDescription: 'Araç trafiğe çıkış işlemleri. Hızlı ve güvenli tescil hizmeti.',
    published: true,
  },
  {
    id: 'arac-degisim',
    slug: 'arac-degisim',
    title: 'Araç Değişim (Takas)',
    shortDescription: 'Aracınızı yeni bir araçla değiştirin, farkı ödeyin.',
    fullDescription: `
      <p>Eski aracınızla yeni bir araca geçiş yapmak istiyorsanız, takas hizmetimizden faydalanabilirsiniz.</p>
      
      <h3>Takas Avantajları</h3>
      <ul>
        <li>Geniş araç seçenekleri</li>
        <li>Adil değerleme</li>
        <li>Hızlı işlem</li>
        <li>Taksit imkanı</li>
      </ul>
      
      <h3>Nasıl Çalışır?</h3>
      <p>Aracınızın ekspertizini yapıyoruz, size uygun araç seçenekleri sunuyoruz. Fark tutarı için esnek ödeme planları oluşturuyoruz.</p>
    `,
    icon: 'FaExchangeAlt',
    features: [
      'Geniş araç portföyü',
      'Adil değerleme',
      'Taksit seçenekleri',
      'Hızlı teslimat',
      'Garanti seçenekleri',
    ],
    benefits: [
      'Kolay geçiş',
      'Ekonomik çözüm',
      'Güvenli işlem',
      'Esnek ödeme',
    ],
    image: '/images/services/arac-degisim.jpg',
    order: 4,
    metaTitle: 'Araç Değişim ve Takas | Premium Auto Expert',
    metaDescription: 'Araç takas hizmeti. Eski aracınızı yenisiyle değiştirin.',
    published: true,
  },
  {
    id: 'kazali-arac-alim',
    slug: 'kazali-arac-alim',
    title: 'Kazalı Araç Alımı',
    shortDescription: 'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
    fullDescription: `
      <p class="text-lg leading-relaxed mb-6">
        Premium Auto Expert olarak İstanbul genelinde <strong class="text-primary">7/24 kazalı araç alan yerler</strong> ve 
        <strong class="text-primary">kazalı araç alan firmalar</strong> arasında öne çıkıyoruz.
        Ücretsiz ekspertiz, noter onaylı işlem ve <strong class="text-orange-500">30 dakikada nakit teklif</strong> garantisiyle
        "<em>Kazalı aracımı satmak istiyorum</em>" diyen herkesi hemen yönlendiriyoruz.
      </p>
    `,
    icon: 'FaCarCrash',
    features: [
      '30 Dakikada Teklif',
      'Ücretsiz Ekspertiz',
      'Ücretsiz Çekici',
      '7/24 Destek',
    ],
    benefits: [
      'En Yüksek Fiyat Garantisi',
      'Anında Nakit Ödeme',
      'Noter Onaylı İşlem',
      'Yerinde Değerleme',
    ],
    image: '/images/services/kazali-arac.jpg',
    order: 5,
    metaTitle: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif • Premium Auto Expert',
    metaDescription: 'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
    published: true,
  },
  {
    id: 'hasarli-arac-alim',
    slug: 'hasarli-arac-alim',
    title: 'Hasarlı Araç Alımı',
    shortDescription: 'Hasarlı araç alımında #1! Motor, şanzıman, kaporta hasarı olan tüm araçlar için en iyi fiyat.',
    fullDescription: `
      <p class="text-lg leading-relaxed mb-6">
        <strong class="text-purple-600">Hasarlı araç alan</strong> firmalar arasında en güvenilir adresiz. 
        Motor arızası, şanzıman problemi, kaporta hasarı—fark etmeksizin 
        <strong class="text-orange-500">tüm hasarlı araçlar</strong> için en yüksek fiyatı veriyoruz.
      </p>
    `,
    icon: 'FaTools',
    features: [
      'Her Hasar Türü',
      'En Yüksek Fiyat',
      'Ücretsiz Çekici',
      'Kolay Evrak',
    ],
    benefits: [
      'Motor Arızalı Araç Alımı',
      'Şanzıman Arızalı Araç Alımı',
      'Kaporta Hasarlı Araç Alımı',
      'Anında Nakit Ödeme',
    ],
    image: '/images/services/hasarli-arac.jpg',
    order: 6,
    metaTitle: 'Hasarlı Araç Alan | En Yüksek Fiyat Garantisi • Premium Auto Expert',
    metaDescription: 'Hasarlı araç alımında #1! Motor, şanzıman, kaporta hasarı olan tüm araçlar için en iyi fiyat. Ücretsiz ekspertiz ve anında ödeme.',
    published: true,
  },
  {
    id: 'pert-arac-alim',
    slug: 'pert-arac-alim',
    title: 'Pert Araç Alımı',
    shortDescription: 'Pert (sigorta çıkışlı) araç alımında uzman! Kasko pert kayıtlı tüm araçlar için en iyi fiyat.',
    fullDescription: `
      <p class="text-lg leading-relaxed mb-6">
        <strong class="text-orange-600">Pert araç alan</strong> en güvenilir merkez! 
        Kasko pert, trafik pert, sigorta çıkışlı tüm araçlar için 
        <strong class="text-orange-500">yasal prosedür ve en iyi fiyat</strong> garantisi veriyoruz.
      </p>
    `,
    icon: 'FaExclamationTriangle',
    features: [
      'Pert Uzmanı',
      'Yasal Güvence',
      'Adil Değerleme',
      'Hızlı Süreç',
    ],
    benefits: [
      'Sigorta Çıkışlı Araç Alımı',
      'Kasko Pert Kayıtlı Araç Alımı',
      'Yasal Prosedür Garantisi',
      'Anında Nakit Ödeme',
    ],
    image: '/images/services/pert-arac.jpg',
    order: 7,
    metaTitle: 'Pert Araç Alan | Sigorta Çıkışlı Araçlar • Premium Auto Expert',
    metaDescription: 'Pert (sigorta çıkışlı) araç alımında uzman! Kasko pert kayıtlı tüm araçlar için en iyi fiyat ve yasal işlem garantisi.',
    published: true,
  },
  {
    id: 'hurda-arac-alim',
    slug: 'hurda-arac-alim',
    title: 'Hurda Araç Alımı',
    shortDescription: 'Hurda araç alımında #1! Kullanım ömrü bitmiş, hurdaya çıkmış tüm araçlar için resmi belgeli işlem.',
    fullDescription: `
      <p class="text-lg leading-relaxed mb-6">
        <strong class="text-green-600">Hurda araç alan</strong> en güvenilir firma! 
        Eski, kullanım ömrü bitmiş araçlarınızı 
        <strong class="text-orange-500">resmi hurda belgesi ile yasal olarak</strong> alıyoruz.
        Çevre dostu geri dönüşüm garantisi.
      </p>
    `,
    icon: 'FaRecycle',
    features: [
      'Çevre Dostu',
      'Resmi Belge',
      'Kilo Bazlı',
      'Ücretsiz Taşıma',
    ],
    benefits: [
      'Hurda Belgesi Düzenleme',
      'Yasal Geri Dönüşüm',
      'Adil Hurda Fiyatları',
      'Ücretsiz Çekici Hizmeti',
    ],
    image: '/images/services/hurda-arac.jpg',
    order: 8,
    metaTitle: 'Hurda Araç Alan | Çevre Dostu Geri Dönüşüm • Premium Auto Expert',
    metaDescription: 'Hurda araç alımında #1! Kullanım ömrü bitmiş, hurdaya çıkmış tüm araçlar için resmi belgeli işlem ve anında ödeme.',
    published: true,
  },
];