import React, { useState } from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { SERVICES } from '../data/emceeData';
import { Check, Sparkles, Calculator, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

const ServicesPage: React.FC = () => {
  const { openBooking } = useBooking();

  // Interactive Package Estimator State
  const [eventType, setEventType] = useState<'wedding' | 'corporate' | 'celebrity' | 'virtual'>('wedding');
  const [days, setDays] = useState<number>(1);
  const [locationType, setLocationType] = useState<'domestic' | 'international'>('domestic');

  const calculateEstimate = () => {
    let base = 0;
    switch (eventType) {
      case 'wedding': base = 120000; break;
      case 'corporate': base = 100000; break;
      case 'celebrity': base = 150000; break;
      case 'virtual': base = 60000; break;
    }
    const locationMultiplier = locationType === 'international' ? 1.5 : 1.0;
    const total = base * days * locationMultiplier;
    return total.toLocaleString('en-IN');
  };

  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      {/* Header */}
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Tailored Hosting Services</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-pastel-900">
            Services & Package Estimator
          </h1>
          <p className="text-base text-pastel-700 max-w-2xl mx-auto">
            Comprehensive hosting solutions for luxury weddings, corporate galas, celebrity shows, and global summits.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Services Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="bg-white rounded-3xl border border-pastel-200 p-8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs uppercase font-bold tracking-widest text-gold-dark bg-pastel-100 px-3 py-1 rounded-full border border-pastel-200">
                  {service.category}
                </span>
                <h3 className="font-serif text-2xl font-bold text-pastel-900">{service.title}</h3>
                <p className="text-sm text-pastel-700 leading-relaxed">{service.fullDesc}</p>
                <div className="pt-2 space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-pastel-800">Key Deliverables:</h4>
                  {service.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-pastel-800 font-medium">
                      <Check className="w-4 h-4 text-pastel-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-6 mt-6 border-t border-pastel-100">
                <button
                  onClick={openBooking}
                  className="w-full flex items-center justify-center gap-2 bg-pastel-700 hover:bg-pastel-800 text-pastel-50 py-3 rounded-xl font-bold text-sm transition-all"
                >
                  <span>Book {service.title}</span>
                  <ArrowRight className="w-4 h-4 text-gold-light" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Estimator Box */}
        <div className="bg-white rounded-3xl border-2 border-pastel-300 p-8 sm:p-12 shadow-xl space-y-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-3 border-b border-pastel-200 pb-6">
            <div className="w-12 h-12 rounded-2xl bg-pastel-100 text-pastel-700 flex items-center justify-center">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold text-pastel-900">Interactive Package Estimator</h3>
              <p className="text-xs text-pastel-600">Get an instant preliminary estimate for your event structure</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Event Category */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value as any)}
                className="w-full p-3 rounded-xl bg-pastel-50 border border-pastel-300 text-sm text-pastel-900 font-semibold focus:outline-none"
              >
                <option value="wedding">Luxury Wedding / Sangeet</option>
                <option value="corporate">Corporate Gala / Launch</option>
                <option value="celebrity">Celebrity / Red Carpet</option>
                <option value="virtual">Virtual / Hybrid Event</option>
              </select>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">Number of Days</label>
              <select
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full p-3 rounded-xl bg-pastel-50 border border-pastel-300 text-sm text-pastel-900 font-semibold focus:outline-none"
              >
                <option value={1}>1 Day Event</option>
                <option value={2}>2 Days Package</option>
                <option value={3}>3 Days Destination</option>
                <option value={4}>4+ Days Multi-City</option>
              </select>
            </div>

            {/* Location */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">Location Zone</label>
              <select
                value={locationType}
                onChange={(e) => setLocationType(e.target.value as any)}
                className="w-full p-3 rounded-xl bg-pastel-50 border border-pastel-300 text-sm text-pastel-900 font-semibold focus:outline-none"
              >
                <option value="domestic">Domestic India (Mumbai/Delhi/Udaipur etc)</option>
                <option value="international">International (Dubai/Bali/Singapore etc)</option>
              </select>
            </div>
          </div>

          {/* Result Banner */}
          <div className="p-6 rounded-2xl bg-pastel-800 text-pastel-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-pastel-300 font-bold">Estimated Starting Investment</span>
              <p className="font-serif text-3xl font-bold text-gold-light">₹ {calculateEstimate()} *</p>
              <p className="text-[11px] text-pastel-300/80 mt-1">* Subject to date availability, custom script needs & travel logistics.</p>
            </div>
            <button
              onClick={openBooking}
              className="bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-md shrink-0"
            >
              Lock Date & Request Formal Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});
