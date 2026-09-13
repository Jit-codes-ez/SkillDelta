import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FFF5E4]/80 border-t border-[#850E35]/15 text-[#850E35]/70 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 select-none">
              <div className="w-7 h-7 rounded-lg bg-[#850E35] flex items-center justify-center text-[#FFFBF1] font-bold text-xs">
                <span>S</span>
                <span className="font-serif italic text-[#FFF5E4] ml-[-1px]">Δ</span>
              </div>
              <span className="font-bold text-[#850E35] text-base tracking-tight">
                SkillDelta
              </span>
            </div>

            <p className="text-[#850E35]/70 max-w-sm leading-relaxed text-xs">
              AI/ML-Driven Intelligence That Maps Curriculum to Industry Demand.
            </p>

            <div className="pt-2 text-[11px] text-[#850E35]/60 font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#850E35]" />
              <span>MCA Academic Research Initiative</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div className="font-bold uppercase tracking-wider text-[#850E35] text-[11px] mb-3">
              Product
            </div>
            <ul className="space-y-2 text-[#850E35]/70">
              <li>
                <a href="#workflow" className="hover:text-[#850E35] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#capabilities" className="hover:text-[#850E35] transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-[#850E35] transition-colors">
                  Dashboard
                </a>
              </li>
            </ul>
          </div>

          {/* Research Links */}
          <div>
            <div className="font-bold uppercase tracking-wider text-[#850E35] text-[11px] mb-3">
              Research
            </div>
            <ul className="space-y-2 text-[#850E35]/70">
              <li>
                <a href="#capabilities" className="hover:text-[#850E35] transition-colors">
                  Methodology
                </a>
              </li>
              <li>
                <a href="#dashboard" className="hover:text-[#850E35] transition-colors">
                  Evaluation
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-[#850E35] transition-colors">
                  Research Pillars
                </a>
              </li>
            </ul>
          </div>

          {/* Company / Initiative Links */}
          <div>
            <div className="font-bold uppercase tracking-wider text-[#850E35] text-[11px] mb-3">
              Company
            </div>
            <ul className="space-y-2 text-[#850E35]/70">
              <li>
                <a href="#about" className="hover:text-[#850E35] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#home" className="hover:text-[#850E35] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="pt-6 border-t border-[#850E35]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#850E35]/60 text-[11px]">
          <div>
            © {new Date().getFullYear()} SkillDelta Research Group. Designed for curriculum intelligence and academic evaluation.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#850E35] transition-colors">Research Paper Reference</span>
            <span>•</span>
            <span className="hover:text-[#850E35] transition-colors">Open Vector Taxonomy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
