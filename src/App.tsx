import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/ui/ConsultationModal';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { IndustriesIndexPage } from './pages/IndustriesIndexPage';
import { IndustryDetailPage } from './pages/IndustryDetailPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { FreeAuditPage } from './pages/FreeAuditPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';

// Scroll to top helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent: React.FC = () => {
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);
  const { theme } = useTheme();

  const handleOpenConsultation = (serviceTitle?: string) => {
    setSelectedServiceForModal(serviceTitle);
    setConsultationModalOpen(true);
  };

  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen flex flex-col font-sans antialiased relative transition-colors duration-300 ${
      isDark
        ? 'bg-[#070B14] text-slate-100 selection:bg-blue-500 selection:text-white bg-grid-pattern'
        : 'bg-white text-slate-900 selection:bg-blue-600 selection:text-white bg-grid-pattern'
    }`}>
      <Header onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/about" element={<AboutPage onOpenConsultation={() => handleOpenConsultation()} />} />
          <Route path="/services" element={<ServicesIndexPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/services/:slug" element={<ServiceDetailPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/industries" element={<IndustriesIndexPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/industries/:slug" element={<IndustryDetailPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/case-studies" element={<CaseStudiesPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/blog" element={<BlogIndexPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage onOpenConsultation={handleOpenConsultation} />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/free-marketing-audit" element={<FreeAuditPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsPage />} />
          <Route path="/admin" element={<AdminDashboardPage />} />
          <Route path="*" element={<HomePage onOpenConsultation={handleOpenConsultation} />} />
        </Routes>
      </main>

      <Footer />

      <ConsultationModal
        isOpen={consultationModalOpen}
        onClose={() => setConsultationModalOpen(false)}
        serviceTitle={selectedServiceForModal}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
