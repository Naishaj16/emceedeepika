import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Sparkles, Menu, X, Calendar, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'pastel-glass shadow-md py-3'
          : 'bg-gradient-to-b from-pastel-100/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-pastel-200 border border-pastel-300 flex items-center justify-center text-pastel-800 shadow-sm group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-pastel-600" />
          </div>
          <div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-pastel-900 block group-hover:text-pastel-700 transition-colors">
              Deepika Jain
            </span>
            <span className="text-[10px] uppercase tracking-widest text-pastel-600 font-semibold block">
              International Emcee & Host
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeProps={{
                className: 'text-pastel-800 font-bold border-b-2 border-gold-DEFAULT pb-1',
              }}
              inactiveProps={{
                className: 'text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors',
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 bg-pastel-700 hover:bg-pastel-800 text-pastel-50 px-5 py-2.5 rounded-full font-medium text-sm transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 border border-pastel-600/30"
          >
            <Calendar className="w-4 h-4 text-gold-light" />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="p-2 bg-pastel-700 text-pastel-50 rounded-full text-xs font-semibold flex items-center gap-1"
          >
            <Calendar className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-pastel-800 hover:text-pastel-900 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-pastel-50/95 backdrop-blur-lg border-b border-pastel-200 px-6 py-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-pastel-200">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 bg-pastel-700 text-pastel-50 py-3 rounded-full font-semibold text-sm shadow-md"
            >
              <Calendar className="w-4 h-4 text-gold-light" />
              Check Availability & Book
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
