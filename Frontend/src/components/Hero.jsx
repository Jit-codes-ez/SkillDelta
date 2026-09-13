import React from 'react';
import SkillNetwork from './SkillNetwork';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 sm:pt-32 pb-16 overflow-hidden">
      {/* Subtle Technical Background */}
      <div className="absolute inset-0 bg-technical-dots opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-tr from-[#E36A6A]/15 via-[#FFF5E4]/40 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Narrative */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            {/* Small Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-6 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E36A6A] animate-pulse" />
              <span>AI/ML • CURRICULUM INTELLIGENCE • INDUSTRY ANALYTICS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#850E35] tracking-tight leading-[1.12] mb-6">
              From What Is Taught{' '}
              <span className="block mt-1">
                to What{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#850E35] via-[#E36A6A] to-[#850E35] animate-text-shimmer">
                  Industry Needs.
                </span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#850E35]/85 leading-relaxed mb-8">
              SkillDelta uses AI/ML to analyze academic curricula, understand industry skill demand, detect curriculum gaps, and generate evidence-based recommendations for future-ready education.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#dashboard"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#850E35] hover:bg-[#6F0A2B] text-[#FFFBF1] font-semibold text-sm shadow-md shadow-[#850E35]/20 hover:shadow-lg hover:shadow-[#850E35]/30 transition-all group w-full sm:w-auto"
              >
                <span>Analyze a Curriculum</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#workflow"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FFF5E4] hover:bg-[#F5E4CE] text-[#850E35] font-semibold text-sm border border-[#850E35]/25 shadow-xs hover:border-[#850E35]/40 transition-all w-full sm:w-auto"
              >
                <BookOpen className="w-4 h-4 text-[#850E35]/70" />
                <span>Explore How It Works</span>
              </a>
            </div>

            {/* Small Trust Line */}
            <div className="pt-6 border-t border-[#850E35]/15 w-full">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60 mb-2">
                Core Research Methodologies
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#850E35] font-medium">
                <span className="px-2.5 py-1 rounded-md bg-[#FFF5E4] border border-[#850E35]/20">
                  NLP
                </span>
                <span className="text-[#850E35]/40">•</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFF5E4] border border-[#850E35]/20">
                  Semantic Embeddings
                </span>
                <span className="text-[#850E35]/40">•</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFF5E4] border border-[#850E35]/20">
                  Skill Intelligence
                </span>
                <span className="text-[#850E35]/40">•</span>
                <span className="px-2.5 py-1 rounded-md bg-[#FFF5E4] border border-[#850E35]/20">
                  RAG
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Hero Visual Network */}
          <div className="lg:col-span-7 w-full">
            <SkillNetwork />
          </div>
        </div>
      </div>
    </section>
  );
}
