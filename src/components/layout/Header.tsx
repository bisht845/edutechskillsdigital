import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Building2, Layers, Sun, Moon } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { industriesData } from '../../data/industriesData';
import { useTheme } from '../../context/ThemeContext';

interface HeaderProps {
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme, setTheme } = useTheme();

  const closeAll = () => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  };

  const isDark = theme === 'dark';

  return (
    <header className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
      isDark
        ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 text-white'
        : 'bg-white/95 backdrop-blur-md border-b border-slate-200 text-slate-900'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 min-h-[64px] py-2">
          {/* Zone 1: Single clean text element wordmark */}
          <Link
            to="/"
            onClick={closeAll}
            className={`text-sm min-[360px]:text-base sm:text-2xl font-extrabold tracking-tight whitespace-nowrap shrink-0 transition-colors flex items-center gap-1 ${
  isDark ? 'text-white hover:text-blue-400' : 'text-slate-900 hover:text-blue-600'
}`}
          >
            <span>EduTechSkills</span>
            <span className="text-blue-600 bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              Digital
            </span>
          </Link>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className={`hidden lg:flex items-center gap-7 text-sm font-medium transition-colors ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                } ${
                  location.pathname.startsWith('/services') ? 'text-blue-500 font-semibold' : ''
                }`}
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                aria-expanded={servicesDropdownOpen}
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform" />
              </button>

              {servicesDropdownOpen && (
                <div className={`absolute top-full -left-20 w-[640px] rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-4 animate-fade-in-up z-50 transition-colors ${
                  isDark
                    ? 'bg-[#0F172A] border border-slate-700/80 text-white'
                    : 'bg-white border border-slate-200 text-slate-900 shadow-slate-200/80'
                }`}>
                  <div className={`col-span-2 pb-2 border-b flex items-center justify-between text-xs ${
                    isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}>
                    <span className={`font-semibold flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <Layers className="w-4 h-4 text-blue-500" /> Core Agency Services
                    </span>
                    <Link
                      to="/services"
                      onClick={closeAll}
                      className="text-blue-500 hover:text-blue-600 hover:underline flex items-center gap-1 font-medium"
                    >
                      View All 15 Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                  {servicesData.slice(0, 10).map(s => (
                    <Link
                      key={s.id}
                      to={`/services/${s.slug}`}
                      onClick={closeAll}
                      className={`group p-2.5 rounded-xl transition-all flex items-start gap-3 ${
                        isDark ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0 group-hover:scale-125 transition-transform" />
                      <div>
                        <div className={`text-xs font-semibold group-hover:text-blue-500 transition-colors leading-tight ${
                          isDark ? 'text-slate-200' : 'text-slate-900'
                        }`}>
                          {s.title}
                        </div>
                        <div className={`text-[11px] line-clamp-1 mt-0.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {s.businessBenefit}
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className={`col-span-2 pt-2 border-t -mx-5 -mb-5 p-3 rounded-b-2xl flex items-center justify-between text-xs ${
                    isDark ? 'border-slate-800 bg-slate-900/60 text-slate-400' : 'border-slate-100 bg-slate-50 text-slate-600'
                  }`}>
                    <span>Need a bespoke omnichannel strategy?</span>
                    <Link
                      to="/services/digital-marketing-services"
                      onClick={closeAll}
                      className="font-semibold text-blue-500 hover:text-blue-600"
                    >
                      Explore Integrated Growth &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <button
                type="button"
                className={`flex items-center gap-1.5 py-2 transition-colors whitespace-nowrap shrink-0 ${
                  isDark ? 'hover:text-white' : 'hover:text-slate-900'
                } ${
                  location.pathname.startsWith('/industries') ? 'text-blue-500 font-semibold' : ''
                }`}
                onClick={() => setIndustriesDropdownOpen(!industriesDropdownOpen)}
                aria-expanded={industriesDropdownOpen}
              >
                <span>Industries</span>
                <ChevronDown className="w-3.5 h-3.5 transition-transform" />
              </button>

              {industriesDropdownOpen && (
                <div className={`absolute top-full -left-12 w-[520px] rounded-2xl shadow-2xl p-5 grid grid-cols-2 gap-3 animate-fade-in-up z-50 transition-colors ${
                  isDark
                    ? 'bg-[#0F172A] border border-slate-700/80 text-white'
                    : 'bg-white border border-slate-200 text-slate-900 shadow-slate-200/80'
                }`}>
                  <div className={`col-span-2 pb-2 border-b flex items-center justify-between text-xs ${
                    isDark ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-500'
                  }`}>
                    <span className={`font-semibold flex items-center gap-1.5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                      <Building2 className="w-4 h-4 text-blue-500" /> Industry Solutions
                    </span>
                    <Link to="/industries" onClick={closeAll} className="text-blue-500 hover:underline font-medium">
                      All Industries &rarr;
                    </Link>
                  </div>
                  {industriesData.map(ind => (
                    <Link
                      key={ind.id}
                      to={`/industries/${ind.slug}`}
                      onClick={closeAll}
                      className={`group p-2.5 rounded-xl transition-all flex items-start gap-2.5 ${
                        isDark ? 'hover:bg-slate-800/80' : 'hover:bg-slate-50'
                      }`}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-blue-500 mt-1.5 shrink-0 transition-colors" />
                      <div>
                        <div className={`text-xs font-semibold group-hover:text-blue-500 transition-colors leading-tight ${
                          isDark ? 'text-slate-200' : 'text-slate-900'
                        }`}>
                          {ind.name}
                        </div>
                        <div className={`text-[11px] line-clamp-1 mt-0.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}>
                          {ind.sampleKpi}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/case-studies"
              onClick={closeAll}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                isDark ? 'hover:text-white' : 'hover:text-slate-900'
              } ${
                location.pathname === '/case-studies' ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              Case Studies
            </Link>

            <Link
              to="/about"
              onClick={closeAll}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                isDark ? 'hover:text-white' : 'hover:text-slate-900'
              } ${
                location.pathname === '/about' ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              About Us
            </Link>

            <Link
              to="/blog"
              onClick={closeAll}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                isDark ? 'hover:text-white' : 'hover:text-slate-900'
              } ${
                location.pathname.startsWith('/blog') ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              onClick={closeAll}
              className={`transition-colors whitespace-nowrap shrink-0 ${
                isDark ? 'hover:text-white' : 'hover:text-slate-900'
              } ${
                location.pathname === '/contact' ? 'text-blue-500 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Zone 3: Actions + Theme Switcher */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            {/* Dual-Pill Theme Switcher (Dark & Light according to reference) */}
            <div className={`p-0.5 rounded-xl flex items-center border transition-all ${
              isDark
                ? 'bg-slate-900/90 border-slate-700/80 shadow-xs'
                : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                aria-label="Switch to Dark Theme"
                className={`px-1.5 py-1.5 sm:px-2px-2 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isDark
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Dark Theme"
              >
                <Moon className="w-3.5 h-3.5" />
                <span className="text-[11px] font-medium hidden sm:inline">Dark</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('light')}
                aria-label="Switch to Light Theme"
                className={`px-2 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  !isDark
                    ? 'bg-white text-slate-900 shadow-xs border border-slate-200/80 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Corporate Light Theme (Reference Indsoft24)"
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span className="text-[11px] font-medium hidden sm:inline">Light</span>
              </button>
            </div>

            <Link
              to="/free-marketing-audit"
              onClick={closeAll}
              className={`hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 transition-all whitespace-nowrap shrink-0 border rounded-lg ${
                isDark
                  ? 'text-slate-300 hover:text-white border-slate-700/60 bg-slate-900/60 hover:border-slate-600'
                  : 'text-slate-700 hover:text-slate-900 border-slate-200 bg-slate-50 hover:bg-slate-100'
              }`}
            >
              <span>Free Audit</span>
            </Link>

            <button
              type="button"
              onClick={onOpenConsultation}
             
className="hidden sm:inline-flex items-center gap-1.5 px-3 sm:px-4 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all whitespace-nowrap shrink-0"

            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className={`lg:hidden border-t max-h-[85vh] overflow-y-auto px-4 py-6 space-y-5 animate-fade-in-up ${
          isDark ? 'border-slate-800 bg-[#0B0F19] text-slate-200' : 'border-slate-200 bg-white text-slate-800'
        }`}>
          <div className="flex items-center justify-between pb-3 border-b border-slate-800/40">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Theme Mode:</span>
            <div className="flex items-center gap-1.5 p-1 rounded-xl border border-slate-700/60 bg-slate-900/60">
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  isDark ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5" />
                <span>Dark</span>
              </button>
              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                  !isDark ? 'bg-white text-slate-900 font-bold shadow-xs' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>Light</span>
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <Link
              to="/"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Home
            </Link>
            <Link
              to="/services"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Services Overview (15 Capabilities)
            </Link>
            <div className={`pl-3 space-y-1 py-1 border-l-2 ml-3 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              {servicesData.slice(0, 6).map(s => (
                <Link
                  key={s.id}
                  to={`/services/${s.slug}`}
                  onClick={closeAll}
                  className="block px-2 py-1 text-xs text-slate-400 hover:text-blue-500"
                >
                  {s.title}
                </Link>
              ))}
            </div>

            <Link
              to="/industries"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Industry Solutions (8 Verticals)
            </Link>
            <div className={`pl-3 space-y-1 py-1 border-l-2 ml-3 ${isDark ? 'border-slate-700' : 'border-slate-200'}`}>
              {industriesData.slice(0, 5).map(ind => (
                <Link
                  key={ind.id}
                  to={`/industries/${ind.slug}`}
                  onClick={closeAll}
                  className="block px-2 py-1 text-xs text-slate-400 hover:text-blue-500"
                >
                  {ind.name}
                </Link>
              ))}
            </div>

            <Link
              to="/case-studies"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Case Studies &amp; Proof
            </Link>
            <Link
              to="/about"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              About EduTechSkillsDigital
            </Link>
            <Link
              to="/blog"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Blog &amp; Strategy Articles
            </Link>
            <Link
              to="/careers"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Careers / HR Services
            </Link>
            <Link
              to="/free-marketing-audit"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold text-blue-500 hover:bg-blue-500/10 rounded-lg"
            >
              Get a Free Marketing Audit
            </Link>
            <Link
              to="/contact"
              onClick={closeAll}
              className="block px-3 py-2 text-sm font-semibold hover:bg-blue-500/10 rounded-lg"
            >
              Contact Us
            </Link>
          </div>

          <div className={`pt-4 border-t flex flex-col gap-2 ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
            <button
              onClick={() => {
                closeAll();
                onOpenConsultation();
              }}
              className="w-full py-3 px-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-center shadow-lg shadow-blue-600/25"
            >
              Book Discovery Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
