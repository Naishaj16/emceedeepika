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
    description: 'Deepika Jain hosts weddings, corporate galas, award nights and global summits in four languages across India, the UAE and Asia.',
    url: 'https://emceedeepika.com',
    sameAs: [
      'https://www.instagram.com/emcee_deepikajain/?hl=en',
      'https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177',
    ],
    knowsLanguage: ['English', 'Hindi', 'Marwari', 'Tamil'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Emcee & Hosting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Luxury Wedding Host',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Re-presenter',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Celebrity & Red Carpet Host',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Virtual & Hybrid Global Summits',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Award Shows & Recognition',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private & Festival Events',
          },
        },
      ],
    },
  };

  return (
    <div>
      <SEOHead
        title="Emcee & Event Host in India, UAE & Singapore | Deepika Jain"
        description="Deepika Jain hosts weddings, corporate galas, award nights and global summits in four languages across India, the UAE and Asia. Get in touch."
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
