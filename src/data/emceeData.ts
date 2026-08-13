import { ServiceItem, Testimonial, GalleryItem } from '../types';

export const STATS = [
  { label: 'Years Experience', value: '12+', subtitle: 'Mastering the Stage' },
  { label: 'Global Shows', value: '100+', subtitle: 'Across 15+ Countries' },
  { label: 'Languages Spoken', value: '4', subtitle: 'English, Hindi, Marwari, Tamil' },
  { label: 'Audience Reached', value: '500K+', subtitle: 'Energized Guests Worldwide' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-host',
    title: 'Luxury Wedding Host',
    category: 'wedding',
    shortDesc: 'From sangeet to reception, Deepika weaves cultural tradition with modern flow.',
    fullDesc: 'From the high-energy chaos of a sangeet to the polish of a reception gala, Deepika weaves cultural tradition with modern flow — custom scripts, multilingual guest warm-up, and a seamless royal entry for every function. For multi-language, multi-generation guest lists, having one host who can move naturally between English, Hindi, Marwari, and Tamil means no guest is left out of the moment.',
    iconName: 'Heart',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200',
    features: ['Custom Sangeet & Reception Scripts', 'Multilingual Guest Warm-up', 'Seamless Royal Entry', 'Cross-Generational Engagement'],
    subEvents: [
      'Haldi Carnival',
      'Varmala Ceremony',
      'Baraat & Baraat on Wheels',
      'High-Energy Sangeet Night',
      'Mayra / Maira Function',
      'Milni Protocol',
      'Ring Ceremony / Engagement',
      'Grand Reception Gala',
      'Mehndi & Pool Party Warm-up',
      'Cocktail & Sundowner Night'
    ],
    link: '/services/wedding-emcee',
    linkText: 'Learn more about wedding emcee services →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'corporate-presenter',
    title: 'Corporate Event Hosting',
    category: 'corporate',
    shortDesc: 'Galas, award nights, product launches, and tech summits all run on sharp timing.',
    fullDesc: 'Galas, award nights, product launches, and tech summits all run on the same thing: sharp timing and a host who won\'t let the agenda drift. Deepika handles brand storytelling, panel moderation, and live Q&A with the protocol and polish a corporate stage demands, keeping sponsors, speakers, and schedules aligned.',
    iconName: 'Briefcase',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800',
    features: ['Brand Storytelling', 'Panel Moderation', 'Live Q&A Management', 'Executive & Sponsor Protocol'],
    subEvents: [
      'Corporate Galas & Dinners',
      'Product & Brand Launches',
      'Leadership & Tech Summits',
      'Town Halls & Annual Meets',
      'Panel Moderation & Q&A',
      'Dealer & Partner Meets'
    ],
    link: '/services/corporate-event-emcee',
    linkText: 'Learn more about corporate event hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'celebrity-host',
    title: 'Celebrity & Red Carpet Hosting',
    category: 'celebrity',
    shortDesc: 'Red carpets and press conferences move fast and rarely go to script.',
    fullDesc: 'Red carpets and press conferences move fast and rarely go to script. Deepika brings quick wit, VIP-stage awareness, and the composure to interview high-profile guests on the spot — without losing the room\'s energy between arrivals.',
    iconName: 'Star',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800',
    features: ['Quick Wit Under Pressure', 'VIP-Stage Awareness', 'On-the-Spot VIP Interviews', 'Red Carpet Crowd Energy'],
    subEvents: [
      'Red Carpet Gala Arrivals',
      'Movie & Music Launches',
      'Press Conferences & Media Meets',
      'Fashion Shows & Pageants',
      'VIP Fan Interactions'
    ],
    link: '#',
    linkText: 'Learn more about celebrity hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'virtual-events',
    title: 'Virtual & Hybrid Global Summits',
    category: 'virtual',
    shortDesc: 'Studio-grade hosting for events where half the audience is in the room and half is on a screen.',
    fullDesc: 'Studio-grade hosting for events where half the audience is in the room and half is on a screen. Live polling, multi-timezone coordination, and platform-savvy delivery keep remote attendees as engaged as the people in the seats.',
    iconName: 'Video',
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&q=80&w=1200',
    features: ['Studio-Grade Presentation', 'Multi-Timezone Coordination', 'Live Polling & Engagement', 'Platform-Savvy Delivery'],
    subEvents: [
      'Global Hybrid Conferences',
      'Virtual Award Ceremonies',
      'Live Streamed Webinars & Fireside Chats',
      'Interactive Product Keynotes'
    ],
    link: '#',
    linkText: 'Learn more about virtual event hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'award-shows',
    title: 'Award Shows & Recognition Events',
    category: 'award',
    shortDesc: 'Award nights live or die on pacing — keeping podium moments sharp and crowd warm.',
    fullDesc: 'Award nights live or die on pacing — too slow and the room checks out, too fast and the honorees get lost. Deepika keeps the podium moments sharp and the crowd segments warm, with the timing to move between the two without dead air.',
    iconName: 'Trophy',
    image: '/images/deepika/deepika-6.webp',
    features: ['Sharp Podium Timing', 'Honoree Recognition Protocol', 'Warm Crowd Engagement', 'Zero Dead Air Flow'],
    subEvents: [
      'Corporate Excellence Awards',
      'Industry & Trade Recognition Nights',
      'Gala Award Banquets',
      'Employee Recognition Shows'
    ],
    link: '/services/award-show-emcee',
    linkText: 'Learn more about award show hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'birthday-host',
    title: 'Birthday Party & Celebration Hosting',
    category: 'birthday',
    shortDesc: 'Milestone birthdays deserve the same preparation as a stage of a thousand.',
    fullDesc: 'Milestone birthdays deserve the same preparation as a stage of a thousand, just with a different energy. Whether it\'s an intimate family gathering or a large celebration, Deepika brings a personal, unscripted style that keeps things genuinely fun rather than formal.',
    iconName: 'Sparkles',
    image: '/images/deepika/deepika-5.webp',
    features: ['Milestone Birthday Planning', 'Personal Unscripted Style', 'Intimate & Large Gathering Flow', 'Genuinely Fun Atmosphere'],
    subEvents: [
      'Milestone 50th / 60th / 80th Birthdays',
      'Silver & Golden Anniversary Celebrations',
      'Theme Parties & Gala Dinners',
      'Kid & Teen Grand Milestone Parties'
    ],
    link: '/services/birthday-emcee',
    linkText: 'Learn more about birthday & celebration hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'private-festival',
    title: 'Private & Festival Events',
    category: 'private',
    shortDesc: 'From private family gatherings to festival celebrations for diaspora audiences abroad.',
    fullDesc: 'From private family gatherings to festival celebrations — Diwali, Navratri, Onam, Eid — for diaspora audiences abroad, Deepika hosts with a cultural fluency that generic event hosts can\'t offer, especially for Dubai, Singapore, and Malaysia-based communities marking festivals far from home.',
    iconName: 'Globe',
    image: '/images/deepika/deepika-4.webp',
    features: ['Diwali, Navratri, Onam & Eid Hosting', 'Diaspora Community Connection', 'Dubai, Singapore & Malaysia Expertise', 'Rich Cultural Fluency'],
    subEvents: [
      'Diwali & New Year Galas',
      'Navratri & Dandiya Nights',
      'Onam & Eid Cultural Evenings',
      'Private Family Reunions & Soirees'
    ],
    link: '/services',
    linkText: 'Learn more about private & festival hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'government-events',
    title: 'State & Civic Ceremonies Hosting',
    category: 'state-civic',
    shortDesc: 'Official state ceremonies, diplomatic summits, and public inaugurations with strict protocol.',
    fullDesc: 'Official civic gatherings, cultural inaugurations, diplomatic summits, and public ceremonies demanding clear bi/multilingual dignitary announcements and dignified stage presence. Deepika executes VIP introductions and formal address handovers with supreme decorum.',
    iconName: 'ShieldCheck',
    image: '/images/deepika/deepika-1.webp',
    features: ['Dignitary Protocol & Etiquette', 'Multilingual Formal Announcements', 'State & Cultural Ceremonies', 'Impeccable Stage Decorum'],
    subEvents: [
      'State & Ministerial Summits',
      'Inaugurations & Foundation Ceremonies',
      'Diplomatic Delegations & Expos',
      'Civic Award Functions',
      'Public Cultural Festivals & Vigils'
    ],
    link: '/services',
    linkText: 'Learn more about state & civic event hosting →',
    colSpan: 'md:col-span-6',
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower & Milestone Hosting',
    category: 'family',
    shortDesc: 'Warm, joyous hosting for baby showers, Godh Bharai, and naming ceremonies.',
    fullDesc: 'Celebrating new beginnings with heart, humor, and family-first warmth. From traditional Godh Bharai and Seemantham rituals to modern gender-neutral baby showers and Naming Ceremonies (Namkaran), Deepika creates an inclusive, joy-filled atmosphere where family and guests of all ages feel cherished.',
    iconName: 'Heart',
    image: '/images/deepika/deepika-3.webp',
    features: ['Godh Bharai & Seemantham Rituals', 'Interactive Family Games', 'Naming Ceremony (Namkaran) Flow', 'Warm & Joyous Atmosphere'],
    subEvents: [
      'Traditional Godh Bharai / Seemantham',
      'Modern Baby Shower Celebrations',
      'Naming Ceremonies (Namkaran)',
      '1st Birthday & Cradle Ceremonies'
    ],
    link: '/services',
    linkText: 'Learn more about baby shower hosting →',
    colSpan: 'md:col-span-6',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'VP of Global Events',
    event: 'International Leadership Gala',
    location: 'Dubai, UAE',
    quote: "Deepika's energy is infectious! She didn't just host our gala; she orchestrated an unforgettable experience for over 1,200 attendees. Her poise in pastel green attire was pure royalty.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    rating: 5,
  },
  {
    id: '2',
    name: 'Rajiv & Ananya Malhotra',
    role: 'Bride & Groom',
    event: 'Grand Destination Wedding',
    location: 'Udaipur, Rajasthan',
    quote: 'Deepika made our 3-day destination wedding feel like a fairytale. Her multilingual fluency in Marwari and English bridged all our international guests effortlessly!',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    rating: 5,
  },
  {
    id: '3',
    name: 'Vikramaditya Rao',
    role: 'Chief Marketing Officer',
    event: 'Tech Product Launch 2024',
    location: 'Mumbai, India',
    quote: 'The perfect blend of poise and precision. She handled our high-stakes product launch and celebrity guest Q&A with absolute calm and magnetic charm.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    rating: 5,
  },
];

