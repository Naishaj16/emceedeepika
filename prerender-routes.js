import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Schema definitions
const chennaiBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'Person'],
  '@id': 'https://www.emceedeepika.com/#deepika-jain',
  name: 'Deepika Jain',
  alternateName: 'Emcee Deepika',
  jobTitle: 'International Multilingual Emcee & Event Host',
  description: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu with 12+ years experience.',
  url: 'https://www.emceedeepika.com/locations/chennai',
  telephone: '+918056958856',
  email: 'dishajain395@gmail.com',
  priceRange: '₹₹₹',
  image: 'https://www.emceedeepika.com/images/gallery/wedding/wedding-1.jpg',
  sameAs: [
    'https://www.instagram.com/emcee_deepikajain/',
    'https://www.facebook.com/emceedeepikajain',
    'https://www.youtube.com/@besteventemceeandanchor',
    'https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  knowsLanguage: ['English', 'Tamil', 'Hindi', 'Marwari', 'Telugu'],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Chennai, Tamil Nadu',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '128',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Kavitha & Arvind Ramanathan' },
      reviewBody: 'Deepika was the heartbeat of our wedding reception at The Leela Palace! Her effortless transitions between Tamil and English made our grandparents and overseas friends equally engaged.',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Suresh Narayanan' },
      reviewBody: 'Deepika brought international executive poise and sharp timing to our corporate leadership conference at ITC Grand Chola. Flawless VIP moderation!',
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    },
  ],
};

const chennaiFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why hire a bilingual Tamil-English anchor in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A bilingual anchor ensures seamless communication across diverse audiences, bridging cultural warmth in Tamil with corporate and modern elegance in English. In Chennai, weddings and conferences often host a blend of local families, North Indian guests, and global delegates — Deepika ensures nobody feels alienated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of venues and locations does Deepika cover in Chennai & Tamil Nadu?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deepika regularly anchors events at iconic luxury venues including ITC Grand Chola, The Leela Palace Chennai, Taj Coromandel, Taj Fisherman’s Cove on ECR, and Chennai Trade Centre. She also travels across Tamil Nadu for destination celebrations in Coimbatore, Madurai, and Mahabalipuram.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does Deepika manage cross-cultural weddings (e.g., Tamil-Marwari or South-North unions)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With native fluency in Tamil, English, Hindi, and Marwari, Deepika is one of India’s most sought-after emcees for inter-cultural weddings. She customizes the script to honor both sets of traditions, explains rituals contextually, and creates unified celebrations where everyone celebrates together.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pricing structure and how are emcee fees determined?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Emcee pricing depends on event format (single evening reception, corporate gala, full-day conference, or multi-day wedding), travel requirements, and preparation scope. Direct bespoke quotes with clear deliverables are provided within 6 hours of receiving your event details.',
      },
    },
    {
      '@type': 'Question',
      name: 'How far in advance should I book an event anchor in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Due to high demand during prime Muhurtham dates (Tamil wedding seasons) and corporate conference peaks (Q3/Q4), booking 2 to 4 months in advance is recommended. Last-minute inquiries can occasionally be accommodated depending on calendar openings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What audio and technical setup does Deepika require on stage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Deepika provides a streamlined technical rider to your AV team: typically two professional UHF wireless cordless microphones (Shure/Sennheiser), dedicated stage monitoring, and basic stage coordination briefing prior to doors opening.',
      },
    },
  ],
};

const chennaiBreadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.emceedeepika.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.emceedeepika.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Chennai', item: 'https://www.emceedeepika.com/locations/chennai' },
  ],
};

