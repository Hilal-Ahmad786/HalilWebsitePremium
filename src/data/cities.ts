// src/data/cities.ts
export interface CityData {
  id: string;
  slug: string;
  name: string;
  region?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    highlight: string;
  };
  intro: {
    title: string;
    content: string;
    highlights: string[];
  };
  districts?: {
    title: string;
    areas: string[];
  }[];
  whyUs: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  process: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  stats: {
    vehiclesBought: string;
    responseTime: string;
    satisfaction: string;
    experience: string;
  };
  seoContent: {
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
  published: boolean;
}

export const cities: CityData[] = [
  {
    id: 'istanbul',
    slug: 'istanbul-hasarli-arac-alimi',
    name: 'İstanbul',
    metaTitle: 'İstanbul Hasarlı Araç Alımı | 7/24 En Yüksek Fiyat • Araban Nakit',
    metaDescription: 'İstanbul\'da hasarlı, kazalı, pert ve hurda araç alımı. 30 dakikada nakit teklif, ücretsiz ekspertiz, aynı gün ödeme. Tüm ilçelerde hizmet.',
    keywords: ['istanbul hasarlı araç alan', 'istanbul kazalı araç', 'istanbul araç alım', 'istanbul pert araç'],
    hero: {
      tagline: 'İstanbul\'da #1 Araç Alım Merkezi',
      title: 'İstanbul Hasarlı Araç Alımı',
      subtitle: 'Avrupa & Anadolu Yakası • Tüm İlçeler',
      highlight: '2 Saat İçinde Yanınızdayız',
    },
    intro: {
      title: 'İstanbul\'un Her Yerinde Hasarlı Araç Alımı',
      content: 'İstanbul hasarlı araç alan firmalar arasında en güvenilir adresiz. Beylikdüzü\'nden Kadıköy\'e, Sarıyer\'den Pendik\'e kadar İstanbul\'un tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz.',
      highlights: [
        'İstanbul Özel: Aradığınızda 2 saat içinde yerinizde ekspertiz!',
        'Avrupa ve Anadolu yakasında eş zamanlı hizmet',
        'Trafik yoğunluğuna göre optimized routing',
      ],
    },
    districts: [
      {
        title: '🌉 Avrupa Yakası',
        areas: [
          'Beylikdüzü', 'Esenyurt', 'Avcılar', 'Küçükçekmece', 'Bahçelievler',
          'Bağcılar', 'Başakşehir', 'Sultangazi', 'Eyüpsultan', 'Gaziosmanpaşa',
          'Bayrampaşa', 'Esenler', 'Güngören', 'Zeytinburnu', 'Fatih',
          'Beyoğlu', 'Şişli', 'Beşiktaş', 'Sarıyer', 'Kağıthane', 'Arnavutköy',
        ],
      },
      {
        title: '🌆 Anadolu Yakası',
        areas: [
          'Kadıköy', 'Ümraniye', 'Ataşehir', 'Maltepe', 'Kartal', 'Pendik',
          'Tuzla', 'Sancaktepe', 'Sultanbeyli', 'Çekmeköy', 'Beykoz',
          'Üsküdar', 'Şile', 'Adalar',
        ],
      },
    ],
    whyUs: [
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
    ],
    process: [
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
    ],
    stats: {
      vehiclesBought: '8K+',
      responseTime: '2 saat',
      satisfaction: '%98',
      experience: '15 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'İstanbul\'da Hasarlı Araç Alımı Hakkında',
          content: 'İstanbul, Türkiye\'nin en büyük şehri olarak hasarlı araç alım satımında da en hareketli piyasaya sahiptir. Araban Nakit olarak, İstanbul hasarlı araç alan firmalar arasında 15 yıllık tecrübemizle sektörün öncüsüyüz.',
        },
        {
          title: 'İstanbul\'da Hangi İlçelerde Hizmet Veriyoruz?',
          content: 'Avrupa Yakası: Beylikdüzü, Esenyurt, Avcılar, Başakşehir, Şişli, Beşiktaş, Sarıyer başta olmak üzere tüm ilçelerde... Anadolu Yakası: Kadıköy, Ümraniye, Ataşehir, Maltepe, Kartal, Pendik ve diğer tüm ilçelerde hizmetinizdeyiz.',
        },
        {
          title: 'İstanbul\'da Neden En İyi Fiyatı Veriyoruz?',
          content: 'İstanbul piyasasını yakından tanıyor, güncel fiyatları anlık takip ediyor ve geniş müşteri ağımız sayesinde araçları hemen satabiliyoruz. Bu sayede size İstanbul\'daki en yüksek fiyatı verebiliyoruz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'ankara',
    slug: 'ankara-hasarli-arac-alimi',
    name: 'Ankara',
    metaTitle: 'Ankara Hasarlı Araç Alımı | En Yüksek Fiyat Garantisi • Araban Nakit',
    metaDescription: 'Ankara\'da hasarlı, kazalı, pert ve hurda araç alımı. Ücretsiz ekspertiz, aynı gün ödeme. Tüm ilçelerde 7/24 hizmet.',
    keywords: ['ankara hasarlı araç alan', 'ankara kazalı araç', 'ankara araç alım', 'ankara pert araç'],
    hero: {
      tagline: 'Ankara\'nın En Güvenilir Araç Alım Merkezi',
      title: 'Ankara Hasarlı Araç Alımı',
      subtitle: 'Çankaya • Keçiören • Mamak • Tüm İlçeler',
      highlight: '3 Saat İçinde Yerinizde Ekspertiz',
    },
    intro: {
      title: 'Ankara\'nın Tüm İlçelerinde Hasarlı Araç Alımı',
      content: 'Ankara hasarlı araç alan firmalar arasında en profesyonel hizmeti sunuyoruz. Başkent\'in tüm ilçelerinde kazalı, hasarlı, pert ve hurda araç alımı yapıyoruz.',
      highlights: [
        'Ankara\'ya özel hızlı hizmet garantisi',
        'Tüm ilçelerde aynı gün değerlendirme',
        'Başkent\'e özel fiyat avantajları',
      ],
    },
    districts: [
      {
        title: '📍 Merkez İlçeler',
        areas: [
          'Çankaya', 'Keçiören', 'Mamak', 'Yenimahalle', 'Etimesgut',
          'Sincan', 'Altındağ', 'Gölbaşı', 'Pursaklar',
        ],
      },
      {
        title: '📍 Diğer İlçeler',
        areas: [
          'Polatlı', 'Elmadağ', 'Çubuk', 'Beypazarı', 'Kazan',
          'Ayaş', 'Kızılcahamam', 'Şereflikoçhisar', 'Haymana',
        ],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-map-marked-alt',
        title: 'Tüm Ankara',
        description: 'Başkent\'in her köşesinde aktif hizmet.',
      },
      {
        icon: 'fas fa-shipping-fast',
        title: '3 Saat Garantisi',
        description: 'Aradığınızda 3 saat içinde yerinizde.',
      },
      {
        icon: 'fas fa-university',
        title: 'Başkent Uzmanı',
        description: 'Ankara piyasasına hakim ekip.',
      },
      {
        icon: 'fas fa-hand-holding-usd',
        title: 'Özel Fiyatlar',
        description: 'Ankara\'ya özel rekabetçi teklifler.',
      },
      {
        icon: 'fas fa-certificate',
        title: 'Resmi İşlem',
        description: 'Noter onaylı güvenli devir.',
      },
      {
        icon: 'fas fa-truck-loading',
        title: 'Çekici Hizmeti',
        description: 'Ankara geneli ücretsiz çekici.',
      },
    ],
    process: [
      {
        icon: 'fas fa-mobile-alt',
        title: 'Ankara\'dan Arayın',
        description: 'Hangi ilçede olursanız olun iletişime geçin.',
      },
      {
        icon: 'fas fa-route',
        title: 'Hızlı Ulaşım',
        description: '3 saat içinde adresinizde oluyoruz.',
      },
      {
        icon: 'fas fa-search-dollar',
        title: 'Ekspertiz & Değerleme',
        description: 'Profesyonel değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-money-check-alt',
        title: 'Ödeme',
        description: 'Aynı gün noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '3K+',
      responseTime: '3 saat',
      satisfaction: '%97',
      experience: '12 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Ankara\'da Hasarlı Araç Alımı',
          content: 'Türkiye\'nin başkenti Ankara\'da hasarlı araç alım işlemleri için en güvenilir adresiz. Çankaya\'dan Keçiören\'e, Mamak\'tan Yenimahalle\'ye kadar tüm ilçelerde hizmet veriyoruz.',
        },
        {
          title: 'Ankara Özel Hizmet Avantajları',
          content: 'Başkent\'in yoğun trafiğini ve coğrafyasını iyi bildiğimiz için size en hızlı ve profesyonel hizmeti sunabiliyoruz. Ankara\'ya özel fiyat avantajlarımızla en iyi teklifi alacaksınız.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'izmir',
    slug: 'izmir-hasarli-arac-alimi',
    name: 'İzmir',
    metaTitle: 'İzmir Hasarlı Araç Alımı | Hızlı & Güvenilir Hizmet • Araban Nakit',
    metaDescription: 'İzmir\'de hasarlı, kazalı, pert ve hurda araç alımı. Bornova, Karşıyaka, Konak ve tüm ilçelerde 7/24 hizmet.',
    keywords: ['izmir hasarlı araç alan', 'izmir kazalı araç', 'izmir araç alım', 'izmir pert araç'],
    hero: {
      tagline: 'İzmir\'in En Hızlı Araç Alım Hizmeti',
      title: 'İzmir Hasarlı Araç Alımı',
      subtitle: 'Bornova • Karşıyaka • Konak • Tüm İlçeler',
      highlight: 'Aynı Gün Ekspertiz & Ödeme',
    },
    intro: {
      title: 'İzmir\'in Her Yerinde Hasarlı Araç Alımı',
      content: 'İzmir hasarlı araç alan firmalar arasında Ege\'nin en profesyonel ekibiyiz. Bornova\'dan Karşıyaka\'ya, Konak\'tan Çiğli\'ye kadar tüm ilçelerde hizmet veriyoruz.',
      highlights: [
        'İzmir\'e özel aynı gün hizmet',
        'Ege bölgesinin en iyi fiyatları',
        'Sahil şeridinde mobil ekspertiz',
      ],
    },
    districts: [
      {
        title: '🏖️ Ana İlçeler',
        areas: [
          'Bornova', 'Karşıyaka', 'Konak', 'Çiğli', 'Gaziemir',
          'Balçova', 'Narlıdere', 'Buca', 'Bayraklı', 'Güzelbahçe',
        ],
      },
      {
        title: '🏘️ Diğer Bölgeler',
        areas: [
          'Kemalpaşa', 'Torbalı', 'Menemen', 'Aliağa', 'Foça',
          'Urla', 'Seferihisar', 'Menderes', 'Tire', 'Ödemiş',
        ],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-umbrella-beach',
        title: 'Ege Uzmanı',
        description: 'İzmir ve Ege piyasasını en iyi bilen ekip.',
      },
      {
        icon: 'fas fa-tachometer-alt',
        title: 'Hızlı Hizmet',
        description: 'Aynı gün içinde tüm işlemler tamamlanır.',
      },
      {
        icon: 'fas fa-coins',
        title: 'Rekabetçi Fiyat',
        description: 'İzmir\'in en iyi fiyat teklifleri.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Güvenilir',
        description: 'İzmir\'de 10+ yıllık güven.',
      },
      {
        icon: 'fas fa-wrench',
        title: 'Profesyonel',
        description: 'Uzman ekspertiz ekibi.',
      },
      {
        icon: 'fas fa-truck',
        title: 'Ücretsiz Çekici',
        description: 'İzmir geneli ücretsiz taşıma.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone-square-alt',
        title: 'İzmir\'den Arayın',
        description: 'Hangi ilçeden ararsan arayın, yanıtlıyoruz.',
      },
      {
        icon: 'fas fa-map-marked',
        title: 'Hızlı Ulaşım',
        description: 'İzmir trafiğine hakim ekip, hızla yanınızda.',
      },
      {
        icon: 'fas fa-clipboard-list',
        title: 'Detaylı Ekspertiz',
        description: 'Yerinde kapsamlı değerlendirme.',
      },
      {
        icon: 'fas fa-credit-card',
        title: 'Anında Ödeme',
        description: 'Noter ve nakit ödeme aynı gün.',
      },
    ],
    stats: {
      vehiclesBought: '2.5K+',
      responseTime: '2-3 saat',
      satisfaction: '%98',
      experience: '10 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'İzmir\'de Hasarlı Araç Alımı Hakkında',
          content: 'Ege\'nin incisi İzmir\'de hasarlı araç alım işlemlerinde en profesyonel hizmeti sunuyoruz. Bornova, Karşıyaka, Konak başta olmak üzere tüm ilçelerde aktif hizmet veriyoruz.',
        },
        {
          title: 'Neden İzmir\'de En İyiyiz?',
          content: 'İzmir piyasasını yakından tanıyor, bölgesel fiyat dinamiklerini iyi biliyoruz. Ege\'nin en geniş alıcı ağına sahibiz, bu yüzden size en iyi fiyatı verebiliyoruz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'bursa',
    slug: 'bursa-hasarli-arac-alimi',
    name: 'Bursa',
    metaTitle: 'Bursa Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Bursa\'da hasarlı, kazalı, pert ve hurda araç alımı. Nilüfer, Osmangazi, Yıldırım ve tüm ilçelerde hizmet.',
    keywords: ['bursa hasarlı araç alan', 'bursa kazalı araç', 'bursa araç alım'],
    hero: {
      tagline: 'Bursa\'nın Güvenilir Araç Alım Merkezi',
      title: 'Bursa Hasarlı Araç Alımı',
      subtitle: 'Nilüfer • Osmangazi • Yıldırım • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Bursa\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Bursa hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Nilüfer, Osmangazi, Yıldırım ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Bursa\'ya özel hızlı hizmet',
        'Sanayi bölgelerine yakın ofis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Nilüfer', 'Osmangazi', 'Yıldırım', 'Gemlik', 'İnegöl', 'Mudanya', 'Mustafakemalpaşa'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-industry',
        title: 'Sanayi Odaklı',
        description: 'Bursa\'nın sanayi yapısına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Bursa piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Bursa\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.8K+',
      responseTime: '3-4 saat',
      satisfaction: '%97',
      experience: '8 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Bursa\'da Hasarlı Araç Alımı',
          content: 'Türkiye\'nin önemli sanayi şehirlerinden Bursa\'da hasarlı araç alım hizmetleri sunuyoruz. Nilüfer, Osmangazi ve Yıldırım başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'antalya',
    slug: 'antalya-hasarli-arac-alimi',
    name: 'Antalya',
    metaTitle: 'Antalya Hasarlı Araç Alımı | Turizm Başkentinde #1 • Araban Nakit',
    metaDescription: 'Antalya\'da hasarlı, kazalı, pert ve hurda araç alımı. Muratpaşa, Kepez, Konyaaltı ve tüm ilçelerde hizmet.',
    keywords: ['antalya hasarlı araç alan', 'antalya kazalı araç', 'antalya araç alım'],
    hero: {
      tagline: 'Antalya\'nın En Güvenilir Araç Alım Merkezi',
      title: 'Antalya Hasarlı Araç Alımı',
      subtitle: 'Muratpaşa • Kepez • Konyaaltı • Tüm İlçeler',
      highlight: 'Turizm Araçları İçin Özel Fiyat',
    },
    intro: {
      title: 'Antalya\'nın Her Köşesinde Hizmetinizdeyiz',
      content: 'Antalya hasarlı araç alan firmalar arasında turizm sektörüne özel hizmet anlayışı ile öne çıkıyoruz. Muratpaşa, Kepez, Konyaaltı ve tüm ilçelerde profesyonel araç alım hizmeti.',
      highlights: [
        'Turizm araçları için özel fiyatlandırma',
        'Antalya\'ya özel hızlı hizmet',
        'Turistik bölgelerde mobil ekspertiz',
      ],
    },
    districts: [
      {
        title: '🏖️ Merkez İlçeler',
        areas: ['Muratpaşa', 'Kepez', 'Konyaaltı', 'Döşemealtı', 'Aksu'],
      },
      {
        title: '🏝️ Turizm Bölgeleri',
        areas: ['Alanya', 'Manavgat', 'Serik', 'Kaş', 'Kemer', 'Finike'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-umbrella-beach',
        title: 'Turizm Uzmanı',
        description: 'Turistik araçlar için özel değerlendirme.',
      },
      {
        icon: 'fas fa-plane',
        title: 'Hızlı Ulaşım',
        description: 'Antalya genelinde hızlı hizmet.',
      },
      {
        icon: 'fas fa-dollar-sign',
        title: 'Özel Fiyat',
        description: 'Turizm araçları için ekstra avantaj.',
      },
      {
        icon: 'fas fa-award',
        title: 'Profesyonel',
        description: 'Deneyimli ekspertiz ekibi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-mobile',
        title: 'Arayın',
        description: 'Antalya\'dan hızlıca ulaşın.',
      },
      {
        icon: 'fas fa-search',
        title: 'Ekspertiz',
        description: 'Yerinizde detaylı inceleme.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Anlaşma',
        description: 'En iyi teklifi alın.',
      },
      {
        icon: 'fas fa-money-bill',
        title: 'Ödeme',
        description: 'Anında nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.5K+',
      responseTime: '2-3 saat',
      satisfaction: '%96',
      experience: '7 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Antalya\'da Hasarlı Araç Alımı',
          content: 'Türkiye\'nin turizm başkenti Antalya\'da hasarlı araç alım hizmetleri. Turistik araçlardan ticari araçlara kadar her türlü hasarlı araç için profesyonel değerlendirme.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'adana',
    slug: 'adana-hasarli-arac-alimi',
    name: 'Adana',
    metaTitle: 'Adana Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Adana\'da hasarlı, kazalı, pert ve hurda araç alımı. Seyhan, Çukurova, Yüreğir ve tüm ilçelerde hizmet.',
    keywords: ['adana hasarlı araç alan', 'adana kazalı araç', 'adana araç alım'],
    hero: {
      tagline: 'Adana\'nın Güvenilir Araç Alım Merkezi',
      title: 'Adana Hasarlı Araç Alımı',
      subtitle: 'Seyhan • Çukurova • Yüreğir • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Adana\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Adana hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Seyhan, Çukurova, Yüreğir ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Adana\'ya özel hızlı hizmet',
        'Sanayi bölgelerine yakın ofis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Seyhan', 'Çukurova', 'Yüreğir', 'Sarıçam', 'Ceyhan', 'Kozan'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-industry',
        title: 'Sanayi Odaklı',
        description: 'Adana\'nın sanayi yapısına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Adana piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Adana\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.2K+',
      responseTime: '3-4 saat',
      satisfaction: '%97',
      experience: '6 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Adana\'da Hasarlı Araç Alımı',
          content: 'Türkiye\'nin önemli sanayi şehirlerinden Adana\'da hasarlı araç alım hizmetleri sunuyoruz. Seyhan, Çukurova ve Yüreğir başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'gaziantep',
    slug: 'gaziantep-hasarli-arac-alimi',
    name: 'Gaziantep',
    metaTitle: 'Gaziantep Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Gaziantep\'te hasarlı, kazalı, pert ve hurda araç alımı. Şahinbey, Şehitkamil ve tüm ilçelerde hizmet.',
    keywords: ['gaziantep hasarlı araç alan', 'gaziantep kazalı araç', 'gaziantep araç alım'],
    hero: {
      tagline: 'Gaziantep\'in Güvenilir Araç Alım Merkezi',
      title: 'Gaziantep Hasarlı Araç Alımı',
      subtitle: 'Şahinbey • Şehitkamil • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Gaziantep\'in Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Gaziantep hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Şahinbey, Şehitkamil ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Gaziantep\'e özel hızlı hizmet',
        'Sanayi bölgelerine yakın ofis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Şahinbey', 'Şehitkamil', 'Nizip', 'İslahiye', 'Nurdağı'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-industry',
        title: 'Sanayi Odaklı',
        description: 'Gaziantep\'in sanayi yapısına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Gaziantep piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Gaziantep\'ten bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.1K+',
      responseTime: '3-4 saat',
      satisfaction: '%98',
      experience: '5 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Gaziantep\'te Hasarlı Araç Alımı',
          content: 'Türkiye\'nin önemli sanayi şehirlerinden Gaziantep\'te hasarlı araç alım hizmetleri sunuyoruz. Şahinbey ve Şehitkamil başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'kocaeli',
    slug: 'kocaeli-hasarli-arac-alimi',
    name: 'Kocaeli',
    metaTitle: 'Kocaeli Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Kocaeli\'de hasarlı, kazalı, pert ve hurda araç alımı. İzmit, Gebze, Darıca ve tüm ilçelerde hizmet.',
    keywords: ['kocaeli hasarlı araç alan', 'kocaeli kazalı araç', 'kocaeli araç alım'],
    hero: {
      tagline: 'Kocaeli\'nin Güvenilir Araç Alım Merkezi',
      title: 'Kocaeli Hasarlı Araç Alımı',
      subtitle: 'İzmit • Gebze • Darıca • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Kocaeli\'nin Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Kocaeli hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. İzmit, Gebze, Darıca ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Kocaeli\'ye özel hızlı hizmet',
        'Sanayi bölgelerine yakın ofis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['İzmit', 'Gebze', 'Darıca', 'Körfez', 'Gölcük', 'Derince', 'Çayırova', 'Kartepe', 'Başiskele', 'Karamürsel', 'Kandıra', 'Dilovası'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-industry',
        title: 'Sanayi Odaklı',
        description: 'Kocaeli\'nin sanayi yapısına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Kocaeli piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Kocaeli\'den bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '2K+',
      responseTime: '2-3 saat',
      satisfaction: '%99',
      experience: '9 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Kocaeli\'de Hasarlı Araç Alımı',
          content: 'Türkiye\'nin sanayi kalbi Kocaeli\'de hasarlı araç alım hizmetleri sunuyoruz. İzmit, Gebze ve Darıca başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'mersin',
    slug: 'mersin-hasarli-arac-alimi',
    name: 'Mersin',
    metaTitle: 'Mersin Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Mersin\'de hasarlı, kazalı, pert ve hurda araç alımı. Yenişehir, Mezitli, Toroslar ve tüm ilçelerde hizmet.',
    keywords: ['mersin hasarlı araç alan', 'mersin kazalı araç', 'mersin araç alım'],
    hero: {
      tagline: 'Mersin\'in Güvenilir Araç Alım Merkezi',
      title: 'Mersin Hasarlı Araç Alımı',
      subtitle: 'Yenişehir • Mezitli • Toroslar • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Mersin\'in Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Mersin hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Yenişehir, Mezitli, Toroslar ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Mersin\'e özel hızlı hizmet',
        'Liman bölgesine yakın ofis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Yenişehir', 'Mezitli', 'Toroslar', 'Akdeniz', 'Tarsus', 'Erdemli', 'Silifke'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-ship',
        title: 'Liman Odaklı',
        description: 'Mersin\'in ticaret yapısına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Mersin piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Mersin\'den bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1K+',
      responseTime: '3-4 saat',
      satisfaction: '%97',
      experience: '6 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Mersin\'de Hasarlı Araç Alımı',
          content: 'Türkiye\'nin önemli liman şehirlerinden Mersin\'de hasarlı araç alım hizmetleri sunuyoruz. Yenişehir, Mezitli ve Toroslar başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'ankara',
    slug: 'ankara-hasarli-arac-alimi',
    name: 'Ankara',
    metaTitle: 'Ankara Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Ankara\'da hasarlı, kazalı, pert ve hurda araç alımı. Çankaya, Keçiören, Yenimahalle ve tüm ilçelerde hizmet.',
    keywords: ['ankara hasarlı araç alan', 'ankara kazalı araç', 'ankara araç alım'],
    hero: {
      tagline: 'Başkent\'in Güvenilir Araç Alım Merkezi',
      title: 'Ankara Hasarlı Araç Alımı',
      subtitle: 'Çankaya • Keçiören • Yenimahalle • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Ankara\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Ankara hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Çankaya, Keçiören, Yenimahalle ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Ankara\'ya özel hızlı hizmet',
        'Ostim ve İvedik sanayilerine yakın',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Çankaya', 'Keçiören', 'Yenimahalle', 'Mamak', 'Etimesgut', 'Sincan', 'Altındağ', 'Pursaklar', 'Gölbaşı'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-landmark',
        title: 'Başkent Uzmanı',
        description: 'Ankara\'nın her noktasına hakim ekip.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Ankara piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Ankara\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '3K+',
      responseTime: '2-3 saat',
      satisfaction: '%99',
      experience: '10 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Ankara\'da Hasarlı Araç Alımı',
          content: 'Başkent Ankara\'da hasarlı araç alım hizmetleri sunuyoruz. Çankaya, Keçiören ve Yenimahalle başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'izmir',
    slug: 'izmir-hasarli-arac-alimi',
    name: 'İzmir',
    metaTitle: 'İzmir Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'İzmir\'de hasarlı, kazalı, pert ve hurda araç alımı. Karşıyaka, Bornova, Buca ve tüm ilçelerde hizmet.',
    keywords: ['izmir hasarlı araç alan', 'izmir kazalı araç', 'izmir araç alım'],
    hero: {
      tagline: 'İzmir\'in Güvenilir Araç Alım Merkezi',
      title: 'İzmir Hasarlı Araç Alımı',
      subtitle: 'Karşıyaka • Bornova • Buca • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'İzmir\'in Tüm İlçelerinde Profesyonel Hizmet',
      content: 'İzmir hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Karşıyaka, Bornova, Buca ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'İzmir\'e özel hızlı hizmet',
        'Sanayi sitelerine yakın',
        'Ege bölgesi uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Buca', 'Karabağlar', 'Bornova', 'Konak', 'Karşıyaka', 'Bayraklı', 'Çiğli', 'Menemen', 'Torbalı'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-sun',
        title: 'Ege Uzmanı',
        description: 'İzmir ve Ege bölgesine hakim.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'İzmir piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'İzmir\'den bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '2.5K+',
      responseTime: '3-4 saat',
      satisfaction: '%98',
      experience: '8 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'İzmir\'de Hasarlı Araç Alımı',
          content: 'Ege\'nin incisi İzmir\'de hasarlı araç alım hizmetleri sunuyoruz. Karşıyaka, Bornova ve Buca başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'bursa',
    slug: 'bursa-hasarli-arac-alimi',
    name: 'Bursa',
    metaTitle: 'Bursa Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Bursa\'da hasarlı, kazalı, pert ve hurda araç alımı. Osmangazi, Nilüfer, Yıldırım ve tüm ilçelerde hizmet.',
    keywords: ['bursa hasarlı araç alan', 'bursa kazalı araç', 'bursa araç alım'],
    hero: {
      tagline: 'Bursa\'nın Güvenilir Araç Alım Merkezi',
      title: 'Bursa Hasarlı Araç Alımı',
      subtitle: 'Osmangazi • Nilüfer • Yıldırım • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Bursa\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Bursa hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Osmangazi, Nilüfer, Yıldırım ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Bursa\'ya özel hızlı hizmet',
        'Otomotiv kentine yakışır servis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Osmangazi', 'Yıldırım', 'Nilüfer', 'İnegöl', 'Gemlik', 'Mudanya', 'Gürsu', 'Kestel'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-car-side',
        title: 'Otomotiv Kenti',
        description: 'Bursa\'nın otomotiv kültürüne uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Bursa piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Bursa\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '2.2K+',
      responseTime: '2-3 saat',
      satisfaction: '%99',
      experience: '9 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Bursa\'da Hasarlı Araç Alımı',
          content: 'Otomotivin başkenti Bursa\'da hasarlı araç alım hizmetleri sunuyoruz. Osmangazi, Nilüfer ve Yıldırım başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'antalya',
    slug: 'antalya-hasarli-arac-alimi',
    name: 'Antalya',
    metaTitle: 'Antalya Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Antalya\'da hasarlı, kazalı, pert ve hurda araç alımı. Muratpaşa, Kepez, Konyaaltı ve tüm ilçelerde hizmet.',
    keywords: ['antalya hasarlı araç alan', 'antalya kazalı araç', 'antalya araç alım'],
    hero: {
      tagline: 'Antalya\'nın Güvenilir Araç Alım Merkezi',
      title: 'Antalya Hasarlı Araç Alımı',
      subtitle: 'Muratpaşa • Kepez • Konyaaltı • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Antalya\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Antalya hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Muratpaşa, Kepez, Konyaaltı ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Antalya\'ya özel hızlı hizmet',
        'Turizm bölgesine uygun servis',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Kepez', 'Muratpaşa', 'Alanya', 'Manavgat', 'Konyaaltı', 'Serik', 'Aksu', 'Döşemealtı'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-umbrella-beach',
        title: 'Akdeniz Uzmanı',
        description: 'Antalya ve çevresine hakim ekip.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Antalya piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Antalya\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.8K+',
      responseTime: '3-4 saat',
      satisfaction: '%97',
      experience: '7 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Antalya\'da Hasarlı Araç Alımı',
          content: 'Turizmin başkenti Antalya\'da hasarlı araç alım hizmetleri sunuyoruz. Muratpaşa, Kepez ve Konyaaltı başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'konya',
    slug: 'konya-hasarli-arac-alimi',
    name: 'Konya',
    metaTitle: 'Konya Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Konya\'da hasarlı, kazalı, pert ve hurda araç alımı. Selçuklu, Meram, Karatay ve tüm ilçelerde hizmet.',
    keywords: ['konya hasarlı araç alan', 'konya kazalı araç', 'konya araç alım'],
    hero: {
      tagline: 'Konya\'nın Güvenilir Araç Alım Merkezi',
      title: 'Konya Hasarlı Araç Alımı',
      subtitle: 'Selçuklu • Meram • Karatay • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Konya\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Konya hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Selçuklu, Meram, Karatay ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Konya\'ya özel hızlı hizmet',
        'Sanayi bölgelerine yakın',
        'İç Anadolu uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Selçuklu', 'Meram', 'Karatay', 'Ereğli', 'Akşehir', 'Beyşehir'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-warehouse',
        title: 'Geniş Hizmet Ağı',
        description: 'Konya\'nın geniş coğrafyasında hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Konya piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Konya\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.5K+',
      responseTime: '3-4 saat',
      satisfaction: '%98',
      experience: '6 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Konya\'da Hasarlı Araç Alımı',
          content: 'Anadolu\'nun sanayi devi Konya\'da hasarlı araç alım hizmetleri sunuyoruz. Selçuklu, Meram ve Karatay başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'sanliurfa',
    slug: 'sanliurfa-hasarli-arac-alimi',
    name: 'Şanlıurfa',
    metaTitle: 'Şanlıurfa Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Şanlıurfa\'da hasarlı, kazalı, pert ve hurda araç alımı. Eyyübiye, Haliliye, Karaköprü ve tüm ilçelerde hizmet.',
    keywords: ['şanlıurfa hasarlı araç alan', 'urfa kazalı araç', 'şanlıurfa araç alım'],
    hero: {
      tagline: 'Şanlıurfa\'nın Güvenilir Araç Alım Merkezi',
      title: 'Şanlıurfa Hasarlı Araç Alımı',
      subtitle: 'Eyyübiye • Haliliye • Karaköprü • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Şanlıurfa\'nın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Şanlıurfa hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Eyyübiye, Haliliye, Karaköprü ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Şanlıurfa\'ya özel hızlı hizmet',
        'Güneydoğu uzmanı ekip',
        'Yerel piyasa deneyimi',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Eyyübiye', 'Haliliye', 'Karaköprü', 'Siverek', 'Virânşehir'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-sun',
        title: 'Bölge Uzmanı',
        description: 'Şanlıurfa ve bölgeye hakim ekip.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Şanlıurfa piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Şanlıurfa\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1K+',
      responseTime: '4-5 saat',
      satisfaction: '%96',
      experience: '5 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Şanlıurfa\'da Hasarlı Araç Alımı',
          content: 'Peygamberler şehri Şanlıurfa\'da hasarlı araç alım hizmetleri sunuyoruz. Eyyübiye, Haliliye ve Karaköprü başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'kayseri',
    slug: 'kayseri-hasarli-arac-alimi',
    name: 'Kayseri',
    metaTitle: 'Kayseri Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Kayseri\'de hasarlı, kazalı, pert ve hurda araç alımı. Melikgazi, Kocasinan, Talas ve tüm ilçelerde hizmet.',
    keywords: ['kayseri hasarlı araç alan', 'kayseri kazalı araç', 'kayseri araç alım'],
    hero: {
      tagline: 'Kayseri\'nin Güvenilir Araç Alım Merkezi',
      title: 'Kayseri Hasarlı Araç Alımı',
      subtitle: 'Melikgazi • Kocasinan • Talas • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Kayseri\'nin Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Kayseri hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Melikgazi, Kocasinan, Talas ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Kayseri\'ye özel hızlı hizmet',
        'Sanayi ve ticaret merkezlerine yakın',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Melikgazi', 'Kocasinan', 'Talas', 'Develi'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-briefcase',
        title: 'Ticaret Uzmanı',
        description: 'Kayseri ticaret ahlakına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Kayseri piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Kayseri\'den bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.3K+',
      responseTime: '3-4 saat',
      satisfaction: '%98',
      experience: '7 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Kayseri\'de Hasarlı Araç Alımı',
          content: 'Ticaretin kalbi Kayseri\'de hasarlı araç alım hizmetleri sunuyoruz. Melikgazi, Kocasinan ve Talas başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'samsun',
    slug: 'samsun-hasarli-arac-alimi',
    name: 'Samsun',
    metaTitle: 'Samsun Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Samsun\'da hasarlı, kazalı, pert ve hurda araç alımı. İlkadım, Atakum, Canik ve tüm ilçelerde hizmet.',
    keywords: ['samsun hasarlı araç alan', 'samsun kazalı araç', 'samsun araç alım'],
    hero: {
      tagline: 'Samsun\'un Güvenilir Araç Alım Merkezi',
      title: 'Samsun Hasarlı Araç Alımı',
      subtitle: 'İlkadım • Atakum • Canik • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Samsun\'un Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Samsun hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. İlkadım, Atakum, Canik ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Samsun\'a özel hızlı hizmet',
        'Karadeniz bölge uzmanı',
        'Yerel piyasa deneyimi',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['İlkadım', 'Atakum', 'Canik', 'Tekkeköy', 'Bafra', 'Çarşamba'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-water',
        title: 'Karadeniz Uzmanı',
        description: 'Samsun ve Karadeniz bölgesine hakim.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Samsun piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Samsun\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.1K+',
      responseTime: '3-4 saat',
      satisfaction: '%97',
      experience: '6 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Samsun\'da Hasarlı Araç Alımı',
          content: 'Karadeniz\'in başkenti Samsun\'da hasarlı araç alım hizmetleri sunuyoruz. İlkadım, Atakum ve Canik başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'eskisehir',
    slug: 'eskisehir-hasarli-arac-alimi',
    name: 'Eskişehir',
    metaTitle: 'Eskişehir Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Eskişehir\'de hasarlı, kazalı, pert ve hurda araç alımı. Odunpazarı, Tepebaşı ve tüm ilçelerde hizmet.',
    keywords: ['eskişehir hasarlı araç alan', 'eskişehir kazalı araç', 'eskişehir araç alım'],
    hero: {
      tagline: 'Eskişehir\'in Güvenilir Araç Alım Merkezi',
      title: 'Eskişehir Hasarlı Araç Alımı',
      subtitle: 'Odunpazarı • Tepebaşı • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Eskişehir\'in Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Eskişehir hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Odunpazarı, Tepebaşı ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Eskişehir\'e özel hızlı hizmet',
        'Öğrenci ve sanayi kentine uygun',
        'Yerel piyasa uzmanı ekip',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Odunpazarı', 'Tepebaşı', 'Sivrihisar'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-university',
        title: 'Şehir Uzmanı',
        description: 'Eskişehir\'in dinamik yapısına uygun hizmet.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Eskişehir piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Eskişehir\'den bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1K+',
      responseTime: '2-3 saat',
      satisfaction: '%98',
      experience: '6 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Eskişehir\'de Hasarlı Araç Alımı',
          content: 'Kültür ve sanayi şehri Eskişehir\'de hasarlı araç alım hizmetleri sunuyoruz. Odunpazarı ve Tepebaşı başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
  {
    id: 'diyarbakir',
    slug: 'diyarbakir-hasarli-arac-alimi',
    name: 'Diyarbakır',
    metaTitle: 'Diyarbakır Hasarlı Araç Alımı | En İyi Fiyat • Araban Nakit',
    metaDescription: 'Diyarbakır\'da hasarlı, kazalı, pert ve hurda araç alımı. Bağlar, Kayapınar, Yenişehir ve tüm ilçelerde hizmet.',
    keywords: ['diyarbakır hasarlı araç alan', 'diyarbakır kazalı araç', 'diyarbakır araç alım'],
    hero: {
      tagline: 'Diyarbakır\'ın Güvenilir Araç Alım Merkezi',
      title: 'Diyarbakır Hasarlı Araç Alımı',
      subtitle: 'Bağlar • Kayapınar • Yenişehir • Tüm İlçeler',
      highlight: 'En Yüksek Fiyat Garantisi',
    },
    intro: {
      title: 'Diyarbakır\'ın Tüm İlçelerinde Profesyonel Hizmet',
      content: 'Diyarbakır hasarlı araç alan firmalar arasında en kapsamlı hizmeti sunuyoruz. Bağlar, Kayapınar, Yenişehir ve diğer tüm ilçelerde araç alım hizmeti veriyoruz.',
      highlights: [
        'Diyarbakır\'a özel hızlı hizmet',
        'Bölge merkezi uzmanlığı',
        'Yerel piyasa deneyimi',
      ],
    },
    districts: [
      {
        title: '📍 Ana İlçeler',
        areas: ['Bağlar', 'Kayapınar', 'Yenişehir', 'Sur', 'Ergani', 'Bismil'],
      },
    ],
    whyUs: [
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Merkez Uzmanı',
        description: 'Diyarbakır ve bölgeye hakim ekip.',
      },
      {
        icon: 'fas fa-money-bill-wave',
        title: 'Adil Fiyat',
        description: 'Diyarbakır piyasasının en iyi fiyatları.',
      },
      {
        icon: 'fas fa-clock',
        title: 'Hızlı İşlem',
        description: '24 saat içinde tüm süreç tamamlanır.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Güvenli',
        description: 'Yasal ve güvenli işlem garantisi.',
      },
    ],
    process: [
      {
        icon: 'fas fa-phone',
        title: 'İletişim',
        description: 'Diyarbakır\'dan bizi arayın.',
      },
      {
        icon: 'fas fa-car',
        title: 'Ekspertiz',
        description: 'Yerinize gelip değerlendirme yapıyoruz.',
      },
      {
        icon: 'fas fa-file-signature',
        title: 'Anlaşma',
        description: 'En iyi fiyat teklifini sunuyoruz.',
      },
      {
        icon: 'fas fa-money-check',
        title: 'Ödeme',
        description: 'Noter ve nakit ödeme.',
      },
    ],
    stats: {
      vehiclesBought: '1.2K+',
      responseTime: '4-5 saat',
      satisfaction: '%96',
      experience: '7 yıl',
    },
    seoContent: {
      sections: [
        {
          title: 'Diyarbakır\'da Hasarlı Araç Alımı',
          content: 'Güneydoğu\'nun merkezi Diyarbakır\'da hasarlı araç alım hizmetleri sunuyoruz. Bağlar, Kayapınar ve Yenişehir başta olmak üzere tüm ilçelerde hizmetinizdeyiz.',
        },
      ],
    },
    published: true,
  },
];