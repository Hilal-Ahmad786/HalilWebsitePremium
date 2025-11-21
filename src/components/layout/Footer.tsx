
// ===== src/components/layout/Footer.tsx =====
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerNavigation } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lacivert-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-sm text-gray-300 mb-4">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              {siteConfig.social.facebook && (
                <a href={siteConfig.social.facebook} target="_blank" rel="noopener" className="hover:text-turuncu-500">
                  Facebook
                </a>
              )}
              {siteConfig.social.instagram && (
                <a href={siteConfig.social.instagram} target="_blank" rel="noopener" className="hover:text-turuncu-500">
                  Instagram
                </a>
              )}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">{footerNavigation.company.title}</h4>
            <ul className="space-y-2">
              {footerNavigation.company.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-turuncu-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold mb-4">{footerNavigation.services.title}</h4>
            <ul className="space-y-2">
              {footerNavigation.services.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-300 hover:text-turuncu-500">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">İletişim</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📞 {siteConfig.phoneDisplay}</li>
              <li>📧 {siteConfig.email}</li>
              <li>📍 {siteConfig.address}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} {siteConfig.name}. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}