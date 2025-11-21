
// src/data/site.ts
import { SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Premium Auto Expert',
  description: 'İstanbul\'da en iyi fiyatlarla araç alım satım hizmeti. Profesyonel ekspertiz ve güvenilir ödeme garantisi.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://premiumautoexpert.com',
  phone: process.env.NEXT_PUBLIC_PHONE || '+905551234567',
  phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '0555 123 45 67',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905551234567',
  email: process.env.NEXT_PUBLIC_EMAIL || 'info@premiumautoexpert.com',
  address: 'Beylikdüzü, İstanbul',
  social: {
    facebook: 'https://facebook.com/premiumautoexpert',
    instagram: 'https://instagram.com/premiumautoexpert',
    twitter: 'https://twitter.com/premiumautoexpert',
    linkedin: 'https://linkedin.com/company/premiumautoexpert',
  },
  metaTitle: 'Premium Auto Expert | İstanbul Araç Alım Satım',
  metaDescription: 'İstanbul\'da güvenilir araç alım satım hizmeti. Profesyonel ekspertiz, anında ödeme, tüm markalar. 7/24 hizmet.',
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
    'Beylikdüzü', 'Esenyurt', 'Avcılar', 'Küçükçekmece', 
    'Bağcılar', 'Başakşehir', 'Sultangazi', 'Eyüpsultan',
    'Şişli', 'Beşiktaş', 'Sarıyer', 'Kadıköy', 'Ümraniye'
  ],
};