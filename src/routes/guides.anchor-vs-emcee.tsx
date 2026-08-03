import React from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './root';
import { SEOHead } from '../components/SEOHead';
import { HelpCircle, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const AnchorVsEmceePage: React.FC = () => {
  const { openBooking } = useBooking();

  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Anchor vs Emcee vs MC: Key Differences and How to Choose the Right Event Host',
    description: 'Understand regional differences between event anchors in India and emcees in Dubai, Singapore & Malaysia, and learn how to hire the right professional host.',
    author: {
      '@type': 'Person',
      name: 'Deepika Jain',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Deepika Jain Emcee',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the difference between an Anchor and an Emcee?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In South Asia (India/Chennai), the term "Anchor" is commonly used to describe TV hosts, wedding stage hosts, and live event presenters. In international markets like Dubai, Singapore, and Malaysia, "Emcee" or "MC" (Master of Ceremonies) is the standard professional title for corporate summit and gala dinner hosts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does a corporate emcee do during an event?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A corporate emcee manages event timing, introduces keynote speakers, conducts panel discussions, maintains high audience engagement, and executes formal VIP protocol.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a D&D Emcee in Singapore and Malaysia?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A D&D (Dinner & Dance) emcee specializes in corporate appreciation nights, combining formal speeches and award ceremonies with lively audience games and entertainment.',
        },
      },
    ],
  };

  return (
    <div className="pt-24 pb-16">
      <SEOHead
        title="Anchor vs Emcee Difference | Guide to Hiring Event Hosts"
        description="Learn the difference between an anchor, emcee, and MC in India, Dubai, Singapore & Malaysia. Expert guide by international event host Deepika Jain."
        keywords={[
          'anchor vs emcee difference',
          'what is an emcee',
          'difference between emcee and DJ MC',
          'how to choose the right emcee for your event',
          'questions to ask an emcee before hiring',
        ]}
        schemaJson={[schemaJson, faqSchema]}
      />

      {/* Hero Section */}
      <section className="bg-pastel-100 py-16 px-4 sm:px-6 lg:px-8 border-b border-pastel-200">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-pastel-600" />
            <span>GEO & Event Hiring Guide</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-pastel-900 leading-tight">
            Anchor vs Emcee vs MC: Understanding Terminology & Hiring the Right Host
          </h1>

          <p className="text-pastel-700 text-lg max-w-2xl mx-auto">
            Whether planning a wedding in Chennai, a gala dinner in Dubai, or a corporate D&D in Singapore, choosing the right stage host requires knowing the terminology and role expectations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-pastel-800">
        {/* Comparison Table */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-pastel-900">
            1. Regional Terminology Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-pastel-300 rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-pastel-200 text-pastel-900 font-serif">
                <tr>
                  <th className="p-4 border-b border-pastel-300">Term</th>
                  <th className="p-4 border-b border-pastel-300">Primary Markets</th>
                  <th className="p-4 border-b border-pastel-300">Typical Scope & Usage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-pastel-200 bg-pastel-50 text-sm">
                <tr>
                  <td className="p-4 font-bold text-pastel-900">Anchor</td>
                  <td className="p-4">India (Chennai, Mumbai, South Asia)</td>
                  <td className="p-4">Used interchangeably for wedding hosts, TV presenters, and live stage hosts. Highly focused on bilingual warmth and crowd interaction.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-pastel-900">Emcee / MC</td>
                  <td className="p-4">Dubai (UAE), Singapore, Malaysia, Global</td>
                  <td className="p-4">Standard term for Master of Ceremonies. Oversees corporate summits, luxury galas, product launches, and company D&D nights.</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-pastel-900">Moderator</td>
                  <td className="p-4">Global Corporate Summits</td>
                  <td className="p-4">Specialist host focused on facilitating panel discussions, executive Q&A sessions, and conference tracks.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Essential Questions to Ask */}
        <div className="space-y-6">
          <h2 className="font-serif text-2xl font-bold text-pastel-900">
            2. Questions to Ask Before Hiring an Emcee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pastel-100/60 p-6 rounded-2xl border border-pastel-200">
              <h3 className="font-bold text-pastel-900 mb-2">1. Do you handle bilingual delivery?</h3>
              <p className="text-sm text-pastel-700">Ensure the host can switch smoothly between languages required by your guest demographic (e.g. English/Tamil in Chennai, English/Arabic in Dubai).</p>
            </div>
            <div className="bg-pastel-100/60 p-6 rounded-2xl border border-pastel-200">
              <h3 className="font-bold text-pastel-900 mb-2">2. What is your protocol experience?</h3>
              <p className="text-sm text-pastel-700">Corporate galas require precise VIP introductions, speaker timing management, and seamless ad-libbing when delays occur.</p>
            </div>
            <div className="bg-pastel-100/60 p-6 rounded-2xl border border-pastel-200">
              <h3 className="font-bold text-pastel-900 mb-2">3. Do you customize event scripts?</h3>
              <p className="text-sm text-pastel-700">A professional emcee conducts pre-event briefings with client teams to align tone, script flow, and brand messaging.</p>
            </div>
            <div className="bg-pastel-100/60 p-6 rounded-2xl border border-pastel-200">
              <h3 className="font-bold text-pastel-900 mb-2">4. How do you handle unexpected delays?</h3>
              <p className="text-sm text-pastel-700">Top emcees possess spontaneous crowd engagement skills to keep audiences entertained without breaking event momentum.</p>
            </div>
          </div>
        </div>

        {/* Regional Hub Navigation */}
        <div className="bg-pastel-200/60 p-8 rounded-3xl border border-pastel-300 text-center space-y-6">
          <h3 className="font-serif text-2xl font-bold text-pastel-900">
            Explore Deepika’s Regional Emcee Hubs
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Link to="/locations/chennai" className="bg-pastel-50 p-4 rounded-xl font-bold text-pastel-800 hover:text-pastel-600 border border-pastel-300 shadow-sm transition-all hover:scale-105">
              Chennai, India
            </Link>
            <Link to="/locations/dubai" className="bg-pastel-50 p-4 rounded-xl font-bold text-pastel-800 hover:text-pastel-600 border border-pastel-300 shadow-sm transition-all hover:scale-105">
              Dubai, UAE
            </Link>
            <Link to="/locations/malaysia" className="bg-pastel-50 p-4 rounded-xl font-bold text-pastel-800 hover:text-pastel-600 border border-pastel-300 shadow-sm transition-all hover:scale-105">
              Malaysia (KL)
            </Link>
            <Link to="/locations/singapore" className="bg-pastel-50 p-4 rounded-xl font-bold text-pastel-800 hover:text-pastel-600 border border-pastel-300 shadow-sm transition-all hover:scale-105">
              Singapore
            </Link>
          </div>
          <div className="pt-4">
            <button
              onClick={openBooking}
              className="bg-pastel-700 hover:bg-pastel-800 text-pastel-50 px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const anchorVsEmceeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/guides/anchor-vs-emcee',
  component: AnchorVsEmceePage,
});
