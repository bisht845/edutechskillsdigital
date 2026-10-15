import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiService, leadFormSchema } from '../../services/api';
import { servicesData } from '../../data/servicesData';
import { CheckCircle2, AlertCircle, Loader2, Send, ArrowRight } from 'lucide-react';
import { z } from 'zod';
import { useTheme } from '../../context/ThemeContext';

type FormData = z.infer<typeof leadFormSchema>;

interface LeadFormProps {
  defaultService?: string;
  sourceContext?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const LeadForm: React.FC<LeadFormProps> = ({ defaultService, sourceContext, onSuccess, compact = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [assignedLeadId, setAssignedLeadId] = useState<string | null>(null);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      businessEmail: '',
      phoneNumber: '',
      companyName: '',
      websiteUrl: '',
      interestedService: defaultService || 'Integrated Digital Marketing Strategy',
      monthlyBudget: '$2,500 - $5,000 / month',
      projectRequirements: '',
      consentAgreement: true
    }
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError(null);

    try {
      const response = await apiService.submitLead(data);
      setAssignedLeadId(response.leadId);
      setSubmitSuccess(true);
      reset();
      if (onSuccess) onSuccess();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong while submitting. Please try again.';
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className={`rounded-xl p-8 text-center animate-fade-in-up border transition-colors ${
        isDark ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'
      }`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 border ${
          isDark
            ? 'bg-blue-950/80 text-blue-400 border-blue-700/60 shadow-lg shadow-blue-500/10'
            : 'bg-blue-50 text-blue-600 border-blue-200 shadow-sm'
        }`}>
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Consultation Request Received
        </h3>
        <p className={`text-sm max-w-md mx-auto mb-4 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Thank you for reaching out to EduTechSkillsDigital. Your consultation file has been generated with reference{' '}
          <span className={`font-mono font-semibold px-1.5 py-0.5 rounded text-xs border ${
            isDark
              ? 'text-blue-400 bg-slate-800 border-slate-700'
              : 'text-blue-700 bg-blue-50 border-blue-200'
          }`}>{assignedLeadId}</span>.
        </p>
        <p className={`text-xs max-w-sm mx-auto mb-6 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          A Senior Growth Director will review your company profile and contact you within 24 business hours to discuss an audit and proposal.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setSubmitSuccess(false)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
              isDark
                ? 'text-slate-300 bg-slate-800 border-slate-700 hover:bg-slate-700'
                : 'text-slate-700 bg-white border-slate-300 hover:bg-slate-50'
            }`}
          >
            Submit Another Inquiry
          </button>
          <a
            href="mailto:contact@edutechskillsdigital.com"
            className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors"
          >
            Send Priority Email Notice
          </a>
        </div>
      </div>
    );
  }

  const inputClass = (hasError: boolean) => `w-full px-3 py-2 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors border ${
    hasError
      ? 'border-rose-500 bg-rose-500/10'
      : isDark
      ? 'bg-slate-900/90 border-slate-700/80 text-white placeholder-slate-500'
      : 'bg-white border-slate-300 text-slate-900 placeholder-slate-400'
  }`;

  const labelClass = `block text-xs font-medium mb-1 ${isDark ? 'text-slate-300' : 'text-slate-700'}`;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {sourceContext && (
        <div className={`text-xs mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          Inquiry Context: <span className={`font-medium ${isDark ? 'text-slate-200' : 'text-slate-800'}`}>{sourceContext}</span>
        </div>
      )}

      {serverError && (
        <div className="p-3 text-xs bg-rose-950/60 border border-rose-800 text-rose-300 rounded-lg flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label className={labelClass}>
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="e.g. David Henderson"
            {...register('fullName', { required: 'Full name is required' })}
            className={inputClass(!!errors.fullName)}
          />
          {errors.fullName && <p className="text-[11px] text-rose-500 mt-1">{errors.fullName.message}</p>}
        </div>

        {/* Business Email */}
        <div>
          <label className={labelClass}>
            Business Email <span className="text-rose-500">*</span>
          </label>
          <input
            type="email"
            placeholder="david@company.com"
            {...register('businessEmail', { required: 'Business email is required' })}
            className={inputClass(!!errors.businessEmail)}
          />
          {errors.businessEmail && <p className="text-[11px] text-rose-500 mt-1">{errors.businessEmail.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone Number */}
        <div>
          <label className={labelClass}>
            Phone Number <span className="text-rose-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="+1 (555) 000-0000"
            {...register('phoneNumber', { required: 'Phone number is required' })}
            className={inputClass(!!errors.phoneNumber)}
          />
          {errors.phoneNumber && <p className="text-[11px] text-rose-500 mt-1">{errors.phoneNumber.message}</p>}
        </div>

        {/* Company Name */}
        <div>
          <label className={labelClass}>
            Company Name <span className="text-rose-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Henderson Group"
            {...register('companyName', { required: 'Company name is required' })}
            className={inputClass(!!errors.companyName)}
          />
          {errors.companyName && <p className="text-[11px] text-rose-500 mt-1">{errors.companyName.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Website URL */}
        <div>
          <label className={labelClass}>Website URL (Optional)</label>
          <input
            type="text"
            placeholder="https://company.com"
            {...register('websiteUrl')}
            className={inputClass(false)}
          />
        </div>

        {/* Interested Service */}
        <div>
          <label className={labelClass}>
            Interested Service <span className="text-rose-500">*</span>
          </label>
          <select
            {...register('interestedService', { required: 'Please select a service' })}
            className={inputClass(false)}
          >
            <option value="Integrated Digital Marketing Strategy" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
              Integrated Digital Marketing Strategy (Omnichannel)
            </option>
            {servicesData.map(s => (
              <option key={s.id} value={s.title} className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
                {s.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Monthly Budget */}
      <div>
        <label className={labelClass}>
          Monthly Marketing Budget Range <span className="text-rose-500">*</span>
        </label>
        <select
          {...register('monthlyBudget', { required: 'Budget range is required' })}
          className={inputClass(false)}
        >
          <option value="$1,500 - $3,000 / month" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
            $1,500 - $3,000 / month (Targeted Single Service)
          </option>
          <option value="$3,000 - $5,000 / month" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
            $3,000 - $5,000 / month (Dual Channel Growth)
          </option>
          <option value="$5,000 - $10,000 / month" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
            $5,000 - $10,000 / month (Full-Funnel Acquisition)
          </option>
          <option value="$10,000+ / month" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
            $10,000+ / month (Enterprise & Multi-Region)
          </option>
          <option value="Project-Based Website Development" className={isDark ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}>
            One-Time Project (Website / E-commerce Development)
          </option>
        </select>
      </div>

      {/* Project Requirements */}
      <div>
        <label className={labelClass}>
          Project Requirements &amp; Business Goals <span className="text-rose-500">*</span>
        </label>
        <textarea
          rows={compact ? 2 : 3}
          placeholder="Briefly describe your current business bottleneck (e.g., need more qualified B2B leads, redesign outdated website, optimize PPC cost per acquisition)..."
          {...register('projectRequirements', {
            required: 'Please outline your requirements',
            minLength: { value: 10, message: 'Please provide at least 10 characters of context' }
          })}
          className={inputClass(!!errors.projectRequirements)}
        />
        {errors.projectRequirements && (
          <p className="text-[11px] text-rose-500 mt-1">{errors.projectRequirements.message}</p>
        )}
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="consentAgreement"
          {...register('consentAgreement', { required: 'You must agree before submitting' })}
          className={`mt-0.5 rounded text-blue-600 focus:ring-blue-500 ${
            isDark ? 'border-slate-700 bg-slate-900' : 'border-slate-300 bg-white'
          }`}
        />
        <label htmlFor="consentAgreement" className={`text-xs leading-normal ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}>
          I consent to EduTechSkillsDigital analyzing my website and contacting me via business email or phone regarding this proposal. We respect your confidentiality.
        </label>
      </div>
      {errors.consentAgreement && (
        <p className="text-[11px] text-rose-500">{errors.consentAgreement.message}</p>
      )}

      {/* Submit CTA */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap hover:scale-101 active:scale-99"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Analyzing &amp; Submitting...</span>
          </>
        ) : (
          <>
            <span>Submit Consultation Request</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      <div className={`flex items-center justify-between text-[11px] pt-1 ${
        isDark ? 'text-slate-500' : 'text-slate-400'
      }`}>
        <span>Guaranteed Confidentiality</span>
        <span>Avg. Response Time: &lt; 24h</span>
      </div>
    </form>
  );
};
