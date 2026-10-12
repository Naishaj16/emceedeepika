import React, { useState, useEffect } from 'react';
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
  Building,
  Navigation,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { HeroWorkshopPoster } from '../components/HeroWorkshopPoster';

export const WorkshopPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const initRazorpay = () => {
      const rzp = (window as any)['__rzp__'];
      if (rzp && rzp.init) {
        try {
          rzp.init();
        } catch (e) {
          console.error('Razorpay init error:', e);
        }
      }
    };

    if (!(window as any)['__rzp__']) {
      const existingScript = document.getElementById('razorpay-embed-btn-js');
      if (existingScript) {
        existingScript.addEventListener('load', initRazorpay);
      } else {
        const script = document.createElement('script');
        script.defer = true;
        script.id = 'razorpay-embed-btn-js';
        script.src = 'https://cdn.razorpay.com/static/embed_btn/bundle.js';
        script.onload = initRazorpay;
        document.body.appendChild(script);
      }
    } else {
      initRazorpay();
    }
  }, []);

  const workshopDetails = {
    date: '21st November 2026',
    venueName: 'E Hotel Chennai (Express Avenue)',
    venueAddress: 'Express Avenue Mall, Ground Floor, Gate No. 1, Patullos Road, Royapettah, Chennai, Tamil Nadu 600002',
    mapLink: 'https://maps.google.com/?q=E+Hotel+Express+Avenue+Royapettah+Chennai',
    investment: {
      price: '₹3,999',
      original: '₹4,999',
      discount: '🔥 Early Bird: ₹3,999 (Regular ₹4,999)',
    },
    paymentUrl: 'https://pages.razorpay.com/pl_TmyTI6aeo1bdfo/view',
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
      a: 'Simply click "Pay Now" to complete your booking directly via Razorpay. Enter your name, phone number, and email address during checkout. Once payment is complete, you instantly receive an official confirmation receipt and workshop pass on your email and SMS.',
    },
  ];

  return (
    <div className="bg-pastel-50 text-pastel-950 min-h-screen">
      <SEOHead
        title="1-Day Emcee & Anchor Masterclass Workshop | 21st November | Deepika Jain"
        description="Join Deepika Jain's exclusive 1-Day Emcee/Anchor Workshop on 21st November at E Hotel Chennai (Express Avenue Mall). Learn public speaking, stage presence, scriptwriting & audience control. Limited seats!"
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
                    <span>Workshop Date</span>
                  </div>
                  <div className="font-serif text-base sm:text-lg font-bold text-white">
                    21st November 2026
                  </div>
                  <div className="text-[11px] text-pastel-300">Offline Masterclass</div>
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
                  <span>Reserve Your Seat (Early Bird {workshopDetails.investment.price})</span>
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
              Fast 1-minute checkout. Attendee details and instant ticket pass confirmation are handled securely via Razorpay.
            </p>
          </div>

          {/* Registration & payment card */}
          <div className="bg-white rounded-3xl shadow-xl border border-pastel-300 overflow-hidden">
            
            {/* Header Banner */}
            <div className="bg-pastel-900 text-white p-6 sm:p-8 border-b border-pastel-800">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-500/40 px-3 py-1 rounded-full">
                    {workshopDetails.investment.discount}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2">
                    1-Day In-Person Workshop Pass
                  </h3>
                  <p className="text-xs sm:text-sm text-pastel-300 mt-1">
                    21st November 2026 • E Hotel Chennai (Express Avenue Mall)
                  </p>
                </div>

                <div className="text-left sm:text-right bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5">
                  <div className="text-xs text-pastel-400 line-through">
                    Regular: {workshopDetails.investment.original}
                  </div>
                  <div className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-light">
                    {workshopDetails.investment.price}
                  </div>
                  <div className="text-[11px] text-pastel-300 font-medium mt-0.5">
                    All-Inclusive • Limited to 25 Seats
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-8">
              {/* Inclusions summary pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-pastel-50 border border-pastel-200 text-xs text-pastel-800 flex items-center gap-2.5">
                  <Mic className="w-4 h-4 text-gold-dark shrink-0" />
                  <span>Hands-on stage practice & mic coaching</span>
                </div>
                <div className="p-3.5 rounded-xl bg-pastel-50 border border-pastel-200 text-xs text-pastel-800 flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-gold-dark shrink-0" />
                  <span>Verified completion certificate & templates</span>
                </div>
                <div className="p-3.5 rounded-xl bg-pastel-50 border border-pastel-200 text-xs text-pastel-800 flex items-center gap-2.5">
                  <Users className="w-4 h-4 text-gold-dark shrink-0" />
                  <span>Networking lunch at E Hotel Chennai</span>
                </div>
              </div>

              {/* Razorpay Embed Container */}
              <div className="bg-gradient-to-b from-[#F9FBFA] to-pastel-50 rounded-2xl p-6 sm:p-8 border border-pastel-300 text-center space-y-6">
                <div className="max-w-md mx-auto space-y-2">
                  <div className="text-xs uppercase tracking-wider font-bold text-pastel-600">
                    Direct Razorpay Checkout
                  </div>
                  <p className="text-xs sm:text-sm text-pastel-700">
                    Click the button below to register and pay securely. Razorpay will collect your name, phone, and email and issue your receipt immediately.
                  </p>
                </div>

                {/* Embedded Razorpay Button */}
                <div className="flex flex-col items-center justify-center min-h-[56px] py-2">
                  <div
                    className="razorpay-embed-btn"
                    data-url="https://pages.razorpay.com/pl_TmyTI6aeo1bdfo/view"
                    data-text="Pay Now"
                    data-color="#528FF0"
                    data-size="large"
                  />

                  {/* Fallback direct button */}
                  <a
                    href="https://pages.razorpay.com/pl_TmyTI6aeo1bdfo/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-pastel-600 hover:text-pastel-950 underline transition-colors"
                  >
                    <span>Click here to open Razorpay payment page directly</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Trust Badges */}
                <div className="pt-6 border-t border-pastel-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
                  <div className="flex items-center gap-2 text-xs text-pastel-700">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>256-Bit SSL Encrypted</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-pastel-700">
                    <CreditCard className="w-4 h-4 text-pastel-600 shrink-0" />
                    <span>UPI, Cards, Netbanking</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-pastel-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Instant Pass on Email</span>
                  </div>
                </div>
              </div>

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
            <div className="text-[10px] text-gold-DEFAULT font-bold uppercase">21st Nov • E Hotel Chennai</div>
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
