import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Shield, Lock } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { industriesData } from '../../data/industriesData';
import { useTheme } from '../../context/ThemeContext';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail || !newsletterEmail.includes('@')) return;
    try {
      fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: newsletterEmail })
      }).catch(() => {});
    } catch {
      // Ignored
    }
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className={`pt-16 pb-12 border-t transition-colors duration-300 ${
      isDark
        ? 'bg-[#070A12] text-slate-300 border-slate-800/80'
        : 'bg-slate-900 text-slate-300 border-slate-800'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Newsletter & Brief Strip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">
          <div className="lg:col-span-6 space-y-2">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Subscribe to EduTechSkillsDigital Executive Intelligence
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Bi-weekly actionable analyses on customer acquisition economics, search algorithm shifts, and B2B pipeline conversion tactics.
            </p>
          </div>
          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-700/50 rounded-lg text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>You are subscribed. We send high-value analyses with zero spam.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your business email"
                  required
                  className="px-4 py-2.5 bg-slate-950/80 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold transition-all shrink-0 flex items-center justify-center gap-1.5 whitespace-nowrap shadow-md shadow-blue-600/20 hover:scale-102"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5-Column Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12 text-xs">
          {/* Col 1: Brand & Contact Info */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 space-y-4">
            <div className="text-lg font-extrabold text-white tracking-tight flex items-center gap-1">
              <span>EduTechSkills</span>
              <span className="text-blue-400">Digital</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Digital Growth Partner for Businesses. We architect and execute high-converting websites, targeted search optimization, and performance advertising engines for growth-minded enterprises.
            </p>
            <div className="space-y-2 pt-2 text-slate-400 text-xs">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>contact@edutechskillsdigital.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="font-mono tabular-nums">+1 (800) 412-GROW [Placeholder]</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>Digital Headquarters · Global Operational Hubs</span>
              </div>
            </div>
          </div>

          {/* Col 2: Core Growth Services */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Core Services</h4>
            <ul className="space-y-2 text-slate-400">
              {servicesData.slice(0, 7).map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-blue-400 hover:text-blue-300 font-medium">
                  View All 15 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Capabilities */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Specialized Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              {servicesData.slice(7, 14).map(s => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="hover:text-blue-400 transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Industry Solutions */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Industry Solutions</h4>
            <ul className="space-y-2 text-slate-400">
              {industriesData.map(ind => (
                <li key={ind.id}>
                  <Link to={`/industries/${ind.slug}`} className="hover:text-blue-400 transition-colors">
                    {ind.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Company & Legal */}
          <div className="space-y-3">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">Company &amp; Insights</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <Link to="/about" className="hover:text-blue-400 transition-colors">
                  About Us &amp; Team
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-blue-400 transition-colors">
                  Case Studies &amp; Proof
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-blue-400 transition-colors">
                  Strategy Blog &amp; Guides
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-blue-400 transition-colors">
                  Careers / HR Services
                </Link>
              </li>
              <li>
                <Link to="/free-marketing-audit" className="hover:text-blue-400 transition-colors">
                  Free Marketing Audit
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-blue-400 transition-colors">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800">
                <Link
                  to="/admin"
                  className="flex items-center gap-1.5 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>Admin Lead CRM</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <span>&copy; {new Date().getFullYear()} EduTechSkillsDigital. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-slate-400">Commercial Digital Marketing &amp; Web Development Agency</span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            {/* Quick theme switcher in footer */}
            <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px]">
              <span className="text-slate-500 px-1">Theme:</span>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  isDark ? 'bg-blue-600 text-white font-medium' : 'text-slate-400 hover:text-white'
                }`}
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`px-2 py-0.5 rounded transition-colors ${
                  !isDark ? 'bg-white text-slate-900 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Light
              </button>
            </div>

            <span className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>Agency Engine Online</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
