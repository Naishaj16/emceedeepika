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

const HomePage: React.FC = () => {
  const { openBooking } = useBooking();

  return (
    <div>
      <Hero onOpenBooking={openBooking} />
      <StatsSection />
      <ServicesBento onOpenBooking={openBooking} />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-24 bg-pastel-800 text-pastel-50 relative overflow-hidden" id="contact">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-700/80 border border-pastel-600 text-gold-light text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4" />
            <span>Limited Dates for 2024-2025 Season</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pastel-50">
            Ready to Elevate Your Next Grand Event?
          </h2>

          <p className="text-pastel-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Secure your date with India's leading international emcee today. Custom quotes provided within 6 hours.
          </p>

          <div className="bg-pastel-50 text-pastel-900 p-8 sm:p-10 rounded-3xl shadow-2xl border border-pastel-300 max-w-2xl mx-auto text-left">
            <h3 className="font-serif text-2xl font-bold text-pastel-900 mb-6 text-center">
              Quick Availability Request
            </h3>
            <BookingForm />
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
