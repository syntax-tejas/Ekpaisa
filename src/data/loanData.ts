export interface LoanProduct {
  id: string;
  name: string;
  badge?: string;
  badgeColor?: string;
  interestRate: string;
  maxAmount: string;
  tenure: string;
  features: string[];
  description: string;
  icon: string;
  popular?: boolean;
}

export interface BankPartner {
  name: string;
  shortName: string;
  type: string;
  minRate: string;
  maxAmount: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { 
    label: 'Loans', 
    href: '#loans',
    dropdown: [
      { name: 'Personal Loan', rate: 'From 8.5% p.a.', href: '#loans', icon: 'User' },
      { name: 'Home Loan', rate: 'From 7.9% p.a.', href: '#loans', icon: 'Home' },
      { name: 'Business Loan', rate: 'From 10.5% p.a.', href: '#loans', icon: 'Briefcase' },
      { name: 'Vehicle & Used Car Loan', rate: 'From 8.9% p.a.', href: '#loans', icon: 'Car' },
      { name: 'Property Loan', rate: 'From 10.5% p.a.', href: '#loans', icon: 'Building' },
      { name: 'Education Loan', rate: 'From 9.2% p.a.', href: '#loans', icon: 'GraduationCap' },
    ]
  },
  { label: 'Refer & Earn', href: '#refer' },
  { label: 'Bidding', href: '#bidding' },
  { label: 'EMI Calculator', href: '#calculator' },
  { label: 'Credit Score', href: '#credit-score' },
  { label: 'Blogs', href: '#features' },
  { label: 'AI Assistant', href: '#ai-assistant', isNew: true },
];

export const BANK_PARTNERS: BankPartner[] = [
  { name: 'HDFC Bank', shortName: 'HDFC', type: 'Private Bank', minRate: '10.5%', maxAmount: '₹50 Lakhs', rating: 4.8 },
  { name: 'State Bank of India', shortName: 'SBI', type: 'Public Sector', minRate: '8.5%', maxAmount: '₹35 Lakhs', rating: 4.7 },
  { name: 'ICICI Bank', shortName: 'ICICI', type: 'Private Bank', minRate: '10.75%', maxAmount: '₹50 Lakhs', rating: 4.8 },
  { name: 'Axis Bank', shortName: 'AXIS', type: 'Private Bank', minRate: '10.49%', maxAmount: '₹40 Lakhs', rating: 4.6 },
  { name: 'Kotak Mahindra Bank', shortName: 'KOTAK', type: 'Private Bank', minRate: '10.99%', maxAmount: '₹40 Lakhs', rating: 4.7 },
  { name: 'Tata Capital', shortName: 'TATA', type: 'NBFC', minRate: '11.25%', maxAmount: '₹35 Lakhs', rating: 4.8 },
  { name: 'Bajaj Finserv', shortName: 'BAJAJ', type: 'NBFC', minRate: '11.00%', maxAmount: '₹40 Lakhs', rating: 4.6 },
  { name: 'IndusInd Bank', shortName: 'INDUSIND', type: 'Private Bank', minRate: '10.49%', maxAmount: '₹30 Lakhs', rating: 4.5 },
  { name: 'Federal Bank', shortName: 'FEDERAL', type: 'Private Bank', minRate: '10.75%', maxAmount: '₹25 Lakhs', rating: 4.6 },
  { name: 'IDFC FIRST Bank', shortName: 'IDFC', type: 'Private Bank', minRate: '10.49%', maxAmount: '₹1 Crore', rating: 4.9 },
];

export const TRUST_STATS = [
  { label: 'Reports Generated', value: '2M+', subtext: 'Trusted by borrowers nationwide' },
  { label: 'Banking Partners', value: '50+', subtext: 'RBI-regulated Banks & NBFCs' },
  { label: 'Hidden Charges', value: '₹0', subtext: '100% transparent fee structure' },
  { label: 'Approval Speed', value: '2 Mins', subtext: 'Rapid digital eligibility decision' },
];

