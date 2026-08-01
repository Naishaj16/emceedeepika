import React from 'react';
import { ArrowRight, Award, CheckCircle2, Globe2, Sparkles } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-pastel-100 via-pastel-50 to-sage-light/30">
      {/* Background Decorative Ambient Pastel Glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-pastel-200/50 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sage-light/60 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pastel-200/70 border border-pastel-300 text-pastel-800 text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>International Multilingual Emcee & Host</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-pastel-900">
              Deepika Jain: The Voice of Your Most{' '}
              <span className="italic font-normal gold-gradient-text">Memorable Moments</span>
            </h1>

            <p className="text-base sm:text-lg text-pastel-700 leading-relaxed max-w-2xl font-normal">
              12+ Years of Stage Mastery | 100+ Global Shows | Multilingual Elegance (English, Hindi, Marwari, Tamil). Bringing poise, infectious warmth, and royal charisma to global stages.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="flex items-center gap-2 bg-pastel-700 hover:bg-pastel-800 text-pastel-50 px-8 py-4 rounded-full font-semibold text-sm transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                <span>Book Deepika For Event</span>
                <ArrowRight className="w-4 h-4 text-gold-light" />
              </button>

              <Link
                to="/gallery"
                className="flex items-center gap-2 border border-pastel-400 bg-white/60 hover:bg-pastel-100 text-pastel-800 px-7 py-4 rounded-full font-semibold text-sm transition-all shadow-xs"
              >
                View Media Portfolio
              </Link>
            </div>

            {/* Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 border-t border-pastel-200/80">
              <div className="flex items-center gap-2 text-pastel-800 text-xs font-semibold">
                <CheckCircle2 className="w-4 h-4 text-pastel-600" />
                <span>Verified Stage Host</span>
              </div>
              <div className="flex items-center gap-2 text-pastel-800 text-xs font-semibold">
                <Award className="w-4 h-4 text-gold-DEFAULT" />
                <span>Top Event Host 2024</span>
              </div>
              <div className="flex items-center gap-2 text-pastel-800 text-xs font-semibold">
                <Globe2 className="w-4 h-4 text-pastel-600" />
                <span>15+ Countries Covered</span>
              </div>
            </div>
          </div>

          {/* Hero Portrait in Pastel Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-pastel-300 via-sage-DEFAULT/30 to-gold-light/40 blur-lg opacity-70"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-pastel-200 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=900"
                  alt="Deepika Jain - Professional Emcee"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Floating Pastel Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl pastel-glass-card border border-white/60">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-pastel-700 font-bold">Upcoming Season</p>
                      <p className="text-sm font-serif font-bold text-pastel-900">2024-2025 Bookings Open</p>
                    </div>
                    <span className="w-3 h-3 rounded-full bg-pastel-500 animate-pulse"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
