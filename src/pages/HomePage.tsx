import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Search,
  Target,
  Share2,
  Layout,
  ShoppingBag,
  Sparkles,
  ChevronDown,
  Building,
  ShieldCheck,
  Zap,
  BarChart2,
  FileCheck2,
  Clock,
  Layers,
  ArrowUpRight,
  HelpCircle
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { blogData } from '../data/blogData';
import { HeroAnalyticsMockup } from '../components/ui/MarketingVisuals';
import { LeadForm } from '../components/ui/LeadForm';
import { useTheme } from '../context/ThemeContext';
import {
  AgencyCapabilitiesMarquee,
  InteractiveROICalculator,
  AgencyComparisonSection,
  ServiceCategoryTabs
} from '../components/ui/InteractiveAgencyFeatures';

interface HomePageProps {
  onOpenConsultation: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenConsultation }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const homeFaqs = [
    {
      q: 'What types of businesses do you work with?',
      a: 'We work exclusively with business owners, mid-market enterprises, B2B companies, healthcare practices, real estate developers, and high-growth e-commerce brands looking to systematically acquire customers. We do not provide student courses or educational training.'
    },
    {
      q: 'How quickly can we expect to see tangible results?',
      a: 'Paid media channels (Google Search Ads, Meta Ads) typically begin driving qualified leads within 7 to 10 days of launch. Organic Search (SEO) and content initiatives begin generating noticeable compounding traction between months 3 and 6.'
    },
    {
      q: 'How does your lead qualification process work?',
      a: 'We implement intentional friction: multi-step qualifying form questions, budget verification fields, and automated WhatsApp/CRM routing. This ensures your sales team speaks only with serious buyers who match your ideal client profile.'
    },
    {
      q: 'Do you require long-term lock-in contracts?',
      a: 'For performance advertising and web projects, we offer 3-month initial commitment sprints followed by rolling monthly retainers. We earn your business every month through transparent reporting and measurable pipeline impact.'
    },
    {
      q: 'How does client reporting work?',
      a: 'Every client receives a custom real-time Looker Studio dashboard connected directly to Google Analytics 4, Google Tag Manager, ad platforms, and your CRM. We hold bi-weekly executive strategy syncs to review pipeline performance.'
    }
  ];

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* ==========================================================
          SECTION 2: HERO SECTION (With Subtle Ambient Floating Glow & Animations)
      ========================================================== */}
      <section className="pt-10 sm:pt-20 pb-8 relative overflow-hidden">
        {/* Ambient floating glow */}
        <div className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full blur-[140px] pointer-events-none transition-opacity duration-500 ${
          isDark ? 'bg-blue-600/15 opacity-100' : 'bg-blue-400/10 opacity-70'
        }`} />
        <div className={`absolute top-10 right-10 w-[300px] h-[300px] rounded-full blur-[120px] pointer-events-none transition-opacity duration-500 ${
          isDark ? 'bg-indigo-600/10 opacity-100' : 'bg-blue-300/10 opacity-60'
        }`} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Proposition */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider animate-float shadow-xs ${
                isDark
                  ? 'bg-blue-950/60 border border-blue-500/30 text-blue-400'
                  : 'bg-blue-50 border border-blue-200 text-blue-700'
              }`}>
                <Sparkles className="w-3.5 h-3.5 text-blue-500 animate-spin-slow" />
                <span>Digital Growth Partner for Businesses</span>
              </div>

              <h1 className={`text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-balance transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Turn Your Digital Presence Into a{' '}
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent">
                  Consistent Source
                </span>{' '}
                of Business Growth.
              </h1>

              <p className={`text-base sm:text-lg leading-relaxed max-w-2xl font-normal transition-colors duration-300 ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                From high-converting websites and search engine optimization to performance marketing and automation, we help businesses attract the right audience, generate qualified leads, and turn more opportunities into customers.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/free-marketing-audit"
                  className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-xl shadow-blue-600/25 transition-all text-center flex items-center justify-center gap-2 whitespace-nowrap hover:scale-102 active:scale-98"
                >
                  <span>Get a Free Marketing Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/services"
                  className={`px-6 py-3.5 font-semibold text-sm rounded-xl transition-all text-center whitespace-nowrap border hover:scale-102 active:scale-98 ${
                    isDark
                      ? 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700/80'
                      : 'bg-white hover:bg-slate-50 text-slate-800 border-slate-300 shadow-xs'
                  }`}
                >
                  Explore Our Services
                </Link>
              </div>

              {/* Verified Trust Markers */}
              <div className={`pt-4 border-t flex flex-wrap items-center gap-x-6 gap-y-2 text-xs transition-colors ${
                isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-500'
              }`}>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Lead Qualification Focused
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Transparent GA4 / CAPI Tracking
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Dedicated Growth Strategist
                </span>
              </div>
            </div>

            {/* Right Column: Visual Mockup with Floating Animation */}
            <div className="lg:col-span-5 hover:-translate-y-1 transition-transform duration-500">
              <HeroAnalyticsMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          ANIMATED AGENCY TECH MARQUEE (IndSoft24 / Modern Tech Agency Inspired)
      ========================================================== */}
      <AgencyCapabilitiesMarquee />

      {/* ==========================================================
          SECTION 3: TRUST & BUSINESS VALUE (KPI Strip with Hover Elevation)
      ========================================================== */}
      <section className={`border-y py-12 transition-colors duration-300 ${
        isDark ? 'bg-[#0D1322] border-slate-800/80' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-slate-900/60 border-slate-800/60' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>15+</div>
              <div className={`text-xs mt-1 uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Core Capabilities</div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Full-Funnel Agency Execution</div>
            </div>
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-slate-900/60 border-slate-800/60' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-500 font-mono tabular-nums">&lt; 30s</div>
              <div className={`text-xs mt-1 uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Avg CRM Lead Response</div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Automated WhatsApp Integration</div>
            </div>
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-slate-900/60 border-slate-800/60' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>8 Verticals</div>
              <div className={`text-xs mt-1 uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Industry Specializations</div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>B2B, Health, Real Estate &amp; Retail</div>
            </div>
            <div className={`p-4 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
              isDark ? 'bg-slate-900/60 border-slate-800/60' : 'bg-white border-slate-200 shadow-xs'
            }`}>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-500 font-mono tabular-nums">100%</div>
              <div className={`text-xs mt-1 uppercase tracking-wider font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Transparent Reporting</div>
              <div className={`text-[11px] mt-0.5 ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Direct Client Account Ownership</div>
            </div>
          </div>

          <div className={`mt-8 pt-6 border-t flex flex-wrap items-center justify-between text-xs gap-4 ${
            isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
          }`}>
            <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
              Enterprise Standards &amp; Certifications [Verified Placeholder]:
            </span>
            <div className="flex flex-wrap items-center gap-6 font-mono text-[11px]">
              <span className="text-blue-500">GOOGLE ADS CERTIFIED PARTNER</span>
              <span>·</span>
              <span className="text-indigo-500">META BUSINESS PARTNER COMPLIANT</span>
              <span>·</span>
              <span className="text-emerald-500">GA4 ENHANCED ATTRIBUTION</span>
              <span>·</span>
              <span>GDPR / CCPA SECURE</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 4: CORE SERVICES (Interactive Tabbed Filter with Hover Lift)
      ========================================================== */}
      <section id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                Specialized Growth Solutions
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Full-Service Capabilities Built for Bottom-Line ROI
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 shrink-0 group"
            >
              <span>Browse Detailed Deliverables for All 15 Services</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ServiceCategoryTabs onOpenConsultation={onOpenConsultation} />
        </div>
      </section>

      {/* ==========================================================
          INTERACTIVE ROI & LEAD PIPELINE CALCULATOR (High-Converting Agency Tool)
      ========================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InteractiveROICalculator onOpenConsultation={onOpenConsultation} />
      </section>

      {/* ==========================================================
          SECTION 5: WHY CHOOSE US
      ========================================================== */}
      <section className={`py-20 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border transition-colors duration-300 ${
        isDark
          ? 'bg-gradient-to-b from-[#0F172A] to-[#0A0E1A] text-white border-slate-800/80 shadow-2xl'
          : 'bg-slate-900 text-white border-slate-800 shadow-xl'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
              Our Operating Philosophy
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Why Commercial Leaders Choose EduTechSkillsDigital
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We eliminate agency fluff. Every campaign, line of code, and ad dollar is calibrated around measurable pipeline velocity and commercial profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3 hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="text-base font-bold text-white">Business-First Strategy</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We align with your unit economics and customer lifetime value (LTV) before touching an ad account or building a single page.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3 hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="text-base font-bold text-white">Qualified Lead Focus</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We filter out low-intent form fillers through qualification friction, verified phone capture, and instant WhatsApp verification.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3 hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="text-base font-bold text-white">100% Transparent Data</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                You own 100% of your ad accounts, analytics properties, and code. No proprietary walled gardens or hidden markups.
              </p>
            </div>

            <div className="bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 space-y-3 hover:-translate-y-1 hover:border-blue-500/40 transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="text-base font-bold text-white">Conversion-Engine Web Dev</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We build clean, sub-1.5s websites engineered specifically to turn anonymous search visitors into phone calls and scheduled meetings.
              </p>
            </div>
          </div>

          {/* Agency Comparison Section (indsoft24 transparency standard) */}
          <div className="mt-16 pt-12 border-t border-slate-800">
            <AgencyComparisonSection />
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 6: INDUSTRY SOLUTIONS (With Animated Hover Depth)
      ========================================================== */}
      <section id="industries">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                Industry-Specific Playbooks
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Tailored Acquisition Strategies for Your Sector
              </h2>
            </div>
            <Link
              to="/industries"
              className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 shrink-0 group"
            >
              <span>View Full Playbooks for All 8 Industries</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {industriesData.map(industry => (
              <div
                key={industry.id}
                className={`rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5 border ${
                  isDark
                    ? 'bg-[#0F172A]/90 border-slate-800 hover:border-blue-500/40 hover:shadow-xl'
                    : 'bg-white border-slate-200 hover:border-blue-400 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="text-xs font-semibold text-blue-500 mb-2">
                    {industry.sampleKpi}
                  </div>
                  <h3 className={`text-base font-bold mb-2 transition-colors ${
                    isDark ? 'text-white group-hover:text-blue-400' : 'text-slate-900 group-hover:text-blue-600'
                  }`}>
                    {industry.name}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    {industry.tagline}
                  </p>
                  <div className={`text-[11px] p-2.5 rounded-xl border mb-4 ${
                    isDark
                      ? 'text-slate-400 bg-slate-900/90 border-slate-800'
                      : 'text-slate-600 bg-slate-50 border-slate-100'
                  }`}>
                    <span className={`font-semibold ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>Core Bottleneck: </span>
                    {industry.challenge}
                  </div>
                </div>

                <Link
                  to={`/industries/${industry.slug}`}
                  className={`text-xs font-semibold flex items-center justify-between pt-3 border-t transition-colors ${
                    isDark
                      ? 'text-blue-400 hover:text-blue-300 border-slate-800'
                      : 'text-blue-600 hover:text-blue-700 border-slate-100'
                  }`}
                >
                  <span>Explore Industry Strategy</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 7: OUR PROCESS (Numbered Engine)
      ========================================================== */}
      <section className={`border-y py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#0D1322] border-slate-800/80' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
              Systematic Execution
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Our 6-Stage Digital Growth Engine
            </h2>
            <p className={`text-xs sm:text-sm mt-2 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              A transparent, battle-tested methodology that removes guesswork and establishes compounding marketing momentum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Business Discovery & Economics',
                desc: 'Auditing your unit margins, sales cycle length, ideal customer profile (ICP), and historical conversion barriers.'
              },
              {
                step: '02',
                title: 'Comprehensive Marketing Audit',
                desc: '45-point deep dive into technical SEO crawl health, Google Ads search query waste, and landing page friction.'
              },
              {
                step: '03',
                title: 'Growth Strategy & Architecture',
                desc: 'Designing the custom multi-channel roadmap, budget allocation matrix, and lead qualification mechanisms.'
              },
              {
                step: '04',
                title: 'Asset & Campaign Engineering',
                desc: 'Building high-converting landing pages, setting up server-side CAPI tracking, and authoring ad creative assets.'
              },
              {
                step: '05',
                title: 'Controlled Launch & Attribution',
                desc: 'Deploying campaigns with real-time Looker Studio dashboards, CRM webhooks, and verified call tracking.'
              },
              {
                step: '06',
                title: 'Algorithmic Optimization & Scale',
                desc: 'Continuous weekly search query negative pruning, creative hook iteration, and scaling winning buyer segments.'
              }
            ].map(stage => (
              <div
                key={stage.step}
                className={`rounded-2xl p-6 relative transition-all duration-300 hover:-translate-y-1 border ${
                  isDark
                    ? 'bg-slate-900/90 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div className="text-xl font-extrabold text-blue-500 font-mono mb-3">
                  {stage.step}
                </div>
                <h3 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  {stage.title}
                </h3>
                <p className={`text-xs leading-relaxed ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 8: CASE STUDIES & VERIFIED PROOF
      ========================================================== */}
      <section id="case-studies">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                Proven Business Impact
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Case Studies &amp; Verifiable Outcomes
              </h2>
              <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Demo Content — Replace With Formal Client NDAs Before Live Launch
              </p>
            </div>
            <Link
              to="/case-studies"
              className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 shrink-0 group"
            >
              <span>View Full Case Studies Archive</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudiesData.slice(0, 2).map(cs => (
              <div
                key={cs.id}
                className={`rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 border ${
                  isDark
                    ? 'bg-[#0F172A]/90 border-slate-800 hover:border-slate-700 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className={`flex items-center justify-between text-xs pb-3 border-b mb-4 ${
                    isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}>
                    <span className="font-semibold text-blue-500">{cs.clientIndustry}</span>
                    <span className="font-mono">{cs.timeline}</span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {cs.clientName}
                  </h3>

                  <div className={`text-xs mb-5 leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                    <strong className={isDark ? 'text-slate-100' : 'text-slate-900'}>Business Challenge: </strong>
                    {cs.businessChallenge}
                  </div>

                  {/* Quantitative Metrics Grid */}
                  <div className={`grid grid-cols-3 gap-3 p-4 rounded-xl border mb-6 ${
                    isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-slate-50 border-slate-100'
                  }`}>
                    {cs.verifiedResults.map((res, rIdx) => (
                      <div key={rIdx} className="text-center">
                        <div className={`text-lg sm:text-xl font-extrabold font-mono tabular-nums ${
                          isDark ? 'text-emerald-400' : 'text-slate-900'
                        }`}>
                          {res.metric}
                        </div>
                        <div className={`text-[11px] font-medium mt-0.5 line-clamp-1 ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {res.label}
                        </div>
                        <div className={`text-[10px] mt-0.5 font-mono ${
                          isDark ? 'text-slate-500' : 'text-slate-400'
                        }`}>{res.timeframe}</div>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className={`text-xs italic pl-3 mb-6 border-l-2 border-blue-500 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    &ldquo;{cs.quote.text}&rdquo;
                    <footer className={`not-italic font-semibold mt-1 text-[11px] ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      — {cs.quote.author}, {cs.quote.role}
                    </footer>
                  </blockquote>
                </div>

                <div className={`pt-4 border-t flex items-center justify-between ${
                  isDark ? 'border-slate-800' : 'border-slate-100'
                }`}>
                  <span className={`text-xs font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    Primary: {cs.primaryService}
                  </span>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(`Case Study Discuss: ${cs.clientIndustry}`)}
                    className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1"
                  >
                    Discuss Similar Strategy &rarr;
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 9: LEAD GENERATION CTA & CONSULTATION FORM
      ========================================================== */}
      <section className={`py-16 sm:py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border transition-all duration-300 ${
        isDark
          ? 'bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-slate-900 border-slate-800/80 shadow-2xl'
          : 'bg-slate-900 text-white border-slate-800 shadow-xl'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 text-white space-y-4">
              <div className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                Direct Growth Engagement
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                Ready to Generate More Qualified Business Leads?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Schedule an exploratory consultation with our senior strategy team. We will review your current website, assess your competitor ad spend, and present a tangible 90-day pipeline plan.
              </p>

              <div className="pt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No pushy sales calls — technical audit &amp; unit economics focus</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Confidential review under mutual NDA standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Preliminary findings delivered within 24 business hours</span>
                </div>
              </div>
            </div>

            <div className={`lg:col-span-7 rounded-2xl p-6 sm:p-8 shadow-2xl border ${
              isDark
                ? 'bg-[#0F172A] border-slate-700/80 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}>
              <div className={`mb-4 pb-3 border-b ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Request Your Custom Marketing Proposal
                </h3>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                  Complete the form below to initiate your strategic review.
                </p>
              </div>
              <LeadForm sourceContext="Homepage Section 9 Lead Gen Block" />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 10: TESTIMONIALS (Attributable B2B Quotes)
      ========================================================== */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
              Client Feedback
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              What Commercial Partners Say About Working With Us
            </h2>
            <p className={`text-xs mt-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
              [Editable Demo Testimonial Placeholders — Pending Live Sign-Off]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote: 'EduTechSkillsDigital completely restructured our Google Ads account. Within 60 days, our cost per verified consultation dropped by 44% while our lead quality improved substantially.',
                name: 'Alexander Ross',
                title: 'Managing Partner',
                company: 'Ross Advisory Group [Demo Placeholder]'
              },
              {
                quote: 'Their WhatsApp CRM automation cut our lead contact response time from 3 hours to 18 seconds. Our sales appointment show-up rate jumped immediately by 38%.',
                name: 'Elena Rostova',
                title: 'Commercial Director',
                company: 'Vanguard Residential [Demo Placeholder]'
              },
              {
                quote: 'Our new corporate website built by EduTechSkillsDigital is not just fast—it is an active revenue generator. We are winning manufacturing bids online that used to require months of networking.',
                name: 'Markus Vance',
                title: 'VP of Global Operations',
                company: 'Precision Motion Corp [Demo Placeholder]'
              }
            ].map((t, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 border ${
                  isDark
                    ? 'bg-[#0F172A]/90 border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <p className={`text-xs leading-relaxed italic mb-6 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                  <div className={`text-xs font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>{t.name}</div>
                  <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{t.title}</div>
                  <div className="text-[11px] text-blue-500 font-medium">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 11: SEO-OPTIMIZED BLOG
      ========================================================== */}
      <section id="blog">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
                Executive Intelligence
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Latest Digital Marketing &amp; Strategy Guides
              </h2>
            </div>
            <Link
              to="/blog"
              className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1 shrink-0 group"
            >
              <span>Browse All Strategic Articles</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.slice(0, 3).map(post => (
              <article
                key={post.id}
                className={`rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 border ${
                  isDark
                    ? 'bg-[#0F172A]/90 border-slate-800 hover:border-slate-700 shadow-xl'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                <div>
                  <div className={`flex items-center gap-2 text-xs mb-3 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span className="font-semibold text-blue-500">{post.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.publicationDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className={`text-base font-bold mb-2 leading-snug transition-colors ${
                    isDark ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'
                  }`}>
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className={`text-xs leading-relaxed mb-4 line-clamp-3 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {post.excerpt}
                  </p>
                </div>

                <div className={`pt-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-100'}`}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-xs font-semibold text-blue-500 hover:text-blue-600 flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================
          SECTION 12: FREQUENTLY ASKED QUESTIONS (FAQ)
      ========================================================== */}
      <section className={`border-y py-20 transition-colors duration-300 ${
        isDark ? 'bg-[#0D1322] border-slate-800/80' : 'bg-slate-50 border-slate-200'
      }`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
              Transparency First
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Frequently Asked Questions
            </h2>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Clear answers regarding agency onboarding, deliverables, timelines, and reporting.
            </p>
          </div>

          <div className="space-y-3">
            {homeFaqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl overflow-hidden border transition-colors ${
                    isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className={`w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm transition-colors ${
                      isDark
                        ? 'text-white hover:text-blue-400'
                        : 'text-slate-900 hover:text-blue-600'
                    }`}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-blue-500' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className={`px-5 pb-5 pt-1 text-xs leading-relaxed border-t ${
                      isDark ? 'text-slate-300 border-slate-800' : 'text-slate-600 border-slate-100'
                    }`}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className={`mt-8 text-center text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
            Have a specific project question not covered here?{' '}
            <Link to="/contact" className="font-semibold text-blue-500 hover:underline">
              Speak directly with our strategy director &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
