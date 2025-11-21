// src/data/blog-posts.ts
import { BlogPost } from './types';

export const blogPosts: BlogPost[] = [
  {
    id: 'ikinci-el-arac-alirken-dikkat-edilmesi-gerekenler',
    slug: 'ikinci-el-arac-alirken-dikkat-edilmesi-gerekenler',
    title: 'İkinci El Araç Alırken Dikkat Edilmesi Gerekenler',
    excerpt: '2. el araç alımında doğru kararı vermek için bilmeniz gereken 10 önemli nokta.',
    content: `
      <p>İkinci el araç almak, yeni araç almaya göre daha ekonomik bir seçenek olabilir ancak dikkat edilmesi gereken birçok nokta vardır.</p>
      
      <h2>1. Ekspertiz Yaptırın</h2>
      <p>Aracı satın almadan önce mutlaka detaylı bir ekspertiz yaptırın. Profesyonel bir ekspertiz, aracın gerçek durumunu ortaya koyar.</p>
      
      <h2>2. Araç Geçmişini Kontrol Edin</h2>
      <p>Aracın kaza geçmişi, bakım kayıtları ve sahiplik geçmişini detaylı inceleyin.</p>
      
      <h2>3. Motor ve Şanzıman Kontrolü</h2>
      <p>Motor ve şanzıman aracın en önemli parçalarıdır. Profesyonel kontrol mutlaka yapılmalıdır.</p>
      
      <h2>4. Boya ve Kaporta</h2>
      <p>Boya kalınlık ölçer ile aracın hangi bölümlerinin boyalı olduğunu tespit edin.</p>
      
      <h2>5. Test Sürüşü</h2>
      <p>Mutlaka test sürüşü yapın ve aracın yol tutuşunu, fren performansını test edin.</p>
      
      <h2>6. Evrak Kontrolü</h2>
      <p>Ruhsat, noter satış, sigorta ve muayene belgelerini detaylı inceleyin.</p>
      
      <h2>7. Fiyat Araştırması</h2>
      <p>Benzer araçların piyasa fiyatlarını araştırarak adil bir fiyat belirleyin.</p>
      
      <h2>8. Kredi ve Haciz Kontrolü</h2>
      <p>Araç üzerinde kredi veya haciz olup olmadığını mutlaka kontrol edin.</p>
      
      <h2>9. İç Mekan Kontrolü</h2>
      <p>Araç içi temizlik, koku, döşeme durumu aracın genel bakımı hakkında fikir verir.</p>
      
      <h2>10. Profesyonel Yardım Alın</h2>
      <p>Deneyimli bir eksper veya güvenilir bir galeri ile çalışmak riskleri minimize eder.</p>
    `,
    author: 'Ahmet Yılmaz',
    authorImage: '/images/authors/ahmet.jpg',
    date: '2024-01-15',
    category: 'Araç Alım',
    tags: ['İkinci El', 'Araç Alım', 'Ekspertiz', 'Rehber'],
    image: '/images/blog/ikinci-el-arac.jpg',
    readTime: 8,
    metaTitle: 'İkinci El Araç Alırken Dikkat Edilmesi Gerekenler - 10 Altın Kural',
    metaDescription: '2. el araç alımında bilinmesi gereken tüm detaylar. Ekspertiz, fiyat, evrak kontrolü ve daha fazlası.',
    published: true,
  },
  {
    id: 'aracimi-satis-en-iyi-fiyat',
    slug: 'aracimi-nasil-satarim-en-iyi-fiyati-nasil-alabilirim',
    title: 'Aracımı Nasıl Satarım? En İyi Fiyatı Nasıl Alabilirim?',
    excerpt: 'Aracınızı en iyi fiyata satmanın ipuçları ve stratejileri.',
    content: `
      <p>Aracınızı satarken en iyi fiyatı almak için doğru stratejileri uygulamalısınız.</p>
      
      <h2>Aracınızı Satmadan Önce</h2>
      <p>Aracınızı satmaya karar vermeden önce yapmanız gerekenler:</p>
      <ul>
        <li>Detaylı temizlik yaptırın</li>
        <li>Küçük onarımları tamamlayın</li>
        <li>Bakım ve servis kayıtlarını hazırlayın</li>
        <li>Piyasa fiyatlarını araştırın</li>
      </ul>
      
      <h2>Doğru Fiyat Belirleme</h2>
      <p>Aracınızın gerçek değerini belirlemek için:</p>
      <ol>
        <li>Benzer ilanları inceleyin</li>
        <li>Ekspertiz değerlemesi yaptırın</li>
        <li>Özel durumları göz önünde bulundurun</li>
        <li>Pazarlık payı bırakın</li>
      </ol>
      
      <h2>Güvenli Satış İçin</h2>
      <p>Profesyonel bir galeri ile çalışmak, hem güvenliği hem de hızlı satışı garanti eder.</p>
    `,
    author: 'Mehmet Demir',
    authorImage: '/images/authors/mehmet.jpg',
    date: '2024-01-20',
    category: 'Araç Satış',
    tags: ['Araç Satış', 'Fiyatlama', 'Strateji'],
    image: '/images/blog/arac-satis.jpg',
    readTime: 6,
    metaTitle: 'Aracımı Nasıl Satarım? En İyi Fiyat İçin Rehber',
    metaDescription: 'Aracınızı en iyi fiyata satmanın yolları. Fiyat belirleme, hazırlık ve güvenli satış stratejileri.',
    published: true,
  },
  {
    id: 'arac-ekspertiz-nedir',
    slug: 'arac-ekspertiz-nedir-neden-gereklidir',
    title: 'Araç Ekspertizi Nedir? Neden Gereklidir?',
    excerpt: 'Araç ekspertizinin önemi ve kapsamı hakkında bilmeniz gereken her şey.',
    content: `
      <p>Araç ekspertizi, bir aracın teknik durumunun profesyonel olarak değerlendirilmesi işlemidir.</p>
      
      <h2>Ekspertiz Nedir?</h2>
      <p>Ekspertiz, aracın mekanik, elektriksel ve görsel tüm bileşenlerinin uzman kişiler tarafından kontrol edilmesidir.</p>
      
      <h2>Ekspertiz Kapsamı</h2>
      <ul>
        <li>Motor ve şanzıman kontrolü</li>
        <li>Kaporta ve boya ölçümü</li>
        <li>Elektrik ve elektronik sistem</li>
        <li>Fren ve süspansiyon</li>
        <li>İç mekan ve aksesuar</li>
        <li>Egzoz emisyon kontrolü</li>
      </ul>
      
      <h2>Neden Önemlidir?</h2>
      <p>Ekspertiz, alıcı için güvence, satıcı için değer kanıtıdır. Güvenli alım satım için olmazsa olmazdır.</p>
    `,
    author: 'Ali Kaya',
    authorImage: '/images/authors/ali.jpg',
    date: '2024-02-01',
    category: 'Ekspertiz',
    tags: ['Ekspertiz', 'Araç Kontrolü', 'Güvenlik'],
    image: '/images/blog/ekspertiz.jpg',
    readTime: 5,
    metaTitle: 'Araç Ekspertizi Nedir? Kapsamlı Rehber',
    metaDescription: 'Araç ekspertizinin önemi, kapsamı ve faydaları. Profesyonel ekspertiz hakkında tüm detaylar.',
    published: true,
  },
];

export const blogCategories = [
  'Araç Alım',
  'Araç Satış',
  'Ekspertiz',
  'Yasal İşlemler',
  'Bakım ve Onarım',
  'Rehber',
];