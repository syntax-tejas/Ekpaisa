import { useState } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Lock, 
  AlertCircle
} from 'lucide-react';

export const CreditScore: React.FC = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [simulatedScore, setSimulatedScore] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckScore = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!mobileNumber || !/^[6-9]\d{9}$/.test(mobileNumber.trim())) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Generate a realistic high credit score for demonstration
      setSimulatedScore(774);
    }, 800);
  };

  const getScoreRating = (score: number) => {
    if (score >= 750) return { label: 'Excellent', text: 'Top 10% borrower tier. Eligible for lowest interest rates across all partner banks.' };
    if (score >= 650) return { label: 'Good', text: 'Eligible for pre-approved personal loans with standard verification.' };
    return { label: 'Needs Improvement', text: 'We offer credit rebuilding tools to boost your score.' };
  };

  return (
    <section id="credit-score" className="relative w-full py-24 lg:py-32 bg-white border-y border-[#E1EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Messaging & Reassurance */}
          <div className="lg:col-span-6 space-y-7">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#16834A]" />
                <span>100% Free For a Limited Time</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#172B21] tracking-tight leading-[1.15]">
              Check Your Credit Score <br />
              <span className="text-[#16834A]">In Under 2 Minutes</span>
            </h2>

            <p className="text-sm sm:text-base text-[#65756B] leading-relaxed">
              Get an instant, comprehensive CIBIL analysis and discover which banks have pre-approved loan offers waiting for you.
            </p>

            {/* Value checklist */}
            <div className="space-y-4 pt-2">
              {[
                { title: 'Soft Inquiry Guaranteed', desc: 'Checking your score on EkPaisa will NEVER reduce or impact your credit score.' },
                { title: 'Bank-Grade 256-Bit SSL Encryption', desc: 'Your confidential data is secured with enterprise banking protocols.' },
                { title: 'Custom Loan Eligibility Insights', desc: 'Identify which lenders offer immediate rate discounts based on your profile.' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#F0F8F2] flex items-center justify-center shrink-0 mt-0.5 border border-[#28A866]/20">
                    <CheckCircle2 className="w-4 h-4 text-[#16834A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#172B21]">{item.title}</h4>
                    <p className="text-xs text-[#65756B] mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 flex items-center gap-3 text-xs text-[#65756B]">
              <Lock className="w-4 h-4 text-[#16834A]" />
              <span>Over 2,000,000+ reports generated with zero spam.</span>
            </div>
          </div>

          {/* Right Column: Interactive Credit Score Widget */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-3xl p-7 sm:p-9 border border-[#E1EAE3] shadow-2xl bg-[#F7FAF7]/95">
              
              {!simulatedScore ? (
                <div>
                  <div className="flex items-center justify-between pb-5 border-b border-[#E1EAE3] mb-6">
                    <div>
                      <h3 className="text-lg font-bold text-[#172B21]">
                        Instant Credit Score Assessment
                      </h3>
                      <p className="text-xs text-[#65756B] mt-0.5">
                        Free official credit report & personalized health audit
                      </p>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase bg-[#16834A] text-white px-2.5 py-1 rounded-md">
                      FREE
                    </span>
                  </div>

                  {error && (
                    <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <form onSubmit={handleCheckScore} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold text-[#65756B] uppercase tracking-wider mb-2">
                        Mobile Number (linked to Aadhaar/Bank)
                      </label>
                      <div className="relative">
                        <span className="absolute left-4 top-3.5 text-xs font-bold text-[#65756B] pointer-events-none">+91</span>
                        <input
                          type="tel"
                          maxLength={10}
                          placeholder="9876543210"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                          className="w-full pl-14 pr-4 py-3 rounded-xl border border-[#E1EAE3] bg-white text-sm text-[#172B21] focus:outline-none focus:border-[#16834A] focus:ring-2 focus:ring-[#16834A]/20 transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#65756B] uppercase tracking-wider mb-2">
                        PAN Card Number (Optional for faster fetch)
                      </label>
                      <input
                        type="text"
                        maxLength={10}
                        placeholder="ABCDE1234F"
                        value={panNumber}
                        onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                        className="w-full px-4 py-3 rounded-xl border border-[#E1EAE3] bg-white text-sm text-[#172B21] uppercase focus:outline-none focus:border-[#16834A] focus:ring-2 focus:ring-[#16834A]/20 transition-all"
                      />
                    </div>

                    <div className="p-4 rounded-2xl bg-white border border-[#E1EAE3] text-xs text-[#65756B] space-y-1.5">
                      <div className="flex items-center gap-2 font-bold text-[#105C38]">
                        <ShieldCheck className="w-4 h-4 text-[#16834A]" />
                        <span>Soft Inquiry Guarantee:</span>
                      </div>
                      <p className="text-[11px] leading-relaxed">
                        This query will not reflect as an inquiry on your official credit file and will not decrease your score.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn flex items-center justify-center gap-2 shadow-lg cursor-pointer disabled:opacity-75"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                          </svg>
                          Fetching Credit Records...
                        </span>
                      ) : (
                        <>
                          <span>Check Free Credit Score</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              ) : (
                /* Simulated Score View */
                <div className="text-center space-y-6 py-2 animate-fadeIn">
                  <div className="flex justify-between items-center pb-4 border-b border-[#E1EAE3]">
                    <span className="text-xs font-bold text-[#65756B]">CIBIL SCORE REPORT</span>
                    <span className="text-xs font-bold text-[#16834A] bg-[#F0F8F2] px-3 py-1 rounded-full border border-[#28A866]/30">
                      Verified Soft Check
                    </span>
                  </div>

                  {/* Circular Score Gauge Simulation */}
                  <div className="relative w-44 h-44 mx-auto flex flex-col items-center justify-center rounded-full border-8 border-[#16834A] bg-white shadow-xl">
                    <span className="text-5xl font-extrabold text-[#172B21] tracking-tight">
                      {simulatedScore}
                    </span>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#16834A] mt-1.5">
                      {getScoreRating(simulatedScore).label}
                    </span>
                    <span className="text-[10px] text-[#65756B] mt-0.5">Range 300 - 900</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#172B21] max-w-sm mx-auto leading-relaxed">
                    {getScoreRating(simulatedScore).text}
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs text-left pt-2">
                    <div className="p-3.5 rounded-2xl bg-white border border-[#E1EAE3]">
                      <span className="text-[10px] text-[#65756B] uppercase font-bold tracking-wider">Pre-Approved Limit</span>
                      <p className="font-extrabold text-[#16834A] text-base mt-0.5">₹15,00,000</p>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-white border border-[#E1EAE3]">
                      <span className="text-[10px] text-[#65756B] uppercase font-bold tracking-wider">Best Interest Rate</span>
                      <p className="font-extrabold text-[#16834A] text-base mt-0.5">8.5% p.a.</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSimulatedScore(null)}
                    className="w-full py-3 rounded-xl font-bold text-xs text-[#65756B] hover:text-[#172B21] border border-[#E1EAE3] bg-white cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    Check Another Number
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CreditScore;
