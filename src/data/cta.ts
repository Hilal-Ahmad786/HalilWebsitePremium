
// ===== src/data/cta.ts =====
import { CTAContent } from './types';

export const ctaVariants: CTAContent[] = [
  {
    id: 'cta-primary',
    title: 'Aracınızı Değerlendirmek İster Misiniz?',
    description: 'Hemen iletişime geçin, ücretsiz ekspertiz ve en iyi fiyat teklifini alın.',
    buttonText: 'Hemen Değerleme Al',
    buttonHref: '#contact',
    variant: 'primary',
  },
  {
    id: 'cta-secondary',
    title: 'Hala Tereddüt mü Ediyorsunuz?',
    description: 'Sorularınız için 7/24 destek hattımızdan bize ulaşabilirsiniz.',
    buttonText: 'Bizi Arayın',
    buttonHref: `tel:${process.env.NEXT_PUBLIC_PHONE}`,
    variant: 'secondary',
  },
];