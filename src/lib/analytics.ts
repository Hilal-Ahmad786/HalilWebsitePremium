// ===== src/lib/analytics.ts =====
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag?: (...args: any[]) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dataLayer?: any[];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq?: (...args: any[]) => void;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // 1. Google Analytics 4 (via GTM or Direct)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }

  // 2. Facebook Pixel
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }

  // 3. Console Log (Development only)
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event Tracked:', eventName, parameters);
  }
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', {
    event_category: 'contact',
    event_label: 'phone_button',
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: 'whatsapp_button',
  });
};

export const trackFormSubmit = (formName: string) => {
  trackEvent('form_submit', {
    event_category: 'engagement',
    event_label: formName,
  });

  // Facebook Standard Event for Leads
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead');
  }
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName,
  });
};

export const trackBlogView = (blogTitle: string) => {
  trackEvent('blog_view', {
    event_category: 'content',
    event_label: blogTitle,
  });
};

export const trackCTAClick = (ctaName: string) => {
  trackEvent('cta_click', {
    event_category: 'engagement',
    event_label: ctaName,
  });
};

export const trackCalculatorUse = (label = 'Price Calculator Used') => {
  trackEvent('calculator_use', {
    event_category: 'engagement',
    event_label: label,
  });
};