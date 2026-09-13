// src/app/hizmetler/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';
import ServicePageTemplate from '@/components/templates/ServicePageTemplate';
import { ServiceStructuredData } from '@/components/seo/PageStructuredData';

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services
    .filter(service => service.published)
    .map((service) => ({
      slug: service.slug,
    }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.published);

  if (!service) {
    return {
      title: 'Hizmet Bulunamadı',
    };
  }

  return {
    title: { absolute: service.metaTitle || `${service.title} | ${siteConfig.name}` },
    description: service.metaDescription || service.shortDescription,
    alternates: { canonical: `/hizmetler/${service.slug}` },
    openGraph: {
      title: service.metaTitle || service.title,
      description: service.metaDescription || service.shortDescription,
      url: `/hizmetler/${service.slug}`,
      type: 'website',
      images: [{ url: '/Newimages/accident/damaged-front.jpg', width: 1800, height: 1200, alt: service.title }],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug && s.published);

  if (!service) {
    notFound();
  }

  const otherServices = services.filter(s => s.published && s.id !== service.id);

  return <><ServiceStructuredData service={service} /><ServicePageTemplate service={service} otherServices={otherServices} /></>;
}
