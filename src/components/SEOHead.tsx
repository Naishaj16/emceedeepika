import React, { useEffect } from 'react';
import { useLocation } from '@tanstack/react-router';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaJson?: object;
  showHreflang?: boolean;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage = 'https://www.emceedeepika.com/images/deepika/deepika-5.webp',
  ogType = 'website',
  schemaJson,
  showHreflang = false,
}) => {
  const location = useLocation();
  const pathname = location ? location.pathname : '';
  const defaultCanonical = `https://www.emceedeepika.com${pathname === '/' ? '/' : pathname}`;
  const targetCanonicalUrl = canonicalUrl || defaultCanonical;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper function to set or update meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    if (keywords && keywords.length > 0) {
      setMetaTag('meta[name="keywords"]', 'name', 'keywords', keywords.join(', '));
    }

    // 3. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', ogType);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', targetCanonicalUrl);
    setMetaTag('meta[property="og:image"]', 'property', 'og:image', ogImage);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', 'Emcee Deepika Jain');

    // 4. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMetaTag('meta[name="twitter:image"]', 'name', 'twitter:image', ogImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', targetCanonicalUrl);

    // 6. Hreflang Tags (Scoped only to regional pages: homepage + locations)
    const existingHreflangs = document.querySelectorAll('link[rel="alternate"][hreflang]');
    existingHreflangs.forEach((el) => el.remove());

    if (showHreflang) {
      const hreflangTags = [
        { lang: 'en', href: 'https://www.emceedeepika.com/' },
        { lang: 'en-IN', href: 'https://www.emceedeepika.com/locations/chennai' },
        { lang: 'en-AE', href: 'https://www.emceedeepika.com/locations/dubai' },
        { lang: 'en-SG', href: 'https://www.emceedeepika.com/locations/singapore' },
        { lang: 'en-MY', href: 'https://www.emceedeepika.com/locations/malaysia' },
        { lang: 'x-default', href: 'https://www.emceedeepika.com/' },
      ];

      hreflangTags.forEach(({ lang, href }) => {
        const linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'alternate');
        linkTag.setAttribute('hreflang', lang);
        linkTag.setAttribute('href', href);
        document.head.appendChild(linkTag);
      });
    }

    // 7. Inject JSON-LD Schema
    if (schemaJson) {
      const scriptId = 'json-ld-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schemaJson);
    }
  }, [title, description, keywords, targetCanonicalUrl, ogImage, ogType, schemaJson, showHreflang]);

  return null;
};

