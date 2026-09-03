import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const templatePath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found! Run build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const routes = [
  {
    path: '/about',
    title: 'About Deepika Jain | International Emcee & Event Host',
    description: "Learn about Deepika Jain's journey as a top international emcee with 800+ events across India, UAE, and Southeast Asia.",
    canonicalUrl: 'https://www.emceedeepika.com/about',
  },
  {
    path: '/services',
    title: 'Emcee & Hosting Services | Deepika Jain',
    description: 'Explore professional emcee services for corporate galas, award ceremonies, summits, luxury weddings, and brand launches.',
    canonicalUrl: 'https://www.emceedeepika.com/services',
  },
  {
    path: '/destination-wedding',
    title: 'Destination Wedding Emcee & Anchor | Deepika Jain',
    description: 'Bring luxury, energy, and elegance to your destination wedding in Dubai, Bali, Thailand, Rajasthan, or Singapore with Deepika Jain.',
    canonicalUrl: 'https://www.emceedeepika.com/destination-wedding',
  },
  {
    path: '/portfolio',
    title: 'Event Portfolio & Videos | Emcee Deepika Jain',
    description: 'Watch showreels, highlights, and videos of Deepika Jain hosting major corporate galas, luxury weddings, and international award shows.',
    canonicalUrl: 'https://www.emceedeepika.com/portfolio',
  },
  {
    path: '/gallery',
    title: 'Event Photo Gallery | Emcee Deepika Jain',
    description: 'Browse photos of Deepika Jain hosting top corporate events, grand weddings, galas, and celebrity shows worldwide.',
    canonicalUrl: 'https://www.emceedeepika.com/gallery',
  },
  {
    path: '/contact',
    title: 'Book Emcee Deepika Jain | Contact & Inquiries',
    description: 'Get in touch to check availability and book Deepika Jain for your upcoming corporate event, wedding, or international conference.',
    canonicalUrl: 'https://www.emceedeepika.com/contact',
  },
  {
    path: '/locations/chennai',
    title: 'Best Wedding Anchor in Chennai | Corporate Event Emcee Deepika',
    description: 'Looking for the best wedding anchor in Chennai? Deepika Jain is a leading Tamil-English bilingual corporate emcee and event host in Chennai & Tamil Nadu.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/chennai',
  },
  {
    path: '/locations/dubai',
    title: 'Corporate Emcee Dubai | Gala Dinner & Event Host | Deepika Jain',
    description: 'Hire top corporate emcee in Dubai & UAE. Deepika Jain delivers world-class event hosting, gala dinner emcee services, trade shows & product launch hosting.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/dubai',
  },
  {
    path: '/locations/malaysia',
    title: 'Corporate Emcee Kuala Lumpur | D&D Emcee Malaysia | Deepika Jain',
    description: 'Book top corporate emcee in Kuala Lumpur, Malaysia. Deepika Jain specializes in Dinner & Dance (D&D) emcee hosting, gala dinners & multi-lingual corporate events.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/malaysia',
  },
  {
    path: '/locations/singapore',
    title: 'Professional Emcee Singapore | Corporate D&D & Gala Host | Deepika Jain',
    description: 'Hire premier corporate emcee in Singapore. Deepika Jain is a renowned Master of Ceremonies for company D&D, galas, product launches & international summits.',
    canonicalUrl: 'https://www.emceedeepika.com/locations/singapore',
  },
];

console.log('Generating route-specific HTML files for static serving...');

for (const route of routes) {
  let html = template;

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/s, `<title>${route.title}</title>`);

  // Replace Description
  html = html.replace(/<meta name="description" content=".*?"\s*\/?>/s, `<meta name="description" content="${route.description}" />`);

  // Replace Canonical Link
  html = html.replace(/<link rel="canonical" href=".*?"\s*\/?>/s, `<link rel="canonical" href="${route.canonicalUrl}" />`);

  // Replace OG Tags
  html = html.replace(/<meta property="og:title" content=".*?"\s*\/?>/s, `<meta property="og:title" content="${route.title}" />`);
  html = html.replace(/<meta property="og:description" content=".*?"\s*\/?>/s, `<meta property="og:description" content="${route.description}" />`);
  html = html.replace(/<meta property="og:url" content=".*?"\s*\/?>/s, `<meta property="og:url" content="${route.canonicalUrl}" />`);

  // Replace Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?"\s*\/?>/s, `<meta name="twitter:title" content="${route.title}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?"\s*\/?>/s, `<meta name="twitter:description" content="${route.description}" />`);

  // Path 1: dist/route/index.html
  const routeDir = path.join(distDir, route.path);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  const indexPath = path.join(routeDir, 'index.html');
  fs.writeFileSync(indexPath, html, 'utf8');

  // Path 2: dist/route.html
  const htmlFilePath = path.join(distDir, `${route.path}.html`);
  const htmlFileDir = path.dirname(htmlFilePath);
  if (!fs.existsSync(htmlFileDir)) {
    fs.mkdirSync(htmlFileDir, { recursive: true });
  }
  fs.writeFileSync(htmlFilePath, html, 'utf8');

  console.log(` Generated HTML for ${route.path} -> canonical: ${route.canonicalUrl}`);
}

console.log('Successfully generated static HTML for all routes!');
