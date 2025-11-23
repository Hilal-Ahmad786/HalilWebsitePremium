import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { cities } from '@/data/cities';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = siteConfig.url;

    // Static routes
    const routes = [
        '',
        '/hakkimizda',
        '/hizmetler',
        '/iletisim',
        '/blog',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Service routes
    const serviceRoutes = services
        .filter((service) => service.published)
        .map((service) => ({
            url: `${baseUrl}/hizmetler/${service.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        }));

    // City routes
    const cityRoutes = cities.map((city) => ({
        url: `${baseUrl}/${city.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    return [...routes, ...serviceRoutes, ...cityRoutes];
}
