
// src/data/site.ts
import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Araban Nakit',
  description: 'Türkiye\'de en iyi fiyatlarla araç alım satım hizmeti. Profesyonel ekspertiz ve güvenilir ödeme garantisi.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://demo-galeri.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+905555555555',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '0555 555 55 55',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905555555555',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@demo-galeri.com',
  address: 'Türkiye',
  social: {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    linkedin: '#',
  },
  metaTitle: 'Araban Nakit | Türkiye Araç Alım Satım',
  metaDescription: 'Türkiye\'da güvenilir araç alım satım hizmeti. Profesyonel ekspertiz, anında ödeme, tüm markalar. 7/24 hizmet.',
};

export const businessInfo = {
  foundedYear: 2018,
  experienceYears: 6,
  teamSize: 15,
  vehiclesPurchased: '5000+',
  customerSatisfaction: '98%',
  responseTime: '15 dakika',
  workingHours: {
    weekdays: '09:00 - 19:00',
    saturday: '09:00 - 18:00',
    sunday: '10:00 - 16:00',
  },
  serviceAreas: [
    'Ankara', 'Esenyurt', 'Avcılar', 'Küçükçekmece',
    'Bağcılar', 'Başakşehir', 'Sultangazi', 'Eyüpsultan',
    'Şişli', 'Beşiktaş', 'Sarıyer', 'Kadıköy', 'Ümraniye'
  ],
};