import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenConsultation: (topic?: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({ onOpenConsultation }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Real Estate', 'Healthcare', 'Manufacturing', 'E-commerce'];

  const filtered = caseStudiesData.filter(cs => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Real Estate') return cs.clientIndustry.includes('Real Estate');
    if (selectedFilter === 'Healthcare') return cs.clientIndustry.includes('Healthcare');
    if (selectedFilter === 'Manufacturing') return cs.clientIndustry.includes('Manufacturing');
    if (selectedFilter === 'E-commerce') return cs.clientIndustry.includes('E-commerce');
    return true;
  });

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Verifiable Business Impact
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Client Case Studies &amp; Growth Performance Proof
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Review how our integrated digital marketing, search optimization, and automation systems delivered verified pipeline value and customer acquisitions across industries.
          </p>
          <div className="mt-3 text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-2 rounded-lg inline-block">
            Notice: Case entries below represent documented commercial frameworks marked &ldquo;Demo Content — Replace Before Launch&rdquo; pending final client NDA waivers.
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex items-center gap-2 pb-6 border-b border-slate-800 overflow-x-auto">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setSelectedFilter(f)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === f
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div className="space-y-10 pt-4">
          {filtered.map(cs => (
            <div
              key={cs.id}
              className="bg-[#0F172A]/90 border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl hover:border-slate-700 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800 mb-6">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                    {cs.clientIndustry}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {cs.clientName}
                  </h2>
                </div>
                <div className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 shrink-0">
                  Campaign Duration: {cs.timeline}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                {/* Challenge & Strategy */}
                <div className="lg:col-span-7 space-y-5">
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-1.5">
                      The Business Challenge
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                      {cs.businessChallenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                      Growth Strategy &amp; Implementation
                    </h3>
                    <ul className="space-y-2">
                      {cs.strategyImplemented.map((st, sIdx) => (
                        <li key={sIdx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Services Delivered:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cs.servicesDelivered.map((serv, sIdx) => (
                        <span key={sIdx} className="text-xs bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-medium">
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Verified Results & Quote */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-3">
                      Verified Business Results
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                      {cs.verifiedResults.map((r, rIdx) => (
                        <div key={rIdx} className="bg-slate-900 border border-slate-800 p-4 rounded-xl">
                          <div className="text-2xl font-black font-mono tabular-nums text-emerald-400">
                            {r.metric}
                          </div>
                          <div className="text-xs font-medium text-slate-200 mt-0.5">
                            {r.label}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 font-mono">{r.timeframe}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="bg-blue-950/40 border border-blue-800/60 p-4 rounded-xl text-xs text-blue-200 italic">
                    &ldquo;{cs.quote.text}&rdquo;
                    <footer className="not-italic font-semibold text-white mt-2 text-[11px]">
                      — {cs.quote.author}, {cs.quote.role}
                    </footer>
                  </blockquote>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Interested in replicating these results for your company?
                </div>
                <button
                  type="button"
                  onClick={() => onOpenConsultation(`Case Study Discuss: ${cs.clientIndustry}`)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md shadow-blue-600/20"
                >
                  <span>Discuss a Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
