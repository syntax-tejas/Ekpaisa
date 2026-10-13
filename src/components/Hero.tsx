import { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Calculator, 
  Building2, 
  TrendingUp,
  Percent,
  Lock,
  User,
  Home as HomeIcon,
  Briefcase,
  Plane
} from 'lucide-react';

interface HeroProps {
  onOpenApply?: (category?: string, amount?: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenApply }) => {
  const [selectedLoanType, setSelectedLoanType] = useState('Personal');
  const [monthlySalary, setMonthlySalary] = useState(45000);
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  // Live calculation of estimated eligible borrowing power based on standard multiplier (15-20x salary)
  const estimatedLimit = Math.round((monthlySalary * 18) / 10000) * 10000;
  const lowestRate = selectedLoanType === 'Home' ? '7.9%' : selectedLoanType === 'Personal' ? '8.5%' : selectedLoanType === 'Business' ? '10.5%' : '8.9%';

  const handleApplyTrigger = () => {
    if (onOpenApply) {
      onOpenApply(`${selectedLoanType} Loan`, estimatedLimit);
    }
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-[92vh] pt-28 pb-20 lg:pt-36 lg:pb-28 mesh-glow-bg flex items-center overflow-hidden"
    >
      {/* Decorative Subtle Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-br from-[#28A866]/10 to-[#16834A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-16 right-16 w-96 h-96 bg-[#F0F8F2] rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Messaging, Trust Signals, and Conversion CTAs */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col gap-6">
            
            {/* Eyebrow Badge */}
            <div>
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] shadow-xs">
                <span className="w-2.5 h-2.5 rounded-full bg-[#16834A] animate-pulse-subtle" />
                <span className="text-xs font-bold uppercase tracking-wider">
                  EkPaisa Finance Center
                </span>
                <span className="text-[#65756B]">•</span>
                <span className="text-xs font-semibold text-[#16834A]">
                  India's Loan Mission
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#172B21] leading-[1.14]">
              India's Loan Mission With{' '}
              <span className="text-gradient-emerald">EkPaisa</span>
            </h1>

            {/* Subheading & Core Value Proposition */}
            <p className="text-base sm:text-lg text-[#65756B] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Partnering with <strong className="text-[#172B21] font-semibold">40+ top banks and NBFCs</strong> for rapid digital approvals and the lowest interest rates. Compare offers, inspect zero-hidden-fee terms, and unlock transparent credit.
            </p>

            {/* Quick Value Points */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E1EAE3] shadow-xs">
                <ShieldCheck className="w-4 h-4 text-[#16834A] shrink-0" />
                <span className="text-xs font-semibold text-[#172B21]">RBI-Regulated Lenders</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E1EAE3] shadow-xs">
                <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                <span className="text-xs font-semibold text-[#172B21]">Zero CIBIL Impact</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E1EAE3] shadow-xs">
                <Percent className="w-4 h-4 text-[#16834A] shrink-0" />
                <span className="text-xs font-semibold text-[#172B21]">Rates from 7.9% p.a.</span>
              </div>
            </div>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={handleApplyTrigger}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm text-white emerald-gradient-btn shadow-lg cursor-pointer flex items-center justify-center gap-2.5 group"
              >
                <span>Check Eligibility & Apply</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#calculator"
                className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-sm text-[#172B21] bg-white border border-[#E1EAE3] hover:border-[#16834A] hover:bg-[#F0F8F2] transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-[#16834A]" />
                <span>Calculate Interest & EMI</span>
              </a>
            </div>

            {/* Reassuring Microcopy */}
            <p className="text-xs text-[#65756B] flex items-center justify-center lg:justify-start gap-1.5 pt-1">
              <Lock className="w-3.5 h-3.5 text-[#16834A]" />
              <span>Soft inquiry validation. Bank-grade 256-bit SSL encryption.</span>
            </p>
          </div>

          {/* Right Column: Interactive 2-Step Financial Eligibility Experience */}
          <div className="lg:col-span-5 w-full">
            <div className="relative glass-panel rounded-3xl p-7 sm:p-8 shadow-2xl border border-[#E1EAE3] bg-white/95">
              
              {/* Header Badge & Title */}
              <div className="flex items-center justify-between pb-5 border-b border-[#E1EAE3]">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16834A] bg-[#F0F8F2] px-2.5 py-1 rounded-md border border-[#28A866]/20">
                    Step {activeStep} of 2 Discovery
                  </span>
                  <h2 className="text-lg font-bold text-[#172B21] mt-2">
                    Instant Loan Eligibility Check
                  </h2>
                </div>

                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F0F8F2] border border-[#28A866]/20">
                  <span className="w-2 h-2 rounded-full bg-[#16834A] animate-ping" />
                  <span className="text-[11px] font-bold text-[#105C38]">Live Engine</span>
                </div>
              </div>

              {/* Step Tabs */}
              <div className="grid grid-cols-2 gap-2.5 mt-5 mb-6">
                <button
                  type="button"
                  onClick={() => setActiveStep(1)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeStep === 1 
                      ? 'bg-[#16834A] text-white shadow-sm' 
                      : 'bg-[#F7FAF7] text-[#65756B] hover:text-[#172B21]'
                  }`}
                >
                  1. Loan Category
                </button>
                <button
                  type="button"
                  onClick={() => setActiveStep(2)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                    activeStep === 2 
                      ? 'bg-[#16834A] text-white shadow-sm' 
                      : 'bg-[#F7FAF7] text-[#65756B] hover:text-[#172B21]'
                  }`}
                >
                  2. Income Validation
                </button>
              </div>

              {/* Step 1: Category Selection */}
              {activeStep === 1 && (
                <div className="space-y-5">
                  <label className="block text-xs font-bold text-[#65756B] uppercase tracking-wider">
                    Select Your Goal / Purpose
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'Personal', name: 'Personal Loan', rate: 'from 8.5%', desc: 'Urgent cash & bills', icon: User },
                      { id: 'Home', name: 'Home Loan', rate: 'from 7.9%', desc: 'Purchase & build', icon: HomeIcon },
                      { id: 'Business', name: 'Business Loan', rate: 'from 10.5%', desc: 'Working capital', icon: Briefcase },
                      { id: 'Travel', name: 'Travel & Lifestyle', rate: 'from 9.5%', desc: 'Vacation & leisure', icon: Plane },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = selectedLoanType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedLoanType(item.id)}
                          className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#F0F8F2] border-[#16834A] ring-2 ring-[#16834A]/20 shadow-sm'
                              : 'bg-[#F7FAF7] border-[#E1EAE3] hover:border-[#28A866]/50 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1.5">
                            <span className="p-1 rounded-md bg-white border border-[#E1EAE3]">
                              <Icon className="w-3.5 h-3.5 text-[#16834A]" />
                            </span>
                            <span className="text-[10px] font-extrabold text-[#16834A]">{item.rate}</span>
                          </div>
                          <p className="text-xs font-bold text-[#172B21]">{item.name}</p>
                          <p className="text-[11px] text-[#65756B] mt-0.5">{item.desc}</p>
                        </button>
                      );
                    })}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="w-full py-3.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn flex items-center justify-center gap-2 cursor-pointer mt-4 shadow-md"
                  >
                    <span>Proceed to Salary Step</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Step 2: Salary Input and Live Preview */}
              {activeStep === 2 && (
                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-xs font-bold text-[#65756B] uppercase tracking-wider">
                        Monthly Net In-Hand Salary
                      </label>
                      <span className="text-base font-extrabold text-[#16834A]">
                        ₹{monthlySalary.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <input
                      type="range"
                      min="15000"
                      max="250000"
                      step="5000"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(Number(e.target.value))}
                      className="w-full mt-2"
                    />

                    <div className="flex justify-between text-[11px] text-[#65756B] mt-2 font-medium">
                      <span>₹15,000 (Min)</span>
                      <span>₹1,00,000</span>
                      <span>₹2,50,000+</span>
                    </div>
                  </div>

                  {/* Calculated Result Card */}
                  <div className="p-5 rounded-2xl bg-[#F0F8F2] border border-[#28A866]/30 space-y-3">
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs font-bold text-[#105C38]">
                        Estimated Eligible Loan Amount:
                      </span>
                      <span className="text-xl font-extrabold text-[#16834A]">
                        ₹{estimatedLimit.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#28A866]/20 text-xs">
                      <div>
                        <span className="text-[11px] text-[#65756B]">Indicative Rate:</span>
                        <p className="font-extrabold text-[#172B21] mt-0.5">{lowestRate} p.a.</p>
                      </div>
                      <div>
                        <span className="text-[11px] text-[#65756B]">Est. Monthly EMI:</span>
                        <p className="font-extrabold text-[#172B21] mt-0.5">
                          ₹{Math.round((estimatedLimit * 0.045)).toLocaleString('en-IN')}/mo
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleApplyTrigger}
                    className="w-full py-4 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Check Pre-Approved Offers</span>
                    <Sparkles className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Bottom Trust Row inside Card */}
              <div className="mt-5 pt-4 border-t border-[#E1EAE3] flex items-center justify-between text-[11px] text-[#65756B]">
                <span className="flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#16834A]" />
                  256-Bit SSL Safe
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <Building2 className="w-4 h-4 text-[#16834A]" />
                  40+ Bank Partners
                </span>
                <span className="flex items-center gap-1.5 font-medium">
                  <TrendingUp className="w-4 h-4 text-[#16834A]" />
                  0 Hidden Fees
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
