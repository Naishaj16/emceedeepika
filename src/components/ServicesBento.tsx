import React from 'react';
import { SERVICES } from '../data/emceeData';
import { Heart, Briefcase, Star, Video, ArrowRight, Check, Trophy, Sparkles } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface ServicesBentoProps {
  onOpenBooking: () => void;
}

export const ServicesBento: React.FC<ServicesBentoProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Heart': return <Heart className="w-6 h-6 text-gold-DEFAULT" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold-DEFAULT" />;
      case 'Star': return <Star className="w-6 h-6 text-gold-DEFAULT" />;
      case 'Video': return <Video className="w-6 h-6 text-gold-DEFAULT" />;
      case 'Trophy': return <Trophy className="w-6 h-6 text-gold-DEFAULT" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold-DEFAULT" />;
      default: return <Star className="w-6 h-6 text-gold-DEFAULT" />;
    }
  };

  return (
    <section className="py-24 bg-pastel-50 relative" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-pastel-600 bg-pastel-100 px-4 py-1.5 rounded-full border border-pastel-200">
            Excellence in Execution
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pastel-900">
            Curated Event Specializations
          </h2>
          <p className="text-base text-pastel-700 leading-relaxed">
            Tailoring voice, style, and energy to suit the unique audience dynamics of every high-end celebration or summit.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`${service.colSpan} group relative rounded-3xl overflow-hidden bg-white border border-pastel-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between p-8`}
            >
              {/* Background preview image on hover */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500 overflow-hidden pointer-events-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="relative z-10 space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-pastel-100 border border-pastel-200 flex items-center justify-center">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="font-serif text-2xl font-bold text-pastel-900 group-hover:text-pastel-700 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-pastel-700 leading-relaxed">
                  {service.fullDesc}
                </p>

                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-pastel-800">
                      <div className="w-4 h-4 rounded-full bg-pastel-200 flex items-center justify-center text-pastel-700 shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-pastel-100 flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-pastel-800 hover:text-pastel-600 gold-underline"
                >
                  <span>Inquire for {service.category}</span>
                  <ArrowRight className="w-4 h-4 text-gold-DEFAULT" />
                </button>

                <span className="text-xs font-semibold text-pastel-500 uppercase tracking-widest">
                  {service.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-pastel-200 hover:bg-pastel-300 text-pastel-900 px-8 py-3.5 rounded-full font-bold text-sm transition-all border border-pastel-300 shadow-xs"
          >
            <span>Explore Complete Services & Estimator</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
