import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import {
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  Target,
  Zap,
  Building2
} from 'lucide-react';
import { LeadForm } from '../components/ui/LeadForm';

interface IndustryDetailPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const IndustryDetailPage: React.FC<IndustryDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industriesData.find(i => i.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  return (
    <div className="py-10 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/industries" className="hover:text-white">Industries</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white font-medium">{industry.name}</span>
        </div>

        {/* Hero */}
        <div className="max-w-4xl space-y-4 pb-12 border-b border-slate-800">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
            Sector Playbook
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {industry.headline}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {industry.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-3">
            <button
              type="button"
              onClick={() => onOpenConsultation(`Industry Strategy for ${industry.name}`)}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center gap-1.5"
            >
              <span>Schedule {industry.name} Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <div className="bg-emerald-950/60 border border-emerald-800/60 px-3 py-1.5 rounded-lg text-xs font-semibold text-emerald-400">
              Benchmark Impact: {industry.kpiMetric}
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-slate-800">
          {/* Industry Challenges */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <span>Core Operational &amp; Marketing Bottlenecks</span>
            </h2>
            <ul className="space-y-3">
              {industry.challenges.map((c, idx) => (
                <li key={idx} className="p-3.5 bg-rose-950/20 border border-rose-900/40 rounded-lg text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Proposed Solution */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-400" />
              <span>Proposed Growth Architecture</span>
            </h2>
            <div className="p-5 bg-blue-950/30 border border-blue-800/50 rounded-xl space-y-3">
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {industry.proposedSolution}
              </p>
            </div>
            <div className="space-y-2 pt-2">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Tailored Deliverables:
              </div>
              {industry.deliverables.map((del, idx) => (
                <div key={idx} className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lead Generation Strategy */}
        <div className="py-12 border-b border-slate-800 space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Qualified Pipeline Mechanism
            </div>
            <h2 className="text-2xl font-bold text-white">
              Sector Lead Generation Strategy &amp; Conversion Funnel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.leadGenerationStrategy.map((strat, idx) => (
              <div key={idx} className="p-4 bg-slate-900/80 border border-slate-800 rounded-xl text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{strat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Capture Module */}
        <div className="pt-8">
          <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border border-slate-800 rounded-2xl p-8 sm:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Partner with Us
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                  Accelerate Inbound Growth for Your {industry.name} Brand
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Schedule an exploratory session with an industry-specialized strategist to review your competitive landscape and past campaign performance.
                </p>
              </div>

              <div className="lg:col-span-7 bg-[#0F172A] rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700/80">
                <h3 className="text-sm font-bold text-white mb-3 pb-2 border-b border-slate-800">
                  {industry.name} Growth Consultation
                </h3>
                <LeadForm sourceContext={`Industry Vertical: ${industry.name}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
