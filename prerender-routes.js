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

// Canonical shared person entity details
const CANONICAL_PERSON = {
  '@id': 'https://www.emceedeepika.com/#deepika-jain',
  name: 'Deepika Jain',
  alternateName: 'Emcee Deepika',
  jobTitle: 'International Multilingual Emcee & Event Host',
  url: 'https://www.emceedeepika.com',
  telephone: '+918056958856',
  email: 'dishajain395@gmail.com',
  image: 'https://www.emceedeepika.com/images/deepika/deepika-5.webp',
  sameAs: [
    'https://www.instagram.com/emcee_deepikajain/',
    'https://www.facebook.com/emceedeepikajain',
    'https://www.youtube.com/@besteventemceeandanchor',
    'https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177',
  ],
  knowsLanguage: ['English', 'Tamil', 'Hindi', 'Marwari', 'Telugu'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  priceRange: '₹₹₹',
};

// Route definitions with full static HTML shells & Schema.org JSON-LD
const routes = [
  {
    path: '/',
    title: 'Emcee Deepika Jain | International Multilingual Event Host & Anchor',
    description: 'International multilingual emcee Deepika Jain hosts luxury destination weddings, corporate galas, and tech summits in 5 languages across India, UAE, and Southeast Asia.',
    canonicalUrl: 'https://www.emceedeepika.com/',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': ['Person', 'LocalBusiness'],
        ...CANONICAL_PERSON,
        description: 'Deepika Jain hosts luxury weddings, corporate galas, award nights, summits, and milestones in five languages (English, Hindi, Marwari, Tamil, Telugu) across India, UAE, and Southeast Asia.',
        areaServed: ['Chennai', 'Mumbai', 'Delhi NCR', 'Udaipur', 'Dubai', 'Singapore', 'Malaysia', 'Bali', 'Phuket', 'Maldives'],
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Sarah Mitchell' },
            reviewBody: "Deepika's energy is infectious! She didn't just host our gala; she orchestrated an unforgettable experience for over 1,200 attendees in Dubai.",
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Rajiv & Ananya Malhotra' },
            reviewBody: 'Deepika made our 3-day destination wedding in Udaipur feel like a fairytale. Her multilingual fluency bridged all our international guests effortlessly!',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
        ],
      },
    ],
    prerenderBody: `
<div class="pt-20">
  <section class="py-20 text-center px-4 max-w-5xl mx-auto space-y-6">
    <div class="inline-block px-4 py-1.5 rounded-full bg-pastel-200 text-pastel-800 text-xs font-bold uppercase tracking-wider">
      International Multilingual Emcee & Anchor
    </div>
    <h1 class="font-serif text-4xl sm:text-6xl font-bold text-pastel-900 leading-tight">
      Unforgettable Stage Energy, Flawless Event Protocol
    </h1>
    <p class="text-pastel-700 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
      Deepika Jain commands stages worldwide across 15+ countries, uniting diverse corporate and wedding audiences in 5 fluent languages: English, Tamil, Hindi, Marwari, and Telugu.
    </p>
    <div class="pt-4 flex flex-wrap justify-center gap-4">
      <a href="/contact" class="bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-semibold">Check Availability</a>
      <a href="tel:+918056958856" class="border border-pastel-400 text-pastel-900 px-7 py-3.5 rounded-full font-semibold">+91 80569 58856</a>
    </div>
  </section>
  <section class="bg-pastel-800 text-pastel-50 py-10 px-4">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div><span class="block text-3xl font-bold text-gold-light">12+</span><span class="text-xs uppercase text-pastel-200">Years Experience</span></div>
      <div><span class="block text-3xl font-bold text-gold-light">2,500+</span><span class="text-xs uppercase text-pastel-200">Shows Worldwide</span></div>
      <div><span class="block text-3xl font-bold text-gold-light">15+</span><span class="text-xs uppercase text-pastel-200">Countries Hosted</span></div>
      <div><span class="block text-3xl font-bold text-gold-light">5</span><span class="text-xs uppercase text-pastel-200">Languages Fluent</span></div>
    </div>
  </section>
</div>`,
  },
  {
    path: '/about',
    title: 'About Deepika Jain | International Emcee & Event Host',
    description: "Learn about Deepika Jain's journey as a top international emcee with 2,500+ shows across 15+ countries including India, UAE, Singapore, and Southeast Asia.",
    canonicalUrl: 'https://www.emceedeepika.com/about',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About Deepika Jain | International Emcee & Event Host',
        url: 'https://www.emceedeepika.com/about',
        mainEntity: {
          '@type': ['Person', 'LocalBusiness'],
          ...CANONICAL_PERSON,
          workLocation: ['Chennai', 'Mumbai', 'Delhi NCR', 'Udaipur', 'Dubai', 'Singapore', 'Malaysia', 'Bali', 'Phuket', 'Maldives'],
        },
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-12">
  <div class="text-center space-y-4">
    <span class="text-xs font-bold uppercase tracking-wider text-pastel-600">The Journey</span>
    <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">About Deepika Jain</h1>
    <p class="text-pastel-700 text-lg max-w-3xl mx-auto">
      With 12+ years of stage mastery and over 2,500+ shows across 15+ countries, Deepika brings infectious warmth, sharp stage timing, and five-language fluency (English, Hindi, Marwari, Tamil, and Telugu).
    </p>
  </div>
</div>`,
  },
  {
    path: '/services',
    title: 'Emcee & Hosting Services | Deepika Jain',
    description: 'Explore professional emcee services for corporate galas, award ceremonies, summits, luxury weddings, and brand launches with Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/services',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Professional Emcee & Event Hosting Services',
        provider: CANONICAL_PERSON,
        serviceType: ['Luxury Wedding Hosting', 'Corporate Event Hosting', 'Panel Moderation', 'Award Shows'],
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-12 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Emcee & Hosting Services</h1>
  <p class="text-pastel-700 text-lg max-w-2xl mx-auto">
    From grand luxury wedding receptions and high-energy sangeets to international C-level corporate summits and gala awards.
  </p>
</div>`,
  },
  {
    path: '/destination-wedding',
    title: 'Destination Wedding Emcee & Anchor | Deepika Jain',
    description: 'Bring luxury, energy, and elegance to your destination wedding in Dubai, Bali, Thailand, Rajasthan, or Singapore with Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/destination-wedding',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Destination Wedding Emcee Services',
        provider: CANONICAL_PERSON,
        areaServed: ['Udaipur', 'Jaipur', 'Dubai', 'Bali', 'Phuket', 'Singapore', 'Maldives'],
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-8 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Destination Wedding Emcee & Anchor</h1>
  <p class="text-pastel-700 text-lg max-w-3xl mx-auto">
    Royal palace celebrations in Udaipur and Jaipur, beachfront galas in Bali and Phuket, and luxury ballroom receptions in Dubai and Singapore.
  </p>
</div>`,
  },
  {
    path: '/portfolio',
    title: 'Event Portfolio & Videos | Emcee Deepika Jain',
    description: 'Watch showreels, highlights, and videos of Deepika Jain hosting major corporate galas, luxury weddings, and international award shows.',
    canonicalUrl: 'https://www.emceedeepika.com/portfolio',
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-8 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Event Portfolio & Videos</h1>
  <p class="text-pastel-700 text-lg max-w-2xl mx-auto">Browse live video highlights, grand couple entries, and international summit moderation.</p>
</div>`,
  },
  {
    path: '/gallery',
    title: 'Event Photo Gallery | Emcee Deepika Jain',
    description: 'Browse photos of Deepika Jain hosting top corporate events, grand weddings, galas, and celebrity shows worldwide.',
    canonicalUrl: 'https://www.emceedeepika.com/gallery',
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-8 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Event Photo Gallery</h1>
  <p class="text-pastel-700 text-lg max-w-2xl mx-auto">Capturing stage moments, celebrity interviews, and joyful celebrations across the globe.</p>
</div>`,
  },
  {
    path: '/contact',
    title: 'Book Emcee Deepika Jain | Contact & Inquiries',
    description: 'Get in touch to check availability and book Deepika Jain for your upcoming corporate event, wedding, or international conference.',
    canonicalUrl: 'https://www.emceedeepika.com/contact',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Book Emcee Deepika Jain | Contact & Inquiries',
        url: 'https://www.emceedeepika.com/contact',
        mainEntity: CANONICAL_PERSON,
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16 max-w-4xl mx-auto px-4 space-y-8 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Book Emcee Deepika Jain</h1>
  <p class="text-pastel-700 text-lg max-w-xl mx-auto">Check calendar availability and receive a custom proposal within 6 hours.</p>
  <div class="flex justify-center gap-6 pt-4 text-sm font-semibold">
    <a href="tel:+918056958856" class="text-pastel-900 hover:text-gold-DEFAULT">+91 80569 58856 (Primary)</a>
    <a href="tel:+918056914320" class="text-pastel-900 hover:text-gold-DEFAULT">+91 80569 14320 (Desk)</a>
  </div>
</div>`,
  },
  {
    path: '/shorts',
    title: 'Watch YouTube Shorts & Live Stage Videos | Emcee Deepika Jain',
    description: 'Watch official YouTube Shorts, live stage hosting clips, crowd interactions, and wedding highlights by International Emcee Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/shorts',
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-8 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Live Stage Shorts & Highlights</h1>
  <p class="text-pastel-700 text-lg max-w-2xl mx-auto">Quick clips of electrifying crowd interactions and signature hosting moments.</p>
</div>`,
  },
  {
    path: '/workshop',
    title: '1-Day Emcee & Anchor Masterclass Workshop | 21st November | Deepika Jain',
    description: 'Join Deepika Jain for a 1-day immersive in-person Emcee & Anchor workshop in Chennai on 21st November 2026. Learn stage presence, scriptwriting, and crowd engagement.',
    canonicalUrl: 'https://www.emceedeepika.com/workshop',
    prerenderBody: `
<div class="pt-24 pb-16 max-w-4xl mx-auto px-4 space-y-8 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">1-Day Emcee & Anchor Masterclass Workshop</h1>
  <p class="text-pastel-700 text-lg max-w-2xl mx-auto">Learn stage poise, scriptwriting, and crowd control directly from Deepika Jain in Chennai.</p>
</div>`,
  },
  {
    path: '/locations',
    title: 'Global Locations & Event Hubs | Emcee Deepika Jain',
    description: 'Explore Deepika Jain’s premier event emcee and hosting hubs across Chennai, Dubai, Singapore, and Malaysia.',
    canonicalUrl: 'https://www.emceedeepika.com/locations',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Global Locations & Event Hubs | Emcee Deepika Jain',
        url: 'https://www.emceedeepika.com/locations',
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16 max-w-5xl mx-auto px-4 space-y-10 text-center">
  <h1 class="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">Global Locations & Event Hubs</h1>
  <p class="text-pastel-700 text-lg max-w-2xl mx-auto">Hosting across Chennai, Dubai, Singapore, Malaysia, and worldwide destination weddings.</p>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-6">
    <a href="/locations/chennai" class="p-6 bg-pastel-100 rounded-2xl block hover:bg-pastel-200"><h3 class="font-bold text-xl">Chennai & South India</h3><p class="text-sm text-pastel-600 mt-1">Wedding Anchor & Corporate Emcee</p></a>
    <a href="/locations/dubai" class="p-6 bg-pastel-100 rounded-2xl block hover:bg-pastel-200"><h3 class="font-bold text-xl">Dubai, UAE</h3><p class="text-sm text-pastel-600 mt-1">Corporate Emcee & Luxury Gala Host</p></a>
    <a href="/locations/singapore" class="p-6 bg-pastel-100 rounded-2xl block hover:bg-pastel-200"><h3 class="font-bold text-xl">Singapore</h3><p class="text-sm text-pastel-600 mt-1">Master of Ceremonies & D&D Host</p></a>
    <a href="/locations/malaysia" class="p-6 bg-pastel-100 rounded-2xl block hover:bg-pastel-200"><h3 class="font-bold text-xl">Kuala Lumpur, Malaysia</h3><p class="text-sm text-pastel-600 mt-1">Corporate D&D Emcee</p></a>
  </div>
</div>`,
  },
  {
    path: '/locations/chennai',
    title: 'Best Wedding Anchor in Chennai | Corporate Event Emcee Deepika',
    description: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu with 12+ years experience.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/chennai',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'Person'],
        ...CANONICAL_PERSON,
        description: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu with 12+ years experience.',
        url: 'https://www.emceedeepika.com/locations/chennai',
        areaServed: { '@type': 'AdministrativeArea', name: 'Chennai, Tamil Nadu' },
        review: [
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Kavitha & Arvind Ramanathan' },
            reviewBody: 'Deepika was the heartbeat of our wedding reception! Her effortless transitions between Tamil and English made our grandparents and overseas friends equally engaged. Our guests are still talking about how fun our sangeet was!',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Suresh Narayanan' },
            reviewBody: 'Deepika brought the exact international executive poise and sharp timing our corporate leadership conference needed. Flawless VIP moderation and keeping a room of 800+ attendees completely attentive.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
          {
            '@type': 'Review',
            author: { '@type': 'Person', name: 'Pooja & Rohan Mehta' },
            reviewBody: 'Hosting a destination sangeet on ECR with guests flying in from Mumbai and the US required someone with unmatched stage energy. Deepika kept the dance floor packed and orchestrated our family entries perfectly.',
            reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          },
        ],
      },
      {
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
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.emceedeepika.com' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.emceedeepika.com/locations' },
          { '@type': 'ListItem', position: 3, name: 'Chennai', item: 'https://www.emceedeepika.com/locations/chennai' },
        ],
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
    <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-xs font-medium text-pastel-600">
      <a href="/" class="hover:text-pastel-900 transition-colors">Home</a>
      <span>/</span>
      <a href="/locations" class="hover:text-pastel-900 transition-colors">Locations</a>
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
        <a href="https://wa.me/918056958856?text=Hi%20Deepika%2C%20I%20am%20inquiring%20about%20booking%20you%20as%20an%20event%20emcee%20in%20Chennai" class="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all shadow-md inline-block">
          WhatsApp Direct Desk
        </a>
      </div>
    </div>
  </section>

  <section class="bg-pastel-800 text-pastel-50 py-8 px-4 sm:px-6 lg:px-8">
    <div class="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
      <div>
        <span class="block text-3xl font-serif font-bold text-gold-light">1,200+</span>
        <span class="text-xs text-pastel-200 uppercase tracking-wider">Events in Chennai & Region</span>
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
          <p class="text-pastel-700 text-sm mt-2">A bilingual anchor ensures seamless communication across diverse audiences, bridging cultural warmth in Tamil with corporate and modern elegance in English. In Chennai, weddings and conferences often host a blend of local families, North Indian guests, and global delegates — Deepika ensures nobody feels alienated.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">What types of venues and locations does Deepika cover in Chennai & Tamil Nadu?</h3>
          <p class="text-pastel-700 text-sm mt-2">Deepika regularly anchors events at iconic luxury venues including ITC Grand Chola, The Leela Palace Chennai, Taj Coromandel, Taj Fisherman’s Cove on ECR, and Chennai Trade Centre. She also travels across Tamil Nadu for destination celebrations in Coimbatore, Madurai, and Mahabalipuram.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">How does Deepika manage cross-cultural weddings (e.g., Tamil-Marwari or South-North unions)?</h3>
          <p class="text-pastel-700 text-sm mt-2">With native fluency in Tamil, English, Hindi, and Marwari, Deepika is one of India’s most sought-after emcees for inter-cultural weddings. She customizes the script to honor both sets of traditions, explains rituals contextually, and creates unified celebrations where everyone celebrates together.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">What is the pricing structure and how are emcee fees determined?</h3>
          <p class="text-pastel-700 text-sm mt-2">Emcee pricing depends on event format (single evening reception, corporate gala, full-day conference, or multi-day wedding), travel requirements, and preparation scope. Direct bespoke quotes with clear deliverables are provided within 6 hours of receiving your event details.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">How far in advance should I book an event anchor in Chennai?</h3>
          <p class="text-pastel-700 text-sm mt-2">Due to high demand during prime Muhurtham dates (Tamil wedding seasons) and corporate conference peaks (Q3/Q4), booking 2 to 4 months in advance is recommended. Last-minute inquiries can occasionally be accommodated depending on calendar openings.</p>
        </div>
        <div class="bg-pastel-50 p-6 rounded-2xl border border-pastel-200">
          <h3 class="font-serif text-lg font-bold text-pastel-900">What audio and technical setup does Deepika require on stage?</h3>
          <p class="text-pastel-700 text-sm mt-2">Deepika provides a streamlined technical rider to your AV team: typically two professional UHF wireless cordless microphones (Shure/Sennheiser), dedicated stage monitoring, and basic stage coordination briefing prior to doors opening.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="py-12 max-w-4xl mx-auto px-4 text-center">
    <h2 class="font-serif text-2xl sm:text-3xl font-bold text-pastel-900">Contact Chennai Booking Desk</h2>
    <p class="text-pastel-600 text-sm mt-2">Phone: <a href="tel:+918056958856" class="hover:underline font-semibold">+91 80569 58856</a> | Email: <a href="mailto:dishajain395@gmail.com" class="hover:underline font-semibold">dishajain395@gmail.com</a></p>
  </section>
