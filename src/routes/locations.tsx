import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { locationSeoMap } from '../data/seoKeywords';
import { SEOHead } from '../components/SEOHead';
import { Sparkles, MapPin, CheckCircle, HelpCircle, ArrowRight, Award, Globe, Mic } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { BookingForm } from '../components/BookingForm';

const LocationLandingPage: React.FC<{ locationKey: string }> = ({ locationKey }) => {
  const data = locationSeoMap[locationKey];
  const { openBooking } = useBooking();

  if (!data) return <div>Location not found</div>;

  // JSON-LD schema for LocalBusiness + Person + Service
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Deepika Jain - ${data.h1Title}`,
    description: data.metaDescription,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.city,
      addressCountry: data.country,
    },
    founder: {
      '@type': 'Person',
      name: 'Deepika Jain',
      jobTitle: 'International Emcee & Event Host',
    },
    keywords: data.primaryKeywords.join(', '),
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

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        keywords={[...data.primaryKeywords, ...data.secondaryKeywords]}
        canonicalUrl={`https://emceedeepika.com/locations/${locationKey}`}
        schemaJson={[schemaJson, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-pastel-200">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-wider">
            <MapPin className="w-4 h-4 text-pastel-600" />
            <span>Target Region: {data.city}, {data.country}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-pastel-900 leading-tight">
            {data.h1Title}
          </h1>

          <p className="text-pastel-700 text-lg max-w-3xl mx-auto leading-relaxed">
            {data.subtitle}
          </p>

          <div className="pt-4 flex justify-center gap-4">
            <button
              onClick={openBooking}
              className="bg-pastel-700 hover:bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-semibold text-base transition-all shadow-md flex items-center gap-2"
            >
              <span>Check {data.city} Availability</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Market Strategy & Keyword Targets */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-pastel-600 font-bold uppercase text-xs tracking-widest">
              <Globe className="w-4 h-4" />
              <span>Local Search & Intent Strategy</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              Why Event Organizers in {data.city} Choose Deepika
            </h2>
            <p className="text-pastel-700 leading-relaxed">
              {data.marketContext}
            </p>
            <div className="space-y-3">
              {data.primaryKeywords.map((kw, i) => (
                <div key={i} className="flex items-center gap-3 text-pastel-800 font-medium">
                  <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="capitalize">{kw}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Highlights Card */}
          <div className="bg-pastel-100/70 border border-pastel-300 p-8 rounded-3xl shadow-sm space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-pastel-200 flex items-center justify-center text-pastel-800">
                <Mic className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-pastel-900">Stage Excellence</h3>
                <p className="text-pastel-600 text-sm">Flawless execution & audience energy</p>
              </div>
            </div>
            <p className="text-pastel-700 text-sm leading-relaxed">
              Whether orchestrating complex protocol for corporate summits or keeping thousands entertained at grand celebrations, Deepika adapts seamlessly to regional etiquette while elevating international standards.
            </p>
            <div className="border-t border-pastel-200 pt-4 grid grid-cols-2 gap-4 text-center">
              <div>
                <span className="block text-2xl font-bold text-pastel-900">500+</span>
                <span className="text-xs text-pastel-600">Events Hosted</span>
              </div>
              <div>
                <span className="block text-2xl font-bold text-pastel-900">4+</span>
                <span className="text-xs text-pastel-600">Countries Covered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GEO FAQ Section (Generative Engine Optimization) */}
      <section className="py-16 bg-pastel-100/50 border-t border-b border-pastel-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 text-pastel-600 font-bold uppercase text-xs tracking-widest">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions ({data.city})</span>
            </div>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              {data.city} Emcee & Anchor Booking FAQs
            </h2>
            <p className="text-pastel-600 text-sm">
              Answers to common hiring queries optimized for search engines and AI assistants.
            </p>
          </div>

          <div className="space-y-6">
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

      {/* Booking Form CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-pastel-800 text-pastel-50 p-8 sm:p-10 rounded-3xl shadow-xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-700 text-gold-light text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Direct {data.city} Event Inquiry</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl font-bold text-pastel-50">
            Connect with Deepika for Your Event in {data.city}
          </h2>
          <p className="text-pastel-200 text-sm sm:text-base max-w-xl mx-auto">
            Receive a custom proposal and availability response within 6 hours.
          </p>
          <div className="bg-pastel-50 text-pastel-900 p-6 sm:p-8 rounded-2xl text-left max-w-xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export const chennaiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/chennai',
  component: () => <LocationLandingPage locationKey="chennai" />,
});

export const dubaiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/dubai',
  component: () => <LocationLandingPage locationKey="dubai" />,
});

export const malaysiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/malaysia',
  component: () => <LocationLandingPage locationKey="malaysia" />,
});

export const singaporeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/singapore',
  component: () => <LocationLandingPage locationKey="singapore" />,
});
