import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { BookingForm } from './BookingForm';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pastel-900/70 backdrop-blur-md animate-fadeIn">
      <div className="relative max-w-2xl w-full bg-pastel-50 rounded-3xl overflow-hidden shadow-2xl border border-pastel-300 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="bg-pastel-800 text-pastel-50 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-pastel-700 flex items-center justify-center text-gold-light border border-pastel-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-pastel-50">Book Deepika Jain</h3>
              <p className="text-xs text-pastel-300">Direct Availability & Inquiry Request</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-pastel-700 text-pastel-200 hover:text-white flex items-center justify-center hover:bg-pastel-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <BookingForm onSuccess={onClose} />
        </div>
      </div>
    </div>
  );
};
