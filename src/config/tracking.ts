
// ===== src/config/tracking.ts =====
export const trackingConfig = {
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_GTM_ID,
  },
  ga4: {
    id: process.env.NEXT_PUBLIC_GA4_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_GA4_ID,
  },
  googleAds: {
    id: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '',
    phoneLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL || '',
    whatsappLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || '',
    formLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL || '',
    enabled: !!process.env.NEXT_PUBLIC_GOOGLE_ADS_ID,
  },
  facebookPixel: {
    id: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export const isTrackingEnabled = () => {
  return (
    trackingConfig.gtm.enabled ||
    trackingConfig.ga4.enabled ||
    trackingConfig.googleAds.enabled ||
    trackingConfig.facebookPixel.enabled
  );
};