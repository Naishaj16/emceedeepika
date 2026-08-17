import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { Hero } from '../components/Hero';
import { StatsSection } from '../components/StatsSection';
import { ServicesBento } from '../components/ServicesBento';
import { AboutSection } from '../components/AboutSection';
import { GallerySection } from '../components/GallerySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { BookingForm } from '../components/BookingForm';
import { Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { SEOHead } from '../components/SEOHead';

const HomePage: React.FC = () => {
  const { openBooking } = useBooking();

  const homepageSchema = {
    '@context': 'https://schema.org',
    '@type': ['Person', 'LocalBusiness'],
    name: 'Deepika Jain',
    image: 'https://emceedeepika.com/images/deepika/deepika-5.webp',
    jobTitle: 'International Multilingual Emcee & Event Host',
    description: 'Deepika Jain hosts weddings, corporate galas, award nights, summits, government ceremonies, and family milestones in four languages across India, UAE, and Asia.',
    url: 'https://emceedeepika.com',
    telephone: '+918056958856',
    email: 'dishajain395@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India',
    },
    areaServed: ['Chennai', 'Mumbai', 'Delhi NCR', 'Udaipur', 'Dubai', 'Singapore', 'Malaysia', 'Bali', 'Phuket', 'Maldives'],
    sameAs: [
      'https://www.instagram.com/emcee_deepikajain/',
      'https://www.facebook.com/emceedeepikajain',
      'https://www.youtube.com/@besteventemceeandanchor',
      'https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177'
    ],
    knowsLanguage: ['English', 'Hindi', 'Marwari', 'Tamil', 'Telugu'],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Emcee & Hosting Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Luxury Wedding Host' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Corporate Event Hosting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Celebrity & Red Carpet Hosting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Virtual & Hybrid Global Summits' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Award Shows & Recognition Events' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Birthday Party & Celebration Hosting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Private & Festival Events' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'State & Civic Ceremonies Hosting' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Baby Shower & Milestone Hosting' } },
      ],
    },
  };

  return (
    <div>
      <SEOHead
        title="Professional Emcee for Hire | International & Multilingual Event Host | Deepika Jain"
        description="Deepika Jain has hosted 2,500+ shows across 15+ countries including Singapore, Dubai, Bali, Phuket, and Maldives in 5 languages (English, Hindi, Marwari, Tamil, Telugu)."
        keywords={[
          'professional emcee for hire',
          'bilingual emcee for hire',
          'international emcee',
          'corporate emcee international events',
          'destination wedding emcee Asia Middle East',
          'multilingual event host',
        ]}
        canonicalUrl="https://emceedeepika.com/"
        schemaJson={homepageSchema}
        showHreflang={true}
      />
      <Hero onOpenBooking={openBooking} />
      <StatsSection />
      <ServicesBento onOpenBooking={openBooking} />
      <AboutSection />
      <TestimonialsSection />

      {/* Download Portfolio Section */}
      <section className="py-20 bg-gradient-to-br from-pastel-100 via-white to-pastel-100 border-t border-pastel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-200 px-4 py-1.5 rounded-full border border-pastel-300">
            Official Credentials & Media Kit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            Download Deepika Jain's Official Portfolio
          </h2>
          <p className="text-base text-pastel-700 max-w-2xl mx-auto font-normal leading-relaxed">
            Need a formal presentation deck for your event planning committee? Download the full 2026 media kit containing credentials, show history, testimonials, and stage specifications.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/Deepika_Jain_Official_Emcee_Portfolio_2026.pdf"
              download="Deepika_Jain_Official_Emcee_Portfolio_2026.pdf"
              className="inline-flex items-center gap-3 bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-8 py-4 rounded-full font-bold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Sparkles className="w-5 h-5 text-gold-light" />
              <span>Download Portfolio PDF</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
