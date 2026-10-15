import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, BarChart3, Users, Zap, Shield, Search } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const HeroAnalyticsMockup: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`w-full rounded-2xl p-5 shadow-2xl relative overflow-hidden transition-all duration-300 border ${
      isDark
        ? 'bg-slate-900 border-slate-800 text-white'
        : 'bg-slate-900 border-slate-800 text-white shadow-slate-300/50'
    }`}>
      {/* Decorative gradient glow subtle backdrop */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

      {/* Top Bar of Mockup */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-3 text-xs font-mono text-slate-400">client-attribution-portal.edutechskills.digital</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-mono tabular-nums">Q4 Live Growth Telemetry</span>
        </div>
      </div>

      {/* Main KPI Row with Subtle Hover Lift */}
      <div className="grid grid-cols-3 gap-3 my-4">
        <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-3 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="text-xs text-slate-400">Qualified Pipeline</div>
          <div className="text-xl font-bold text-white mt-1 font-mono tabular-nums">$2,480,000</div>
          <div className="flex items-center gap-1 text-xs text-emerald-400 mt-1">
            <TrendingUp className="w-3 h-3" />
            <span className="font-mono tabular-nums">+184% YoY</span>
          </div>
        </div>
        <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-3 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="text-xs text-slate-400">Blended CAC</div>
          <div className="text-xl font-bold text-white mt-1 font-mono tabular-nums">$41.20</div>
          <div className="flex items-center gap-1 text-xs text-emerald-400 mt-1">
            <span className="font-mono tabular-nums">-42% vs baseline</span>
          </div>
        </div>
        <div className="bg-slate-800/70 border border-slate-700/60 rounded-xl p-3 transition-transform hover:-translate-y-0.5 duration-200">
          <div className="text-xs text-slate-400">Avg. Response Time</div>
          <div className="text-xl font-bold text-white mt-1 font-mono tabular-nums">28s</div>
          <div className="flex items-center gap-1 text-xs text-blue-400 mt-1">
            <Zap className="w-3 h-3" />
            <span>WhatsApp CRM</span>
          </div>
        </div>
      </div>

      {/* Campaign Conversion Bars */}
      <div className="space-y-3 bg-slate-950/80 border border-slate-800/80 rounded-xl p-4">
        <div className="flex items-center justify-between text-xs text-slate-400 pb-1">
          <span>Active Commercial Channels</span>
          <span>Lead Conversion Velocity</span>
        </div>

        <div className="space-y-2.5">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">Google High-Intent Search</span>
              <span className="font-mono tabular-nums text-emerald-400">4.8% CVR · $38 CPL</span>
            </div>
            <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: '88%' }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">Meta Ads Lead Funnel &amp; CAPI</span>
              <span className="font-mono tabular-nums text-emerald-400">3.9% CVR · $44 CPL</span>
            </div>
            <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
                style={{ width: '74%' }}
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-slate-300 font-medium">SEO Commercial Map Pack</span>
              <span className="font-mono tabular-nums text-emerald-400">8.2% Call Conversion</span>
            </div>
            <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-500 to-teal-400 h-2 rounded-full transition-all duration-1000"
                style={{ width: '92%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Proof Strip */}
      <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
          <span>Server-Side GA4 &amp; CAPI Verified</span>
        </div>
        <div className="font-mono text-slate-500 text-[11px]">
          EduTechSkillsDigital Intelligence Engine
        </div>
      </div>
    </div>
  );
};

export const ServiceAuditCardVisual: React.FC<{ type: string }> = ({ type }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  if (type === 'seo') {
    return (
      <div className={`border rounded-xl p-4 font-sans transition-colors ${
        isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}>
        <div className={`flex items-center justify-between mb-3 text-xs border-b pb-2 ${
          isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
        }`}>
          <span className={`font-medium flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
            <Search className="w-3.5 h-3.5 text-blue-500" /> Search Console Diagnostic
          </span>
          <span className="font-mono tabular-nums text-emerald-500 font-semibold">100% Clean Index</span>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className={`p-2.5 rounded-lg border ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Core Web Vitals</div>
            <div className={`font-semibold mt-0.5 font-mono tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>98 / 100</div>
          </div>
          <div className={`p-2.5 rounded-lg border ${
            isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
          }`}>
            <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Top 3 Keywords</div>
            <div className="font-semibold text-emerald-500 mt-0.5 font-mono tabular-nums">+46 Terms</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`border rounded-xl p-4 font-sans transition-colors ${
      isDark ? 'bg-[#0F172A] border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
    }`}>
      <div className={`flex items-center justify-between mb-3 text-xs border-b pb-2 ${
        isDark ? 'border-slate-800 text-slate-400' : 'border-slate-200 text-slate-500'
      }`}>
        <span className={`font-medium flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          <BarChart3 className="w-3.5 h-3.5 text-blue-500" /> Performance Attribution
        </span>
        <span className="font-mono tabular-nums text-blue-500 font-semibold">CAPI Verified</span>
      </div>
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className={`p-2.5 rounded-lg border ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Qualified Leads</div>
          <div className={`font-semibold mt-0.5 font-mono tabular-nums ${isDark ? 'text-white' : 'text-slate-900'}`}>+184% Lift</div>
        </div>
        <div className={`p-2.5 rounded-lg border ${
          isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
        }`}>
          <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Verified ROAS</div>
          <div className="font-semibold text-emerald-500 mt-0.5 font-mono tabular-nums">4.8x Return</div>
        </div>
      </div>
    </div>
  );
};
