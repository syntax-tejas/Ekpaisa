import { useState } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  PhoneCall, 
  Mail, 
  ShieldCheck
} from 'lucide-react';
import { ORIGINAL_FAQS } from '../data/loanData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Data & Security', 'Disbursal & Timeline', 'Eligibility', 'Regulation & Safety', 'Loan Limits'];

  const filteredFAQs = ORIGINAL_FAQS.filter((faq) => {
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      activeCategory === 'All' || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full py-24 lg:py-32 bg-white border-y border-[#E1EAE3] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0F8F2] border border-[#28A866]/30 text-[#105C38] text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#16834A]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172B21] tracking-tight">
            Frequently Asked <span className="text-[#16834A]">Questions</span>
          </h2>
          <p className="text-sm text-[#65756B] mt-3 leading-relaxed">
            Everything you need to know about our loan application process, interest rates, security, and RBI compliance.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-[#65756B] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search e.g. eligibility, disbursal speed, security..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-[#E1EAE3] bg-[#F7FAF7] text-xs sm:text-sm text-[#172B21] focus:outline-none focus:border-[#16834A] focus:bg-white focus:ring-1 focus:ring-[#16834A] transition-all shadow-xs"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#16834A] text-white shadow-xs'
                    : 'bg-[#F7FAF7] text-[#65756B] hover:text-[#172B21] border border-[#E1EAE3]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          <div className="lg:col-span-8 space-y-4">
            {filteredFAQs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-[#E1EAE3] bg-[#F7FAF7] transition-all overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-sm sm:text-base text-[#172B21] hover:text-[#16834A] transition-colors cursor-pointer"
                  >
                    <span className="pr-4 leading-snug">{faq.question}</span>
                    <span className={`w-8 h-8 rounded-full bg-white border border-[#E1EAE3] flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#16834A] bg-[#F0F8F2]' : 'text-[#65756B]'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#65756B] leading-relaxed border-t border-[#E1EAE3]/60 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFAQs.length === 0 && (
              <div className="text-center p-10 bg-[#F7FAF7] rounded-3xl border border-[#E1EAE3] text-sm text-[#65756B]">
                No questions found matching your search. Try another keyword or reach out to our team directly.
              </div>
            )}
          </div>

          {/* Right Column: Customer Support Assistance Box */}
          <div className="lg:col-span-4 bg-[#F0F8F2] rounded-3xl p-7 sm:p-8 border border-[#28A866]/30 space-y-6">
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#105C38] bg-white px-3 py-1 rounded-md border border-[#28A866]/30">
                Direct Helpdesk
              </span>
              <h3 className="text-xl font-bold text-[#172B21] mt-3">
                Still Have Questions?
              </h3>
              <p className="text-xs sm:text-sm text-[#65756B] mt-2 leading-relaxed">
                Our certified loan officers are available 7 days a week to guide you through loan comparison, document preparation, and bank sanctions.
              </p>
            </div>

            <div className="space-y-3.5 pt-1">
              <a
                href="tel:+918588808538"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#28A866]/30 text-xs sm:text-sm font-bold text-[#172B21] hover:border-[#16834A] hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F8F2] flex items-center justify-center text-[#16834A] shrink-0">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#65756B] block">Customer Helpline</span>
                  <span>+91 8588808538</span>
                </div>
              </a>

              <a
                href="mailto:team@ekpaisa.in"
                className="flex items-center gap-3.5 p-4 rounded-2xl bg-white border border-[#28A866]/30 text-xs sm:text-sm font-bold text-[#172B21] hover:border-[#16834A] hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F0F8F2] flex items-center justify-center text-[#16834A] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-[#65756B] block">Email Support</span>
                  <span>team@ekpaisa.in</span>
                </div>
              </a>
            </div>

            <div className="pt-3 border-t border-[#28A866]/20 text-xs text-[#105C38] flex items-center gap-2 font-semibold">
              <ShieldCheck className="w-4 h-4 text-[#16834A]" />
              <span>Available Mon - Sun: 9:00 AM - 9:00 PM</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
