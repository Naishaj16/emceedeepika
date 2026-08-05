export interface ServiceItem {
  id: string;
  title: string;
  category: 'wedding' | 'corporate' | 'celebrity' | 'virtual' | 'award' | 'birthday' | 'private' | 'government' | 'family';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  subEvents?: string[];
  link?: string;
  linkText?: string;
  colSpan: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  event: string;
  location: string;
  quote: string;
  image: string;
  videoUrl?: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'wedding' | 'corporate' | 'celebrity' | 'international';
  image: string;
  location: string;
  year: string;
}

export interface EventBookingPayload {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  location: string;
  expectedGuests: string;
  message: string;
}
