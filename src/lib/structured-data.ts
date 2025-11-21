// src/lib/structured-data.ts
export const generateStructuredData = () => {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}#business`,
        name: process.env.NEXT_PUBLIC_SITE_NAME,
        description: 'İstanbul ve çevresinde hasarlı, kazalı, pert ve hurda araç alımı yapan güvenilir firma.',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.jpg`,
        telephone: process.env.NEXT_PUBLIC_PHONE,
        email: process.env.NEXT_PUBLIC_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Maslak Mahallesi',
          addressLocality: 'Sarıyer',
          addressRegion: 'İstanbul',
          postalCode: '34398',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '41.1082',
          longitude: '29.0191',
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
        priceRange: '₺₺₺',
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '1250',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}#website`,
        url: baseUrl,
        name: process.env.NEXT_PUBLIC_SITE_NAME,
        description: 'Hasarlı araç alımında İstanbul\'un güvenilir adresi',
        publisher: {
          '@id': `${baseUrl}#business`,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${baseUrl}/arama?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Service',
        serviceType: 'Hasarlı Araç Alımı',
        provider: {
          '@id': `${baseUrl}#business`,
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: '41.0082',
            longitude: '28.9784',
          },
          geoRadius: '100000',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Araç Alım Hizmetleri',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Kazalı Araç Alımı',
                description: 'Kazalı araçlarınızı en yüksek fiyattan alıyoruz',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hasarlı Araç Alımı',
                description: 'Her türlü hasarlı aracı değerinde alıyoruz',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Pert Araç Alımı',
                description: 'Pert kayıtlı araçları anında nakit alıyoruz',
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Hurda Araç Alımı',
                description: 'Hurda araçlarınızı yasal prosedürle alıyoruz',
              },
            },
          ],
        },
      },
    ],
  };
};