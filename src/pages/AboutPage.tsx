import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Target,
  Users,
  Code2,
  BarChart3,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onOpenConsultation: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="py-12 sm:py-16 space-y-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl space-y-4 mb-16">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            About EduTechSkillsDigital
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            We Are the Digital Growth Partner for Growing Businesses
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            EduTechSkillsDigital is a full-service commercial digital marketing and web development agency. We exist for one purpose: to help business owners, startups, SMEs, and mid-market enterprises turn their digital channels into predictable sources of qualified leads and bottom-line revenue.
          </p>

          <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl text-xs text-slate-300">
            <strong className="text-white">Commercial Clarification:</strong> EduTechSkillsDigital is strictly a commercial B2B digital marketing agency, not an educational training institute, coaching program, or student course provider. Our services are dedicated exclusively to corporate and business growth.
          </div>
        </div>

        {/* Agency Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-y border-slate-800">
          <div className="space-y-3 bg-[#0F172A] p-6 rounded-2xl border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center font-bold">
              01
            </div>
            <h3 className="text-lg font-bold text-white">Commercial Rigor Over Vanity</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We never report empty impressions or meaningless clicks. Every campaign is evaluated against qualified phone calls, verified quote requests, and cost per customer acquisition.
            </p>
          </div>

          <div className="space-y-3 bg-[#0F172A] p-6 rounded-2xl border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center font-bold">
              02
            </div>
            <h3 className="text-lg font-bold text-white">100% Client Asset Ownership</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              You own 100% of your Google Ads accounts, Meta Business Managers, GA4 analytics properties, domain names, and website code. We never hold your assets hostage.
            </p>
          </div>

          <div className="space-y-3 bg-[#0F172A] p-6 rounded-2xl border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center font-bold">
              03
            </div>
            <h3 className="text-lg font-bold text-white">Integrated Full-Stack Capability</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We eliminate finger-pointing between separate web developers, media buyers, and SEO consultants. Our unified team executes code, creative, and campaigns under one coordinated plan.
            </p>
          </div>
        </div>

        {/* Engineering & Technology Stack */}
        <div className="py-12 space-y-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Production-Grade Infrastructure
            </div>
            <h2 className="text-2xl font-bold text-white">
              Modern Technology &amp; Analytics Stack
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              We engineer scalable digital products and attribution systems using enterprise-proven software standards:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {[
              { name: 'React 19 & TypeScript', role: 'Performant Component Architecture' },
              { name: 'Vite & Tailwind CSS v4', role: 'Ultra-Fast Sub-Second Bundling' },
              { name: 'Node.js & Express', role: 'Scalable Full-Stack API Engine' },
              { name: 'PostgreSQL & Prisma ORM', role: 'Type-Safe Relational Data Store' },
              { name: 'Zod & React Hook Form', role: 'Server-Side & Client Validation' },
              { name: 'Recharts & Looker Studio', role: 'Executive Performance Telemetry' },
              { name: 'Google Tag Manager & CAPI', role: 'Server-Side Privacy-Safe Tracking' },
              { name: 'Resend & WhatsApp Cloud API', role: 'Sub-30s Automated Lead Routing' }
            ].map((tech, idx) => (
              <div key={idx} className="bg-[#0F172A] border border-slate-800 rounded-xl p-4">
                <div className="font-bold text-white">{tech.name}</div>
                <div className="text-[11px] text-slate-400 font-sans mt-1">{tech.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Leadership & Strategic Team */}
        <div className="py-12 border-t border-slate-800 space-y-8">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Experienced Practitioners
            </div>
            <h2 className="text-2xl font-bold text-white">
              Leadership &amp; Growth Strategists
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              [Editable Executive Profiles — Verified Biographies &amp; Credentials]
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                role: 'Managing Partner & Head of Strategy',
                name: 'Alok K. Sharma [Managing Director]',
                background: '12+ years directing omnichannel growth campaigns, lead funnels, and enterprise acquisition infrastructure for mid-market brands.'
              },
              {
                role: 'Technical Director & Lead Architect',
                name: 'Elena Rostova [Head of Engineering]',
                background: 'Specialist in high-conversion web development, Core Web Vitals optimization, and server-side tracking pipelines.'
              },
              {
                role: 'Performance Marketing Director',
                name: 'Marcus Thorne [Media Buying Lead]',
                background: 'Manages multi-million dollar annual media portfolios across Google Search, Performance Max, and Meta Ads.'
              }
            ].map((leader, idx) => (
              <div key={idx} className="bg-[#0F172A] border border-slate-800 rounded-xl p-6 space-y-3">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  {leader.role}
                </div>
                <h3 className="text-base font-bold text-white">{leader.name}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{leader.background}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-slate-800 text-white rounded-2xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Ready to Partner With a True Growth Engine?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Contact our strategy team today for an objective evaluation of your current search visibility, media spend efficiency, and conversion architecture.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs rounded-lg transition-colors inline-flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <span>Schedule Strategic Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
