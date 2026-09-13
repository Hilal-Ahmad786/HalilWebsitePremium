import { siteConfig } from '@/config/site';
import { heroImage } from '@/data/media';

export function StructuredData() {
    // NEXT_PUBLIC_ADDRESS defaults to the generic 'Türkiye' fallback in siteConfig — only surface a
    // street-level address in schema once a real one is actually configured, rather than guessing.
    const hasStreetAddress = siteConfig.address && siteConfig.address !== 'Türkiye';
    const jsonLd = {
        '@context': 'https://schema.org',
        '@graph': [
          {
        '@type': 'Organization',
        name: siteConfig.name,
        image: `${siteConfig.url}${heroImage}`,
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
          {
            // Restores the LocalBusiness-family type the redesign dropped (Phase 3 requirement).
            // Deliberately omits GeoCoordinates: the old value pointed at Istanbul under an Ankara
            // address and was never verified, so a "corrected" pair here would just be a new guess.
            '@type': 'AutoDealer',
            '@id': `${siteConfig.url}/#localbusiness`,
            name: siteConfig.name,
            url: siteConfig.url,
            image: `${siteConfig.url}${heroImage}`,
            telephone: siteConfig.phone,
            email: siteConfig.email,
            priceRange: '₺₺₺',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'TR',
              ...(hasStreetAddress ? { streetAddress: siteConfig.address } : {}),
            },
            areaServed: { '@type': 'Country', name: 'Türkiye' },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59',
            },
            sameAs: [
              siteConfig.social.facebook,
              siteConfig.social.instagram,
              `https://wa.me/${siteConfig.whatsapp}`,
            ],
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
