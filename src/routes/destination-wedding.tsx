import React from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './root';
import { SEOHead } from '../components/SEOHead';
import { useBooking } from '../context/BookingContext';
import { BookingForm } from '../components/BookingForm';
import { Sparkles, MapPin, Heart, Globe, HelpCircle, ArrowRight, CheckCircle2, Award, Calendar, Mic, Star } from 'lucide-react';

const DestinationWeddingPage: React.FC = () => {
  const { openBooking } = useBooking();

  const destinationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Destination Wedding Emcee — Asia & Middle East',
    provider: {
      '@type': 'Person',
      name: 'Deepika Jain',
      jobTitle: 'International Destination Wedding Emcee & Host',
      url: 'https://www.emceedeepika.com',
    },
    description: 'Deepika Jain is a premier destination wedding emcee hosting royal palace weddings in Udaipur, luxury resort celebrations in Dubai, Sentosa galas in Singapore, and island vows across Bali, Phuket, and Maldives.',
    areaServed: [
      'Udaipur (India)',
      'Jaipur & Jodhpur (Rajasthan)',
      'Dubai & Abu Dhabi (UAE)',
      'Ras Al Khaimah (Middle East)',
      'Singapore (Sentosa)',
      'Kuala Lumpur & Penang (Malaysia)',
      'Bali (Indonesia)',
      'Phuket & Hua Hin (Thailand)',
      'Maldives'
    ],
    knowsLanguage: ['English', 'Hindi', 'Marwari', 'Tamil', 'Telugu'],
    serviceType: 'Luxury Destination Wedding Anchor & Host',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '9',
      bestRating: '5',
      worstRating: '1',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rajiv & Ananya Malhotra' },
        datePublished: '2026-08-15',
        reviewBody: 'Deepika made our 3-day destination wedding in Udaipur feel like a fairytale. Her multilingual fluency in Marwari and English bridged all our international guests effortlessly!',
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Does Deepika travel for destination weddings outside India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Deepika regularly travels for luxury destination weddings across the Middle East (Dubai, Abu Dhabi, RAK) and Asia (Singapore, Malaysia, Bali, Phuket, Maldives), as well as royal heritage palaces across Rajasthan (Udaipur, Jaipur, Jodhpur).'
        }
      },
      {
        '@type': 'Question',
        name: 'Which languages does Deepika host in for destination weddings across Asia & the Middle East?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deepika is fluent in 5 languages: English, Hindi, Marwari, Tamil, and Telugu. She seamlessly transitions between languages on stage so multi-generational families, NRI guests, and international attendees all feel involved.'
        }
      },
      {
        '@type': 'Question',
        name: 'What functions does Deepika host during a multi-day destination wedding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Deepika anchors the entire multi-day itinerary — from welcoming poolside Mehndi & Haldi Carnivals, Baraat energy management, Mayra rituals, and Varmala grand protocols, to high-energy Sangeet nights and formal Reception Galas.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does Deepika manage complex multi-cultural or NRI guest lists?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With 12+ years of international stage experience, Deepika balances cultural protocols (Marwari traditions, South Indian rituals, North Indian Sangeets) with global entertainment polish, keeping the pacing tight and crowd energy high.'
        }
      },
      {
        '@type': 'Question',
        name: 'How early should we book Deepika for an Asia or Middle East destination wedding?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Peak destination wedding seasons across Udaipur, Dubai, and Southeast Asia book 4 to 8 months in advance. Contact Deepika as early as your venue dates are locked.'
        }
      }
    ]
  };

  const regions = [
    {
      title: 'Udaipur & Rajasthan Royal Palaces',
      location: 'Udaipur, Jaipur, Jodhpur',
      desc: 'Heritage lakeside palaces, Jagmandir Island, and grand royal courtyards. Expert in Mayra rituals, Baraat energy, Varmala decorum, and high-octane Marwari & North Indian Sangeets.',
      highlights: ['Mayra & Maira Ritual Protocol', 'Lake Palace & Heritage Stage Flow', 'Bilingual Marwari / Hindi Warm-ups'],
      image: '/images/gallery/wedding/wedding-15.jpg',
    },
    {
      title: 'Dubai & Gulf Luxury Resorts',
      location: 'Dubai, Abu Dhabi, Ras Al Khaimah',
      desc: 'Iconic ballroom galas at Burj Al Arab, beachfront vows in RAK, and desert sangeet nights. Combining international glamour with traditional warmth for NRI and global guest lists.',
      highlights: ['Burj Al Arab & Atlantis Ballroom Polish', 'Desert & Beachfront Sundowner Energy', 'Seamless English & Hindi Hosting'],
      image: '/images/gallery/wedding/wedding-12.jpg',
    },
    {
      title: 'Singapore & Malaysia Destinations',
      location: 'Singapore (Sentosa), KL, Penang',
      desc: 'Sentosa island luxury galas, Kuala Lumpur heritage venues, and Penang beach celebrations. Blending South Indian traditions with English elegance for Singaporean & Malaysian couples.',
      highlights: ['Sentosa Cove Gala Host', 'Tamil, Telugu & English Fluency', 'Dignified Stage Protocol & Pacing'],
      image: '/images/gallery/wedding/wedding-1.jpg',
    },
    {
      title: 'Tropical Island Escapes',
      location: 'Bali, Phuket, Hua Hin, Maldives',
      desc: 'Cliffside sunset ceremonies in Uluwatu, beachfront sunset cocktails in Phuket, and intimate Maldives island celebrations. Unscripted joy, crowd warm-up, and zero dead air.',
      highlights: ['Cliffside & Beach Vows Anchoring', 'High-Energy Pool Party Warm-up', 'Multi-country Guest List Bridge'],
      image: '/images/gallery/wedding/wedding-2.jpg',
    },
  ];

  const faqs = [
    {
      q: 'Does Deepika travel for destination weddings outside India?',
      a: 'Yes! Deepika regularly travels for luxury destination weddings across the Middle East (Dubai, Abu Dhabi, RAK) and Asia (Singapore, Malaysia, Bali, Phuket, Maldives), as well as royal heritage palaces across Rajasthan (Udaipur, Jaipur, Jodhpur).'
    },
    {
      q: 'Which languages does Deepika host in for destination weddings across Asia & the Middle East?',
      a: 'Deepika is fluent in 5 languages: English, Hindi, Marwari, Tamil, and Telugu. She seamlessly transitions between languages on stage so multi-generational families, NRI guests, and international attendees all feel involved.'
    },
    {
      q: 'What functions does Deepika host during a multi-day destination wedding?',
      a: 'Deepika anchors the entire multi-day itinerary — from welcoming poolside Mehndi & Haldi Carnivals, Baraat energy management, Mayra rituals, and Varmala grand protocols, to high-energy Sangeet nights and formal Reception Galas.'
    },
    {
      q: 'How does Deepika manage complex multi-cultural or NRI guest lists?',
      a: 'With 12+ years of international stage experience, Deepika balances cultural protocols (Marwari traditions, South Indian rituals, North Indian Sangeets) with global entertainment polish, keeping the pacing tight and crowd energy high.'
    },
    {
      q: 'How early should we book Deepika for an Asia or Middle East destination wedding?',
      a: 'Peak destination wedding seasons across Udaipur, Dubai, and Southeast Asia book 4 to 8 months in advance. Contact Deepika as early as your venue dates are locked.'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title="Destination Wedding Emcee — Asia & Middle East | Deepika Jain"
        description="Hire premier destination wedding emcee Deepika Jain for luxury wedding galas, royal palace celebrations, and island vows across Udaipur, Dubai, Singapore, Bali, Phuket, and Maldives."
        keywords={[
          'destination wedding emcee Asia Middle East',
          'destination wedding anchor Udaipur',
          'luxury wedding emcee Dubai',
          'bilingual wedding emcee Singapore',
          'multilingual wedding anchor',
          'NRI wedding emcee Bali Phuket',
          'professional emcee for hire'
        ]}
        canonicalUrl="https://www.emceedeepika.com/destination-wedding"
        schemaJson={[destinationSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pastel-100 via-pastel-50 to-white py-16 px-4 sm:px-6 lg:px-8 border-b border-pastel-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Globe className="w-4 h-4 text-gold-dark" />
            <span>Regional Luxury Wedding Host</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-pastel-900 leading-tight">
            Destination Wedding Emcee for Asia & Middle East
          </h1>

          <p className="text-pastel-700 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed font-normal">
            From the royal palace courtyards of <strong>Udaipur</strong> to the ultra-luxury ballrooms of <strong>Dubai</strong>, <strong>Singapore</strong>, <strong>Malaysia</strong>, <strong>Bali</strong>, <strong>Phuket</strong>, and <strong>Maldives</strong> — Deepika Jain delivers flawless multilingual stage hosting (English, Hindi, Marwari, Tamil, Telugu) for multi-day destination weddings.
          </p>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
            <button
              onClick={openBooking}
              className="bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
            >
              <Mic className="w-4 h-4 text-gold-light" />
              <span>Inquire & Hire Destination Emcee</span>
              <ArrowRight className="w-4 h-4 text-gold-light" />
            </button>

            <Link
              to="/gallery"
              className="border border-pastel-300 bg-white hover:bg-pastel-100 text-pastel-900 px-7 py-4 rounded-full font-bold text-sm transition-all shadow-xs"
            >
              View Destination Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Regional Synthesis Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-3 py-1 rounded-full border border-pastel-200">
            One Connected Regional Offering
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            Uniting Destinations Across India, the Gulf & Southeast Asia
          </h2>
          <p className="text-pastel-700 text-sm sm:text-base">
            No matter where your guests fly in from, Deepika bridges cultural backgrounds and generations with fluid multi-language storytelling and effortless crowd command.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regions.map((reg, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-pastel-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="h-64 overflow-hidden relative">
                <img
                  src={reg.image}
                  alt={reg.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-pastel-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full">
                  {reg.location}
                </div>
              </div>

              <div className="p-8 space-y-4 flex-grow flex flex-col justify-between">
                <div className="space-y-3">
                  <h3 className="font-serif text-2xl font-bold text-pastel-900">{reg.title}</h3>
                  <p className="text-sm text-pastel-700 leading-relaxed">{reg.desc}</p>
                </div>

                <div className="pt-4 border-t border-pastel-100 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gold-dark">Key Highlights:</h4>
                  {reg.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-pastel-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-pastel-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Multilingual Advantage Callout */}
      <section className="py-16 bg-gradient-to-br from-pastel-100 via-white to-pastel-100 border-t border-b border-pastel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-200 px-4 py-1.5 rounded-full border border-pastel-300">
            5 Languages, 1 Unified Stage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            Why Multilingual Command Matters for Destination Weddings
          </h2>
          <p className="text-pastel-700 text-base max-w-3xl mx-auto leading-relaxed font-normal">
            Destination weddings bring together extended families from India, local NRI communities, and international colleagues. Having one seasoned host who moves seamlessly between <strong>English</strong>, <strong>Hindi</strong>, <strong>Marwari</strong>, <strong>Tamil</strong>, and <strong>Telugu</strong> ensures elders feel honored, youth stay energized, and international guests follow every ritual without feeling lost.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pt-6">
            {['English', 'Hindi', 'Marwari', 'Tamil', 'Telugu'].map((lang) => (
              <div key={lang} className="bg-white p-4 rounded-2xl border border-pastel-300 shadow-2xs font-serif font-bold text-pastel-900 text-center">
                {lang}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-3 py-1 rounded-full border border-pastel-200">
            Destination FAQ
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            Destination Wedding Emcee Booking FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-pastel-200 p-6 shadow-xs space-y-2">
              <h3 className="font-serif text-lg font-bold text-pastel-900 flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-gold-DEFAULT shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-pastel-700 leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pastel-800 text-pastel-50 p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-700 text-gold-light text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Direct Destination Inquiry</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-pastel-50">
            Lock Your Destination Wedding Dates with Deepika
          </h2>
          <p className="text-pastel-200 text-sm sm:text-base max-w-xl mx-auto">
            Receive custom multi-day hosting quotes for Udaipur, Dubai, Singapore, Bali, or Phuket within 6 hours.
          </p>
          <div className="bg-pastel-50 text-pastel-900 p-6 sm:p-8 rounded-2xl text-left max-w-xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export const destinationWeddingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/destination-wedding',
  component: DestinationWeddingPage,
});
