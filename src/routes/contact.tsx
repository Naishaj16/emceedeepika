import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { SEOHead } from '../components/SEOHead';
import { Mail, Phone, MapPin, Sparkles, Clock, Globe, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      <SEOHead
        title="Contact Emcee Deepika Jain | Event Booking & Inquiries"
        description="Connect directly with Emcee Deepika Jain's management for wedding, corporate gala, award show, and international event date inquiries."
        keywords={['contact Deepika Jain', 'book emcee Deepika', 'wedding anchor contact Chennai Dubai', 'corporate host inquiry']}
        canonicalUrl="https://emceedeepika.com/contact"
      />
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">
            Connect with Deepika for Your Event
          </h1>
          <p className="text-base text-pastel-700 max-w-2xl mx-auto">
            Direct communication with Deepika's management team for date reservations and customized event proposals.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Direct Channels */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-pastel-200 shadow-md flex flex-col justify-between space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-100 border border-pastel-200 text-xs font-bold text-pastel-800 uppercase tracking-wider mb-4">
                <Globe className="w-4 h-4 text-gold-DEFAULT" />
                <span>Direct Contact Channels</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pastel-900 mb-6">Reach Management</h3>
              
              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-pastel-100 text-pastel-700 flex items-center justify-center shrink-0 border border-pastel-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pastel-900 text-base">Official Email (Management)</h4>
                    <a
                      href="mailto:dishajain395@gmail.com"
                      className="text-pastel-700 hover:text-pastel-900 font-medium underline decoration-pastel-300 hover:decoration-pastel-700 transition-colors"
                    >
                      dishajain395@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-pastel-100 text-pastel-700 flex items-center justify-center shrink-0 border border-pastel-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pastel-900 text-base">Phone & WhatsApp</h4>
                    <p className="text-pastel-700 font-medium">+91 8056958856 <span className="text-xs text-pastel-500 font-normal">(Primary / WhatsApp)</span></p>
                    <p className="text-pastel-700 font-medium">+91 8056914320 <span className="text-xs text-pastel-500 font-normal">(Management Desk)</span></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-pastel-100 text-pastel-700 flex items-center justify-center shrink-0 border border-pastel-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pastel-900 text-base">Base Locations</h4>
                    <p className="text-pastel-700 font-medium">Chennai & Mumbai, India <span className="text-xs text-pastel-500 font-normal">(Primary Base)</span></p>
                    <p className="text-pastel-700 font-medium">Dubai, UAE & Rajasthan <span className="text-xs text-pastel-500 font-normal">(Frequent Base)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Handles */}
            <div className="border-t border-pastel-200 pt-6">
              <h4 className="font-bold text-pastel-900 text-xs uppercase tracking-wider mb-3">Official Social Profiles</h4>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.instagram.com/emcee_deepikajain/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pastel-50 hover:bg-pastel-100 text-pastel-800 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all border border-pastel-200 shadow-xs"
                >
                  <Instagram className="w-4 h-4 text-rose-500" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://wa.me/918056958856"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pastel-50 hover:bg-pastel-100 text-pastel-800 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all border border-pastel-200 shadow-xs"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://www.facebook.com/emceedeepikajain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pastel-50 hover:bg-pastel-100 text-pastel-800 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all border border-pastel-200 shadow-xs"
                >
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
                <a
                  href="https://www.youtube.com/@besteventemceeandanchor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pastel-50 hover:bg-pastel-100 text-pastel-800 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all border border-pastel-200 shadow-xs"
                >
                  <Youtube className="w-4 h-4 text-red-600" />
                  <span>YouTube</span>
                </a>
                <a
                  href="https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-pastel-50 hover:bg-pastel-100 text-pastel-800 px-4 py-2.5 rounded-2xl font-bold text-xs transition-all border border-pastel-200 shadow-xs"
                >
                  <Linkedin className="w-4 h-4 text-sky-600" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Direct Management & Portfolio Download Desk */}
          <div className="bg-pastel-800 text-pastel-50 p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between space-y-6 text-left border border-pastel-700">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-wider bg-pastel-700/60 px-3.5 py-1.5 rounded-full border border-pastel-600">
                <Clock className="w-4 h-4" />
                <span>Direct Desk & Turnaround</span>
              </div>
              
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Event Consultations & Riders</h3>
              
              <p className="text-sm text-pastel-200 leading-relaxed font-normal">
                For prompt event date reservations, custom script proposals, technical stage riders, and package estimates, connect directly via phone or WhatsApp.
              </p>

              <div className="space-y-3 pt-2 text-xs text-pastel-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Instant response on WhatsApp for date availability</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Customized run-of-show templates provided</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>Bilingual script review for multi-cultural events</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-pastel-700">
              <a
                href="/portfolio"
                className="w-full flex items-center justify-center gap-2 bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 py-4 rounded-2xl font-bold text-sm transition-all shadow-md hover:scale-[1.02] group"
              >
                <span>View Portfolio & Media Decks</span>
                <ArrowRight className="w-4 h-4 text-pastel-900 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});
