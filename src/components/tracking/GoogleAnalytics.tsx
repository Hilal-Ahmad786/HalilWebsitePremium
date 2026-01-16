
// ===== src/components/tracking/GoogleAnalytics.tsx =====
'use client';

import Script from 'next/script';
import { trackingConfig } from '@/config/tracking';

export function GoogleAnalytics() {
  if (!trackingConfig.ga4.enabled) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingConfig.ga4.id}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingConfig.ga4.id}', {
              page_path: window.location.pathname,
            });
            ${trackingConfig.googleAds.enabled ? `gtag('config', '${trackingConfig.googleAds.id}');` : ''}
          `,
        }}
      />
    </>
  );
}