import React from 'react';
import { Link } from '@tanstack/react-router';
import { locationSeoMap } from '../data/seoKeywords';
import { SEOHead } from '../components/SEOHead';
import {
  Sparkles,
  MapPin,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Award,
  Globe,
  Mic,
  Phone,
  MessageCircle,
  Building2,
  Star,
  Calendar,
  ShieldCheck,
  ChevronRight,
  Clock,
  Mail,
} from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { BookingForm } from '../components/BookingForm';

export const LocationLandingPage: React.FC<{ locationKey: string }> = ({ locationKey }) => {
  const data = locationSeoMap[locationKey];
  const { openBooking } = useBooking();

  if (!data) return <div className="pt-32 text-center text-pastel-700">Location not found</div>;

  // JSON-LD schema for LocalBusiness + Person + Service
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Person'],
    '@id': 'https://www.emceedeepika.com/#deepika-jain',
    name: 'Deepika Jain',
    alternateName: 'Emcee Deepika',
    jobTitle: 'International Multilingual Emcee & Event Host',
    description: data.metaDescription,
    url: `https://www.emceedeepika.com/locations/${locationKey}`,
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
      addressLocality: data.city,
      addressRegion: data.region,
      addressCountry: data.countryCode,
    },
    knowsLanguage: ['English', 'Tamil', 'Hindi', 'Marwari', 'Telugu'],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${data.city}, ${data.region}`,
    },
    review: data.testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.name,
      },
      reviewBody: t.quote,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating.toString(),
        bestRating: '5',
      },
    })),
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.emceedeepika.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://www.emceedeepika.com/locations',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: data.city,
        item: `https://www.emceedeepika.com/locations/${locationKey}`,
      },
    ],
  };

  const sisterLocations = Object.values(locationSeoMap).filter((loc) => loc.slug !== locationKey);
  const whatsappUrl = `https://wa.me/918056958856?text=${encodeURIComponent(
    `Hi Deepika, I am inquiring about booking you as an event emcee in ${data.city}`
  )}`;

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={[...data.primaryKeywords, ...data.secondaryKeywords]}
        canonicalUrl={`https://www.emceedeepika.com/locations/${locationKey}`}
        schemaJson={[businessSchema, faqSchema, breadcrumbSchema]}
        showHreflang={true}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-pastel-600">
          <Link to="/" className="hover:text-pastel-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-pastel-400" />
          <Link to="/locations" className="hover:text-pastel-900 transition-colors">Locations</Link>
          <ChevronRight className="w-3.5 h-3.5 text-pastel-400" />
          <span className="text-pastel-900 font-semibold">{data.city}</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-pastel-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200/80 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-pastel-600" />
            <span>Target Region: {data.city}, {data.region ? `${data.region}, ` : ''}{data.country}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-pastel-900 leading-tight">
            {data.h1Title}
          </h1>

          <p className="text-pastel-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={openBooking}
              className="bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-8 py-3.5 rounded-full font-semibold text-base transition-all shadow-md flex items-center gap-2"
            >
              <span>Check {data.city} Availability</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* Synchronized Stats Bar */}
      <section className="bg-pastel-800 text-pastel-50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-pastel-700 last:border-none pr-4">
            <span className="block text-3xl font-serif font-bold text-gold-light">{data.localStats.localEvents}</span>
            <span className="text-xs text-pastel-200 uppercase tracking-wider">Events in {data.city} & Region</span>
          </div>
          <div className="border-r border-pastel-700 last:border-none pr-4">
            <span className="block text-3xl font-serif font-bold text-gold-light">{data.localStats.globalEvents}</span>
            <span className="text-xs text-pastel-200 uppercase tracking-wider">Global Shows Worldwide</span>
          </div>
          <div className="border-r border-pastel-700 last:border-none pr-4">
            <span className="block text-3xl font-serif font-bold text-gold-light">{data.localStats.experience}</span>
            <span className="text-xs text-pastel-200 uppercase tracking-wider">Stage Experience</span>
          </div>
          <div>
            <span className="block text-3xl font-serif font-bold text-gold-light">5</span>
            <span className="text-xs text-pastel-200 uppercase tracking-wider">Languages Fluent</span>
          </div>
        </div>
      </section>

      {/* Regional Excellence & Value Narrative */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-pastel-600 font-bold uppercase text-xs tracking-widest">
              <Award className="w-4 h-4" />
              <span>Regional Stage Authority</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              Why Event Hosts in {data.city} Choose Deepika
            </h2>
            <p className="text-pastel-700 leading-relaxed text-base">
              {data.marketContext}
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-pastel-900 text-sm">Multilingual & Cultural Nuance</h4>
                  <p className="text-pastel-600 text-xs leading-relaxed">
                    {data.languageHighlight}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-pastel-900 text-sm">Cross-Generational Crowd Energy</h4>
                  <p className="text-pastel-600 text-xs leading-relaxed">
                    Warm respect for elder traditions and ceremonial decorum, paired with electrifying energy to get young guests onto the dance floor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-pastel-900 text-sm">Flawless Run-of-Show Protocol</h4>
                  <p className="text-pastel-600 text-xs leading-relaxed">
                    Meticulous coordination with event managers, sound engineers, and dignitaries for zero awkward pauses or schedule delays.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regional Highlights Card */}
          <div className="bg-pastel-100/70 border border-pastel-300 p-8 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pastel-200 flex items-center justify-center text-pastel-800">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-pastel-900">Master of Ceremonies</h3>
                <p className="text-pastel-600 text-sm">Executive Polish & Celebratory Warmth</p>
              </div>
            </div>

            <p className="text-pastel-700 text-sm leading-relaxed">
              {data.venueHighlight}
            </p>

            {/* Iconic Venues Grid */}
            <div className="border-t border-pastel-200 pt-5 space-y-3">
              <div className="flex items-center gap-2 text-pastel-800 text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4 text-pastel-600" />
                <span>Recognized Venues Hosted in {data.city}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-pastel-700">
                {data.venues.map((venue, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-pastel-50 px-3 py-2 rounded-xl border border-pastel-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-pastel-500 flex-shrink-0" />
                    <span className="truncate">{venue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Event Formats in the Region */}
      <section className="py-16 bg-pastel-100/50 border-t border-b border-pastel-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-pastel-600 font-bold uppercase text-xs tracking-widest">
              <Calendar className="w-4 h-4" />
              <span>Tailored Hosting Formats</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              Curated Event Services in {data.city}
            </h2>
            <p className="text-pastel-600 text-sm">
              Customized scripts, guest engagement, and audio-visual coordination designed for regional celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.eventFormats.map((format, idx) => (
              <div key={idx} className="bg-pastel-50 p-6 rounded-2xl border border-pastel-200 shadow-sm space-y-3 hover:border-pastel-400 transition-all">
                <h3 className="font-serif text-xl font-bold text-pastel-900">{format.title}</h3>
                <p className="text-pastel-700 text-sm leading-relaxed">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Social Proof & Client Testimonials */}
      {data.testimonials && data.testimonials.length > 0 && (
        <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-pastel-600 font-bold uppercase text-xs tracking-widest">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Client Reviews</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              Feedback from {data.city} Events
            </h2>
            <p className="text-pastel-600 text-sm">
              Read how Deepika brought poise, humor, and connection to luxury celebrations and corporate galas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-pastel-50 p-6 rounded-2xl border border-pastel-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-pastel-700 text-sm italic leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-pastel-200 pt-3">
                  <h4 className="font-serif font-bold text-pastel-900 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-pastel-600">{testimonial.role} &bull; {testimonial.event}</p>
                  <p className="text-xs text-pastel-500 font-medium">{testimonial.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Destination Wedding Regional Banner */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-pastel-800 to-pastel-900 text-pastel-50 p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-pastel-700">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-light bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Regional Destination Wedding Hub
            </span>
            <h3 className="font-serif text-2xl font-bold">Planning a Destination Wedding across Asia or the Middle East?</h3>
            <p className="text-pastel-200 text-sm max-w-2xl">
              Explore Deepika’s regional destination wedding hosting covering Udaipur royal palaces, Dubai & Gulf luxury resorts, Singapore Sentosa galas, and tropical island vows in Bali & Phuket.
            </p>
          </div>
          <Link
            to="/destination-wedding"
            className="shrink-0 bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-6 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <span>Explore Destination Page</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Comprehensive GEO/AEO FAQ Section */}
      <section className="py-16 bg-pastel-100/50 border-t border-b border-pastel-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-pastel-600 font-bold uppercase text-xs tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Answers to Common Inquiries</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              {data.city} Emcee & Anchor Booking FAQs
            </h2>
            <p className="text-pastel-600 text-sm">
              Everything you need to know about pricing, availability, languages, and technical setup.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div key={index} className="bg-pastel-50 p-6 rounded-2xl border border-pastel-200 shadow-sm space-y-2">
                <h3 className="font-serif text-lg font-bold text-pastel-900">
                  {faq.question}
                </h3>
                <p className="text-pastel-700 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Desk & NAP Block */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pastel-800 text-pastel-50 p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-700 text-gold-light text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Direct {data.city} Event Inquiry</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-pastel-50">
            Check Availability for Your {data.city} Event
          </h2>
          <p className="text-pastel-200 text-sm sm:text-base max-w-xl mx-auto">
            Share your dates, venue, and vision. We guarantee a bespoke proposal response within 6 hours.
          </p>

          {/* Clickable NAP Details with tel: and mailto: links */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-pastel-200 border-t border-b border-pastel-700/80 py-3 max-w-xl mx-auto">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gold-light" />
              <a href="tel:+918056958856" className="hover:text-gold-light transition-colors">+91 80569 58856</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gold-light" />
              <a href="mailto:dishajain395@gmail.com" className="hover:text-gold-light transition-colors">dishajain395@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-light" />
              <span>Response &lt; 6 Hours</span>
            </div>
          </div>

          <div className="bg-pastel-50 text-pastel-900 p-6 sm:p-8 rounded-2xl text-left max-w-xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* Global Presence & Sister Hubs */}
      <section className="py-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-pastel-200">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-pastel-900">Explore Other Regional Hubs</h3>
              <p className="text-xs text-pastel-600">Deepika anchors events across premier international business & celebration centers</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {sisterLocations.map((hub) => (
              <Link
                key={hub.slug}
                to={`/locations/${hub.slug}` as any}
                className="bg-pastel-50 border border-pastel-200 p-5 rounded-2xl hover:border-pastel-400 hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-serif font-bold text-pastel-900 group-hover:text-pastel-700 transition-colors">{hub.city}</h4>
                  <p className="text-xs text-pastel-600">{hub.dominantTerm}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-pastel-400 group-hover:text-pastel-900 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
