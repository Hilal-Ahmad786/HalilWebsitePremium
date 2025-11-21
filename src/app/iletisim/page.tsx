
// ===== src/app/iletisim/page.tsx =====
import { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `İletişim | ${siteConfig.name}`,
  description: `${siteConfig.name} ile iletişime geçin. Telefon, WhatsApp ve e-posta ile bize ulaşabilirsiniz.`,
};

export default function ContactPage() {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-lacivert-700 mb-6">
            İletişim
          </h1>

          <p className="text-xl text-gray-600 mb-12">
            Sorularınız için bize ulaşabilirsiniz. En kısa sürede size dönüş yapacağız.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                  Telefon
                </h3>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-turuncu-500 font-semibold hover:underline"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📧</div>
                <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                  E-posta
                </h3>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-turuncu-500 font-semibold hover:underline"
                >
                  {siteConfig.email}
                </a>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="text-xl font-bold text-lacivert-700 mb-2">
                  Adres
                </h3>
                <p className="text-gray-700">
                  {siteConfig.address}
                </p>
              </div>
            </div>

            {/* Contact Form Placeholder */}
            <div className="bg-turuncu-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-lacivert-700 mb-6">
                Bize Mesaj Gönderin
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız Soyadınız
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-turuncu-500 focus:ring-2 focus:ring-turuncu-500/20 outline-none transition-all"
                    placeholder="Ad Soyad"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-turuncu-500 focus:ring-2 focus:ring-turuncu-500/20 outline-none transition-all"
                    placeholder="0555 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    E-posta
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-turuncu-500 focus:ring-2 focus:ring-turuncu-500/20 outline-none transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Mesajınız
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-turuncu-500 focus:ring-2 focus:ring-turuncu-500/20 outline-none transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-turuncu-500 text-white font-semibold py-3 rounded-lg hover:bg-turuncu-600 transition-colors"
                >
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}