import React from 'react';
import { Network, ChartNoAxesCombined, TrendingUp, FileCheck2, FlaskConical, ArrowUpRight } from 'lucide-react';

const PILLARS = [
  {
    icon: Network,
    title: 'Semantic Analysis',
    subtitle: 'Vector Space Latent Projection',
    description:
      'Understand non-obvious conceptual relationships between curriculum topics and industry skills using deep transformer embeddings rather than brittle lexical matching.',
    badge: 'NLP & Embeddings',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Quantitative Gap Measurement',
    subtitle: 'Empirical Delta Scoring',
    description:
      'Mathematically quantify curriculum coverage, market demand concentration, and capability disparities through normalized metric vectors and distance formulas.',
    badge: 'Mathematical Formulation',
  },
  {
    icon: TrendingUp,
    title: 'Temporal Intelligence',
    subtitle: 'Shift Velocity & Horizon Modeling',
    description:
      'Track how technical skill requirements evolve over sequential years, predicting emerging curriculum deficits before students graduate into obsolete tooling.',
    badge: 'Time-Series Dynamics',
  },
  {
    icon: FileCheck2,
    title: 'Evidence-Grounded Recommendations',
    subtitle: 'RAG Retrieval Constraints',
    description:
      'Generate accreditation-compliant syllabus amendment proposals with strict retrieval-augmented generation to eliminate generative hallucination.',
    badge: 'RAG Architecture',
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 bg-[#FFFBF1] border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <FlaskConical className="w-3.5 h-3.5 text-[#E36A6A]" />
            Academic Foundations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Built as a <span className="text-[#E36A6A]">research-driven system</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            Formulated as an advanced academic research initiative (MCA Thesis), SkillDelta replaces anecdotal curriculum revisions with formal mathematical modeling.
          </p>
        </div>

        {/* 4 Research Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#850E35]/15 p-7 sm:p-8 hover:border-[#850E35]/35 hover:shadow-sm transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF5E4] border border-[#850E35]/15 flex items-center justify-center text-[#850E35] group-hover:bg-[#850E35] group-hover:text-[#FFFBF1] transition-colors shadow-2xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FFF5E4] border border-[#850E35]/20 text-[#850E35]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#850E35] mb-1 group-hover:text-[#E36A6A] transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-medium text-[#850E35]/60 mb-3">
                    {pillar.subtitle}
                  </div>

                  <p className="text-sm text-[#850E35]/80 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#850E35]/10 flex items-center justify-between text-xs text-[#850E35] font-semibold">
                  <span>Methodology Pillar 0{idx + 1}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
