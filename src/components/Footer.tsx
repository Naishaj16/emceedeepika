import React from 'react';
import { Link } from '@tanstack/react-router';
import { Sparkles, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pastel-800 text-pastel-100 pt-16 pb-12 border-t border-pastel-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-pastel-700 border border-pastel-600 flex items-center justify-center text-gold-DEFAULT">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="font-serif text-2xl font-bold text-pastel-50">Deepika Jain</span>
            </div>
            <p className="text-sm text-pastel-200/80 leading-relaxed">
              Bringing poise, multilingual charisma, and unmatched energy to global stages, high-profile weddings, and corporate galas worldwide.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-pastel-700 flex items-center justify-center text-pastel-200 hover:bg-gold-DEFAULT hover:text-pastel-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-pastel-700 flex items-center justify-center text-pastel-200 hover:bg-gold-DEFAULT hover:text-pastel-900 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-pastel-700 flex items-center justify-center text-pastel-200 hover:bg-gold-DEFAULT hover:text-pastel-900 transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-light mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/" className="text-pastel-200 hover:text-gold-light transition-colors">Home Page</Link></li>
              <li><Link to="/about" className="text-pastel-200 hover:text-gold-light transition-colors">About Deepika</Link></li>
              <li><Link to="/services" className="text-pastel-200 hover:text-gold-light transition-colors">Event Services</Link></li>
              <li><Link to="/gallery" className="text-pastel-200 hover:text-gold-light transition-colors">Media Gallery</Link></li>
              <li><Link to="/contact" className="text-pastel-200 hover:text-gold-light transition-colors">Book / Inquiry</Link></li>
            </ul>
          </div>

          {/* Specializations */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-light mb-4">Specializations</h4>
            <ul className="space-y-2.5 text-sm text-pastel-200">
              <li>Luxury Destination Weddings</li>
              <li>Corporate Award Galas</li>
              <li>Celebrity & Red Carpet Interviews</li>
              <li>Multilingual Global Summits</li>
              <li>Brand Product Launches</li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-gold-light mb-4">Direct Contact</h4>
            <div className="space-y-3 text-sm text-pastel-200">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-DEFAULT shrink-0" />
                <span>booking@emceedeepika.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-DEFAULT shrink-0" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-gold-DEFAULT shrink-0" />
                <span>Mumbai / Dubai / Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-pastel-700/60 flex flex-col sm:flex-row items-center justify-between text-xs text-pastel-300/70 gap-4">
          <p>© {new Date().getFullYear()} Deepika Jain. All rights reserved. Designed with Pastel Green aesthetic.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-pastel-100">Privacy Policy</a>
            <a href="#" className="hover:text-pastel-100">Terms of Service</a>
            <a href="#" className="hover:text-pastel-100">Press Kit</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
