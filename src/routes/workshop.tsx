import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  CheckCircle2,
  Users,
  Mic,
  Award,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Target,
  FileText,
  HelpCircle,
  Share2,
  ChevronDown,
  Lock,
  Building,
  Navigation
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Link } from '@tanstack/react-router';
import { saveRegistration } from '../data/workshopStorage';
import { HeroWorkshopPoster } from '../components/HeroWorkshopPoster';

export const WorkshopPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Beginner (No Prior Experience)',
    goals: '',
    referral: '',
  });

  const [paymentStep, setPaymentStep] = useState<'form' | 'payment' | 'success'>('form');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<'upi' | 'card'>('upi');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [registeredId, setRegisteredId] = useState<string>('');

  const workshopDetails = {
    date: '7th November 2026',
    time: '10:00 AM – 5:30 PM (Full-Day Intensive)',
    venueName: 'E Hotel Chennai (Express Avenue)',
    venueAddress: 'Express Avenue Mall, Ground Floor, Gate No. 1, Patullos Road, Royapettah, Chennai, Tamil Nadu 600002',
    mapLink: 'https://maps.google.com/?q=E+Hotel+Express+Avenue+Royapettah+Chennai',
    investment: {
      price: '₹4,999',
      original: '₹8,999',
      discount: '45% OFF Early Bird',
      upiId: '8056958856@okbizaxis',
    },
    seatsRemaining: 6,
  };

  const curriculum = [
    {
      icon: <Mic className="w-6 h-6 text-gold-DEFAULT" />,
      title: 'Confident Stage Opening & Presence',
      desc: 'Master opening hooks, body language, eliminating stage fright, and commanding the room within the first 10 seconds.',
    },
    {
      icon: <FileText className="w-6 h-6 text-gold-DEFAULT" />,
      title: 'Scriptwriting & Content Architecture',
      desc: 'Learn how to write and adapt captivating scripts for weddings, corporate summits, and award nights with ready frameworks.',
    },
    {
      icon: <Users className="w-6 h-6 text-gold-DEFAULT" />,
      title: 'Audience Engagement & Energy Dynamics',
      desc: 'Techniques to break the ice, read crowd reactions, involve shy guests, and keep 1,000+ people tuned into the event.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-gold-DEFAULT" />,
      title: 'Handling Unexpected Stage Glitches',
      desc: 'Impromptu speaking, filler tactics during technical delays, VIP delay management, and unscripted humor.',
    },
    {
      icon: <Target className="w-6 h-6 text-gold-DEFAULT" />,
      title: 'Microphone & Stage Protocol Mastery',
      desc: 'Mic technique, acoustic control, coordination with sound engineers, DJ cues, and lighting coordination.',
    },
    {
      icon: <Award className="w-6 h-6 text-gold-DEFAULT" />,
      title: 'Monetization & Personal Branding',
      desc: 'How to build your emcee portfolio, price your services, pitch to event planners, and close high-ticket gigs.',
    },
  ];

  const takeaways = [
    'Your Own Signature Stage Opening Routine',
    'Ready-to-Use Master Event Script Templates',
    'Live Hands-on Stage Practice with Real-Time Feedback',
    '1-on-1 Personalized Coaching from Deepika Jain',
    'Official Verified Workshop Completion Certificate',
    'Exclusive Access to Emcee Alumni & Event Network',
  ];

  const targetAudiences = [
    'Aspiring Emcees & Anchors wanting a solid launchpad',
    'Working Emcees looking to upgrade to luxury & corporate scale',
    'Public Speakers, Trainers, and Corporate Presenters',
    'Entrepreneurs, Founders & Executives aiming for stage authority',
    'College Students & Beginners (No prior experience needed)',
  ];

  const faqs = [
    {
      q: 'Do I need any previous stage or emceeing experience?',
      a: 'Not at all! This masterclass is designed for all levels — from complete beginners who have never held a mic to working anchors looking to polish their craft for luxury weddings and corporate summits.',
    },
    {
      q: 'Where exactly is the venue in Chennai?',
      a: 'The workshop takes place at the luxurious E Hotel located inside Express Avenue Mall, Ground Floor, Gate No. 1, Patullos Road, Royapettah, Chennai (Pincode: 600002). Easy valet parking and metro connectivity.',
    },
    {
      q: 'Will I get practical stage time during the workshop?',
      a: 'Yes! Unlike theoretical webinars, this is a hands-on offline workshop. You will step onto the stage, practice live speaking prompts, and receive direct, constructive feedback from Deepika Jain.',
    },
    {
      q: 'What should I bring along on the day?',
      a: 'Bring your enthusiasm, a notebook/tablet for scripting exercises, and wear smart casual or stage-ready attire for on-camera rehearsals.',
    },
    {
      q: 'How do I confirm my seat after payment?',
      a: 'Once you fill out the registration form and complete your payment, your pass is instantly registered in our system and an official confirmation email is sent with your badge details.',
    },
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setPaymentStep('payment');
      window.scrollTo({ top: document.getElementById('booking-section')?.offsetTop || 0, behavior: 'smooth' });
    }, 600);
  };

  const handleCompleteRegistration = (method: 'Instant UPI / QR' | 'Card / Gateway') => {
    setIsSubmitting(true);
    
    // Save to local backend storage
    const saved = saveRegistration({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      goals: formData.goals,
      amount: 4999,
      paymentMethod: method,
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setRegisteredId(saved.id);
      setPaymentStep('success');
    }, 1000);
  };

  return (
    <div className="bg-pastel-50 text-pastel-950 min-h-screen">
      <SEOHead
        title="1-Day Emcee & Anchor Masterclass Workshop | 7th November | Deepika Jain"
        description="Join Deepika Jain's exclusive 1-Day Emcee/Anchor Workshop on 7th November at E Hotel Chennai (Express Avenue Mall). Learn public speaking, stage presence, scriptwriting & audience control. Limited seats!"
        keywords={[
          'emcee workshop chennai',
          'anchor training class chennai',
          'e hotel express avenue workshop',
          'deepika jain workshop',
          'emcee masterclass',
          'how to become an anchor',
          'stage anchoring training chennai',
        ]}
        canonicalUrl="https://www.emceedeepika.com/workshop"
      />

      {/* Hero Banner Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#13281D] via-[#1C3B2B] to-[#13281D] text-white">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-DEFAULT/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pastel-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-DEFAULT/20 border border-gold-DEFAULT/40 text-gold-light text-xs font-bold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
                <span>Exclusive In-Person Masterclass • E Hotel Chennai</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-pastel-50">
                1 Day Emcee & Anchor <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-DEFAULT to-amber-200">
                  Mastery Workshop
                </span>
              </h1>

              {/* Subtitle / Punchline */}
              <p className="text-base sm:text-xl text-pastel-200 font-light leading-relaxed max-w-2xl">
                Better Communication. Bigger Opportunities. Learn the art of high-impact stage presence, scriptwriting, crowd control, and monetization directly from international emcee <strong>Deepika Jain</strong>.
              </p>

              {/* Key Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-gold-DEFAULT text-xs font-bold uppercase tracking-wider mb-1">
                    <Calendar className="w-4 h-4" />
                    <span>Date & Time</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-white">
                    7th November 2026
                  </div>
                  <div className="text-[11px] text-pastel-300">10:00 AM – 5:30 PM</div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-gold-DEFAULT text-xs font-bold uppercase tracking-wider mb-1">
                    <Building className="w-4 h-4" />
                    <span>Venue</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-white">
                    E Hotel Chennai
                  </div>
                  <div className="text-[11px] text-pastel-300 truncate" title="Express Avenue Mall, Royapettah">
                    Express Avenue Mall
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-3.5">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Users className="w-4 h-4" />
                    <span>Investment</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-emerald-300">
                    {workshopDetails.investment.price}{' '}
                    <span className="text-xs text-pastel-400 line-through font-normal">{workshopDetails.investment.original}</span>
                  </div>
                  <div className="text-[11px] text-pastel-300">Limited to 25 Seats</div>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#booking-section"
                  className="flex items-center gap-3 bg-gradient-to-r from-gold-DEFAULT via-amber-500 to-amber-600 hover:from-amber-500 hover:to-gold-DEFAULT text-pastel-950 px-8 py-4 rounded-full font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 group"
                >
                  <Sparkles className="w-5 h-5 text-pastel-950" />
                  <span>Reserve Your Seat ({workshopDetails.investment.price})</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={workshopDetails.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-pastel-400 bg-white/10 hover:bg-white/20 text-pastel-100 px-6 py-4 rounded-full font-semibold text-sm transition-all backdrop-blur-sm"
                >
                  <MapPin className="w-4 h-4 text-gold-DEFAULT" />
                  <span>View Venue on Google Maps</span>
                </a>
              </div>

              {/* Venue Full Address Banner */}
              <div className="pt-3 border-t border-white/10 flex items-start gap-2 text-xs text-pastel-300">
                <MapPin className="w-4 h-4 text-gold-DEFAULT shrink-0 mt-0.5" />
                <span>
                  <strong>Venue Address:</strong> {workshopDetails.venueAddress}
                </span>
              </div>
            </div>

            {/* Right Poster Column */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroWorkshopPoster />
            </div>

          </div>
        </div>
      </section>

      {/* Trainer Credentials Spotlight */}
      <section className="py-16 bg-white border-b border-pastel-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-pastel-100 via-white to-pastel-100 rounded-3xl p-8 sm:p-12 border border-pastel-300 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-4 flex justify-center">
              <div className="relative">
                <div className="w-44 h-44 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-gold-DEFAULT shadow-xl">
                  <img
                    src="/images/deepika/deepika-1.webp"
                    alt="Emcee Deepika Jain Mentor"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 right-4 bg-pastel-900 text-gold-DEFAULT font-bold text-xs px-3 py-1.5 rounded-full border border-gold-DEFAULT/50 shadow-md">
                  ★ Lead Mentor
                </div>
              </div>
            </div>

            <div className="md:col-span-8 space-y-4 text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-200 px-3 py-1 rounded-full">
                Learn from the Master
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-950">
                Meet Your Mentor: Deepika Jain
              </h2>
              <p className="text-pastel-750 text-sm sm:text-base leading-relaxed">
                Known for her boundless energy, elegance, and effortless connect with crowds, Deepika Jain is an international anchor and communication coach who has hosted high-stakes events for Fortune 500 companies, grand celebrity weddings, and international award summits across 15+ countries.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="border-l-2 border-gold-DEFAULT pl-3">
                  <div className="font-serif text-2xl font-bold text-pastel-900">2,500+</div>
                  <div className="text-xs text-pastel-600 font-medium">Events Hosted</div>
                </div>
                <div className="border-l-2 border-gold-DEFAULT pl-3">
                  <div className="font-serif text-2xl font-bold text-pastel-900">15+</div>
                  <div className="text-xs text-pastel-600 font-medium">Years Experience</div>
                </div>
                <div className="border-l-2 border-gold-DEFAULT pl-3">
                  <div className="font-serif text-2xl font-bold text-pastel-900">15+</div>
                  <div className="text-xs text-pastel-600 font-medium">Countries Toured</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Who is this for? & In 1 Day, Learn To */}
      <section className="py-20 bg-pastel-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Target Audience Section */}
          <div>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-200 px-4 py-1.5 rounded-full border border-pastel-300">
                Tailored for Ambition
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-950">
                Who Is This Workshop For?
              </h2>
              <p className="text-pastel-700 text-sm sm:text-base">
                Whether you want to build a thriving career in hosting or gain unmatched confidence in professional speaking.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {targetAudiences.map((audience, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-pastel-200 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-pastel-100 text-gold-dark flex items-center justify-center shrink-0 font-serif font-bold text-lg">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-pastel-900 text-sm sm:text-base leading-snug">
                      {audience}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Curriculum */}
          <div>
            <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-200 px-4 py-1.5 rounded-full border border-pastel-300">
                Comprehensive 1-Day Syllabus
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-950">
                In Just 1 Day, You Will Master:
              </h2>
              <p className="text-pastel-700 text-sm sm:text-base">
                Real skills. Real practice. Real growth. Step-by-step guidance straight from industry trenches.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {curriculum.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-7 border border-pastel-200 shadow-sm hover:shadow-lg transition-all space-y-4 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pastel-100 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-pastel-950">
                    {item.title}
                  </h3>
                  <p className="text-sm text-pastel-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Walk Away With (Key Deliverables) */}
          <div className="bg-[#13281D] text-white rounded-3xl p-8 sm:p-12 border border-gold-DEFAULT/30 shadow-xl">
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-DEFAULT bg-white/10 px-4 py-1 rounded-full border border-gold-DEFAULT/30">
                Guaranteed Takeaways
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-pastel-50">
                By The End Of The Day, You'll Walk Away With:
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {takeaways.map((takeaway, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-DEFAULT shrink-0" />
                  <span className="text-sm font-medium text-pastel-100">{takeaway}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Venue Spotlight Card */}
      <section className="py-12 bg-white border-t border-b border-pastel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pastel-900 to-[#1C3B2B] text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-gold-DEFAULT/40 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-left">
              <div className="inline-flex items-center gap-2 text-gold-DEFAULT text-xs font-bold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-full">
                <MapPin className="w-3.5 h-3.5" />
                <span>Prime Workshop Venue</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                E Hotel, Express Avenue Mall
              </h3>
              <p className="text-sm text-pastel-200 max-w-xl leading-relaxed">
                Ground Floor, Gate No. 1, Patullos Road, Express Estate, Royapettah, Chennai, Tamil Nadu - 600002.
              </p>
              <div className="text-xs text-pastel-300">
                ✓ State-of-the-art stage acoustics • Valet Parking • Centrally Located
              </div>
            </div>

            <a
              href={workshopDetails.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gold-DEFAULT hover:bg-amber-400 text-pastel-950 px-6 py-3.5 rounded-full font-bold text-sm shadow-lg transition-all shrink-0 hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Booking Form & Payment Section */}
      <section id="booking-section" className="py-20 bg-pastel-100 border-b border-pastel-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-white px-4 py-1.5 rounded-full border border-pastel-300">
              Official Registration
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-950">
              Reserve Your Masterclass Seat
            </h2>
            <p className="text-pastel-750 text-sm sm:text-base max-w-xl mx-auto">
              Fill out your details to receive immediate seat confirmation and registration ID.
            </p>
          </div>

          {/* Multi-step registration & payment box */}
          <div className="bg-white rounded-3xl shadow-xl border border-pastel-300 overflow-hidden">
            
            {/* Progress Header */}
            <div className="bg-pastel-900 text-white p-6 grid grid-cols-3 text-center border-b border-pastel-800">
              <div className={`space-y-1 ${paymentStep === 'form' ? 'text-gold-DEFAULT font-bold' : 'text-pastel-400'}`}>
                <div className="text-xs uppercase tracking-wider">Step 1</div>
                <div className="text-sm">Your Details</div>
              </div>
              <div className={`space-y-1 ${paymentStep === 'payment' ? 'text-gold-DEFAULT font-bold' : 'text-pastel-400'}`}>
                <div className="text-xs uppercase tracking-wider">Step 2</div>
                <div className="text-sm">Seat Investment ({workshopDetails.investment.price})</div>
              </div>
              <div className={`space-y-1 ${paymentStep === 'success' ? 'text-gold-DEFAULT font-bold' : 'text-pastel-400'}`}>
                <div className="text-xs uppercase tracking-wider">Step 3</div>
                <div className="text-sm">Confirmed Pass</div>
              </div>
            </div>

            <div className="p-6 sm:p-10">
              
              {/* STEP 1: Details Form */}
              {paymentStep === 'form' && (
                <form onSubmit={handleFormSubmit} className="space-y-6 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sundaram"
                        className="w-full px-4 py-3 rounded-xl bg-pastel-50 border border-pastel-300 text-pastel-950 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-600"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="priya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-pastel-50 border border-pastel-300 text-pastel-950 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-600"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
                        Phone Number / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-pastel-50 border border-pastel-300 text-pastel-950 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-600"
                      />
                    </div>

                    {/* Experience Level */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
                        Speaking / Anchor Experience *
                      </label>
                      <select
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-pastel-50 border border-pastel-300 text-pastel-950 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-600"
                      >
                        <option value="Beginner (No Prior Experience)">Beginner (No Prior Experience)</option>
                        <option value="College / Club Events Hosted">College / Club Events Hosted</option>
                        <option value="1-3 Years Amateur Hosting">1-3 Years Amateur Hosting</option>
                        <option value="Corporate / Working Professional">Corporate / Working Professional</option>
                        <option value="Professional Anchor Upgrading Skills">Professional Anchor Upgrading Skills</option>
                      </select>
                    </div>

                  </div>

                  {/* Primary Goal / What do you want to learn? */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800 mb-2">
                      What is your #1 goal from this workshop? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      placeholder="e.g. Conquer stage fear, learn how to get paid emcee bookings, write better scripts..."
                      className="w-full px-4 py-3 rounded-xl bg-pastel-50 border border-pastel-300 text-pastel-950 text-sm focus:outline-none focus:ring-2 focus:ring-pastel-600"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-xs text-pastel-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Direct admin verified registration & instant pass generation.</span>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex items-center justify-center gap-3 bg-pastel-800 hover:bg-pastel-900 text-pastel-50 px-8 py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span>Processing...</span>
                      ) : (
                        <>
                          <span>Proceed to Payment ({workshopDetails.investment.price})</span>
                          <ArrowRight className="w-4 h-4 text-gold-DEFAULT" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 2: Payment Options & Gateways */}
              {paymentStep === 'payment' && (
                <div className="space-y-8 text-left">
                  
                  {/* Pricing Overview Summary Box */}
                  <div className="bg-pastel-50 rounded-2xl p-6 border border-pastel-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                        {workshopDetails.investment.discount}
                      </span>
                      <h4 className="font-serif text-xl font-bold text-pastel-950 mt-2">
                        1-Day In-Person Workshop Pass
                      </h4>
                      <p className="text-xs text-pastel-600">
                        Date: <strong>7th Nov 2026</strong> • Venue: <strong>E Hotel Chennai (Express Avenue)</strong>
                      </p>
                    </div>

                    <div className="text-left sm:text-right">
                      <div className="text-xs text-pastel-400 line-through">
                        {workshopDetails.investment.original}
                      </div>
                      <div className="font-serif text-3xl font-extrabold text-pastel-950">
                        {workshopDetails.investment.price}
                      </div>
                      <div className="text-[11px] text-pastel-500 font-medium">Inclusive of mentorship, kit & certificate</div>
                    </div>
                  </div>

                  {/* Payment Gateway Options Tabs */}
                  <div className="space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-pastel-800">
                      Select Payment Mode
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* UPI Option */}
                      <button
                        type="button"
                        onClick={() => setSelectedMethod('upi')}
                        className={`p-5 rounded-2xl border text-left transition-all ${
                          selectedMethod === 'upi'
                            ? 'border-pastel-800 bg-pastel-100 ring-2 ring-pastel-700 shadow-sm'
                            : 'border-pastel-200 bg-white hover:bg-pastel-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-pastel-900">Instant UPI Transfer / QR</span>
                          <span className="w-3.5 h-3.5 rounded-full border border-pastel-400 flex items-center justify-center">
                            {selectedMethod === 'upi' && <span className="w-2 h-2 rounded-full bg-pastel-800"></span>}
                          </span>
                        </div>
                        <p className="text-xs text-pastel-600">Google Pay, PhonePe, Paytm, BHIM</p>
                      </button>

                      {/* Card / Netbanking Option */}
                      <button
                        type="button"
                        onClick={() => setSelectedMethod('card')}
                        className={`p-5 rounded-2xl border text-left transition-all ${
                          selectedMethod === 'card'
                            ? 'border-pastel-800 bg-pastel-100 ring-2 ring-pastel-700 shadow-sm'
                            : 'border-pastel-200 bg-white hover:bg-pastel-50'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-bold text-sm text-pastel-900">Card / Netbanking</span>
                          <span className="w-3.5 h-3.5 rounded-full border border-pastel-400 flex items-center justify-center">
                            {selectedMethod === 'card' && <span className="w-2 h-2 rounded-full bg-pastel-800"></span>}
                          </span>
                        </div>
                        <p className="text-xs text-pastel-600">Credit card, Debit card & Online Banking</p>
                      </button>

                    </div>
                  </div>

                  {/* Payment Details Container based on selection */}
                  {selectedMethod === 'upi' && (
                    <div className="bg-pastel-50 p-6 rounded-2xl border border-pastel-200 space-y-5">
                      <div className="flex flex-col sm:flex-row items-center gap-6 justify-between">
                        <div className="space-y-2 text-center sm:text-left">
                          <div className="text-xs uppercase font-bold text-pastel-600">Official UPI ID for Payment:</div>
                          <div className="font-mono text-lg font-bold bg-white px-4 py-2.5 rounded-xl border border-pastel-300 text-pastel-900 select-all shadow-xs">
                            {workshopDetails.investment.upiId}
                          </div>
                          <p className="text-xs text-pastel-600 max-w-sm">
                            Scan the QR code or transfer <strong>{workshopDetails.investment.price}</strong> using Google Pay / PhonePe / Paytm / CRED.
                          </p>
                        </div>
                        
                        <div className="bg-white p-3.5 rounded-2xl border border-pastel-300 shadow-sm text-center">
                          <div className="w-32 h-32 bg-pastel-900 text-white flex flex-col items-center justify-center rounded-xl text-xs font-mono p-2">
                            <span className="text-[10px] text-gold-DEFAULT mb-1">SCAN & PAY</span>
                            <span className="font-bold text-base">{workshopDetails.investment.price}</span>
                            <span className="text-[8px] text-pastel-300 mt-1">EMCEE DEEPIKA</span>
                          </div>
                          <span className="text-[10px] text-pastel-500 font-bold block mt-1">UPI Verified</span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-pastel-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <button
                          onClick={() => handleCompleteRegistration('Instant UPI / QR')}
                          disabled={isSubmitting}
                          className="w-full sm:w-auto bg-pastel-800 hover:bg-pastel-900 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
                        >
                          {isSubmitting ? 'Recording Registration...' : `I Have Paid ${workshopDetails.investment.price} — Confirm My Seat`}
                        </button>

                        <div className="text-xs text-pastel-500">
                          Instant database recording
                        </div>
                      </div>
                    </div>
                  )}

                  {selectedMethod === 'card' && (
                    <div className="bg-pastel-50 p-6 rounded-2xl border border-pastel-200 space-y-4">
                      <p className="text-xs text-pastel-700">
                        Secure gateway checkout for <strong>{workshopDetails.investment.price}</strong>.
                      </p>
                      <button
                        onClick={() => handleCompleteRegistration('Card / Gateway')}
                        disabled={isSubmitting}
                        className="w-full bg-pastel-800 hover:bg-pastel-900 text-white px-8 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                      >
                        <CreditCard className="w-4 h-4 text-gold-DEFAULT" />
                        <span>{isSubmitting ? 'Processing...' : `Pay ${workshopDetails.investment.price} via Secure Gateway`}</span>
                      </button>
                    </div>
                  )}

                  <div className="flex justify-between items-center pt-2">
                    <button
                      type="button"
                      onClick={() => setPaymentStep('form')}
                      className="text-xs font-bold text-pastel-600 hover:text-pastel-900 underline"
                    >
                      ← Back to Edit Details
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 3: Success Confirmation State */}
              {paymentStep === 'success' && (
                <div className="text-center py-8 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 mx-auto flex items-center justify-center shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-pastel-950">
                    Registration Successfully Confirmed!
                  </h3>

                  <p className="text-sm text-pastel-700 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{formData.name || 'Speaker'}</strong>! Your seat registration has been recorded in our backend database.
                  </p>

                  <div className="bg-pastel-50 p-6 rounded-2xl border border-pastel-200 max-w-md mx-auto text-left space-y-2.5 text-xs text-pastel-800">
                    <div className="flex justify-between border-b border-pastel-200 pb-2">
                      <span className="text-pastel-500">Registration ID:</span>
                      <span className="font-bold font-mono text-pastel-950">{registeredId || 'REG-SUCCESS'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pastel-500">Event:</span>
                      <span className="font-bold">1-Day Emcee & Anchor Masterclass</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pastel-500">Date:</span>
                      <span className="font-bold">7th November 2026 (10 AM - 5:30 PM)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pastel-500">Venue:</span>
                      <span className="font-bold">E Hotel, Express Avenue, Chennai</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pastel-500">Registered Attendee:</span>
                      <span className="font-bold">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-pastel-500">Amount Paid:</span>
                      <span className="font-bold font-mono text-emerald-700">{workshopDetails.investment.price}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap justify-center gap-4">
                    <Link
                      to="/workshop-admin"
                      className="inline-flex items-center gap-2 bg-[#13281D] hover:bg-[#1C3B2B] text-white px-6 py-3 rounded-full font-bold text-xs shadow-md transition-all"
                    >
                      <Lock className="w-3.5 h-3.5 text-gold-DEFAULT" />
                      <span>View in Admin Dashboard</span>
                    </Link>

                    <Link
                      to="/"
                      className="inline-flex items-center gap-2 bg-pastel-200 hover:bg-pastel-300 text-pastel-900 px-6 py-3 rounded-full font-bold text-xs transition-all"
                    >
                      Return to Home
                    </Link>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-200 px-4 py-1.5 rounded-full border border-pastel-300">
              Got Questions?
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-950">
              Frequently Asked Questions
            </h2>
            <p className="text-pastel-700 text-sm">
              Everything you need to know about the 1-Day Emcee & Anchor Masterclass.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-pastel-200 rounded-2xl overflow-hidden transition-all bg-pastel-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-pastel-950 hover:text-gold-dark transition-colors cursor-pointer"
                >
                  <span className="text-base sm:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-pastel-500 transition-transform duration-200 shrink-0 ${
                      openFaq === idx ? 'rotate-180 text-gold-dark' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-sm text-pastel-750 leading-relaxed border-t border-pastel-200/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Floating Bottom Bar for Mobile Conversion */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden">
        <div className="bg-[#13281D]/95 backdrop-blur-md border border-gold-DEFAULT/40 p-3 rounded-2xl shadow-2xl flex items-center justify-between">
          <div>
            <div className="text-[10px] text-gold-DEFAULT font-bold uppercase">7th Nov • E Hotel Chennai</div>
            <div className="text-sm font-bold text-white">{workshopDetails.investment.price} <span className="text-[10px] line-through text-pastel-400 font-normal">{workshopDetails.investment.original}</span></div>
          </div>
          <a
            href="#booking-section"
            className="bg-gold-DEFAULT hover:bg-amber-400 text-pastel-950 px-5 py-2.5 rounded-xl font-bold text-xs shadow-md transition-all"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};
