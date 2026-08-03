import { createRouter } from '@tanstack/react-router';
import { rootRoute } from './routes/root';
import { homeRoute } from './routes/home';
import { aboutRoute } from './routes/about';
import { servicesRoute } from './routes/services';
import { galleryRoute } from './routes/gallery';
import { contactRoute } from './routes/contact';
import { chennaiRoute, dubaiRoute, malaysiaRoute, singaporeRoute } from './routes/locations';
import { anchorVsEmceeRoute } from './routes/guides.anchor-vs-emcee';

const routeTree = rootRoute.addChildren([
  homeRoute,
  aboutRoute,
  servicesRoute,
  galleryRoute,
  contactRoute,
  chennaiRoute,
  dubaiRoute,
  malaysiaRoute,
  singaporeRoute,
  anchorVsEmceeRoute,
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
