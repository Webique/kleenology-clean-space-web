import { useEffect } from 'react';

export const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    if (!('PerformanceObserver' in window)) return;

    const send = (name: string, value: number) => {
      if ((window as any).gtag) {
        (window as any).gtag('event', name, { value, event_category: 'Web Vitals' });
      }
    };

    const lcp = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const last = entries[entries.length - 1];
      send('LCP', Math.round(last.startTime));
    });
    lcp.observe({ entryTypes: ['largest-contentful-paint'] });

    const fid = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        send('FID', Math.round(entry.processingStart - entry.startTime));
      });
    });
    fid.observe({ entryTypes: ['first-input'] });

    let clsValue = 0;
    const cls = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry: any) => {
        if (!entry.hadRecentInput) clsValue += entry.value;
      });
      send('CLS', Math.round(clsValue * 1000) / 1000);
    });
    cls.observe({ entryTypes: ['layout-shift'] });

    const onLoad = () => send('page_load_time', Math.round(performance.now()));
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return null;
};
