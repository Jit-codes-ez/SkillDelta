import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFBF1]/90 backdrop-blur-md border-b border-[#850E35]/15 shadow-xs py-3'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: SkillDelta Logo */}
        <a href="#" className="flex items-center gap-2 group select-none">
          <div className="w-8 h-8 rounded-lg bg-[#850E35] flex items-center justify-center text-[#FFFBF1] shadow-xs font-bold text-sm tracking-tighter">
            <span>S</span>
            <span className="text-[#FFF5E4] font-serif text-base italic ml-[-1px]">Δ</span>
          </div>
          <div className="flex items-baseline">
            <span className="text-xl font-bold tracking-tight text-[#850E35]">
              Skill
              <span className="text-[#E36A6A] font-serif italic text-2xl ml-0.5">Δ</span>
              <span className="text-[#850E35] ml-0.5 font-bold">elta</span>
            </span>
            <span className="ml-2 hidden lg:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20">
              Research v1.2
            </span>
          </div>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-[#850E35]/80">
          <a
            href="#home"
            className="px-3.5 py-1.5 rounded-lg hover:text-[#850E35] hover:bg-[#FFF5E4] transition-colors"
          >
            Home
          </a>
          <a
            href="#workflow"
            className="px-3.5 py-1.5 rounded-lg hover:text-[#850E35] hover:bg-[#FFF5E4] transition-colors"
          >
            How It Works
          </a>
          <a
            href="#capabilities"
            className="px-3.5 py-1.5 rounded-lg hover:text-[#850E35] hover:bg-[#FFF5E4] transition-colors"
          >
            Capabilities
          </a>
          <a
            href="#research"
            className="px-3.5 py-1.5 rounded-lg hover:text-[#850E35] hover:bg-[#FFF5E4] transition-colors"
          >
            Research
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 rounded-lg hover:text-[#850E35] hover:bg-[#FFF5E4] transition-colors"
          >
            About
          </a>
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#FFFBF1] bg-[#850E35] hover:bg-[#6F0A2B] shadow-xs shadow-[#850E35]/20 hover:shadow-md hover:shadow-[#850E35]/30 transition-all group"
          >
            <span>Analyze Curriculum</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#850E35] hover:bg-[#FFF5E4] border border-[#850E35]/20"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFBF1] border-b border-[#850E35]/15 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#850E35] hover:bg-[#FFF5E4]"
          >
            Home
          </a>
          <a
            href="#workflow"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#850E35] hover:bg-[#FFF5E4]"
          >
            How It Works
          </a>
          <a
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#850E35] hover:bg-[#FFF5E4]"
          >
            Capabilities
          </a>
          <a
            href="#research"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#850E35] hover:bg-[#FFF5E4]"
          >
            Research
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-[#850E35] hover:bg-[#FFF5E4]"
          >
            About
          </a>
          <div className="pt-2 border-t border-[#850E35]/10">
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-[#FFFBF1] bg-[#850E35] hover:bg-[#6F0A2B] shadow-sm"
            >
              <span>Analyze Curriculum</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
