import React, { useState } from 'react';
import { GALLERY } from '../data/emceeData';
import { Image as ImageIcon, Maximize2, X, MapPin, Calendar } from 'lucide-react';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'wedding' | 'corporate' | 'celebrity' | 'international'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all'
    ? GALLERY
    : GALLERY.filter((item) => item.category === filter);

  return (
    <section className="py-24 bg-pastel-50 relative" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-pastel-600 bg-pastel-100 px-4 py-1.5 rounded-full border border-pastel-200">
            Memorable Moments
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pastel-900">
            A Glimpse into the Stage Magic
          </h2>
          <p className="text-base text-pastel-700">
            Capturing high-energy performances, royal entries, and gala hosts across continents.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: 'All Events', key: 'all' },
            { label: 'Weddings', key: 'wedding' },
            { label: 'Corporate Galas', key: 'corporate' },
            { label: 'Celebrity Shows', key: 'celebrity' },
            { label: 'International', key: 'international' },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                filter === tab.key
                  ? 'bg-pastel-700 text-pastel-50 shadow-md border border-pastel-700'
                  : 'bg-white text-pastel-800 hover:bg-pastel-200 border border-pastel-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-2xl overflow-hidden bg-pastel-200 border border-pastel-200 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer aspect-[4/3]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
            <div className="max-h-[75vh] bg-pastel-900">
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
