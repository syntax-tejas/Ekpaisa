import { useState, useMemo } from 'react';
import { 
  Calculator, 
  ArrowRight, 
  Bookmark, 
  Check, 
  Table
} from 'lucide-react';

interface EMICalculatorProps {
  onOpenApply?: (category?: string, amount?: number) => void;
}

export const EMICalculator: React.FC<EMICalculatorProps> = ({ onOpenApply }) => {
  // Original verified default values from ekpaisa.in audit
  const [loanAmount, setLoanAmount] = useState(500000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureMonths, setTenureMonths] = useState(24);
  const [tenureUnit, setTenureUnit] = useState<'months' | 'years'>('months');
  const [showAmortization, setShowAmortization] = useState(false);
  const [quoteSaved, setQuoteSaved] = useState(false);

  // Standard reducing-balance EMI formula calculation
  const { emi, totalInterest, totalPayment, principalRatio, interestRatio } = useMemo(() => {
    const P = loanAmount;
    const n = tenureUnit === 'years' ? tenureMonths * 12 : tenureMonths;
    const r = interestRate / 12 / 100;

    if (P <= 0 || n <= 0) {
      return { emi: 0, totalInterest: 0, totalPayment: 0, principalRatio: 100, interestRatio: 0 };
    }

    if (r === 0) {
      const zeroRateEmi = Math.round(P / n);
      return {
        emi: zeroRateEmi,
        totalInterest: 0,
        totalPayment: P,
        principalRatio: 100,
        interestRatio: 0,
      };
    }

    const emiCalc = Math.round(
      (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    );
    const totalPay = emiCalc * n;
    const interestCalc = totalPay - P;

    const pRatio = Math.round((P / totalPay) * 100);
    const iRatio = 100 - pRatio;

    return {
      emi: emiCalc,
      totalInterest: interestCalc,
      totalPayment: totalPay,
      principalRatio: pRatio,
      interestRatio: iRatio,
    };
  }, [loanAmount, interestRate, tenureMonths, tenureUnit]);

  // Generate a preview of first 6 months amortization table
  const amortizationSchedule = useMemo(() => {
    const n = tenureUnit === 'years' ? tenureMonths * 12 : tenureMonths;
    const r = interestRate / 12 / 100;
    let balance = loanAmount;
    const rows = [];

    const displayMonths = Math.min(n, 6);
    for (let m = 1; m <= displayMonths; m++) {
      const interestForMonth = Math.round(balance * r);
      const principalForMonth = Math.min(balance, emi - interestForMonth);
      balance = Math.max(0, balance - principalForMonth);

      rows.push({
        month: m,
        principal: principalForMonth,
        interest: interestForMonth,
        balance,
      });
    }
    return rows;
  }, [loanAmount, interestRate, tenureMonths, tenureUnit, emi]);

  const handleSaveQuote = () => {
    setQuoteSaved(true);
    setTimeout(() => setQuoteSaved(false), 3000);
  };

  return (
    <section id="calculator" className="relative w-full py-24 lg:py-32 bg-white border-y border-[#E1EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#16834A]" />
            <span>Interactive Financial Planning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B21] tracking-tight">
            Smart Loan <span className="text-[#16834A]">EMI Calculator</span>
          </h2>
          <p className="text-sm text-[#65756B] mt-3 leading-relaxed">
            Fine-tune your borrowing parameters with reducing-balance precision and preview your monthly cash flow before applying.
          </p>
        </div>

        {/* Calculator Main Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Sliders and Input Controls */}
          <div className="lg:col-span-7 bg-[#F7FAF7] rounded-3xl p-7 sm:p-9 border border-[#E1EAE3] shadow-sm space-y-8">
            
            {/* 1. Loan Amount */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-[#65756B] uppercase tracking-wider">
                  Loan Amount
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2 text-xs font-bold text-[#65756B]">₹</span>
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Math.max(10000, Number(e.target.value)))}
                    className="w-40 pl-7 pr-3 py-1.5 text-sm font-extrabold text-[#16834A] bg-white border border-[#E1EAE3] rounded-xl text-right focus:outline-none focus:border-[#16834A] focus:ring-1 focus:ring-[#16834A]"
                  />
                </div>
              </div>

              <input
                type="range"
                min="50000"
                max="10000000"
                step="25000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full mt-2"
              />

              <div className="flex justify-between text-[11px] text-[#65756B] mt-2 font-medium">
                <span>₹50,000</span>
                <span>₹25 Lakhs</span>
                <span>₹50 Lakhs</span>
                <span>₹1 Crore</span>
              </div>
            </div>

            {/* 2. Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-xs font-bold text-[#65756B] uppercase tracking-wider">
                  Interest Rate (p.a.)
                </label>
                <div className="relative flex items-center">
                  <input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Math.max(1, Number(e.target.value)))}
                    className="w-28 px-3 py-1.5 text-sm font-extrabold text-[#16834A] bg-white border border-[#E1EAE3] rounded-xl text-right focus:outline-none focus:border-[#16834A] focus:ring-1 focus:ring-[#16834A]"
                  />
                  <span className="ml-1.5 text-xs font-bold text-[#65756B]">%</span>
                </div>
              </div>

              <input
                type="range"
                min="6"
                max="24"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full mt-2"
              />

              <div className="flex justify-between text-[11px] text-[#65756B] mt-2 font-medium">
                <span>6% p.a.</span>
                <span>10.5% (Avg)</span>
                <span>15%</span>
                <span>24% p.a.</span>
              </div>
            </div>

            {/* 3. Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <label className="text-xs font-bold text-[#65756B] uppercase tracking-wider">
                    Loan Tenure
                  </label>
                  <div className="flex rounded-lg bg-white border border-[#E1EAE3] p-0.5 text-[11px] font-bold">
                    <button
                      type="button"
                      onClick={() => setTenureUnit('months')}
                      className={`px-2.5 py-1 rounded-md cursor-pointer transition-colors ${tenureUnit === 'months' ? 'bg-[#16834A] text-white' : 'text-[#65756B] hover:text-[#172B21]'}`}
                    >
                      Months
                    </button>
                    <button
                      type="button"
                      onClick={() => setTenureUnit('years')}
                      className={`px-2.5 py-1 rounded-md cursor-pointer transition-colors ${tenureUnit === 'years' ? 'bg-[#16834A] text-white' : 'text-[#65756B] hover:text-[#172B21]'}`}
                    >
                      Years
                    </button>
                  </div>
                </div>

                <span className="text-base font-extrabold text-[#16834A]">
                  {tenureMonths} {tenureUnit === 'years' ? 'Years' : 'Months'}
                </span>
              </div>

              <input
                type="range"
                min={tenureUnit === 'years' ? 1 : 6}
                max={tenureUnit === 'years' ? 30 : 84}
                step={1}
                value={tenureMonths}
                onChange={(e) => setTenureMonths(Number(e.target.value))}
                className="w-full mt-2"
              />

              <div className="flex justify-between text-[11px] text-[#65756B] mt-2 font-medium">
                {tenureUnit === 'years' ? (
                  <>
                    <span>1 Year</span>
                    <span>5 Years</span>
                    <span>15 Years</span>
                    <span>30 Years</span>
                  </>
                ) : (
                  <>
                    <span>6 Months</span>
                    <span>24 Months</span>
                    <span>48 Months</span>
                    <span>84 Months</span>
                  </>
                )}
              </div>
            </div>

            {/* Amortization Schedule Toggle */}
            <div className="pt-4 border-t border-[#E1EAE3]">
              <button
                type="button"
                onClick={() => setShowAmortization(!showAmortization)}
                className="text-xs font-bold text-[#16834A] hover:text-[#105C38] flex items-center gap-2 cursor-pointer"
              >
                <Table className="w-4 h-4" />
                <span>{showAmortization ? 'Hide Amortization Table' : 'View First 6 Months Amortization Schedule'}</span>
              </button>

              {showAmortization && (
                <div className="mt-4 overflow-x-auto rounded-2xl border border-[#E1EAE3] bg-white p-4">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E1EAE3] text-[#65756B] font-bold text-[10px] uppercase">
                        <th className="pb-3">Month</th>
                        <th className="pb-3">Principal (₹)</th>
                        <th className="pb-3">Interest (₹)</th>
                        <th className="pb-3">Balance (₹)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E1EAE3]/60 font-medium text-[#172B21]">
                      {amortizationSchedule.map((row) => (
                        <tr key={row.month} className="hover:bg-[#F7FAF7]">
                          <td className="py-2.5">Month {row.month}</td>
                          <td className="py-2.5">₹{row.principal.toLocaleString('en-IN')}</td>
                          <td className="py-2.5 text-[#16834A] font-bold">₹{row.interest.toLocaleString('en-IN')}</td>
                          <td className="py-2.5">₹{row.balance.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>

          {/* Right Column: Calculated Results & Graphical Breakdown */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-7 sm:p-9 border border-[#E1EAE3] shadow-2xl flex flex-col justify-between space-y-6">
            
            <div>
              {/* Highlight EMI Output Box */}
              <div className="text-center p-7 rounded-2xl bg-[#F0F8F2] border border-[#28A866]/30 mb-7">
                <span className="text-xs font-bold uppercase tracking-wider text-[#105C38]">
                  Monthly Loan EMI
                </span>
                <p className="text-4xl sm:text-5xl font-extrabold text-[#16834A] mt-2 tracking-tight">
                  ₹{emi.toLocaleString('en-IN')}
                </p>
                <span className="text-xs text-[#65756B] mt-1 block font-medium">
                  Per month based on reducing balance formula
                </span>
              </div>

              {/* Total Summary Row */}
              <div className="space-y-4 pb-6 border-b border-[#E1EAE3]">
                <div className="flex justify-between text-xs">
                  <span className="text-[#65756B]">Principal Loan Amount:</span>
                  <span className="font-bold text-[#172B21]">₹{loanAmount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#65756B]">Total Interest Payable:</span>
                  <span className="font-extrabold text-[#16834A]">₹{totalInterest.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-3 border-t border-[#E1EAE3]">
                  <span className="text-[#172B21]">Total Payment (P + I):</span>
                  <span className="text-[#172B21]">₹{totalPayment.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* Visual Breakdown Doughnut Bar */}
              <div className="pt-6">
                <div className="flex justify-between items-center text-xs font-bold mb-2.5">
                  <span className="text-[#172B21]">Payment Proportion</span>
                  <span className="text-[#65756B] text-xs">{principalRatio}% Principal</span>
                </div>

                {/* Proportion bar */}
                <div className="w-full h-3.5 rounded-full overflow-hidden flex bg-gray-200">
                  <div 
                    style={{ width: `${principalRatio}%` }} 
                    className="bg-[#16834A] h-full transition-all duration-300" 
                  />
                  <div 
                    style={{ width: `${interestRatio}%` }} 
                    className="bg-[#28A866]/40 h-full transition-all duration-300" 
                  />
                </div>

                <div className="flex items-center justify-between text-xs text-[#65756B] mt-2.5 font-medium">
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#16834A]" />
                    Principal ({principalRatio}%)
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#28A866]/40" />
                    Interest ({interestRatio}%)
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-6 border-t border-[#E1EAE3]">
              <button
                type="button"
                onClick={() => onOpenApply ? onOpenApply('Personal Loan', loanAmount) : null}
                className="w-full py-4 px-4 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn flex items-center justify-center gap-2 shadow-lg cursor-pointer hover:shadow-xl transition-all"
              >
                <span>Apply with this Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleSaveQuote}
                className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-[#65756B] hover:text-[#172B21] border border-[#E1EAE3] bg-[#F7FAF7] hover:bg-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {quoteSaved ? (
                  <>
                    <Check className="w-4 h-4 text-[#16834A]" />
                    <span className="text-[#16834A] font-bold">Quote Saved to Session!</span>
                  </>
                ) : (
                  <>
                    <Bookmark className="w-4 h-4" />
                    <span>Save This Calculation</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default EMICalculator;