</div>`,
  },
  {
    path: '/locations/dubai',
    title: 'Corporate Emcee Dubai | Gala Dinner & Event Host | Deepika Jain',
    description: 'Hire top corporate emcee in Dubai & UAE. Deepika Jain delivers world-class event hosting, gala dinner emcee services, trade shows & product launch hosting.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/dubai',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'Person'],
        ...CANONICAL_PERSON,
        url: 'https://www.emceedeepika.com/locations/dubai',
        areaServed: { '@type': 'AdministrativeArea', name: 'Dubai, United Arab Emirates' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.emceedeepika.com' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.emceedeepika.com/locations' },
          { '@type': 'ListItem', position: 3, name: 'Dubai', item: 'https://www.emceedeepika.com/locations/dubai' },
        ],
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4 pt-4 pb-2">
    <nav aria-label="Breadcrumb" class="text-xs text-pastel-600 flex gap-2">
      <a href="/">Home</a><span>/</span><a href="/locations">Locations</a><span>/</span><span class="text-pastel-900 font-bold">Dubai</span>
    </nav>
  </div>
  <section class="py-16 text-center max-w-4xl mx-auto px-4 space-y-6">
    <h1 class="font-serif text-3xl sm:text-5xl font-bold text-pastel-900">Top Corporate Emcee & Gala Dinner Host in Dubai, UAE</h1>
    <p class="text-pastel-700 text-lg">Delivering international polish, high-energy stage presence, and VIP crowd control for luxury corporate galas and destination events in Dubai.</p>
    <div class="pt-4 flex justify-center gap-4">
      <a href="/contact" class="bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-semibold">Check Dubai Availability</a>
      <a href="tel:+918056958856" class="border border-pastel-400 px-7 py-3.5 rounded-full font-semibold">+91 80569 58856</a>
    </div>
  </section>
</div>`,
  },
  {
    path: '/locations/malaysia',
    title: 'Corporate Emcee Kuala Lumpur | D&D Emcee Malaysia | Deepika Jain',
    description: 'Book top corporate emcee in Kuala Lumpur, Malaysia. Deepika Jain specializes in Dinner & Dance (D&D) emcee hosting, gala dinners & multi-lingual corporate events.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/malaysia',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'Person'],
        ...CANONICAL_PERSON,
        url: 'https://www.emceedeepika.com/locations/malaysia',
        areaServed: { '@type': 'AdministrativeArea', name: 'Kuala Lumpur, Malaysia' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.emceedeepika.com' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.emceedeepika.com/locations' },
          { '@type': 'ListItem', position: 3, name: 'Kuala Lumpur', item: 'https://www.emceedeepika.com/locations/malaysia' },
        ],
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4 pt-4 pb-2">
    <nav aria-label="Breadcrumb" class="text-xs text-pastel-600 flex gap-2">
      <a href="/">Home</a><span>/</span><a href="/locations">Locations</a><span>/</span><span class="text-pastel-900 font-bold">Malaysia</span>
    </nav>
  </div>
  <section class="py-16 text-center max-w-4xl mx-auto px-4 space-y-6">
    <h1 class="font-serif text-3xl sm:text-5xl font-bold text-pastel-900">Leading Corporate & D&D Emcee in Kuala Lumpur, Malaysia</h1>
    <p class="text-pastel-700 text-lg">Creating vibrant, elegant, and unforgettable atmospheres for corporate Dinner & Dance (D&D), annual galas, and international conferences across Malaysia.</p>
    <div class="pt-4 flex justify-center gap-4">
      <a href="/contact" class="bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-semibold">Check Malaysia Availability</a>
      <a href="tel:+918056958856" class="border border-pastel-400 px-7 py-3.5 rounded-full font-semibold">+91 80569 58856</a>
    </div>
  </section>
