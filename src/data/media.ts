// src/data/media.ts
// Single source of truth for the real, licensed photography added in the 2026
// content/image refresh. See IMAGE-CREDITS.md for sourcing/license details.

export const heroImage = '/images/araban-nakit-2026/hero/hero-damaged-vehicle.webp';
export const ctaImage = '/images/araban-nakit-2026/cta/cta-automotive-detail.webp';

export const serviceImages: Record<string, string> = {
  'arac-alim': '/images/araban-nakit-2026/services/ekspertiz.webp',
  ekspertiz: '/images/araban-nakit-2026/services/ekspertiz.webp',
  'trafige-cikis': '/images/araban-nakit-2026/services/cekici.webp',
  'arac-degisim': '/images/araban-nakit-2026/services/hasarli-arac.webp',
  'kazali-arac-alim': '/images/araban-nakit-2026/services/kazali-arac.webp',
  'hasarli-arac-alim': '/images/araban-nakit-2026/services/hasarli-arac.webp',
  'pert-arac-alim': '/images/araban-nakit-2026/services/pert-arac.webp',
  'hurda-arac-alim': '/images/araban-nakit-2026/services/hurda-arac.webp',
};

export const getServiceImage = (slug: string) => serviceImages[slug] || heroImage;

export const cityImages: Record<string, string> = {
  istanbul: '/images/araban-nakit-2026/cities/istanbul.webp',
  ankara: '/images/araban-nakit-2026/cities/ankara.webp',
  izmir: '/images/araban-nakit-2026/cities/izmir.webp',
  bursa: '/images/araban-nakit-2026/cities/bursa.webp',
  antalya: '/images/araban-nakit-2026/cities/antalya.webp',
  adana: '/images/araban-nakit-2026/cities/adana.webp',
  gaziantep: '/images/araban-nakit-2026/cities/gaziantep.webp',
  kocaeli: '/images/araban-nakit-2026/cities/kocaeli.webp',
  mersin: '/images/araban-nakit-2026/cities/mersin.webp',
  konya: '/images/araban-nakit-2026/cities/konya.webp',
  sanliurfa: '/images/araban-nakit-2026/cities/sanliurfa.webp',
  kayseri: '/images/araban-nakit-2026/cities/kayseri.webp',
  samsun: '/images/araban-nakit-2026/cities/samsun.webp',
  eskisehir: '/images/araban-nakit-2026/cities/eskisehir.webp',
  diyarbakir: '/images/araban-nakit-2026/cities/diyarbakir.webp',
};

export const getCityImage = (id: string) => cityImages[id] || heroImage;

export const cityImageAlt: Record<string, string> = {
  istanbul: 'Galata Köprüsü ve Galata Kulesi, İstanbul',
  ankara: 'Anıtkabir, Ankara',
  izmir: 'Saat Kulesi, İzmir',
  bursa: 'Ulu Cami ve şehir manzarası, Bursa',
  antalya: 'Kaleiçi, Antalya',
  adana: 'Sabancı Merkez Camii, Adana',
  gaziantep: 'Gaziantep Kalesi',
  kocaeli: 'İzmit Marina, Kocaeli',
  mersin: 'Mersin Marina Kulesi',
  konya: 'Mevlana Müzesi, Konya',
  sanliurfa: 'Balıklıgöl, Şanlıurfa',
  kayseri: 'Kayseri Kalesi',
  samsun: 'Onur Anıtı, Samsun',
  eskisehir: 'Porsuk Nehri, Eskişehir',
  diyarbakir: 'Diyarbakır Surları',
};

export const getCityImageAlt = (id: string, name: string) => cityImageAlt[id] || `${name} şehir manzarası`;
