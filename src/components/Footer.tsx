import React from 'react';
import { Link } from '@tanstack/react-router';
import { Sparkles, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-pastel-900 text-pastel-100 pt-16 pb-12 border-t border-pastel-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4 md:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Emcee Deepika Jain Logo"
                className="w-14 h-14 object-contain bg-white/10 rounded-xl p-1 border border-white/20"
              />
              <span className="font-serif text-xl font-bold text-pastel-50">Deepika Jain</span>
            </Link>
            <p className="text-pastel-300 text-sm leading-relaxed">
              International Event Host & Corporate Emcee commanding stages across Chennai, Dubai, Malaysia, and Singapore.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-pastel-50">Quick Links</h4>
            <ul className="space-y-2 text-sm text-pastel-300">
              <li><Link to="/" className="hover:text-pastel-50">Home</Link></li>
              <li><Link to="/about" className="hover:text-pastel-50">About Deepika</Link></li>
              <li><Link to="/services" className="hover:text-pastel-50">Emcee Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-pastel-50 font-semibold text-gold-light">Portfolio & Deck</Link></li>
              <li><Link to="/gallery" className="hover:text-pastel-50">Event Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-pastel-50">Contact Us</Link></li>
            </ul>
          </div>

          {/* Regional SEO Hubs */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-pastel-50">Global Markets</h4>
            <ul className="space-y-2 text-sm text-pastel-300">
              <li><Link to="/locations/chennai" className="hover:text-pastel-50">Wedding Anchor Chennai</Link></li>
              <li><Link to="/locations/dubai" className="hover:text-pastel-50">Corporate Emcee Dubai</Link></li>
              <li><Link to="/locations/malaysia" className="hover:text-pastel-50">D&D Emcee Malaysia (KL)</Link></li>
              <li><Link to="/locations/singapore" className="hover:text-pastel-50">Emcee Singapore</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold text-pastel-50">Follow & Connect</h4>
            <div className="space-y-2 text-sm text-pastel-300">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-pastel-400 shrink-0" />
                <span>dishajain395@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-pastel-400 shrink-0" />
                <span>+91 8056958856 / 8056914320</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-pastel-400 shrink-0" />
                <span>Chennai | Dubai | Singapore</span>
              </p>
            </div>

            {/* Social Media Links: FB, WA, Insta, YT, LinkedIn */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <a
                href="https://www.instagram.com/emcee_deepikajain/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pastel-800 hover:bg-pastel-700 text-pastel-200 hover:text-white flex items-center justify-center transition-all border border-pastel-700 hover:scale-110"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4 text-rose-400" />
              </a>
              <a
                href="https://wa.me/918056958856"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pastel-800 hover:bg-pastel-700 text-pastel-200 hover:text-white flex items-center justify-center transition-all border border-pastel-700 hover:scale-110"
                aria-label="WhatsApp Contact"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
              </a>
              <a
                href="https://www.facebook.com/emceedeepikajain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pastel-800 hover:bg-pastel-700 text-pastel-200 hover:text-white flex items-center justify-center transition-all border border-pastel-700 hover:scale-110"
                aria-label="Facebook Profile"
              >
                <Globe className="w-4 h-4 text-blue-400" />
              </a>
              <a
                href="https://www.youtube.com/@besteventemceeandanchor"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pastel-800 hover:bg-pastel-700 text-pastel-200 hover:text-white flex items-center justify-center transition-all border border-pastel-700 hover:scale-110"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4 text-red-400" />
              </a>
              <a
                href="https://in.linkedin.com/in/anchor-deepika-jain%F0%9F%8E%A4-4a240b177"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-pastel-800 hover:bg-pastel-700 text-pastel-200 hover:text-white flex items-center justify-center transition-all border border-pastel-700 hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-pastel-800 pt-8 text-center text-xs text-pastel-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Emcee Deepika Jain. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/locations/chennai" className="hover:text-pastel-200">Chennai Hub</Link>
            <Link to="/locations/dubai" className="hover:text-pastel-200">Dubai Hub</Link>
            <Link to="/locations/malaysia" className="hover:text-pastel-200">Malaysia Hub</Link>
            <Link to="/locations/singapore" className="hover:text-pastel-200">Singapore Hub</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
