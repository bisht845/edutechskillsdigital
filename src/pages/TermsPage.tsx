import React from 'react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            Legal &amp; Compliance
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Last Updated: October 2026 · EduTechSkillsDigital Commercial Agency
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed bg-[#0F172A] p-6 sm:p-8 rounded-2xl border border-slate-800">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Commercial Scope &amp; Agency Nature</h2>
            <p>
              EduTechSkillsDigital provides digital marketing, web engineering, search optimization, and performance advertising services to business entities. EduTechSkillsDigital is strictly a commercial service consultancy and does not provide educational degrees, academic certifications, student coaching, or consumer tutoring courses.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. Proposal Estimates &amp; Master Service Agreements</h2>
            <p>
              Information, audit scores, and preliminary pricing calculators provided on this website are indicative. Binding contractual commitments, deliverables, timelines, and payment milestone terms are governed exclusively by formal bilateral Master Service Agreements (MSAs) and Statements of Work (SOWs) executed between EduTechSkillsDigital and the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Advertising Spend &amp; Third-Party Ad Networks</h2>
            <p>
              Clients pay advertising media budgets (e.g. Google Ads, Meta Ads, LinkedIn Ads) directly to third-party ad networks via their own corporate billing profiles. EduTechSkillsDigital charges management retainers and strategy fees separately. EduTechSkillsDigital does not guarantee specific algorithmic positioning, as third-party search engine algorithms operate autonomously.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Intellectual Property &amp; Code Ownership</h2>
            <p>
              Upon receipt of full contracted milestone payments, clients hold full ownership rights to bespoke website design, code repositories, creative collateral, and advertising assets created for their specific account under signed Statements of Work.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Governing Law</h2>
            <p>
              These terms shall be governed in accordance with international commercial business laws. For formal inquiries, reach our legal counsel at <a href="mailto:legal@edutechskillsdigital.com" className="text-blue-400 underline">legal@edutechskillsdigital.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
