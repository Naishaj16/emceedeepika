import React, { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  schemaJson?: object;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = 'https://emceedeepika.com',
  ogImage = 'https://emceedeepika.com/images/deepika/deepika-5.webp',
  ogType = 'website',
  schemaJson,
}) => {
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
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
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
    canonicalLink.setAttribute('href', canonicalUrl);

    // 6. Hreflang Tags (Regional English targeting for main market nodes)
    const hreflangTags = [
      { lang: 'en', href: 'https://emceedeepika.com/' },
      { lang: 'en-IN', href: 'https://emceedeepika.com/locations/chennai' },
      { lang: 'en-AE', href: 'https://emceedeepika.com/locations/dubai' },
      { lang: 'en-SG', href: 'https://emceedeepika.com/locations/singapore' },
      { lang: 'en-MY', href: 'https://emceedeepika.com/locations/malaysia' },
      { lang: 'x-default', href: 'https://emceedeepika.com/' },
    ];

    hreflangTags.forEach(({ lang, href }) => {
      let linkTag = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!linkTag) {
        linkTag = document.createElement('link');
        linkTag.setAttribute('rel', 'alternate');
        linkTag.setAttribute('hreflang', lang);
        document.head.appendChild(linkTag);
      }
      linkTag.setAttribute('href', href);
    });

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
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaJson]);

  return null;
};

