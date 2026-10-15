import React from 'react';
import { X, Sparkles } from 'lucide-react';
import { LeadForm } from './LeadForm';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, serviceTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#0F172A] rounded-2xl shadow-2xl max-w-xl w-full max-h-[92vh] overflow-y-auto border border-slate-700/80 relative p-6 sm:p-8 text-white"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 mb-1">
            <Sparkles className="w-4 h-4" />
            <span>EXECUTIVE DISCOVERY SESSION</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {serviceTitle ? `Discuss ${serviceTitle}` : 'Turn Inquiries Into Customers'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Fill in your business details below for a tailored digital growth audit and customized strategy roadmap.
          </p>
        </div>

        <LeadForm defaultService={serviceTitle} sourceContext={serviceTitle ? `Modal Inquiry for ${serviceTitle}` : 'Global Consultation Button'} onSuccess={onClose} />
      </div>
    </div>
  );
};
