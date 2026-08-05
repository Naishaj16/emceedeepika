import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/root';
import { homeRoute } from './routes/home';
import { aboutRoute } from './routes/about';
import { servicesRoute } from './routes/services';
import { galleryRoute } from './routes/gallery';
import { contactRoute } from './routes/contact';
import { chennaiRoute, dubaiRoute, malaysiaRoute, singaporeRoute } from './routes/locations';
import { portfolioRoute } from './routes/portfolio';

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
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