</div>`,
  },
  {
    path: '/locations/singapore',
    title: 'Professional Emcee Singapore | Corporate D&D & Gala Host | Deepika Jain',
    description: 'Hire premier corporate emcee in Singapore. Deepika Jain is a renowned Master of Ceremonies for company D&D, galas, product launches & international summits.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/singapore',
    schemas: [
      {
        '@context': 'https://schema.org',
        '@type': ['LocalBusiness', 'Person'],
        ...CANONICAL_PERSON,
        url: 'https://www.emceedeepika.com/locations/singapore',
        areaServed: { '@type': 'AdministrativeArea', name: 'Singapore' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.emceedeepika.com' },
          { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.emceedeepika.com/locations' },
          { '@type': 'ListItem', position: 3, name: 'Singapore', item: 'https://www.emceedeepika.com/locations/singapore' },
        ],
      },
    ],
    prerenderBody: `
<div class="pt-24 pb-16">
  <div class="max-w-6xl mx-auto px-4 pt-4 pb-2">
    <nav aria-label="Breadcrumb" class="text-xs text-pastel-600 flex gap-2">
      <a href="/">Home</a><span>/</span><a href="/locations">Locations</a><span>/</span><span class="text-pastel-900 font-bold">Singapore</span>
    </nav>
  </div>
  <section class="py-16 text-center max-w-4xl mx-auto px-4 space-y-6">
    <h1 class="font-serif text-3xl sm:text-5xl font-bold text-pastel-900">Premier Corporate Emcee & Master of Ceremonies in Singapore</h1>
    <p class="text-pastel-700 text-lg">Combining corporate protocol precision with engaging entertainment for executive galas, corporate D&D nights, and global conventions in Singapore.</p>
    <div class="pt-4 flex justify-center gap-4">
      <a href="/contact" class="bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-semibold">Check Singapore Availability</a>
      <a href="tel:+918056958856" class="border border-pastel-400 px-7 py-3.5 rounded-full font-semibold">+91 80569 58856</a>
    </div>
  </section>
