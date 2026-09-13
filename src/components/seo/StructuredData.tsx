import { siteConfig } from '@/config/site';

export function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
        '@type': 'Organization',
        name: siteConfig.name,
        image: `${siteConfig.url}/Newimages/accident/damaged-front.jpg`,
        logo: `${siteConfig.url}/favicon.jpg`,
        '@id': `${siteConfig.url}/#organization`,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        email: siteConfig.email,
        sameAs: [
            siteConfig.social.facebook,
            siteConfig.social.instagram,
            `https://wa.me/${siteConfig.whatsapp}`,
        ],
        description: siteConfig.description,
          },
          {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.name,
            inLanguage: 'tr-TR',
            publisher: { '@id': `${siteConfig.url}/#organization` },
          },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
