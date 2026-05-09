import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string; // kept for API compatibility but no longer emitted
  image?: string;
  url?: string;
  type?: string;
  jsonLd?: object | object[];
  hreflang?: boolean;
  noindex?: boolean;
}

export const SEO: React.FC<SEOProps> = ({
  title = "كلينولوجي - خدمات تنظيف احترافية في الرياض | Kleenology",
  description = "كلينولوجي — شركة تنظيف احترافية في الرياض. تنظيف منازل، مكاتب، سجاد، وتنظيف عميق بمواد آمنة وضمان الرضا ١٠٠٪. احجز الآن!",
  image = "https://kleenology.me/logobg.png",
  url = "https://kleenology.me",
  type = "website",
  jsonLd,
  hreflang = true,
  noindex = false,
}) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: string, value: string, attrName = 'content') => {
      let tag = document.querySelector(selector) as HTMLMetaElement | null;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, selector.match(/["']([^"']+)["']/)?.[1] ?? '');
        document.head.appendChild(tag);
      }
      tag.setAttribute(attrName, value);
    };

    setMeta('meta[name="description"]', 'name', description);
    setMeta('meta[name="robots"]', 'name', noindex ? 'noindex, nofollow' : 'index, follow');

    const ogTags: [string, string][] = [
      ['og:title', title],
      ['og:description', description],
      ['og:image', image],
      ['og:url', url],
      ['og:type', type],
    ];
    ogTags.forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    const twitterTags: [string, string][] = [
      ['twitter:title', title],
      ['twitter:description', description],
      ['twitter:image', image],
    ];
    twitterTags.forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    if (hreflang) {
      const hreflangConfigs = [
        { hreflang: 'ar', href: url },
        { hreflang: 'en', href: url },
        { hreflang: 'x-default', href: url },
      ];
      hreflangConfigs.forEach(({ hreflang: lang, href }) => {
        let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
        if (!link) {
          link = document.createElement('link');
          link.setAttribute('rel', 'alternate');
          link.setAttribute('hreflang', lang);
          document.head.appendChild(link);
        }
        link.setAttribute('href', href);
      });
    }

    document.querySelectorAll('[data-seo-jsonld]').forEach(el => el.remove());
    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }

    return () => {
      document.querySelectorAll('[data-seo-jsonld]').forEach(el => el.remove());
    };
  }, [title, description, image, url, type, jsonLd, hreflang, noindex]);

  return null;
};
