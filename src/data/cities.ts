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
    metaTitle: 'İstanbul Hasarlı Araç Alımı | 7/24 En Yüksek Fiyat • Premium Auto Expert',
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
          content: 'İstanbul, Türkiye\'nin en büyük şehri olarak hasarlı araç alım satımında da en hareketli piyasaya sahiptir. Premium Auto Expert olarak, İstanbul hasarlı araç alan firmalar arasında 15 yıllık tecrübemizle sektörün öncüsüyüz.',
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
    metaTitle: 'Ankara Hasarlı Araç Alımı | En Yüksek Fiyat Garantisi • Premium Auto Expert',
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
    metaTitle: 'İzmir Hasarlı Araç Alımı | Hızlı & Güvenilir Hizmet • Premium Auto Expert',
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
    metaTitle: 'Bursa Hasarlı Araç Alımı | En İyi Fiyat • Premium Auto Expert',
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
    metaTitle: 'Antalya Hasarlı Araç Alımı | Turizm Başkentinde #1 • Premium Auto Expert',
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
];