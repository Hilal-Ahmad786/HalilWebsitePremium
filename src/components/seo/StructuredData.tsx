import { siteConfig } from '@/config/site';

export function StructuredData() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'AutoDealer',
        name: siteConfig.name,
        image: `${siteConfig.url}/og-image.jpg`,
        '@id': siteConfig.url,
        url: siteConfig.url,
        telephone: siteConfig.phone,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Merkez',
            addressLocality: 'Ankara',
            postalCode: '06170',
            addressCountry: 'TR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 41.0082,
            longitude: 28.9784,
        },
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
            ],
            opens: '00:00',
            closes: '23:59',
        },
        sameAs: [
            `https://wa.me/${siteConfig.whatsapp}`,
        ],
        priceRange: '₺₺₺',
        description: siteConfig.description,
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
