import { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, ArrowRight, Building, Sparkles } from 'lucide-react';
import { BANK_PARTNERS } from '../data/loanData';

interface ApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
  initialAmount?: number;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'Personal Loan',
  initialAmount = 500000,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loanType, setLoanType] = useState(initialCategory);
  const [amount, setAmount] = useState(initialAmount);
  const [salary, setSalary] = useState(45000);
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');
  const [employmentType, setEmploymentType] = useState('Salaried');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (step === 1) {
      if (amount <= 0) {
        setError('Please enter a valid loan amount');
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!fullName.trim()) {
        setError('Please enter your full name as per PAN card');
        return;
      }
      if (!mobile || !/^[6-9]\d{9}$/.test(mobile.trim())) {
        setError('Please enter a valid 10-digit Indian mobile number');
        return;
      }
      if (!city.trim()) {
        setError('Please enter your current city');
        return;
      }

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
        setSubmitted(true);
      }, 900);
    }
  };

  const handleReset = () => {
    setStep(1);
    setSubmitted(false);
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-[#E1EAE3] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E1EAE3] bg-[#F7FAF7]">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#16834A] text-white font-bold text-sm">
              ₹
            </span>
            <div>
              <h2 id="modal-title" className="text-base font-bold text-[#172B21]">
                EkPaisa Loan Application
              </h2>
              <p className="text-xs text-[#65756B]">
                Fast, secure & 100% paperless verification
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-[#65756B] hover:text-[#172B21] hover:bg-[#E1EAE3]/50 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress steps */}
        <div className="grid grid-cols-3 px-6 pt-4 pb-2 border-b border-[#E1EAE3]/60 bg-white text-xs">
          <div className={`flex items-center gap-2 pb-2 border-b-2 font-medium ${step >= 1 ? 'border-[#16834A] text-[#16834A]' : 'border-transparent text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-[#16834A] text-white' : 'bg-gray-100 text-gray-400'}`}>
              1
            </span>
            Requirement
          </div>
          <div className={`flex items-center gap-2 pb-2 border-b-2 font-medium ${step >= 2 ? 'border-[#16834A] text-[#16834A]' : 'border-transparent text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-[#16834A] text-white' : 'bg-gray-100 text-gray-400'}`}>
              2
            </span>
            Profile Details
          </div>
          <div className={`flex items-center gap-2 pb-2 border-b-2 font-medium ${step === 3 ? 'border-[#16834A] text-[#16834A]' : 'border-transparent text-gray-400'}`}>
            <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step === 3 ? 'bg-[#16834A] text-white' : 'bg-gray-100 text-gray-400'}`}>
              3
            </span>
            Lender Matches
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {step === 1 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#172B21] mb-1.5 uppercase tracking-wider">
                  Select Loan Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Personal Loan', 'Home Loan', 'Business Loan', 'Vehicle Loan', 'Used Car Loan', 'Education Loan'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setLoanType(type)}
                      className={`px-3 py-2.5 rounded-lg text-xs font-semibold border text-left transition-all ${
                        loanType === type
                          ? 'bg-[#F0F8F2] border-[#16834A] text-[#16834A] shadow-sm'
                          : 'border-[#E1EAE3] text-[#172B21] hover:bg-gray-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-[#172B21] uppercase tracking-wider">
                    Required Loan Amount
                  </label>
                  <span className="text-sm font-bold text-[#16834A]">
                    ₹{amount.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="50000"
                  max="5000000"
                  step="25000"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full accent-[#16834A]"
                />
                <div className="flex justify-between text-[11px] text-[#65756B] mt-1">
                  <span>₹50,000</span>
                  <span>₹25 Lakhs</span>
                  <span>₹50 Lakhs</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold text-[#172B21] uppercase tracking-wider">
                    Monthly Net Salary / Income
                  </label>
                  <span className="text-sm font-bold text-[#16834A]">
                    ₹{salary.toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="15000"
                  max="300000"
                  step="5000"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  className="w-full accent-[#16834A]"
                />
                <div className="flex justify-between text-[11px] text-[#65756B] mt-1">
                  <span>Min ₹15,000 (Required)</span>
                  <span>₹1.5 Lakhs</span>
                  <span>₹3 Lakhs+</span>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm text-white emerald-gradient-btn flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Continue to Step 2</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#172B21] mb-1">
                  Employment Type
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Salaried Professional', 'Self-Employed / Business'].map((emp) => (
                    <button
                      key={emp}
                      type="button"
                      onClick={() => setEmploymentType(emp)}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold border text-center transition-all ${
                        employmentType === emp
                          ? 'bg-[#F0F8F2] border-[#16834A] text-[#16834A]'
                          : 'border-[#E1EAE3] text-[#65756B] hover:bg-gray-50'
                      }`}
                    >
                      {emp}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#172B21] mb-1">
                  Full Name (as per PAN Card)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1EAE3] text-sm text-[#172B21] focus:outline-none focus:border-[#16834A] focus:ring-1 focus:ring-[#16834A]"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#172B21] mb-1">
                    Mobile Number (for OTP & offers)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs font-semibold text-[#65756B]">+91</span>
                    <input
                      type="tel"
                      maxLength={10}
                      placeholder="9876543210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                      className="w-full pl-11 pr-3.5 py-2.5 rounded-lg border border-[#E1EAE3] text-sm text-[#172B21] focus:outline-none focus:border-[#16834A] focus:ring-1 focus:ring-[#16834A]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#172B21] mb-1">
                    Current Residence City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai, Delhi, Bengaluru"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E1EAE3] text-sm text-[#172B21] focus:outline-none focus:border-[#16834A] focus:ring-1 focus:ring-[#16834A]"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 p-2.5 bg-[#F0F8F2] rounded-lg border border-[#E1EAE3] text-[11px] text-[#105C38]">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#16834A]" />
                <span>Zero impact on CIBIL score. 256-bit encrypted bank connection.</span>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#65756B] border border-[#E1EAE3] hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white emerald-gradient-btn flex items-center justify-center gap-2 shadow-md cursor-pointer disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Finding Matching Lenders...
                    </span>
                  ) : (
                    <>
                      <span>Find Pre-Approved Offers</span>
                      <Sparkles className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && submitted && (
            <div className="text-center space-y-4 py-2">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#F0F8F2] border border-[#28A866]/30 flex items-center justify-center text-[#16834A]">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#172B21]">
                  Pre-Eligibility Confirmed!
                </h3>
                <p className="text-xs text-[#65756B] mt-1 max-w-sm mx-auto">
                  Hello {fullName}, based on your ₹{salary.toLocaleString('en-IN')}/mo profile, you are eligible for up to <strong>₹{(salary * 18).toLocaleString('en-IN')}</strong> across our partner banks.
                </p>
              </div>

              {/* Pre-matched partners */}
              <div className="space-y-2 text-left mt-3">
                <p className="text-[11px] font-bold text-[#65756B] uppercase tracking-wider">
                  Top Matched Lenders for {loanType}
                </p>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {BANK_PARTNERS.slice(0, 3).map((bank) => (
                    <div
                      key={bank.name}
                      className="flex items-center justify-between p-3 rounded-xl border border-[#E1EAE3] bg-[#F7FAF7] hover:border-[#16834A] transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-white border border-[#E1EAE3] flex items-center justify-center font-bold text-xs text-[#16834A]">
                          <Building className="w-4 h-4 text-[#16834A]" />
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#172B21]">{bank.name}</p>
                          <p className="text-[10px] text-[#65756B]">Interest starting at {bank.minRate} p.a.</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-extrabold text-[#16834A]">Fast Track</span>
                        <p className="text-[10px] text-[#65756B]">Rating ★ {bank.rating}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-[#F0F8F2] rounded-xl text-xs text-[#105C38] flex items-center justify-between">
                <span>Our representative will connect at <strong>+91 {mobile}</strong></span>
                <span className="font-bold text-[#16834A]">Ref #EK-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-white emerald-gradient-btn cursor-pointer"
              >
                Close & Return to Marketplace
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyModal;
