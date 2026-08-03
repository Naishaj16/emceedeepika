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
    '@type': 'Person',
    name: 'Deepika Jain',
    jobTitle: 'International Corporate Emcee & Event Host',
    description: 'Premier international corporate emcee, gala dinner host, and bilingual event anchor available across Chennai, Dubai, Malaysia, and Singapore.',
    url: 'https://emceedeepika.com',
    sameAs: [
      'https://instagram.com',
      'https://linkedin.com',
    ],
    knowsLanguage: ['English', 'Tamil', 'Hindi'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Emcee & Hosting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Summit & Conference Hosting',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Gala Dinner & D&D Emcee Services',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bilingual Destination Wedding Anchoring',
          },
        },
      ],
    },
  };

  return (
    <div>
      <SEOHead
        title="Deepika Jain | International Corporate Emcee & Event Host"
        description="Book Deepika Jain, premier international corporate emcee & wedding anchor for events in Chennai, Dubai, Malaysia & Singapore. Unrivaled stage presence."
        keywords={[
          'professional emcee for hire',
          'bilingual emcee for hire',
          'international emcee',
          'corporate emcee international events',
          'destination wedding emcee Asia Middle East',
          'multilingual event host',
        ]}
        schemaJson={homepageSchema}
      />
      <Hero onOpenBooking={openBooking} />
      <StatsSection />
      <ServicesBento onOpenBooking={openBooking} />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />

    </div>
  );
};

export const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});
