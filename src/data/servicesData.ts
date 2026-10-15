import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'seo-services',
    slug: 'seo-services',
    title: 'Search Engine Optimization (SEO)',
    shortDescription: 'Technical SEO, high-intent keyword acquisition, local map pack dominance, and compounding organic search revenue.',
    businessBenefit: 'Capture qualified commercial search demand without perpetual paid media spend.',
    iconName: 'Search',
    overview: 'Our enterprise SEO program aligns technical site health, on-page topical authority, and localized search visibility to establish durable commercial rankings that drive inbound business inquiries month after month.',
    problemsSolved: [
      'Stagnant or declining organic website traffic',
      'High reliance on paid advertising costs that increase every quarter',
      'Website not appearing for high-intent commercial keywords',
      'Technical crawl errors, slow Core Web Vitals, and indexing issues',
      'Invisible local map pack presence in target operational territories'
    ],
    targetAudience: [
      'B2B service firms seeking qualified enterprise inbound inquiries',
      'Healthcare practices and specialty medical clinics targeting local patients',
      'Real estate developers looking to capture homebuyer and investor intent',
      'E-commerce brands striving to decrease blended customer acquisition cost'
    ],
    scopeOfWork: [
      'Full technical SEO audit, Core Web Vitals audit, and crawl budget analysis',
      'High-intent commercial keyword mapping and competitor gap indexing',
      'On-page title, meta, header hierarchy, and internal link architecture optimization',
      'Structured data (Schema.org JSON-LD) implementation for rich snippets',
      'Local SEO setup, Google Business Profile optimization, and citation cleanup',
      'Editorial content roadmap targeting bottom-of-funnel decision makers',
      'Monthly search console indexation checks and algorithmic adjustment sprints'
    ],
    deliverables: [
      'Comprehensive 45-point Technical Health Audit Report',
      'Commercial Keyword Architecture & Mapping Document',
      'Quarterly On-Page Optimization Sprints (Metadata, Internal Links, Headers)',
      'Schema Markup Implementation File & Google Rich Result Verification',
      'Bi-Weekly Organic Search Rankings & Lead Attribution Dashboard'
    ],
    processSteps: [
      { step: 1, title: 'Technical Crawl & Baseline Audit', description: 'Deep audit of indexation, site speed, server responses, redirect chains, and schema gaps.' },
      { step: 2, title: 'Intent-Driven Keyword Mapping', description: 'Identifying bottom-funnel commercial keywords with high buying intent rather than vanity terms.' },
      { step: 3, title: 'On-Site Architecture & Content Overhaul', description: 'Restructuring landing pages, metadata, topical silos, and internal PageRank distribution.' },
      { step: 4, title: 'Authority Building & Digital PR', description: 'Securing contextual industry citations, partner mentions, and authoritative brand signals.' },
      { step: 5, title: 'Monitoring, CRO & Algorithmic Sprints', description: 'Weekly tracking of keyword rankings, search impressions, click-through rates, and lead conversions.' }
    ],
    reportingKPIs: [
      'Organic Search Impressions & Clicks (Google Search Console)',
      'Top 3 & Top 10 Commercial Keyword Rankings',
      'Organic Lead Form Submissions & Phone Call Inquiries',
      'Crawl Health & Zero-Error Indexation Rate',
      'Estimated Organic Pipeline Value'
    ],
    clientResponsibilities: [
      'Timely access to Google Search Console, Google Analytics 4, and CMS admin',
      'Prompt review and staging approvals for technical and content code updates',
      'Designated contact person for industry-specific subject matter validation'
    ],
    dependenciesAndExclusions: [
      'Excludes guarantee of specific algorithmic ranking positions (against Google guidelines)',
      'Excludes heavy back-end database re-architecture unless contracted separately',
      'Search engine re-crawl times depend on Google/Bing indexing algorithms'
    ],
    timeline: '3 to 6 months for noticeable organic ranking lift; 6 to 12 months for compounding commercial market dominance.',
    pricingModel: 'Monthly Retainer with Milestone Commitments',
    startingPrice: '$1,800 / month',
    faqs: [
      {
        question: 'How soon can we expect to see organic lead improvements?',
        answer: 'Technical fixes and low-hanging keyword optimizations often show initial traction within 60 to 90 days. Sustainable commercial dominance typically compounds significantly between months 4 and 9.'
      },
      {
        question: 'Do you guarantee number 1 rankings on Google?',
        answer: 'No reputable agency guarantees position #1 because Google updates algorithms thousands of times per year. We focus on ranking for qualified buyer terms that generate verifiable phone calls, leads, and sales.'
      },
      {
        question: 'Can you handle local multi-location SEO?',
        answer: 'Yes. We specialize in multi-location Google Business Profile management, local schema hierarchy, and localized geo-landing pages.'
      }
    ],
    relatedServiceSlugs: ['google-ads-ppc', 'website-design-development', 'content-marketing']
  },
  {
    id: 'google-ads-ppc',
    slug: 'google-ads-ppc',
    title: 'Google Ads & PPC Management',
    shortDescription: 'High-intent Search, Performance Max, Display, and YouTube ad campaigns designed to capture immediate commercial demand.',
    businessBenefit: 'Generate ready-to-buy inbound leads and quote inquiries within days with strict cost-per-lead controls.',
    iconName: 'Target',
    overview: 'Our Google Ads management focuses strictly on profitable buyer intent. We eliminate wasted spend on negative search queries, engineer high-relevance ad copy, and pair campaigns with dedicated conversion-rate-optimized landing pages.',
    problemsSolved: [
      'High cost-per-click without corresponding qualified lead volume',
      'Wasted ad spend on irrelevant search terms and accidental clicks',
      'Poor Quality Scores leading to overpriced ad auctions',
      'Inaccurate or missing server-side conversion tracking',
      'Disorganized campaign structures competing against themselves'
    ],
    targetAudience: [
      'B2B companies with customer lifetime values above $3,000',
      'Commercial contractors and industrial suppliers',
      'Urgent local service businesses and specialty medical clinics',
      'High-ticket real estate and luxury asset consultants'
    ],
    scopeOfWork: [
      'Account structure audit, Single-Topic Ad Group (STAG) architecture',
      'Exhaustive negative keyword research and weekly query pruning',
      'Responsive Search Ads (RSA) copywriting and asset extension deployment',
      'Google Tag Manager server-side enhanced conversion tracking setup',
      'Smart bidding portfolio strategy calibration (Target CPA, Target ROAS)',
      'Landing page message-match recommendations and A/B split testing',
      'Competitive auction insight tracking and bid adjustments'
    ],
    deliverables: [
      'Restructured Google Ads Account Architecture',
      'Comprehensive Negative Keyword Exclusion Master List',
      'High-Converting Ad Copy Sets with 4+ Dynamic Extensions',
      'Real-Time Google Looker Studio Performance Dashboard',
      'Weekly Bid & Search Query Optimization Log'
    ],
    processSteps: [
      { step: 1, title: 'Commercial Audit & Unit Economics', description: 'Evaluating historical account data, target cost-per-acquisition, and profit margins.' },
      { step: 2, title: 'Tracking Architecture Setup', description: 'Configuring GA4, GTM, phone call recording, and offline CRM conversion imports.' },
      { step: 3, title: 'Tight Search Structure Build', description: 'Deploying high-intent exact and phrase match ad groups with strict negative keyword walls.' },
      { step: 4, title: 'Creative Testing & Extension Launch', description: 'A/B testing ad headlines, sitelinks, callouts, and lead form assets.' },
      { step: 5, title: 'Bid Algorithm Calibration', description: 'Shifting to value-based bidding once statistical conversion volume is achieved.' }
    ],
    reportingKPIs: [
      'Cost Per Qualified Lead (CPQL)',
      'Search Impression Share on Core Commercial Terms',
      'Click-Through Rate (CTR) and Conversion Rate (CVR)',
      'Total Verified Inbound Calls & Lead Forms',
      'Return on Ad Spend (ROAS)'
    ],
    clientResponsibilities: [
      'Google Ads billing account funded directly with Google',
      'Fast sales response time to inbound leads (under 15 minutes recommended)',
      'Feedback on lead quality to guide negative keyword adjustments'
    ],
    dependenciesAndExclusions: [
      'Media ad spend is paid directly to Google by client',
      'Ad approvals are subject to Google Advertising Policies',
      'Landing page modifications require access to CMS or hosting environment'
    ],
    timeline: 'Campaigns launch within 7 to 10 business days following tracking validation and strategy approval.',
    pricingModel: 'Base Management Fee + Tiered Ad Spend Percentage',
    startingPrice: '$1,500 / month (or 12% of ad spend, whichever is greater)',
    faqs: [
      {
        question: 'Who pays the advertising spend?',
        answer: 'You pay Google directly with your corporate credit card. We manage, optimize, and steward the budget with complete transparency.'
      },
      {
        question: 'How do you prevent wasted spend on non-buyer clicks?',
        answer: 'We build rigorous negative keyword lists upfront, eliminate broad-match waste, target precise geo-boundaries, and verify every search query weekly.'
      },
      {
        question: 'Do you build the landing pages for PPC campaigns?',
        answer: 'Yes, we provide landing page design and CRO recommendations, and can develop custom dedicated campaign landing pages.'
      }
    ],
    relatedServiceSlugs: ['meta-ads-management', 'landing-page-cro', 'seo-services']
  },
  {
    id: 'meta-ads-management',
    slug: 'meta-ads-management',
    title: 'Meta Ads Management (Facebook & Instagram)',
    shortDescription: 'Full-funnel Meta advertising campaigns that capture demand, generate qualified leads, and retarget interested prospects.',
    businessBenefit: 'Acquire high volumes of targeted business inquiries, bookings, and customer acquisitions profitably.',
    iconName: 'Share2',
    overview: 'We turn Meta into a predictable lead generation engine for your business. From native on-platform lead forms with qualifying friction questions to custom landing page conversion funnels, we focus on lead quality and cost-per-acquisition.',
    problemsSolved: [
      'Low quality Meta leads that sales teams struggle to reach',
      'High creative fatigue causing rising cost-per-lead',
      'Inaccurate Meta Pixel tracking due to browser privacy restrictions',
      'Over-reliance on generic stock photo ads that get ignored',
      'Lack of clear retargeting funnels for website visitors'
    ],
    targetAudience: [
      'Real estate brokers, developers, and premium property consultants',
      'Healthcare and elective clinical practices (dental, aesthetics, wellness)',
      'Direct-to-consumer and specialized e-commerce brands',
      'B2B software, professional services, and training academies'
    ],
    scopeOfWork: [
      'Meta Conversions API (CAPI) server-side integration via GTM',
      'Custom audience creation: Lookalikes, customer match, video viewers',
      'Direct-response creative development (static carousels, short-form video hooks)',
      'Instant Lead Form setup with custom qualifying filter questions',
      'Dynamic retargeting funnels based on interaction depth',
      'CRM webhook automation for immediate sales lead notification',
      'Weekly creative refresh sprints to prevent performance decay'
    ],
    deliverables: [
      'Full Meta Business Manager & CAPI Tracking Setup',
      'Monthly Creative Asset Pack (8 to 16 tested ad variations)',
      'High-Intent Lead Generation Campaign Structure',
      'Instant Lead Webhook Routing to Client CRM or Email/WhatsApp',
      'Weekly Cost-Per-Acquisition & Lead Volume Reporting'
    ],
    processSteps: [
      { step: 1, title: 'Audience Research & Offer Crafting', description: 'Analyzing your ideal client profile and packaging a high-converting hook.' },
      { step: 2, title: 'CAPI & Pixel Hardening', description: 'Installing server-side tracking to capture 95%+ of conversion data reliably.' },
      { step: 3, title: 'Creative Production & Copywriting', description: 'Designing high-contrast visual assets and compelling direct-response copy.' },
      { step: 4, title: 'Controlled Launch & Optimization', description: 'Testing hooks, creative angles, and audience segments at scale.' },
      { step: 5, title: 'Creative Refresh & Budget Scaling', description: 'Scaling winning ad sets while introducing weekly creative iterations.' }
    ],
    reportingKPIs: [
      'Cost Per Verified Lead (CPL)',
      'Lead Quality Qualification Rate (Sales Accepted Leads)',
      'Click-Through Rate (Link CTR)',
      'Cost Per 1,000 Impressions (CPM)',
      'First-Touch to Conversion Velocity'
    ],
    clientResponsibilities: [
      'Admin access to Meta Business Manager, Facebook Page, and Instagram account',
      'Raw product, facility, or team footage if requesting custom brand video assets',
      'Immediate lead follow-up through client sales staff'
    ],
    dependenciesAndExclusions: [
      'Meta ad spend is paid directly by client to Meta',
      'Subject to Meta Advertising Policies (especially special ad categories)',
      'Excludes on-site video production crews unless contracted separately'
    ],
    timeline: 'Initial campaign launch within 5 to 8 business days following asset handover and tracking verification.',
    pricingModel: 'Monthly Retainer + Performance Milestones',
    startingPrice: '$1,400 / month',
    faqs: [
      {
        question: 'How do you prevent junk leads on Meta?',
        answer: 'We add intentional friction to instant lead forms: custom multiple-choice qualifying questions (e.g., budget range, project readiness) and mandatory phone validation.'
      },
      {
        question: 'Do you create the images and video ads?',
        answer: 'Yes! We script, design, and produce high-converting direct-response visual ad creatives as part of the monthly management scope.'
      },
      {
        question: 'How do leads reach our sales team?',
        answer: 'We connect Meta leads directly to your CRM, email inbox, or WhatsApp within seconds via automated webhooks.'
      }
    ],
    relatedServiceSlugs: ['google-ads-ppc', 'video-editing-reels', 'landing-page-cro']
  },
  {
    id: 'website-design-development',
    slug: 'website-design-development',
    title: 'Website Design & Development',
    shortDescription: 'Modern, ultra-fast, mobile-responsive business websites engineered for lead capture, brand credibility, and search visibility.',
    businessBenefit: 'Convert a higher percentage of visitors into qualified business inquiries and sales calls.',
    iconName: 'Layout',
    overview: 'Your website is the single most critical asset in your digital growth infrastructure. We build modern, bespoke websites that load under 1.5 seconds, communicate undeniable brand authority, and guide visitors smoothly into high-intent conversion actions.',
    problemsSolved: [
      'Outdated design that diminishes enterprise brand credibility',
      'Slow loading times causing high visitor bounce rates',
      'Poor mobile experience losing over 65% of mobile search traffic',
      'No clear conversion funnels or strategic call-to-actions',
      'Difficult CMS backends that marketing teams cannot update'
    ],
    targetAudience: [
      'B2B enterprises needing an authoritative digital presence',
      'High-growth startups preparing for funding or commercial scale',
      'Professional service firms (legal, accounting, consultancy, engineering)',
      'Real estate builders and hospitality groups'
    ],
    scopeOfWork: [
      'Information architecture, user journey mapping, and conversion wireframes',
      'Custom UI/UX visual design system matching corporate identity',
      'Fast, modern frontend development (React, Next.js, or lightweight headless CMS)',
      'Full mobile responsiveness across iOS, Android, tablets, and desktop',
      'Technical SEO foundations: Semantic HTML, OpenGraph, JSON-LD schema, sitemaps',
      'Custom lead capture forms with server-side validation and anti-spam protection',
      'Performance optimization: WebP images, lazy loading, sub-2s Core Web Vitals',
      'Cross-browser and multi-device QA testing prior to staging deployment'
    ],
    deliverables: [
      'Interactive Figma UI/UX Design Prototype for Approval',
      'Fully Developed & Deployed Production Website',
      'Technical SEO & Core Web Vitals Optimization Certificate',
      'Integrated Form Handling & Lead Routing to CRM',
      'CMS Admin Walkthrough Video & Documentation'
    ],
    processSteps: [
      { step: 1, title: 'Discovery & Wireframing', description: 'Mapping buyer personas, required pages, conversion goals, and site architecture.' },
      { step: 2, title: 'UI/UX Visual Design', description: 'Designing desktop and mobile mockups with refined typography, colors, and layouts.' },
      { step: 3, title: 'Clean Frontend & Backend Build', description: 'Engineering fast, responsive code with clean semantic markup and form handlers.' },
      { step: 4, title: 'SEO & Performance Optimization', description: 'Configuring metadata, schemas, caching, image compression, and security headers.' },
      { step: 5, title: 'QA, Staging Review & Launch', description: 'Testing form submissions, mobile usability, and seamless domain cutover.' }
    ],
    reportingKPIs: [
      'Core Web Vitals Scores (90+ on Google PageSpeed Insights)',
      'Site-Wide Conversion Rate (% of visitors submitting lead inquiries)',
      'Average Page Load Time (< 1.5 seconds on broadband)',
      'Mobile Bounce Rate Reduction',
      'Form Completion Rate'
    ],
    clientResponsibilities: [
      'Providing brand logos, official brand guidelines, and photography assets',
      'Final approval on copy drafts and design wireframes within agreed review cycles',
      'Access to domain DNS registrar for final launch cutover'
    ],
    dependenciesAndExclusions: [
      'Domain registration and third-party hosting fees are client-borne',
      'Copywriting is included up to agreed page tiers; extensive technical copywriting quoted separately',
      'Custom web application software logic (e.g. ERP integration) scoped as custom engineering'
    ],
    timeline: '3 to 6 weeks from strategy approval to live production launch.',
    pricingModel: 'Fixed Project Investment with Milestone Releases',
    startingPrice: '$2,500 one-time build',
    faqs: [
      {
        question: 'Will our team be able to edit text and images easily?',
        answer: 'Yes. We build clean, modular architectures with intuitive CMS backends and record custom video walkthroughs showing your team how to update content.'
      },
      {
        question: 'Is the website optimized for mobile phones?',
        answer: 'Absolutely. Every layout is engineered mobile-first, ensuring smooth thumb navigation, fast touch interactions, and zero horizontal overflow.'
      },
      {
        question: 'Do you provide ongoing website maintenance?',
        answer: 'Yes, we offer ongoing maintenance, security updates, daily backups, and performance monitoring retainers.'
      }
    ],
    relatedServiceSlugs: ['ecommerce-website-development', 'landing-page-cro', 'seo-services']
  },
  {
    id: 'ecommerce-website-development',
    slug: 'ecommerce-website-development',
    title: 'E-commerce Website Development',
    shortDescription: 'Scalable e-commerce stores designed for high conversion rates, streamlined checkouts, and seamless payment integration.',
    businessBenefit: 'Drive more transactions, reduce cart abandonment, and increase average order value (AOV).',
    iconName: 'ShoppingBag',
    overview: 'We build high-performing e-commerce platforms using Shopify, WooCommerce, or custom headless architectures. Every component—from product category filtering to one-click checkouts and post-purchase upsells—is tuned for maximum revenue per session.',
    problemsSolved: [
      'High shopping cart abandonment rates during checkout',
      'Clunky mobile shopping experience causing lost mobile orders',
      'Slow product page load times degrading customer trust',
      'Inefficient inventory and shipping rate configuration',
      'Missing analytics tracking for checkout funnel drop-offs'
    ],
    targetAudience: [
      'Direct-to-consumer (D2C) retail brands and consumer goods makers',
      'B2B wholesale distributors requiring tier-based buyer pricing',
      'Specialty boutique stores expanding from brick-and-mortar to online',
      'Subscription-based consumer product companies'
    ],
    scopeOfWork: [
      'Store architecture, product taxonomy, and collection hierarchy design',
      'High-converting product detail page (PDP) layout with trust badges and social proof',
      'Optimized cart drawer and frictionless checkout flow',
      'Payment gateway integrations (Stripe, PayPal, Razorpay, Apple Pay)',
      'Automated shipping rate rules, tax calculation, and tracking notifications',
      'E-commerce tracking: Enhanced eCommerce events (view_item, add_to_cart, purchase)',
      'Speed optimization for media-heavy catalog pages'
    ],
    deliverables: [
      'Fully Configured & Designed E-commerce Store',
      'Product Catalog Import & Collection Hierarchy Setup',
      'Secure Payment & Shipping Gateway Integrations',
      'GA4 & Meta Pixel Enhanced E-commerce Tracking Setup',
      'Store Management Operations Guide'
    ],
    processSteps: [
      { step: 1, title: 'Catalog Architecture & Requirements', description: 'Reviewing SKUs, variant requirements, shipping zones, and payment gateways.' },
      { step: 2, title: 'Storefront UI/UX & Brand Styling', description: 'Designing conversion-focused home, collection, product, and cart experiences.' },
      { step: 3, title: 'Platform Development & Configuration', description: 'Setting up products, inventory rules, transactional email templates, and taxes.' },
      { step: 4, title: 'Checkout & Gateway Integration', description: 'Testing end-to-end sandbox payments, coupons, and fulfillment webhooks.' },
      { step: 5, title: 'Live Testing & Launch', description: 'Processing real test transactions and executing live domain deployment.' }
    ],
    reportingKPIs: [
      'Storewide Conversion Rate (Target: 2.5% - 4.2%+)',
      'Average Order Value (AOV)',
      'Cart Abandonment Rate',
      'Mobile Checkout Completion Velocity',
      'Customer Acquisition Cost (CAC) to LTV Ratio'
    ],
    clientResponsibilities: [
      'Product images, titles, descriptions, SKU data, and pricing tables',
      'Active accounts for payment processing gateways (Stripe/PayPal/Razorpay)',
      'Clear shipping rates, return policies, and terms of service documentation'
    ],
    dependenciesAndExclusions: [
      'Payment gateway transaction fees and merchant account approval are client-owned',
      'Third-party app subscription costs (e.g. specialized Shopify apps) paid by client',
      'Manual entry of over 100+ unique products quoted based on catalog volume'
    ],
    timeline: '4 to 8 weeks depending on catalog complexity and custom integration depth.',
    pricingModel: 'Fixed Project Deployment or Retainer + RevShare',
    startingPrice: '$3,800 one-time build',
    faqs: [
      {
        question: 'Which platform do you recommend: Shopify or custom WooCommerce?',
        answer: 'For 90% of D2C brands, Shopify provides unbeatable checkout uptime and security. For complex B2B wholesale pricing with bespoke integrations, WooCommerce or headless architectures excel.'
      },
      {
        question: 'Can you migrate our products from an old store without losing SEO?',
        answer: 'Yes, we map 301 redirects for every old product URL and preserve critical metadata and Google search indexing.'
      },
      {
        question: 'Do you set up abandoned cart recovery emails?',
        answer: 'Yes! Automated abandoned cart sequences and post-purchase follow-ups are integrated into all e-commerce builds.'
      }
    ],
    relatedServiceSlugs: ['landing-page-cro', 'meta-ads-management', 'email-marketing-automation']
  },
  {
    id: 'landing-page-cro',
    slug: 'landing-page-cro',
    title: 'Landing Page Design & CRO',
    shortDescription: 'Conversion-rate-optimized landing pages that match campaign intent, eliminate distractions, and maximize lead generation.',
    businessBenefit: 'Double or triple lead volume from your existing advertising budget without spending more on media.',
    iconName: 'Sparkles',
    overview: 'Sending paid traffic to a generic homepage is the fastest way to waste marketing budget. We engineer dedicated, distraction-free landing pages tailored to specific ad messages, backed by conversion psychology and continuous A/B testing.',
    problemsSolved: [
      'High ad clicks but low form conversions or call inquiries',
      'Homepage navigation distracting paid visitors away from taking action',
      'Weak value proposition and missing social proof above the fold',
      'Long, intimidating forms causing user drop-off',
      'Inability to measure exactly which ad angle converts best'
    ],
    targetAudience: [
      'Companies running Google Ads or Meta Ads with monthly spend over $2,000',
      'B2B software companies driving free demo or trial signups',
      'Real estate brokers launching new property developments',
      'Consultants, financial advisors, and medical specialists'
    ],
    scopeOfWork: [
      'Ad-to-page message match audit and user friction analysis',
      'Direct-response copywriting targeting primary buyer motivations and objections',
      'High-impact hero visual hierarchy and primary action focus',
      'Strategic social proof placement (testimonials, badges, stats) adjacent to claims',
      'Multi-step or single-step micro-commitment form architecture',
      'Heatmap and session recording setup to monitor visitor behavior',
      'A/B split test hypothesis development and headline/CTA experiments'
    ],
    deliverables: [
      'Custom Dedicated Campaign Landing Page (Desktop & Mobile)',
      'Persuasive Direct-Response Sales Copywriting',
      'Lead Form with Real-Time Validation & Spam Shield',
      'Hotjar / Clarity Heatmap & Session Tracking Integration',
      'Bi-Weekly A/B Variant Test Results & Conversion Recommendations'
    ],
    processSteps: [
      { step: 1, title: 'Ad Angle & Audience Alignment', description: 'Reviewing campaign creative copy to ensure 100% thematic message match.' },
      { step: 2, title: 'Wireframe & Friction Removal', description: 'Stripping out navigation links, footers, and distractions to focus on one action.' },
      { step: 3, title: 'Copywriting & Design', description: 'Drafting high-converting headlines, objection busters, and clear value statements.' },
      { step: 4, title: 'Rapid Deployment & Tracking', description: 'Publishing on subdomains with micro-conversion event tagging.' },
      { step: 5, title: 'A/B Testing & Iteration', description: 'Testing variant headlines, form lengths, and proof placements based on click data.' }
    ],
    reportingKPIs: [
      'Landing Page Conversion Rate (Visitor-to-Lead Ratio)',
      'Cost Per Conversion (CPA reduction %)',
      'Form Completion Rate by Step',
      'Scroll Depth & Dwell Time',
      'Mobile Tap Engagement Velocity'
    ],
    clientResponsibilities: [
      'Target campaign ad copies and audience targeting briefs',
      'Verified customer proof quotes and product deliverables details',
      'Subdomain DNS access (e.g. go.yourcompany.com)'
    ],
    dependenciesAndExclusions: [
      'Requires active traffic flow (at least 500-1,000 visitors/month) for meaningful A/B testing',
      'Third-party domain hosting fees are client-borne'
    ],
    timeline: '5 to 7 business days for landing page production and live staging.',
    pricingModel: 'Per-Landing Page Sprint or Monthly CRO Retainer',
    startingPrice: '$1,200 per custom landing page',
    faqs: [
      {
        question: 'Why not just send ad traffic to our existing homepage?',
        answer: 'Homepages have dozens of links, menus, and conflicting goals. Dedicated landing pages remove all distractions, creating a single focused path to action that typically doubles conversion rates.'
      },
      {
        question: 'How do you test which version works best?',
        answer: 'We split incoming traffic 50/50 between Version A and Version B, measure conversion rates with statistical significance, and declare a winner.'
      }
    ],
    relatedServiceSlugs: ['google-ads-ppc', 'meta-ads-management', 'website-design-development']
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    title: 'Social Media Marketing',
    shortDescription: 'Strategic content calendars, branded carousels, reels, captions, and active community engagement for brand authority.',
    businessBenefit: 'Build brand equity, establish industry leadership, and nurture potential buyers into inbound inquiries.',
    iconName: 'Instagram',
    overview: 'We turn your social media channels from ghost towns into active brand assets. We handle concept development, graphic design, copywriting, video repurposing, scheduling, and community interactions across LinkedIn, Instagram, Facebook, and YouTube.',
    problemsSolved: [
      'Inconsistent posting leading to an abandoned brand appearance',
      'Generic template graphics that harm professional credibility',
      'Lack of engagement, comments, and direct message inquiries',
      'No clear bridge connecting organic social posts to sales opportunities',
      'Internal marketing teams too busy to maintain consistent calendars'
    ],
    targetAudience: [
      'B2B brands building executive presence on LinkedIn',
      'Lifestyle, beauty, and healthcare clinics seeking local brand recognition',
      'Real estate agencies highlighting property developments',
      'Professional services cultivating client trust and authority'
    ],
    scopeOfWork: [
      'Monthly strategic content pillar planning and editorial calendar',
      'High-end branded graphic design (carousels, single-image infographics, quotes)',
      'Persuasive, value-rich captions with conversational calls-to-action',
      'Hashtag architecture and audience engagement tactics',
      'Direct message (DM) inquiry monitoring and lead flagging',
      'Monthly performance analysis and reach optimization reviews'
    ],
    deliverables: [
      'Monthly Visual Content Calendar (12 to 24 posts/month)',
      'Custom Branded Carousels & Infographics Pack',
      'Engaging Direct-Response Captions with Hashtag Sets',
      'Multi-Platform Scheduling & Publishing',
      'Monthly Engagement & Follower Growth Analytics Report'
    ],
    processSteps: [
      { step: 1, title: 'Brand Voice & Pillar Definition', description: 'Establishing 3-4 content buckets that educate, build trust, and sell.' },
      { step: 2, title: 'Calendar Blueprint & Scheduling', description: 'Presenting a full month of post topics for client review 10 days in advance.' },
      { step: 3, title: 'Design & Copywriting Sprints', description: 'Crafting visually arresting graphic slides and insightful captions.' },
      { step: 4, title: 'Automated Publishing & Distribution', description: 'Publishing at optimal engagement times across target platforms.' },
      { step: 5, title: 'Interaction & Retrospective', description: 'Reviewing top-performing formats and incorporating insights into the next cycle.' }
    ],
    reportingKPIs: [
      'Organic Reach & Impression Growth',
      'Profile Visits & Website Link Clicks',
      'Engagement Rate (% comments, shares, saves)',
      'Inbound Direct Message (DM) Business Inquiries',
      'Follower Growth of Qualified Target Industry Demographics'
    ],
    clientResponsibilities: [
      'Timely calendar approvals during monthly review windows',
      'Sharing internal business news, team milestones, or event photos',
      'Handling detailed customer service inquiries escalated by our team'
    ],
    dependenciesAndExclusions: [
      'Does not include 24/7 technical customer support for complex product issues',
      'Paid social advertising budgets managed under our Meta Ads service'
    ],
    timeline: 'First 30-day calendar live within 7 business days of brand onboarding.',
    pricingModel: 'Monthly Retainer based on post volume and platform count',
    startingPrice: '$1,200 / month',
    faqs: [
      {
        question: 'Which platforms should our business be active on?',
        answer: 'For B2B services, LinkedIn is paramount. For visual, consumer, local, and healthcare brands, Instagram and Facebook dominate. We guide platform allocation based on where your buyers spend time.'
      },
      {
        question: 'Do we get to approve posts before they go live?',
        answer: 'Yes! You have full visibility into our monthly content portal and approve all graphics and captions before anything is published.'
      }
    ],
    relatedServiceSlugs: ['video-editing-reels', 'graphic-design-branding', 'meta-ads-management']
  },
  {
    id: 'content-marketing',
    slug: 'content-marketing',
    title: 'Content Marketing & SEO Copywriting',
    shortDescription: 'In-depth, SEO-driven articles, whitepapers, case studies, and buyer guides that position your brand as an undeniable market leader.',
    businessBenefit: 'Educate buyers, rank for high-intent queries, and shorten sales cycle lengths.',
    iconName: 'FileText',
    overview: 'High-performing content is not fluff—it solves real commercial problems. We research, write, and distribute authoritative articles and downloadable resources that attract decision-makers, resolve purchasing hesitations, and generate organic inbound inquiries.',
    problemsSolved: [
      'Lack of authoritative content to answer prospect questions during sales conversations',
      'Low website indexing depth and thin content penalties from search engines',
      'Inability to produce regular high-quality thought leadership in-house',
      'Generic AI-generated articles that lack real industry insights'
    ],
    targetAudience: [
      'B2B software, industrial engineering, and enterprise consulting firms',
      'Medical practices and clinical specialists requiring medically sound content',
      'Financial advisors and professional legal practices'
    ],
    scopeOfWork: [
      'Topic cluster and keyword mapping based on customer purchasing journey',
      'Deep research and interview-based outline development',
      'Long-form article writing (1,500 - 3,000 words) with expert positioning',
      'On-page SEO optimization (headers, meta descriptions, internal links)',
      'Custom visual headers, flowcharts, and downloadable lead magnets (PDFs)',
      'Content distribution planning across email newsletters and social channels'
    ],
    deliverables: [
      'Quarterly Editorial Roadmap & Keyword Matrix',
      '4 to 8 In-Depth Researched Articles per Month (with full formatting)',
      'Lead Magnet Ebook / Whitepaper or Buyer Guide (Quarterly)',
      'Content Performance & Lead Attribution Reports'
    ],
    processSteps: [
      { step: 1, title: 'Buyer Persona & Problem Discovery', description: 'Identifying what prospects ask sales reps before signing contracts.' },
      { step: 2, title: 'Topic Cluster Architecture', description: 'Structuring pillar content and supporting spoke articles for search engines.' },
      { step: 3, title: 'Expert Drafting & Peer Review', description: 'Writing substantive, well-cited drafts that reflect real industry knowledge.' },
      { step: 4, title: 'SEO Formatting & Publishing', description: 'Integrating schemas, custom graphics, and contextual lead forms.' },
      { step: 5, title: 'Repurposing & Amplification', description: 'Breaking articles into LinkedIn carousels, newsletter excerpts, and sales collateral.' }
    ],
    reportingKPIs: [
      'Organic Traffic to Educational Content',
      'Average Time on Page & Scroll Depth',
      'Assisted Conversions (Content-assisted leads)',
      'Number of First-Page Keyword Positions Acquired',
      'Lead Magnet Download Volume'
    ],
    clientResponsibilities: [
      'Short 20-minute monthly interview with internal subject matter experts',
      'Reviewing technical terminology for industry accuracy'
    ],
    dependenciesAndExclusions: [
      'Technical legal/medical sign-off remains with client legal/compliance counsel'
    ],
    timeline: 'First batch of pillar content ready for review within 10 business days.',
    pricingModel: 'Monthly Content Retainer or Per-Article Package',
    startingPrice: '$1,500 / month',
    faqs: [
      {
        question: 'Do you use generic AI to generate articles?',
        answer: 'No. While AI helps with initial research clustering, every piece is drafted, fact-checked, edited, and formatted by experienced human marketing strategists with domain expertise.'
      }
    ],
    relatedServiceSlugs: ['seo-services', 'email-marketing-automation', 'social-media-marketing']
  },
  {
    id: 'graphic-design-branding',
    slug: 'graphic-design-branding',
    title: 'Graphic Design & Corporate Branding',
    shortDescription: 'Memorable brand identities, visual guidelines, presentation decks, marketing collateral, and digital advertising assets.',
    businessBenefit: 'Establish executive polish that justifies premium pricing and wins client trust instantly.',
    iconName: 'PenTool',
    overview: 'Design communicates competence before your sales team ever speaks. We create distinctive corporate visual identities—from logos and typography guidelines to sales pitch decks, brochures, and digital ad creative packs that elevate your business above competitors.',
    problemsSolved: [
      'Inconsistent visual identity across marketing touchpoints',
      'Amateur logos and collateral that fail to inspire enterprise confidence',
      'Slow turnaround when sales or marketing teams need creative assets',
      'Lack of clear brand guideline rules for internal staff and partners'
    ],
    targetAudience: [
      'Growing businesses ready to rebrand for the enterprise market',
      'Startups seeking a cohesive identity for pitch decks and website launch',
      'Service companies needing high-impact proposal templates and brochures'
    ],
    scopeOfWork: [
      'Brand discovery, positioning matrix, and moodboard curation',
      'Logo design (primary mark, secondary lockups, favicon, monochrome variations)',
      'Typography hierarchy, custom color palettes, and usage rules',
      'Comprehensive Brand Style Guide PDF documentation',
      'Corporate collateral: Business cards, letterheads, email signatures, presentation decks',
      'Digital asset kits: Social media banners, ad templates, icon sets'
    ],
    deliverables: [
      'Master Brand Identity Kit (Vector files in SVG, EPS, PNG, PDF)',
      'Comprehensive 30+ Page Brand Guidelines Document',
      'Corporate Pitch Deck Template (Figma / PowerPoint / Keynote)',
      'Digital Collateral Pack (Email signatures, social assets, stationery)'
    ],
    processSteps: [
      { step: 1, title: 'Discovery & Competitive Audit', description: 'Reviewing market landscape to find visual differentiation opportunities.' },
      { step: 2, title: 'Concept Exploration', description: 'Presenting 3 distinct visual directions with logo marks and real-world mockups.' },
      { step: 3, title: 'Refinement & Typography Pairing', description: 'Perfecting geometry, kerning, color contrast, and font scale.' },
      { step: 4, title: 'Collateral Design & Guidelines', description: 'Building out presentation templates, stationery, and usage rulebooks.' },
      { step: 5, title: 'Asset Handover & Production Files', description: 'Delivering organized cloud folders with all formats ready for web and print.' }
    ],
    reportingKPIs: [
      'Brand Consistency Score across public channels',
      'Sales Pitch Win Rate Improvement',
      'Marketing Collateral Production Turnaround Velocity'
    ],
    clientResponsibilities: [
      'Providing company backstory, core values, and strategic business goals',
      'Consolidating feedback from key internal stakeholders during review stages'
    ],
    dependenciesAndExclusions: [
      'Physical printing and manufacturing production costs paid to print vendors'
    ],
    timeline: '3 to 5 weeks for full corporate brand identity development.',
    pricingModel: 'Fixed Package or Ongoing Creative Design Retainer',
    startingPrice: '$2,200 project fee',
    faqs: [
      {
        question: 'Do we own the full intellectual property rights to our logo?',
        answer: 'Yes! Upon final project milestone payment, 100% full commercial IP rights are transferred to your company.'
      }
    ],
    relatedServiceSlugs: ['website-design-development', 'video-editing-reels', 'social-media-marketing']
  },
  {
    id: 'video-editing-reels',
    slug: 'video-editing-reels',
    title: 'Video Editing & Reels Production',
    shortDescription: 'High-retention short-form video editing for Instagram Reels, YouTube Shorts, TikTok, and corporate video ads.',
    businessBenefit: 'Capture viral organic attention, increase ad engagement rates, and humanize your brand.',
    iconName: 'Video',
    overview: 'Short-form video is the most engaging medium on the internet today. We transform raw smartphone footage, podcast recordings, or client testimonials into punchy, high-retention vertical videos equipped with kinetic captions, sound design, and viral hooks.',
    problemsSolved: [
      'Great business ideas failing due to boring, unedited video footage',
      'Low audience retention in the first 3 seconds of video playback',
      'High internal production bottlenecks preventing weekly video output',
      'Ad creatives suffering high fatigue without regular video variations'
    ],
    targetAudience: [
      'CEOs and founders building personal brand authority on social media',
      'Real estate agents delivering property walkthrough videos',
      'Healthcare and wellness clinics explaining treatments and patient outcomes',
      'Brands running video-first Meta and TikTok advertising campaigns'
    ],
    scopeOfWork: [
      'Scripting and hook ideation based on viral format research',
      'Professional video editing (pacing, zooms, b-roll overlays, color grade)',
      'Dynamic on-screen kinetic captions with highlighted keywords',
      'Custom sound design, sound effects (SFX), and royalty-free background music',
      'Thumbnail design and cover frame selection',
      'Multi-platform formatting for Reels (9:16), YouTube (16:9), and LinkedIn'
    ],
    deliverables: [
      'Monthly Batch of 8, 16, or 24 Edited Short-Form Reels / Shorts',
      'Hook Variation Testing Cuts for Paid Advertising',
      'Custom Click-Optimized Cover Thumbnails',
      'Cloud Archive of Raw and Master 4K Video Exports'
    ],
    processSteps: [
      { step: 1, title: 'Concept & Hook Scripting', description: 'Supplying bulletproof prompts, questions, or scripts for client recording.' },
      { step: 2, title: 'Raw Footage Ingestion', description: 'Receiving raw video clips via secure cloud upload.' },
      { step: 3, title: 'Editing, B-Roll & Kinetic Typography', description: 'Applying fast-paced cuts, sound effects, and styled animated subtitles.' },
      { step: 4, title: 'Client Review & Revisions', description: 'Time-stamped review through Frame.io for effortless feedback.' },
      { step: 5, title: 'Final Delivery & Platform Optimization', description: 'Exporting in native resolutions ready for immediate publishing.' }
    ],
    reportingKPIs: [
      '3-Second View Rate & Hook Rate (% watching past 3s)',
      'Average Watch Time & Percentage Viewed',
      'Organic Shares and Saves',
      'Video Ad Conversion Rate & Click-Through Rate'
    ],
    clientResponsibilities: [
      'Recording raw clips using provided prompts or smartphones with good lighting',
      'Reviewing draft exports within 48 hours to maintain production schedules'
    ],
    dependenciesAndExclusions: [
      'On-site film crews quoted separately on a per-day filming rate'
    ],
    timeline: '48 to 72 hour turnaround per video batch once raw footage is uploaded.',
    pricingModel: 'Monthly Video Production Subscription',
    startingPrice: '$1,200 / month (batch of 12 edited reels)',
    faqs: [
      {
        question: 'Do we need expensive cameras to record?',
        answer: 'Not at all! Modern iPhones or Android devices with a simple lapel microphone and natural window lighting produce fantastic results when combined with our editing.'
      }
    ],
    relatedServiceSlugs: ['meta-ads-management', 'social-media-marketing', 'graphic-design-branding']
  },
  {
    id: 'email-marketing-automation',
    slug: 'email-marketing-automation',
    title: 'Email Marketing & Automation',
    shortDescription: 'Behavior-triggered email flows, lead nurture drip sequences, newsletters, and lifecycle retention campaigns.',
    businessBenefit: 'Turn cold leads into closed customers on autopilot while driving repeat sales from past clients.',
    iconName: 'Mail',
    overview: 'Email remains the highest-ROI channel in digital marketing. We build automated lifecycle email systems that nurture incoming leads, onboard new clients, re-engage cold contacts, and deliver high-converting broadcast campaigns that consistently generate business inquiries.',
    problemsSolved: [
      'Leads entering the system and going cold because sales reps cannot follow up indefinitely',
      'Low email open rates and spam folder placement due to poor domain reputation',
      'Disorganized contact lists with zero segmenting based on buying interest',
      'Missing automated post-consultation and abandoned inquiry sequences'
    ],
    targetAudience: [
      'B2B organizations with long decision cycles needing continuous nurturing',
      'E-commerce brands seeking higher repeat purchase frequency',
      'High-ticket consultants, coaches, and professional practices'
    ],
    scopeOfWork: [
      'DKIM, SPF, and DMARC technical email deliverability setup',
      'List segmentation based on industry, budget, and behavior triggers',
      'Core automated workflows: Welcome series, lead magnet delivery, nurture drip, re-engagement',
      'Responsive email template design compatible across Gmail, Apple Mail, and Outlook',
      'Direct-response copywriting focused on replies and booking clicks',
      'Bi-weekly or weekly broadcast newsletter production',
      'A/B subject line and sender name split testing'
    ],
    deliverables: [
      'Automated Nurture Drip Sequence (5 to 10 strategically timed emails)',
      'Custom Responsive HTML / Modular Email Templates',
      'Deliverability Domain Health Verification & DMARC Configuration',
      'Monthly Broadcast Campaign Planning & Execution',
      'Open Rate, Click-to-Open, and Lead Attribution Dashboard'
    ],
    processSteps: [
      { step: 1, title: 'Deliverability & Domain Authentication', description: 'Setting up SPF, DKIM, DMARC, and Google Postmaster tools.' },
      { step: 2, title: 'Audience Segmentation & Journey Map', description: 'Defining customer lifecycle stages from initial inquiry to loyal advocate.' },
      { step: 3, title: 'Workflow Copywriting & Template Build', description: 'Writing conversational, high-converting emails that read like 1-on-1 notes.' },
      { step: 4, title: 'Automated Triggers Integration', description: 'Connecting forms, CRMs, and checkout triggers into the email platform.' },
      { step: 5, title: 'Monitoring & Optimization', description: 'Tracking open rates, spam complaints, unsubscribe rates, and conversion replies.' }
    ],
    reportingKPIs: [
      'Deliverability & Inbox Placement Rate (> 98%)',
      'Open Rate (Target: 38% - 52%+ on automated flows)',
      'Click-Through Rate (CTR)',
      'Revenue / Leads Attributed to Email Automation',
      'Unsubscribe & Complaint Rates (< 0.2%)'
    ],
    clientResponsibilities: [
      'Access to email service provider (e.g. Klaviyo, ActiveCampaign, HubSpot, Mailchimp)',
      'DNS access for domain authentication records'
    ],
    dependenciesAndExclusions: [
      'Email marketing software subscription costs (Klaviyo/HubSpot) paid by client',
      'Cold outbound spam scraping is not supported; we focus on opt-in high-converting marketing'
    ],
    timeline: 'Core automation flows live within 10 to 14 business days.',
    pricingModel: 'Monthly Retainer or Flow Setup Package',
    startingPrice: '$1,300 / month',
    faqs: [
      {
        question: 'Which email platform do you work with?',
        answer: 'We specialize in Klaviyo, ActiveCampaign, HubSpot, Brevo, and Mailchimp. We can work within your existing tool or recommend the most cost-effective option.'
      }
    ],
    relatedServiceSlugs: ['whatsapp-crm-automation', 'content-marketing', 'landing-page-cro']
  },
  {
    id: 'whatsapp-crm-automation',
    slug: 'whatsapp-crm-automation',
    title: 'WhatsApp Marketing & CRM Automation',
    shortDescription: 'Instant lead alerts, automated WhatsApp follow-ups, CRM pipeline setup, and two-way conversational bots.',
    businessBenefit: 'Slash lead response times from hours to under 30 seconds and increase sales appointment show-up rates.',
    iconName: 'MessageSquare',
    overview: 'In fast-paced markets, whoever responds to a lead first wins the customer. We implement WhatsApp Business API integrations and CRM automation pipelines that instantly contact new leads, send calendar reminders, and manage your sales pipeline systematically.',
    problemsSolved: [
      'Slow lead response times causing hot prospects to buy from competitors',
      'Sales reps forgetting to follow up with leads after the first phone call',
      'High appointment no-show rates for scheduled consultations',
      'Disorganized lead tracking across spreadsheets and sticky notes'
    ],
    targetAudience: [
      'Real estate brokers needing instant property brochure delivery on WhatsApp',
      'Clinics and healthcare providers scheduling consultations and reminders',
      'B2B service providers qualifying inquiries via interactive conversational flows',
      'Automotive dealerships and education/recruiting agencies'
    ],
    scopeOfWork: [
      'Official Meta WhatsApp Business Cloud API registration & verification',
      'CRM pipeline setup (HubSpot, LeadSquared, Zoho, or custom lightweight CRM)',
      'Instant lead notification triggers (Web form → Instant WhatsApp message in 15 seconds)',
      'Automated qualification chatbot flows (interactive buttons, list pickers)',
      'Automated SMS & WhatsApp appointment reminders (24h and 1h prior)',
      'Sales rep round-robin lead assignment and mobile CRM notifications'
    ],
    deliverables: [
      'Verified WhatsApp Business API Integration',
      'Full CRM Lead Pipeline & Custom Deal Stages',
      'Automated Instant Lead Response & Calendar Reminder Workflows',
      'Pre-Approved WhatsApp Meta Notification Templates',
      'Sales Team CRM Mobile App Onboarding & Training Session'
    ],
    processSteps: [
      { step: 1, title: 'API & Meta Business Verification', description: 'Setting up WhatsApp Business Cloud API and getting display name approval.' },
      { step: 2, title: 'Sales Funnel & Stage Blueprint', description: 'Defining deal stages: New Lead, Qualified, Consultation Booked, Closed.' },
      { step: 3, title: 'Conversation Flow Engineering', description: 'Writing conversational scripts and automated branching logic.' },
      { step: 4, title: 'CRM & Form Webhook Integration', description: 'Connecting website forms, Meta Lead Ads, and landing pages to the engine.' },
      { step: 5, title: 'Live Testing & Staff Onboarding', description: 'Testing real lead routing and training your sales team on the mobile app.' }
    ],
    reportingKPIs: [
      'Lead First-Response Time (Target: < 30 seconds)',
      'WhatsApp Read Rate (> 90%)',
      'Appointment Attendance / Show-Up Rate (+35% typical improvement)',
      'Lead-to-Meeting Conversion Rate',
      'Pipeline Velocity (Days from inquiry to closed deal)'
    ],
    clientResponsibilities: [
      'Dedicated phone number for WhatsApp Business API registration',
      'Corporate verification documents for Meta Business Manager verification',
      'Sales team participation in CRM mobile app training'
    ],
    dependenciesAndExclusions: [
      'Meta WhatsApp Business conversation fees (paid directly to Meta)',
      'Third-party CRM license subscriptions paid directly by client'
    ],
    timeline: '7 to 12 business days for complete API verification and pipeline activation.',
    pricingModel: 'Setup Fee + Monthly Automation Maintenance Retainer',
    startingPrice: '$1,600 setup + $800 / month maintenance',
    faqs: [
      {
        question: 'Can our sales team still reply manually to WhatsApp chats?',
        answer: 'Yes! The platform provides a shared team inbox where multiple sales reps can view, claim, and chat with customers from desktop or mobile.'
      }
    ],
    relatedServiceSlugs: ['meta-ads-management', 'email-marketing-automation', 'google-ads-ppc']
  },
  {
    id: 'influencer-marketing',
    slug: 'influencer-marketing',
    title: 'Influencer Marketing & Creator Partnerships',
    shortDescription: 'Targeted creator outreach, contract negotiation, authentic product placement, and trackable affiliate campaigns.',
    businessBenefit: 'Borrow established credibility and reach high-intent niche audiences through trusted voices.',
    iconName: 'Users',
    overview: 'We connect your brand with vetted creators and industry influencers whose audiences match your ideal customer profile. From contract negotiations and creative briefs to performance tracking and content rights licensing, we handle the entire campaign.',
    problemsSolved: [
      'Partnering with influencers who have fake followers or inflated metrics',
      'Spending money on sponsored posts with zero trackable sales or leads',
      'Endless back-and-forth negotiating creator fees and usage rights',
      'Vague or off-brand creator content that fails to communicate your core message'
    ],
    targetAudience: [
      'D2C consumer products and lifestyle brands',
      'Beauty, wellness, aesthetic clinics, and boutique hospitality',
      'Software and tech tools targeting niche professional communities'
    ],
    scopeOfWork: [
      'Creator discovery, audience authenticity audits, and engagement vetting',
      'Strategic creative briefs aligned with brand goals and key talking points',
      'Outreach, rate negotiation, deliverables contracting, and usage rights licensing',
      'Product gifting, sample fulfillment tracking, and campaign scheduling',
      'Content review, compliance checks (FTC guidelines), and live tracking',
      'Conversion tracking via unique discount codes and UTM attribution links'
    ],
    deliverables: [
      'Curated & Vetted Influencer Shortlist Document',
      'Standardized Creator Legal Agreement & Content Brief',
      'End-to-End Campaign Management & Coordination',
      'High-Resolution Creator Content Library for Paid Ad Whitelisting',
      'Campaign ROI & Sales Attribution Report'
    ],
    processSteps: [
      { step: 1, title: 'Audience Alignment & Budget Matrix', description: 'Defining target demographics and creator tiers (Nano, Micro, Macro).' },
      { step: 2, title: 'Vetting & Outreach', description: 'Auditing engagement rates, audience geography, and past brand integrations.' },
      { step: 3, title: 'Contracting & Briefing', description: 'Securing deliverables, delivery deadlines, and 12-month digital ad usage rights.' },
      { step: 4, title: 'Content Review & Publishing', description: 'Reviewing video drafts prior to live posting and coordinating launch days.' },
      { step: 5, title: 'Whitelisting & Ad Amplification', description: 'Running Meta ads directly from creator handles to scale high-performing clips.' }
    ],
    reportingKPIs: [
      'Direct Sales / Inquiries from Creator Discount Codes & UTMs',
      'Cost Per Engagement (CPE) & Cost Per Acquisition (CPA)',
      'Earned Media Value (EMV)',
      'Creator Whitelisted Ad Return on Ad Spend (ROAS)'
    ],
    clientResponsibilities: [
      'Providing product samples or free service access for creators',
      'Influencer compensation budgets (paid per negotiated contract)'
    ],
    dependenciesAndExclusions: [
      'Influencer fees paid directly or held in escrow; excluded from agency management fee'
    ],
    timeline: '3 to 5 weeks from creator outreach to live published content.',
    pricingModel: 'Campaign Management Fee + Creator Spend Management %',
    startingPrice: '$2,000 per campaign sprint',
    faqs: [
      {
        question: 'Do you work with micro-influencers or macro-celebrities?',
        answer: 'We typically prioritize micro and mid-tier influencers (15k to 150k followers) because they consistently deliver 3x to 5x higher engagement and authentic purchase intent at lower cost.'
      }
    ],
    relatedServiceSlugs: ['meta-ads-management', 'video-editing-reels', 'social-media-marketing']
  },
  {
    id: 'online-reputation-management',
    slug: 'online-reputation-management',
    title: 'Online Reputation Management (ORM)',
    shortDescription: 'Review generation systems, negative content mitigation, review sentiment monitoring, and executive brand protection.',
    businessBenefit: 'Protect your brand credibility, win consumer trust, and prevent lost deals due to unfair online reviews.',
    iconName: 'ShieldCheck',
    overview: 'Before signing a contract or visiting your business, 87% of potential clients look up your reviews. We help you systematically collect 5-star reviews from satisfied clients, suppress or resolve negative feedback, and maintain an impeccable reputation across Google, Trustpilot, and industry review sites.',
    problemsSolved: [
      'Competitors or disgruntled one-off individuals leaving fake negative reviews',
      'Lack of recent, authentic reviews causing prospective clients to hesitate',
      'Low star ratings on Google Maps dragging down local search rankings',
      'No formal process for asking satisfied clients for feedback'
    ],
    targetAudience: [
      'Healthcare clinics, dentists, surgeons, and wellness providers',
      'Real estate agencies and property management firms',
      'Hotels, fine dining, and hospitality brands',
      'B2B enterprise firms sensitive to corporate due-diligence checks'
    ],
    scopeOfWork: [
      'Comprehensive digital sentiment audit across Google, Trustpilot, Glassdoor, and forums',
      'Automated review request funnel (SMS & Email sent to happy customers)',
      'Review interception system (routing unhappy clients to internal resolution forms)',
      'Google review dispute filing and policy-violation removal submissions',
      'Professional review response framework and staff training',
      'Monthly brand sentiment score and star rating tracking'
    ],
    deliverables: [
      'Reputation Audit & Vulnerability Assessment Report',
      'Automated Review Request SMS / Email Campaign Setup',
      'Executive Review Response Playbook for Common Scenarios',
      'Monthly Star Rating & Sentiment Progression Dashboard',
      'Dispute Support for Violating / Spam Reviews'
    ],
    processSteps: [
      { step: 1, title: 'Reputation & Audit Baseline', description: 'Scouring public platforms to identify negative reviews, spam, and rating averages.' },
      { step: 2, title: 'Dispute & Flagging Submissions', description: 'Submitting formal removal appeals for reviews violating platform terms.' },
      { step: 3, title: 'Review Funnel Activation', description: 'Setting up automated triggers to request reviews from customers after successful milestones.' },
      { step: 4, title: 'Response Playbook Implementation', description: 'Publishing polite, professional replies that show readers you care about quality.' },
      { step: 5, title: 'Ongoing Sentinel Monitoring', description: 'Real-time alert notifications whenever a new review or mention appears online.' }
    ],
    reportingKPIs: [
      'Average Star Rating (Target: 4.7+ out of 5.0)',
      'Monthly Volume of New Authentic 5-Star Reviews',
      'Net Sentiment Score (% positive vs negative mentions)',
      'Removal / Resolution Rate of Flagged Reviews',
      'Increase in Direct Website Visits from Local Search Profiles'
    ],
    clientResponsibilities: [
      'Sharing customer contact lists or connecting CRM for review request automation',
      'Commitment to addressing legitimate operational service feedback internally'
    ],
    dependenciesAndExclusions: [
      'Removal of reviews is at the sole discretion of third-party platforms (Google/Trustpilot)',
      'We never post fabricated reviews (violates FTC guidelines and consumer protection laws)'
    ],
    timeline: 'Review collection automation launches in 5 days; noticeable rating lift within 30 to 60 days.',
    pricingModel: 'Monthly Reputation Management Retainer',
    startingPrice: '$950 / month',
    faqs: [
      {
        question: 'Can you delete a bad review on Google?',
        answer: 'If a review violates Google policy (e.g. conflict of interest, offensive content, fake account, ex-employee), we prepare legal and policy evidence to petition Google for removal. For legitimate reviews, we provide diplomatic responses and dilute the impact with dozens of genuine 5-star reviews.'
      }
    ],
    relatedServiceSlugs: ['seo-services', 'whatsapp-crm-automation', 'social-media-marketing']
  },
  {
    id: 'digital-marketing-services',
    slug: 'digital-marketing-services',
    title: 'Integrated Digital Marketing Strategy',
    shortDescription: 'Full-service omnichannel growth engine unifying SEO, paid advertising, conversion funnels, and marketing automation.',
    businessBenefit: 'Align every digital marketing channel into a unified revenue engine with one accountable partner.',
    iconName: 'TrendingUp',
    overview: 'Instead of managing fragmented vendors who blame each other when results lag, our Integrated Digital Marketing program gives your business a dedicated growth team. We connect organic search, paid ads, high-converting web infrastructure, and CRM follow-ups into a cohesive strategy focused strictly on revenue.',
    problemsSolved: [
      'Fragmented marketing efforts operating in silos with no unified strategy',
      'Finger-pointing between ad agencies, web developers, and SEO freelancers',
      'Inability to attribute which channel is actually generating bottom-line revenue',
      'Inconsistent brand messaging across search, social, and email'
    ],
    targetAudience: [
      'Established businesses and mid-market enterprises looking for an end-to-end growth partner',
      'Funded startups scaling customer acquisition across multiple channels',
      'Multi-location service brands requiring coordinated regional marketing'
    ],
    scopeOfWork: [
      'Comprehensive 360-degree digital audit and competitor benchmarking',
      'Integrated omnichannel growth roadmap (SEO + PPC + Meta + CRO + Email)',
      'Dedicated Account Director and bi-weekly executive strategy syncs',
      'Cross-channel attribution and multi-touch pipeline modeling in Looker Studio',
      'Continuous conversion rate optimization across all touchpoints',
      'Quarterly business review (QBR) presentation and budget reallocation'
    ],
    deliverables: [
      'Unified Omnichannel Marketing Master Plan',
      'Executive KPI & Revenue Attribution Dashboard',
      'Integrated Execution across Paid Ads, SEO, and Content',
      'Bi-Weekly Strategic Sync Calls with Senior Growth Director',
      'Quarterly Performance & Growth Forecast Reviews'
    ],
    processSteps: [
      { step: 1, title: 'Enterprise Discovery & Attribution Audit', description: 'Deep-dive into sales economics, customer lifetime value, and past channel performance.' },
      { step: 2, title: 'Strategic Roadmap & Channel Allocation', description: 'Allocating resources between immediate paid demand and compounding organic assets.' },
      { step: 3, title: 'Unified Execution Sprint', description: 'Deploying coordinated campaigns across search, social, web, and CRM simultaneously.' },
      { step: 4, title: 'Attribution & Cross-Channel Optimization', description: 'Optimizing the entire buyer journey from first impression to closed deal.' },
      { step: 5, title: 'Quarterly Strategic Expansion', description: 'Unlocking new channels, entering adjacent target industries, and scaling spend safely.' }
    ],
    reportingKPIs: [
      'Blended Customer Acquisition Cost (CAC)',
      'Total Qualified Pipeline Value Generated',
      'Customer Lifetime Value to CAC Ratio (LTV:CAC)',
      'Overall Return on Marketing Investment (ROMI)',
      'Sales Velocity & Lead-to-Close Conversion Rate'
    ],
    clientResponsibilities: [
      'Executive sponsorship and alignment on core business priorities',
      'Sharing CRM revenue data to enable accurate pipeline attribution'
    ],
    dependenciesAndExclusions: [
      'Third-party media spend paid directly to ad platforms by client'
    ],
    timeline: 'Strategy finalized in 14 days; fully coordinated execution live by day 21.',
    pricingModel: 'Comprehensive Monthly Retainer with Performance Incentives',
    startingPrice: '$3,500 / month',
    faqs: [
      {
        question: 'Why choose an integrated retainer over individual services?',
        answer: 'When SEO, PPC, web design, and CRM automation work together under one strategy, conversion rates rise dramatically and your blended acquisition cost drops by 30-50% compared to fragmented agencies.'
      }
    ],
    relatedServiceSlugs: ['seo-services', 'google-ads-ppc', 'website-design-development']
  }
];
