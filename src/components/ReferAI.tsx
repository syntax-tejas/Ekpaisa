import { useState } from 'react';
import { 
  Gift, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  Bot, 
  ShieldCheck
} from 'lucide-react';

export const ReferAI: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [userQuery, setUserQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'ai' | 'user'; text: string }>>([
    { 
      sender: 'ai', 
      text: 'Namaste! I am your 24/7 EkPaisa AI Loan Advisor. Ask me anything about current bank interest rates, CIBIL eligibility, or document requirements!' 
    }
  ]);

  const referralCode = 'EKPAISA-BONUS2026';

  const handleCopyCode = () => {
    navigator.clipboard.writeText(referralCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const query = userQuery.trim();
    const newMessages = [...messages, { sender: 'user' as const, text: query }];
    setMessages(newMessages);
    setUserQuery('');

    // Instant intelligent simulated reply
    setTimeout(() => {
      let reply = "Based on our 40+ partner banks, personal loan eligibility starts at ₹15,000 monthly income and rates start from 8.5% p.a. Check your eligibility above to see exact pre-approved bank matches!";
      const lower = query.toLowerCase();
      if (lower.includes('cibil') || lower.includes('score')) {
        reply = "A CIBIL score of 750+ qualifies you for the lowest rates (starting at 7.9% - 8.5% p.a.). Checking your score on EkPaisa triggers a soft inquiry and won't hurt your score.";
      } else if (lower.includes('home') || lower.includes('house')) {
        reply = "Home loans currently start from 7.9% p.a. with tenures up to 30 years across SBI, HDFC, and ICICI Bank with zero hidden processing charges.";
      } else if (lower.includes('bidding')) {
        reply = "On our Bidding Platform, multiple banks view your anonymized requirement and bid lower rates against each other so you save up to ₹25,000 on interest!";
      }

      setMessages([...newMessages, { sender: 'ai' as const, text: reply }]);
    }, 600);
  };

  return (
    <section id="refer" className="relative w-full py-24 lg:py-32 bg-[#F7FAF7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
          
          {/* Card 1: Refer & Earn Rewards */}
          <div className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E1EAE3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-14 h-14 rounded-2xl bg-[#F0F8F2] text-[#16834A] flex items-center justify-center border border-[#28A866]/30 shadow-xs">
                  <Gift className="w-7 h-7" />
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-[#F0F8F2] text-[#16834A] border border-[#28A866]/30">
                  Earn Up to ₹5,000 / Referral
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B21] tracking-tight">
                Refer & Earn Program
              </h3>
              <p className="text-xs sm:text-sm text-[#65756B] mt-3 leading-relaxed">
                Empower your network with better financial choices. Share your exclusive EkPaisa referral code with friends, family, or colleagues and earn guaranteed cash rewards directly to your UPI when their loan is disbursed.
              </p>

              {/* Referral Steps */}
              <div className="mt-8 space-y-3.5">
                {[
                  { step: '1', text: 'Share your referral link or unique code' },
                  { step: '2', text: 'Friend applies and secures a loan from our 40+ banks' },
                  { step: '3', text: 'Get ₹500 to ₹5,000 credited directly to your bank account' },
                ].map((item) => (
                  <div key={item.step} className="flex items-center gap-3.5 text-xs sm:text-sm text-[#172B21]">
                    <span className="w-6 h-6 rounded-full bg-[#16834A] text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {item.step}
                    </span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Referral Code Box */}
              <div className="mt-8 p-5 rounded-2xl bg-[#F0F8F2] border border-[#28A866]/30">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#105C38]">
                  Your Exclusive Referral Code
                </span>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-lg font-extrabold text-[#16834A] tracking-wider">
                    {referralCode}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white border border-[#28A866]/40 text-xs font-bold text-[#16834A] hover:bg-[#16834A] hover:text-white transition-colors cursor-pointer shadow-xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#E1EAE3] flex items-center justify-between text-xs text-[#65756B]">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#16834A]" />
                Direct UPI instant payouts
              </span>
              <span className="font-bold text-[#16834A]">No limit on referrals</span>
            </div>
          </div>

          {/* Card 2: AI Assistant (NEW) */}
          <div id="ai-assistant" className="bg-white rounded-3xl p-8 lg:p-10 border border-[#E1EAE3] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="w-14 h-14 rounded-2xl bg-[#F0F8F2] text-[#16834A] flex items-center justify-center border border-[#28A866]/30 shadow-xs">
                  <Bot className="w-7 h-7" />
                </span>
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-[#16834A] text-white flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  AI ASSISTANT (NEW)
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B21] tracking-tight">
                24/7 Smart Loan Advisor
              </h3>
              <p className="text-xs sm:text-sm text-[#65756B] mt-3 leading-relaxed">
                Have questions about reducing EMI, improving CIBIL, or loan tax exemptions? Our trained AI engine provides real-time guidance across all 40+ lending partner policies.
              </p>

              {/* Chat Window Simulator */}
              <div className="mt-6 p-4 rounded-2xl bg-[#F7FAF7] border border-[#E1EAE3] h-52 overflow-y-auto space-y-3 text-xs">
                {messages.map((m, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {m.sender === 'ai' && (
                      <div className="w-7 h-7 rounded-full bg-[#16834A] text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        AI
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-[#16834A] text-white rounded-br-xs'
                          : 'bg-white border border-[#E1EAE3] text-[#172B21] rounded-bl-xs shadow-xs'
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="mt-4 flex gap-2.5">
                <input
                  type="text"
                  placeholder="Ask e.g. What is the lowest interest rate today?"
                  value={userQuery}
                  onChange={(e) => setUserQuery(e.target.value)}
                  className="flex-1 px-4 py-2.5 text-xs rounded-xl border border-[#E1EAE3] bg-white text-[#172B21] focus:outline-none focus:border-[#16834A] focus:ring-1 focus:ring-[#16834A]"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl text-white emerald-gradient-btn text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>

            {/* Suggested quick pills */}
            <div className="mt-6 pt-4 border-t border-[#E1EAE3] flex flex-wrap gap-2 text-[11px]">
              <span className="text-[#65756B] font-semibold py-0.5">Try asking:</span>
              {['How to increase CIBIL?', 'Home loan rates', 'Loan Bidding steps'].map((q) => (
                <button
                  key={q}
                  type="button"
                  onClick={() => setUserQuery(q)}
                  className="px-2.5 py-1 rounded-full bg-[#F0F8F2] text-[#16834A] border border-[#28A866]/30 hover:bg-[#16834A] hover:text-white transition-colors cursor-pointer"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ReferAI;