export const ALL_LOAN_CATEGORIES: LoanProduct[] = [
  {
    id: 'personal',
    name: 'Personal Loan',
    badge: 'HOT OFFER',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    interestRate: '8.5% p.a.',
    maxAmount: 'Up to ₹50 Lakhs',
    tenure: '12 to 84 Months',
    features: ['Quick digital approval', 'Minimal paperwork required', 'Disbursal within 24 hours', 'No collateral needed'],
    description: 'Instant funds with competitive rates, flexible repayment tenure, and rapid approval for all your urgent lifestyle or medical needs.',
    icon: 'User',
    popular: true,
  },
  {
    id: 'home',
    name: 'Home Loan',
    badge: 'LOW INTEREST',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    interestRate: '7.9% p.a.',
    maxAmount: 'Up to ₹10 Crores',
    tenure: 'Up to 30 Years',
    features: ['Lowest market interest rate', 'Flexible extended tenure', 'PMAY subsidy assistance', 'Doorstep document pickup'],
    description: 'Hassle-free home financing to build, purchase, or renovate your dream house with transparent processing and extended tenures.',
    icon: 'Home',
    popular: true,
  },
  {
    id: 'business',
    name: 'Business Loan',
    badge: 'SCALE UP',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    interestRate: '10.5% p.a.',
    maxAmount: 'Up to ₹2 Crores',
    tenure: '12 to 60 Months',
    features: ['Collateral-free options', 'Working capital & machinery', 'Custom cash flow repayment', 'Fast track for MSMEs'],
    description: 'Tailored financing for inventory, equipment purchase, expansion, and operational cash flow needs with minimal balance sheet friction.',
    icon: 'Briefcase',
    popular: true,
  },
  {
    id: 'used-car',
    name: 'Used Car Loan',
    badge: 'NEW',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    interestRate: '9.2% p.a.',
    maxAmount: 'Up to ₹25 Lakhs',
    tenure: '12 to 84 Months',
    features: ['Up to 100% car valuation', 'Minimal documentation', 'Quick RC transfer support', 'Low monthly EMI'],
    description: 'Drive home pre-owned vehicles with attractive interest rates, instant valuation assessments, and flexible repayment terms.',
    icon: 'CarFront',
    popular: true,
  },
  {
    id: 'vehicle',
    name: 'Vehicle Loan',
    badge: 'AFFORDABLE',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    interestRate: '8.9% p.a.',
    maxAmount: 'Up to ₹50 Lakhs',
    tenure: '12 to 84 Months',
    features: ['New car & bike financing', 'Instant on-road funding', 'Zero foreclosure charges on select banks', 'Special festive rebates'],
    description: 'Finance your new passenger or commercial vehicle with tailored EMI structures from top automobile banking partners.',
    icon: 'Car',
  },
  {
    id: 'property',
    name: 'Property Loan (LAP)',
    badge: 'INSTANT',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    interestRate: '10.5% p.a.',
    maxAmount: 'Up to ₹15 Crores',
    tenure: 'Up to 20 Years',
    features: ['Collateral-based high limits', 'Commercial & residential property', 'Lower interest vs unsecured', 'Flexible overdraft options'],
    description: 'Unlock the liquid value in your residential or commercial real estate for massive capital requirements at deeply reduced interest rates.',
    icon: 'Building2',
  },
  {
    id: 'education',
    name: 'Education Loan',
    badge: 'CAREER BOOST',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    interestRate: '9.2% p.a.',
    maxAmount: 'Up to ₹1.5 Crores',
    tenure: 'Up to 15 Years',
    features: ['Covers 100% of tuition & living expenses', 'Pre-visa disbursal available', 'Moratorium period included', 'Section 80E tax benefits'],
    description: 'Pursue your studies at top Indian and global universities with comprehensive education loans covering tuition, travel, and accommodation.',
    icon: 'GraduationCap',
  },
  {
    id: 'bidding-service',
    name: 'Loan Bidding',
    badge: 'EXCLUSIVE',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    interestRate: 'Market Lowest',
    maxAmount: 'Custom Quote',
    tenure: 'Flexible',
    features: ['Banks compete for your loan', 'Direct rate reduction', 'Transparent live bidding', 'Zero spam calls'],
    description: 'Our proprietary reverse-auction marketplace where multiple verified lenders compete against each other to offer you the lowest interest rate.',
    icon: 'Gavel',
  },
  {
    id: 'investment-tips',
    name: 'Investment Tips',
    badge: 'ADVISORY',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    interestRate: 'Market Alpha',
    maxAmount: 'Any Portfolio',
    tenure: 'Short to Long Term',
    features: ['Curated market insights', 'Mutual fund & ETF strategies', 'Risk-adjusted allocations', 'Retirement planning models'],
    description: 'Smart advisory and actionable guidance to help you allocate surplus funds, build wealth safely, and hedge inflation.',
    icon: 'TrendingUp',
  },
  {
    id: 'insurance',
    name: 'Insurance Consultancy',
    badge: 'PROTECTION',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    interestRate: 'Best Premium',
    maxAmount: 'Comprehensive Cover',
    tenure: 'Annual / Term',
    features: ['Term life & health insurance', 'Compare 20+ top insurers', 'Zero agent commission bias', 'Dedicated claim settlement assist'],
    description: 'Protect your family and assets against unforeseen health and financial emergencies with objective insurance recommendations.',
    icon: 'ShieldCheck',
  },
  {
    id: 'savings-advice',
    name: 'Savings Advice',
    badge: 'FINANCIAL HEALTH',
    badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
    interestRate: 'Up to 7.5% Yield',
    maxAmount: 'High Yield',
    tenure: 'Flexible',
    features: ['Emergency fund setup', 'Debt avalanche strategies', 'High-yield savings accounts', 'Monthly budget audit'],
    description: 'Practical, high-yield cash management techniques to reduce unnecessary loan dependency and accelerate financial independence.',
    icon: 'PiggyBank',
  },
  {
    id: 'fixed-deposit',
    name: 'Fixed Deposit (FD)',
    badge: 'GUARANTEED',
    badgeColor: 'bg-green-100 text-green-800 border-green-300',
    interestRate: 'Up to 9.1% p.a.',
    maxAmount: 'DICGC Insured',
    tenure: '7 Days to 10 Years',
    features: ['Senior citizen extra 0.5%', 'Monthly or quarterly payout', 'Instant loan against FD', 'Premature withdrawal options'],
    description: 'Lock in industry-leading fixed deposit rates with DICGC-insured banks and AAA-rated corporate NBFCs for guaranteed stability.',
    icon: 'Landmark',
  },
  {
    id: 'draft',
    name: 'Draft (Overdraft Facility)',
    badge: 'INSTANT CREDIT',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    interestRate: 'Pay Only for What You Use',
    maxAmount: 'Up to ₹25 Lakhs',
    tenure: 'Revolving',
    features: ['Interest only on utilized amount', 'Anytime withdrawal & repayment', 'No EMI lock-in', 'Pre-approved digital limit'],
    description: 'A flexible revolving credit line for emergencies or business cash crunches. Withdraw anytime and pay interest strictly on days used.',
    icon: 'CreditCard',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: '01',
    title: 'Choose Loan & Check Eligibility',
    description: 'Select your preferred loan product and submit basic income and employment details in under 2 minutes.',
    time: '< 2 mins',
    highlight: 'Zero Impact on CIBIL Score',
  },
  {
    step: '02',
    title: 'Instant Multi-Bank Comparison',
    description: 'Our proprietary engine matches your profile with 40+ top banks and NBFCs, triggering real-time competitive rate bids.',
    time: 'Instantaneous',
    highlight: 'Lowest Interest Guarantee',
  },
  {
    step: '03',
    title: 'Digital Verification & Disbursal',
    description: 'Complete paperless Aadhaar/PAN e-KYC and digital agreement signing. Funds are disbursed directly into your bank account.',
    time: 'Within Hours',
    highlight: '100% Secure & Paperless',
  },
];

