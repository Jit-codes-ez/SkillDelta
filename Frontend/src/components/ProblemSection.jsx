import React from 'react';
import { BookOpen, Building2, GitCompareArrows, ArrowRight, ArrowDown } from 'lucide-react';

const CARDS = [
  {
    step: 'Phase 01',
    title: 'Curriculum',
    subtitle: 'Academic Foundations',
    icon: BookOpen,
    description:
      'Academic programs teach foundational concepts, technologies, and core mathematical competencies designed to remain stable across generations of students.',
    badge: 'Foundational Horizon',
    color: 'indigo',
    metrics: 'Multi-year revision cadence',
  },
  {
    step: 'Phase 02',
    title: 'Industry',
    subtitle: 'Rapid Market Velocity',
    icon: Building2,
    description:
      'Industry requirements evolve rapidly with newly deployed production technologies, developer tools, cloud infrastructure paradigms, and changing job roles.',
    badge: 'Dynamic Tooling Horizon',
    color: 'violet',
    metrics: 'Continuous shift velocity',
  },
  {
    step: 'Phase 03',
    title: 'The Gap',
    subtitle: 'The Skill Delta',
    icon: GitCompareArrows,
    description:
      'The difference between academic curriculum coverage and industry demand is notoriously difficult to measure systematically without dense semantic modeling.',
    badge: 'Measurement Deficit',
    color: 'rose',
    metrics: 'Unquantified latency delta',
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="py-24 bg-[#FFF5E4]/50 border-y border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <GitCompareArrows className="w-3.5 h-3.5" />
            The Structural Challenge
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Education evolves.{' '}
            <span className="text-[#E36A6A]">Industry evolves faster.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            The divergence between static degree syllabi and production engineering requirements creates an invisible capability gap that traditional qualitative reviews fail to capture.
          </p>
        </div>

        {/* 3 Analytical Cards with Visual Connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {CARDS.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#850E35]/15 p-7 shadow-xs hover:shadow-md hover:border-[#850E35]/30 transition-all duration-300 flex flex-col justify-between group relative"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-bold text-[#850E35]/50">
                      {card.step}
                    </span>
                    <span
                      className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                        card.color === 'rose'
                          ? 'bg-[#E36A6A] text-[#FFFBF1] border-[#E36A6A]'
                          : card.color === 'violet'
                          ? 'bg-[#FFF5E4] text-[#850E35] border-[#850E35]/20'
                          : 'bg-[#850E35] text-[#FFFBF1] border-[#850E35]'
                      }`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-[#FFF5E4] flex items-center justify-center text-[#850E35] group-hover:bg-[#850E35] group-hover:text-[#FFFBF1] transition-colors mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-2xl font-bold text-[#850E35] mb-1 group-hover:text-[#E36A6A] transition-colors">
                    {card.title}
                  </h3>
                  <div className="text-xs font-medium text-[#850E35]/60 mb-4">
                    {card.subtitle}
                  </div>

                  <p className="text-sm text-[#850E35]/80 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#850E35]/10 flex items-center justify-between text-xs font-mono text-[#850E35]/50">
                  <span>{card.metrics}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#850E35]/40 group-hover:text-[#850E35] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Visual Progression Strip: Curriculum ↓ Changing Industry ↓ Skill Delta */}
        <div className="mt-12 p-5 rounded-2xl bg-white border border-[#850E35]/15 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-[#850E35] shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#850E35] text-[#FFFBF1] flex items-center justify-center font-bold">
              1
            </span>
            <span>Academic Curriculum</span>
          </div>

          <div className="hidden sm:block text-[#850E35]/30">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="sm:hidden text-[#850E35]/30">
            <ArrowDown className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 flex items-center justify-center font-bold">
              2
            </span>
            <span>Changing Industry Demand</span>
          </div>

          <div className="hidden sm:block text-[#850E35]/30">
            <ArrowRight className="w-4 h-4" />
          </div>
          <div className="sm:hidden text-[#850E35]/30">
            <ArrowDown className="w-4 h-4" />
          </div>

          <div className="flex items-center gap-2 text-[#E36A6A]">
            <span className="w-7 h-7 rounded-lg bg-[#E36A6A] text-[#FFFBF1] flex items-center justify-center font-bold">
              3
            </span>
            <span className="font-bold">Measurable Skill Delta</span>
          </div>
        </div>
      </div>
    </section>
  );
}
