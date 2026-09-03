import React, { useState } from 'react';
import { GALLERY } from '../data/emceeData';
import { Image as ImageIcon, Maximize2, X, MapPin, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';
import { Link } from '@tanstack/react-router';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [visibleCount, setVisibleCount] = useState<number>(12);

  const categories = [
    { key: 'all', label: 'All Media' },
    { key: 'wedding', label: 'Weddings' },
    { key: 'corporate', label: 'Corporate' },
    { key: 'festival', label: 'Festivals' },
    { key: 'international', label: 'International' },
    { key: 'award', label: 'Awards' },
    { key: 'spotlight', label: 'Spotlight' },
  ];

  const filteredGallery = GALLERY.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  const visibleItems = filteredGallery.slice(0, visibleCount);

  return (
    <section className="py-24 bg-pastel-50 relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-pastel-600 bg-pastel-100 px-4 py-1.5 rounded-full border border-pastel-200">
            Memorable Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pastel-900">
            Stage Showcase & Event Highlights
          </h2>
          <p className="text-base text-pastel-700">
            Explore organized media highlights across Weddings, Corporate Galas, Festivals, Awards, and Stage Spotlight.
          </p>
        </div>

        {/* Google Photos Album Direct View Banner */}
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-r from-pastel-800 via-pastel-900 to-pastel-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gold-DEFAULT/30">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-DEFAULT/20 border border-gold-DEFAULT/40 text-gold-light text-xs font-semibold">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Full High-Res Album</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Explore Official Live Google Photos Album
            </h3>
            <p className="text-sm text-pastel-200/90 max-w-xl">
              Browse 100+ live event photos, stage highlights, and royal entry moments directly on Google Photos without any bandwidth cost.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="https://photos.app.goo.gl/uFJeLfBgQYUQYXoFA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-DEFAULT to-gold-light hover:from-gold-dark hover:to-gold-DEFAULT text-pastel-950 font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-lg hover:shadow-gold-DEFAULT/30 hover:scale-105"
            >
              <span>View Full Google Photos Album</span>
              <Maximize2 className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setActiveCategory(cat.key);
                setVisibleCount(12);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all border ${
                activeCategory === cat.key
                  ? 'bg-pastel-800 text-pastel-50 border-pastel-800 shadow-md scale-105'
                  : 'bg-white text-pastel-700 border-pastel-200 hover:bg-pastel-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-pastel-900/90 border border-pastel-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3] flex items-center justify-center p-1"
            >
              <img
                src={item.image}
                alt={item.title}
                width="400"
                height="300"
                loading="lazy"
                decoding="async"
                className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 rounded-xl"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-pastel-900/90 via-pastel-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs uppercase tracking-widest text-gold-light font-bold">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-pastel-700/80 flex items-center justify-center text-white">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-1">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-xs text-pastel-200/90">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-gold-DEFAULT" />
                    {item.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-gold-DEFAULT" />
                    {item.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredGallery.length && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setVisibleCount((prev) => prev + 12)}
              className="inline-flex items-center gap-2 bg-pastel-700 hover:bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md"
            >
              <span>Load More Photos</span>
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pastel-900/80 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-pastel-200 animate-fadeIn">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-pastel-900/60 text-white flex items-center justify-center hover:bg-pastel-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[75vh] bg-pastel-900 flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>
            <div className="p-6 bg-pastel-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-bold text-pastel-600">
                  {selectedItem.category}
                </span>
                <h4 className="font-serif text-xl font-bold text-pastel-900">
                  {selectedItem.title}
                </h4>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold text-pastel-700">
                <span className="flex items-center gap-1 bg-pastel-200 px-3 py-1.5 rounded-full">
                  <MapPin className="w-3.5 h-3.5 text-pastel-600" />
                  {selectedItem.location}
                </span>
                <span className="flex items-center gap-1 bg-pastel-200 px-3 py-1.5 rounded-full">
                  <Calendar className="w-3.5 h-3.5 text-pastel-600" />
                  {selectedItem.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
