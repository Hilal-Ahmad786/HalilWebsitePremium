// src/components/sections/HeroSection.tsx
'use client';

import { siteConfig } from '@/data/site';
import { trackPhoneClick, trackWhatsAppClick, trackCTAClick } from '@/lib/analytics';

export function HeroSection() {
  const handlePhone = () => {
    trackPhoneClick();
    trackCTAClick('Hero Call', 'hero');
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick();
    trackCTAClick('Hero WhatsApp', 'hero');
  };

  return (
    <section className="bg-shell text-ink">
      <div className="relative overflow-hidden">
        {/* Arka plan shape */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-bl from-brand-50 via-white to-shell opacity-80" />
        <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand-100 blur-3xl opacity-60" />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
            {/* Sol taraf: metin */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600">
                <span className="inline-flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                7/24 {siteConfig.name} — Türkiye Genelinde Hasarlı Araç Alımı
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-ink">
                  Hasarlı, kazalı, pert veya hurda aracınızı{' '}
                  <span className="text-brand-600">en iyi fiyata</span> nakit alın.
                </h1>
                <p className="text-base sm:text-lg text-slate-600 max-w-xl">
                  Fotoğraf gönderin,{' '}
                  <span className="font-medium text-ink">30 dakikadan kısa sürede</span> net teklif alın.
                  Noter, çekici ve evrak işlerini biz halledelim.
                </p>
              </div>

              {/* Bullet list */}
              <ul className="grid gap-2 text-sm text-slate-700 sm:grid-cols-2 max-w-xl">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Ücretsiz ekspertiz &amp; ücretsiz çekici</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Piyasa üstü teklif, aynı gün ödeme</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Noter onaylı, %100 şeffaf ve yasal süreç</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-brand-600">✓</span>
                  <span>Tüm Türkiye’de hizmet — adresinizden alım</span>
                </li>
              </ul>

              {/* CTA butonları */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsApp}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-sm hover:bg-brand-700 transition-colors"
                >
                  💬 WhatsApp’tan Hızlı Teklif Al
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  onClick={handlePhone}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm sm:text-base font-medium text-ink hover:bg-slate-50 transition-colors"
                >
                  📞 Hemen Ara: {siteConfig.phoneDisplay}
                </a>
              </div>

              {/* Güven göstergesi */}
              <div className="flex flex-wrap items-center gap-4 pt-4 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-[11px] text-white">
                    %100
                  </span>
                  <span>Noter onaylı, yasal güvence</span>
                </div>
                <div className="h-4 w-px bg-slate-200 hidden sm:block" />
                <span>Her gün onlarca araç sahibi bizden teklif alıyor.</span>
              </div>
            </div>

            {/* Sağ taraf: kart / süreç */}
            <div className="lg:pl-4">
              <div className="rounded-3xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur-sm p-5 sm:p-6 space-y-4 max-w-md ml-auto">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium text-brand-600 uppercase tracking-wide">
                      4 Adımda Tamam
                    </p>
                    <p className="text-sm text-slate-700">
                      Başvurudan noter satışına kadar şeffaf süreç.
                    </p>
                  </div>
                  <div className="inline-flex flex-col items-end">
                    <span className="text-xs text-slate-500">Ortalama onay süresi</span>
                    <span className="text-lg font-semibold text-ink">30 dk</span>
                  </div>
                </div>

                <ol className="space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-brand-50 flex items-center justify-center text-[11px] font-semibold text-brand-600">
                      1
                    </div>
                    <div>
                      <p className="font-semibold">Fotoğraf &amp; bilgi gönderin</p>
                      <p className="text-xs text-slate-500">
                        WhatsApp’tan plaka, km ve hasar detaylarını iletin.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-brand-50 flex items-center justify-center text-[11px] font-semibold text-brand-600">
                      2
                    </div>
                    <div>
                      <p className="font-semibold">Uzmanlarımız aracı incelesin</p>
                      <p className="text-xs text-slate-500">
                        Ekspertiz planlayalım, yerinde veya serviste kontrol edelim.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-brand-50 flex items-center justify-center text-[11px] font-semibold text-brand-600">
                      3
                    </div>
                    <div>
                      <p className="font-semibold">Net teklif alın</p>
                      <p className="text-xs text-slate-500">
                        Piyasa üstü nakit teklifimizi size iletelim, onayınızı alın.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="mt-1 h-6 w-6 rounded-full bg-brand-50 flex items-center justify-center text-[11px] font-semibold text-brand-600">
                      4
                    </div>
                    <div>
                      <p className="font-semibold">Noter &amp; ödeme aynı gün</p>
                      <p className="text-xs text-slate-500">
                        Noter devrini yapalım, aynı gün EFT veya nakit ödeme.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="mt-2 rounded-2xl bg-shell px-4 py-3 text-xs text-slate-600">
                  <span className="font-semibold text-ink">Not:</span> Aracınız yürümez durumdaysa,
                  ücretsiz çekici ile adresinizden alım yapıyoruz.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
