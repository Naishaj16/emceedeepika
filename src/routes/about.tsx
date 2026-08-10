import React from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './root';
import { Sparkles, Calendar, ArrowRight, Quote, Mic, Globe, Languages, Users, Award, ShieldCheck } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { SEOHead } from '../components/SEOHead';
import { STATS, TESTIMONIALS } from '../data/emceeData';

const AboutPage: React.FC = () => {
  const { openBooking } = useBooking();

  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Deepika Jain',
    jobTitle: 'International Multilingual Emcee & Event Host',
    description: 'Deepika Jain is a multilingual emcee with 12+ years and 100+ shows across 15+ countries, hosting weddings, galas, and global summits.',
    url: 'https://emceedeepika.com/about',
    sameAs: [
      'https://www.instagram.com/emcee_deepikajain/?hl=en',
      'https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177',
    ],
    knowsLanguage: ['English', 'Hindi', 'Marwari', 'Tamil'],
    workLocation: ['Chennai', 'Mumbai', 'Delhi NCR', 'Udaipur', 'Dubai', 'Singapore', 'Malaysia'],
  };

  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      <SEOHead
        title="About Deepika Jain | International Emcee & Event Host"
        description="Meet Deepika Jain — a multilingual emcee with 12+ years and 100+ shows across 15+ countries, hosting weddings, galas, and global summits."
        keywords={[
          'About Deepika Jain',
          'multilingual emcee bio',
          'international event host biography',
          'wedding and corporate emcee India UAE Asia',
          'bilingual event presenter',
        ]}
        canonicalUrl="https://emceedeepika.com/about"
        schemaJson={aboutSchema}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Behind the Microphone</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pastel-900 leading-tight">
            About Deepika Jain
          </h1>
          <blockquote className="font-serif text-xl sm:text-2xl text-pastel-800 italic max-w-3xl mx-auto">
            "Life is a stage, and every event is an act of connection."
            <span className="block text-sm font-sans font-bold text-gold-dark not-italic mt-2">— Deepika Jain</span>
          </blockquote>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Main Bio Grid with Headshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden border-4 border-white shadow-xl aspect-[4/5] bg-pastel-200">
              <img
                src="/images/deepika/deepika-7.webp"
                alt="Deepika Jain hosting a luxury corporate gala on stage"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <span className="text-xs text-pastel-600 font-medium italic">
                Deepika Jain hosting a live summit on stage
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-pastel-800 leading-relaxed font-medium">
              Deepika Jain has spent 12+ years turning rooms full of strangers into audiences that feel like family. Over 100 shows across 15+ countries later, her approach hasn't changed much: read the room, meet it where it is, and never let the crowd feel like an afterthought — no matter how big the stage or how mixed the guest list.
            </p>

            {/* How it started */}
            <div className="bg-white rounded-2xl p-6 border border-pastel-200 shadow-xs space-y-3">
              <h3 className="font-serif text-2xl font-bold text-pastel-900 flex items-center gap-2">
                <Mic className="w-5 h-5 text-gold-DEFAULT" />
                <span>How it started</span>
              </h3>
              <p className="text-sm text-pastel-700 leading-relaxed">
                Based out of <strong>Chennai & Mumbai, India</strong> with a frequent base in <strong>Dubai, UAE</strong>, what began as a passion for connecting with people on stage grew into a career spanning royal Rajasthan weddings, Chennai & Dubai corporate galas, and Mumbai award nights — often within the same month. Along the way, the throughline stayed the same: an event only works if the person holding the microphone can adapt in real time, in whichever language the room needs.
              </p>
            </div>
          </div>
        </div>

        {/* Fluent in the languages her audiences actually speak */}
        <div className="bg-gradient-to-br from-pastel-100 via-white to-pastel-100 rounded-3xl border border-pastel-300 p-8 sm:p-12 shadow-sm space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pastel-200 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Languages className="w-4 h-4 text-gold-DEFAULT" />
            <span>Multilingual Advantage</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            Fluent in the languages her audiences actually speak
          </h2>
          <p className="text-base text-pastel-800 leading-relaxed">
            Deepika hosts confidently in <strong>English, Hindi, Telugu, Tamil, and Marwari</strong> — not as a party trick, but because a genuinely mixed guest list deserves a host who won't leave part of the room disconnected. Whether it's a North Indian and South Indian family sharing a wedding, or a Dubai crowd spanning South Asian, Gulf, and Western guests, she moves between languages naturally, without losing the moment's timing or tone.
          </p>
        </div>

        {/* What she hosts */}
        <div className="bg-white rounded-3xl border border-pastel-200 p-8 sm:p-12 shadow-xs space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pastel-100 text-pastel-800 text-xs font-bold uppercase tracking-widest border border-pastel-200">
            <ShieldCheck className="w-4 h-4 text-gold-DEFAULT" />
            <span>Preparation & Protocol</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
            What she hosts
          </h2>
          <p className="text-base text-pastel-700 leading-relaxed">
            From luxury weddings and corporate galas to red carpet events, virtual summits, award shows, and private celebrations — Deepika brings the same preparation and stage presence to every format. Every booking starts with a discovery call, a written run-of-show, and name and pronunciation checks well before the event date, because the work that makes a night look effortless happens well before anyone takes the stage.
          </p>
        </div>

        {/* By the numbers */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-4 py-1 rounded-full border border-pastel-200">
              Track Record
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
              By the numbers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-pastel-200 text-center space-y-2 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-dark block">15+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-pastel-800 block">Years Experience</span>
              <p className="text-[11px] text-pastel-600">On stage commanding live audiences</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-pastel-200 text-center space-y-2 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-dark block">2500+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-pastel-800 block">Shows Hosted</span>
              <p className="text-[11px] text-pastel-600">Internationally executed</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-pastel-200 text-center space-y-2 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-dark block">15+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-pastel-800 block">Countries</span>
              <p className="text-[11px] text-pastel-600">Cross-cultural stage mastery</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-pastel-200 text-center space-y-2 shadow-xs">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-dark block">5</span>
              <span className="text-xs font-bold uppercase tracking-wider text-pastel-800 block">Languages</span>
              <p className="text-[11px] text-pastel-600">English, Hindi, Telugu, Tamil, Marwari</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-pastel-200 text-center space-y-2 shadow-xs sm:col-span-2 lg:col-span-1">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-gold-dark block">500K+</span>
              <span className="text-xs font-bold uppercase tracking-wider text-pastel-800 block">Audience Reached</span>
              <p className="text-[11px] text-pastel-600">Energized guests worldwide</p>
            </div>
          </div>
        </div>

        {/* What clients say */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-4 py-1 rounded-full border border-pastel-200">
              Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
              What clients say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl border border-pastel-200 p-8 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-gold-DEFAULT opacity-60" />
                <p className="text-sm sm:text-base text-pastel-800 italic leading-relaxed">
                  "Deepika's energy is infectious! She didn't just host our gala; she orchestrated an unforgettable experience for over 1,200 attendees."
                </p>
              </div>
              <div className="pt-4 border-t border-pastel-100">
                <h4 className="font-serif font-bold text-pastel-900 text-base">Sarah Mitchell</h4>
                <p className="text-xs text-pastel-600">VP of Global Events, Dubai, UAE</p>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-pastel-200 p-8 shadow-xs space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-gold-DEFAULT opacity-60" />
                <p className="text-sm sm:text-base text-pastel-800 italic leading-relaxed">
                  "Deepika made our 3-day destination wedding feel like a fairytale. Her multilingual fluency in Marwari and English bridged all our international guests effortlessly!"
                </p>
              </div>
              <div className="pt-4 border-t border-pastel-100">
                <h4 className="font-serif font-bold text-pastel-900 text-base">Rajiv & Ananya Malhotra</h4>
                <p className="text-xs text-pastel-600">Bride & Groom, Udaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>

        {/* Where to find her next & Internal Links */}
        <div className="bg-pastel-800 text-pastel-50 p-8 sm:p-12 rounded-3xl text-center space-y-8 shadow-xl">
          <div className="space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-light bg-pastel-700/60 px-4 py-1.5 rounded-full border border-pastel-600">
              Season Availability
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold">
              Where to find her next
            </h2>
            <p className="text-base text-pastel-200 leading-relaxed font-normal">
              Currently booking for the 2026–2027 season across <strong>Chennai, Mumbai, Delhi NCR, Udaipur, Dubai, Singapore, and Malaysia</strong>.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:scale-105"
            >
              Get in Touch
            </Link>

            <Link
              to="/services"
              className="bg-pastel-700 hover:bg-pastel-600 text-pastel-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all border border-pastel-600"
            >
              View Services
            </Link>

            <Link
              to="/gallery"
              className="bg-pastel-700 hover:bg-pastel-600 text-pastel-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all border border-pastel-600"
            >
              See the Full Portfolio
            </Link>
          </div>
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
