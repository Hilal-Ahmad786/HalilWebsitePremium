// src/components/sections/CTASection.tsx
import { siteConfig } from '@/data/site';

export default function CTASection() {
  return (
    <section className="bg-ink text-white py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-ink via-slate-900 to-ink px-6 py-7 sm:px-8 sm:py-8 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1 space-y-2">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              ARACINIZI SATMADAN ÖNCE
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              {siteConfig.name}’den teklif almadan karar vermeyin.
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              Hasarlı, kazalı, pert veya hurda aracınız için aynı gün noter &amp; ödeme.
              Ücretsiz ekspertiz, ücretsiz çekici ve piyasa üstü teklifler.
            </p>
          </div>

          <div className="flex flex-col gap-2 w-full max-w-xs">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
            >
              💬 WhatsApp’tan Hızlı Teklif Al
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-800 transition-colors"
            >
              📞 Hemen Ara: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
