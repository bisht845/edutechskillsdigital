import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-real-estate-apex',
    slug: 'luxury-property-investor-pipeline',
    clientIndustry: 'Real Estate & Property Development',
    clientName: 'Skyline Residences & Capital [Demo Content — Replace Before Launch]',
    isDemo: true,
    timeline: '6 Month Campaign',
    primaryService: 'Meta Ads & WhatsApp Automation',
    businessChallenge: 'The client launched a luxury residential development ($650k+ units) with high ad spend on generic lead forms that produced low-quality leads, unresponsive inquiries, and overwhelmed sales brokers.',
    strategyImplemented: [
      'Engineered dedicated high-speed project landing page with unit floor-plan gating',
      'Added 3 mandatory qualifying friction questions on budget readiness and timeline',
      'Deployed WhatsApp Business Cloud API integration dispatching project brochures within 15 seconds',
      'Implemented automated broker CRM round-robin routing with SMS calendar appointment alerts'
    ],
    servicesDelivered: [
      'Meta Ads Management',
      'Landing Page Design & CRO',
      'WhatsApp Marketing & CRM Automation',
      'Video Reel Walkthrough Production'
    ],
    verifiedResults: [
      { metric: '+184%', label: 'Qualified In-Person Site Visits', timeframe: 'Over 6 Months' },
      { metric: '$42', label: 'Average Cost per Qualified Buyer', timeframe: 'Down from $128' },
      { metric: '91%', label: 'WhatsApp Instant Open Rate', timeframe: 'Across 2,400+ Inquiries' }
    ],
    quote: {
      text: 'The transition from standard lead ads to an automated WhatsApp qualifying funnel completely changed our sales floor velocity. Our brokers now speak only with buyers who have verified budgets.',
      author: 'Commercial Sales Director',
      role: 'Skyline Development Group'
    }
  },
  {
    id: 'case-healthcare-ortho',
    slug: 'specialty-clinic-patient-growth',
    clientIndustry: 'Healthcare & Specialty Clinics',
    clientName: 'Metro Advanced Orthopedic & Joint Center [Demo Content — Replace Before Launch]',
    isDemo: true,
    timeline: '9 Month Retainer',
    primaryService: 'Local SEO & Google Search Ads',
    businessChallenge: 'The practice had opening capacity for 40+ surgical and therapy consultations weekly, but was virtually invisible on Google Maps and relying on sporadic doctor referrals.',
    strategyImplemented: [
      'Full technical SEO audit and structured schema markup for medical specialties',
      'Google 3-Pack Local Map Pack overhaul across two target suburban clinic branches',
      'Tight exact-match Google Search Ads targeting high-value procedure terms (joint replacement, sports medicine)',
      'Automated post-appointment SMS review request funnel turning treated patients into verified 5-star Google reviews'
    ],
    servicesDelivered: [
      'Search Engine Optimization (SEO)',
      'Google Ads & PPC Management',
      'Online Reputation Management',
      'Website Speed & Mobile CRO'
    ],
    verifiedResults: [
      { metric: '+265%', label: 'Organic Local Search Inquiries', timeframe: 'Over 9 Months' },
      { metric: '142', label: 'New 5-Star Verified Google Reviews', timeframe: 'Average 4.9 Rating' },
      { metric: '3.4x', label: 'Surgical Consultation Inbound Calls', timeframe: 'Month-over-Month' }
    ],
    quote: {
      text: 'Our Google local rankings skyrocketed, and the phone does not stop ringing for our specialist surgeons. The reporting and transparency gave our partners complete peace of mind.',
      author: 'Managing Clinical Partner',
      role: 'Metro Orthopedic Center'
    }
  },
  {
    id: 'case-industrial-b2b',
    slug: 'precision-manufacturing-rfq-engine',
    clientIndustry: 'Manufacturing & B2B Industrial',
    clientName: 'Precision Metal Fab & Tooling Corp [Demo Content — Replace Before Launch]',
    isDemo: true,
    timeline: '12 Month Growth Program',
    primaryService: 'Integrated Digital Marketing & B2B Web Dev',
    businessChallenge: 'A custom industrial manufacturing plant relied solely on annual trade shows for new contracts. Their 10-year-old website lacked technical specifications and generated zero qualified RFQ submissions online.',
    strategyImplemented: [
      'Engineered a modern, technical B2B website with downloadable machinery capability catalogs and CAD spec sheets',
      'Targeted high-intent procurement queries on Google Search ("custom CNC milling OEM", "aerospace grade sheet metal stamping")',
      'Executed LinkedIn Account-Based Marketing targeting Supply Chain Directors and Procurement Managers',
      'Built a streamlined multi-step RFQ form with direct file upload for engineering drawings'
    ],
    servicesDelivered: [
      'Website Design & Development',
      'Google Ads & PPC Management',
      'Content Marketing & Technical Guides',
      'B2B CRM Pipeline Integration'
    ],
    verifiedResults: [
      { metric: '+$3.2M', label: 'Verified Pipeline RFQ Value', timeframe: 'In First 12 Months' },
      { metric: '28', label: 'Signed Enterprise Production Contracts', timeframe: 'New Corporate Accounts' },
      { metric: '64%', label: 'Reduction in Reliance on Trade Shows', timeframe: 'Year 1 Impact' }
    ],
    quote: {
      text: 'For the first time in our company 25-year history, we are acquiring enterprise procurement contracts from Google and LinkedIn rather than relying solely on exhausting trade shows.',
      author: 'Vice President of Operations',
      role: 'Precision Metal Fab'
    }
  },
  {
    id: 'case-ecommerce-d2c',
    slug: 'd2c-apparel-profit-scaling',
    clientIndustry: 'E-commerce & D2C Brands',
    clientName: 'Vanguard Technical Apparel [Demo Content — Replace Before Launch]',
    isDemo: true,
    timeline: '6 Month Scale Sprint',
    primaryService: 'Meta Ads & Email Marketing Automation',
    businessChallenge: 'The e-commerce store was struggling with rising customer acquisition costs on Facebook and a 78% cart abandonment rate, resulting in negative contribution margins on initial orders.',
    strategyImplemented: [
      'Overhauled product detail pages with sticky "Add to Cart", size recommendations, and customer UGC videos',
      'Installed server-side Conversions API (CAPI) tracking to recover lost attribution signal',
      'Produced weekly batches of direct-response hook video ads testing lifestyle vs technical fabric demonstrations',
      'Built Klaviyo automated lifecycle flows: Abandoned Cart, Browse Abandonment, and Post-Purchase VIP Cross-Sells'
    ],
    servicesDelivered: [
      'Meta Ads Management',
      'Video Editing & Reels Production',
      'Email Marketing & Automation',
      'Landing Page Design & CRO'
    ],
    verifiedResults: [
      { metric: '4.8x', label: 'Blended Return on Ad Spend (ROAS)', timeframe: 'Up from 1.9x' },
      { metric: '+38%', label: 'Storewide Conversion Rate', timeframe: '1.8% to 2.5%' },
      { metric: '27%', label: 'Total Store Revenue from Email Automation', timeframe: 'Klaviyo Lifecycle Flows' }
    ],
    quote: {
      text: 'Their video ad creatives stopped the scroll, and the email flows turned one-time shoppers into repeat brand advocates. Our monthly net margin has never looked healthier.',
      author: 'Co-Founder & Head of Growth',
      role: 'Vanguard Apparel'
    }
  }
];
