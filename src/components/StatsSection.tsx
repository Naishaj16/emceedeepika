import React from 'react';
import { STATS } from '../data/emceeData';
import { Globe, Languages, Users, Calendar } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const icons = [Calendar, Globe, Languages, Users];

  return (
    <section className="py-16 bg-pastel-800 text-pastel-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pastel-900 via-pastel-800 to-pastel-900 opacity-90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className="p-6 rounded-2xl bg-pastel-700/50 border border-pastel-600/40 text-center hover:border-gold-DEFAULT/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-pastel-600/40 border border-pastel-500/30 flex items-center justify-center text-gold-light group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-light mb-1">
                  {stat.value}
                </div>
                <div className="font-bold text-sm text-pastel-100 uppercase tracking-wider mb-1">
                  {stat.label}
                </div>
                <p className="text-xs text-pastel-300/80 font-medium">
                  {stat.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Languages Banner */}
        <div className="mt-12 pt-8 border-t border-pastel-700/80 flex flex-wrap justify-center items-center gap-8 sm:gap-12">
          <span className="text-xs uppercase tracking-widest text-pastel-400 font-bold">Fluency in:</span>
          {['ENGLISH', 'HINDI', 'MARWARI', 'TAMIL', 'TELUGU'].map((lang) => (
            <span
              key={lang}
              className="text-sm font-semibold tracking-widest text-gold-light/90 px-4 py-1.5 rounded-full bg-pastel-900/60 border border-pastel-700"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
