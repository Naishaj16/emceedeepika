import React, { useState } from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './root';
import { SERVICES } from '../data/emceeData';
import { Check, Sparkles, Calculator, ArrowRight, HelpCircle, Calendar, ShieldCheck, Globe, Languages } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { SEOHead } from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  const { openBooking } = useBooking();

  // Interactive Package Estimator State
  const [eventType, setEventType] = useState<'wedding' | 'corporate' | 'celebrity' | 'virtual' | 'award' | 'birthday' | 'private' | 'state-civic' | 'family'>('wedding');
  const [days, setDays] = useState<number>(1);
  const [locationType, setLocationType] = useState<'domestic' | 'international'>('domestic');

  const calculateEstimate = () => {
    let base = 0;
    switch (eventType) {
      case 'wedding': base = 120000; break;
      case 'corporate': base = 100000; break;
      case 'celebrity': base = 150000; break;
      case 'virtual': base = 60000; break;
      case 'award': base = 110000; break;
      case 'birthday': base = 75000; break;
      case 'private': base = 85000; break;
      case 'state-civic': base = 125000; break;
      case 'family': base = 70000; break;
    }
    const locationMultiplier = locationType === 'international' ? 1.5 : 1.0;
    const total = base * days * locationMultiplier;
    return total.toLocaleString('en-IN');
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Emcee & Event Hosting Services',
    provider: {
      '@type': 'Person',
      name: 'Deepika Jain',
    },
    description: 'Book a multilingual emcee for weddings, corporate galas, award nights, birthdays, and private events across India, the UAE, and Asia.',
    areaServed: ['India', 'United Arab Emirates', 'Singapore', 'Malaysia', 'Indonesia (Bali)', 'Thailand (Phuket)', 'Maldives', 'Asia'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Hosting Services',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.fullDesc,
        },
      })),
    },
  };

  const faqs = [
    {
      q: 'Which event types does Deepika host?',
      a: 'Weddings, corporate events, celebrity and red carpet appearances, virtual and hybrid summits, award shows, birthdays, and private or festival celebrations.',
    },
    {
      q: 'Does she travel internationally?',
      a: 'Yes — she\'s hosted 2,500+ events across 15+ countries, with regular bookings across Chennai, Mumbai, Delhi NCR, Udaipur, Dubai, Singapore, Malaysia, Bali, Phuket, and Maldives.',
    },
    {
      q: 'Can she host in more than one language during the same event?',
      a: 'Yes — English, Hindi, Marwari, Tamil, and Telugu, switched naturally as the guest list requires.',
    },
  ];

  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      <SEOHead
        title="Emcee & Event Hosting Services | Deepika Jain"
        description="Book a multilingual emcee for weddings, corporate galas, award nights, birthdays, and private events across India, the UAE, and Asia."
        keywords={[
          'Emcee & Event Hosting Services',
          'multilingual wedding emcee',
          'corporate gala host',
          'celebrity red carpet host',
          'award show emcee',
          'birthday party emcee',
          'diaspora festival event host',
        ]}
        canonicalUrl="https://emceedeepika.com/services"
        schemaJson={servicesSchema}
      />

      {/* Hero / Header Section */}
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Master of Ceremonies & Stage Host</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pastel-900 leading-tight">
            Emcee & Event Hosting Services
          </h1>
          <p className="text-base sm:text-lg text-pastel-700 leading-relaxed max-w-3xl mx-auto font-normal">
            Deepika Jain is a multilingual emcee and event host with 12+ years of experience and 100+ shows hosted across 15+ countries. Fluent in English, Hindi, Marwari, and Tamil, she brings the same preparation, stage presence, and cultural fluency to every kind of event — from a two-day destination wedding to a 90-minute corporate keynote. Below is the full range of hosting services, each tailored to the pace and tone the event actually needs.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Services Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl border border-pastel-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-bold tracking-widest text-gold-dark bg-pastel-100 px-3 py-1 rounded-full border border-pastel-200">
                    {service.category}
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-pastel-900">{service.title}</h3>
                <p className="text-sm text-pastel-700 leading-relaxed">{service.fullDesc}</p>
                
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pastel-800">Key Highlights:</h4>
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-pastel-800 font-medium">
                      <Check className="w-4 h-4 text-pastel-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {service.subEvents && service.subEvents.length > 0 && (
                  <div className="pt-3 border-t border-pastel-100 space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gold-dark">Specific Events & Functions Covered:</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {service.subEvents.map((subEvt) => (
                        <span
                          key={subEvt}
                          className="px-2.5 py-1 rounded-lg bg-pastel-100 border border-pastel-200 text-pastel-900 font-semibold text-xs shadow-2xs"
                        >
                          {subEvt}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-pastel-100 flex flex-col gap-3">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-between text-sm font-bold text-pastel-800 hover:text-gold-dark group transition-colors"
                >
                  <span>View {service.category} Portfolio & Deck</span>
                  <ArrowRight className="w-4 h-4 text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <button
                  onClick={openBooking}
                  className="w-full flex items-center justify-center gap-2 bg-pastel-800 hover:bg-pastel-900 text-pastel-50 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all shadow-xs"
                >
                  <span>Inquire About {service.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Why Book Deepika */}
        <div className="bg-gradient-to-br from-pastel-100 via-white to-pastel-100 rounded-3xl border border-pastel-300 p-8 sm:p-12 shadow-sm space-y-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pastel-200 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-gold-DEFAULT" />
            <span>Unmatched Experience & Cultural Versatility</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            Why Work With Deepika
          </h2>
          <p className="text-base text-pastel-800 leading-relaxed font-normal">
            12+ years of experience, 100+ shows across 15+ countries, and fluency in four languages mean one host can cover a genuinely mixed guest list without a translator or a second act. Every engagement starts with a discovery call to understand your event, your audience, and the tone you want on stage — not a generic script dropped into a new venue.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-pastel-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-pastel-200 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5 text-pastel-800" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-pastel-900">15+ Countries</h4>
                <p className="text-xs text-pastel-700">Proven global adaptability</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-pastel-200 flex items-center justify-center shrink-0">
                <Languages className="w-5 h-5 text-pastel-800" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-pastel-900">4 Languages</h4>
                <p className="text-xs text-pastel-700">English, Hindi, Marwari, Tamil</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-pastel-200 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-pastel-800" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-pastel-900">Custom Scripting</h4>
                <p className="text-xs text-pastel-700">Tailored discovery call standard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Package Estimator Box */}
        <div className="bg-white rounded-3xl border-2 border-pastel-300 p-8 sm:p-12 shadow-xl space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 border-b border-pastel-200 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-pastel-100 text-pastel-700 flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-pastel-900">Interactive Package Estimator</h3>
              <p className="text-xs text-pastel-600">Get an instant preliminary estimate for your event structure</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Event Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value as any)}
                className="w-full p-3 rounded-xl bg-pastel-50 border border-pastel-300 text-sm text-pastel-900 font-semibold focus:outline-none"
              >
                <option value="wedding">Luxury Wedding / Sangeet</option>
                <option value="corporate">Corporate Gala / Launch</option>
                <option value="celebrity">Celebrity / Red Carpet</option>
                <option value="virtual">Virtual / Hybrid Event</option>
                <option value="award">Award Shows & Recognition</option>
                <option value="birthday">Birthday & Celebration</option>
                <option value="private">Private & Festival Events</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">Number of Days</label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-pastel-50 border border-pastel-300 text-sm text-pastel-900 font-semibold focus:outline-none"
              >
                <option value={1}>1 Day Event</option>
                <option value={2}>2 Days Package</option>
                <option value={3}>3 Days Destination</option>
                <option value={4}>4+ Days Multi-City</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">Location Zone</label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value as any)}
                className="w-full p-3 rounded-xl bg-pastel-50 border border-pastel-300 text-sm text-pastel-900 font-semibold focus:outline-none"
              >
                <option value="domestic">Domestic India (Mumbai/Delhi/Udaipur etc)</option>
                <option value="international">International (Dubai/Bali/Singapore etc)</option>
              </select>
            </div>
          </div>

          {/* Result Banner */}
          <div className="p-6 rounded-2xl bg-pastel-800 text-pastel-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-pastel-300 font-bold">Estimated Starting Investment</span>
              <p className="font-serif text-3xl font-bold text-gold-light">₹ {calculateEstimate()} *</p>
              <p className="text-[11px] text-pastel-300/80 mt-1">*Preliminary estimate. Final quote includes full event hosting, custom script, and 2 pre-event rehearsals. International travel and rush turnaround available at additional cost.</p>
            </div>
            <button
              onClick={openBooking}
              className="bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md shrink-0"
            >
              Get Exact Pricing
            </button>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-3 py-1 rounded-full border border-pastel-200">
              Clear Answers
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
              Frequently Asked Questions
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

          {/* CTA Button */}
          <div className="pt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-8 py-4 rounded-full font-bold text-base transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Calendar className="w-5 h-5" />
              <span>Get in Touch for Event Inquiries</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});