export const GALLERY: GalleryItem[] = [
  {
    "id": "g-226",
    "title": "Live Showcase Event #226",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c2b205def641.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-227",
    "title": "Live Showcase Event #227",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-a3245987f055.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-1",
    "title": "Luxury Sangeet & Royal Entry Hosting #1",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-1.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-2",
    "title": "Grand Varmala Protocol & Stage Command #2",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-10.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-3",
    "title": "Traditional Haldi & Mehndi Warm-up #3",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-11.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-4",
    "title": "Destination Reception Gala & Couple Entry #4",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-12.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-5",
    "title": "Baraat & High-Energy Stage Hosting #5",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-13.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-6",
    "title": "Multi-generational Wedding Anchor #6",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-14.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-7",
    "title": "Royal Wedding Celebration \u2014 Udaipur #7",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-15.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-8",
    "title": "Luxury Destination Sangeet Night #8",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-16.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-9",
    "title": "Luxury Sangeet & Royal Entry Hosting #9",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-17.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-10",
    "title": "Grand Varmala Protocol & Stage Command #10",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-18.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-11",
    "title": "Traditional Haldi & Mehndi Warm-up #11",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-19.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-12",
    "title": "Destination Reception Gala & Couple Entry #12",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-2.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-13",
    "title": "Baraat & High-Energy Stage Hosting #13",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-20.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-14",
    "title": "Multi-generational Wedding Anchor #14",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-21.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-15",
    "title": "Royal Wedding Celebration \u2014 Udaipur #15",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-22.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-16",
    "title": "Luxury Destination Sangeet Night #16",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-23.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-17",
    "title": "Luxury Sangeet & Royal Entry Hosting #17",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-24.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-18",
    "title": "Grand Varmala Protocol & Stage Command #18",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-25.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-19",
    "title": "Traditional Haldi & Mehndi Warm-up #19",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-26.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-20",
    "title": "Destination Reception Gala & Couple Entry #20",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-27.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-21",
    "title": "Baraat & High-Energy Stage Hosting #21",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-28.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-22",
    "title": "Multi-generational Wedding Anchor #22",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-29.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-23",
    "title": "Royal Wedding Celebration \u2014 Udaipur #23",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-3.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-24",
    "title": "Luxury Destination Sangeet Night #24",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-30.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-25",
    "title": "Luxury Sangeet & Royal Entry Hosting #25",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-31.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-26",
    "title": "Grand Varmala Protocol & Stage Command #26",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-32.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-27",
    "title": "Traditional Haldi & Mehndi Warm-up #27",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-33.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-28",
    "title": "Destination Reception Gala & Couple Entry #28",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-34.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-29",
    "title": "Baraat & High-Energy Stage Hosting #29",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-35.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-30",
    "title": "Multi-generational Wedding Anchor #30",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-36.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-31",
    "title": "Royal Wedding Celebration \u2014 Udaipur #31",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-37.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-32",
    "title": "Luxury Destination Sangeet Night #32",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-38.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-33",
    "title": "Luxury Sangeet & Royal Entry Hosting #33",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-39.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-34",
    "title": "Grand Varmala Protocol & Stage Command #34",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-4.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-35",
    "title": "Traditional Haldi & Mehndi Warm-up #35",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-40.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-36",
    "title": "Destination Reception Gala & Couple Entry #36",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-41.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-37",
    "title": "Baraat & High-Energy Stage Hosting #37",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-42.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-38",
    "title": "Multi-generational Wedding Anchor #38",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-43.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-39",
    "title": "Royal Wedding Celebration \u2014 Udaipur #39",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-44.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-40",
    "title": "Luxury Destination Sangeet Night #40",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-45.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-41",
    "title": "Luxury Sangeet & Royal Entry Hosting #41",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-46.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-42",
    "title": "Grand Varmala Protocol & Stage Command #42",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-47.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-43",
    "title": "Traditional Haldi & Mehndi Warm-up #43",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-48.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-44",
    "title": "Destination Reception Gala & Couple Entry #44",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-49.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-45",
    "title": "Baraat & High-Energy Stage Hosting #45",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-5.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-46",
    "title": "Multi-generational Wedding Anchor #46",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-50.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-47",
    "title": "Royal Wedding Celebration \u2014 Udaipur #47",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-51.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-48",
    "title": "Luxury Destination Sangeet Night #48",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-52.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-49",
    "title": "Luxury Sangeet & Royal Entry Hosting #49",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-53.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-50",
    "title": "Grand Varmala Protocol & Stage Command #50",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-54.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-51",
    "title": "Traditional Haldi & Mehndi Warm-up #51",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-55.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-52",
    "title": "Destination Reception Gala & Couple Entry #52",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-56.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-53",
    "title": "Baraat & High-Energy Stage Hosting #53",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-57.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-54",
    "title": "Multi-generational Wedding Anchor #54",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-58.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-55",
    "title": "Royal Wedding Celebration \u2014 Udaipur #55",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-59.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-56",
    "title": "Luxury Destination Sangeet Night #56",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-6.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-57",
    "title": "Luxury Sangeet & Royal Entry Hosting #57",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-60.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-58",
    "title": "Grand Varmala Protocol & Stage Command #58",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-61.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-59",
    "title": "Traditional Haldi & Mehndi Warm-up #59",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-62.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-60",
    "title": "Destination Reception Gala & Couple Entry #60",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-63.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-61",
    "title": "Baraat & High-Energy Stage Hosting #61",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-64.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-62",
    "title": "Multi-generational Wedding Anchor #62",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-65.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-63",
    "title": "Royal Wedding Celebration \u2014 Udaipur #63",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-66.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-64",
    "title": "Luxury Destination Sangeet Night #64",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-67.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-65",
    "title": "Luxury Sangeet & Royal Entry Hosting #65",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-68.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-66",
    "title": "Grand Varmala Protocol & Stage Command #66",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-69.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-67",
    "title": "Traditional Haldi & Mehndi Warm-up #67",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-7.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-68",
    "title": "Destination Reception Gala & Couple Entry #68",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-70.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-69",
    "title": "Baraat & High-Energy Stage Hosting #69",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-71.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-70",
    "title": "Multi-generational Wedding Anchor #70",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-72.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-71",
    "title": "Royal Wedding Celebration \u2014 Udaipur #71",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-73.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-72",
    "title": "Luxury Destination Sangeet Night #72",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-74.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-73",
    "title": "Luxury Sangeet & Royal Entry Hosting #73",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-75.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-74",
    "title": "Grand Varmala Protocol & Stage Command #74",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-76.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-75",
    "title": "Traditional Haldi & Mehndi Warm-up #75",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-77.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-76",
    "title": "Destination Reception Gala & Couple Entry #76",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-78.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-77",
    "title": "Baraat & High-Energy Stage Hosting #77",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-79.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-78",
    "title": "Multi-generational Wedding Anchor #78",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-8.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-79",
    "title": "Royal Wedding Celebration \u2014 Udaipur #79",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-80.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-80",
    "title": "Luxury Destination Sangeet Night #80",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-81.jpg",
    "location": "Udaipur / Chennai",
    "year": "2024"
  },
  {
    "id": "g-81",
    "title": "Luxury Sangeet & Royal Entry Hosting #81",
    "category": "wedding",
    "image": "/images/gallery/wedding/wedding-9.jpg",
    "location": "Udaipur / Chennai",
    "year": "2025"
  },
  {
    "id": "g-82",
    "title": "Global Tech Summit & Keynote Moderation #1",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-1.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-83",
    "title": "Corporate Excellence Award Gala #2",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-10.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-84",
    "title": "Leadership Summit & Executive Panel Host #3",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-11.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-85",
    "title": "Annual Dealer Meet & Product Launch #4",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-12.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-86",
    "title": "Brand Launch & VIP Stage Moderation #5",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-13.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-87",
    "title": "Corporate Recognition Gala \u2014 Mumbai #6",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-14.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-88",
    "title": "Town Hall & Strategy Summit Host #7",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-15.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-89",
    "title": "Executive Evening & Speaker Introductions #8",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-16.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-90",
    "title": "Global Tech Summit & Keynote Moderation #9",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-17.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-91",
    "title": "Corporate Excellence Award Gala #10",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-18.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-92",
    "title": "Leadership Summit & Executive Panel Host #11",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-19.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-93",
    "title": "Annual Dealer Meet & Product Launch #12",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-2.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-94",
    "title": "Brand Launch & VIP Stage Moderation #13",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-20.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-95",
    "title": "Corporate Recognition Gala \u2014 Mumbai #14",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-21.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-96",
    "title": "Town Hall & Strategy Summit Host #15",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-22.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-97",
    "title": "Executive Evening & Speaker Introductions #16",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-23.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-98",
    "title": "Global Tech Summit & Keynote Moderation #17",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-24.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-99",
    "title": "Corporate Excellence Award Gala #18",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-25.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-100",
    "title": "Leadership Summit & Executive Panel Host #19",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-26.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-101",
    "title": "Annual Dealer Meet & Product Launch #20",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-27.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-102",
    "title": "Brand Launch & VIP Stage Moderation #21",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-28.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-103",
    "title": "Corporate Recognition Gala \u2014 Mumbai #22",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-29.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-104",
    "title": "Town Hall & Strategy Summit Host #23",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-3.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-105",
    "title": "Executive Evening & Speaker Introductions #24",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-30.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-106",
    "title": "Global Tech Summit & Keynote Moderation #25",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-31.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-107",
    "title": "Corporate Excellence Award Gala #26",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-32.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-108",
    "title": "Leadership Summit & Executive Panel Host #27",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-33.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-109",
    "title": "Annual Dealer Meet & Product Launch #28",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-34.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-110",
    "title": "Brand Launch & VIP Stage Moderation #29",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-35.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-111",
    "title": "Corporate Recognition Gala \u2014 Mumbai #30",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-36.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-112",
    "title": "Town Hall & Strategy Summit Host #31",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-37.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-113",
    "title": "Executive Evening & Speaker Introductions #32",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-38.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-114",
    "title": "Global Tech Summit & Keynote Moderation #33",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-39.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-115",
    "title": "Corporate Excellence Award Gala #34",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-4.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-116",
    "title": "Leadership Summit & Executive Panel Host #35",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-40.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-117",
    "title": "Annual Dealer Meet & Product Launch #36",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-41.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-118",
    "title": "Brand Launch & VIP Stage Moderation #37",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-42.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-119",
    "title": "Corporate Recognition Gala \u2014 Mumbai #38",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-43.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-120",
    "title": "Town Hall & Strategy Summit Host #39",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-44.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-121",
    "title": "Executive Evening & Speaker Introductions #40",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-45.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-122",
    "title": "Global Tech Summit & Keynote Moderation #41",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-46.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-123",
    "title": "Corporate Excellence Award Gala #42",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-47.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-124",
    "title": "Leadership Summit & Executive Panel Host #43",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-48.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-125",
    "title": "Annual Dealer Meet & Product Launch #44",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-49.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-126",
    "title": "Brand Launch & VIP Stage Moderation #45",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-5.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-127",
    "title": "Corporate Recognition Gala \u2014 Mumbai #46",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-50.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-128",
    "title": "Town Hall & Strategy Summit Host #47",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-51.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-129",
    "title": "Executive Evening & Speaker Introductions #48",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-52.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-130",
    "title": "Global Tech Summit & Keynote Moderation #49",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-53.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-131",
    "title": "Corporate Excellence Award Gala #50",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-54.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-132",
    "title": "Leadership Summit & Executive Panel Host #51",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-55.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-133",
    "title": "Annual Dealer Meet & Product Launch #52",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-56.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-134",
    "title": "Brand Launch & VIP Stage Moderation #53",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-57.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-135",
    "title": "Corporate Recognition Gala \u2014 Mumbai #54",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-58.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-136",
    "title": "Town Hall & Strategy Summit Host #55",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-59.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-137",
    "title": "Executive Evening & Speaker Introductions #56",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-6.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-138",
    "title": "Global Tech Summit & Keynote Moderation #57",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-60.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-139",
    "title": "Corporate Excellence Award Gala #58",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-61.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-140",
    "title": "Leadership Summit & Executive Panel Host #59",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-62.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-141",
    "title": "Annual Dealer Meet & Product Launch #60",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-63.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-142",
    "title": "Brand Launch & VIP Stage Moderation #61",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-64.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-143",
    "title": "Corporate Recognition Gala \u2014 Mumbai #62",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-65.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-144",
    "title": "Town Hall & Strategy Summit Host #63",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-66.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-145",
    "title": "Executive Evening & Speaker Introductions #64",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-67.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-146",
    "title": "Global Tech Summit & Keynote Moderation #65",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-68.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-147",
    "title": "Corporate Excellence Award Gala #66",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-69.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-148",
    "title": "Leadership Summit & Executive Panel Host #67",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-7.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-149",
    "title": "Annual Dealer Meet & Product Launch #68",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-70.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-150",
    "title": "Brand Launch & VIP Stage Moderation #69",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-71.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-151",
    "title": "Corporate Recognition Gala \u2014 Mumbai #70",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-72.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-152",
    "title": "Town Hall & Strategy Summit Host #71",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-73.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-153",
    "title": "Executive Evening & Speaker Introductions #72",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-74.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-154",
    "title": "Global Tech Summit & Keynote Moderation #73",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-75.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-155",
    "title": "Corporate Excellence Award Gala #74",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-76.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-156",
    "title": "Leadership Summit & Executive Panel Host #75",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-77.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-157",
    "title": "Annual Dealer Meet & Product Launch #76",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-8.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2024"
  },
  {
    "id": "g-158",
    "title": "Brand Launch & VIP Stage Moderation #77",
    "category": "corporate",
    "image": "/images/gallery/corporate/corporate-9.jpg",
    "location": "Mumbai / Delhi NCR",
    "year": "2025"
  },
  {
    "id": "g-159",
    "title": "Grand Diwali Cultural Night Hosting #1",
    "category": "festival",
    "image": "/images/gallery/festival/festival-1.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-160",
    "title": "Navratri Dandiya & Garba Festivity Host #2",
    "category": "festival",
    "image": "/images/gallery/festival/festival-10.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-161",
    "title": "Onam & Eid Multicultural Gala #3",
    "category": "festival",
    "image": "/images/gallery/festival/festival-11.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-162",
    "title": "Diaspora Community Festival Evening #4",
    "category": "festival",
    "image": "/images/gallery/festival/festival-12.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-163",
    "title": "Public Cultural Event & Festive Celebration #5",
    "category": "festival",
    "image": "/images/gallery/festival/festival-13.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-164",
    "title": "Festival Gala \u2014 Dubai & Singapore #6",
    "category": "festival",
    "image": "/images/gallery/festival/festival-14.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-165",
    "title": "Grand Diwali Cultural Night Hosting #7",
    "category": "festival",
    "image": "/images/gallery/festival/festival-15.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-166",
    "title": "Navratri Dandiya & Garba Festivity Host #8",
    "category": "festival",
    "image": "/images/gallery/festival/festival-16.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-167",
    "title": "Onam & Eid Multicultural Gala #9",
    "category": "festival",
    "image": "/images/gallery/festival/festival-17.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-168",
    "title": "Diaspora Community Festival Evening #10",
    "category": "festival",
    "image": "/images/gallery/festival/festival-18.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-169",
    "title": "Public Cultural Event & Festive Celebration #11",
    "category": "festival",
    "image": "/images/gallery/festival/festival-19.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-170",
    "title": "Festival Gala \u2014 Dubai & Singapore #12",
    "category": "festival",
    "image": "/images/gallery/festival/festival-2.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-171",
    "title": "Grand Diwali Cultural Night Hosting #13",
    "category": "festival",
    "image": "/images/gallery/festival/festival-20.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-172",
    "title": "Navratri Dandiya & Garba Festivity Host #14",
    "category": "festival",
    "image": "/images/gallery/festival/festival-21.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-173",
    "title": "Onam & Eid Multicultural Gala #15",
    "category": "festival",
    "image": "/images/gallery/festival/festival-3.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-174",
    "title": "Diaspora Community Festival Evening #16",
    "category": "festival",
    "image": "/images/gallery/festival/festival-4.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-175",
    "title": "Public Cultural Event & Festive Celebration #17",
    "category": "festival",
    "image": "/images/gallery/festival/festival-5.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-176",
    "title": "Festival Gala \u2014 Dubai & Singapore #18",
    "category": "festival",
    "image": "/images/gallery/festival/festival-6.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-177",
    "title": "Grand Diwali Cultural Night Hosting #19",
    "category": "festival",
    "image": "/images/gallery/festival/festival-7.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-178",
    "title": "Navratri Dandiya & Garba Festivity Host #20",
    "category": "festival",
    "image": "/images/gallery/festival/festival-8.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-179",
    "title": "Onam & Eid Multicultural Gala #21",
    "category": "festival",
    "image": "/images/gallery/festival/festival-9.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-180",
    "title": "High-Energy Navratri Dandiya Night Host #1",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-1.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-181",
    "title": "Garba Celebration Stage Command #2",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-10.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-182",
    "title": "Festive Raas-Garba Gala Anchor #3",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-11.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-183",
    "title": "Traditional Navratri Celebration #4",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-12.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-184",
    "title": "High-Energy Navratri Dandiya Night Host #5",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-13.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-185",
    "title": "Garba Celebration Stage Command #6",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-14.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-186",
    "title": "Festive Raas-Garba Gala Anchor #7",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-15.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-187",
    "title": "Traditional Navratri Celebration #8",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-16.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-188",
    "title": "High-Energy Navratri Dandiya Night Host #9",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-17.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-189",
    "title": "Garba Celebration Stage Command #10",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-2.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-190",
    "title": "Festive Raas-Garba Gala Anchor #11",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-3.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-191",
    "title": "Traditional Navratri Celebration #12",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-4.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-192",
    "title": "High-Energy Navratri Dandiya Night Host #13",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-5.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-193",
    "title": "Garba Celebration Stage Command #14",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-6.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-194",
    "title": "Festive Raas-Garba Gala Anchor #15",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-7.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-195",
    "title": "Traditional Navratri Celebration #16",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-8.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-196",
    "title": "High-Energy Navratri Dandiya Night Host #17",
    "category": "festival",
    "image": "/images/gallery/navratri/navratri-9.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-197",
    "title": "Dubai Leadership Gala Keynote Anchor #1",
    "category": "international",
    "image": "/images/gallery/international/international-1.jpg",
    "location": "Dubai / Singapore",
    "year": "2025"
  },
  {
    "id": "g-198",
    "title": "Singapore International Expo Host #2",
    "category": "international",
    "image": "/images/gallery/international/international-2.jpg",
    "location": "Dubai / Singapore",
    "year": "2024"
  },
  {
    "id": "g-199",
    "title": "Malaysia Pan-Asia Summit Moderator #3",
    "category": "international",
    "image": "/images/gallery/international/international-3.jpg",
    "location": "Dubai / Singapore",
    "year": "2025"
  },
  {
    "id": "g-200",
    "title": "International Global Summit Host #4",
    "category": "international",
    "image": "/images/gallery/international/international-4.jpg",
    "location": "Dubai / Singapore",
    "year": "2024"
  },
  {
    "id": "g-201",
    "title": "Dubai Leadership Gala Keynote Anchor #5",
    "category": "international",
    "image": "/images/gallery/international/international-5.jpg",
    "location": "Dubai / Singapore",
    "year": "2025"
  },
  {
    "id": "g-202",
    "title": "Corporate Excellence & Industry Awards Host #1",
    "category": "award",
    "image": "/images/gallery/award/award-1.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-203",
    "title": "Stage Honors & Podium Presentation #2",
    "category": "award",
    "image": "/images/gallery/award/award-2.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-204",
    "title": "Gala Award Ceremony Anchor #3",
    "category": "award",
    "image": "/images/gallery/award/award-3.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-205",
    "title": "VIP Recognition Evening Host #4",
    "category": "award",
    "image": "/images/gallery/award/award-4.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-206",
    "title": "Milestone Grand Birthday Celebration #1",
    "category": "birthday",
    "image": "/images/gallery/birthday/birthday-1.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-207",
    "title": "Deepika Jain Live Stage Moments #1",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-1.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-208",
    "title": "Behind the Mic & VIP Interview #2",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-10.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-209",
    "title": "Stage Poise & Multilingual Presenter #3",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-11.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-210",
    "title": "Official Stage Portrait & Anchoring #4",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-12.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-211",
    "title": "Deepika Jain Live Stage Moments #5",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-13.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-212",
    "title": "Behind the Mic & VIP Interview #6",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-14.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-213",
    "title": "Stage Poise & Multilingual Presenter #7",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-15.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-214",
    "title": "Official Stage Portrait & Anchoring #8",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-16.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-215",
    "title": "Deepika Jain Live Stage Moments #9",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-17.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-216",
    "title": "Behind the Mic & VIP Interview #10",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-18.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-217",
    "title": "Stage Poise & Multilingual Presenter #11",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-19.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-218",
    "title": "Official Stage Portrait & Anchoring #12",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-2.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-219",
    "title": "Deepika Jain Live Stage Moments #13",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-3.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-220",
    "title": "Behind the Mic & VIP Interview #14",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-4.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-221",
    "title": "Stage Poise & Multilingual Presenter #15",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-5.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-222",
    "title": "Official Stage Portrait & Anchoring #16",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-6.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-223",
    "title": "Deepika Jain Live Stage Moments #17",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-7.jpg",
    "location": "Chennai, India",
    "year": "2025"
  },
  {
    "id": "g-224",
    "title": "Behind the Mic & VIP Interview #18",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-8.jpg",
    "location": "Chennai, India",
    "year": "2024"
  },
  {
    "id": "g-225",
    "title": "Stage Poise & Multilingual Presenter #19",
    "category": "spotlight",
    "image": "/images/gallery/personal/personal-9.jpg",
    "location": "Chennai, India",
    "year": "2025"
  }
];
