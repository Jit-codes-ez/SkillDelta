import React from 'react';
import { Sparkles, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#520720] via-[#850E35] to-[#400418] text-[#FFFBF1] relative overflow-hidden">
      {/* Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 bg-technical-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E36A6A]/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4]/15 text-[#FFF5E4] border border-[#FFF5E4]/25 mb-6">
          <ShieldCheck className="w-3.5 h-3.5 text-[#E36A6A]" />
          <span>Continuous Curriculum Intelligence</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#FFFBF1] mb-6">
          Know what your curriculum teaches.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFF5E4] via-[#FCE7CE] to-[#FFFBF1]">
            Understand what the industry needs.
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#FFF5E4]/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          SkillDelta bridges academic curricula and evolving industry skill demand through AI/ML-driven analysis, empirical vector comparison, and evidence-grounded recommendations.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#dashboard"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#FFF5E4] hover:bg-[#FFFBF1] text-[#850E35] font-bold text-sm shadow-lg shadow-black/25 transition-all group"
          >
            <Sparkles className="w-4 h-4 text-[#E36A6A] group-hover:rotate-12 transition-transform" />
            <span>Analyze a Curriculum</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#workflow"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#850E35]/60 hover:bg-[#850E35] text-[#FFFBF1] font-semibold text-sm border border-[#FFF5E4]/30 transition-all"
          >
            <BookOpen className="w-4 h-4 text-[#FFF5E4]/70" />
            <span>Explore the Methodology</span>
          </a>
        </div>
      </div>
    </section>
  );
}
