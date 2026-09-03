import React from 'react';
import { Award, CheckCircle, Sparkles, Star } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-pastel-100 to-pastel-50 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Portrait Collage */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[3/4] rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-pastel-200">
                <img
                  src="/images/deepika/deepika-2.webp"
                  alt="Deepika Jain - Stage Master"
                  width="300"
                  height="400"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Decorative pastel badge overlay */}
              <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-pastel-300 shadow-xl max-w-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-pastel-100 text-gold-DEFAULT">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="font-serif italic font-bold text-sm text-pastel-900">"Life is a stage, and every event is an act of connection."</p>
                </div>
                <p className="text-xs text-pastel-600 font-semibold text-right">— Deepika Jain</p>
              </div>
            </div>
          </div>

          {/* Text Info */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
              <Star className="w-3.5 h-3.5 text-gold-DEFAULT" />
              <span>Master of Ceremonies</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-pastel-900 leading-tight">
              The Stage Master
            </h2>

            <div className="space-y-4 text-pastel-700 text-base leading-relaxed">
              <p>
                More than a voice — over a decade on some of the world's most demanding stages, Deepika has learned to turn a room of strangers into an audience that feels like family. Her approach pairs high-energy stage presence with something harder to fake: genuinely reading a crowd and meeting it where it is.
              </p>
              <p>
                Fluent in English, Hindi, Marwari, and Tamil, she moves easily between royal Rajasthan weddings, Dubai corporate galas, and Mumbai award nights — often within the same week. The result for clients: one host who doesn't need a translator, a script doctor, or a backup plan when the guest list gets complicated.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                'Multilingual Audience Engagement',
                'Seamless Crisis & Delay Management',
                'VIP & Celebrity Interview Poise',
                'Custom Scripting & Brand Storytelling',
              ].map((strength) => (
                <div key={strength} className="flex items-center gap-3 p-3 rounded-xl bg-white border border-pastel-200">
                  <CheckCircle className="w-5 h-5 text-pastel-600 shrink-0" />
                  <span className="text-sm font-semibold text-pastel-800">{strength}</span>
                </div>
              ))}
            </div>

            {/* Client achievements */}
            <div className="pt-6 border-t border-pastel-200">
              <p className="text-xs uppercase tracking-widest font-bold text-pastel-500 mb-4">Trusted by</p>
              <div className="text-sm text-pastel-700 space-y-2">
                <p>✓ Leading Corporate Event Teams & Brand Organizers</p>
                <p>✓ Luxury Wedding Planners & High-Net-Worth Families</p>
                <p>✓ International Destination Event Organizers</p>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-pastel-700 hover:bg-pastel-800 text-pastel-50 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md"
              >
                Read Full Bio & Journey
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
