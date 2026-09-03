import React from 'react';
import { createRoute, createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/root';
import { homeRoute } from './routes/home';

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: React.lazy(() => import('./routes/about').then((m) => ({ default: m.AboutPage }))),
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: React.lazy(() => import('./routes/services').then((m) => ({ default: m.ServicesPage }))),
});

const destinationWeddingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/destination-wedding',
  component: React.lazy(() => import('./routes/destination-wedding').then((m) => ({ default: m.DestinationWeddingPage }))),
});

const galleryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/gallery',
  component: React.lazy(() => import('./routes/gallery').then((m) => ({ default: m.GalleryPage }))),
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: React.lazy(() => import('./routes/contact').then((m) => ({ default: m.ContactPage }))),
});

const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: React.lazy(() => import('./routes/portfolio').then((m) => ({ default: m.PortfolioPage }))),
});

const chennaiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/chennai',
  component: React.lazy(() => import('./routes/locations').then((m) => ({ default: () => <m.LocationLandingPage locationKey="chennai" /> }))),
});

const dubaiRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/dubai',
  component: React.lazy(() => import('./routes/locations').then((m) => ({ default: () => <m.LocationLandingPage locationKey="dubai" /> }))),
});

const malaysiaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/malaysia',
  component: React.lazy(() => import('./routes/locations').then((m) => ({ default: () => <m.LocationLandingPage locationKey="malaysia" /> }))),
});

const singaporeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/locations/singapore',
  component: React.lazy(() => import('./routes/locations').then((m) => ({ default: () => <m.LocationLandingPage locationKey="singapore" /> }))),
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  destinationWeddingRoute,
  galleryRoute,
  contactRoute,
  portfolioRoute,
  chennaiRoute,
  dubaiRoute,
  malaysiaRoute,
  singaporeRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
