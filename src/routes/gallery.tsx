import React from 'react';
import { rootRoute } from './root';
import { GallerySection } from '../components/GallerySection';
import { SEOHead } from '../components/SEOHead';
import { Sparkles } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    name: 'Deepika Jain Event Gallery & Stage Highlights',
    description: 'Live event photos, royal entries, corporate summits, and destination wedding hosting moments by Emcee Deepika Jain.',
    url: 'https://www.emceedeepika.com/gallery',
    author: {
      '@type': ['Person', 'LocalBusiness'],
      name: 'Deepika Jain',
      jobTitle: 'International Emcee & Event Host',
      url: 'https://www.emceedeepika.com',
      telephone: '+918056958856',
      email: 'dishajain395@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
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
          author: { '@type': 'Person', name: 'Sarah Mitchell' },
          datePublished: '2026-08-20',
          reviewBody: "Deepika's energy is infectious! She didn't just host our gala; she orchestrated an unforgettable experience for over 1,200 attendees in Dubai.",
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Rajiv & Ananya Malhotra' },
          datePublished: '2026-08-15',
          reviewBody: 'Deepika made our 3-day destination wedding in Udaipur feel like a fairytale. Her multilingual fluency in Marwari and English bridged all our international guests effortlessly!',
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        },
      ],
    },
    about: {
      '@type': 'Thing',
      name: 'Multilingual Emcee & Live Event Hosting Credentials',
    },
  };

  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      <SEOHead
        title="Event Gallery & Stage Highlights | Deepika Jain Emcee"
        description="Explore live event photos, royal entries, corporate summits, and destination wedding hosting moments by Emcee Deepika Jain."
        keywords={['Deepika Jain photo gallery', 'wedding emcee photos', 'stage host event gallery', 'corporate event host pictures']}
        canonicalUrl="https://www.emceedeepika.com/gallery"
        schemaJson={gallerySchema}
      />
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Visual Showcase</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">
            Media Gallery & Event Highlights
          </h1>
          <p className="text-base text-pastel-700 max-w-2xl mx-auto">
            Explore stage photos, royal entries, celebrity interviews, and destination wedding moments.
          </p>
        </div>
      </div>

      <GallerySection />
    </div>
  );
};


