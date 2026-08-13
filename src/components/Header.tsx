import React, { useState, useEffect } from 'react';
import { Link } from '@tanstack/react-router';
import { Sparkles, Menu, X, Calendar, ChevronDown, Globe } from 'lucide-react';

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const weddingSubEvents = [
    'Haldi Carnival',
    'Varmala Ceremony',
    'Baraat & Baraat on Wheels',
    'High-Energy Sangeet Night',
    'Mayra / Maira Function',
    'Milni Protocol',
    'Ring Ceremony & Engagement',
    'Grand Reception Gala',
  ];

  const locations = [
    { name: 'Chennai, India', to: '/locations/chennai' },
    { name: 'Dubai, UAE', to: '/locations/dubai' },
    { name: 'Malaysia (KL)', to: '/locations/malaysia' },
    { name: 'Singapore', to: '/locations/singapore' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-pastel-100 border-b border-pastel-200 shadow-sm py-3'
          : 'bg-pastel-100/90 border-b border-pastel-200/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
          <img
            src="/logo.png"
            alt="Emcee Deepika Jain Logo"
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
          />
          <div>
            <span className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-pastel-900 block group-hover:text-pastel-700 transition-colors">
              Deepika Jain
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-widest text-pastel-600 font-semibold block">
              International Emcee & Host
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors">Home</Link>
          <Link to="/about" className="text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors">About</Link>

          {/* Event & Services Dropdown */}
          <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                onMouseEnter={() => setServicesOpen(true)}
                className="text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors py-1"
              >
                Events & Services
              </Link>
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-pastel-700 hover:text-pastel-900 focus:outline-none"
              >
                <ChevronDown className="w-4 h-4 text-pastel-500" />
              </button>
            </div>

            {servicesOpen && (
              <div className="absolute top-full left-0 w-80 max-h-[75vh] overflow-y-auto bg-white border border-pastel-200 rounded-2xl shadow-2xl p-4 z-50 space-y-4">
                <div className="border-b border-pastel-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Luxury Weddings</span>
                  <div className="space-y-1">
                    {weddingSubEvents.map((event) => (
                      <Link
                        key={event}
                        to="/services"
                        onClick={() => setServicesOpen(false)}
                        className="block px-2 py-0.5 rounded-lg text-xs font-medium text-pastel-800 hover:bg-pastel-100 hover:text-gold-dark transition-colors"
                      >
                        • {event}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-b border-pastel-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Corporate & Tech</span>
                  <div className="space-y-1">
                    {['Corporate Galas & Dinners', 'Product & Brand Launches', 'Leadership & Tech Summits', 'Town Halls & Annual Meets', 'Panel Moderation & Q&A'].map((evt) => (
                      <Link key={evt} to="/services" onClick={() => setServicesOpen(false)} className="block px-2 py-0.5 rounded-lg text-xs font-medium text-pastel-800 hover:bg-pastel-100">• {evt}</Link>
                    ))}
                  </div>
                </div>

                <div className="border-b border-pastel-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">State & Civic Protocol</span>
                  <div className="space-y-1">
                    {['State & Ministerial Summits', 'Inaugurations & Foundation Ceremonies', 'Diplomatic Delegations & Expos', 'Civic Award Functions'].map((evt) => (
                      <Link key={evt} to="/services" onClick={() => setServicesOpen(false)} className="block px-2 py-0.5 rounded-lg text-xs font-medium text-pastel-800 hover:bg-pastel-100">• {evt}</Link>
                    ))}
                  </div>
                </div>

                <div className="border-b border-pastel-100 pb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Baby Shower & Milestones</span>
                  <div className="space-y-1">
                    {['Traditional Godh Bharai / Seemantham', 'Modern Baby Shower Celebrations', 'Naming Ceremonies (Namkaran)', '1st Birthday & Cradle Ceremonies'].map((evt) => (
                      <Link key={evt} to="/services" onClick={() => setServicesOpen(false)} className="block px-2 py-0.5 rounded-lg text-xs font-medium text-pastel-800 hover:bg-pastel-100">• {evt}</Link>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Celebrity & Special Events</span>
                  <div className="space-y-1">
                    {['Red Carpet Galas', 'Movie & Music Launches', 'Award Shows', 'Milestone Birthdays', 'Diwali & Festival Galas'].map((evt) => (
                      <Link key={evt} to="/services" onClick={() => setServicesOpen(false)} className="block px-2 py-0.5 rounded-lg text-xs font-medium text-pastel-800 hover:bg-pastel-100">• {evt}</Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/portfolio" className="text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors">Portfolio</Link>
          <Link to="/gallery" className="text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors">Gallery</Link>
          <Link to="/contact" className="text-pastel-700 hover:text-pastel-900 font-medium gold-underline transition-colors">Contact</Link>

          {/* Locations Dropdown */}
          <div className="relative" onMouseLeave={() => setLocationsOpen(false)}>
            <button
              onMouseEnter={() => setLocationsOpen(true)}
              onClick={() => setLocationsOpen(!locationsOpen)}
              className="flex items-center gap-1 text-pastel-700 hover:text-pastel-900 font-medium transition-colors cursor-pointer py-1"
            >
              <Globe className="w-4 h-4 text-pastel-600" />
              <span>Locations</span>
              <ChevronDown className="w-4 h-4 text-pastel-500" />
            </button>

            {locationsOpen && (
              <div className="absolute top-full left-0 w-48 bg-pastel-50 border border-pastel-200 rounded-2xl shadow-xl py-2 z-50">
                {locations.map((loc) => (
                  <Link
                    key={loc.to}
                    to={loc.to}
                    onClick={() => setLocationsOpen(false)}
                    className="block px-4 py-2 text-sm text-pastel-800 hover:bg-pastel-100 font-medium"
                  >
                    {loc.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
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
        <div className="md:hidden bg-[#EBF5EE] border-b border-pastel-200 px-6 py-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto text-pastel-900">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1">Home</Link>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1">About</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1">Events & Services</Link>

          <div className="pl-3 border-l-2 border-gold-DEFAULT space-y-3 my-2">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Luxury Wedding Events</span>
              {weddingSubEvents.map((evt) => (
                <Link key={evt} to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-pastel-700 hover:text-pastel-900 py-0.5">• {evt}</Link>
              ))}
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">State & Civic Protocol</span>
              {['State Summits', 'Inaugurations', 'Diplomatic Handovers', 'Civic Awards'].map((evt) => (
                <Link key={evt} to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-pastel-700 hover:text-pastel-900 py-0.5">• {evt}</Link>
              ))}
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Baby Shower & Milestones</span>
              {['Godh Bharai / Seemantham', 'Baby Shower', 'Naming Ceremonies (Namkaran)', '1st Birthday'].map((evt) => (
                <Link key={evt} to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-pastel-700 hover:text-pastel-900 py-0.5">• {evt}</Link>
              ))}
            </div>

            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-gold-dark block mb-1">Corporate & Special Events</span>
              {['Product Launches', 'Tech Summits', 'Award Galas', 'Red Carpet', 'Festival Celebrations'].map((evt) => (
                <Link key={evt} to="/services" onClick={() => setMobileMenuOpen(false)} className="block text-xs text-pastel-700 hover:text-pastel-900 py-0.5">• {evt}</Link>
              ))}
            </div>
          </div>

          <Link to="/portfolio" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1">Portfolio</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1">Gallery</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-pastel-800 hover:text-pastel-600 py-1">Contact</Link>

          <div className="pt-2 border-t border-pastel-200">
            <span className="text-xs font-bold uppercase tracking-wider text-pastel-500 block mb-2">Target Locations</span>
            <div className="grid grid-cols-2 gap-2">
              {locations.map((loc) => (
                <Link
                  key={loc.to}
                  to={loc.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-medium text-pastel-700 bg-white p-2 rounded-lg border border-pastel-200"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
