import React from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { ArrowRight, Building2, CheckCircle2, AlertCircle } from 'lucide-react';

interface IndustriesIndexPageProps {
  onOpenConsultation: (industry?: string) => void;
}

export const IndustriesIndexPage: React.FC<IndustriesIndexPageProps> = ({ onOpenConsultation }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Sector-Specific Solutions
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Industry Solutions Engineered for Commercial Realities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Generic marketing strategies fail because every industry operates with distinct purchasing cycles, compliance boundaries, and buyer motivations. Explore our targeted sector architectures.
          </p>
        </div>

        {/* 8 Industry Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((ind, idx) => (
            <div
              key={ind.id}
              className="bg-[#0F172A]/90 border border-slate-800 rounded-2xl p-7 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3 pb-2 border-b border-slate-800">
                  <span className="font-semibold text-blue-400 font-mono">0{idx + 1} // Vertical Focus</span>
                  <span className="font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                    Target: {ind.kpiMetric}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  <Link to={`/industries/${ind.slug}`}>
                    {ind.name}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed font-medium">
                  {ind.headline}
                </p>

                <div className="bg-rose-950/30 border border-rose-900/60 rounded-xl p-3.5 mb-5 text-xs text-rose-300">
                  <div className="font-semibold text-rose-400 uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-rose-400" /> Sector Bottleneck:
                  </div>
                  <div>{ind.challenge}</div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Core Solutions &amp; Deliverables:
                  </div>
                  {ind.deliverables.slice(0, 3).map((del, dIdx) => (
                    <div key={dIdx} className="text-xs text-slate-300 flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between gap-3">
                <Link
                  to={`/industries/${ind.slug}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>Detailed Industry Playbook</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Industry: ${ind.name}`)}
                  className="text-xs font-semibold text-blue-400 hover:text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Request Consultation
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
