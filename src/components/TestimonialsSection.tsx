import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/emceeData';
import { Star, Play, Quote, X } from 'lucide-react';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<Testimonial | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-pastel-100 via-pastel-50 to-pastel-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-pastel-600 bg-pastel-200 px-4 py-1.5 rounded-full border border-pastel-300">
            Voices of Excellence
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pastel-900">
            Client & Planner Testimonials
          </h2>
          <p className="text-base text-pastel-700">
            Hear from corporate directors, event planners, and couples about their experience working with Deepika.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-white border border-pastel-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-pastel-200 pointer-events-none" />

              <div className="space-y-4">
                {/* Rating */}
                <div className="flex gap-1 text-gold-DEFAULT">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-DEFAULT" />
                  ))}
                </div>

                <p className="text-sm text-pastel-800 italic leading-relaxed">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-pastel-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-pastel-300"
                  />
                  <div>
                    <h4 className="font-serif font-bold text-sm text-pastel-900">{item.name}</h4>
                    <p className="text-xs text-pastel-600 font-semibold">{item.role}</p>
                    <p className="text-[10px] text-gold-dark font-semibold uppercase">{item.location}</p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveVideo(item)}
                  className="w-10 h-10 rounded-full bg-pastel-100 hover:bg-pastel-700 text-pastel-700 hover:text-white border border-pastel-300 flex items-center justify-center transition-all"
                  title="Watch Video Review"
                >
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Review Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pastel-900/80 backdrop-blur-md">
          <div className="relative max-w-2xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl p-6 border border-pastel-200">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-pastel-100 text-pastel-800 flex items-center justify-center hover:bg-pastel-200"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="font-serif text-xl font-bold text-pastel-900 mb-2">
              Video Review: {activeVideo.name}
            </h3>
            <p className="text-xs text-pastel-600 mb-4">{activeVideo.event} ({activeVideo.location})</p>
            <div className="aspect-video bg-pastel-900 rounded-2xl overflow-hidden flex items-center justify-center text-white relative">
              <img
                src={activeVideo.image}
                alt="Video Thumbnail"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-pastel-900/40">
                <div className="w-16 h-16 rounded-full bg-gold-DEFAULT text-pastel-900 flex items-center justify-center shadow-lg">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
                <span className="mt-3 text-xs font-bold uppercase tracking-wider text-pastel-100">
                  Video Demonstration Sample
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
