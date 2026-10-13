import { 
  ShieldCheck, 
  Building, 
  Coins, 
  Clock, 
  Award, 
  Headphones, 
  Sparkles, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { TRUST_FEATURES } from '../data/loanData';

interface FeaturesProps {
  onOpenApply?: (category?: string) => void;
}

export const Features: React.FC<FeaturesProps> = ({ onOpenApply }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#16834A]" />;
      case 'Building': return <Building className="w-5 h-5 text-[#16834A]" />;
      case 'Coins': return <Coins className="w-5 h-5 text-[#16834A]" />;
      case 'Clock': return <Clock className="w-5 h-5 text-[#16834A]" />;
      case 'Award': return <Award className="w-5 h-5 text-[#16834A]" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#16834A]" />;
      default: return <Sparkles className="w-5 h-5 text-[#16834A]" />;
    }
  };

  return (
    <section id="features" className="relative w-full py-24 lg:py-32 bg-[#F7FAF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#16834A]" />
            <span>Why Choose EkPaisa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B21] tracking-tight">
            One Platform. <span className="text-[#16834A]">Smarter Financial Choices.</span>
          </h2>
          <p className="text-sm text-[#65756B] mt-3 leading-relaxed">
            From algorithmic rate discovery to transparent bank bidding, discover how EkPaisa transforms how India secures personal and business capital.
          </p>
        </div>

        {/* 3 Main Pillars Editorial Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Pillar 1: Personal Loan */}
          <div className="bg-white rounded-3xl p-8 lg:p-9 border border-[#E1EAE3] hover:border-[#16834A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16834A] bg-[#F0F8F2] px-3 py-1 rounded-md border border-[#28A866]/20">
                Fast Cash Flow
              </span>
              <h3 className="text-2xl font-bold text-[#172B21] mt-4">
                Personal Loans Up to ₹50 Lakhs
              </h3>
              <p className="text-xs sm:text-sm text-[#65756B] mt-3 leading-relaxed">
                Whether consolidating debt or handling unexpected medical costs, access pre-screened unsecured personal loans with rapid paperless sanctioning.
              </p>
              <div className="mt-6 pt-5 border-t border-[#E1EAE3] space-y-2.5 text-xs text-[#172B21]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>Rates starting from 8.5% p.a.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>Flexible tenure up to 84 months</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenApply && onOpenApply('Personal Loan')}
              className="mt-8 text-xs font-bold text-[#16834A] hover:text-[#105C38] flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Personal Loan</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 2: Business Loans */}
          <div className="bg-white rounded-3xl p-8 lg:p-9 border border-[#E1EAE3] hover:border-[#16834A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16834A] bg-[#F0F8F2] px-3 py-1 rounded-md border border-[#28A866]/20">
                Enterprise Growth
              </span>
              <h3 className="text-2xl font-bold text-[#172B21] mt-4">
                Business Loans for Expansion
              </h3>
              <p className="text-xs sm:text-sm text-[#65756B] mt-3 leading-relaxed">
                Supercharge inventory, purchase equipment, and sustain operational payroll with tailored MSME and commercial financing options.
              </p>
              <div className="mt-6 pt-5 border-t border-[#E1EAE3] space-y-2.5 text-xs text-[#172B21]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>Collateral-free options available</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>Fast sanction within 48 hours</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenApply && onOpenApply('Business Loan')}
              className="mt-8 text-xs font-bold text-[#16834A] hover:text-[#105C38] flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Business Loan</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Pillar 3: Home Loans */}
          <div className="bg-white rounded-3xl p-8 lg:p-9 border border-[#E1EAE3] hover:border-[#16834A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16834A] bg-[#F0F8F2] px-3 py-1 rounded-md border border-[#28A866]/20">
                Dream Housing
              </span>
              <h3 className="text-2xl font-bold text-[#172B21] mt-4">
                Home Loans at Low Interest
              </h3>
              <p className="text-xs sm:text-sm text-[#65756B] mt-3 leading-relaxed">
                Get the lowest home loan interest rates in India starting at 7.9% p.a., with seamless balance transfer options to cut your current EMI in half.
              </p>
              <div className="mt-6 pt-5 border-t border-[#E1EAE3] space-y-2.5 text-xs text-[#172B21]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>Competitive rates starting at 7.9%</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                  <span>Extended tenure up to 30 years</span>
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onOpenApply && onOpenApply('Home Loan')}
              className="mt-8 text-xs font-bold text-[#16834A] hover:text-[#105C38] flex items-center gap-2 cursor-pointer group"
            >
              <span>Explore Home Loan</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

        {/* 6 Grid Trust & Security Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-white border border-[#E1EAE3] hover:border-[#16834A] hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-[#F0F8F2] shrink-0 border border-[#28A866]/20">
                {getIcon(feature.icon)}
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#172B21]">
                  {feature.title}
                </h4>
                <p className="text-xs text-[#65756B] mt-1.5 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
