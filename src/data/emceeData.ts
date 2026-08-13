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
    "id": "g-301",
    "title": "Live Showcase Event #301",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-7c84fe38fe45.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-302",
    "title": "Live Showcase Event #302",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-693f1c5e2a70.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-303",
    "title": "Live Showcase Event #303",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-2e6c2adcaac7.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-304",
    "title": "Live Showcase Event #304",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-c6c1f6869c71.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-305",
    "title": "Live Showcase Event #305",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-fe7906e94312.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-306",
    "title": "Live Showcase Event #306",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-6cefc07148ee.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-307",
    "title": "Live Showcase Event #307",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-86e6fa855cd4.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-308",
    "title": "Live Showcase Event #308",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-6e1f8d86ccc8.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-309",
    "title": "Live Showcase Event #309",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-2741852603f1.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-310",
    "title": "Live Showcase Event #310",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-e35ea80f6a0d.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-311",
    "title": "Live Showcase Event #311",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-0aa4909d5d01.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-312",
    "title": "Live Showcase Event #312",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-1fdef24e3876.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-313",
    "title": "Live Showcase Event #313",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-f36607031dc0.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-314",
    "title": "Live Showcase Event #314",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-daf26c8f8b16.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-315",
    "title": "Live Showcase Event #315",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-c74f8ef8165a.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-316",
    "title": "Live Showcase Event #316",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-98dfd6efb38e.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-317",
    "title": "Live Showcase Event #317",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-8a0fa4351dbe.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-318",
    "title": "Live Showcase Event #318",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-c348f14b2ac0.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-319",
    "title": "Live Showcase Event #319",
    "category": "festival",
    "image": "/images/gallery/festival/gphoto-14ca04dc47c2.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-228",
    "title": "Live Showcase Event #228",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-faee28daa34c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-229",
    "title": "Live Showcase Event #229",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-597bb0efcc87.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-230",
    "title": "Live Showcase Event #230",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0c5624cb727d.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-231",
    "title": "Live Showcase Event #231",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0fb47a215bc4.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-232",
    "title": "Live Showcase Event #232",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-f155ceb1b5ba.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-233",
    "title": "Live Showcase Event #233",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-b4fe78751ea2.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-234",
    "title": "Live Showcase Event #234",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-29a54bb40551.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-235",
    "title": "Live Showcase Event #235",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-586021fed529.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-236",
    "title": "Live Showcase Event #236",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4d6a438d6f92.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-237",
    "title": "Live Showcase Event #237",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-27a074bb7fcc.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-238",
    "title": "Live Showcase Event #238",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4622c77a1f2b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-239",
    "title": "Live Showcase Event #239",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-e024a340e34b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-240",
    "title": "Live Showcase Event #240",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1b63909a1dcc.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-241",
    "title": "Live Showcase Event #241",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-30e75b14118b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-242",
    "title": "Live Showcase Event #242",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-418ee571844b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-243",
    "title": "Live Showcase Event #243",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-54e109e2cd50.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-244",
    "title": "Live Showcase Event #244",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-b76b7c34815f.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-245",
    "title": "Live Showcase Event #245",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1b56f4f8f6b3.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-246",
    "title": "Live Showcase Event #246",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9871e606e93a.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-247",
    "title": "Live Showcase Event #247",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-5fc0bb086d37.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-248",
    "title": "Live Showcase Event #248",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-a30d7bcd2e96.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-249",
    "title": "Live Showcase Event #249",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-68f9a86ff101.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-250",
    "title": "Live Showcase Event #250",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9132ff277efd.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-251",
    "title": "Live Showcase Event #251",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1f66f9cb0280.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-252",
    "title": "Live Showcase Event #252",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-b574789d4609.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-253",
    "title": "Live Showcase Event #253",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-2254bc654010.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-254",
    "title": "Live Showcase Event #254",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4dcec52d64fe.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-255",
    "title": "Live Showcase Event #255",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9fa5f51ef653.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-256",
    "title": "Live Showcase Event #256",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-ac9e87ee895d.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-257",
    "title": "Live Showcase Event #257",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-30a6c5295214.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-258",
    "title": "Live Showcase Event #258",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-6ea61b422cc6.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-259",
    "title": "Live Showcase Event #259",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-77f112731b60.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-260",
    "title": "Live Showcase Event #260",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c703e314af9c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-261",
    "title": "Live Showcase Event #261",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9ab5da0d888b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-262",
    "title": "Live Showcase Event #262",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-eb8f18a48359.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-263",
    "title": "Live Showcase Event #263",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-7d077215b17c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-264",
    "title": "Live Showcase Event #264",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-369216857e00.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-265",
    "title": "Live Showcase Event #265",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0e519e2d8798.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-266",
    "title": "Live Showcase Event #266",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-521f670a242c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-267",
    "title": "Live Showcase Event #267",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-3789eb322273.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-268",
    "title": "Live Showcase Event #268",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4b4c29d8dfed.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-269",
    "title": "Live Showcase Event #269",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-8fd0e200ec7e.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-270",
    "title": "Live Showcase Event #270",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-cc5ab2b83e1a.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-271",
    "title": "Live Showcase Event #271",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-99a62814e851.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-272",
    "title": "Live Showcase Event #272",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-2e95562ac6c8.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-273",
    "title": "Live Showcase Event #273",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9a3d9ce983cc.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-274",
    "title": "Live Showcase Event #274",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-80952b543d77.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-275",
    "title": "Live Showcase Event #275",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-52deb530c480.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-276",
    "title": "Live Showcase Event #276",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-d850e741b7a4.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-277",
    "title": "Live Showcase Event #277",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-3daf6d3f4c5c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-278",
    "title": "Live Showcase Event #278",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0e2b981eacd9.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-279",
    "title": "Live Showcase Event #279",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-83e56247b3cf.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-280",
    "title": "Live Showcase Event #280",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c924efd57280.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-281",
    "title": "Live Showcase Event #281",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-8bfcdb126a7f.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-282",
    "title": "Live Showcase Event #282",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-e2b150272aa6.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-283",
    "title": "Live Showcase Event #283",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-519db6175753.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-284",
    "title": "Live Showcase Event #284",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-a7056fa01459.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-285",
    "title": "Live Showcase Event #285",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-70c6ff6b5786.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-286",
    "title": "Live Showcase Event #286",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-ee635ef40173.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-287",
    "title": "Live Showcase Event #287",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-dcf736e8bc25.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-288",
    "title": "Live Showcase Event #288",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-580b9987af0f.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-289",
    "title": "Live Showcase Event #289",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-776ee0728674.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-290",
    "title": "Live Showcase Event #290",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-6f174d7cef26.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-291",
    "title": "Live Showcase Event #291",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-e983d3a212fd.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-292",
    "title": "Live Showcase Event #292",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-91479ea237b5.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-293",
    "title": "Live Showcase Event #293",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-dfc763234462.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-294",
    "title": "Live Showcase Event #294",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1d5e6105c21d.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-295",
    "title": "Live Showcase Event #295",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-6c9153c0b61c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-296",
    "title": "Live Showcase Event #296",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-cdb5d8b3dead.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-297",
    "title": "Live Showcase Event #297",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-491cbbcf82f3.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-298",
    "title": "Live Showcase Event #298",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-f4295d478625.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-299",
    "title": "Live Showcase Event #299",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1eab0448a376.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-300",
    "title": "Live Showcase Event #300",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c469fe0b53e7.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-228",
    "title": "Live Showcase Event #228",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-faee28daa34c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-229",
    "title": "Live Showcase Event #229",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-597bb0efcc87.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-230",
    "title": "Live Showcase Event #230",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0c5624cb727d.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-231",
    "title": "Live Showcase Event #231",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0fb47a215bc4.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-232",
    "title": "Live Showcase Event #232",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-f155ceb1b5ba.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-233",
    "title": "Live Showcase Event #233",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-b4fe78751ea2.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-234",
    "title": "Live Showcase Event #234",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-29a54bb40551.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-235",
    "title": "Live Showcase Event #235",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-586021fed529.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-236",
    "title": "Live Showcase Event #236",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4d6a438d6f92.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-237",
    "title": "Live Showcase Event #237",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-27a074bb7fcc.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-238",
    "title": "Live Showcase Event #238",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4622c77a1f2b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-239",
    "title": "Live Showcase Event #239",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-e024a340e34b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-240",
    "title": "Live Showcase Event #240",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1b63909a1dcc.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-241",
    "title": "Live Showcase Event #241",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-30e75b14118b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-242",
    "title": "Live Showcase Event #242",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-418ee571844b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-243",
    "title": "Live Showcase Event #243",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-54e109e2cd50.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-244",
    "title": "Live Showcase Event #244",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-b76b7c34815f.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-245",
    "title": "Live Showcase Event #245",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1b56f4f8f6b3.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-246",
    "title": "Live Showcase Event #246",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9871e606e93a.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-247",
    "title": "Live Showcase Event #247",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-5fc0bb086d37.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-248",
    "title": "Live Showcase Event #248",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-a30d7bcd2e96.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-249",
    "title": "Live Showcase Event #249",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-68f9a86ff101.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-250",
    "title": "Live Showcase Event #250",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9132ff277efd.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-251",
    "title": "Live Showcase Event #251",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1f66f9cb0280.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-252",
    "title": "Live Showcase Event #252",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-b574789d4609.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-253",
    "title": "Live Showcase Event #253",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-2254bc654010.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-254",
    "title": "Live Showcase Event #254",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4dcec52d64fe.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-255",
    "title": "Live Showcase Event #255",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9fa5f51ef653.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-256",
    "title": "Live Showcase Event #256",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-30a6c5295214.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-257",
    "title": "Live Showcase Event #257",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-6ea61b422cc6.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-258",
    "title": "Live Showcase Event #258",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-77f112731b60.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-259",
    "title": "Live Showcase Event #259",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c703e314af9c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-260",
    "title": "Live Showcase Event #260",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9ab5da0d888b.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-261",
    "title": "Live Showcase Event #261",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-eb8f18a48359.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-262",
    "title": "Live Showcase Event #262",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-7d077215b17c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-263",
    "title": "Live Showcase Event #263",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-369216857e00.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-264",
    "title": "Live Showcase Event #264",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0e519e2d8798.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-265",
    "title": "Live Showcase Event #265",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-521f670a242c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-266",
    "title": "Live Showcase Event #266",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-3789eb322273.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-267",
    "title": "Live Showcase Event #267",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-4b4c29d8dfed.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-268",
    "title": "Live Showcase Event #268",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-8fd0e200ec7e.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-269",
    "title": "Live Showcase Event #269",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-cc5ab2b83e1a.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-270",
    "title": "Live Showcase Event #270",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-99a62814e851.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-271",
    "title": "Live Showcase Event #271",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-2e95562ac6c8.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-272",
    "title": "Live Showcase Event #272",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-9a3d9ce983cc.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-273",
    "title": "Live Showcase Event #273",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-80952b543d77.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-274",
    "title": "Live Showcase Event #274",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-52deb530c480.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-275",
    "title": "Live Showcase Event #275",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-d850e741b7a4.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-276",
    "title": "Live Showcase Event #276",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-3daf6d3f4c5c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-277",
    "title": "Live Showcase Event #277",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-0e2b981eacd9.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-278",
    "title": "Live Showcase Event #278",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-83e56247b3cf.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-279",
    "title": "Live Showcase Event #279",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c924efd57280.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-280",
    "title": "Live Showcase Event #280",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-8bfcdb126a7f.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-281",
    "title": "Live Showcase Event #281",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-e2b150272aa6.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-282",
    "title": "Live Showcase Event #282",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-519db6175753.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-283",
    "title": "Live Showcase Event #283",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-a7056fa01459.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-284",
    "title": "Live Showcase Event #284",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-70c6ff6b5786.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-285",
    "title": "Live Showcase Event #285",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-ee635ef40173.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-286",
    "title": "Live Showcase Event #286",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-dcf736e8bc25.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-287",
    "title": "Live Showcase Event #287",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-580b9987af0f.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-288",
    "title": "Live Showcase Event #288",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-776ee0728674.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-289",
    "title": "Live Showcase Event #289",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-6f174d7cef26.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-290",
    "title": "Live Showcase Event #290",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-e983d3a212fd.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-291",
    "title": "Live Showcase Event #291",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-91479ea237b5.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-292",
    "title": "Live Showcase Event #292",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-dfc763234462.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-293",
    "title": "Live Showcase Event #293",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1d5e6105c21d.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-294",
    "title": "Live Showcase Event #294",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-6c9153c0b61c.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-295",
    "title": "Live Showcase Event #295",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-cdb5d8b3dead.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-296",
    "title": "Live Showcase Event #296",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-491cbbcf82f3.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-297",
    "title": "Live Showcase Event #297",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-f4295d478625.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-298",
    "title": "Live Showcase Event #298",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-1eab0448a376.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
  {
    "id": "g-299",
    "title": "Live Showcase Event #299",
    "category": "corporate",
    "image": "/images/gallery/corporate/gphoto-c469fe0b53e7.jpg",
    "location": "Udaipur / International",
    "year": "2026"
  },
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
  }
];