// Static HTML shell for /locations/chennai
const chennaiPrerenderHtml = `
<div class="pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs font-medium text-pastel-600">
      <a href="/" class="hover:text-pastel-900 transition-colors">Home</a>
      <span>/</span>
      <a href="/services" class="hover:text-pastel-900 transition-colors">Locations</a>
      <span>/</span>
      <span class="text-pastel-900 font-semibold">Chennai</span>
    </nav>
  </div>

  <section class="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-pastel-200">
    <div class="max-w-5xl mx-auto text-center space-y-6">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200/80 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-wider">
        <span>Target Region: Chennai, Tamil Nadu, India</span>
      </div>
      <h1 class="font-serif text-3xl sm:text-5xl font-bold text-pastel-900 leading-tight">
        Premier Wedding Anchor & Corporate Emcee in Chennai
      </h1>
      <p class="text-pastel-700 text-lg max-w-3xl mx-auto leading-relaxed">
        Bringing charisma, seamless crowd engagement, and fluent bilingual mastery (English & Tamil) to luxury celebrations, sangeet nights & corporate summits across South India.
      </p>
      <div class="pt-4 flex flex-wrap justify-center items-center gap-4">
        <a href="/contact" class="bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-8 py-3.5 rounded-full font-semibold text-base transition-all shadow-md inline-block">
          Check Chennai Availability
        </a>
        <a href="https://wa.me/918056958856?text=Hi%20Deepika,%20I%20am%20inquiring%20about%20booking%20you%20as%20an%20event%20anchor%20in%20Chennai" class="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all shadow-md inline-block">
          WhatsApp Direct Desk
        </a>
      </div>
    </div>
  </section>

  <section class="bg-pastel-800 text-pastel-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <span class="block text-3xl font-serif font-bold text-gold-light">1,200+</span>
        <span class="text-xs text-pastel-200 uppercase tracking-wider">Events in Chennai & South India</span>
      </div>
      <div>
        <span class="block text-3xl font-serif font-bold text-gold-light">2,500+</span>
        <span class="text-xs text-pastel-200 uppercase tracking-wider">Global Shows Worldwide</span>
      </div>
      <div>
        <span class="block text-3xl font-serif font-bold text-gold-light">12+ Years</span>
        <span class="text-xs text-pastel-200 uppercase tracking-wider">Stage Experience</span>
      </div>
      <div>
        <span class="block text-3xl font-serif font-bold text-gold-light">5 Languages</span>
        <span class="text-xs text-pastel-200 uppercase tracking-wider">Fluent (Tamil, English, Hindi, Marwari, Telugu)</span>
      </div>
    </div>
  </section>

  <section class="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="space-y-6">
      <h2 class="font-serif text-3xl font-bold text-pastel-900">
        Why Event Hosts in Chennai Choose Deepika
      </h2>
      <p class="text-pastel-700 leading-relaxed text-base">
        Chennai and Tamil Nadu celebrations blend rich cultural rituals with cosmopolitan elegance. As a native bilingual anchor fluent in both Tamil and English (along with Hindi, Marwari, and Telugu), Deepika bridges family traditions and lively modern celebration, ensuring every guest feels deeply involved.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
        <div class="p-3 bg-pastel-100 rounded-xl">ITC Grand Chola (Guindy)</div>
        <div class="p-3 bg-pastel-100 rounded-xl">The Leela Palace (MRC Nagar)</div>
        <div class="p-3 bg-pastel-100 rounded-xl">Taj Coromandel (Nungambakkam)</div>
        <div class="p-3 bg-pastel-100 rounded-xl">Taj Fisherman’s Cove (ECR)</div>
        <div class="p-3 bg-pastel-100 rounded-xl">Vivanta Chennai & Connemara</div>
        <div class="p-3 bg-pastel-100 rounded-xl">Feathers Hotel (Manapakkam)</div>
        <div class="p-3 bg-pastel-100 rounded-xl">Chennai Trade Centre</div>
        <div class="p-3 bg-pastel-100 rounded-xl">InterContinental Mahabalipuram</div>
      </div>
    </div>
  </section>

  <section class="py-16 bg-pastel-100/50 border-t border-b border-pastel-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
      <h2 class="font-serif text-3xl font-bold text-pastel-900 text-center">
        Chennai Emcee & Anchor Booking FAQs
      </h2>
      <div class="space-y-4">
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">Why hire a bilingual Tamil-English anchor in Chennai?</h3>
          <p class="text-pastel-700 text-sm mt-2">A bilingual anchor ensures seamless communication across diverse audiences, bridging cultural warmth in Tamil with corporate and modern elegance in English.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">What types of venues and locations does Deepika cover in Chennai & Tamil Nadu?</h3>
          <p class="text-pastel-700 text-sm mt-2">Deepika regularly anchors events at iconic luxury venues including ITC Grand Chola, The Leela Palace Chennai, Taj Coromandel, Taj Fisherman’s Cove on ECR, and Chennai Trade Centre.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">How does Deepika manage cross-cultural weddings (e.g., Tamil-Marwari or South-North unions)?</h3>
          <p class="text-pastel-700 text-sm mt-2">With native fluency in Tamil, English, Hindi, and Marwari, Deepika is one of India’s most sought-after emcees for inter-cultural weddings, honoring both traditions seamlessly.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">What is the pricing structure and how are emcee fees determined?</h3>
          <p class="text-pastel-700 text-sm mt-2">Emcee pricing depends on event format, preparation, and duration. Direct bespoke quotes with clear deliverables are provided within 6 hours.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 max-w-4xl mx-auto px-4 text-center">
    <h2 class="font-serif text-2xl sm:text-3xl font-bold text-pastel-900">Contact Chennai Booking Desk</h2>
    <p class="text-pastel-600 text-sm mt-2">Phone / WhatsApp: +91 80569 58856 | Email: dishajain395@gmail.com</p>
  </section>
</div>
`;

