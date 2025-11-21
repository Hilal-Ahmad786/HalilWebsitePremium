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
];