import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import ContactPageContent from '@/components/contact/ContactPageContent';

export const metadata: Metadata = {
  title: { absolute: `İletişim | ${siteConfig.name}` },
  description: 'Araban Nakit telefon, WhatsApp ve e-posta iletişim bilgileri. Aracınız için teklif ve süreç bilgisi alın.',
  alternates: { canonical: '/iletisim' },
};

export default function ContactPage() { return <ContactPageContent />; }
