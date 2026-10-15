import { z } from 'zod';
import { LeadSubmission, AuditRequest } from '../types';

export const leadFormSchema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  businessEmail: z.string().email('Please enter a valid business email address'),
  phoneNumber: z.string().min(7, 'Please enter a valid phone number with country code'),
  companyName: z.string().min(2, 'Company name is required'),
  websiteUrl: z.string().url('Please enter a valid website URL (including https://)').optional().or(z.literal('')),
  interestedService: z.string().min(1, 'Please select an interested service'),
  monthlyBudget: z.string().min(1, 'Please select your monthly marketing budget'),
  projectRequirements: z.string().min(10, 'Please provide brief details about your project or business goals (at least 10 characters)'),
  consentAgreement: z.boolean().refine(val => val === true, 'You must agree to receive consultation communications')
});

export const auditFormSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  businessEmail: z.string().email('Valid business email is required'),
  websiteUrl: z.string().min(3, 'Website URL is required'),
  companyName: z.string().min(2, 'Company name is required'),
  targetIndustry: z.string().min(1, 'Target industry is required'),
  primaryGoal: z.string().min(1, 'Primary goal is required'),
  monthlySpend: z.string().min(1, 'Monthly budget is required'),
  currentChallenges: z.array(z.string()).min(1, 'Please select at least one primary marketing challenge')
});

const INITIAL_LEADS: LeadSubmission[] = [
  {
    id: 'lead-101',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
    fullName: 'Robert Sterling',
    businessEmail: 'r.sterling@sterlingrealtygroup.com',
    phoneNumber: '+1 (555) 234-8901',
    companyName: 'Sterling Commercial Realty',
    websiteUrl: 'https://sterlingrealtygroup.com',
    interestedService: 'Meta Ads Management',
    monthlyBudget: '$5,000 - $10,000 / month',
    projectRequirements: 'Looking to generate high-intent inquiries for a new 48-unit commercial luxury office complex. Need automated WhatsApp brochure distribution.',
    status: 'new',
    notes: 'High priority. Brokerage wants to launch within 14 days.'
  },
  {
    id: 'lead-102',
    createdAt: new Date(Date.now() - 3600000 * 28).toISOString(),
    fullName: 'Dr. Evelyn Vance',
    businessEmail: 'drevance@apollosmileclinic.com',
    phoneNumber: '+1 (555) 872-4512',
    companyName: 'Apollo Smile Specialty Aesthetics',
    websiteUrl: 'https://apollosmileclinic.com',
    interestedService: 'SEO Services',
    monthlyBudget: '$2,500 - $5,000 / month',
    projectRequirements: 'Our clinic needs local map pack dominance for dental implants and cosmetic aligners across 2 branches. Current website ranks on page 3.',
    status: 'audit_sent',
    notes: 'Audit delivered with 45-point technical review. Follow-up strategy call scheduled.'
  },
  {
    id: 'lead-103',
    createdAt: new Date(Date.now() - 3600000 * 72).toISOString(),
    fullName: 'Marcus Thorne',
    businessEmail: 'mthorne@apexprecisionmfg.com',
    phoneNumber: '+1 (555) 439-0921',
    companyName: 'Apex Precision Manufacturing',
    websiteUrl: 'https://apexprecisionmfg.com',
    interestedService: 'Website Design and Development',
    monthlyBudget: '$10,000+ / month',
    projectRequirements: 'Need complete overhaul of our 8-year-old industrial manufacturing website. Require RFQ form with CAD file upload and LinkedIn ABM campaign.',
    status: 'proposal_shared',
    notes: 'Scope approved by VP Engineering; pending final procurement sign-off.'
  },
  {
    id: 'lead-104',
    createdAt: new Date(Date.now() - 3600000 * 120).toISOString(),
    fullName: 'Sophia Chen',
    businessEmail: 'sophia@lumiereluxurystudio.com',
    phoneNumber: '+1 (555) 912-3847',
    companyName: 'Lumiere Skincare & Wellness',
    websiteUrl: 'https://lumiereskin.com',
    interestedService: 'E-commerce Website Development',
    monthlyBudget: '$5,000 - $10,000 / month',
    projectRequirements: 'D2C organic skincare brand seeking migration to high-converting Shopify build with automated Klaviyo flows and Meta performance ads.',
    status: 'closed_won',
    notes: 'Client signed 6-month integrated retainer. Onboarding sprint in progress.'
  }
];

