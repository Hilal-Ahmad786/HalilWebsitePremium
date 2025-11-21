
// ===== src/data/faq.ts =====
import { FAQ } from './types';

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'Araç alım süreci nasıl işliyor?',
    answer: 'İletişime geçtiğinizde, size uygun zamanda ücretsiz ekspertiz randevusu veriyoruz. Aracınızı detaylı inceledikten sonra piyasa koşullarına uygun teklifimizi sunuyoruz. Anlaşma sağlandığında ödeme anında yapılır ve evrak işlemlerini biz tamamlarız.',
    category: 'Genel',
    order: 1,
  },
  {
    id: 'faq-2',
    question: 'Hangi markaların araçlarını alıyorsunuz?',
    answer: 'Tüm marka ve modellerin araçlarını satın alıyoruz. Yerli ve ithal, sedan, SUV, ticari araç fark etmeksizin tüm araç tiplerini değerlendiriyoruz.',
    category: 'Genel',
    order: 2,
  },
  {
    id: 'faq-3',
    question: 'Ödeme nasıl yapılıyor?',
    answer: 'Anlaşma sonrası ödeme anında nakit veya havale olarak yapılır. Güvenli ödeme garantisi veriyoruz.',
    category: 'Ödeme',
    order: 3,
  },
  {
    id: 'faq-4',
    question: 'Ekspertiz ücreti var mı?',
    answer: 'Hayır, ekspertiz hizmetimiz tamamen ücretsizdir. Aracınızı incelememiz ve değerlendirmemiz için herhangi bir ücret talep etmiyoruz.',
    category: 'Hizmetler',
    order: 4,
  },
  {
    id: 'faq-5',
    question: 'Evrak işlemleri nasıl halloluyor?',
    answer: 'Tüm evrak işlemlerini (noter satış, trafik tescil vb.) biz üstleniyoruz. Sizin için ekstra bir masraf veya zaman kaybı olmaz.',
    category: 'İşlemler',
    order: 5,
  },
  {
    id: 'faq-6',
    question: 'Aracımda kredi var, alır mısınız?',
    answer: 'Evet, kredili araçları da satın alıyoruz. Kredi borcunu kapatarak işlemi tamamlıyoruz.',
    category: 'Özel Durumlar',
    order: 6,
  },
];