const routes = [
  {
    path: '/about',
    title: 'About Deepika Jain | International Emcee & Event Host',
    description: "Learn about Deepika Jain's journey as a top international emcee with 2,500+ shows across 15+ countries including India, UAE, Singapore, and Southeast Asia.",
    canonicalUrl: 'https://www.emceedeepika.com/about',
  },
  {
    path: '/services',
    title: 'Emcee & Hosting Services | Deepika Jain',
    description: 'Explore professional emcee services for corporate galas, award ceremonies, summits, luxury weddings, and brand launches with Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/services',
  },
  {
    path: '/destination-wedding',
    title: 'Destination Wedding Emcee & Anchor | Deepika Jain',
    description: 'Bring luxury, energy, and elegance to your destination wedding in Dubai, Bali, Thailand, Rajasthan, or Singapore with Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/destination-wedding',
  },
  {
    path: '/portfolio',
    title: 'Event Portfolio & Videos | Emcee Deepika Jain',
    description: 'Watch showreels, highlights, and videos of Deepika Jain hosting major corporate galas, luxury weddings, and international award shows.',
    canonicalUrl: 'https://www.emceedeepika.com/portfolio',
  },
  {
    path: '/gallery',
    title: 'Event Photo Gallery | Emcee Deepika Jain',
    description: 'Browse photos of Deepika Jain hosting top corporate events, grand weddings, galas, and celebrity shows worldwide.',
    canonicalUrl: 'https://www.emceedeepika.com/gallery',
  },
  {
    path: '/contact',
    title: 'Book Emcee Deepika Jain | Contact & Inquiries',
    description: 'Get in touch to check availability and book Deepika Jain for your upcoming corporate event, wedding, or international conference.',
    canonicalUrl: 'https://www.emceedeepika.com/contact',
  },
  {
    path: '/shorts',
    title: 'Watch YouTube Shorts & Live Stage Videos | Emcee Deepika Jain',
    description: 'Watch official YouTube Shorts, live stage hosting clips, crowd interactions, and wedding highlights by International Emcee Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/shorts',
  },
  {
    path: '/workshop',
    title: '1-Day Emcee & Anchor Masterclass Workshop | 21st November | Deepika Jain',
    description: 'Join Deepika Jain for a 1-day immersive in-person Emcee & Anchor workshop in Chennai on 21st November 2026. Learn stage presence, scriptwriting, and crowd engagement.',
    canonicalUrl: 'https://www.emceedeepika.com/workshop',
  },
  {
    path: '/workshop-admin',
    title: 'Workshop Admin Portal | Emcee Deepika Jain',
    description: 'Admin dashboard for Deepika Jain Masterclass workshop registrations and attendees.',
    canonicalUrl: 'https://www.emceedeepika.com/workshop-admin',
  },
  {
    path: '/locations/chennai',
    title: 'Best Wedding Anchor in Chennai | Corporate Event Emcee Deepika',
    description: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu with 12+ years experience.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/chennai',
    schemas: [chennaiBusinessSchema, chennaiFaqSchema, chennaiBreadcrumbSchema],
    prerenderBody: chennaiPrerenderHtml,
  },
  {
    path: '/locations/dubai',
    title: 'Corporate Emcee Dubai | Gala Dinner & Event Host | Deepika Jain',
    description: 'Hire top corporate emcee in Dubai & UAE. Deepika Jain delivers world-class event hosting, gala dinner emcee services, trade shows & product launch hosting.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/dubai',
  },
  {
    path: '/locations/malaysia',
    title: 'Corporate Emcee Kuala Lumpur | D&D Emcee Malaysia | Deepika Jain',
    description: 'Book top corporate emcee in Kuala Lumpur, Malaysia. Deepika Jain specializes in Dinner & Dance (D&D) emcee hosting, gala dinners & multi-lingual corporate events.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/malaysia',
  },
  {
    path: '/locations/singapore',
    title: 'Professional Emcee Singapore | Corporate D&D & Gala Host | Deepika Jain',
    description: 'Hire premier corporate emcee in Singapore. Deepika Jain is a renowned Master of Ceremonies for company D&D, galas, product launches & international summits.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/singapore',
  },
];

