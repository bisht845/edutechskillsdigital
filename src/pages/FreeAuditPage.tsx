import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiService, auditFormSchema } from '../services/api';
import {
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Search,
  BarChart3,
  Sparkles,
  ArrowRight,
  TrendingUp,
  FileText
} from 'lucide-react';
import { z } from 'zod';
import { useTheme } from '../context/ThemeContext';

type AuditData = z.infer<typeof auditFormSchema>;

export const FreeAuditPage: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [auditResult, setAuditResult] = useState<{
    auditId: string;
    preliminaryScore: number;
    websiteUrl: string;
    companyName: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuditData>({
    defaultValues: {
      fullName: '',
      businessEmail: '',
      websiteUrl: '',
      companyName: '',
      targetIndustry: 'B2B & Professional Services',
      primaryGoal: 'Generate More Qualified Inbound Leads',
      monthlySpend: '$3,000 - $5,000 / month',
      currentChallenges: ['High Cost Per Lead', 'Outdated Website CRO']
    }
  });

  const onSubmit = async (data: AuditData) => {
    setIsSubmitting(true);
    try {
      const response = await apiService.submitAudit(data);
      setAuditResult({
        auditId: response.auditId,
        preliminaryScore: response.preliminaryScore,
        websiteUrl: data.websiteUrl,
        companyName: data.companyName
      });
    } catch {
      alert('Could not submit audit. Please verify your inputs.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass = isDark
    ? "w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 text-white placeholder-slate-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
    : "w-full px-3 py-2 text-sm bg-white border border-slate-300 text-slate-900 placeholder-slate-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors";

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
            Confidential Growth Assessment
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Get a Free 45-Point Digital Marketing &amp; Website Audit
          </h1>
          <p className={`text-sm sm:text-base mt-3 leading-relaxed transition-colors ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Our Senior Growth Team will evaluate your search engine visibility, paid ad efficiency, landing page conversion friction, and Core Web Vitals at zero cost or obligation.
          </p>
        </div>

        {/* Audit Form or Results Screen */}
        {auditResult ? (
          <div className="bg-[#0F172A] border border-slate-700/80 text-white rounded-2xl p-8 sm:p-12 shadow-2xl space-y-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono text-blue-400">AUDIT TICKET: {auditResult.auditId}</span>
                <h2 className="text-2xl font-bold mt-1 text-white">{auditResult.companyName} Diagnostic</h2>
                <div className="text-xs text-slate-400 font-mono mt-0.5">{auditResult.websiteUrl}</div>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center shrink-0">
                <div className="text-xs text-slate-400 uppercase tracking-wider">Preliminary Score</div>
                <div className="text-3xl font-extrabold text-blue-400 font-mono mt-1">
                  {auditResult.preliminaryScore} / 100
                </div>
                <div className="text-[10px] text-amber-400 mt-0.5">High Growth Opportunity</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-200">Phase 1: Search Console Health</div>
                <p className="text-xs text-slate-400">
                  Indexing verification, crawl budget waste, and commercial keyword gap analysis underway.
                </p>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Queued for Review
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-200">Phase 2: CRO &amp; Mobile UX</div>
                <p className="text-xs text-slate-400">
                  Form friction, mobile tap targets, and value proposition clarity analysis in progress.
                </p>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Queued for Review
                </div>
              </div>

              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl space-y-2">
                <div className="text-xs font-bold text-slate-200">Phase 3: Competitor Spend Gap</div>
                <p className="text-xs text-slate-400">
                  Benchmarking your sector rivals paid search bidding and social ad messaging velocity.
                </p>
                <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Queued for Review
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-400" /> What Happens Next?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                A Senior Growth Director is preparing your complete 45-point PDF audit deck and personalized Loom video walkthrough. We will email the completed assessment within 24 business hours to the address provided.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
              <span>Have an urgent question? Email: audit@edutechskillsdigital.com</span>
              <button
                type="button"
                onClick={() => setAuditResult(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 rounded-lg"
              >
                Audit Another Website
              </button>
            </div>
          </div>
        ) : (
          <div className={`border rounded-2xl p-6 sm:p-10 shadow-xl transition-colors ${
            isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-white border-slate-200 text-slate-900'
          }`}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Your Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jonathan Blake"
                    {...register('fullName', { required: 'Name is required' })}
                    className={`w-full px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-colors ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName.message}</p>}
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Business Email <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="jonathan@company.com"
                    {...register('businessEmail', { required: 'Business email is required' })}
                    className={`w-full px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-colors ${
                      isDark ? 'bg-slate-900 border-slate-700 text-white placeholder-slate-500' : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                  {errors.businessEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.businessEmail.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Website URL to Audit <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourcompany.com"
                    {...register('websiteUrl', { required: 'Website URL is required' })}
                    className={inputClass}
                  />
                  {errors.websiteUrl && <p className="text-[11px] text-rose-500 mt-1">{errors.websiteUrl.message}</p>}
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Company Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Blake Enterprises"
                    {...register('companyName', { required: 'Company name is required' })}
                    className={inputClass}
                  />
                  {errors.companyName && <p className="text-[11px] text-rose-500 mt-1">{errors.companyName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Industry Sector <span className="text-rose-500">*</span>
                  </label>
                  <select
                    {...register('targetIndustry')}
                    className={inputClass}
                  >
                    <option value="Real Estate & Property">Real Estate &amp; Property</option>
                    <option value="Healthcare & Specialty Clinics">Healthcare &amp; Specialty Clinics</option>
                    <option value="E-commerce & D2C Brands">E-commerce &amp; D2C Brands</option>
                    <option value="Manufacturing & B2B Industrial">Manufacturing &amp; B2B Industrial</option>
                    <option value="Hospitality & Travel">Hospitality &amp; Travel</option>
                    <option value="Professional & Financial Services">Professional &amp; Financial Services</option>
                    <option value="Beauty & Lifestyle">Beauty &amp; Lifestyle</option>
                    <option value="Technology & SaaS">Technology &amp; SaaS</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                    Current Monthly Ad Spend <span className="text-rose-500">*</span>
                  </label>
                  <select
                    {...register('monthlySpend')}
                    className={inputClass}
                  >
                    <option value="Under $2,000 / month">Under $2,000 / month</option>
                    <option value="$2,000 - $5,000 / month">$2,000 - $5,000 / month</option>
                    <option value="$5,000 - $15,000 / month">$5,000 - $15,000 / month</option>
                    <option value="$15,000+ / month">$15,000+ / month</option>
                    <option value="Not Running Paid Ads Yet">Not Running Paid Ads Yet</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-medium mb-2 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  What Are Your Current Marketing Obstacles? (Check All That Apply) <span className="text-rose-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    'High Cost Per Qualified Lead',
                    'Low Organic Search Visibility (SEO)',
                    'Slow Website & Poor Mobile Experience',
                    'Weak Ad Creative Performance & Creative Fatigue',
                    'Lack of Lead Qualification & Junk Form Submissions',
                    'Missing CRM & WhatsApp Automated Follow-Ups'
                  ].map((obstacle, idx) => (
                    <label key={idx} className={`flex items-center gap-2 p-2.5 rounded-lg border cursor-pointer transition-colors ${
                      isDark ? 'bg-slate-900/80 border-slate-800 hover:border-slate-700' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                    }`}>
                      <input
                        type="checkbox"
                        value={obstacle}
                        {...register('currentChallenges', { required: 'Please select at least one' })}
                        className="rounded border-slate-700 text-blue-600 focus:ring-blue-500"
                      />
                      <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{obstacle}</span>
                    </label>
                  ))}
                </div>
                {errors.currentChallenges && (
                  <p className="text-[11px] text-rose-500 mt-1">{errors.currentChallenges.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-lg shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 whitespace-nowrap"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Analyzing Domain Health &amp; Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Generate My Free Marketing Audit</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Confidential NDA Standard
                </span>
                <span>Zero Obligation · 24h Turnaround</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
