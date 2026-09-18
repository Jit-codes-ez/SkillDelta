import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#FFF5E4]/80 border-t border-[#850E35]/15 text-[#850E35]/70 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Tagline */}
          <div className="md:col-span-2 space-y-3">
            <a href="/" className="inline-block select-none group">
              <img
                src="/banner.png"
                alt="SkillDelta Logo"
                className="h-20 sm:h-24 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            <p className="text-[#850E35]/70 max-w-sm leading-relaxed text-sm font-semibold">
              Curriculum evolved by AI, Validated by industry.
            </p>

            <div className="pt-2 text-[11px] text-[#850E35]/60 font-mono flex items-center gap-1.5 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-[#850E35]" />
              <span className="font-bold">MCA Academic Research Initiative</span>
            </div>
          </div>

          {/* Resources Column */}
          <div>
            <div className="font-bold uppercase tracking-wider text-[#850E35] text-[11px] mb-3">
              RESOURCES
            </div>
            <ul className="space-y-2 text-[#850E35]/70">
              <li>
                <Link to="/documentation" className="hover:text-[#850E35] transition-colors font-medium">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#850E35] transition-colors font-medium">
                  FAQ & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Trust Column */}
          <div>
            <div className="font-bold uppercase tracking-wider text-[#850E35] text-[11px] mb-3">
              LEGAL & TRUST
            </div>
            <ul className="space-y-2 text-[#850E35]/70">
              <li>
                <Link to="/privacy" className="hover:text-[#850E35] transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-[#850E35] transition-colors font-medium">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="pt-6 border-t border-[#850E35]/10 flex flex-col sm:flex-row items-center justify-center gap-4 text-[#850E35]/60 text-[11px]">
          <div>
            © {new Date().getFullYear()} SkillDelta . Designed for curriculum intelligence and academic evaluation . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
