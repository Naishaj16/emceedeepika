import React from 'react';
import { Sparkles, Calendar, MapPin, Award, CheckCircle2, ArrowRight, Mic, Users, Star, ShieldCheck } from 'lucide-react';
import { Link } from '@tanstack/react-router';

interface HeroWorkshopPosterProps {
  className?: string;
}

export const HeroWorkshopPoster: React.FC<HeroWorkshopPosterProps> = ({ className = '' }) => {
  return (
    <Link
      to="/workshop"
      className={`group relative block w-full max-w-[420px] rounded-[2.5rem] p-1 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.01] ${className}`}
    >
      {/* Outer Multi-layered Animated Luxury Glow */}
      <div className="absolute -inset-2 bg-gradient-to-tr from-amber-500/40 via-gold-DEFAULT/50 to-emerald-500/40 rounded-[2.75rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-500 group-hover:duration-200 animate-pulse" />

      {/* Main Poster Canvas */}
      <div className="relative rounded-[2.25rem] overflow-hidden bg-gradient-to-b from-[#0e1f16] via-[#13281D] to-[#0a150f] border-2 border-gold-DEFAULT/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-white">
        
        {/* Subtle Luxury Pattern Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Top Header Section of Poster */}
        <div className="relative pt-6 px-6 pb-4 text-center border-b border-gold-DEFAULT/20 bg-gradient-to-b from-white/5 to-transparent">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-DEFAULT/20 border border-gold-DEFAULT/50 text-gold-light text-[10px] font-extrabold uppercase tracking-widest mb-2 shadow-xs">
            <Sparkles className="w-3 h-3 text-gold-DEFAULT animate-spin" style={{ animationDuration: '6s' }} />
            <span>Official Masterclass • Chennai</span>
          </div>

          <div className="font-serif text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight">
            1-DAY <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-DEFAULT to-amber-200">EMCEE / ANCHOR</span>
          </div>
          <div className="text-[11px] font-bold uppercase tracking-[0.22em] text-pastel-300 mt-0.5">
            Stage Mastery Workshop
          </div>
        </div>

        {/* Center Stage & Portrait Visual Showcase */}
        <div className="relative mx-4 mt-4 rounded-2xl overflow-hidden aspect-[4/4.2] border border-gold-DEFAULT/40 bg-pastel-950 shadow-inner group-hover:border-gold-DEFAULT transition-colors">
          
          {/* Main Photo */}
          <img
            src="/images/deepika/deepika-workshop-portrait.jpg"
            alt="Emcee Deepika Jain Leading the 1-Day Anchor Masterclass"
            className="w-full h-full object-cover object-top filter contrast-[1.08] brightness-[0.98] group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Seamless Gradients & Vignettes */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e1f16] via-[#0e1f16]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0e1f16]/40 via-transparent to-[#0e1f16]/40" />

          {/* Top Left Floating Tag: Trainer Credentials */}
          <div className="absolute top-3 left-3 bg-[#13281D]/90 backdrop-blur-md border border-gold-DEFAULT/60 px-3 py-1.5 rounded-xl shadow-lg flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <div className="text-left">
              <div className="text-[9px] uppercase tracking-wider text-pastel-300 font-bold leading-none">Mentor</div>
              <div className="text-xs font-serif font-bold text-gold-light leading-tight">Deepika Jain</div>
            </div>
          </div>

          {/* Top Right Floating Tag: Early Bird Price */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white px-3 py-1.5 rounded-xl shadow-lg border border-emerald-400/40 text-right">
            <div className="text-[8px] uppercase tracking-widest text-emerald-200 font-bold leading-none">Pass Price</div>
            <div className="text-sm font-black font-mono leading-tight">₹4,999</div>
          </div>

          {/* Bottom Overlay Info on Photo */}
          <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#13281D]/90 backdrop-blur-md border border-gold-DEFAULT/40 space-y-1">
            <div className="flex items-center justify-between text-[11px] font-bold text-gold-DEFAULT uppercase tracking-wider">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>7th November 2026</span>
              </span>
              <span className="text-[10px] text-pastel-300 font-normal">10 AM – 5:30 PM</span>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-bold text-white">
              <MapPin className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0" />
              <span className="truncate">E Hotel, Express Avenue Mall, Chennai</span>
            </div>
          </div>
        </div>

        {/* Feature Highlights Strip */}
        <div className="p-4 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-[11px] text-pastel-200">
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0" />
              <span className="truncate">Live Mic Practice</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0" />
              <span className="truncate">Script Frameworks</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0" />
              <span className="truncate">Audience Control</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-lg backdrop-blur-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-gold-DEFAULT shrink-0" />
              <span className="truncate">Verified Certificate</span>
            </div>
          </div>

          {/* Action CTA Button inside Poster */}
          <div className="w-full flex items-center justify-between bg-gradient-to-r from-gold-DEFAULT via-amber-400 to-gold-DEFAULT text-pastel-950 px-5 py-3 rounded-2xl font-bold text-xs shadow-xl group-hover:shadow-gold-DEFAULT/40 transition-all font-sans">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pastel-950 animate-bounce" />
              <span className="uppercase tracking-wider">Book Your Seat Now</span>
            </div>
            <div className="flex items-center gap-1 font-extrabold text-sm">
              <span>₹4,999</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Bottom Urgency Micro-copy */}
          <div className="text-center text-[10px] text-pastel-400 font-medium">
            🔥 <strong className="text-emerald-400">Strictly 25 Seats</strong> for 1-on-1 practical stage coaching
          </div>
        </div>

      </div>
    </Link>
  );
};
