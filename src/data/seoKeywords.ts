export interface LocationSEOData {
  slug: string;
  city: string;
  country: string;
  countryCode: string;
  region: string;
  dominantTerm: string;
  metaTitle: string;
  metaDescription: string;
  h1Title: string;
  subtitle: string;
  primaryKeywords: string[];
  secondaryKeywords: string[];
  faqs: { question: string; answer: string }[];
  marketContext: string;
  venueHighlight: string;
  languageHighlight: string;
  venues: string[];
  localStats: {
    localEvents: string;
    globalEvents: string;
    experience: string;
    languages: string;
  };
  eventFormats: { title: string; desc: string }[];
  testimonials: {
    name: string;
    role: string;
    event: string;
    venue: string;
    quote: string;
    rating: number;
  }[];
}

export const locationSeoMap: Record<string, LocationSEOData> = {
  chennai: {
    slug: 'chennai',
    city: 'Chennai',
    country: 'India',
    countryCode: 'IN',
    region: 'Tamil Nadu',
    dominantTerm: 'Anchor / Tamil English Bilingual Host',
    metaTitle: 'Best Wedding Anchor in Chennai | Corporate Event Emcee Deepika',
    metaDescription: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu with 12+ years experience.',
    h1Title: 'Premier Wedding Anchor & Corporate Emcee in Chennai',
    subtitle: 'Bringing charisma, seamless crowd engagement, and fluent bilingual mastery (English & Tamil) to luxury celebrations, sangeet nights & corporate summits across South India.',
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
    marketContext: 'Chennai and Tamil Nadu celebrations blend rich cultural rituals with cosmopolitan elegance. As a native bilingual anchor fluent in both Tamil and English (along with Hindi, Marwari, and Telugu), Deepika bridges family traditions and lively modern celebration, ensuring every guest feels deeply involved.',
    venueHighlight: 'Whether orchestrating complex protocol for South India tech conventions at Chennai Trade Centre or elevating grand celebrations at The Leela Palace, Deepika ensures a memorable, world-class experience.',
    languageHighlight: 'Native Tamil & English command, combined with Hindi, Marwari, and Telugu to unite cross-regional families and multinational corporate attendees.',
    venues: [
      'ITC Grand Chola (Guindy)',
      'The Leela Palace (MRC Nagar)',
      'Taj Coromandel (Nungambakkam)',
      'Taj Fisherman’s Cove Resort & Spa (ECR)',
      'Vivanta Chennai & Connemara',
      'Feathers Hotel (Manapakkam)',
      'Chennai Trade Centre (Nandambakkam)',
      'InterContinental Chennai Mahabalipuram',
    ],
    localStats: {
      localEvents: '1,200+',
      globalEvents: '2,500+',
      experience: '12+ Years',
      languages: '5 Languages (Tamil, English, Hindi, Marwari, Telugu)',
    },
    eventFormats: [
      {
        title: 'Luxury Wedding Receptions & Sangeets',
        desc: 'Custom grand couple entries, seamless protocol for traditional Varmala and Muhurtham rituals, high-voltage sangeet choreography hosting, and multilingual guest icebreakers.',
      },
      {
        title: 'Corporate Tech Galas & Annual Summits',
        desc: 'Commanding C-suite stage presence across Chennai’s IT Corridor (OMR/Guindy), keynote speaker introductions, live Q&A moderation, and prestigious annual award ceremonies.',
      },
      {
        title: 'Cross-Cultural & Destination Celebrations',
        desc: 'Specialist in bridging North-South, Tamil-Marwari, and NRI wedding unions, ensuring both families enjoy authentic warmth, effortless jokes, and culturally respectful ceremony flow.',
      },
      {
        title: 'Product Launches & Brand Activations',
        desc: 'High-energy brand unveilings, dealer meets, press conferences, and media meets with sharp timing, quick wit, and professional teleprompter/cue card mastery.',
      },
    ],
    testimonials: [
      {
        name: 'Kavitha & Arvind Ramanathan',
        role: 'Bride & Groom',
        event: 'Cross-Cultural Reception & Sangeet',
        venue: 'The Leela Palace, Chennai',
        quote: 'Deepika was the heartbeat of our wedding reception! Her effortless transitions between Tamil and English made our grandparents and overseas friends equally engaged. Our guests are still talking about how fun our sangeet was!',
        rating: 5,
      },
      {
        name: 'Suresh Narayanan',
        role: 'Director of Marketing, TechCorp India',
        event: 'Annual Leadership Gala & Awards Night',
        venue: 'ITC Grand Chola, Chennai',
        quote: 'Deepika brought the exact international executive poise and sharp timing our corporate leadership conference needed. Flawless VIP moderation and keeping a room of 800+ attendees completely attentive.',
        rating: 5,
      },
      {
        name: 'Pooja & Rohan Mehta',
        role: 'Couple & Family Hosts',
        event: 'Grand Sangeet & Haldi Celebration',
        venue: 'Taj Fisherman’s Cove, ECR Chennai',
        quote: 'Hosting a destination sangeet on ECR with guests flying in from Mumbai and the US required someone with unmatched stage energy. Deepika kept the dance floor packed and orchestrated our family entries perfectly.',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'Why hire a bilingual Tamil-English anchor in Chennai?',
        answer: 'A bilingual anchor ensures seamless communication across diverse audiences, bridging cultural warmth in Tamil with corporate and modern elegance in English. In Chennai, weddings and conferences often host a blend of local families, North Indian guests, and global delegates — Deepika ensures nobody feels alienated.',
      },
      {
        question: 'What types of venues and locations does Deepika cover in Chennai & Tamil Nadu?',
        answer: 'Deepika regularly anchors events at iconic luxury venues including ITC Grand Chola, The Leela Palace Chennai, Taj Coromandel, Taj Fisherman’s Cove on ECR, and Chennai Trade Centre. She also travels across Tamil Nadu for destination celebrations in Coimbatore, Madurai, and Mahabalipuram.',
      },
      {
        question: 'How does Deepika manage cross-cultural weddings (e.g., Tamil-Marwari or South-North unions)?',
        answer: 'With native fluency in Tamil, English, Hindi, and Marwari, Deepika is one of India’s most sought-after emcees for inter-cultural weddings. She customizes the script to honor both sets of traditions, explains rituals contextually, and creates unified celebrations where everyone celebrates together.',
      },
      {
        question: 'What is the pricing structure and how are emcee fees determined?',
        answer: 'Emcee pricing depends on event format (single evening reception, corporate gala, full-day conference, or multi-day wedding), travel requirements, and preparation scope. Direct bespoke quotes with clear deliverables are provided within 6 hours of receiving your event details.',
      },
      {
        question: 'How far in advance should I book an event anchor in Chennai?',
        answer: 'Due to high demand during prime Muhurtham dates (Tamil wedding seasons) and corporate conference peaks (Q3/Q4), booking 2 to 4 months in advance is recommended. Last-minute inquiries can occasionally be accommodated depending on calendar openings.',
      },
      {
        question: 'What audio and technical setup does Deepika require on stage?',
        answer: 'Deepika provides a streamlined technical rider to your AV team: typically two professional UHF wireless cordless microphones (Shure/Sennheiser), dedicated stage monitoring, and basic stage coordination briefing prior to doors opening.',
      },
    ],
  },
  dubai: {
    slug: 'dubai',
    city: 'Dubai',
    country: 'United Arab Emirates',
    countryCode: 'AE',
    region: 'Dubai',
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
    marketContext: 'Dubai is the global epicenter for ultra-luxury corporate events, international trade summits, and destination weddings. Deepika brings effortless multinational stage command, diplomatic VIP protocol management, and vibrant gala hosting across the UAE.',
    venueHighlight: 'Whether hosting high-profile summits at Dubai World Trade Centre or orchestrating luxury gala evenings at Armani Hotel Burj Khalifa, Deepika delivers flawless international polish.',
    languageHighlight: 'Fluent international English and Hindi, with diplomatic poise for multicultural delegations, VIP protocol, and pan-Arab destination guests.',
    venues: [
      'Atlantis The Royal & Atlantis The Palm',
      'Burj Al Arab Jumeirah',
      'Dubai World Trade Centre (DWTC)',
      'Armani Hotel Dubai (Burj Khalifa)',
      'Madinat Jumeirah Conference Centre',
      'Ritz-Carlton Dubai DIFC',
      'Emirates Palace Mandarin Oriental (Abu Dhabi)',
    ],
    localStats: {
      localEvents: '350+',
      globalEvents: '2,500+',
      experience: '12+ Years',
      languages: 'English, Hindi, Tamil, Marwari',
    },
    eventFormats: [
      {
        title: 'Global Corporate Galas & Award Nights',
        desc: 'C-suite diplomatic hosting, partner recognitions, and gala dinners across Dubai’s premium luxury hospitality destinations.',
      },
      {
        title: 'International Summits & Expo Moderation',
        desc: 'Panel moderation, VIP speaker introductions, and live Q&A curation for fintech, real estate, and tech summits.',
      },
      {
        title: 'Luxury Destination Weddings in the UAE',
        desc: 'Royal Sangeets, cocktail soirees, and beachside receptions for NRI and international couples across Dubai, Abu Dhabi, and Ras Al Khaimah.',
      },
      {
        title: 'High-Impact Brand Launches',
        desc: 'Dynamic stage reveal choreography, executive product unveiling speeches, and media interviews for global luxury brands.',
      },
    ],
    testimonials: [
      {
        name: 'Sarah Mitchell',
        role: 'VP of Global Events, EMEA Summit Group',
        event: 'International Leadership Gala',
        venue: 'Armani Hotel Dubai (Burj Khalifa)',
        quote: 'Deepika’s energy is infectious! She didn’t just host our gala; she orchestrated an unforgettable experience for over 1,200 attendees in Dubai with true royal poise and immaculate timing.',
        rating: 5,
      },
      {
        name: 'Kabir & Alisha Singhania',
        role: 'Couple',
        event: 'Luxury Destination Wedding Reception',
        venue: 'Atlantis The Royal, Palm Jumeirah',
        quote: 'Deepika commanded our 800-guest sangeet and reception with breathtaking grace. Her multilingual warmth made all our international and NRI family members feel celebrated.',
        rating: 5,
      },
      {
        name: 'Fariq Al-Mansoor',
        role: 'Summit Director',
        event: 'Middle East Tech & FinTech Forum',
        venue: 'Dubai World Trade Centre (DWTC)',
        quote: 'Deepika moderated our ministerial panels and VIP gala with incredible sharpness, intelligence, and composure under tight broadcast timelines.',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'What makes Deepika a top choice for corporate emcee services in Dubai?',
        answer: 'Deepika brings extensive experience hosting international summits, luxury product launches, and gala dinners in Dubai with flawless protocol management and captivating stage presence.',
      },
      {
        question: 'Does Deepika handle destination weddings and regional events across the UAE?',
        answer: 'Yes, Deepika hosts luxury destination weddings, galas, and corporate summits in Dubai, Abu Dhabi, Ras Al Khaimah, and throughout the Middle East.',
      },
      {
        question: 'Can Deepika moderate panel discussions at conferences in Dubai?',
        answer: 'Absolutely. She is an experienced conference moderator skilled at facilitating engaging Q&As and keeping global summit panels on schedule.',
      },
      {
        question: 'What is the fee structure for hiring an emcee in Dubai and the UAE?',
        answer: 'Fees are tailored to the event format, session duration, and rehearsal commitments. Clear all-inclusive proposals including travel and technical coordination are shared within 6 hours.',
      },
      {
        question: 'How far in advance should events in Dubai be booked?',
        answer: 'Given the busy corporate and wedding season between October and April in the UAE, booking 3 to 6 months in advance is recommended to ensure calendar availability.',
      },
      {
        question: 'What AV technical rider does Deepika need for UAE venues?',
        answer: 'Standard international event specifications: two professional wireless handheld mics (Shure Axient or Sennheiser EW-D), active stage monitoring, and an AV tech run-through 60 minutes prior.',
      },
    ],
  },
  malaysia: {
    slug: 'malaysia',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    countryCode: 'MY',
    region: 'Kuala Lumpur',
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
    marketContext: 'In Malaysia, corporate celebrations center around the electric energy of annual Dinner & Dance (D&D) nights and regional conventions. Deepika delivers high-octane audience games, executive stage decorum, and seamless multicultural rapport.',
    venueHighlight: 'Whether electrifying annual Dinner & Dance celebrations at KLCC or anchoring executive awards at Mandarin Oriental Kuala Lumpur, Deepika keeps audience energy soaring.',
    languageHighlight: 'Fluent English with cultural resonance in Tamil, Hindi, and Malaysian multicultural nuances for corporate teams and multi-ethnic wedding celebrations.',
    venues: [
      'Kuala Lumpur Convention Centre (KLCC)',
      'Mandarin Oriental Kuala Lumpur',
      'W Kuala Lumpur',
      'Shangri-La Kuala Lumpur',
      'Sunway Resort Hotel & Convention Centre',
      'The Westin Desaru Coast Resort',
    ],
    localStats: {
      localEvents: '180+',
      globalEvents: '2,500+',
      experience: '12+ Years',
      languages: 'English, Tamil, Hindi',
    },
    eventFormats: [
      {
        title: 'Corporate Dinner & Dance (D&D)',
        desc: 'Interactive table games, themed team celebrations, costume awards, and dance floor igniters for multinational Malaysian companies.',
      },
      {
        title: 'Regional APAC Conferences & Expos',
        desc: 'Keynote pacing, summit agenda management, and seamless stage handover for regional tech and trade expos.',
      },
      {
        title: 'Grand Indian & Cross-Cultural Weddings',
        desc: 'Energetic sangeet nights, varmala ceremony coordination, and bilingual hosting bridging Indian and Malaysian traditions.',
      },
      {
        title: 'Annual Awards & Employee Gala Nights',
        desc: 'Prestigious award presentation pacing, executive citations, and celebratory recognition with dignity and fanfare.',
      },
    ],
    testimonials: [
      {
        name: 'Marcus Tan',
        role: 'HR & Events Lead, TechLogix Malaysia',
        event: 'Annual Dinner & Dance Gala',
        venue: 'KLCC, Kuala Lumpur',
        quote: 'Deepika was sensational! Her ability to energize 600 corporate employees and keep the momentum soaring throughout our D&D was world-class.',
        rating: 5,
      },
      {
        name: 'Divya & Harish Pillai',
        role: 'Bride & Groom',
        event: 'Cross-Border Wedding Reception',
        venue: 'Mandarin Oriental Kuala Lumpur',
        quote: 'Deepika brought the absolute best vibes to our wedding in KL! Our families from India and Malaysia felt completely united and entertained all night.',
        rating: 5,
      },
      {
        name: 'Syahril Azman',
        role: 'Corporate Communications Director',
        event: 'ASEAN FinTech Summit',
        venue: 'W Kuala Lumpur',
        quote: 'Deepika handled our international keynote sessions with extraordinary professionalism and smooth stage transitions. Highly recommended!',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'What is a D&D Emcee in Malaysia?',
        answer: 'A D&D (Dinner & Dance) emcee specializes in hosting annual corporate appreciation nights, combining formal award presentations with high-energy games, entertainment, and crowd interaction.',
      },
      {
        question: 'Is Deepika available for corporate events in Penang and Johor Bahru as well as KL?',
        answer: 'Yes! Deepika regularly travels across Malaysia, including Kuala Lumpur, Penang, and Johor Bahru for corporate galas and wedding celebrations.',
      },
      {
        question: 'How does Deepika manage multilingual Malaysian audiences?',
        answer: 'Deepika hosts primarily in international English with fluent integration of Tamil and Hindi, respecting multicultural corporate and social traditions throughout Malaysia.',
      },
      {
        question: 'What are the booking rates for corporate events in Malaysia?',
        answer: 'Pricing is based on full-day summit or evening D&D duration, venue location in Malaysia, and rehearsal schedule. A formal transparent quotation is provided within 6 hours.',
      },
      {
        question: 'How early should we secure Deepika for a D&D in Kuala Lumpur?',
        answer: 'Annual D&D season (November to February) books quickly across KL. Securing your date 2 to 4 months in advance is strongly advised.',
      },
      {
        question: 'What technical sound requirements are needed for a D&D night?',
        answer: 'Two high-grade cordless UHF handheld microphones, stage audio monitor wedges, and direct DJ/sound engineer coordination before guest arrivals.',
      },
    ],
  },
  singapore: {
    slug: 'singapore',
    city: 'Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    region: 'Singapore',
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
    marketContext: 'As Asia’s premier convention and financial hub, Singapore demands an emcee of exceptional articulate refinement, cultural versatility, and time-discipline. Deepika provides flawless stage stewardship for C-suite assemblies and grand company celebrations.',
    venueHighlight: 'Whether moderating global conventions at Marina Bay Sands or commanding grand celebrations at Resorts World Sentosa, Deepika brings unrivaled poise and precision.',
    languageHighlight: 'Crystal-clear international English delivery, with multicultural nuance for Singapore’s corporate and cosmopolitan audiences.',
    venues: [
      'Marina Bay Sands Expo & Convention Centre',
      'Resorts World Sentosa (RWS)',
      'The Fullerton Hotel Singapore',
      'Capella Singapore (Sentosa)',
      'Suntec Singapore Convention & Exhibition Centre',
      'Raffles Hotel Singapore',
    ],
    localStats: {
      localEvents: '220+',
      globalEvents: '2,500+',
      experience: '12+ Years',
      languages: 'English, Tamil, Hindi',
    },
    eventFormats: [
      {
        title: 'International Summits & C-Level Galas',
        desc: 'Sharp, sophisticated hosting for global delegates, diplomatic protocol, and VIP award presentations.',
      },
      {
        title: 'Company Dinner & Dance (D&D) Extravaganzas',
        desc: 'High-energy entertainment, corporate lucky draws, and employee recognition nights that foster community.',
      },
      {
        title: 'Luxury Destination Weddings in Sentosa',
        desc: 'Elegant island nuptials, grand ballroom banquets, and lively sangeet evenings with cross-cultural fluency.',
      },
      {
        title: 'Product Keynotes & Innovation Showcases',
        desc: 'Dynamic stage delivery, executive fireside chats, and smooth live Q&A moderation for tech giants.',
      },
    ],
    testimonials: [
      {
        name: 'Evelyn Lim',
        role: 'Head of Corporate Communications, FinGlobal APAC',
        event: 'Asia-Pacific Tech Summit',
        venue: 'Marina Bay Sands, Singapore',
        quote: 'Deepika was exceptionally poised, articulate, and adept at managing tight schedules with senior dignitaries. Truly one of the finest emcees in the region.',
        rating: 5,
      },
      {
        name: 'Siddharth & Priya Nair',
        role: 'Bride & Groom',
        event: 'Sentosa Island Wedding & Reception',
        venue: 'Capella Singapore',
        quote: 'Deepika was magnificent! She brought sophistication to our formal reception and electric excitement to our sangeet party. Every single guest complimented her hosting.',
        rating: 5,
      },
      {
        name: 'Jonathan Cheong',
        role: 'Managing Director, Asia Retail Conglomerate',
        event: 'Annual Corporate Gala & D&D',
        venue: 'The Fullerton Hotel Singapore',
        quote: 'Deepika struck the perfect balance between corporate prestige during our awards and pure fun during the dinner games. An absolute star host!',
        rating: 5,
      },
    ],
    faqs: [
      {
        question: 'Why choose Deepika as your corporate emcee in Singapore?',
        answer: 'Deepika provides a rare blend of executive sophistication, crisp delivery, and lively audience engagement tailored to Singapore’s multicultural and corporate landscape.',
      },
      {
        question: 'Does Deepika handle award ceremonies and gala dinners in Singapore?',
        answer: 'Yes, she is a sought-after Master of Ceremonies for high-profile award nights, company D&Ds at Marina Bay Sands and Resorts World Sentosa, and global tech summits.',
      },
      {
        question: 'Can Deepika host corporate Dinner & Dance (D&D) in Singapore?',
        answer: 'Yes! She specializes in D&D programs featuring interactive icebreakers, corporate lucky draws, best-dressed contests, and dance floor momentum.',
      },
      {
        question: 'What are the emcee rates for Singapore events?',
        answer: 'Rates depend on conference duration, dinner and dance programming, and pre-event script customization. Comprehensive bespoke proposals are delivered within 6 hours.',
      },
      {
        question: 'How early should Singapore clients book Deepika?',
        answer: 'Peak corporate gala and convention months (September through January) fill up fast. We recommend booking 2 to 4 months in advance.',
      },
      {
        question: 'What stage audio equipment is required for Singapore venues?',
        answer: 'Standard professional rider: two wireless UHF microphones (Shure ULX-D / Sennheiser), dedicated stage monitor, and a sound tech check 60 minutes before start.',
      },
    ],
  },
};