export const TRUST_FEATURES = [
  {
    icon: 'ShieldCheck',
    title: 'Bank-Grade 256-Bit SSL Security',
    description: 'Your sensitive personal and financial data is protected with end-to-end military-grade encryption and strict RBI data governance.',
  },
  {
    icon: 'Building',
    title: '40+ RBI-Regulated Lenders',
    description: 'We strictly partner with authorized scheduled commercial banks and RBI-registered NBFCs. No shady lenders or unverified intermediaries.',
  },
  {
    icon: 'Coins',
    title: '100% Free & Zero Hidden Charges',
    description: 'Our loan comparison and marketplace platform is 100% free for borrowers. You never pay a single rupee in hidden brokerage or secret fees.',
  },
  {
    icon: 'Clock',
    title: 'Rapid 2-Hour Digital Disbursal',
    description: 'Through streamlined API integrations with partner banking networks, approved loans are processed and wired straight to your account.',
  },
  {
    icon: 'Award',
    title: 'ISO 27001 Certified Infrastructure',
    description: 'Our systems adhere to international standards of information security management and data protection protocols.',
  },
  {
    icon: 'Headphones',
    title: '24/7 Dedicated Financial Support',
    description: 'Get round-the-clock telephone and chat assistance from our certified loan specialists from application to final EMI closure.',
  },
];

