import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  TrendingUp,
  Zap,
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
  Calculator,
  Layers,
  Sparkles,
  DollarSign,
  BarChart3,
  Search,
  Code2,
  Users
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { servicesData } from '../../data/servicesData';

// =========================================================================
// 1. ANIMATED MARQUEE TICKER (IndSoft24 / Modern Tech Agency Inspired)
// =========================================================================
export const AgencyCapabilitiesMarquee: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const badges = [
    { label: 'Google Ads Partner', tag: 'PPC & Search', icon: '🎯' },
    { label: 'Meta Business Partner', tag: 'CAPI & Lead Ads', icon: '🚀' },
    { label: 'Enterprise Web & React', tag: 'High-Converting Web', icon: '⚡' },
    { label: 'Shopify Plus & WooCommerce', tag: 'E-Commerce Growth', icon: '🛍️' },
    { label: 'Technical SEO & GA4', tag: 'Attribution Tracking', icon: '📈' },
    { label: 'WhatsApp Cloud API', tag: 'Instant CRM Routing', icon: '💬' },
    { label: 'HubSpot & Zoho CRM', tag: 'Lead Nurturing', icon: '🔄' },
    { label: 'Conversion Rate CRO', tag: 'Landing Pages', icon: '📊' },
    { label: 'Performance Branding', tag: 'Creative Direction', icon: '🎨' },
  ];

  return (
    <div className={`w-full py-5 overflow-hidden border-y transition-colors duration-300 relative ${
      isDark
        ? 'bg-[#090E1B] border-slate-800/80'
        : 'bg-slate-50/90 border-slate-200'
    }`}>
      {/* Subtle edge fades */}
      <div className={`absolute top-0 left-0 w-24 h-full pointer-events-none z-10 bg-gradient-to-r ${
        isDark ? 'from-[#070B14] to-transparent' : 'from-slate-50 to-transparent'
      }`} />
      <div className={`absolute top-0 right-0 w-24 h-full pointer-events-none z-10 bg-gradient-to-l ${
        isDark ? 'from-[#070B14] to-transparent' : 'from-slate-50 to-transparent'
      }`} />

      <div className="flex animate-marquee items-center gap-6 whitespace-nowrap">
        {/* Double the array for seamless infinite looping */}
        {[...badges, ...badges].map((b, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${
              isDark
                ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-blue-500/50 hover:text-white'
                : 'bg-white border-slate-200 text-slate-700 shadow-xs hover:border-blue-400 hover:text-slate-900'
            }`}
          >
            <span className="text-sm">{b.icon}</span>
            <span className="font-semibold">{b.label}</span>
            <span className={`text-[10px] uppercase font-mono px-1.5 py-0.5 rounded ${
              isDark ? 'bg-blue-950/70 text-blue-400 border border-blue-900/50' : 'bg-blue-50 text-blue-700 border border-blue-200'
            }`}>
              {b.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

// =========================================================================
// 2. INTERACTIVE ROI & LEAD GROWTH CALCULATOR (High-converting client tool)
// =========================================================================
interface ROICalculatorProps {
  onOpenConsultation: (customTopic?: string) => void;
}

export const InteractiveROICalculator: React.FC<ROICalculatorProps> = ({ onOpenConsultation }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [monthlySpend, setMonthlySpend] = useState<number>(5000);
  const [selectedIndustry, setSelectedIndustry] = useState<string>('real-estate');

  const industryFactors: Record<string, { name: string; avgCpl: number; avgDeal: number; closingRate: number }> = {
    'real-estate': { name: 'Real Estate & Property', avgCpl: 42, avgDeal: 18000, closingRate: 0.05 },
    'healthcare': { name: 'Healthcare & Medical', avgCpl: 35, avgDeal: 3500, closingRate: 0.12 },
    'ecommerce': { name: 'E-Commerce Brands', avgCpl: 22, avgDeal: 180, closingRate: 0.28 },
    'b2b': { name: 'B2B & Enterprise Services', avgCpl: 65, avgDeal: 12000, closingRate: 0.08 },
    'hospitality': { name: 'Hospitality & Luxury', avgCpl: 28, avgDeal: 1400, closingRate: 0.15 },
  };

  const currentFactor = industryFactors[selectedIndustry] || industryFactors['real-estate'];
  const estimatedLeads = Math.round(monthlySpend / currentFactor.avgCpl);
  const estimatedClosedDeals = Math.round(estimatedLeads * currentFactor.closingRate);
  const pipelineImpact = estimatedClosedDeals * currentFactor.avgDeal;
  const estimatedRoas = monthlySpend > 0 ? (pipelineImpact / monthlySpend).toFixed(1) : '0';

  return (
    <div className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 relative overflow-hidden ${
      isDark
        ? 'bg-gradient-to-br from-[#0C1222] via-[#0F172A] to-[#090D18] border-slate-800 text-white shadow-2xl'
        : 'bg-white border-slate-200 text-slate-900 shadow-xl shadow-slate-200/50'
    }`}>
      {/* Ambient Neon Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-3">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive ROI & Pipeline Simulator</span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Estimate Your Digital Growth Velocity
            </h3>
            <p className={`text-sm mt-1 max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Adjust your monthly growth budget and target industry to model qualified inquiries and projected sales pipeline.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className={`text-xs px-2.5 py-1 rounded-full font-mono font-medium ${
              isDark ? 'bg-slate-800 text-emerald-400' : 'bg-emerald-50 text-emerald-700'
            }`}>
              Live Model · GA4 Calibrated
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Industry Selector */}
            <div>
              <label className={`block text-xs font-semibold uppercase tracking-wider mb-2.5 ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                1. Select Target Industry
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {Object.entries(industryFactors).map(([key, item]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedIndustry(key)}
                    className={`px-3 py-2 text-xs font-semibold rounded-xl border transition-all text-left ${
                      selectedIndustry === key
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/30'
                        : isDark
                          ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Monthly Budget Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`text-xs font-semibold uppercase tracking-wider ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  2. Planned Monthly Ad & Growth Spend
                </label>
                <span className="text-lg font-extrabold font-mono text-blue-500 tabular-nums">
                  ${monthlySpend.toLocaleString()} / mo
                </span>
              </div>
              <input
                type="range"
                min="1500"
                max="50000"
                step="500"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className={`flex justify-between text-[11px] font-mono mt-1 ${
                isDark ? 'text-slate-500' : 'text-slate-400'
              }`}>
                <span>$1,500 (Growth Starter)</span>
                <span>$15,000 (Scale-Up)</span>
                <span>$50,000+ (Enterprise)</span>
              </div>
            </div>

            {/* Channel Mix Breakdown */}
            <div className={`p-4 rounded-2xl border ${
              isDark ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}>
              <div className={`text-xs font-semibold mb-2.5 flex items-center justify-between ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                <span>Recommended Omnichannel Allocation</span>
                <span className="text-blue-500 font-mono text-[11px]">Dynamic Mix</span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                <div className={`p-2 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-blue-500">45%</div>
                  <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Google Ads</div>
                </div>
                <div className={`p-2 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-indigo-500">30%</div>
                  <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Meta Lead Gen</div>
                </div>
                <div className={`p-2 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-emerald-500">15%</div>
                  <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>SEO Growth</div>
                </div>
                <div className={`p-2 rounded-lg border ${isDark ? 'bg-slate-950/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <div className="font-bold text-amber-500">10%</div>
                  <div className={`text-[10px] mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>WhatsApp CRM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6">
            <div className={`rounded-2xl p-6 border relative overflow-hidden ${
              isDark
                ? 'bg-[#090E1B] border-blue-500/30 shadow-xl shadow-blue-500/5'
                : 'bg-blue-50/60 border-blue-200'
            }`}>
              <div className="flex items-center justify-between pb-4 border-b border-blue-500/20 mb-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-blue-500 font-semibold">
                    Projected Monthly Commercial Yield
                  </div>
                  <div className={`text-sm font-semibold mt-0.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Based on {currentFactor.name} benchmarks
                  </div>
                </div>
                <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-blue-100 shadow-xs'
                }`}>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Est. Qualified Inquiries
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-blue-500 mt-1 tabular-nums">
                    {estimatedLeads}+ <span className="text-xs font-sans font-normal text-slate-400">/mo</span>
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Target CPL: ${currentFactor.avgCpl}
                  </div>
                </div>

                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-blue-100 shadow-xs'
                }`}>
                  <div className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Est. Sales Pipeline Value
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-500 mt-1 tabular-nums">
                    ${pipelineImpact.toLocaleString()}
                  </div>
                  <div className={`text-[11px] mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    ~{estimatedClosedDeals} deals @ ~${currentFactor.avgDeal.toLocaleString()}
                  </div>
                </div>
              </div>

              <div className={`p-3.5 rounded-xl border mb-6 text-xs flex items-center justify-between ${
                isDark ? 'bg-slate-900/50 border-slate-800 text-slate-300' : 'bg-white border-slate-200 text-slate-700'
              }`}>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Projected Blended Return Multiple:</span>
                </div>
                <span className="font-mono font-extrabold text-blue-500 text-sm">
                  {estimatedRoas}x Return On Ad Spend
                </span>
              </div>

              <button
                type="button"
                onClick={() => onOpenConsultation(`ROI Strategy Blueprint for ${currentFactor.name} ($${monthlySpend}/mo)`)}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 hover:scale-102 active:scale-98"
              >
                <span>Claim This Custom Growth Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className={`text-[11px] text-center mt-2.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                * Estimates calibrated from historical cross-vertical client benchmark averages. Exact outcomes depend on sales execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 3. AGENCY COMPARISON MATRIX (EduTechSkillsDigital vs Traditional Agencies)
// =========================================================================
export const AgencyComparisonSection: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const comparisonRows = [
    {
      feature: 'Attribution & Transparency',
      us: '100% direct client ownership of Google & Meta ad accounts, GA4, CAPI & Looker dashboards',
      them: 'Hidden markups, agency-owned ad accounts, and murky monthly PDF vanity summaries'
    },
    {
      feature: 'Lead Quality & Qualification',
      us: 'Intentional friction: multi-step qualifying forms, verified phone/WhatsApp, and budget checks',
      them: 'Chasing low-intent cheap clicks and unqualified tire-kickers to boast artificial metrics'
    },
    {
      feature: 'Speed to Contact Lead',
      us: '< 30s automated WhatsApp notification + instant CRM assignment to your sales reps',
      them: 'Leads sit in spreadsheets or unmonitored inboxes for 48+ hours until they turn cold'
    },
    {
      feature: 'Engineering & Web Standard',
      us: 'Custom high-performance React/Vite/Next.js code with Core Web Vitals < 1.2s and CRO architecture',
      them: 'Bloated third-party theme builders with 60+ unmaintained plugins and 5s load times'
    },
    {
      feature: 'Accountability & Strategy',
      us: 'Commercial growth partner aligned with pipeline revenue, signed NDAs, and bi-weekly syncs',
      them: 'Junior account coordinators reading scripted responses with zero business acumen'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-blue-500 bg-blue-500/10 border border-blue-500/20 mb-2">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>The EduTechSkillsDigital Standard</span>
        </div>
        <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Why Discerning Businesses Switch To Us
        </h3>
        <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
          See how our engineering-first, bottom-line approach compares to traditional marketing agencies.
        </p>
      </div>

      <div className={`rounded-2xl border overflow-hidden transition-colors ${
        isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
      }`}>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className={`border-b ${isDark ? 'border-slate-800 bg-slate-950/80' : 'border-slate-200 bg-slate-50'}`}>
                <th className={`p-4 sm:p-5 font-semibold uppercase tracking-wider w-1/4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Operational Standard
                </th>
                <th className="p-4 sm:p-5 font-bold text-blue-500 bg-blue-500/10 w-2/5">
                  <div className="flex items-center gap-1.5 text-sm">
                    <Sparkles className="w-4 h-4" /> EduTechSkillsDigital
                  </div>
                </th>
                <th className={`p-4 sm:p-5 font-semibold text-rose-500/90 w-1/3 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  Traditional Agencies
                </th>
              </tr>
            </thead>
            <tbody className={`divide-y ${isDark ? 'divide-slate-800/80' : 'divide-slate-100'}`}>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className={`transition-colors ${isDark ? 'hover:bg-slate-850/50' : 'hover:bg-slate-50/70'}`}>
                  <td className={`p-4 sm:p-5 font-semibold align-top ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>
                    {row.feature}
                  </td>
                  <td className="p-4 sm:p-5 bg-blue-500/5 align-top">
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className={`leading-relaxed font-medium ${isDark ? 'text-slate-200' : 'text-slate-900'}`}>
                        {row.us}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 align-top">
                    <div className="flex items-start gap-2.5">
                      <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <span className={`leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                        {row.them}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// =========================================================================
// 4. INTERACTIVE CATEGORY TABS FOR HOMEPAGE SERVICES
// =========================================================================
interface ServiceCategoryTabsProps {
  onOpenConsultation: (serviceTitle?: string) => void;
}

export const ServiceCategoryTabs: React.FC<ServiceCategoryTabsProps> = ({ onOpenConsultation }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All 15 Services', icon: Layers },
    { id: 'performance', label: 'Paid Ads & PPC', icon: Zap },
    { id: 'seo', label: 'SEO & Organic Growth', icon: Search },
    { id: 'engineering', label: 'Web & E-Commerce', icon: Code2 },
    { id: 'branding', label: 'Branding & Automation', icon: Users },
  ];

  const filteredServices = servicesData.filter(s => {
    if (activeTab === 'all') return true;
    if (activeTab === 'performance') return s.slug.includes('ads') || s.slug.includes('meta') || s.slug.includes('digital-marketing');
    if (activeTab === 'seo') return s.slug.includes('seo') || s.slug.includes('content') || s.slug.includes('reputation');
    if (activeTab === 'engineering') return s.slug.includes('website') || s.slug.includes('ecommerce') || s.slug.includes('landing');
    if (activeTab === 'branding') return s.slug.includes('design') || s.slug.includes('video') || s.slug.includes('email') || s.slug.includes('whatsapp') || s.slug.includes('influencer');
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Tab Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl max-w-3xl mx-auto border transition-colors">
        {categories.map(cat => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-102'
                  : isDark
                    ? 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Grid of Filtered Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
        {filteredServices.map((service, idx) => (
          <div
            key={service.id}
            className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 border relative overflow-hidden ${
              isDark
                ? 'bg-[#0E1526]/90 border-slate-800 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-slate-200/60'
            }`}
          >
            {/* Top Accent line on hover */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-mono font-semibold px-2 py-0.5 rounded border ${
                  isDark
                    ? 'text-blue-400 bg-blue-950/80 border-blue-800/40'
                    : 'text-blue-600 bg-blue-50 border-blue-200'
                }`}>
                  0{idx + 1}
                </span>
                <span className={`text-[11px] font-mono ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  {service.pricingModel.split(' ')[0]} Model
                </span>
              </div>

              <h3 className={`text-lg font-bold mb-2 transition-colors ${
                isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
              }`}>
                {service.title}
              </h3>

              <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {service.shortDescription}
              </p>

              <div className={`rounded-xl p-3 mb-5 border ${
                isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-100'
              }`}>
                <div className={`text-[11px] font-semibold uppercase tracking-wider mb-1 ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  Business Outcome:
                </div>
                <div className={`text-xs font-medium ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                  {service.businessBenefit}
                </div>
              </div>

              <div className="space-y-1.5 mb-6">
                <div className={`text-[11px] font-semibold uppercase tracking-wider ${
                  isDark ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  Key Deliverables:
                </div>
                {service.deliverables.slice(0, 3).map((del, dIdx) => (
                  <div key={dIdx} className={`text-xs flex items-start gap-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{del}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`pt-4 border-t flex items-center justify-between gap-3 ${
              isDark ? 'border-slate-800/80' : 'border-slate-100'
            }`}>
              <Link
                to={`/services/${service.slug}`}
                className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                <span>Explore Service</span>
                <ArrowRight className="w-3 h-3" />
              </Link>

              <button
                type="button"
                onClick={() => onOpenConsultation(service.title)}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap hover:scale-103 ${
                  isDark
                    ? 'text-blue-400 hover:text-blue-300 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/50'
                    : 'text-blue-700 hover:text-blue-800 bg-blue-50 hover:bg-blue-100 border border-blue-200'
                }`}
              >
                Get a Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
