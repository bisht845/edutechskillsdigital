import React from 'react';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { LeadForm } from '../components/ui/LeadForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            Direct Commercial Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Speak Directly With an Executive Growth Strategist
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
            Whether you are planning a complete website overhaul, launching a high-ticket performance ad campaign, or seeking multi-channel acquisition retainers, we are ready to discuss your business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-base font-bold text-white pb-3 border-b border-slate-800">
                Direct Communication Channels
              </h3>

              <div className="space-y-5 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Email Proposals &amp; RFQs</div>
                    <a href="mailto:contact@edutechskillsdigital.com" className="text-blue-400 hover:underline">
                      contact@edutechskillsdigital.com
                    </a>
                    <div className="text-[11px] text-slate-400 mt-0.5">Response SLA: &lt; 24 business hours</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Direct Telephone Inquiries</div>
                    <div className="font-mono text-white">+1 (800) 412-GROW [Verified Placeholder]</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">Mon–Fri: 9:00 AM – 6:30 PM EST</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 border border-blue-800/60 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Global Operational Headquarters</div>
                    <div className="text-slate-300">EduTechSkillsDigital Agency Towers</div>
                    <div className="text-slate-400 text-xs">Innovation District, Global Hubs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0D1322] border border-slate-800 text-white rounded-2xl p-6 space-y-4">
              <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                Our Guarantee to Business Leaders
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>No junior sales reps — your discovery call is with a Senior Growth Director.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Transparent unit economics and acquisition cost benchmarks upfront.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strict NDA and data protection compliance.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7 bg-[#0F172A] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-1">
              Submit a Project Consultation Request
            </h2>
            <p className="text-xs text-slate-400 mb-6">
              Complete the form below to initiate your strategic review. We look forward to evaluating your market opportunities.
            </p>
            <LeadForm sourceContext="Contact Page Main Consultation Form" />
          </div>
        </div>
      </div>
    </div>
  );
};
