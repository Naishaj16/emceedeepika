import React from 'react';
import { ArrowRight, Award, CheckCircle2, Globe2, Sparkles, Mic, Star, Calendar } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { HeroWorkshopPoster } from './HeroWorkshopPoster';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-[#F6FAF7]">
      {/* 1. Exact naishajain.me Background Photo Effect (Seamless grand stage fade) */}
      <div className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[65%] h-full pointer-events-none overflow-hidden z-0 select-none opacity-30 sm:opacity-35 md:opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-[#F6FAF7] via-[#F6FAF7]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F6FAF7] via-transparent to-[#F6FAF7]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6FAF7]/50 via-transparent to-[#F6FAF7] z-10" />
        <div
          className="w-full h-full bg-cover bg-center scale-105 md:scale-[1.18] transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `url('/images/deepika/deepika-hero-bg.webp')`,
            filter: 'contrast(1.15) brightness(1.02)',
          }}
        />
      </div>

      {/* 2. Ambient Lighting Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] glow-gold rounded-full blur-3xl opacity-70 animate-pulse-glow" />
        <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] glow-pastel rounded-full blur-3xl opacity-60 animate-float-subtle" />
        <div className="absolute -bottom-[10%] left-[25%] w-[40%] h-[40%] glow-rose rounded-full blur-3xl opacity-40 animate-float-delayed" />
      </div>

      {/* 3. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill - Workshop Alert */}
            <Link
              to="/workshop"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/15 via-gold-DEFAULT/20 to-emerald-500/15 backdrop-blur-md border border-gold-DEFAULT/50 text-pastel-950 text-xs font-bold uppercase tracking-wider shadow-sm hover:border-gold-DEFAULT transition-all group"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <Sparkles className="w-3.5 h-3.5 text-gold-dark" />
              <span>1-Day Masterclass • 21st Nov at E Hotel Chennai</span>
              <ArrowRight className="w-3 h-3 text-gold-dark group-hover:translate-x-0.5 transition-transform" />
            </Link>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] text-pastel-950 tracking-tight">
              Deepika Jain:{' '}
              <span className="italic font-normal gold-gradient-text block sm:inline">The Voice</span>{' '}
              of Your Most Memorable Moments
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-pastel-750 leading-relaxed max-w-2xl font-normal">
              Premier <strong>international emcee</strong> and <strong>multilingual event host</strong> with 12+ years on stage, 2,500+ shows hosted across 15+ countries, and fluency in 5 languages — bringing magnetic energy, cultural versatility, and stage authority to luxury destination weddings, global summits, and celebrity galas.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/workshop"
                className="flex items-center gap-2.5 bg-gradient-to-r from-[#13281D] via-[#1C3B2B] to-[#13281D] hover:from-[#1C3B2B] hover:to-[#2E5941] text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95 group cursor-pointer border border-gold-DEFAULT/40"
              >
                <Sparkles className="w-4 h-4 text-gold-DEFAULT animate-pulse" />
                <span className="text-white">Join 1-Day Workshop (₹4,999)</span>
                <ArrowRight className="w-4 h-4 text-gold-DEFAULT group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/contact"
                className="flex items-center gap-2 border border-pastel-400 bg-white/90 hover:bg-pastel-100 text-pastel-900 px-7 py-4 rounded-full font-semibold text-sm sm:text-base transition-all shadow-sm backdrop-blur-sm cursor-pointer"
              >
                <Mic className="w-4 h-4 text-pastel-700" />
                <span>Hire For Events</span>
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-pastel-200/80">
              <div className="flex items-center gap-2 text-pastel-900 text-xs sm:text-sm font-semibold">
                <CheckCircle2 className="w-4 h-4 text-pastel-600" />
                <span>12+ Years Stage Mastery</span>
              </div>
              <div className="flex items-center gap-2 text-pastel-900 text-xs sm:text-sm font-semibold">
                <Award className="w-4 h-4 text-gold-DEFAULT" />
                <span>2,500+ Stage Shows</span>
              </div>
              <div className="flex items-center gap-2 text-pastel-900 text-xs sm:text-sm font-semibold">
                <Globe2 className="w-4 h-4 text-pastel-600" />
                <span>15+ Countries Covered</span>
              </div>
            </div>
          </div>

          {/* Right Workshop Showcase Custom Luxury Poster */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroWorkshopPoster />
          </div>

        </div>
      </div>

      {/* 4. Vertical "SCROLL TO DISCOVER" Indicator (Exact naishajain.me feature) */}
      <div className="hidden lg:flex absolute right-8 bottom-12 items-center gap-3 rotate-90 origin-right pointer-events-none select-none opacity-60">
        <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-pastel-600 whitespace-nowrap">
          Scroll to Discover
        </span>
        <div className="w-12 h-[1.5px] bg-pastel-400"></div>
      </div>
    </section>
  );
};



