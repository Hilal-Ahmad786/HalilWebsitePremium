// src/config/site.ts
export const siteConfig = {
  name: 'Araban Nakit',
  description: 'Türkiye\'de Kazalı, Hasarlı, Pert ve Hurda Araç Alımında Türkiye\'nin En Güvenilir Merkezi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://arabannakit.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+905525677164',

  phoneDisplay: '0552 567 71 64',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905525677164',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@arabannakit.com',

  address: process.env.NEXT_PUBLIC_ADDRESS
    || 'Türkiye',
  social: {
    facebook: 'https://www.facebook.com/arabannakit/',
    instagram: 'https://www.instagram.com/arabannakit/',
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
