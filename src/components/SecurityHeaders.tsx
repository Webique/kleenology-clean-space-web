import { useEffect } from 'react';

export const SecurityHeaders: React.FC = () => {
  useEffect(() => {
    // Add security headers dynamically
    const addSecurityHeaders = () => {
      // Content Security Policy
      const cspMeta = document.createElement('meta');
      cspMeta.setAttribute('http-equiv', 'Content-Security-Policy');
      cspMeta.setAttribute('content', "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://connect.facebook.net https://analytics.tiktok.com https://sc-static.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.googletagmanager.com https://connect.facebook.net https://analytics.tiktok.com https://sc-static.net;");
      document.head.appendChild(cspMeta);

      // X-Frame-Options
      const frameOptionsMeta = document.createElement('meta');
      frameOptionsMeta.setAttribute('http-equiv', 'X-Frame-Options');
      frameOptionsMeta.setAttribute('content', 'SAMEORIGIN');
      document.head.appendChild(frameOptionsMeta);

      // X-Content-Type-Options
      const contentTypeMeta = document.createElement('meta');
      contentTypeMeta.setAttribute('http-equiv', 'X-Content-Type-Options');
      contentTypeMeta.setAttribute('content', 'nosniff');
      document.head.appendChild(contentTypeMeta);

      // Referrer Policy
      const referrerMeta = document.createElement('meta');
      referrerMeta.setAttribute('name', 'referrer');
      referrerMeta.setAttribute('content', 'strict-origin-when-cross-origin');
      document.head.appendChild(referrerMeta);
    };

    addSecurityHeaders();
  }, []);

  return null;
}; 