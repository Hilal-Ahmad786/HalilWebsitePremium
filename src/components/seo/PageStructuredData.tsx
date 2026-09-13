import { CityData } from '@/data/cities';
import { faqs } from '@/data/faq';
import { Service } from '@/data/types';
import { siteConfig } from '@/config/site';

const faqEntities = (items: { question: string; answer: string }[]) => items.map(({ question, answer }) => ({
  '@type': 'Question',
  name: question,
  acceptedAnswer: { '@type': 'Answer', text: answer },
}));

function Script({ value }: { value: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(value) }} />;
}

export function ServiceStructuredData({ service }: { service: Service }) {
  const url = `${siteConfig.url}/hizmetler/${service.slug}`;
  const questions = service.serviceFaqs && service.serviceFaqs.length > 0
    ? service.serviceFaqs
    : faqs.filter((faq) => faq.category === 'Genel' || faq.category === 'Hizmetler').slice(0, 5);
  return <Script value={{
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Hizmetler', item: `${siteConfig.url}/hizmetler` },
          { '@type': 'ListItem', position: 3, name: service.title, item: url },
        ],
      },
      {
        '@type': 'Service',
        name: service.title,
        description: service.metaDescription || service.shortDescription,
        url,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'Country', name: 'Türkiye' },
      },
      { '@type': 'FAQPage', mainEntity: faqEntities(questions) },
    ],
  }} />;
}

export function CityStructuredData({ city }: { city: CityData }) {
  const url = `${siteConfig.url}/${city.slug}`;
  const cityQuestions = [
    { question: `${city.name}'da hasarlı araç alımı için nasıl teklif alabilirim?`, answer: `Telefon veya WhatsApp üzerinden araç bilgilerinizi paylaşarak ${city.name}'daki aracınız için teklif sürecini başlatabilirsiniz.` },
    { question: `${city.name}'da aracım çalışmıyorsa ne yapmalıyım?`, answer: 'Aracın durumu ve bulunduğu konum paylaşıldığında, gerekli taşıma ve değerlendirme adımları için ekip yönlendirmesi yapılır.' },
    { question: 'Ödeme ne zaman yapılır?', answer: 'Teklif kabulü ve noter devir işlemi sonrasında ödeme adımı tamamlanır.' },
  ];
  return <Script value={{
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: city.hero.title, item: url },
        ],
      },
      {
        '@type': 'Service',
        name: city.hero.title,
        description: city.metaDescription,
        url,
        provider: { '@id': `${siteConfig.url}/#organization` },
        areaServed: { '@type': 'City', name: city.name, address: { '@type': 'PostalAddress', addressCountry: 'TR' } },
      },
      { '@type': 'FAQPage', mainEntity: faqEntities(cityQuestions) },
    ],
  }} />;
}
