import React from 'react';
import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './root';
import { BookingForm } from '../components/BookingForm';
import { Mail, Phone, MapPin, Sparkles, Clock, Globe, Instagram, Linkedin } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-28 pb-24 bg-pastel-50">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-pastel-200 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-pastel-900">Direct Inquiries</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pastel-100 text-pastel-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pastel-900">Official Email</h4>
                    <p className="text-pastel-600">booking@emceedeepika.com</p>
                    <p className="text-pastel-600">deepika.emcee@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pastel-100 text-pastel-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pastel-900">Phone / WhatsApp</h4>
                    <p className="text-pastel-600">+91 98765 43210 (Management)</p>
                    <p className="text-pastel-600">+91 91234 56789 (Event Desk)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pastel-100 text-pastel-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-pastel-900">Base Locations</h4>
                    <p className="text-pastel-600">Mumbai & Rajasthan, India</p>
                    <p className="text-pastel-600">Dubai, United Arab Emirates (Frequent Base)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="border-t border-pastel-200 pt-6">
                <h4 className="font-bold text-pastel-900 text-sm mb-3">Official Social Handles</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://www.instagram.com/emcee_deepikajain/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-pastel-100 hover:bg-pastel-200 text-pastel-800 px-4 py-2 rounded-full font-semibold text-xs transition-all border border-pastel-300"
                  >
                    <Instagram className="w-4 h-4 text-rose-500" />
                    <span>@emcee_deepikajain</span>
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-pastel-100 hover:bg-pastel-200 text-pastel-800 px-4 py-2 rounded-full font-semibold text-xs transition-all border border-pastel-300"
                  >
                    <Linkedin className="w-4 h-4 text-sky-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability Note */}
            <div className="bg-pastel-800 text-pastel-50 p-8 rounded-3xl space-y-3">
              <div className="flex items-center gap-2 text-gold-light text-xs font-bold uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Response Time Guarantee</span>
              </div>
              <p className="text-sm text-pastel-200">
                Our management desk responds to all availability inquiries within <strong>6 business hours</strong> with date confirmation and fee structure.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-pastel-200 shadow-md">
            <h3 className="font-serif text-2xl font-bold text-pastel-900 mb-6">
              Send an Availability Request
            </h3>
            <BookingForm />
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
