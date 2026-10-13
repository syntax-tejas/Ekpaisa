import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import LoanCategories from './components/LoanCategories';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import CreditScore from './components/CreditScore';
import BiddingPlatform from './components/BiddingPlatform';
import EMICalculator from './components/EMICalculator';
import ReferAI from './components/ReferAI';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';

function App() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Personal Loan');
  const [selectedAmount, setSelectedAmount] = useState(500000);

  const handleOpenApply = (category: string = 'Personal Loan', amount: number = 500000) => {
    setSelectedCategory(category);
    setSelectedAmount(amount);
    setIsApplyModalOpen(true);
  };

  const handleCloseApply = () => {
    setIsApplyModalOpen(false);
  };

  const handleOpenAI = () => {
    const el = document.getElementById('ai-assistant');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FAF7] flex flex-col font-sans text-[#172B21] antialiased selection:bg-[#16834A] selection:text-white">
      {/* Skip to main content for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-[#16834A] focus:text-white focus:rounded-lg focus:font-bold focus:text-sm shadow-xl"
      >
        Skip to main content
      </a>

      {/* Primary Sticky Navbar */}
      <Navbar onOpenApply={handleOpenApply} onOpenAI={handleOpenAI} />

      <main id="main-content" className="flex-1">
        {/* 1. Hero – Conversion-focused asymmetric layout with 2-step salary discovery widget */}
        <Hero onOpenApply={handleOpenApply} />

        {/* 2. Partners – 40+ Bank & NBFC partners + verified trust statistics */}
        <Partners />

        {/* 3. Loan Categories – Complete catalog of all 13 services & advisory products */}
        <LoanCategories onOpenApply={handleOpenApply} />

        {/* 4. How It Works – 3-step digital journey with time-to-disbursal indicators */}
        <HowItWorks onOpenApply={() => handleOpenApply('Personal Loan')} />

        {/* 5. Features & Trust – One platform. Smarter financial choices. */}
        <Features onOpenApply={handleOpenApply} />

        {/* 6. Credit Score – 2-minute soft inquiry check without CIBIL penalty */}
        <CreditScore />

        {/* 7. Loan Bidding Platform – Multiple lenders compete with lower rates */}
        <BiddingPlatform onOpenApply={handleOpenApply} />

        {/* 8. Smart EMI Calculator – Precision reducing-balance mathematical engine */}
        <EMICalculator onOpenApply={handleOpenApply} />

        {/* 9. Refer & Earn + 24/7 AI Assistant Showcase */}
        <ReferAI />

        {/* 10. Frequently Asked Questions – Searchable accordion preserving all original answers */}
        <FAQ />

        {/* 11. Conversion CTA Banner – Direct sanction invitation & customer care dialer */}
        <CTA onOpenApply={() => handleOpenApply('Personal Loan')} />
      </main>

      {/* Comprehensive Footer – Office, customer care +91 8588808538, legal disclosures */}
      <Footer />

      {/* Global Interactive Loan Application Modal */}
      <ApplyModal
        isOpen={isApplyModalOpen}
        onClose={handleCloseApply}
        initialCategory={selectedCategory}
        initialAmount={selectedAmount}
      />
    </div>
  );
}

export default App;
