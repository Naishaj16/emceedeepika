import React from 'react';
import { Link } from '@tanstack/react-router';
import { SEOHead } from '../components/SEOHead';
import { Home, Compass, MessageCircle, ArrowLeft } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <SEOHead
        title="404 - Page Not Found | Emcee Deepika Jain"
        description="The page you are looking for does not exist or has been moved."
        noIndex={true}
      />
      <div className="max-w-xl mx-auto text-center space-y-6">
        <span className="inline-block text-6xl sm:text-7xl font-serif font-bold text-pastel-400">
          404
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
          Page Not Found
        </h1>
        <p className="text-pastel-600 text-base max-w-md mx-auto leading-relaxed">
          The stage is set, but this page isn&apos;t in our program. Let&apos;s guide you back to our live showcases and booking details.
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <Link
            to="/"
            className="bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-6 py-3 rounded-full font-semibold text-sm transition-all shadow-md flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            to="/locations/chennai"
            className="bg-pastel-100 hover:bg-pastel-200 text-pastel-800 border border-pastel-300 px-6 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Chennai Events</span>
          </Link>
          <Link
            to="/contact"
            className="bg-pastel-100 hover:bg-pastel-200 text-pastel-800 border border-pastel-300 px-6 py-3 rounded-full font-semibold text-sm transition-all flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Contact Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
