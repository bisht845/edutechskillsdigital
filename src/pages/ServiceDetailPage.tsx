import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import {
  CheckCircle2,
  AlertCircle,
  Clock,
  DollarSign,
  TrendingUp,
  Layers,
  ChevronDown,
  ArrowRight,
  ShieldAlert,
  Users,
  Target,
  Sparkles,
  HelpCircle,
  BarChart3
} from 'lucide-react';
import { LeadForm } from '../components/ui/LeadForm';

interface ServiceDetailPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenConsultation }) => {
  const { slug } = useParams<{ slug: string }>();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData.filter(s =>
    service.relatedServiceSlugs.includes(s.slug)
  );

  return (
    <div className="py-10 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span aria-hidden="true">/</span>
          <Link to="/services" className="hover:text-white">Services</Link>
          <span aria-hidden="true">/</span>
          <span className="text-white font-medium">{service.title}</span>
        </div>

        {/* 1. HERO & OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-12 border-b border-slate-800">
          <div className="lg:col-span-8 space-y-4">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
              Specialized Service Blueprint
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.overview}
            </p>

            <div className="p-4 bg-blue-950/40 border border-blue-800/60 rounded-xl mt-4">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
                Primary Business Benefit:
              </div>
              <p className="text-sm text-blue-200 font-medium">
                {service.businessBenefit}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => onOpenConsultation(service.title)}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/20 transition-all flex items-center gap-1.5"
              >
                <span>Request {service.title} Proposal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#scope-of-work"
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors"
              >
                View Detailed Scope
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider pb-2 border-b border-slate-800">
              Commercial Parameters
            </h3>

            <div className="space-y-3 text-xs">
              <div>
                <div className="text-slate-400 font-medium">Pricing Model</div>
                <div className="font-semibold text-white mt-0.5">{service.pricingModel}</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium">Starting Investment</div>
                <div className="font-semibold text-blue-400 font-mono text-sm mt-0.5">{service.startingPrice}</div>
              </div>
              <div>
                <div className="text-slate-400 font-medium">Typical Timeline</div>
                <div className="font-semibold text-white mt-0.5">{service.timeline}</div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800">
              <div className="text-[11px] text-slate-400">
                100% Client Ownership of all data, accounts, and creative assets upon delivery.
              </div>
            </div>
          </div>
        </div>

        {/* 2 & 3: PROBLEMS SOLVED & TARGET AUDIENCE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-b border-slate-800">
          {/* Problems Solved */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-rose-400" />
              <span>Core Business Problems This Solves</span>
            </h2>
            <ul className="space-y-2.5">
              {service.problemsSolved.map((prob, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                  <span>{prob}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Target Audience */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              <span>Target Audience &amp; Commercial Suitability</span>
            </h2>
            <ul className="space-y-2.5">
              {service.targetAudience.map((aud, idx) => (
                <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                  <span>{aud}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 & 5: SCOPE OF WORK & DETAILED DELIVERABLES */}
        <div id="scope-of-work" className="py-12 border-b border-slate-800 space-y-8">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Complete Technical Coverage
            </div>
            <h2 className="text-2xl font-bold text-white">
              Scope of Work &amp; Guaranteed Deliverables
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Full Scope of Execution
              </h3>
              <div className="space-y-2">
                {service.scopeOfWork.map((item, idx) => (
                  <div key={idx} className="p-3 bg-slate-900/80 border border-slate-800 rounded-lg text-xs sm:text-sm text-slate-300 flex items-start gap-3">
                    <span className="font-mono text-xs font-semibold text-blue-400 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F172A] border border-slate-800 text-white p-6 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Tangible Deliverables Pack</span>
              </h3>
              <p className="text-xs text-slate-400">
                Documents, code, assets, and dashboards you receive directly in your corporate repository:
              </p>
              <ul className="space-y-3 pt-2">
                {service.deliverables.map((del, idx) => (
                  <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 6. STRATEGY & IMPLEMENTATION PROCESS */}
        <div className="py-12 border-b border-slate-800 space-y-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Proven Methodology
            </div>
            <h2 className="text-2xl font-bold text-white">
              Strategy &amp; Implementation Roadmap
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {service.processSteps.map(step => (
              <div key={step.step} className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="text-lg font-extrabold text-blue-400 font-mono mb-2">
                    0{step.step}
                  </div>
                  <h4 className="text-xs font-bold text-white mb-1">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7, 8, 9: KPIS, RESPONSIBILITIES & DEPENDENCIES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-12 border-b border-slate-800">
          {/* KPIs */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <BarChart3 className="w-4 h-4 text-blue-400" /> Reporting KPIs
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {service.reportingKPIs.map((kpi, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>{kpi}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Client Responsibilities */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-400" /> Client Responsibilities
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {service.clientResponsibilities.map((resp, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-500 mt-1.5 shrink-0" />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Dependencies & Exclusions */}
          <div className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 space-y-3">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-amber-400" /> Exclusions &amp; Boundaries
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              {service.dependenciesAndExclusions.map((dep, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <span>{dep}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 12. SERVICE FAQS */}
        <div className="py-12 border-b border-slate-800 max-w-4xl space-y-6">
          <div>
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
              Clear Answers
            </div>
            <h2 className="text-2xl font-bold text-white">
              Frequently Asked Questions About {service.title}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className="bg-slate-900/80 border border-slate-800 rounded-xl overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-white hover:text-blue-400 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 13. RELATED SERVICES */}
        {relatedServices.length > 0 && (
          <div className="py-12 border-b border-slate-800 space-y-6">
            <h3 className="text-base font-bold text-white">
              Complementary Growth Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(rel => (
                <div key={rel.id} className="bg-[#0F172A] border border-slate-800 rounded-xl p-5 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{rel.title}</h4>
                    <p className="text-xs text-slate-400 mb-3">{rel.shortDescription}</p>
                  </div>
                  <Link
                    to={`/services/${rel.slug}`}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 14 & 15. DIRECT CONSULTATION FORM MODULE */}
        <div className="pt-8">
          <div className="bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 rounded-2xl p-8 sm:p-12 text-white border border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Ready to Deploy?
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Request a Dedicated Strategy Proposal for {service.title}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Let us evaluate your current setup and provide a realistic forecast of turnaround times, investment tiers, and qualified inquiry targets.
                </p>
                <div className="pt-2 text-xs text-slate-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Turnaround: 24 business hours response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Direct discussion with a Senior Strategist</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#0F172A] rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700/80">
                <h3 className="text-sm font-bold text-white mb-3 pb-2 border-b border-slate-800">
                  {service.title} Inquiry Form
                </h3>
                <LeadForm defaultService={service.title} sourceContext={`Service Page: ${service.title}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
