import { 
  Gavel, 
  ArrowRight, 
  TrendingDown, 
  ShieldCheck, 
  Building2, 
  CheckCircle2
} from 'lucide-react';

interface BiddingPlatformProps {
  onOpenApply?: (category?: string) => void;
}

export const BiddingPlatform: React.FC<BiddingPlatformProps> = ({ onOpenApply }) => {
  const simulatedBids = [
    { lender: 'HDFC Bank', initial: '10.5%', bid: '9.85%', saving: '₹14,200', time: '2m ago' },
    { lender: 'ICICI Bank', initial: '10.75%', bid: '9.70%', saving: '₹18,500', time: '1m ago', isLowest: true },
    { lender: 'Tata Capital', initial: '11.20%', bid: '9.90%', saving: '₹12,800', time: '4m ago' },
  ];

  return (
    <section id="bidding" className="relative w-full py-24 lg:py-32 bg-[#F0F8F2] border-b border-[#E1EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider">
                <Gavel className="w-3.5 h-3.5 text-[#16834A]" />
                <span>Proprietary Reverse Auction</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B21] tracking-tight leading-[1.15]">
              Looking for the Best Loan Rates? <br />
              <span className="text-[#16834A]">Make Banks Compete for You</span>
            </h2>

            <p className="text-sm sm:text-base text-[#65756B] leading-relaxed">
              Why settle for a single bank's fixed quote? On the EkPaisa Bidding Platform, your anonymized requirement is presented to 40+ lenders who bid lower interest rates and reduced processing charges to win your loan.
            </p>

            <div className="space-y-4 pt-1">
              {[
                { title: 'Reverse Auction Dynamics', desc: 'Lenders actively bid down their margins, saving you tens of thousands in lifetime interest.' },
                { title: 'Zero Harassment Calls', desc: 'Your personal phone number stays 100% confidential until you accept a winning bid.' },
                { title: 'Complete Decision Control', desc: 'Compare tenure, processing fees, and EMI structures side by side without obligation.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 border border-[#28A866]/30">
                    <CheckCircle2 className="w-4 h-4 text-[#16834A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#172B21]">{item.title}</h4>
                    <p className="text-xs text-[#65756B] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <button
                type="button"
                onClick={() => onOpenApply ? onOpenApply('Loan Bidding') : null}
                className="px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn shadow-lg flex items-center gap-2.5 cursor-pointer hover:shadow-xl transition-all"
              >
                <span>Go to Bidding Platform</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Live Simulated Bidding Board */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#E1EAE3] shadow-2xl">
              
              <div className="flex items-center justify-between pb-5 border-b border-[#E1EAE3]">
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16834A] bg-[#F0F8F2] px-2.5 py-1 rounded-md border border-[#28A866]/20">
                    Live Demo Case
                  </span>
                  <h3 className="text-lg font-bold text-[#172B21] mt-2">
                    Requirement: ₹10,00,000 Personal Loan
                  </h3>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-[#16834A] flex items-center gap-1.5 justify-end">
                    <span className="w-2 h-2 rounded-full bg-[#16834A] animate-ping" />
                    Bidding Open
                  </span>
                  <span className="text-[11px] text-[#65756B] mt-0.5 block">3 Verified Lenders</span>
                </div>
              </div>

              {/* Bids List */}
              <div className="mt-6 space-y-4">
                {simulatedBids.map((bid) => (
                  <div
                    key={bid.lender}
                    className={`p-5 rounded-2xl border transition-all ${
                      bid.isLowest 
                        ? 'bg-[#F0F8F2] border-[#16834A] ring-1 ring-[#16834A]/20 shadow-sm' 
                        : 'bg-[#F7FAF7] border-[#E1EAE3]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white border border-[#E1EAE3] flex items-center justify-center font-bold text-xs text-[#16834A] shadow-xs">
                          <Building2 className="w-5 h-5 text-[#16834A]" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-[#172B21]">{bid.lender}</p>
                          <p className="text-xs text-[#65756B] line-through mt-0.5">Standard: {bid.initial}</p>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="flex items-center gap-1.5 justify-end">
                          <TrendingDown className="w-4 h-4 text-[#16834A]" />
                          <span className="text-base font-extrabold text-[#16834A]">{bid.bid} p.a.</span>
                        </div>
                        <p className="text-xs font-semibold text-[#105C38] mt-0.5">
                          Saves {bid.saving}
                        </p>
                      </div>
                    </div>

                    {bid.isLowest && (
                      <div className="mt-3 pt-3 border-t border-[#28A866]/30 flex items-center justify-between text-xs">
                        <span className="text-[#105C38] font-bold">✨ Current Winning Bid</span>
                        <span className="text-[#65756B]">{bid.time}</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Bidding guarantee note */}
              <div className="mt-6 p-4 bg-[#F7FAF7] rounded-2xl border border-[#E1EAE3] flex items-center justify-between text-xs text-[#65756B]">
                <span className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#16834A]" />
                  Zero obligations until accepted.
                </span>
                <span className="text-xs font-extrabold text-[#16834A]">100% Free Service</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BiddingPlatform;
