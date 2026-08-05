import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Send, CheckCircle2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { EventBookingPayload } from '../types';

export const BookingForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<EventBookingPayload>({
    name: '',
    email: '',
    phone: '',
    eventType: 'Wedding Host',
    eventDate: '',
    location: '',
    expectedGuests: '100-300',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (onSuccess) {
        setTimeout(onSuccess, 2500);
      }
    }, 1200);
  };

  if (submitted) {
    return (
      <div className="p-8 text-center bg-pastel-100 rounded-3xl border border-pastel-300 space-y-4">
        <div className="w-16 h-16 rounded-full bg-pastel-700 text-gold-light mx-auto flex items-center justify-center shadow-lg">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-pastel-900">Inquiry Received!</h3>
        <p className="text-sm text-pastel-700 max-w-md mx-auto">
          Thank you, <strong>{formData.name}</strong>. Deepika's event management team will check availability for <strong>{formData.eventDate || 'your date'}</strong> and reach out via email/WhatsApp within 6 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: '',
              email: '',
              phone: '',
              eventType: 'Wedding Host',
              eventDate: '',
              location: '',
              expectedGuests: '100-300',
              message: '',
            });
          }}
          className="text-xs font-bold uppercase tracking-wider text-pastel-700 hover:text-pastel-900 gold-underline"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
            Your Full Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-pastel-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Ananya Sharma"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
            Email Address *
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-pastel-500 absolute left-3.5 top-3.5" />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="ananya@example.com"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
            Phone / WhatsApp *
          </label>
          <div className="relative">
            <Phone className="w-4 h-4 text-pastel-500 absolute left-3.5 top-3.5" />
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+91 98765 43210"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
            />
          </div>
        </div>

        {/* Event Type */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
            Event Category *
          </label>
          <select
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
          >
            <option value="Wedding Host">Luxury Wedding & Sangeet</option>
            <option value="Corporate Gala">Corporate Gala / Product Launch</option>
            <option value="Celebrity Event">Celebrity & Red Carpet Host</option>
            <option value="Virtual Summit">Virtual / Hybrid Summit</option>
            <option value="Other">Other Custom Event</option>
          </select>
        </div>

        {/* Event Date */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
            Event Date *
          </label>
          <div className="relative">
            <Calendar className="w-4 h-4 text-pastel-500 absolute left-3.5 top-3.5" />
            <input
              type="date"
              required
              value={formData.eventDate}
              onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
            City / Location *
          </label>
          <div className="relative">
            <MapPin className="w-4 h-4 text-pastel-500 absolute left-3.5 top-3.5" />
            <input
              type="text"
              required
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="e.g. Udaipur / Dubai / Mumbai"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
          Event Details / Additional Notes
        </label>
        <div className="relative">
          <MessageSquare className="w-4 h-4 text-pastel-500 absolute left-3.5 top-3.5" />
          <textarea
            rows={3}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your event timeline, languages preferred, or special guest requirements..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-pastel-300 text-pastel-900 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-500 transition-all"
          ></textarea>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-pastel-700 hover:bg-pastel-800 text-pastel-50 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50"
      >
        {isSubmitting ? (
          <span>Sending Inquiry...</span>
        ) : (
          <>
            <Send className="w-4 h-4 text-gold-light" />
            <span>Send Event Inquiry</span>
          </>
        )}
      </button>
    </form>
  );
};
