import React, { useState } from 'react';
import { Network, Sparkles } from 'lucide-react';

const SAMPLES = [
  {
    id: 'db',
    academic: 'Database Management',
    academicDetail: 'Relational schema design, normalization (1NF–BCNF), and basic relational calculus.',
    industry: 'SQL / Relational Databases',
    industryDetail: 'PostgreSQL query optimization, index tuning, ACID guarantees, and production sharding.',
    keywordOverlap: '0% Exact Token Overlap',
    semanticScore: 91,
    matchLevel: 'Strong Match',
    levelColor: 'emerald',
    explanation:
      'Zero exact token matches exist between "Database Management" and "SQL", yet dense embeddings map both to the latent subspace of relational query execution and relational invariants.',
  },
  {
    id: 'net',
    academic: 'Basic Networking',
    academicDetail: 'OSI 7-layer stack, TCP/IP packet framing, subnetting, and socket programming basics.',
    industry: 'Cloud Networking & VPCs',
    industryDetail: 'Virtual Private Clouds (VPC), ingress controllers, BGP routing, and AWS security groups.',
    keywordOverlap: '25% Syntactic Token Overlap',
    semanticScore: 68,
    matchLevel: 'Moderate Match',
    levelColor: 'indigo',
    explanation:
      'Basic subnetting and routing concepts provide a direct theoretical substrate, but cloud abstraction layers and software-defined network policies require incremental applied coverage.',
  },
  {
    id: 'os',
    academic: 'Operating Systems',
    academicDetail: 'Process scheduling, PCB memory management, virtual memory pages, and kernel interrupts.',
    industry: 'Kubernetes & Container Orchestration',
    industryDetail: 'Container runtime interfaces (CRI), pod auto-scaling, Helm charts, and service meshes.',
    keywordOverlap: '0% Syntactic Token Overlap',
    semanticScore: 34,
    matchLevel: 'Limited / Indirect Match',
    levelColor: 'amber',
    explanation:
      'While Linux namespaces and cgroups underpin containers, standard undergraduate OS coursework covers raw kernel interrupts rather than cluster-wide distributed container scheduling.',
  },
];

export default function SemanticMatching() {
  const [activeIdx, setActiveIdx] = useState(0);
  const sample = SAMPLES[activeIdx];

  return (
    <section id="capabilities" className="py-24 bg-[#FFFBF1] border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <Network className="w-3.5 h-3.5" />
            Semantic Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Measure the <span className="text-[#E36A6A]">Skill Delta</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            SkillDelta does not simply search for matching keywords. It uses deep semantic embeddings to identify true conceptual relationships between syllabus topics and industry skills.
          </p>
        </div>

        {/* Interactive Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {SAMPLES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveIdx(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                activeIdx === idx
                  ? 'bg-[#850E35] text-[#FFFBF1] border-[#850E35] shadow-sm shadow-[#850E35]/20'
                  : 'bg-[#FFF5E4] text-[#850E35] border-[#850E35]/20 hover:bg-[#F5E4CE]'
              }`}
            >
              Pair {idx + 1}: {item.academic} ↔ {item.industry}
            </button>
          ))}
        </div>

        {/* Visual Comparison Card */}
        <div className="max-w-4xl mx-auto bg-[#FFF5E4]/50 rounded-2xl border border-[#850E35]/15 p-6 sm:p-10 shadow-xs">
          {/* Top Comparison Entities */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {/* Academic Entity Box */}
            <div className="bg-white p-6 rounded-xl border border-[#850E35]/15 shadow-2xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60 mb-1">
                Academic Curriculum Topic
              </div>
              <h3 className="text-xl font-bold text-[#850E35] mb-2">
                {sample.academic}
              </h3>
              <p className="text-xs text-[#850E35]/80 leading-relaxed">
                {sample.academicDetail}
              </p>
            </div>

            {/* Industry Entity Box */}
            <div className="bg-white p-6 rounded-xl border border-[#850E35]/30 shadow-2xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35] mb-1">
                Industry Skill Requirement
              </div>
              <h3 className="text-xl font-bold text-[#850E35] mb-2">
                {sample.industry}
              </h3>
              <p className="text-xs text-[#850E35]/80 leading-relaxed">
                {sample.industryDetail}
              </p>
            </div>
          </div>

          {/* Center Connection & Meter */}
          <div className="my-8 pt-6 border-t border-[#850E35]/15">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-semibold text-[#850E35]/70 uppercase tracking-wider">
                  Semantic Cosine Alignment
                </span>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-3xl font-black font-mono text-[#850E35]">
                    {sample.semanticScore}%
                  </span>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded border ${
                      sample.levelColor === 'emerald'
                        ? 'bg-[#850E35] text-[#FFFBF1] border-[#850E35]'
                        : sample.levelColor === 'indigo'
                        ? 'bg-[#FFF5E4] text-[#850E35] border-[#850E35]/30'
                        : 'bg-[#E36A6A] text-[#FFFBF1] border-[#E36A6A]'
                    }`}
                  >
                    {sample.matchLevel}
                  </span>
                </div>
              </div>

              <div className="text-left sm:text-right text-xs font-mono text-[#850E35]/70">
                <div>Keyword Baseline: <span className="text-[#E36A6A] font-bold">{sample.keywordOverlap}</span></div>
                <div className="text-[11px] text-[#850E35]/50">Dense Vector Projection (1536-dim)</div>
              </div>
            </div>

            {/* Visual Meter Bar */}
            <div className="w-full bg-[#FFF5E4] border border-[#850E35]/10 h-3 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  sample.levelColor === 'emerald'
                    ? 'bg-[#850E35]'
                    : sample.levelColor === 'indigo'
                    ? 'bg-gradient-to-r from-[#850E35] to-[#E36A6A]'
                    : 'bg-[#E36A6A]'
                }`}
                style={{ width: `${sample.semanticScore}%` }}
              />
            </div>
          </div>

          {/* Semantic Explanation Note */}
          <div className="p-4 rounded-xl bg-white border border-[#850E35]/20 text-xs text-[#850E35]/85 leading-relaxed flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#E36A6A] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#850E35]">Semantic Insight: </strong>
              {sample.explanation}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
