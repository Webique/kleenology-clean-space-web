import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    ttq: any;
    snaptr: any;
  }
}

interface PixelEvent {
  event: string;
  parameters?: Record<string, any>;
}

export const PixelTracker = () => {
  const trackPageView = (_pageName?: string) => {
    try {
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
      if (window.fbq) window.fbq('track', 'PageView');
      if (window.ttq) window.ttq.track('PageView');
      if (window.snaptr) window.snaptr('track', 'PAGE_VIEW');
    } catch (_) {}
  };

  const trackContactForm = () => {
    try {
      if (window.fbq) window.fbq('track', 'Lead');
      if (window.ttq) window.ttq.track('Contact');
      if (window.snaptr) window.snaptr('track', 'SIGN_UP');
    } catch (_) {}
  };

  const trackWhatsAppClick = () => {
    try {
      if (window.fbq) window.fbq('track', 'Lead');
      if (window.ttq) window.ttq.track('Contact');
      if (window.snaptr) window.snaptr('track', 'SIGN_UP');
    } catch (_) {}
  };

  const trackServiceView = (serviceName: string) => {
    try {
      if (window.fbq) window.fbq('track', 'ViewContent', { content_name: serviceName, content_category: 'service' });
      if (window.ttq) window.ttq.track('ViewContent', { content_name: serviceName, content_category: 'service' });
      if (window.snaptr) window.snaptr('track', 'PAGE_VIEW');
    } catch (_) {}
  };

  const trackButtonClick = (buttonName: string) => {
    try {
      if (window.fbq) window.fbq('trackCustom', 'button_click', { button_name: buttonName });
      if (window.ttq) window.ttq.track('CustomEvent', { event_name: 'button_click', button_name: buttonName });
      if (window.snaptr) window.snaptr('track', 'PAGE_VIEW');
    } catch (_) {}
  };

  const trackScrollDepth = (depth: number) => {
    try {
      if (window.fbq) window.fbq('trackCustom', 'scroll_depth', { scroll_depth: depth });
      if (window.ttq) window.ttq.track('CustomEvent', { event_name: 'scroll_depth', scroll_depth: depth });
      if (window.snaptr) window.snaptr('track', 'PAGE_VIEW');
    } catch (_) {}
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if ([25, 50, 75, 100].includes(scrollDepth)) trackScrollDepth(scrollDepth);
      }, 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  useEffect(() => {
    trackPageView();
  }, []);

  return null;
};