</div>`,
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

  // Inject Structured Data (JSON-LD) with id="json-ld-schema" so client-side hydration reconciles cleanly
  if (route.schemas && route.schemas.length > 0) {
    const jsonLdContent = route.schemas.length === 1 ? route.schemas[0] : route.schemas;
    const scriptTag = `<script id="json-ld-schema" type="application/ld+json">${JSON.stringify(jsonLdContent)}</script>`;
    html = html.replace('</head>', `    ${scriptTag}\n  </head>`);
  }

  // Inject Prerendered HTML Body into <div id="root"></div>
  if (route.prerenderBody) {
    html = html.replace('<div id="root"></div>', `<div id="root">${route.prerenderBody}</div>`);
  }

  // Path 1: dist/route/index.html (e.g. dist/locations/chennai/index.html)
  if (route.path !== '/') {
    const routeDir = path.join(distDir, route.path);
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    const indexPath = path.join(routeDir, 'index.html');
    fs.writeFileSync(indexPath, html, 'utf8');

    // Path 2: dist/route.html (e.g. dist/about.html)
    const htmlFilePath = path.join(distDir, `${route.path}.html`);
    const htmlFileDir = path.dirname(htmlFilePath);
    if (!fs.existsSync(htmlFileDir)) {
      fs.mkdirSync(htmlFileDir, { recursive: true });
    }
    fs.writeFileSync(htmlFilePath, html, 'utf8');
  } else {
    // Root index.html
    fs.writeFileSync(templatePath, html, 'utf8');
  }

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
      <a href="/locations" class="bg-pastel-100 text-pastel-800 border border-pastel-300 px-6 py-3 rounded-full font-semibold text-sm">Locations Hub</a>
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