console.log('Generating route-specific HTML files for static serving...');

for (const route of routes) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/s, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/s, `<link rel="canonical" href="${route.canonicalUrl}" />`);

  // Replace OG Tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/s, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/s, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/s, `<meta property="og:url" content="${route.canonicalUrl}" />`);

  // Replace Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/s, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/s, `<meta name="twitter:description" content="${route.description}" />`);

  // Inject Structured Data (JSON-LD) into <head> if provided
  if (route.schemas && route.schemas.length > 0) {
    const jsonLdScripts = route.schemas
      .map((schema) => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`)
      .join('\n    ');
    html = html.replace('</head>', `    ${jsonLdScripts}\n  </head>`);
  }

  // Inject Prerendered HTML Body into <div id="root"></div> if provided
  if (route.prerenderBody) {
    html = html.replace('<div id="root"></div>', `<div id="root">${route.prerenderBody}</div>`);
  }

  // Path 1: dist/route/index.html
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  const indexPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(indexPath, html, 'utf8');

  // Path 2: dist/route.html
  const htmlFilePath = path.join(distDir, `${route.path}.html`);
  const htmlFileDir = path.dirname(htmlFilePath);
  if (!fs.existsSync(htmlFileDir)) {
    fs.mkdirSync(htmlFileDir, { recursive: true });
  }
  fs.writeFileSync(htmlFilePath, html, 'utf8');

  console.log(` Generated HTML for ${route.path} -> canonical: ${route.canonicalUrl}`);
}

// Generate dist/404.html
let notFoundHtml = template;
notFoundHtml = notFoundHtml.replace(/<title>.*?<\/title>/s, `<title>404 - Page Not Found | Emcee Deepika Jain</title>`);
notFoundHtml = notFoundHtml.replace(
  /<meta name="description" content=".*?"\s*\/?>/s,
  `<meta name="description" content="The page you requested could not be found." />\n    <meta name="robots" content="noindex, nofollow" />`
);
const notFoundBody = `
<div class="min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-center">
  <div class="max-w-xl mx-auto space-y-6">
    <span class="inline-block text-6xl sm:text-7xl font-serif font-bold text-pastel-400">404</span>
    <h1 class="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">Page Not Found</h1>
    <p class="text-pastel-600 text-base max-w-md mx-auto leading-relaxed">
      The stage is set, but this page isn't in our program. Let's guide you back to our live showcases and booking details.
    </p>
    <div class="pt-4 flex flex-wrap justify-center items-center gap-4">
      <a href="/" class="bg-pastel-800 text-pastel-50 px-6 py-3 rounded-full font-semibold text-sm">Back to Home</a>
      <a href="/locations/chennai" class="bg-pastel-100 text-pastel-800 border border-pastel-300 px-6 py-3 rounded-full font-semibold text-sm">Chennai Events</a>
      <a href="/contact" class="bg-pastel-100 text-pastel-800 border border-pastel-300 px-6 py-3 rounded-full font-semibold text-sm">Contact Desk</a>
    </div>
  </div>
</div>
`;
notFoundHtml = notFoundHtml.replace('<div id="root"></div>', `<div id="root">${notFoundBody}</div>`);
fs.writeFileSync(path.join(distDir, '404.html'), notFoundHtml, 'utf8');
console.log(' Generated dist/404.html with noindex and custom 404 shell');

console.log('Successfully generated static HTML for all routes!');