export const ORIGINAL_FAQS: FAQItem[] = [
  {
    category: 'Data & Security',
    question: 'How secure is my personal data with Ekpaisa?',
    answer: 'We use bank-level 256-bit SSL encryption and comply with RBI data security guidelines. Your information is stored in secure, certified data centers and never shared without your explicit consent.',
  },
  {
    category: 'Disbursal & Timeline',
    question: 'How quickly will I receive the loan amount?',
    answer: 'Most approved loans are disbursed within a few days. During business hours, you could receive funds in as little as a few hours after approval.',
  },
  {
    category: 'Eligibility',
    question: 'What are the basic eligibility criteria?',
    answer: 'You need to be an Indian citizen aged 21-60, have a stable income source, valid KYC documents (Aadhaar/PAN), and an active bank account. Minimum monthly income requirement is ₹15,000.',
  },
  {
    category: 'Regulation & Safety',
    question: "Are Ekpaisa's partner banks regulated by the government?",
    answer: "Yes, we partner with RBI-regulated NBFCs and banks, operating fully within the legal framework. All our financial partners are registered and regulated by the Reserve Bank of India.",
  },
  {
    category: 'Loan Limits',
    question: 'What is the maximum loan amount I can get?',
    answer: 'First-time customers can get up to ₹2 lakhs. Returning customers with good repayment history can get up to ₹50 lakhs based on their eligibility and credit assessment.',
  },
  {
    category: 'Credit Score',
    question: 'Does checking my credit score or loan eligibility on EkPaisa harm my CIBIL score?',
    answer: 'No! Checking your credit score or comparing loan rates on EkPaisa triggers a "Soft Inquiry", which has zero negative impact on your official credit score.',
  },
  {
    category: 'Loan Bidding',
    question: 'How does the EkPaisa Loan Bidding platform work?',
    answer: 'Once you submit your loan requirement, multiple partner banks view your anonymized credit profile and compete by bidding lower interest rates and reduced processing charges to win your loan.',
  },
  {
    category: 'Fees & Charges',
    question: 'Does EkPaisa charge any upfront fees to loan applicants?',
    answer: 'No. EkPaisa is 100% free for applicants. We never ask for upfront payments, application processing fees, or guarantee deposits from customers.',
  },
];

export const FOOTER_DATA = {
  tagline: 'Financial Freedom, Simplified. Your trusted partner for all financial needs.',
  customerCare: '+91 8588808538',
  workingHours: 'Mon-Sun: 9:00 AM - 9:00 PM',
  email: 'team@ekpaisa.in',
  address: 'Kaushambi, Ghaziabad, Uttar Pradesh, India',
  copyright: '© 2026 EkPaisa Financial Services. All rights reserved.',
  disclaimer: 'EkPaisa is a digital financial marketplace connecting borrowers with RBI-regulated banks and NBFCs. EkPaisa does not directly lend money or charge upfront approval fees. Loan approval, interest rates, and loan disbursal are subject to the respective lender’s credit policies and verification.',
  links: {
    products: [
      { name: 'Personal Loan', href: '#loans' },
      { name: 'Home Loan', href: '#loans' },
      { name: 'Business Loan', href: '#loans' },
      { name: 'Education Loans', href: '#loans' },
      { name: 'Used Car Loan', href: '#loans' },
      { name: 'Property Loan', href: '#loans' },
    ],
    company: [
      { name: 'About Us', href: '#features' },
      { name: 'Careers', href: '#features' },
      { name: 'Contact', href: '#footer-contact' },
      { name: 'Press & Media', href: '#features' },
      { name: 'Partner With Us', href: '#partners' },
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Help Center', href: '#footer-contact' },
      { name: 'Documentation', href: '#how-it-works' },
      { name: 'Application Status', href: '#hero' },
      { name: 'EMI Calculator', href: '#calculator' },
      { name: 'CIBIL Score Check', href: '#credit-score' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Use', href: '#' },
      { name: 'Disclaimer', href: '#' },
      { name: 'Grievance Redressal', href: '#' },
      { name: 'RBI Fair Practice Code', href: '#' },
      { name: 'Security Measures', href: '#' },
    ],
  },
  social: [
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61582909014647' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/ekpaisa/' },
    { name: 'Instagram', url: 'https://www.instagram.com/ekpaisa.in' },
    { name: 'Twitter / X', url: 'https://x.com/ekpaisa_' },
  ],
};