const LEADS_STORAGE_KEY = 'edutech_leads_data_v1';
const AUDITS_STORAGE_KEY = 'edutech_audits_data_v1';

export const apiService = {
  getLeads: async (): Promise<LeadSubmission[]> => {
    try {
      const raw = localStorage.getItem(LEADS_STORAGE_KEY);
      if (!raw) {
        localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_LEADS));
        return INITIAL_LEADS;
      }
      return JSON.parse(raw);
    } catch {
      return INITIAL_LEADS;
    }
  },

  submitLead: async (data: z.infer<typeof leadFormSchema>): Promise<{ success: boolean; leadId: string; message: string }> => {
    // Validate with Zod
    const validated = leadFormSchema.parse(data);
    const newLead: LeadSubmission = {
      id: `lead-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      fullName: validated.fullName,
      businessEmail: validated.businessEmail,
      phoneNumber: validated.phoneNumber,
      companyName: validated.companyName,
      websiteUrl: validated.websiteUrl,
      interestedService: validated.interestedService,
      monthlyBudget: validated.monthlyBudget,
      projectRequirements: validated.projectRequirements,
      status: 'new'
    };

    try {
      const existing = await apiService.getLeads();
      const updated = [newLead, ...existing];
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));

      // Optional async fetch to express server if running
      try {
        await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newLead)
        });
      } catch {
        // Silently handled in local persistence mode
      }

      return {
        success: true,
        leadId: newLead.id,
        message: 'Your inquiry has been received. A Senior Growth Director will review your requirements and respond within 24 business hours.'
      };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Submission failed';
      throw new Error(message);
    }
  },

  updateLeadStatus: async (leadId: string, status: LeadSubmission['status'], notes?: string): Promise<LeadSubmission[]> => {
    const leads = await apiService.getLeads();
    const updated = leads.map(l => (l.id === leadId ? { ...l, status, notes: notes !== undefined ? notes : l.notes } : l));
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
    return updated;
  },

  submitAudit: async (data: z.infer<typeof auditFormSchema>): Promise<{ success: boolean; auditId: string; preliminaryScore: number }> => {
    auditFormSchema.parse(data);
    const newAudit: AuditRequest = {
      id: `audit-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toISOString(),
      fullName: data.fullName,
      businessEmail: data.businessEmail,
      websiteUrl: data.websiteUrl,
      companyName: data.companyName,
      targetIndustry: data.targetIndustry,
      primaryGoal: data.primaryGoal,
      monthlySpend: data.monthlySpend,
      currentChallenges: data.currentChallenges,
      status: 'pending_review'
    };

    try {
      const raw = localStorage.getItem(AUDITS_STORAGE_KEY);
      const existing = raw ? JSON.parse(raw) : [];
      localStorage.setItem(AUDITS_STORAGE_KEY, JSON.stringify([newAudit, ...existing]));
    } catch {
      // Ignored
    }

    // Calculate a preliminary health score based on challenge count
    const preliminaryScore = Math.max(48, Math.min(84, 92 - data.currentChallenges.length * 9));

    return {
      success: true,
      auditId: newAudit.id,
      preliminaryScore
    };
  },

  exportLeadsCSV: async (): Promise<string> => {
    const leads = await apiService.getLeads();
    const headers = ['ID', 'Date', 'Full Name', 'Email', 'Phone', 'Company', 'Website', 'Service', 'Budget', 'Status', 'Requirements'];
    const rows = leads.map(l => [
      l.id,
      l.createdAt,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.businessEmail.replace(/"/g, '""')}"`,
      `"${l.phoneNumber.replace(/"/g, '""')}"`,
      `"${l.companyName.replace(/"/g, '""')}"`,
      `"${(l.websiteUrl || '').replace(/"/g, '""')}"`,
      `"${l.interestedService.replace(/"/g, '""')}"`,
      `"${l.monthlyBudget.replace(/"/g, '""')}"`,
      l.status,
      `"${l.projectRequirements.replace(/"/g, '""')}"`
    ]);

    return [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  }
};
