import React, { useState, useEffect } from 'react';
import {
  Users,
  Search,
  Download,
  Trash2,
  CheckCircle2,
  Clock,
  IndianRupee,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Target,
  Sparkles,
  ArrowUpDown,
  Filter,
  RefreshCw,
  Eye,
  X,
  Lock,
  LogOut,
  KeyRound,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { getRegistrations, updateRegistrationStatus, deleteRegistration, WorkshopRegistration } from '../data/workshopStorage';
import { SEOHead } from '../components/SEOHead';
import { Link } from '@tanstack/react-router';

const ADMIN_STORAGE_KEY = 'emcee_deepika_admin_auth';
const ADMIN_PASSWORD = 'Deepika@2026';

export const WorkshopAdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
    }
    return false;
  });
  const [inputPassword, setInputPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [registrations, setRegistrations] = useState<WorkshopRegistration[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'confirmed' | 'pending'>('all');
  const [selectedAttendee, setSelectedAttendee] = useState<WorkshopRegistration | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      setLoginError('');
      setInputPassword('');
    } else {
      setLoginError('Incorrect password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    setSelectedAttendee(null);
  };

  const loadData = () => {
    setRegistrations(getRegistrations());
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();

      // Listen for real-time updates
      const handleStorageUpdate = () => loadData();
      window.addEventListener('workshop_registration_added', handleStorageUpdate);
      window.addEventListener('storage', handleStorageUpdate);
      return () => {
        window.removeEventListener('workshop_registration_added', handleStorageUpdate);
        window.removeEventListener('storage', handleStorageUpdate);
      };
    }
  }, [isAuthenticated]);

  const filtered = registrations.filter((reg) => {
    const matchesSearch =
      reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phone.includes(searchTerm) ||
      reg.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || reg.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalRevenue = registrations
    .filter((r) => r.status === 'confirmed')
    .reduce((acc, r) => acc + (r.amount || 4999), 0);

  const totalSeats = 25;
  const bookedSeats = registrations.filter((r) => r.status === 'confirmed').length;
  const remainingSeats = Math.max(0, totalSeats - bookedSeats);

  const handleExportCSV = () => {
    const headers = ['Registration ID', 'Name', 'Email', 'Phone', 'Experience Level', 'Goals', 'Amount (INR)', 'Payment Method', 'Status', 'Date Registered'];
    const rows = registrations.map((r) => [
      r.id,
      `"${r.name}"`,
      `"${r.email}"`,
      `"${r.phone}"`,
      `"${r.experience}"`,
      `"${(r.goals || '').replace(/"/g, '""')}"`,
      r.amount || 4999,
      `"${r.paymentMethod}"`,
      r.status,
      new Date(r.createdAt).toLocaleString(),
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Workshop_Attendees_Chennai_21Nov_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleStatusChange = (id: string, newStatus: WorkshopRegistration['status']) => {
    const updated = updateRegistrationStatus(id, newStatus);
    setRegistrations(updated);
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this registration record?')) {
      const updated = deleteRegistration(id);
      setRegistrations(updated);
      if (selectedAttendee?.id === id) {
        setSelectedAttendee(null);
      }
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="bg-[#0f2117] min-h-screen pt-36 pb-24 text-white flex items-center justify-center px-4 relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-DEFAULT/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="w-full max-w-md bg-[#13281D] border-2 border-gold-DEFAULT/40 rounded-3xl p-8 shadow-2xl relative z-10 space-y-6">
          <div className="text-center space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-gold-DEFAULT/20 border border-gold-DEFAULT/50 flex items-center justify-center mx-auto text-gold-DEFAULT shadow-inner">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold-light">Internal Access</span>
              <h2 className="font-serif text-2xl font-bold text-white mt-1">Deepika Workshop Admin</h2>
              <p className="text-xs text-pastel-300 mt-1">Please enter your administrator password to unlock attendee registrations & data.</p>
            </div>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-pastel-200 mb-1.5">
                Admin Password
              </label>
              <div className="relative">
                <KeyRound className="w-4 h-4 text-pastel-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => {
                    setInputPassword(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  placeholder="Enter admin password"
                  autoFocus
                  className="w-full pl-10 pr-4 py-3 bg-[#0a1710] border border-gold-DEFAULT/30 rounded-xl text-sm text-white placeholder-pastel-500 focus:outline-none focus:border-gold-DEFAULT transition-colors"
                />
              </div>
              {loginError && (
                <div className="flex items-center gap-1.5 text-xs text-rose-400 mt-2 font-medium">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{loginError}</span>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-gold-dark via-gold-DEFAULT to-amber-300 hover:brightness-110 text-pastel-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              Unlock Dashboard
            </button>
          </form>

          <div className="text-center pt-2 border-t border-white/10">
            <Link to="/" className="text-xs text-pastel-300 hover:text-white transition-colors underline">
              ← Return to Main Website
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAF9] min-h-screen pt-28 pb-20 text-pastel-950">
      <SEOHead
        title="Admin Portal | Workshop Registrations & Leads | Deepika Jain"
        description="Internal backend dashboard for managing attendee registrations, payments, and seat allocations for the 1-Day Emcee Workshop in Chennai."
        canonicalUrl="https://www.emceedeepika.com/workshop-admin"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-pastel-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-800 text-gold-light text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
              <span>Deepika Jain Masterclass Portal</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-950">
              Workshop Registrations Backend
            </h1>
            <p className="text-sm text-pastel-600 mt-1 flex items-center gap-3">
              <span>Event: <strong>21st Nov 2026</strong></span>
              <span>•</span>
              <span>Venue: <strong>E Hotel, Express Avenue Mall, Chennai</strong></span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadData}
              className="flex items-center gap-1.5 bg-white hover:bg-pastel-100 text-pastel-800 border border-pastel-300 px-4 py-2.5 rounded-xl text-xs font-bold shadow-xs transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Refresh</span>
            </button>
            <button
              onClick={handleExportCSV}
              className="flex items-center gap-2 bg-[#13281D] hover:bg-[#1C3B2B] text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-gold-DEFAULT" />
              <span>Export CSV (Excel)</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer"
              title="Logout from Admin"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Lock / Exit</span>
            </button>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Total Registrations */}
          <div className="bg-white p-6 rounded-2xl border border-pastel-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-pastel-500 text-xs font-bold uppercase tracking-wider">
              <span>Total Registrations</span>
              <Users className="w-5 h-5 text-pastel-700" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-pastel-950">
              {registrations.length}
            </div>
            <div className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Active attendees database</span>
            </div>
          </div>

          {/* Confirmed Seats */}
          <div className="bg-white p-6 rounded-2xl border border-pastel-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-pastel-500 text-xs font-bold uppercase tracking-wider">
              <span>Confirmed Seats</span>
              <Calendar className="w-5 h-5 text-gold-DEFAULT" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-pastel-950">
              {bookedSeats} <span className="text-base text-pastel-400 font-normal">/ {totalSeats}</span>
            </div>
            <div className="text-xs text-pastel-600 font-medium">
              Capacity: {Math.round((bookedSeats / totalSeats) * 100)}% Filled
            </div>
          </div>

          {/* Remaining Seats */}
          <div className="bg-white p-6 rounded-2xl border border-pastel-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-pastel-500 text-xs font-bold uppercase tracking-wider">
              <span>Available Seats</span>
              <Clock className="w-5 h-5 text-amber-500" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-amber-600">
              {remainingSeats} Left
            </div>
            <div className="text-xs text-pastel-600 font-medium">
              Price per seat: <strong>₹4,999</strong>
            </div>
          </div>

          {/* Total Revenue */}
          <div className="bg-white p-6 rounded-2xl border border-pastel-200 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-pastel-500 text-xs font-bold uppercase tracking-wider">
              <span>Gross Collection</span>
              <IndianRupee className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="font-serif text-3xl font-extrabold text-emerald-700">
              ₹{totalRevenue.toLocaleString()}
            </div>
            <div className="text-xs text-emerald-600 font-medium">
              Payment gateway & UPI confirmed
            </div>
          </div>

        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-pastel-200 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-pastel-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, email, phone, or ID..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-pastel-50 border border-pastel-200 text-sm text-pastel-900 focus:outline-none focus:ring-2 focus:ring-pastel-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Filter className="w-4 h-4 text-pastel-500" />
            <span className="text-xs font-bold uppercase text-pastel-600">Filter:</span>
            <div className="flex rounded-xl bg-pastel-100 p-1 border border-pastel-200">
              {(['all', 'confirmed', 'pending'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => setFilterStatus(st)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all ${
                    filterStatus === st
                      ? 'bg-white text-pastel-950 shadow-xs'
                      : 'text-pastel-600 hover:text-pastel-900'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table & Detailed View Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Attendee Registrations Table */}
          <div className={`${selectedAttendee ? 'lg:col-span-8' : 'lg:col-span-12'} bg-white rounded-2xl border border-pastel-200 shadow-sm overflow-hidden transition-all`}>
            <div className="p-4 bg-pastel-100 border-b border-pastel-200 flex justify-between items-center">
              <h3 className="font-serif font-bold text-pastel-900 text-lg">
                Attendee Registrations ({filtered.length})
              </h3>
              <span className="text-xs text-pastel-600 font-medium">Click on any row to view full goals & profile</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-pastel-50 text-pastel-700 text-xs uppercase font-bold border-b border-pastel-200">
                  <tr>
                    <th className="py-3.5 px-4">Reg ID</th>
                    <th className="py-3.5 px-4">Attendee</th>
                    <th className="py-3.5 px-4">Contact</th>
                    <th className="py-3.5 px-4">Experience</th>
                    <th className="py-3.5 px-4">Amount</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pastel-100">
                  {filtered.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-10 text-pastel-500 text-sm">
                        No registrations found matching "{searchTerm}"
                      </td>
                    </tr>
                  ) : (
                    filtered.map((reg) => (
                      <tr
                        key={reg.id}
                        onClick={() => setSelectedAttendee(reg)}
                        className={`hover:bg-pastel-50 cursor-pointer transition-colors ${
                          selectedAttendee?.id === reg.id ? 'bg-pastel-100/80 font-medium' : ''
                        }`}
                      >
                        <td className="py-3 px-4 font-mono text-xs text-pastel-500 font-bold">
                          {reg.id}
                        </td>
                        <td className="py-3 px-4">
                          <div className="font-bold text-pastel-950">{reg.name}</div>
                          <div className="text-xs text-pastel-500">{new Date(reg.createdAt).toLocaleDateString()}</div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="text-xs text-pastel-900 font-medium">{reg.phone}</div>
                          <div className="text-xs text-pastel-500">{reg.email}</div>
                        </td>
                        <td className="py-3 px-4 text-xs text-pastel-700">
                          <span className="px-2.5 py-1 rounded-full bg-pastel-100 border border-pastel-200 text-pastel-800 font-medium">
                            {reg.experience}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-pastel-900">
                          ₹{reg.amount || 4999}
                        </td>
                        <td className="py-3 px-4">
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold capitalize ${
                              reg.status === 'confirmed'
                                ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                : 'bg-amber-100 text-amber-800 border border-amber-200'
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            {reg.status}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => setSelectedAttendee(reg)}
                              className="p-1.5 rounded-lg bg-pastel-100 hover:bg-pastel-200 text-pastel-700"
                              title="View Details"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(reg.id)}
                              className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Attendee Full Inspector Card */}
          {selectedAttendee && (
            <div className="lg:col-span-4 bg-white rounded-2xl border border-pastel-300 shadow-md p-6 space-y-6 sticky top-28 text-left">
              <div className="flex justify-between items-start border-b border-pastel-200 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-pastel-100 px-2 py-0.5 rounded text-pastel-700 font-bold">
                    {selectedAttendee.id}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-pastel-950 mt-1">
                    {selectedAttendee.name}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedAttendee(null)}
                  className="p-1 text-pastel-400 hover:text-pastel-700 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 text-xs text-pastel-800">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-pastel-500 shrink-0" />
                  <a href={`mailto:${selectedAttendee.email}`} className="text-pastel-900 underline font-medium">
                    {selectedAttendee.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-pastel-500 shrink-0" />
                  <a href={`tel:${selectedAttendee.phone}`} className="text-pastel-900 underline font-medium">
                    {selectedAttendee.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-pastel-500 shrink-0" />
                  <span>Submitted: {new Date(selectedAttendee.createdAt).toLocaleString()}</span>
                </div>
              </div>

              {/* Speaking Profile & Experience */}
              <div className="space-y-2 border-t border-pastel-100 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-500 block">
                  Anchor / Speaking Experience
                </span>
                <p className="text-xs bg-pastel-50 p-2.5 rounded-xl border border-pastel-200 text-pastel-900 font-medium">
                  {selectedAttendee.experience}
                </p>
              </div>

              {/* Stated Goals */}
              <div className="space-y-2 border-t border-pastel-100 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-pastel-500 block">
                  Attendee's #1 Learning Goal
                </span>
                <p className="text-xs bg-pastel-50 p-3 rounded-xl border border-pastel-200 text-pastel-800 leading-relaxed italic">
                  "{selectedAttendee.goals || 'No specific note added — focused on general stage mastery.'}"
                </p>
              </div>

              {/* Payment Details */}
              <div className="border-t border-pastel-100 pt-4 space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-pastel-500">Amount Paid:</span>
                  <span className="font-bold text-pastel-950 font-mono text-sm">₹{selectedAttendee.amount || 4999}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-pastel-500">Method:</span>
                  <span className="font-bold text-pastel-900">{selectedAttendee.paymentMethod}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-pastel-500">Seat Status:</span>
                  <select
                    value={selectedAttendee.status}
                    onChange={(e) => handleStatusChange(selectedAttendee.id, e.target.value as any)}
                    className="px-2 py-1 rounded-lg border border-pastel-300 text-xs font-bold text-pastel-900 bg-white"
                  >
                    <option value="confirmed">Confirmed</option>
                    <option value="pending">Pending</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              {/* Direct Quick Action */}
              <div className="pt-2">
                <a
                  href={`mailto:${selectedAttendee.email}?subject=Confirmation:%201-Day%20Emcee%20Masterclass%20Pass%20(Chennai%2021st%20Nov)&body=Dear%20${encodeURIComponent(selectedAttendee.name)},%0A%0AWe%20are%20delighted%20to%20confirm%20your%20seat%20for%20the%201-Day%20Emcee%20%26%20Anchor%20Mastery%20Workshop%20with%20Deepika%20Jain!%0A%0ADate:%2021st%20November%202026%0ATime:%2010:00%20AM%20-%205:30%20PM%0AVenue:%20E%20Hotel,%20Express%20Avenue%20Mall,%20Royapettah,%20Chennai%0A%0ARegistration%20ID:%20${selectedAttendee.id}%0A%0AWe%20look%20forward%20to%20welcoming%20you%20on%20stage!`}
                  className="w-full flex items-center justify-center gap-2 bg-pastel-800 hover:bg-pastel-900 text-white py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-gold-DEFAULT" />
                  <span>Send Confirmation Email</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
