import { HOW_IT_WORKS_STEPS } from '../data/loanData';
import { ArrowRight, CheckCircle2, FileText, Zap } from 'lucide-react';

interface HowItWorksProps {
  onOpenApply?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenApply }) => {
  return (
    <section id="how-it-works" className="relative w-full py-24 lg:py-32 bg-white border-y border-[#E1EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#16834A]" />
            <span>Fast & Paperless</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B21] tracking-tight">
            How EkPaisa Works In <span className="text-[#16834A]">3 Simple Steps</span>
          </h2>
          <p className="text-sm text-[#65756B] mt-3 leading-relaxed">
            Experience our 100% digital loan acquisition journey designed to secure you the lowest rates in record time.
          </p>
        </div>

        {/* 3 Step Connected Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {HOW_IT_WORKS_STEPS.map((stepItem) => (
            <div 
              key={stepItem.step}
              className="relative bg-[#F7FAF7] rounded-3xl p-8 border border-[#E1EAE3] hover:border-[#16834A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Step Number Top Badge */}
              <div className="flex items-center justify-between mb-8">
                <span className="w-13 h-13 rounded-2xl bg-white text-[#16834A] border border-[#E1EAE3] group-hover:bg-[#16834A] group-hover:text-white group-hover:border-[#16834A] transition-all flex items-center justify-center font-extrabold text-lg shadow-sm">
                  {stepItem.step}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F0F8F2] text-[#16834A] border border-[#28A866]/30">
                  {stepItem.time}
                </span>
              </div>

              {/* Step Info */}
              <div className="space-y-3 mb-8">
                <h3 className="text-xl font-bold text-[#172B21] group-hover:text-[#16834A] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#65756B] leading-relaxed">
                  {stepItem.description}
                </p>
              </div>

              {/* Step Bottom Highlight */}
              <div className="pt-5 border-t border-[#E1EAE3] flex items-center gap-2.5 text-xs font-semibold text-[#105C38]">
                <CheckCircle2 className="w-4 h-4 text-[#16834A] shrink-0" />
                <span>{stepItem.highlight}</span>
              </div>
            </div>
          ))}

        </div>

        {/* Document Readiness & Checklist Strip */}
        <div className="mt-14 p-8 rounded-3xl bg-[#F0F8F2] border border-[#28A866]/30 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-white border border-[#28A866]/30 flex items-center justify-center text-[#16834A] shrink-0 shadow-xs">
              <FileText className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#172B21]">
                Minimal Documentation Required
              </h4>
              <p className="text-xs sm:text-sm text-[#65756B] mt-1 leading-relaxed">
                All you need is your PAN Card, Aadhaar Number, and 3 Months Bank Statement for instant digital e-KYC.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenApply}
            className="w-full lg:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn shadow-md cursor-pointer shrink-0 flex items-center justify-center gap-2"
          >
            <span>Start Quick Application</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
