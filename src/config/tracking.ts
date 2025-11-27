// ===== src/config/tracking.ts =====
export const trackingConfig = {
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5ZQBQTK7',
    enabled: true, // Fixed: Always enable since you provided the ID
  },
  ga4: {
    id: process.env.NEXT_PUBLIC_GA4_ID || 'G-D1KL0REMRY',
    enabled: true, // Fixed: Always enable
  },
  googleAds: {
    // NOTE: '819-982-7246' looks like a phone number. 
    // A Google Ads ID usually looks like 'AW-123456789'. 
    // Please verify this in your Google Ads account settings.
    id: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || '630198311',
    phoneLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_PHONE_LABEL || '',
    whatsappLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_WHATSAPP_LABEL || '',
    formLabel: process.env.NEXT_PUBLIC_GOOGLE_ADS_FORM_LABEL || '',
    enabled: true,
  },
  facebookPixel: {
    id: process.env.NEXT_PUBLIC_FB_PIXEL_ID || '',
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
};

export const isTrackingEnabled = () => {
  return true; // Fixed: Always return true so tracking scripts load
};