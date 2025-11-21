// src/config/site.ts
export const siteConfig = {
  name: 'Premium Auto Expert',
  description: 'İstanbul\'da Kazalı, Hasarlı, Pert ve Hurda Araç Alımında Türkiye\'nin En Güvenilir Merkezi',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumautoexpert.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+905551234567',
  phoneDisplay: '0555 123 45 67',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905551234567',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@premiumautoexpert.com',
  social: {
    facebook: 'https://www.facebook.com/premiumautoexpert/',
    instagram: 'https://www.instagram.com/premiumautoexpert/',
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