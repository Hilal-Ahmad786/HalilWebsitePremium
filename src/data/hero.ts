// ===== src/data/hero.ts =====
import { HeroContent } from './types';

export const heroContent: HeroContent = {
  title: 'Aracınızı En İyi Fiyata Satın',
  subtitle: 'Güvenilir ve Hızlı Araç Alım Hizmeti',
  description: 'İstanbul\'da 6 yıllık deneyimimizle aracınızı en iyi fiyattan satın alıyoruz. Anında ödeme, profesyonel ekspertiz ve güvenli işlem garantisi.',
  primaryCTA: {
    text: 'Hemen Değerleme Al',
    href: '#contact',
  },
  secondaryCTA: {
    text: 'WhatsApp ile İletişim',
    href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`,
  },
  image: '/images/hero-car.jpg',
  badges: ['15+ Uzman Ekip', '5000+ Mutlu Müşteri', '7/24 Destek'],
};