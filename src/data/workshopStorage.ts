export interface WorkshopRegistration {
  id: string;
  name: string;
  email: string;
  phone: string;
  experience: string;
  goals?: string;
  amount: number;
  paymentMethod: string;
  status: 'confirmed' | 'pending' | 'cancelled';
  createdAt: string;
}

const STORAGE_KEY = 'emceedeepika_workshop_registrations';

// Initial sample registrations for demo & admin testing
const initialData: WorkshopRegistration[] = [
  {
    id: 'REG-101',
    name: 'Siddharth Rao',
    email: 'siddharth.rao@gmail.com',
    phone: '+91 98401 23456',
    experience: '1-3 Years Amateur Hosting',
    goals: 'Learn high-end corporate gala anchoring & script timing',
    amount: 4999,
    paymentMethod: 'Instant UPI / QR',
    status: 'confirmed',
    createdAt: '2026-10-04T10:15:00Z',
  },
  {
    id: 'REG-102',
    name: 'Ananya Krishnan',
    email: 'ananya.k@outlook.com',
    phone: '+91 97908 65432',
    experience: 'Beginner (No Prior Experience)',
    goals: 'Overcome stage fright and speak confidently with mic',
    amount: 4999,
    paymentMethod: 'Card / Gateway',
    status: 'confirmed',
    createdAt: '2026-10-04T12:40:00Z',
  },
  {
    id: 'REG-103',
    name: 'Vikramaditya Sengupta',
    email: 'vikram.sengupta@techcorp.in',
    phone: '+91 99400 11223',
    experience: 'Corporate / Working Professional',
    goals: 'Executive presentation authority & keynote introductions',
    amount: 4999,
    paymentMethod: 'Instant UPI / QR',
    status: 'confirmed',
    createdAt: '2026-10-04T14:20:00Z',
  }
];

export const getRegistrations = (): WorkshopRegistration[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
      return initialData;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to load registrations from localStorage', err);
    return initialData;
  }
};

export const saveRegistration = (data: Omit<WorkshopRegistration, 'id' | 'createdAt' | 'status' | 'amount'> & { amount?: number }): WorkshopRegistration => {
  const current = getRegistrations();
  const newReg: WorkshopRegistration = {
    id: `REG-${Date.now().toString().slice(-5)}`,
    name: data.name,
    email: data.email,
    phone: data.phone,
    experience: data.experience,
    goals: data.goals || '',
    amount: data.amount || 4999,
    paymentMethod: data.paymentMethod || 'Instant UPI / QR',
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };

  const updated = [newReg, ...current];
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save to localStorage', err);
  }

  // Also broadcast custom event for real-time admin sync across tabs
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('workshop_registration_added', { detail: newReg }));
  }

  return newReg;
};

export const updateRegistrationStatus = (id: string, status: WorkshopRegistration['status']) => {
  const current = getRegistrations();
  const updated = current.map(item => item.id === id ? { ...item, status } : item);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to update status', err);
  }
  return updated;
};

export const deleteRegistration = (id: string) => {
  const current = getRegistrations();
  const updated = current.filter(item => item.id !== id);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to delete registration', err);
  }
  return updated;
};

export const clearAllRegistrations = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear registrations', err);
  }
};
