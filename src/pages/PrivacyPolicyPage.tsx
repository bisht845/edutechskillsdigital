import React from 'react';
import { Link } from 'react-router-dom';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">
            Legal &amp; Compliance
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400 font-mono mt-1">
            Last Updated: October 2026 · EduTechSkillsDigital Commercial Agency
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-xs sm:text-sm text-slate-300 space-y-6 leading-relaxed bg-[#0F172A] p-6 sm:p-8 rounded-2xl border border-slate-800">
          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">1. Information We Collect</h2>
            <p>
              When you submit a consultation request, request a free marketing audit, or subscribe to our newsletter on EduTechSkillsDigital, we collect business contact details including your full name, business email address, phone number, company name, website URL, and project requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">2. How We Use Your Information</h2>
            <p>
              We process your corporate information exclusively for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-300">
              <li>Conducting requested technical SEO, PPC, and CRO website audits.</li>
              <li>Delivering customized service proposals and project cost estimations.</li>
              <li>Communicating via phone, email, or automated WhatsApp for discovery scheduling.</li>
              <li>Sending periodic executive intelligence analyses (with one-click unsubscribe).</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">3. Non-Disclosure &amp; Zero Data Reselling</h2>
            <p>
              We respect enterprise confidentiality. EduTechSkillsDigital never sells, rents, or licenses your personal or commercial business data to third-party data brokers or marketing affiliates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">4. Analytics, Cookies &amp; Server-Side Tracking</h2>
            <p>
              Our website uses privacy-compliant Google Analytics 4 (GA4) and Meta Conversions API (CAPI) through Google Tag Manager to assess aggregate traffic velocity and campaign attribution. You can manage or block cookies through your browser settings at any time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-white">5. Contact Regarding Privacy</h2>
            <p>
              If you have any questions regarding your data or wish to request data deletion, please contact our data compliance officer at: <a href="mailto:privacy@edutechskillsdigital.com" className="text-blue-400 underline">privacy@edutechskillsdigital.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
