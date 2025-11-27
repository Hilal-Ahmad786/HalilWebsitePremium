// src/config/tracking.ts
export const trackingConfig = {
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5ZQBQTK7',
    enabled: true,
  },
  ga4: {
    id: process.env.NEXT_PUBLIC_GA4_ID || 'G-D1KL0REMRY',
    enabled: true,
  },
  googleAds: {
    id: '',
    phoneLabel: '',
    whatsappLabel: '',
    formLabel: '',
    enabled: false,
  },
  facebookPixel: {
    id: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export const isTrackingEnabled = () => {
  return true;
};