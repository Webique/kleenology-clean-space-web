import { useEffect } from 'react';

// Declare global types for pixel tracking
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
  // Track page view
  const trackPageView = (pageName?: string) => {
    try {
      console.log('🔍 Tracking Page View...');
      
      // Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
        console.log('✅ Google Analytics: PageView tracked');
      } else {
        console.log('❌ Google Analytics: gtag not found');
      }
      
      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'PageView');
        console.log('✅ Meta Pixel: PageView tracked');
      } else {
        console.log('❌ Meta Pixel: fbq not found');
      }

      // TikTok Pixel
      if (window.ttq) {
        window.ttq.track('PageView');
        console.log('✅ TikTok Pixel: PageView tracked');
      } else {
        console.log('❌ TikTok Pixel: ttq not found');
      }

      // Snapchat Pixel
      if (window.snaptr) {
        window.snaptr('track', 'PAGE_VIEW');
        console.log('✅ Snapchat Pixel: PAGE_VIEW tracked');
      } else {
        console.log('❌ Snapchat Pixel: snaptr not found');
      }
    } catch (error) {
      console.error('❌ Error tracking page view:', error);
    }
  };

  // Track contact form submission
  const trackContactForm = () => {
    try {
      console.log('🔍 Tracking Contact Form...');
      
      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead');
        console.log('✅ Meta Pixel: Lead tracked');
      }

      // TikTok Pixel
      if (window.ttq) {
        window.ttq.track('Contact');
        console.log('✅ TikTok Pixel: Contact tracked');
      }

      // Snapchat Pixel
      if (window.snaptr) {
        window.snaptr('track', 'SIGN_UP');
        console.log('✅ Snapchat Pixel: SIGN_UP tracked');
      }
    } catch (error) {
      console.error('❌ Error tracking contact form:', error);
    }
  };

  // Track WhatsApp click
  const trackWhatsAppClick = () => {
    try {
      console.log('🔍 Tracking WhatsApp Click...');
      
      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'Lead');
        console.log('✅ Meta Pixel: Lead tracked (WhatsApp)');
      }

      // TikTok Pixel
      if (window.ttq) {
        window.ttq.track('Contact');
        console.log('✅ TikTok Pixel: Contact tracked (WhatsApp)');
      }

      // Snapchat Pixel
      if (window.snaptr) {
        window.snaptr('track', 'SIGN_UP');
        console.log('✅ Snapchat Pixel: SIGN_UP tracked (WhatsApp)');
      }
    } catch (error) {
      console.error('❌ Error tracking WhatsApp click:', error);
    }
  };

  // Track service view
  const trackServiceView = (serviceName: string) => {
    try {
      console.log(`🔍 Tracking Service View: ${serviceName}`);
      
      // Meta Pixel
      if (window.fbq) {
        window.fbq('track', 'ViewContent', {
          content_name: serviceName,
          content_category: 'service'
        });
        console.log('✅ Meta Pixel: ViewContent tracked');
      }

      // TikTok Pixel
      if (window.ttq) {
        window.ttq.track('ViewContent', {
          content_name: serviceName,
          content_category: 'service'
        });
        console.log('✅ TikTok Pixel: ViewContent tracked');
      }

      // Snapchat Pixel
      if (window.snaptr) {
        window.snaptr('track', 'PAGE_VIEW');
        console.log('✅ Snapchat Pixel: PAGE_VIEW tracked');
      }
    } catch (error) {
      console.error('❌ Error tracking service view:', error);
    }
  };

  // Track button click
  const trackButtonClick = (buttonName: string) => {
    try {
      console.log(`🔍 Tracking Button Click: ${buttonName}`);
      
      // Meta Pixel
      if (window.fbq) {
        // Use trackCustom for custom events
        window.fbq('trackCustom', 'button_click', {
          button_name: buttonName
        });
        console.log('✅ Meta Pixel: button_click tracked');
      }

      // TikTok Pixel
      if (window.ttq) {
        window.ttq.track('CustomEvent', {
          event_name: 'button_click',
          button_name: buttonName
        });
        console.log('✅ TikTok Pixel: CustomEvent tracked');
      }

      // Snapchat Pixel
      if (window.snaptr) {
        window.snaptr('track', 'PAGE_VIEW');
        console.log('✅ Snapchat Pixel: PAGE_VIEW tracked');
      }
    } catch (error) {
      console.error('❌ Error tracking button click:', error);
    }
  };

  // Track scroll depth (optional)
  const trackScrollDepth = (depth: number) => {
    try {
      console.log(`🔍 Tracking Scroll Depth: ${depth}%`);
      
      // Meta Pixel
      if (window.fbq) {
        window.fbq('trackCustom', 'scroll_depth', {
          scroll_depth: depth
        });
        console.log('✅ Meta Pixel: Scroll depth tracked');
      }

      // TikTok Pixel
      if (window.ttq) {
        window.ttq.track('CustomEvent', {
          event_name: 'scroll_depth',
          scroll_depth: depth
        });
        console.log('✅ TikTok Pixel: Scroll depth tracked');
      }

      // Snapchat Pixel
      if (window.snaptr) {
        window.snaptr('track', 'PAGE_VIEW');
        console.log('✅ Snapchat Pixel: PAGE_VIEW tracked');
      }
    } catch (error) {
      console.error('❌ Error tracking scroll depth:', error);
    }
  };

  // Initialize scroll tracking
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        
        // Track at 25%, 50%, 75%, and 100%
        if ([25, 50, 75, 100].includes(scrollDepth)) {
          trackScrollDepth(scrollDepth);
        }
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  // Track initial page view
  useEffect(() => {
    trackPageView();
  }, []);

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    (window as any).pixelTracker = {
      trackPageView,
      trackContactForm,
      trackWhatsAppClick,
      trackServiceView,
      trackButtonClick,
      trackScrollDepth
    };
  }, []);

  return null; // This component doesn't render anything
}; 