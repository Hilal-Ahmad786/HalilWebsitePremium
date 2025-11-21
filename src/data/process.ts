// ===== src/data/process.ts =====
import { ProcessStep } from './types';

export const processSteps: ProcessStep[] = [
  {
    id: 'step-1',
    step: 1,
    title: 'İletişime Geçin',
    description: 'Telefon, WhatsApp veya form ile bize ulaşın. Aracınız hakkında kısa bilgi verin.',
    icon: 'FaPhone',
  },
  {
    id: 'step-2',
    step: 2,
    title: 'Ekspertiz Randevusu',
    description: 'Size uygun zamanda ücretsiz ekspertiz randevusu oluşturuyoruz.',
    icon: 'FaCalendarAlt',
  },
  {
    id: 'step-3',
    step: 3,
    title: 'Detaylı İnceleme',
    description: 'Profesyonel ekibimiz aracınızı detaylı inceler ve değerleme yapar.',
    icon: 'FaSearch',
  },
  {
    id: 'step-4',
    step: 4,
    title: 'Fiyat Teklifi',
    description: 'Piyasa koşullarına uygun, adil fiyat teklifimizi sunuyoruz.',
    icon: 'FaFileInvoiceDollar',
  },
  {
    id: 'step-5',
    step: 5,
    title: 'Anında Ödeme',
    description: 'Anlaştığınız takdirde ödemesi anında, güvenli şekilde yapılır.',
    icon: 'FaMoneyBillWave',
  },
  {
    id: 'step-6',
    step: 6,
    title: 'Evrak İşlemleri',
    description: 'Tüm yasal işlemler ve evrak takibini biz hallederiz.',
    icon: 'FaFileAlt',
  },
];
