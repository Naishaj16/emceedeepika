import React from 'react';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { BookingProvider, useBooking } from '../context/BookingContext';

const Layout: React.FC = () => {
  const { isBookingOpen, openBooking, closeBooking } = useBooking();

  return (
    <div className="min-h-screen flex flex-col bg-pastel-50 text-pastel-900 font-sans selection:bg-pastel-300 selection:text-pastel-900">
      <Header onOpenBooking={openBooking} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={closeBooking} />
    </div>
  );
};

const RootComponent: React.FC = () => {
  return (
    <BookingProvider>
      <Layout />
    </BookingProvider>
  );
};

export const rootRoute = createRootRoute({
  component: RootComponent,
});
