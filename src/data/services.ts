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
    metaTitle: 'Araç Alım Hizmeti | Araban Nakit',
    metaDescription: 'İstanbul\'da en iyi fiyatlarla araç alım hizmeti. Anında nakit ödeme, ücretsiz ekspertiz.',
    published: true,
    documents: [
      'Araç ruhsatı',
      'Araç sahibinin kimlik belgesi',
      'Varsa 2. anahtar ve bakım kayıtları',
      'Noter satış işlemi için taraflar arası randevu',
    ],
    serviceFaqs: [
      { question: 'Hasarsız araçlar için de teklif alabilir miyim?', answer: 'Evet, hasarlı/kazalı araçların yanı sıra sorunsuz ikinci el araçlar için de değerlendirme yapıyoruz.' },
      { question: 'Ekspertiz ücretli mi?', answer: 'Hayır, ekspertiz ve değerlendirme süreci ücretsizdir.' },
      { question: 'Ödeme ne zaman yapılır?', answer: 'Teklifin kabulü ve noter devir işleminin tamamlanmasının ardından ödeme aynı gün yapılır.' },
      { question: 'Kredi veya haciz kaydı olan araçları alıyor musunuz?', answer: 'Aracın kredi/haciz durumu ön görüşmede birlikte kontrol edilir; duruma göre süreç planlanır.' },
    ],
    relatedServiceSlugs: ['ekspertiz', 'kazali-arac-alim', 'hasarli-arac-alim'],
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
    metaTitle: 'Ekspertiz Hizmeti | Araban Nakit',
    metaDescription: 'Profesyonel araç ekspertiz hizmeti. Detaylı rapor, güvenli alım satım.',
    published: true,
    documents: [
      'Araç ruhsatı',
      'Aracın bulunduğu adres bilgisi',
    ],
    serviceFaqs: [
      { question: 'Ekspertiz için ücret ödüyor muyum?', answer: 'Hayır, satış amaçlı yaptırdığınız ekspertiz ücretsizdir.' },
      { question: 'Ekspertiz ne kadar sürer?', answer: 'Aracın durumuna göre değişmekle birlikte yerinde yapılan inceleme genellikle kısa sürede tamamlanır.' },
      { question: 'Ekspertiz sonucu bağlayıcı mı?', answer: 'Ekspertiz raporu, size sunulan teklifin dayanağıdır; teklifi kabul edip etmemek tamamen sizin kararınızdır.' },
    ],
    relatedServiceSlugs: ['arac-alim', 'kazali-arac-alim', 'hasarli-arac-alim'],
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
    metaTitle: 'Trafiğe Çıkış İşlemleri | Araban Nakit',
    metaDescription: 'Araç trafiğe çıkış işlemleri. Hızlı ve güvenli tescil hizmeti.',
    published: true,
    serviceFaqs: [
      { question: 'Satışı yaptıktan sonra araçla ilgili sorumluluğum devam eder mi?', answer: 'Noter devir işlemi ve tescil süreci tamamlandıktan sonra araç üzerindeki sorumluluk tarafımıza geçer.' },
      { question: 'Süreç ne kadar sürer?', answer: 'İşlemler genellikle 1-2 gün içinde tamamlanır.' },
    ],
    relatedServiceSlugs: ['arac-alim', 'arac-degisim'],
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
    metaTitle: 'Araç Değişim ve Takas | Araban Nakit',
    metaDescription: 'Araç takas hizmeti. Eski aracınızı yenisiyle değiştirin.',
    published: true,
    serviceFaqs: [
      { question: 'Hasarlı aracımla takas yapabilir miyim?', answer: 'Evet, hasarlı aracınızın değerlemesi yapılarak takas sürecine dahil edilebilir.' },
      { question: 'Fark tutarını nasıl ödeyebilirim?', answer: 'Fark tutarı için durumunuza uygun ödeme planı birlikte belirlenir.' },
    ],
    relatedServiceSlugs: ['arac-alim', 'ekspertiz'],
  },
  {
    id: 'kazali-arac-alim',
    slug: 'kazali-arac-alim',
    title: 'Kazalı Araç Alımı',
    shortDescription: 'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
    fullDescription: `
      <p class="text-lg leading-relaxed mb-6">
        Araban Nakit olarak Türkiye genelinde <strong class="text-primary">7/24 kazalı araç alan yerler</strong> ve
        <strong class="text-primary">kazalı araç alan firmalar</strong> arasında öne çıkıyoruz.
        Ücretsiz ekspertiz, noter onaylı işlem ve <strong class="text-orange-500">30 dakikada nakit teklif</strong> garantisiyle
        "<em>Kazalı aracımı satmak istiyorum</em>" diyen herkesi hemen yönlendiriyoruz.
      </p>

      <h3>Kazalı Araç Nedir?</h3>
      <p>Kazalı araç, trafik kazası sonucu kaporta, mekanik veya iç donanımında hasar oluşmuş araçlar için kullanılan genel bir tanımdır. Hasarın büyüklüğü küçük bir tampon çarpmasından şasiye ulaşan ağır hasara kadar geniş bir yelpazede değişebilir; önemli olan aracın mevcut durumunun doğru şekilde tespit edilmesidir.</p>

      <h3>Kazalı Aracınızı Nasıl Satarsınız?</h3>
      <p>Süreç genellikle araç bilgileri ve fotoğraflarla yapılan bir ön değerlendirmeyle başlar. Bu ön değerlendirme sonrasında gerekli görülürse aracın bulunduğu yerde fiziksel ekspertiz yapılır; böylece hem siz hem de ekibimiz net ve gerçekçi bir teklif üzerinde anlaşabilirsiniz.</p>
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
    metaTitle: 'Kazalı Araç Alan | 30 Dakikada Nakit Teklif • Araban Nakit',
    metaDescription: 'Kazalı araç alan lider firma! Türkiye\'nin her yerinde 30 dakikada ücretsiz ekspertiz ve anında nakit ödeme.',
    published: true,
    vehicleTypes: [
      { title: 'Ön Çarpma Hasarlı Araçlar', description: 'Tampon, far, motor kaputu ve ön panelde hasar oluşan araçlar.' },
      { title: 'Arka Çarpma Hasarlı Araçlar', description: 'Bagaj, arka panel ve arka aks bölgesinde hasar bulunan araçlar.' },
      { title: 'Yan Darbe Almış Araçlar', description: 'Kapı, yan panel veya B direği bölgesinde hasar oluşan araçlar.' },
      { title: 'Devrilme Sonucu Hasarlı Araçlar', description: 'Takla veya devrilme sonucu tavan ve gövdede hasar oluşan araçlar.' },
      { title: 'Airbag\'i Açılmış Araçlar', description: 'Kaza sonucu hava yastığı patlamış, iç donanımı etkilenmiş araçlar.' },
      { title: 'Yürür Durumda Olmayan Araçlar', description: 'Motor veya şanzıman arızası nedeniyle kendi gücüyle hareket edemeyen araçlar.' },
      { title: 'Ağır Kaporta Hasarlı Araçlar', description: 'Birden fazla panelde veya şasi bölgesinde ciddi hasar bulunan araçlar.' },
      { title: 'Mekanik Hasarlı Araçlar', description: 'Kaza sonrası motor, şanzıman veya süspansiyon sisteminde sorun oluşan araçlar.' },
    ],
    valuationFactors: [
      { title: 'Marka ve Model', description: 'Aracın marka, model ve donanım seviyesi piyasa değerinin başlangıç noktasıdır.' },
      { title: 'Model Yılı', description: 'Aracın yaşı, amortisman ve güncel piyasa talebini doğrudan etkiler.' },
      { title: 'Kilometre', description: 'Kat edilen yol, mekanik ömür ve ikinci el değeri açısından önemlidir.' },
      { title: 'Hasarın Konumu', description: 'Hasarın ön, arka, yan veya şasi bölgesinde olması onarım kapsamını belirler.' },
      { title: 'Hasarın Büyüklüğü', description: 'Kozmetik bir hasar ile yapısal bir hasar farklı şekilde değerlendirilir.' },
      { title: 'Şasi ve Direk Durumu', description: 'Taşıyıcı gövde elemanlarının sağlamlığı güvenlik ve değer açısından kritik bir kriterdir.' },
      { title: 'Airbag Durumu', description: 'Hava yastıklarının açılıp açılmadığı iç donanım maliyetini etkiler.' },
      { title: 'Mekanik Durum', description: 'Motor, şanzıman ve diğer mekanik aksamın çalışır olup olmaması değerlendirilir.' },
      { title: 'Piyasa Değeri', description: 'Hasarsız haldeki güncel ikinci el piyasa değeri referans alınır.' },
      { title: 'Onarım Maliyeti', description: 'Aracı yeniden yola çıkarmak için gereken tahmini onarım maliyeti hesaba katılır.' },
      { title: 'Evrak ve Durum Bilgisi', description: 'Ruhsat, varsa sigorta eksper raporu ve aracın kayıt durumu sürecin şeffaflığını artırır.' },
    ],
    documents: [
      'Araç ruhsatı',
      'Araç sahibinin kimlik belgesi',
      'Varsa sigorta/eksper hasar raporu',
      'Noter satış işlemi için taraflar arası randevu',
    ],
    scenarios: [
      { title: 'Aracım Yürümüyor, Yine de Değerlendirir misiniz?', description: 'Evet, yürür durumda olmayan araçlar için de değerlendirme yapıyor, gerektiğinde çekici desteği sağlıyoruz.' },
      { title: 'Kaza Raporu veya Sigorta Belgem Yok', description: 'Belge olmadan da fotoğraflar ve araç bilgileriyle ön değerlendirme yapılabilir; net teklif için yerinde inceleme planlanır.' },
      { title: 'Aracımda Birden Fazla Hasar Var', description: 'Çoklu hasar durumunda tüm bölgeler tek seferde değerlendirilip kapsamlı bir teklif oluşturulur.' },
    ],
    serviceFaqs: [
      { question: 'Kazalı aracım çalışmıyor olsa da satabilir miyim?', answer: 'Evet, yürür durumda olmayan kazalı araçlar için de değerlendirme yapıyoruz; gerekirse çekici desteğiyle aracınızı aldırıyoruz.' },
      { question: 'Aracın fotoğraflarıyla ön değerlendirme yapılabilir mi?', answer: 'Evet, araç bilgileri ve fotoğraflar üzerinden ön değerlendirme yapılır; net teklif için gerektiğinde yerinde ekspertiz planlanır.' },
      { question: 'Ekspertiz ücretli mi?', answer: 'Hayır, ekspertiz ve değerlendirme süreci ücretsizdir.' },
      { question: 'Çekici hizmeti nasıl çalışıyor?', answer: 'Aracınız yürür durumda değilse, anlaşma sonrası ekibimiz çekici ile aracı bulunduğu adresten teslim alır.' },
      { question: 'Ödeme ne zaman yapılır?', answer: 'Teklifin kabulü ve noter devir işleminin tamamlanmasının ardından ödeme aynı gün yapılır.' },
      { question: 'Noter işlemi nasıl ilerler?', answer: 'Devir işlemi noter üzerinden taraflar arası yapılır; süreç boyunca gerekli evrakların hazırlanmasında destek oluyoruz.' },
      { question: 'Türkiye\'nin başka bir şehrindeysem araç satabilir miyim?', answer: 'Evet, Türkiye genelinde hizmet veriyoruz; bulunduğunuz şehre göre süreç planlanır.' },
    ],
    relatedServiceSlugs: ['hasarli-arac-alim', 'pert-arac-alim', 'hurda-arac-alim'],
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

      <h3>Hasarlı Araç Nedir?</h3>
      <p>Hasarlı araç, kaza, mekanik arıza veya uzun süreli kullanım sonucu değer kaybına uğramış, onarım gerektiren araçlar için kullanılan bir tanımdır. Hasar yalnızca kaporta ile sınırlı olabileceği gibi motor veya şanzıman gibi mekanik aksamı da kapsayabilir.</p>

      <h3>Hasarlı Araç Fiyatı Nasıl Hesaplanır?</h3>
      <p>Fiyatlandırma; aracın hasarsız haldeki güncel piyasa değeri, hasarın kapsamı ve tahmini onarım maliyeti birlikte değerlendirilerek yapılır. Kesin rakam, paylaşılan araç bilgileri ve gerektiğinde yerinde yapılan incelemenin ardından netleşir; sabit bir formülle önceden garanti edilmez.</p>
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
    metaTitle: 'Hasarlı Araç Alan | En Yüksek Fiyat Garantisi • Araban Nakit',
    metaDescription: 'Hasarlı araç alımında #1! Motor, şanzıman, kaporta hasarı olan tüm araçlar için en iyi fiyat. Ücretsiz ekspertiz ve anında ödeme.',
    published: true,
    vehicleTypes: [
      { title: 'Kaporta Hasarlı Araçlar', description: 'Panel, kapı veya tamponlarda hasar bulunan, kozmetik onarım gerektiren araçlar.' },
      { title: 'Mekanik Hasarlı Araçlar', description: 'Motor, şanzıman veya diğer mekanik aksamında arıza olan araçlar.' },
      { title: 'Motor Arızalı Araçlar', description: 'Motor bloğu, supap veya yağlama sisteminde ciddi sorun yaşayan araçlar.' },
      { title: 'Şanzıman Problemi Olan Araçlar', description: 'Vites geçişlerinde sorun yaşayan veya şanzımanı arızalanmış araçlar.' },
      { title: 'Su Hasarlı Araçlar', description: 'Sel veya su baskını sonucu iç donanımı ve elektroniği etkilenmiş araçlar.' },
      { title: 'Onarım Maliyeti Yüksek Araçlar', description: 'Onarım masrafı aracın değerine yaklaşan veya aşan araçlar.' },
      { title: 'Değer Kaybı Yüksek Araçlar', description: 'Geçmiş kaza kayıtları nedeniyle piyasa değeri düşmüş araçlar.' },
      { title: 'Çalışmayan Araçlar', description: 'Şu an motoru çalışmayan veya hareket edemeyen araçlar.' },
      { title: 'Uzun Süredir Satılamayan Araçlar', description: 'Hasar geçmişi nedeniyle ikinci el piyasasında alıcı bulmakta zorlanan araçlar.' },
    ],
    valuationFactors: [
      { title: 'Hasarsız Piyasa Değeri', description: 'Aracın hasarsız haldeki güncel ikinci el değeri başlangıç referansıdır.' },
      { title: 'Hasarın Kapsamı', description: 'Hasarın yalnızca kaporta ile mi sınırlı olduğu, mekanik aksamı da kapsayıp kapsamadığı belirlenir.' },
      { title: 'Tahmini Onarım Maliyeti', description: 'Aracı yeniden yola çıkarmak için gereken tahmini masraf değerlendirmeye dahil edilir.' },
      { title: 'Model Yılı ve Kilometre', description: 'Aracın yaşı ve kat ettiği yol, mekanik ömür beklentisini etkiler.' },
      { title: 'Bakım Geçmişi', description: 'Düzenli bakım kayıtları olan araçlar için daha net bir değerlendirme yapılabilir.' },
      { title: 'Çalışır/Çalışmaz Durumu', description: 'Aracın kendi gücüyle hareket edip edemediği süreç planlamasını etkiler.' },
      { title: 'Evrak ve Ruhsat Bilgisi', description: 'Ruhsat üzerindeki bilgiler ve varsa hasar kaydı süreci hızlandırır.' },
    ],
    documents: [
      'Araç ruhsatı',
      'Araç sahibinin kimlik belgesi',
      'Varsa servis/bakım kayıtları',
      'Noter satış işlemi için taraflar arası randevu',
    ],
    scenarios: [
      { title: 'Motorum Arızalı, Onarım Maliyeti Yüksek', description: 'Motor veya şanzıman arızası olan araçlar için de mevcut durum üzerinden değerlendirme yapılır.' },
      { title: 'Aracım Uzun Süredir Satılamıyor', description: 'Hasar geçmişi nedeniyle satılamayan araçlar için gerçekçi ve hızlı bir teklif süreci sunuyoruz.' },
      { title: 'Kaporta ve Mekanik Hasar Bir Arada', description: 'Birden fazla hasar türü olsa da araç tek seferde kapsamlı şekilde değerlendirilir.' },
    ],
    serviceFaqs: [
      { question: 'Aracımın hem kaporta hem motor hasarı var, yine de alıyor musunuz?', answer: 'Evet, birden fazla hasar türü bir arada olsa da aracınızı değerlendiriyoruz.' },
      { question: 'Ekspertiz ücretli mi?', answer: 'Hayır, ekspertiz ve değerlendirme süreci ücretsizdir.' },
      { question: 'Çekici hizmeti nasıl çalışıyor?', answer: 'Aracınız yürür durumda değilse, anlaşma sonrası ekibimiz çekici ile aracı bulunduğu adresten teslim alır.' },
      { question: 'Ödeme ne zaman yapılır?', answer: 'Teklifin kabulü ve noter devir işleminin tamamlanmasının ardından ödeme aynı gün yapılır.' },
      { question: 'Türkiye\'nin başka bir şehrindeysem araç satabilir miyim?', answer: 'Evet, Türkiye genelinde hizmet veriyoruz; bulunduğunuz şehre göre süreç planlanır.' },
    ],
    relatedServiceSlugs: ['kazali-arac-alim', 'pert-arac-alim', 'hurda-arac-alim'],
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

      <h3>Pert Araç Nedir?</h3>
      <p>Pert araç, sigorta şirketi tarafından hasar tutarının aracın değerine kıyasla yüksek bulunması sonucu "pert" olarak kayıtlara geçen araçlar için kullanılan bir tanımdır. Bu karar sigorta şirketinin kendi değerlendirme süreci sonucunda verilir; biz alım sürecinde mevcut pert kaydını ve aracın güncel durumunu birlikte değerlendiririz.</p>

      <h3>Pert Kaydı Sürece Nasıl Yansır?</h3>
      <p>Pert kayıtlı bir aracın alım satımı, kaydı olmayan bir araca göre daha dikkatli bir evrak kontrolü gerektirir. Ruhsat üzerindeki kayıt bilgisi ve varsa sigorta/eksper raporu, değerlendirme sürecinde referans olarak kullanılır. Sürecin her adımında hangi belgelerin gerekli olduğu konusunda size açık bilgi veriyoruz.</p>
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
    metaTitle: 'Pert Araç Alan | Sigorta Çıkışlı Araçlar • Araban Nakit',
    metaDescription: 'Pert (sigorta çıkışlı) araç alımında uzman! Kasko pert kayıtlı tüm araçlar için en iyi fiyat ve yasal işlem garantisi.',
    published: true,
    vehicleTypes: [
      { title: 'Kasko Pert Kayıtlı Araçlar', description: 'Kasko sigortası kapsamında pert olarak kayıtlara geçmiş araçlar.' },
      { title: 'Trafik Sigortası Kaynaklı Pert Araçlar', description: 'Trafik sigortası süreci sonucunda pert kaydı oluşmuş araçlar.' },
      { title: 'Ağır Hasar Nedeniyle Pert Olan Araçlar', description: 'Hasar boyutu nedeniyle sigorta tarafından pert kabul edilen araçlar.' },
      { title: 'Onarılmış Ancak Pert Kaydı Devam Eden Araçlar', description: 'Fiziksel olarak onarılmış olsa da ruhsat kaydında pert ibaresi bulunan araçlar.' },
    ],
    valuationFactors: [
      { title: 'Pert Kaydının Türü ve Tarihi', description: 'Kaydın kasko mu trafik sigortası kaynaklı mı olduğu ve ne zaman işlendiği incelenir.' },
      { title: 'Aracın Mevcut Onarım Durumu', description: 'Aracın halihazırda onarılmış olup olmadığı değerlendirmeyi etkiler.' },
      { title: 'Hasarsız Emsal Piyasa Değeri', description: 'Aynı marka/model için hasarsız araçların güncel piyasa değeri referans alınır.' },
      { title: 'Şasi ve Yapısal Bütünlük', description: 'Taşıyıcı gövde elemanlarının durumu güvenlik ve değer açısından incelenir.' },
      { title: 'Evrak ve Sigorta Kaydı Bilgisi', description: 'Ruhsat ve varsa sigorta eksper raporu sürecin şeffaflığı için birlikte kontrol edilir.' },
    ],
    documents: [
      'Araç ruhsatı',
      'Araç sahibinin kimlik belgesi',
      'Varsa sigorta pert/eksper raporu',
      'Noter satış işlemi için taraflar arası randevu',
    ],
    scenarios: [
      { title: 'Aracım Kasko Pert Kayıtlı', description: 'Kasko pert kaydı bulunan araçlar için ruhsat ve sigorta bilgileri üzerinden değerlendirme yapılır.' },
      { title: 'Pert Kaydı Var Ama Araç Onarılmış Durumda', description: 'Fiziksel durum yerinde incelenerek onarım kalitesi de değerlendirmeye dahil edilir.' },
      { title: 'Pert Sürecinin Evrak Durumunu Bilmiyorum', description: 'Ruhsat ve varsa sigorta belgeleri üzerinden kaydı sizinle birlikte kontrol ediyoruz.' },
    ],
    serviceFaqs: [
      { question: 'Pert kayıtlı araç satın alıyor musunuz?', answer: 'Evet, kasko veya trafik sigortası kaynaklı pert kayıtlı araçları değerlendiriyoruz.' },
      { question: 'Pert kaydı olan bir aracın satışı için notere ne gerekir?', answer: 'Araç ruhsatı, kimlik belgesi ve varsa sigorta/eksper raporu ile noterde standart satış/devir süreci yürütülür.' },
      { question: 'Ekspertiz ücretli mi?', answer: 'Hayır, ekspertiz ve değerlendirme süreci ücretsizdir.' },
      { question: 'Ödeme ne zaman yapılır?', answer: 'Teklifin kabulü ve noter devir işleminin tamamlanmasının ardından ödeme aynı gün yapılır.' },
      { question: 'Türkiye\'nin başka bir şehrindeysem araç satabilir miyim?', answer: 'Evet, Türkiye genelinde hizmet veriyoruz; bulunduğunuz şehre göre süreç planlanır.' },
    ],
    relatedServiceSlugs: ['hasarli-arac-alim', 'kazali-arac-alim', 'hurda-arac-alim'],
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

      <h3>Hurda Araç Nedir?</h3>
      <p>Hurda araç, ekonomik ömrünü tamamlamış, onarımı aracın değerine kıyasla anlamlı olmayan veya resmi olarak hurdaya ayrılmış araçlar için kullanılan bir tanımdır. Bu araçlar genellikle trafikten çekilerek geri dönüşüm sürecine dahil edilir.</p>

      <h3>Hurda Belgeli İşlem ile Sıradan Hasarlı Araç Satışı Arasındaki Fark</h3>
      <p>Hurda belgeli işlemde araç resmi olarak trafikten çekilir ve kalıcı biçimde kayıttan düşürülür; bu süreç noter ve ilgili kurumlar üzerinden yürütülür. Sıradan hasarlı bir aracın satışında ise araç kaydı devam eder, sadece mülkiyet devri yapılır. Hangi sürecin sizin durumunuza uygun olduğunu birlikte değerlendiriyoruz.</p>
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
    metaTitle: 'Hurda Araç Alan | Çevre Dostu Geri Dönüşüm • Araban Nakit',
    metaDescription: 'Hurda araç alımında #1! Kullanım ömrü bitmiş, hurdaya çıkmış tüm araçlar için resmi belgeli işlem ve anında ödeme.',
    published: true,
    vehicleTypes: [
      { title: 'Uzun Süredir Kullanılmayan Araçlar', description: 'Yıllardır park halinde bekleyen, çalışır durumda olmayan araçlar.' },
      { title: 'Ağır Derecede Hasar Görmüş Araçlar', description: 'Kaza veya doğal etkiler nedeniyle ciddi yapısal hasar bulunan araçlar.' },
      { title: 'Onarımı Ekonomik Olmayan Araçlar', description: 'Onarım maliyeti aracın olası değerinin üzerinde kalan araçlar.' },
      { title: 'Motor/Şanzıman Sorunu Ciddi Boyutta Olan Araçlar', description: 'Mekanik aksamda büyük çaplı, onarımı mantıklı olmayan arızalar bulunan araçlar.' },
      { title: 'Parçaları Eksik Araçlar', description: 'Bazı parçaları sökülmüş veya eksik araçlar, mevcut duruma göre değerlendirilir.' },
      { title: 'Hurda Belgeli Araçlar', description: 'Zaten resmi hurda belgesi düzenlenmiş veya bu süreç talep edilen araçlar.' },
    ],
    valuationFactors: [
      { title: 'Aracın Genel Durumu ve Eksik Parça Bilgisi', description: 'Mevcut hasar boyutu ve varsa eksik parçalar değerlendirmeye dahil edilir.' },
      { title: 'Marka, Model ve Ağırlık', description: 'Aracın marka/modeli ve ağırlığı geri dönüşüm değerini etkiler.' },
      { title: 'Geri Dönüşüm Değeri', description: 'Aracın metal ve parça değeri güncel piyasa koşullarına göre hesaba katılır.' },
      { title: 'Evrak ve Kayıt Durumu', description: 'Ruhsat bilgisi ve hurda belgeli işlem talep edilip edilmediği süreci belirler.' },
    ],
    documents: [
      'Araç ruhsatı',
      'Araç sahibinin kimlik belgesi',
      'Resmi hurda belgesi talep ediliyorsa ilgili başvuru süreci hakkında bilgilendirme',
    ],
    scenarios: [
      { title: 'Aracım Yıllardır Kullanılmıyor', description: 'Uzun süredir hareketsiz duran araçlar için yerinde değerlendirme ve çekici desteği sağlanır.' },
      { title: 'Onarım Maliyeti Aracın Değerini Aşıyor', description: 'Bu durumdaki araçlar için hurda alım süreci genellikle daha mantıklı bir çözümdür.' },
      { title: 'Resmi Hurda Belgesi Almak İstiyorum', description: 'Talep etmeniz halinde araç resmi olarak trafikten çekilerek hurda belgeli sürece dahil edilir.' },
    ],
    serviceFaqs: [
      { question: 'Ağır hasarlı araç satın alıyor musunuz?', answer: 'Evet, onarımı ekonomik olmayan ağır hasarlı araçları hurda alım kapsamında değerlendiriyoruz.' },
      { question: 'Hurda belgesi düzenleniyor mu?', answer: 'Evet, talep edilmesi halinde resmi hurda belgesi süreci noter ve ilgili kurumlar üzerinden yürütülür.' },
      { question: 'Çekici hizmeti nasıl çalışıyor?', answer: 'Aracınız yürür durumda değilse, anlaşma sonrası ekibimiz çekici ile aracı bulunduğu adresten teslim alır.' },
      { question: 'Ödeme ne zaman yapılır?', answer: 'Teklifin kabulü ve gerekli devir/belge işleminin tamamlanmasının ardından ödeme aynı gün yapılır.' },
      { question: 'Türkiye\'nin başka bir şehrindeysem araç satabilir miyim?', answer: 'Evet, Türkiye genelinde hizmet veriyoruz; bulunduğunuz şehre göre süreç planlanır.' },
    ],
    relatedServiceSlugs: ['pert-arac-alim', 'hasarli-arac-alim', 'kazali-arac-alim'],
  },
];
