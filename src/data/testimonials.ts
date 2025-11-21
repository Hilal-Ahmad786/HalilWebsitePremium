
// ===== src/data/testimonials.ts =====
import { Testimonial } from './types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ahmet Yılmaz',
    role: 'Araç Sahibi',
    content: 'Çok profesyonel bir hizmet aldık. Aracımızın değerini eksiksiz ödediler. Tüm evrak işlemlerini kendileri halletti. Teşekkür ederim.',
    rating: 5,
    image: '/images/testimonials/ahmet.jpg',
    date: '2024-01-15',
    location: 'Beylikdüzü, İstanbul',
  },
  {
    id: 'test-2',
    name: 'Ayşe Demir',
    role: 'Araç Sahibi',
    content: 'İlk kez araç satıyordum ve çok tedirginidim. Ancak ekip o kadar güler yüzlü ve yardımcı oldular ki tüm süreç çok rahat geçti. Kesinlikle tavsiye ederim.',
    rating: 5,
    image: '/images/testimonials/ayse.jpg',
    date: '2024-01-20',
    location: 'Esenyurt, İstanbul',
  },
  {
    id: 'test-3',
    name: 'Mehmet Kaya',
    role: 'Araç Sahibi',
    content: 'Başka yerlerden aldığım tekliflerden daha iyi fiyat verdiler. Ödeme anında yapıldı. Çok memnun kaldım.',
    rating: 5,
    image: '/images/testimonials/mehmet.jpg',
    date: '2024-02-01',
    location: 'Avcılar, İstanbul',
  },
];