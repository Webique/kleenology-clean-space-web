import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const EnhancedTracking: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = () => {
      const pageData = {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname,
        page_referrer: document.referrer,
        screen_resolution: `${screen.width}x${screen.height}`,
        language: navigator.language,
      };

      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: pageData.page_title,
          page_location: pageData.page_location,
          page_path: pageData.page_path,
        });
      }
      if ((window as any).fbq) {
        (window as any).fbq('track', 'PageView', {
          content_name: pageData.page_title,
          content_category: 'Cleaning Services',
        });
      }
      if ((window as any).ttq) {
        (window as any).ttq.track('PageView', {
          content_name: pageData.page_title,
          content_category: 'Cleaning Services',
        });
      }
    };

    const trackUserInteractions = () => {
      let maxScroll = 0;
      window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          if (maxScroll % 25 === 0 && (window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              scroll_percentage: maxScroll,
              page_path: location.pathname,
            });
          }
        }
      });

      const startTime = Date.now();
      window.addEventListener('beforeunload', () => {
        const timeOnPage = Date.now() - startTime;
        if ((window as any).gtag) {
          (window as any).gtag('event', 'time_on_page', {
            time_on_page: Math.round(timeOnPage / 1000),
            page_path: location.pathname,
          });
        }
      });

      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'BUTTON' || target.closest('button')) {
          const buttonText = target.textContent || target.innerText;
          if ((window as any).gtag) {
            (window as any).gtag('event', 'button_click', {
              button_text: buttonText,
              page_path: location.pathname,
            });
          }
        }
      });
    };

    const trackConversions = () => {
      const whatsappButtons = document.querySelectorAll('[href*="wa.me"]');
      whatsappButtons.forEach(button => {
        button.addEventListener('click', () => {
          if ((window as any).gtag) {
            (window as any).gtag('event', 'whatsapp_click', {
              event_category: 'engagement',
              page_path: location.pathname,
            });
          }
        });
      });
    };

    const forceGAPageView = () => {
      if ((window as any).gtag) {
        (window as any).gtag('config', 'G-1FHH5FNM55', {
          page_path: location.pathname,
          page_title: document.title,
        });
      }
    };

    trackPageView();
    forceGAPageView();
    trackUserInteractions();
    trackConversions();
  }, [location]);

  return null;
};
