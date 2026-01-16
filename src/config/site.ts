// src/config/site.ts
export const siteConfig = {
  name: 'Araban Nakit',
  description: 'Türkiye\'de Kazalı, Hasarlı, Pert ve Hurda Araç Alımında Türkiye\'nin En Güvenilir Merkezi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://demo-galeri.com',
  phone: '+905555555555',

  phoneDisplay: '0555 555 55 55',
  whatsapp: '905555555555',
  email: 'info@demo-galeri.com',

  address: 'Türkiye',
  social: {
    facebook: '#',
    instagram: '#',
  },
  services: [
    {

      title: 'Kazalı Araç Alımı',
      slug: 'kazali-arac-alim',
      icon: 'fa-car-crash',
    },
    {
      title: 'Hasarlı Araç Alımı',
      slug: 'hasarli-arac-alim',
      icon: 'fa-tools',
    },
    {
      title: 'Pert Araç Alımı',
      slug: 'pert-arac-alim',
      icon: 'fa-exclamation-triangle',
    },
    {
      title: 'Hurda Araç Alımı',
      slug: 'hurda-arac-alim',
      icon: 'fa-recycle',
    },
  ],
};

export type SiteConfig = typeof siteConfig;