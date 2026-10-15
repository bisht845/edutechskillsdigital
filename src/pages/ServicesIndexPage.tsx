import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ServicesIndexPageProps {
  onOpenConsultation: (service?: string) => void;
}

export const ServicesIndexPage: React.FC<ServicesIndexPageProps> = ({ onOpenConsultation }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All 15 Services' },
    { id: 'search', label: 'Search & Paid Media' },
    { id: 'web', label: 'Web & E-Commerce' },
    { id: 'creative', label: 'Creative & Video' },
    { id: 'automation', label: 'Automation & CRM' }
  ];

  const filteredServices = servicesData.filter(s => {
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeCategory === 'all') return true;
    if (activeCategory === 'search') return ['seo-services', 'google-ads-ppc', 'meta-ads-management', 'digital-marketing-services'].includes(s.id);
    if (activeCategory === 'web') return ['website-design-development', 'ecommerce-website-development', 'landing-page-cro'].includes(s.id);
    if (activeCategory === 'creative') return ['content-marketing', 'graphic-design-branding', 'video-editing-reels', 'social-media-marketing'].includes(s.id);
    if (activeCategory === 'automation') return ['email-marketing-automation', 'whatsapp-crm-automation', 'influencer-marketing', 'online-reputation-management'].includes(s.id);
    return true;
  });

  return (
    <div className="py-12 sm:py-16 space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
            Enterprise Agency Capabilities
          </div>
          <h1 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight transition-colors ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Digital Marketing &amp; Engineering Services Built for Commercial Growth
          </h1>
          <p className={`text-sm sm:text-base mt-3 leading-relaxed transition-colors ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Every service below is delivered with transparent reporting, technical precision, and a relentless focus on customer acquisition cost and business revenue.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className={`flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-8 border-b ${
          isDark ? 'border-slate-800' : 'border-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25'
                    : isDark
                      ? 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 shadow-xs'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search services..."
              className={`w-full pl-9 pr-3 py-1.5 text-xs rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-colors ${
                isDark
                  ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-xs'
              }`}
            />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 border ${
                isDark
                  ? 'bg-[#0F172A]/90 border-slate-800 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/10'
                  : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-slate-200/60'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className={`font-mono font-semibold px-2 py-0.5 rounded border ${
                    isDark ? 'text-blue-400 bg-blue-950/80 border-blue-800/40' : 'text-blue-600 bg-blue-50 border-blue-200'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className={`font-mono text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    {service.startingPrice}
                  </span>
                </div>

                <h2 className={`text-lg font-bold mb-2 transition-colors ${
                  isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                }`}>
                  <Link to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </h2>

                <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.shortDescription}
                </p>

                <div className={`rounded-xl p-3 mb-5 border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-100'
                }`}>
                  <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Direct Commercial Value:
                  </div>
                  <div className={`text-xs font-medium leading-relaxed ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                    {service.businessBenefit}
                  </div>
                </div>

                <div className="space-y-1.5 mb-6">
                  <div className={`text-[11px] font-semibold uppercase tracking-wider ${
                    isDark ? 'text-slate-500' : 'text-slate-400'
                  }`}>
                    Core Deliverables:
                  </div>
                  {service.deliverables.slice(0, 3).map((d, dIdx) => (
                    <div key={dIdx} className={`text-xs flex items-start gap-2 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className={`pt-4 border-t flex items-center justify-between gap-2 ${
                isDark ? 'border-slate-800/80' : 'border-slate-100'
              }`}>
                <Link
                  to={`/services/${service.slug}`}
                  className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                    isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'
                  }`}
                >
                  <span>Detailed Scope</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>

                <button
                  type="button"
                  onClick={() => onOpenConsultation(service.title)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
                    isDark
                      ? 'text-blue-400 hover:text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50'
                      : 'text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200'
                  }`}
                >
                  Request Proposal
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
