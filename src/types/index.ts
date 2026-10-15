export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  businessBenefit: string;
  iconName: string;
  overview: string;
  problemsSolved: string[];
  targetAudience: string[];
  scopeOfWork: string[];
  deliverables: string[];
  processSteps: { step: number; title: string; description: string }[];
  reportingKPIs: string[];
  clientResponsibilities: string[];
  dependenciesAndExclusions: string[];
  timeline: string;
  pricingModel: string;
  startingPrice: string;
  faqs: { question: string; answer: string }[];
  relatedServiceSlugs: string[];
}

export interface IndustrySolution {
  id: string;
  slug: string;
  name: string;
  headline: string;
  tagline: string;
  challenge: string;
  challenges: string[];
  proposedSolution: string;
  deliverables: string[];
  leadGenerationStrategy: string[];
  sampleKpi: string;
  kpiMetric: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  clientIndustry: string;
  clientName: string; // e.g. "Premier Healthcare Network"
  isDemo: boolean;
  timeline: string;
  primaryService: string;
  businessChallenge: string;
  strategyImplemented: string[];
  servicesDelivered: string[];
  verifiedResults: { metric: string; label: string; timeframe: string }[];
  quote: { text: string; author: string; role: string };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  publicationDate: string;
  readTime: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
}

export interface LeadSubmission {
  id: string;
  createdAt: string;
  fullName: string;
  businessEmail: string;
  phoneNumber: string;
  companyName: string;
  websiteUrl?: string;
  interestedService: string;
  monthlyBudget: string;
  projectRequirements: string;
  status: 'new' | 'contacted' | 'audit_sent' | 'proposal_shared' | 'closed_won' | 'archived';
  notes?: string;
}

export interface AuditRequest {
  id: string;
  createdAt: string;
  fullName: string;
  businessEmail: string;
  websiteUrl: string;
  companyName: string;
  targetIndustry: string;
  primaryGoal: string;
  monthlySpend: string;
  currentChallenges: string[];
  status: 'pending_review' | 'audit_generated' | 'delivered';
}
