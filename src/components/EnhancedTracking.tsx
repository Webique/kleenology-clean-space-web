import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const EnhancedTracking: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views with enhanced data
    const trackPageView = () => {
      const pageData = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        page_referrer: document.referrer,
        user_agent: navigator.userAgent,
        screen_resolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
        timestamp: new Date().toISOString()
      };

      // Send to Google Analytics 4
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: pageData.page_title,
          page_location: pageData.page_location,
          page_path: pageData.page_path,
          custom_parameters: pageData
        });
        console.log('✅ Google Analytics: PageView tracked', pageData);
      } else {
        console.log('❌ Google Analytics: gtag not found');
      }

      // Send to Meta Pixel
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView', {
          content_name: pageData.page_title,
          content_category: 'Cleaning Services'
        });
        console.log('✅ Meta Pixel: PageView tracked');
      }

      // Send to TikTok Pixel
      if ((window as any).ttq) {
        (window as any).ttq.track('PageView', {
          content_name: pageData.page_title,
          content_category: 'Cleaning Services'
        });
        console.log('✅ TikTok Pixel: PageView tracked');
      }

      console.log('Enhanced Page View Tracked:', pageData);
    };

    // Track user interactions
    const trackUserInteractions = () => {
      // Track scroll depth
      let maxScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (maxScroll % 25 === 0) { // Track at 25%, 50%, 75%, 100%
            if ((window as any).gtag) {
              (window as any).gtag('event', 'scroll_depth', {
                scroll_percentage: maxScroll,
                page_path: location.pathname
              });
              console.log(`✅ Google Analytics: Scroll depth ${maxScroll}% tracked`);
            }
          }
        }
      });

      // Track time on page
      let startTime = Date.now();
      window.addEventListener('beforeunload', () => {
        const timeOnPage = Date.now() - startTime;
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            time_on_page: Math.round(timeOnPage / 1000),
            page_path: location.pathname
          });
          console.log(`✅ Google Analytics: Time on page ${Math.round(timeOnPage / 1000)}s tracked`);
        }
      });

      // Track form interactions
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const buttonText = target.textContent || target.innerText;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'button_click', {
              button_text: buttonText,
              page_path: location.pathname
            });
            console.log(`✅ Google Analytics: Button click "${buttonText}" tracked`);
          }
        }
      });
    };

    // Track conversion events
    const trackConversions = () => {
      // WhatsApp clicks
      const whatsappButtons = document.querySelectorAll('[href*="wa.me"]');
      whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'conversion', {
              send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
              value: 1.0,
              currency: 'USD',
              transaction_id: Date.now().toString()
            });
            console.log('✅ Google Analytics: WhatsApp conversion tracked');
          }
        });
      });
    };

    // Force a page view event for Google Analytics
    const forceGAPageView = () => {
      if ((window as any).gtag) {
        (window as any).gtag('config', 'G-1FHH5FNM55', {
          page_path: location.pathname,
          page_title: document.title
        });
        console.log('✅ Google Analytics: Config page view sent');
      }
    };

    trackPageView();
    forceGAPageView(); // Force GA config
    trackUserInteractions();
    trackConversions();

  }, [location]);

  return null;
}; 