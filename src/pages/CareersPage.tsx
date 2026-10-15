import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Briefcase, Users, Sparkles, Send } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [applicantRole, setApplicantRole] = useState('Senior Performance Marketer');

  const openPositions = [
    {
      title: 'Senior Performance Marketing Strategist (Google & Meta)',
      department: 'Paid Media & Acquisition',
      location: 'Remote / Global Hub',
      type: 'Full-Time',
      description: 'Manage $100k+/mo commercial media budgets, execute server-side CAPI tracking, and continuously optimize cost-per-qualified-lead.'
    },
    {
      title: 'Full-Stack Web Engineer (React 19 & Node.js)',
      department: 'Engineering & Technology',
      location: 'Remote / Global Hub',
      type: 'Full-Time',
      description: 'Architect ultra-fast B2B web applications, Core Web Vitals optimization, custom CRM API webhooks, and headless Shopify storefronts.'
    },
    {
      title: 'Lead Conversion Rate Optimization (CRO) Specialist',
      department: 'Growth Analytics',
      location: 'Remote / Global Hub',
      type: 'Full-Time',
      description: 'Design and execute multi-variant landing page split tests, user journey friction audits, and direct-response wireframes.'
    },
    {
      title: 'B2B Technical Copywriter & SEO Content Lead',
      department: 'Organic Growth',
      location: 'Remote / Global Hub',
      type: 'Full-Time',
      description: 'Author high-authority technical whitepapers, industrial buyer guides, and bottom-of-funnel commercial content clusters.'
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Talent &amp; HR Services
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Build Modern Digital Growth Engines With EduTechSkillsDigital
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            We are always seeking senior growth strategists, performance marketers, creative technologists, and engineers who value operational rigor, data transparency, and measurable business impact over corporate bureaucracy.
          </p>
        </div>

        {/* Agency Culture Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-slate-800">
          <div className="p-6 bg-[#0F172A] rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white">Merit &amp; Commercial Impact</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We reward team members based on verifiable client pipeline growth and technical excellence, not hours spent sitting in meetings.
            </p>
          </div>
          <div className="p-6 bg-[#0F172A] rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white">Modern Tooling &amp; Autonomy</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero legacy bloat. We equip our team with modern developer frameworks, cloud APIs, and premium analytics suites.
            </p>
          </div>
          <div className="p-6 bg-[#0F172A] rounded-2xl border border-slate-800 space-y-2">
            <h3 className="text-sm font-bold text-white">Global Flexibility</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Distributed, asynchronous work culture with transparent compensation and clear quarterly advancement milestones.
            </p>
          </div>
        </div>

        {/* Open Positions */}
        <div className="space-y-6 pt-4">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-white">Current Career Openings</h2>
            <p className="text-xs text-slate-400 mt-1">Review our active growth and engineering roles below:</p>
          </div>

          <div className="space-y-4">
            {openPositions.map((pos, idx) => (
              <div
                key={idx}
                className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="font-semibold text-blue-400">{pos.department}</span>
                    <span aria-hidden="true">·</span>
                    <span>{pos.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{pos.type}</span>
                  </div>
                  <h3 className="text-base font-bold text-white">{pos.title}</h3>
                  <p className="text-xs text-slate-400 max-w-2xl">{pos.description}</p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setApplicantRole(pos.title);
                    const el = document.getElementById('application-form');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-blue-600 border border-slate-700 rounded-lg transition-colors shrink-0 whitespace-nowrap self-start md:self-auto"
                >
                  Apply For Role &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="pt-8 max-w-2xl mx-auto">
          <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-base font-bold text-white mb-1">
              Submit Your Confidential Career Application
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Role: <span className="font-semibold text-blue-400">{applicantRole}</span>
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-300">Application Received</h4>
                <p className="text-xs text-emerald-400">
                  Our HR talent acquisition group will review your profile and contact you within 3 business days if there is a mutual match.
                </p>
              </div>
            ) : (
              <form onSubmit={handleApply} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn Profile or Portfolio URL</label>
                  <input
                    type="url"
                    required
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Summary of Past Commercial Achievements</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Tell us about the campaigns, web platforms, or pipelines you have built and the quantifiable results achieved..."
                    className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-blue-600/20"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Candidate Profile</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
