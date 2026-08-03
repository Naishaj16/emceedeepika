import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { Award, CheckCircle, Globe, Heart, Mic, Sparkles, Star, Users } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const AboutPage: React.FC = () => {
  const { openBooking } = useBooking();

  const timeline = [
    { year: '2012', title: 'Beginning of the Stage Journey', desc: 'Started hosting university galas and regional cultural events in India.' },
    { year: '2016', title: 'Pan-India Corporate Acclaim', desc: 'Expanded into corporate product launches for Fortune 500 brands in Mumbai and Delhi.' },
    { year: '2019', title: 'International Destination Weddings', desc: 'Hosted high-profile royal weddings in Rajasthan, Dubai, Thailand, and Bali.' },
    { year: '2022', title: 'Celebrity Red Carpet Host', desc: 'Interviewed top film personalities and hosted major awards ceremonies.' },
    { year: '2024+', title: '100+ Global Shows & 500K Audience', desc: 'Established as an international emcee with 4-language fluency.' },
  ];

  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Behind the Voice</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">
            About Deepika Jain
          </h1>
          <p className="text-base text-pastel-700 max-w-2xl mx-auto">
            Multilingual International Emcee, Stage Alchemist, and Event Host with over 12 years of experience commanding global stages.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/5] bg-pastel-200">
              <img
                src="/images/deepika/deepika-7.webp"
                alt="Deepika Jain Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              Crafting Events That Connect
            </h2>
            <p className="text-pastel-700 leading-relaxed">
              Great events need more than a microphone—they need genuine connection. Deepika brings warmth, energy, and authenticity to every moment, creating celebrations that feel grounded and memorable.
            </p>
            <p className="text-pastel-700 leading-relaxed">
              Fluent in <strong>English, Hindi, Marwari, and Tamil</strong>, Deepika connects authentically with guests of diverse cultural backgrounds. Whether hosting a traditional Marwari wedding or a modern tech summit, she adapts her tone and language to match the moment.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-pastel-200">
                <Mic className="w-6 h-6 text-pastel-600 mb-2" />
                <h4 className="font-bold text-pastel-900 text-sm">Stage Presence</h4>
                <p className="text-xs text-pastel-600">Poise, warmth, and quick spontaneous wit.</p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-pastel-200">
                <Globe className="w-6 h-6 text-pastel-600 mb-2" />
                <h4 className="font-bold text-pastel-900 text-sm">Multilingual Ease</h4>
                <p className="text-xs text-pastel-600">4 languages for global guest warmth.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-pastel-600 bg-pastel-200 px-4 py-1 rounded-full">
              Milestones
            </span>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              The Journey So Far
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:w-0.5 before:bg-pastel-300 hidden md:block">
            {timeline.map((item, idx) => (
              <div key={item.year} className={`flex items-center justify-between gap-8 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                <div className="w-1/2"></div>
                <div className="w-8 h-8 rounded-full bg-pastel-700 text-gold-light flex items-center justify-center font-bold text-xs shrink-0 z-10 shadow-md">
                  {idx + 1}
                </div>
                <div className="w-1/2 bg-white p-6 rounded-2xl border border-pastel-200 shadow-sm space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{item.year}</span>
                  <h3 className="font-serif font-bold text-lg text-pastel-900">{item.title}</h3>
                  <p className="text-xs text-pastel-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile version of timeline */}
          <div className="md:hidden space-y-4">
            {timeline.map((item) => (
              <div key={item.year} className="bg-white p-5 rounded-2xl border border-pastel-200 shadow-sm space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">{item.year}</span>
                <h3 className="font-serif font-bold text-base text-pastel-900">{item.title}</h3>
                <p className="text-xs text-pastel-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-pastel-800 text-pastel-50 p-10 rounded-3xl text-center space-y-6">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Looking for an Extraordinary Host for Your Event?
          </h3>
          <button
            onClick={openBooking}
            className="bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-lg"
          >
            Request Your Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});
