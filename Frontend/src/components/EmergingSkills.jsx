import React, { useState } from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

const TIMELINE_POINTS = [
  {
    year: '2023',
    theme: 'Cloud Native & Microservices',
    demandLevel: 62,
    curriculumLevel: 42,
    gapLabel: 'Moderate Latency (+20% Gap)',
    emergingSkills: ['Docker Containers', 'REST APIs', 'CI/CD Pipelines'],
    narrative:
      'Containerization and API contracts became industry standard while curricula were transitioning from monolithic Java servlets.',
  },
  {
    year: '2024',
    theme: 'Vector Embeddings & Distributed Data',
    demandLevel: 78,
    curriculumLevel: 44,
    gapLabel: 'Widening Disconnect (+34% Gap)',
    emergingSkills: ['HNSW Vector Search', 'pgvector & Pinecone', 'Data Lakes & Parquet'],
    narrative:
      'High-dimensional vector storage emerged as critical infrastructure, but curricula remained locked to classical B-Tree indexing.',
  },
  {
    year: '2025',
    theme: 'RAG Architecture & Agent Tooling',
    demandLevel: 92,
    curriculumLevel: 46,
    gapLabel: 'Severe Curriculum Gap (+46% Gap)',
    emergingSkills: ['RAG Retrieval Systems', 'LLM Function Calling', 'LangChain / LlamaIndex'],
    narrative:
      'AI-integrated software engineering became baseline requirement, exposing a systemic lag in traditional software engineering courses.',
  },
  {
    year: '2026',
    theme: 'Autonomous Multi-Agent Systems & MLOps',
    demandLevel: 98,
    curriculumLevel: 48,
    gapLabel: 'Critical Institutional Vacuum (+50% Gap)',
    emergingSkills: ['Agentic Workflows', 'LoRA / PEFT Tuning', 'Production MLOps CI/CD'],
    narrative:
      'Multi-agent orchestration and automated evaluation harnesses dominate production stacks with virtually zero presence in undergraduate syllabi.',
  },
];

export default function EmergingSkills() {
  const [selectedYear, setSelectedYear] = useState('2025');
  const activePoint = TIMELINE_POINTS.find((p) => p.year === selectedYear) || TIMELINE_POINTS[2];

  return (
    <section className="py-24 bg-[#FFF5E4]/50 border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <Clock className="w-3.5 h-3.5" />
            Temporal Dynamics
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Detect tomorrow's <span className="text-[#E36A6A]">curriculum gaps</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            While industry demand accelerates exponentially, academic curricula update linearly. This divergence produces an compounding curriculum gap over time.
          </p>
        </div>

        {/* Conceptual Visualizer: Divergence Curve */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-[#850E35]/15 p-6 sm:p-10 shadow-xs mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#850E35]/15">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#850E35]/60">
                The Divergence Law
              </span>
              <h3 className="text-xl font-bold text-[#850E35] mt-0.5">
                Industry Demand <span className="text-[#E36A6A]">↑</span> vs. Curriculum Coverage <span className="text-[#850E35]/50">→</span>
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-[#850E35] font-semibold">
                <span className="w-3 h-1 bg-[#850E35] rounded-full" /> Industry Demand Curve
              </span>
              <span className="flex items-center gap-1.5 text-[#850E35]/60">
                <span className="w-3 h-1 bg-[#FFF5E4] border border-[#850E35]/30 rounded-full" /> Curriculum Baseline
              </span>
            </div>
          </div>

          {/* Timeline Selector Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-8">
            {TIMELINE_POINTS.map((pt) => {
              const isSelected = selectedYear === pt.year;
              return (
                <button
                  key={pt.year}
                  onClick={() => setSelectedYear(pt.year)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-[#850E35] text-[#FFFBF1] border-[#850E35] shadow-sm shadow-[#850E35]/20'
                      : 'bg-[#FFF5E4] text-[#850E35] border-[#850E35]/15 hover:bg-[#F5E4CE]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono font-bold text-lg">{pt.year}</span>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-[#FFF5E4] text-[#850E35]' : 'bg-white text-[#850E35]/70'
                      }`}
                    >
                      Epoch
                    </span>
                  </div>
                  <div className={`text-xs font-medium truncate ${isSelected ? 'text-[#FFF5E4]' : 'text-[#850E35]/60'}`}>
                    {pt.theme}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Year Drilldown */}
          <div className="p-6 rounded-xl bg-[#FFF5E4]/40 border border-[#850E35]/15">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-[#E36A6A] uppercase">
                  Horizon {activePoint.year}
                </span>
                <h4 className="text-lg font-bold text-[#850E35] mt-0.5">
                  {activePoint.theme}
                </h4>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#E36A6A] text-[#FFFBF1] border border-[#E36A6A]">
                <AlertTriangle className="w-3.5 h-3.5" />
                {activePoint.gapLabel}
              </div>
            </div>

            <p className="text-sm text-[#850E35]/80 leading-relaxed mb-6">
              {activePoint.narrative}
            </p>

            {/* Emerging Skills Badges */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60 mb-2">
                Fast-Accelerating Production Competencies
              </div>
              <div className="flex flex-wrap gap-2">
                {activePoint.emergingSkills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white text-[#850E35] border border-[#850E35]/20 shadow-2xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
