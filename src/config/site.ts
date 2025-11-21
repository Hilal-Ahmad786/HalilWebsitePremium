
// src/config/site.ts
export const siteConfig = {
  name: 'İstanbul Oto Expert',
  description: 'İstanbul ve çevresinde hasarlı, kazalı, pert ve hurda araç alımında güvenilir adres. 7/24 hizmet, anında nakit ödeme.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://istanbulotoexpert.com',
  keywords: [
    'hasarlı araç alan',
    'kazalı araç alan',
    'pert araç alan',
    'hurda araç alan',
    'istanbul hasarlı araç',
    'anında nakit araç alımı',
    'ikinci el araç alımı',
    'araç değerleme',
    'ücretsiz ekspertiz',
    'hasarlı oto alan',
    'kazalı oto alan',
    'pert kayıtlı araç alan',
  ],
  social: {
    twitter: '@istanbulotoexpert',
    facebook: 'istanbulotoexpert',
    instagram: 'istanbulotoexpert',
    linkedin: 'istanbul-oto-expert',
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE || '+905551234567',
    phoneDisplay: process.env.NEXT_PUBLIC_PHONE_DISPLAY || '0555 123 45 67',
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || '905551234567',
    email: process.env.NEXT_PUBLIC_EMAIL || 'info@istanbulotoexpert.com',
    address: process.env.NEXT_PUBLIC_ADDRESS || 'Maslak, Sarıyer/İstanbul',
  },
};