export interface LocationSEOData {
  slug: string;
  city: string;
  country: string;
  dominantTerm: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  subtitle: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  faqs: { question: string; answer: string }[];
  marketContext: string;
}

export const locationSeoMap: Record<string, LocationSEOData> = {
  chennai: {
    slug: 'chennai',
    city: 'Chennai',
    country: 'India (Tamil Nadu)',
    dominantTerm: 'Anchor / Tamil English Bilingual Host',
    metaTitle: 'Best Wedding Anchor in Chennai | Corporate Event Emcee Deepika',
    metaDescription: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu.',
    h1Title: 'Premier Wedding Anchor & Corporate Emcee in Chennai',
    subtitle: 'Bringing charisma, seamless crowd engagement, and fluent bilingual mastery (English & Tamil) to luxury celebrations & corporate summits across South India.',
    primaryKeywords: [
      'anchor for wedding Chennai',
      'wedding anchor Chennai',
      'corporate anchor Chennai',
      'event anchor Chennai',
      'Tamil English bilingual anchor Chennai',
      'best anchor in Chennai',
    ],
    secondaryKeywords: [
      'hire anchor for corporate event Chennai',
      'reception anchor Chennai',
      'engagement anchor Chennai',
      'sangeet anchor Chennai',
      'celebrity anchor for events Chennai',
      'emcee Chennai',
    ],
    marketContext: 'In South India, particularly Chennai, search intent is heavily driven by the term "Anchor" rather than "Emcee". High demand revolves around bilingual Tamil-English hosting for high-profile weddings, sangeets, corporate launches, and galas.',
    faqs: [
      {
        question: 'Why hire a bilingual Tamil-English anchor in Chennai?',
        answer: 'A bilingual anchor ensures seamless communication across diverse audiences, bridging cultural warmth in Tamil with corporate elegance in English for weddings and international conferences.'
      },
      {
        question: 'What types of events does Deepika anchor in Chennai and Tamil Nadu?',
        answer: 'Deepika hosts luxury wedding receptions, sangeet ceremonies, high-net-worth corporate product launches, tech summits, and gala awards across Chennai, Coimbatore, and Mahabalipuram.'
      },
      {
        question: 'How far in advance should I book an event anchor in Chennai?',
        answer: 'Due to high demand during peak wedding and corporate conference seasons, booking 2 to 4 months in advance is highly recommended.'
      }
    ]
  },
  dubai: {
    slug: 'dubai',
    city: 'Dubai',
    country: 'UAE & Middle East',
    dominantTerm: 'Corporate Emcee / Luxury Event Host',
    metaTitle: 'Corporate Emcee Dubai | Gala Dinner & Event Host | Deepika Jain',
    metaDescription: 'Hire top corporate emcee in Dubai & UAE. Deepika Jain delivers world-class event hosting, gala dinner emcee services, trade shows & product launch hosting.',
    h1Title: 'Top Corporate Emcee & Gala Dinner Host in Dubai, UAE',
    subtitle: 'Delivering international polish, high-energy stage presence, and VIP crowd control for luxury corporate galas, trade shows, and destination events in Dubai.',
    primaryKeywords: [
      'emcee Dubai',
      'corporate emcee Dubai',
      'event host Dubai',
      'hire emcee Dubai',
      'wedding MC Dubai',
      'gala dinner emcee Dubai',
      'bilingual emcee Dubai English Arabic',
    ],
    secondaryKeywords: [
      'best emcee in Dubai',
      'conference moderator Dubai',
      'product launch host Dubai',
      'brand activation host Dubai',
      'celebrity emcee Dubai',
      'emcee for corporate event UAE',
    ],
    marketContext: 'Dubai is a global hub for ultra-luxury corporate events, trade shows, and international destination weddings. High intent targets premium corporate emcees with fluent international presentation standards.',
    faqs: [
      {
        question: 'What makes Deepika a top choice for corporate emcee services in Dubai?',
        answer: 'Deepika brings extensive experience hosting international summits, luxury product launches, and gala dinners in Dubai with flawless protocol management and captivating stage presence.'
      },
      {
        question: 'Does Deepika handle destination weddings and regional events across the UAE?',
        answer: 'Yes, Deepika hosts luxury destination weddings, galas, and corporate summits in Dubai, Abu Dhabi, Ras Al Khaimah, and throughout the Middle East.'
      },
      {
        question: 'Can Deepika moderate panel discussions at conferences in Dubai?',
        answer: 'Absolutely. She is an experienced conference moderator skilled at facilitating engaging Q&As and keeping global summit panels on schedule.'
      }
    ]
  },
  malaysia: {
    slug: 'malaysia',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    dominantTerm: 'Corporate D&D Emcee & Event Host',
    metaTitle: 'Corporate Emcee Kuala Lumpur | D&D Emcee Malaysia | Deepika Jain',
    metaDescription: 'Book top corporate emcee in Kuala Lumpur, Malaysia. Deepika Jain specializes in Dinner & Dance (D&D) emcee hosting, gala dinners & multi-lingual corporate events.',
    h1Title: 'Leading Corporate & D&D Emcee in Kuala Lumpur, Malaysia',
    subtitle: 'Creating vibrant, elegant, and unforgettable atmospheres for corporate Dinner & Dance (D&D), annual galas, and international conferences across Malaysia.',
    primaryKeywords: [
      'emcee Kuala Lumpur',
      'emcee Malaysia',
      'corporate emcee KL',
      'D&D emcee Malaysia',
      'dinner and dance emcee KL',
      'bilingual emcee Malaysia English Malay',
      'wedding emcee Malaysia',
    ],
    secondaryKeywords: [
      'hire MC Malaysia',
      'product launch emcee Malaysia',
      'gala dinner emcee Kuala Lumpur',
      'best emcee in KL',
      'emcee for conference Malaysia',
      'celebrity emcee Malaysia',
    ],
    marketContext: 'In Malaysia (KL), corporate event searches rely heavily on "D&D Emcee" (Dinner & Dance), along with demand for multi-lingual fluency (English, Malay, Mandarin, Tamil).',
    faqs: [
      {
        question: 'What is a D&D Emcee in Malaysia?',
        answer: 'A D&D (Dinner & Dance) emcee specializes in hosting annual corporate appreciation nights, combining formal award presentations with high-energy games, entertainment, and crowd interaction.'
      },
      {
        question: 'Is Deepika available for corporate events in Penang and Johor Bahru as well as KL?',
        answer: 'Yes! Deepika regularly travels across Malaysia, including Kuala Lumpur, Penang, and Johor Bahru for corporate galas and wedding celebrations.'
      }
    ]
  },
  singapore: {
    slug: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    dominantTerm: 'Master of Ceremonies / Corporate D&D Host',
    metaTitle: 'Professional Emcee Singapore | Corporate D&D & Gala Host | Deepika Jain',
    metaDescription: 'Hire premier corporate emcee in Singapore. Deepika Jain is a renowned Master of Ceremonies for company D&D, galas, product launches & international summits.',
    h1Title: 'Premier Corporate Emcee & Master of Ceremonies in Singapore',
    subtitle: 'Combining corporate protocol precision with engaging entertainment for executive galas, corporate D&D nights, and global conventions in Singapore.',
    primaryKeywords: [
      'emcee Singapore',
      'corporate emcee Singapore',
      'D&D emcee Singapore',
      'dinner and dance emcee Singapore',
      'gala dinner emcee Singapore',
      'bilingual emcee Singapore English Mandarin',
      'wedding emcee Singapore',
    ],
    secondaryKeywords: [
      'award night emcee Singapore',
      'conference emcee Singapore',
      'hire MC Singapore',
      'master of ceremonies Singapore',
      'best emcee Singapore',
      'emcee for company D&D Singapore',
    ],
    marketContext: 'Singapore is Asia-Pacific’s top corporate summit and gala destination. Clients search for highly refined Masters of Ceremonies capable of hosting C-suite audiences, D&D celebrations, and tech summits.',
    faqs: [
      {
        question: 'Why choose Deepika as your corporate emcee in Singapore?',
        answer: 'Deepika provides a rare blend of executive sophistication, crisp delivery, and lively audience engagement tailored to Singapore’s multicultural and corporate landscape.'
      },
      {
        question: 'Does Deepika handle award ceremonies and gala dinners in Singapore?',
        answer: 'Yes, she is a sought-after Master of Ceremonies for high-profile award nights, company D&Ds at Marina Bay Sands and Resorts World Sentosa, and global tech summits.'
      }
    ]
  }
};
