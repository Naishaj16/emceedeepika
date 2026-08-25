import React from 'react';
import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './root';
import { Download, FileText, Sparkles, Check, ArrowRight, Trophy, Star, Eye, Award, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

const PortfolioPage: React.FC = () => {
  const handleDownloadMain = () => {
    const link = document.createElement('a');
    link.href = '/Deepika_Jain_Official_Emcee_Portfolio_2026.pdf';
    link.download = 'Deepika_Jain_Official_Emcee_Portfolio_2026.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadWedding = () => {
    const link = document.createElement('a');
    link.href = '/Deepika_Jain_Wedding_Portfolio.pdf';
    link.download = 'Deepika_Jain_Wedding_Portfolio.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const portfolioSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: 'Deepika Jain Official Emcee Portfolio & Press Kit 2026',
    author: {
      '@type': 'Person',
      name: 'Deepika Jain',
      award: [
        'Top International Corporate Emcee 2024 (Global Event Excellence Awards)',
        'Best Destination Wedding Host 2023 (Luxury Wedding Industry Conclave)',
        'Excellence in Stage Anchoring & Protocol (National Live Media & Stage Guild)',
      ],
    },
    description: 'Download official portfolio, media kit, wedding presentation decks, awards credentials, and service overview for International Emcee Deepika Jain.',
  };

  const [activeProof, setActiveProof] = React.useState<{ title: string; issuer: string; image: string; alt: string } | null>(null);

  const awards = [
    {
      title: 'Top International Corporate Emcee 2024',
      issuer: 'Global Event Excellence Awards',
      desc: 'Recognized for commanding high-stakes summits across Dubai, Singapore, and India with multilingual precision.',
      proofLabel: 'View Official Certificate',
      proofType: 'certificate' as const,
      proofUrl: '/images/deepika/pdf_page_38.png',
      proofAlt: 'Global Event Excellence Awards 2024 certificate — Top International Corporate Emcee, Deepika Jain',
    },
    {
      title: 'Best Destination Wedding Host 2023',
      issuer: 'Luxury Wedding Industry Conclave',
      desc: 'Awarded for seamless cross-cultural hosting for multi-day Rajasthan and UAE royal wedding celebrations.',
      proofLabel: 'View Conclave Listing',
      proofType: 'certificate' as const,
      proofUrl: '/images/deepika/pdf_page_39.png',
      proofAlt: 'Luxury Wedding Industry Conclave 2023 certificate — Best Destination Wedding Host, Deepika Jain',
    },
    {
      title: 'Excellence in Stage Anchoring & Protocol',
      issuer: 'National Live Media & Stage Guild',
      desc: 'Honored for 12+ years of unscripted poise, VIP guest interviews, and faultless timing.',
      proofLabel: 'View Guild Recognition',
      proofType: 'certificate' as const,
      proofUrl: '/images/deepika/pdf_page_40.png',
      proofAlt: 'National Live Media & Stage Guild certificate — Excellence in Stage Anchoring & Protocol, Deepika Jain',
    },
  ];

  const highlights = [
    { label: '12+ Years Stage Mastery', desc: 'Commanding high-profile global audiences' },
    { label: '5-Language Fluency', desc: 'Seamless hosting in English, Hindi, Marwari, Tamil & Telugu' },
    { label: '2,500+ Shows Hosted', desc: 'Across 15+ countries (Singapore, Dubai, Bali, Phuket, Maldives & more)' },
    { label: 'End-to-End Execution', desc: 'Custom scripts, rehearsals, and VIP protocol management' },
  ];

  return (
    <div className="pt-28 pb-24 bg-pastel-50">
      <SEOHead
        title="Official Portfolio & Awards | Deepika Jain Emcee"
        description="Download Deepika Jain's official emcee portfolio, wedding presentation decks, award recognitions, media kit, and hosting credentials."
        keywords={[
          'Deepika Jain emcee portfolio download',
          'wedding emcee portfolio PDF',
          'corporate emcee awards',
          'event host media kit PDF',
        ]}
        canonicalUrl="https://emceedeepika.com/portfolio"
        schemaJson={portfolioSchema}
      />

      {/* Header Banner */}
      <div className="bg-gradient-to-b from-pastel-100 to-pastel-50 py-16 border-b border-pastel-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pastel-200 border border-pastel-300 text-pastel-800 text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-gold-DEFAULT" />
            <span>Official Media Decks & Awards</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-pastel-900 leading-tight">
            Emcee Portfolio & Recognitions
          </h1>
          <p className="text-base sm:text-lg text-pastel-700 leading-relaxed max-w-3xl mx-auto font-normal">
            Download Deepika Jain's comprehensive event portfolio decks, wedding presentation kits, award recognitions, and client endorsements for your planning committee.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Main Download Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main Portfolio Card */}
          <div className="bg-white rounded-3xl border-2 border-pastel-300 p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-100 border border-pastel-200 text-xs font-bold text-gold-dark uppercase tracking-wider">
                <FileText className="w-4 h-4 text-gold-DEFAULT" />
                <span>Complete Brand Profile • 2026 Edition</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-pastel-900">
                Official Emcee Profile & Brand Deck
              </h2>
              <p className="text-sm text-pastel-700 leading-relaxed">
                Full biography, corporate galas history, celebrity red carpet showcases, tech summit credentials, and stage requirements.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-pastel-700">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-pastel-700 shrink-0" /> Full International Show List</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-pastel-700 shrink-0" /> High-Resolution Press Photos</div>
              </div>
            </div>

            <button
              onClick={handleDownloadMain}
              className="w-full flex items-center justify-center gap-3 bg-pastel-800 hover:bg-pastel-900 text-pastel-50 py-4 rounded-2xl font-bold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <Download className="w-5 h-5 text-gold-light" />
              <span>Download Official Profile PDF</span>
            </button>
          </div>

          {/* Wedding Special Portfolio Card */}
          <div className="bg-gradient-to-br from-pastel-100 via-white to-pastel-100 rounded-3xl border-2 border-pastel-300 p-8 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pastel-200 border border-pastel-300 text-xs font-bold text-gold-dark uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-gold-DEFAULT" />
                <span>Wedding Special Edition</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-pastel-900">
                Luxury Wedding & Sangeet Portfolio
              </h2>
              <p className="text-sm text-pastel-700 leading-relaxed">
                Dedicated deck featuring 2-day destination sangeets, royal entry protocols, bride & groom guest warmups, and Marwari/Tamil family bonding flow.
              </p>
              <div className="space-y-2 pt-2 text-xs font-semibold text-pastel-700">
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-pastel-700 shrink-0" /> Customized Sangeet Run-of-Show Samples</div>
                <div className="flex items-center gap-2"><Check className="w-4 h-4 text-pastel-700 shrink-0" /> Destination Wedding Testimonials</div>
              </div>
            </div>

            <button
              onClick={handleDownloadWedding}
              className="w-full flex items-center justify-center gap-3 bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 py-4 rounded-2xl font-bold text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02]"
            >
              <Download className="w-5 h-5 text-pastel-900" />
              <span>Download Wedding Portfolio PDF</span>
            </button>
          </div>
        </div>

        {/* Awards & Recognitions Section */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-4 py-1 rounded-full border border-pastel-200">
              Accolades & Industry Honors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-pastel-900">
              Awards & Stage Recognitions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white rounded-3xl border border-pastel-200 p-8 shadow-xs space-y-4 text-left flex flex-col justify-between hover:shadow-md transition-shadow">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-pastel-100 border border-pastel-200 flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-gold-DEFAULT" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Verified
                    </span>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-pastel-500 block">
                    {award.issuer}
                  </span>
                  <h3 className="font-serif font-bold text-xl text-pastel-900 leading-snug">
                    {award.title}
                  </h3>
                  <p className="text-xs text-pastel-700 leading-relaxed">
                    {award.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-pastel-100 flex items-center gap-2">
                  <a
                    href={award.proofUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveProof({
                        title: award.title,
                        issuer: award.issuer,
                        image: award.proofUrl,
                        alt: award.proofAlt,
                      });
                    }}
                    className="inline-flex items-center gap-2 text-xs font-bold text-gold-dark hover:text-pastel-900 bg-pastel-50 hover:bg-pastel-100 border border-pastel-200 px-3.5 py-2 rounded-xl transition-all shadow-2xs group"
                  >
                    <Award className="w-4 h-4 text-gold-DEFAULT group-hover:scale-110 transition-transform" />
                    <span>{award.proofLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-pastel-400 group-hover:text-pastel-700 ml-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Award Proof Certificate Modal */}
        {activeProof && (
          <div
            className="fixed inset-0 z-50 bg-pastel-950/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
            onClick={() => setActiveProof(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] flex flex-col overflow-hidden relative border border-pastel-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-pastel-200 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark bg-pastel-100 px-3 py-1 rounded-full border border-pastel-200">
                    Official Award Record • {activeProof.issuer}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-pastel-900 mt-2">
                    {activeProof.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveProof(null)}
                  className="p-2 rounded-full bg-pastel-100 hover:bg-pastel-200 text-pastel-700 transition-colors"
                  aria-label="Close proof preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto rounded-2xl border border-pastel-200 bg-pastel-50 p-2 flex items-center justify-center">
                <img
                  src={activeProof.image}
                  alt={activeProof.alt}
                  className="max-h-[60vh] w-auto object-contain rounded-xl shadow-md"
                />
              </div>

              <div className="flex items-center justify-between pt-2 text-xs text-pastel-600 border-t border-pastel-100">
                <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  Verified Official Award Credential
                </span>
                <a
                  href={activeProof.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-pastel-900 hover:underline"
                >
                  <span>Open Full Resolution</span>
                  <ExternalLink className="w-3.5 h-3.5 text-pastel-700" />
                </a>
              </div>
            </div>
          </div>
        )}

        {/* PDF Page Gallery Showcases */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-dark bg-pastel-100 px-4 py-1 rounded-full border border-pastel-200">
              Visual Credentials
            </span>
            <h2 className="font-serif text-3xl font-bold text-pastel-900">
              Portfolio Preview Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden border border-pastel-200 shadow-sm bg-white aspect-[3/4]">
              <img src="/images/deepika/pdf_page_1.png" alt="Deepika Jain Portfolio Page 1" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-pastel-200 shadow-sm bg-white aspect-[3/4]">
              <img src="/images/deepika/pdf_page_2.png" alt="Deepika Jain Portfolio Page 2" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden border border-pastel-200 shadow-sm bg-white aspect-[3/4]">
              <img src="/images/deepika/pdf_page_3.png" alt="Deepika Jain Portfolio Page 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-pastel-800 text-pastel-50 p-8 sm:p-12 rounded-3xl text-center space-y-6 shadow-xl">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">
            Ready to Discuss Your Event Setup?
          </h3>
          <p className="text-sm text-pastel-200 max-w-xl mx-auto font-normal">
            Reach out directly to Deepika's management team for custom script proposals, technical riders, and event coordination.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gold-DEFAULT hover:bg-gold-light text-pastel-900 px-8 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:scale-105"
            >
              <span>Get in Touch with Deepika</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const portfolioRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/portfolio',
  component: PortfolioPage,
});
