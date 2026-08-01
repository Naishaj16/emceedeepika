import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { GallerySection } from '../components/GallerySection';
import { Sparkles } from 'lucide-react';

const GalleryPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-pastel-50">
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

export const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: GalleryPage,
});
