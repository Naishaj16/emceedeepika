import React from 'react';
import { Link } from '@tanstack/react-router';
import { SEOHead } from '../components/SEOHead';
import { MapPin, ArrowRight, Sparkles, Globe, ChevronRight, MessageCircle } from 'lucide-react';
import { locationSeoMap } from '../data/seoKeywords';

export const LocationsHubPage: React.FC = () => {
  const hubs = Object.values(locationSeoMap);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.emceedeepika.com',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Locations',
        item: 'https://www.emceedeepika.com/locations',
      },
    ],
  };

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Global Locations & Event Hubs | Emcee Deepika Jain',
    description: 'Explore Deepika Jain’s premier event emcee and hosting hubs across Chennai, Dubai, Singapore, and Malaysia.',
    url: 'https://www.emceedeepika.com/locations',
  };

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title="Global Locations & Event Hubs | Emcee Deepika Jain"
        description="Explore Deepika Jain's premier event emcee and anchor hubs across Chennai, Dubai, Singapore, Malaysia, and international destination weddings."
        canonicalUrl="https://www.emceedeepika.com/locations"
        schemaJson={[collectionSchema, breadcrumbSchema]}
      />

      {/* Breadcrumb Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-pastel-600">
          <Link to="/" className="hover:text-pastel-900 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-pastel-400" />
          <span className="text-pastel-900 font-semibold">Locations</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-pastel-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200/80 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-wider">
            <Globe className="w-4 h-4 text-pastel-600" />
            <span>International Stage Presence</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-pastel-900 leading-tight">
            Premier Event Emcee Across Global Celebration Hubs
          </h1>
          <p className="text-pastel-700 text-lg max-w-2xl mx-auto leading-relaxed">
            With 2,500+ events across 15+ countries, Deepika Jain brings multilingual charisma, executive protocol, and celebratory crowd energy to four primary regional hubs and destination wedding paradises.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hubs.map((hub) => (
            <Link
              key={hub.slug}
              to={`/locations/${hub.slug}` as any}
              className="bg-pastel-50 border border-pastel-200 hover:border-pastel-400 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-200 text-pastel-800 text-xs font-bold">
                    <MapPin className="w-3.5 h-3.5 text-pastel-600" />
                    <span>{hub.city}, {hub.country}</span>
                  </div>
                  <span className="text-xs text-pastel-500 font-semibold uppercase">{hub.localStats.localEvents} Hosted</span>
                </div>
                <h2 className="font-serif text-2xl font-bold text-pastel-900 group-hover:text-pastel-700 transition-colors">
                  {hub.h1Title}
                </h2>
                <p className="text-pastel-700 text-sm leading-relaxed">
                  {hub.subtitle}
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-pastel-600">
                  {hub.venues.slice(0, 3).map((v, i) => (
                    <span key={i} className="bg-pastel-100 px-2.5 py-1 rounded-lg border border-pastel-200">
                      {v.split('(')[0].trim()}
                    </span>
                  ))}
                  <span className="text-pastel-400 text-xs self-center">+{hub.venues.length - 3} more</span>
                </div>
              </div>

              <div className="pt-4 border-t border-pastel-200 flex items-center justify-between text-sm font-semibold text-pastel-900 group-hover:text-pastel-700">
                <span>Explore {hub.city} Services & FAQs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Destination Wedding Highlight */}
      <section className="py-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-pastel-800 to-pastel-900 text-pastel-50 p-8 sm:p-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-pastel-700">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-light bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Worldwide Destination Weddings
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">Udaipur, Bali, Phuket, Maldives & Sentosa</h3>
            <p className="text-pastel-200 text-sm max-w-2xl">
              Bringing royal entries, sangeet choreographies, and cultural rituals to life for NRI and luxury destination couples across Asia and the Middle East.
            </p>
          </div>
          <Link
            to="/destination-wedding"
            className="shrink-0 bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-7 py-3.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <span>Destination Wedding Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Fast Inquiry CTA */}
      <section className="py-12 max-w-4xl mx-auto px-4 text-center space-y-4">
        <h3 className="font-serif text-2xl font-bold text-pastel-900">Need Guidance on Your Event Location?</h3>
        <p className="text-pastel-600 text-sm max-w-md mx-auto">
          Deepika and her management team travel worldwide. Reach out on WhatsApp for immediate date verification.
        </p>
        <div className="pt-2 flex justify-center gap-4">
          <a
            href="https://wa.me/918056958856?text=Hi%20Deepika,%20inquiring%20about%20event%20availability%20and%20location%20coverage"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-700 hover:bg-emerald-800 text-white px-7 py-3 rounded-full font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
          <Link
            to="/contact"
            className="bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-7 py-3 rounded-full font-semibold text-sm transition-all shadow-md inline-flex items-center gap-2"
          >
            <span>Contact Desk</span>
          </Link>
        </div>
      </section>
    </div>
  );
};
