import React, { useState } from 'react';
import { Sparkles, Youtube, Play, ExternalLink, ArrowRight, Video, Flame, Star, Mic, Globe } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { youtubeShortsData, YouTubeShort } from '../data/youtubeShorts';

export const ShortsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const categories = ['All', 'Corporate', 'Weddings', 'International', 'Interactive Games', 'Celebrity'];

  const filterCategory = (short: YouTubeShort) => {
    const titleLower = short.title.toLowerCase();
    if (activeCategory === 'All') return true;
    if (activeCategory === 'Corporate') return titleLower.includes('corporate') || titleLower.includes('mc') || titleLower.includes('teambuilding') || titleLower.includes('fada');
    if (activeCategory === 'Weddings') return titleLower.includes('wedding') || titleLower.includes('sangeet') || titleLower.includes('navratri') || titleLower.includes('reels');
    if (activeCategory === 'International') return titleLower.includes('thai') || titleLower.includes('phuket') || titleLower.includes('international') || titleLower.includes('dubai');
    if (activeCategory === 'Interactive Games') return titleLower.includes('game') || titleLower.includes('dancing') || titleLower.includes('fun') || titleLower.includes('interactive');
    if (activeCategory === 'Celebrity') return titleLower.includes('mahatria') || titleLower.includes('auction') || titleLower.includes('award') || titleLower.includes('jito');
    return true;
  };

  const filteredShorts = youtubeShortsData.filter((short) => {
    const matchesCategory = filterCategory(short);
    const matchesSearch = short.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Watch YouTube Shorts & Live Stage Videos | Emcee Deepika Jain"
        description="Watch official YouTube Shorts, live stage hosting clips, crowd interactions, and wedding highlights by International Emcee Deepika Jain."
        canonicalUrl="https://www.emceedeepika.com/shorts"
      />

      <main className="pt-28 pb-20 bg-[#F6FAF7] min-h-screen relative overflow-hidden">
        {/* Background Ambient Glows */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
          <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] glow-gold rounded-full blur-3xl opacity-60" />
          <div className="absolute top-[30%] -right-[10%] w-[40%] h-[40%] glow-rose rounded-full blur-3xl opacity-40" />
          <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] glow-pastel rounded-full blur-3xl opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-pastel-200 text-pastel-900 text-xs font-semibold uppercase tracking-wider shadow-xs">
              <Youtube className="w-4 h-4 text-red-600" />
              <span>Official YouTube Shorts & Stage Highlights</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pastel-950 tracking-tight">
              Live Stage Moments &{' '}
              <span className="italic font-normal gold-gradient-text">YouTube Shorts</span>
            </h1>

            <p className="text-base sm:text-lg text-pastel-700 leading-relaxed">
              Experience the unmatched crowd energy, quick-witted hosting, and luxury stage authority of Deepika Jain. Click any short below to watch in full high-definition on YouTube!
            </p>

            {/* Subscribe Channel Banner */}
            <div className="pt-2 flex justify-center">
              <a
                href="https://www.youtube.com/@besteventemceeandanchor?sub_confirmation=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-95 group"
              >
                <Youtube className="w-5 h-5 fill-white text-red-600" />
                <span>Subscribe on YouTube Channel</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-pastel-850 text-white shadow-md scale-105'
                    : 'bg-white/80 hover:bg-pastel-100 text-pastel-800 border border-pastel-200 shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Shorts Grid (Vertical 9:16 Aspect Ratio) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredShorts.map((short) => (
              <a
                key={short.id}
                href={short.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-pastel-900 border border-pastel-200/80 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col aspect-[9/16]"
              >
                {/* Thumbnail Image */}
                <img
                  src={short.thumbnail}
                  alt={short.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500 filter brightness-95 group-hover:brightness-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 group-hover:via-black/20 transition-all" />

                {/* Top Badge: YouTube Shorts Tag */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider">
                    <Youtube className="w-3 h-3 text-red-500 fill-red-500" />
                    <span>Short</span>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-red-600/90 text-white flex items-center justify-center shadow-xl group-hover:scale-115 group-hover:bg-red-600 transition-all duration-300">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Title & Action Bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 z-10 text-left space-y-1.5 pointer-events-none">
                  <p className="text-xs sm:text-sm font-semibold text-white line-clamp-2 leading-snug drop-shadow-sm group-hover:text-gold-light transition-colors">
                    {short.title}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] sm:text-xs text-pastel-200 font-medium">
                    <span>Watch on YouTube</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 text-center bg-white/90 backdrop-blur-md border border-pastel-200 rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-gold-DEFAULT/15 mx-auto flex items-center justify-center text-gold-DEFAULT">
              <Sparkles className="w-7 h-7" />
            </div>

            <div className="space-y-2 max-w-xl mx-auto">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-pastel-950">
                Want to Bring This Energy to Your Event?
              </h2>
              <p className="text-sm sm:text-base text-pastel-700">
                Book Deepika Jain for your upcoming luxury wedding, corporate summit, or international gala.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="/contact"
                className="bg-[#13281D] hover:bg-[#1C3B2B] text-white px-8 py-4 rounded-full font-semibold text-sm sm:text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-95"
              >
                Inquire & Check Availability
              </a>
              <a
                href="https://www.youtube.com/@besteventemceeandanchor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-pastel-400 bg-white hover:bg-pastel-100 text-pastel-900 px-7 py-4 rounded-full font-semibold text-sm sm:text-base transition-all shadow-xs"
              >
                <Youtube className="w-4 h-4 text-red-600" />
                <span>Visit YouTube Channel</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
