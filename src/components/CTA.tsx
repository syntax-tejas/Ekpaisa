import { ArrowRight, PhoneCall, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenApply?: () => void;
}

export const CTA: React.FC<CTAProps> = ({ onOpenApply }) => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#F7FAF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Card */}
        <div className="relative rounded-3xl p-10 sm:p-14 lg:p-20 overflow-hidden bg-gradient-to-br from-[#105C38] via-[#16834A] to-[#28A866] text-white shadow-2xl">
          
          {/* Subtle Ambient Decorative Glows */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-black/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-7">
            
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider">
                <Zap className="w-4 h-4 text-white" />
                <span>Zero Brokerage • Direct Bank Sanctions</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15]">
              Ready to Secure India’s Lowest Loan Rate?
            </h2>

            <p className="text-sm sm:text-base text-white/90 max-w-2xl mx-auto font-normal leading-relaxed">
              Join over 2,000,000+ happy borrowers who compared quotes, negotiated with lenders, and funded their ambitions with zero hassle.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
              <button
                type="button"
                onClick={onOpenApply}
                className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-sm bg-white text-[#105C38] hover:bg-[#F0F8F2] shadow-xl hover:scale-102 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <span>Check Eligibility & Apply Now</span>
                <ArrowRight className="w-4 h-4 text-[#16834A]" />
              </button>

              <a
                href="tel:+918588808538"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-sm bg-white/15 hover:bg-white/25 border border-white/30 text-white backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Expert: +91 8588808538</span>
              </a>
            </div>

            {/* Microcopy Trust Row */}
            <div className="pt-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-white/85">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Zero Impact on CIBIL
              </span>
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                100% Free Marketplace
              </span>
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Disbursals in Hours
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTA;
