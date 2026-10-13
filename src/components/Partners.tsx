import { ShieldCheck, Award, Building, CheckCircle2 } from 'lucide-react';
import { BANK_PARTNERS, TRUST_STATS } from '../data/loanData';

export const Partners: React.FC = () => {
  return (
    <section id="partners" className="relative w-full py-20 lg:py-28 bg-white border-y border-[#E1EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider mb-3">
            <Building className="w-3.5 h-3.5 text-[#16834A]" />
            <span>Verified Lending Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B21] tracking-tight">
            Partnered With <span className="text-[#16834A]">40+ Leading Banks</span> & NBFCs
          </h2>
          <p className="text-sm text-[#65756B] mt-3 leading-relaxed">
            Borrow with 100% peace of mind from India’s premier scheduled commercial banks and RBI-authorized financial institutions.
          </p>
        </div>

        {/* Dynamic Partner Cards Grid with generous breathing room */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5 mb-14">
          {BANK_PARTNERS.map((bank) => (
            <div
              key={bank.name}
              className="p-5 rounded-2xl border border-[#E1EAE3] bg-[#F7FAF7] hover:bg-white hover:border-[#16834A] hover:shadow-lg transition-all duration-300 group cursor-default flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-[#E1EAE3] text-[#65756B]">
                    {bank.type}
                  </span>
                  <span className="text-xs font-bold text-[#16834A]">
                    ★ {bank.rating}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-[#172B21] group-hover:text-[#16834A] transition-colors truncate">
                  {bank.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E1EAE3]/80 flex items-center justify-between text-xs">
                <span className="text-[#65756B] text-[11px]">Rates from</span>
                <span className="font-extrabold text-[#16834A]">{bank.minRate}</span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Trust Metrics Cards with generous padding and soft borders */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-8 border-t border-[#E1EAE3]">
          {TRUST_STATS.map((stat) => (
            <div 
              key={stat.label} 
              className="p-6 rounded-2xl bg-[#F0F8F2] border border-[#28A866]/20 text-center hover:shadow-md transition-shadow"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#16834A] tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs font-bold text-[#172B21] uppercase tracking-wider mt-2">
                {stat.label}
              </p>
              <p className="text-xs text-[#65756B] mt-1">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* Compliance & Regulation Reassurance Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-[#65756B] bg-[#F7FAF7] py-4 px-6 rounded-2xl border border-[#E1EAE3]">
          <span className="flex items-center gap-2 font-semibold text-[#172B21]">
            <ShieldCheck className="w-4 h-4 text-[#16834A]" />
            RBI Compliant Marketplace
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-2 font-semibold text-[#172B21]">
            <Award className="w-4 h-4 text-[#16834A]" />
            ISO 27001 Certified Security
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="flex items-center gap-2 font-semibold text-[#172B21]">
            <CheckCircle2 className="w-4 h-4 text-[#16834A]" />
            100% Fair Practice Code Adherence
          </span>
        </div>

      </div>
    </section>
  );
};

export default Partners;
