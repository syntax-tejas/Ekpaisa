import { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  Sparkles, 
  User, 
  Home as HomeIcon, 
  Briefcase, 
  Car, 
  Building, 
  GraduationCap,
  Percent,
  Gavel,
  Gift
} from 'lucide-react';
import { NAV_LINKS } from '../data/loanData';

interface NavbarProps {
  onOpenApply?: (category?: string) => void;
  onOpenAI?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApply, onOpenAI }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'User': return <User className="w-4 h-4 text-[#16834A]" />;
      case 'Home': return <HomeIcon className="w-4 h-4 text-[#16834A]" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 text-[#16834A]" />;
      case 'Car': return <Car className="w-4 h-4 text-[#16834A]" />;
      case 'Building': return <Building className="w-4 h-4 text-[#16834A]" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 text-[#16834A]" />;
      default: return <Percent className="w-4 h-4 text-[#16834A]" />;
    }
  };

  const handleApplyClick = (category?: string) => {
    setMobileMenuOpen(false);
    if (onOpenApply) {
      onOpenApply(category);
    } else {
      const el = document.getElementById('hero');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Main Navigation Header */}
      <header 
        className={`fixed top-0 left-0 right-0 w-full z-[1000] transition-all duration-300 ${
          isScrolled 
            ? 'glass-panel shadow-sm py-3 bg-white/95 border-b border-[#E1EAE3]' 
            : 'bg-white/90 backdrop-blur-md py-4 border-b border-[#E1EAE3]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#hero" 
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#16834A] rounded-xl p-1"
              aria-label="EkPaisa - Return to Homepage"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#16834A] to-[#105C38] text-white font-extrabold text-xl shadow-md group-hover:scale-105 transition-transform">
                <span>1₹</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-[#172B21]">
                  Ek<span className="text-[#16834A]">Paisa</span>
                </span>
                <span className="text-[10px] font-semibold text-[#65756B] tracking-wide -mt-1 hidden sm:block">
                  Fintech Marketplace
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-3">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  return (
                    <div 
                      key={link.label}
                      className="relative"
                      onMouseEnter={() => setLoansDropdownOpen(true)}
                      onMouseLeave={() => setLoansDropdownOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
                        aria-expanded={loansDropdownOpen}
                        className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#172B21] hover:text-[#16834A] hover:bg-[#F0F8F2] rounded-xl transition-colors cursor-pointer"
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${loansDropdownOpen ? 'rotate-180 text-[#16834A]' : 'text-[#65756B]'}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <div 
                        className={`absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-[#E1EAE3] p-3 transition-all duration-200 transform origin-top-left z-50 ${
                          loansDropdownOpen 
                            ? 'opacity-100 visible translate-y-0 scale-100' 
                            : 'opacity-0 invisible -translate-y-2 scale-95 pointer-events-none'
                        }`}
                      >
                        <div className="px-3 py-2 text-[11px] font-bold text-[#65756B] uppercase tracking-wider border-b border-[#E1EAE3] mb-2">
                          Available Loan Products
                        </div>
                        <div className="space-y-1">
                          {link.dropdown.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              onClick={() => {
                                setLoansDropdownOpen(false);
                                handleApplyClick(item.name);
                              }}
                              className="flex items-center justify-between p-2.5 rounded-xl hover:bg-[#F0F8F2] text-[#172B21] transition-colors group cursor-pointer"
                            >
                              <div className="flex items-center gap-3">
                                <span className="p-2 bg-[#F0F8F2] rounded-lg group-hover:bg-white group-hover:shadow-xs transition-all">
                                  {getIcon(item.icon)}
                                </span>
                                <div>
                                  <p className="text-xs font-bold text-[#172B21] group-hover:text-[#16834A]">
                                    {item.name}
                                  </p>
                                  <p className="text-[11px] text-[#65756B]">{item.rate}</p>
                                </div>
                              </div>
                              <ArrowRight className="w-3.5 h-3.5 text-[#16834A] opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all" />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                if (link.isNew) {
                  return (
                    <button
                      key={link.label}
                      type="button"
                      onClick={() => {
                        if (onOpenAI) onOpenAI();
                        else {
                          const el = document.getElementById('ai-assistant');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-[#16834A] bg-[#F0F8F2] hover:bg-[#E1EAE3] rounded-xl transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#16834A]" />
                      <span>{link.label}</span>
                      <span className="px-1.5 py-0.5 text-[9px] bg-[#16834A] text-white font-extrabold rounded-md leading-none">
                        NEW
                      </span>
                    </button>
                  );
                }

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="px-3 py-2 text-sm font-semibold text-[#65756B] hover:text-[#172B21] hover:bg-[#F0F8F2] rounded-xl transition-colors"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Apply Now & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => handleApplyClick()}
                className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn shadow-md cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#16834A] focus:ring-offset-2"
              >
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Hamburger Button for Mobile */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#172B21] hover:text-[#16834A] hover:bg-[#F0F8F2] rounded-xl transition-colors focus:outline-none cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#E1EAE3] bg-white px-5 pt-4 pb-8 shadow-2xl animate-fadeIn">
            <div className="space-y-2">
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-[#172B21] hover:bg-[#F0F8F2] rounded-xl"
              >
                Home
              </a>

              <div className="py-3 border-t border-b border-[#E1EAE3]">
                <p className="px-3 text-[11px] font-bold text-[#65756B] uppercase tracking-wider mb-2.5">
                  Loan Products
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { name: 'Personal Loan', rate: '8.5%' },
                    { name: 'Home Loan', rate: '7.9%' },
                    { name: 'Business Loan', rate: '10.5%' },
                    { name: 'Used Car Loan', rate: '9.2%' },
                    { name: 'Vehicle Loan', rate: '8.9%' },
                    { name: 'Property Loan', rate: '10.5%' },
                  ].map((p) => (
                    <button
                      key={p.name}
                      type="button"
                      onClick={() => handleApplyClick(p.name)}
                      className="flex flex-col p-2.5 text-left bg-[#F7FAF7] border border-[#E1EAE3] rounded-xl hover:border-[#16834A]"
                    >
                      <span className="text-xs font-bold text-[#172B21]">{p.name}</span>
                      <span className="text-[11px] text-[#16834A]">From {p.rate} p.a.</span>
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#bidding"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-[#172B21] hover:bg-[#F0F8F2] rounded-xl"
              >
                Loan Bidding Platform
              </a>
              <a
                href="#calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-[#172B21] hover:bg-[#F0F8F2] rounded-xl"
              >
                EMI Calculator
              </a>
              <a
                href="#credit-score"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-[#172B21] hover:bg-[#F0F8F2] rounded-xl"
              >
                Free Credit Score Check
              </a>
              <a
                href="#refer"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 text-sm font-semibold text-[#172B21] hover:bg-[#F0F8F2] rounded-xl"
              >
                Refer & Earn
              </a>
              <a
                href="#ai-assistant"
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenAI) onOpenAI();
                }}
                className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#16834A] bg-[#F0F8F2] rounded-xl"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Assistant
                </span>
                <span className="text-[10px] bg-[#16834A] text-white px-2 py-0.5 rounded-md font-extrabold">NEW</span>
              </a>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => handleApplyClick()}
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white emerald-gradient-btn text-center shadow-md cursor-pointer"
                >
                  Apply for Loan Now
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Fixed Navigation Bar */}
      <nav 
        className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-[#E1EAE3] z-[999] shadow-[0_-4px_20px_rgba(0,0,0,0.06)]"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="flex items-center justify-around h-15 px-2 max-w-md mx-auto">
          {[
            { label: 'Home', icon: HomeIcon, href: '#hero' },
            { label: 'Personal', icon: User, href: '#loans', category: 'Personal Loan' },
            { label: 'Business', icon: Briefcase, href: '#loans', category: 'Business Loan' },
            { label: 'Bidding', icon: Gavel, href: '#bidding' },
            { label: 'Refer', icon: Gift, href: '#refer' },
            { label: 'AI Rem', icon: Sparkles, href: '#ai-assistant', isAI: true },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.label;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  setActiveTab(item.label);
                  if (item.isAI && onOpenAI) {
                    onOpenAI();
                  } else if (item.category && onOpenApply) {
                    onOpenApply(item.category);
                  } else {
                    const el = document.querySelector(item.href);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`relative flex flex-col items-center justify-center flex-1 h-full transition-colors cursor-pointer ${
                  isActive ? 'text-[#16834A]' : 'text-[#65756B] hover:text-[#172B21]'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                {isActive && (
                  <span className="absolute top-0 w-8 h-[2.5px] bg-[#16834A] rounded-b-full" />
                )}
                <div className="relative flex items-center justify-center w-6 h-6 mb-1">
                  <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5px]' : 'stroke-[1.8px]'}`} />
                </div>
                <span className="text-[10px] font-bold tracking-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
