import { useState } from 'react';
import { 
  User, 
  Home, 
  Briefcase, 
  Car, 
  CarFront, 
  Building2, 
  GraduationCap, 
  Gavel, 
  TrendingUp, 
  ShieldCheck, 
  PiggyBank, 
  Landmark, 
  CreditCard,
  Check, 
  ArrowRight, 
  Percent,
  Sparkles
} from 'lucide-react';
import { ALL_LOAN_CATEGORIES } from '../data/loanData';

interface LoanCategoriesProps {
  onOpenApply?: (category?: string) => void;
}

export const LoanCategories: React.FC<LoanCategoriesProps> = ({ onOpenApply }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'instant' | 'business' | 'advisory'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-5 h-5" />;
      case 'Home': return <Home className="w-5 h-5" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'CarFront': return <CarFront className="w-5 h-5" />;
      case 'Car': return <Car className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Gavel': return <Gavel className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'PiggyBank': return <PiggyBank className="w-5 h-5" />;
      case 'Landmark': return <Landmark className="w-5 h-5" />;
      case 'CreditCard': return <CreditCard className="w-5 h-5" />;
      default: return <Percent className="w-5 h-5" />;
    }
  };

  const filteredCategories = ALL_LOAN_CATEGORIES.filter((item) => {
    if (activeFilter === 'instant') {
      return ['personal', 'used-car', 'vehicle', 'draft'].includes(item.id);
    }
    if (activeFilter === 'business') {
      return ['business', 'home', 'property', 'bidding-service'].includes(item.id);
    }
    if (activeFilter === 'advisory') {
      return ['investment-tips', 'insurance', 'savings-advice', 'fixed-deposit', 'education'].includes(item.id);
    }
    return true;
  });

  return (
    <section id="loans" className="relative w-full py-24 lg:py-32 bg-[#F7FAF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#16834A]" />
              <span>Tailored Financial Catalog</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B21] tracking-tight">
              Loans That Understand <span className="text-[#16834A]">Your Goals</span>
            </h2>
            <p className="text-sm text-[#65756B] mt-3 leading-relaxed">
              Explore our complete suite of customized loans, wealth advisory solutions, and reverse-bidding options with pre-negotiated bank terms.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { id: 'all', label: 'All Services (13)' },
              { id: 'instant', label: 'Instant Loans' },
              { id: 'business', label: 'Home & Business' },
              { id: 'advisory', label: 'Wealth & Advisory' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-[#16834A] text-white shadow-sm'
                    : 'bg-white border border-[#E1EAE3] text-[#65756B] hover:text-[#172B21] hover:border-[#28A866]/40'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid with generous whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCategories.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl border border-[#E1EAE3] p-7 lg:p-8 hover:border-[#16834A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Top Row: Icon + Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-2xl bg-[#F0F8F2] text-[#16834A] flex items-center justify-center border border-[#28A866]/20 group-hover:scale-105 group-hover:bg-[#16834A] group-hover:text-white transition-all">
                    {getIcon(product.icon)}
                  </div>
                  {product.badge && (
                    <span className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider border ${product.badgeColor || 'bg-[#F0F8F2] text-[#16834A] border-[#28A866]/30'}`}>
                      {product.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[#172B21] group-hover:text-[#16834A] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-[#65756B] mt-2 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Metrics Highlight Box */}
                <div className="mt-5 p-4 rounded-2xl bg-[#F7FAF7] border border-[#E1EAE3] grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-[#65756B] uppercase font-bold tracking-wider">Interest Rate</span>
                    <p className="text-sm font-extrabold text-[#16834A] mt-1">{product.interestRate}</p>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#65756B] uppercase font-bold tracking-wider">Max Amount</span>
                    <p className="text-sm font-extrabold text-[#172B21] mt-1">{product.maxAmount}</p>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="mt-5 space-y-2.5">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-[#172B21]">
                      <span className="w-4 h-4 rounded-full bg-[#F0F8F2] flex items-center justify-center shrink-0 border border-[#28A866]/20">
                        <Check className="w-2.5 h-2.5 text-[#16834A] stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="mt-7 pt-5 border-t border-[#E1EAE3]">
                <button
                  type="button"
                  onClick={() => onOpenApply ? onOpenApply(product.name) : null}
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-[#172B21] bg-[#F7FAF7] border border-[#E1EAE3] hover:bg-[#16834A] hover:text-white hover:border-[#16834A] transition-all flex items-center justify-center gap-2 group-hover:shadow-md cursor-pointer"
                >
                  <span>Apply for {product.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LoanCategories;
