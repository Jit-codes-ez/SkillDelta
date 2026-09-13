import React, { useState } from 'react';
import { GitCompareArrows, CheckCircle2, AlertTriangle, Network } from 'lucide-react';

const ACADEMIC_ITEMS = [
  { id: 'a1', title: 'Data Structures & Algorithms', tag: 'Foundation', matchId: 'i1', score: 94 },
  { id: 'a2', title: 'Database Management Systems', tag: 'Core DB', matchId: 'i5', score: 88 },
  { id: 'a3', title: 'Computer Networks', tag: 'Infrastructure', matchId: 'i2', score: 72 },
  { id: 'a4', title: 'Operating Systems & Scheduling', tag: 'Systems', matchId: 'i3', score: 48 },
  { id: 'a5', title: 'Software Engineering & Design Patterns', tag: 'Methodology', matchId: 'i1', score: 81 },
];

const INDUSTRY_ITEMS = [
  { id: 'i1', title: 'Python & Modern Application Stack', category: 'Language', status: 'MATCHED', type: 'matched' },
  { id: 'i2', title: 'Cloud Computing (AWS / Azure / GCP)', category: 'Cloud Infra', status: 'MATCHED', type: 'matched' },
  { id: 'i3', title: 'Docker & Container Orchestration', category: 'DevOps', status: 'PARTIAL MATCH', type: 'partial' },
  { id: 'i4', title: 'Machine Learning & Neural Architectures', category: 'Applied AI', status: 'SKILL GAP', type: 'gap' },
  { id: 'i5', title: 'Data Engineering & Scalable Pipelines', category: 'Big Data', status: 'MATCHED', type: 'matched' },
  { id: 'i6', title: 'Generative AI & LLM Engineering', category: 'Emerging', status: 'SKILL GAP', type: 'gap' },
];

export default function CurriculumVsIndustry() {
  const [filter, setFilter] = useState('all'); // all, matched, partial, gap
  const [selectedAcademic, setSelectedAcademic] = useState(null);

  const filteredIndustry = INDUSTRY_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section className="py-24 bg-[#FFF5E4]/50 border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <GitCompareArrows className="w-3.5 h-3.5" />
            Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Academic Curriculum vs.{' '}
            <span className="text-[#E36A6A]">Industry Demand</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            Map pedagogical learning modules directly against market requirements to identify strong conceptual alignments and unaddressed curriculum gaps.
          </p>

          {/* Filter Toggles */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                filter === 'all'
                  ? 'bg-[#850E35] text-[#FFFBF1] border-[#850E35]'
                  : 'bg-white text-[#850E35] border-[#850E35]/20 hover:bg-[#FFF5E4]'
              }`}
            >
              All Connections (6)
            </button>
            <button
              onClick={() => setFilter('matched')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                filter === 'matched'
                  ? 'bg-[#850E35] text-[#FFFBF1] border-[#850E35]'
                  : 'bg-white text-[#850E35] border-[#850E35]/20 hover:bg-[#FFF5E4]'
              }`}
            >
              Matched (3)
            </button>
            <button
              onClick={() => setFilter('partial')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                filter === 'partial'
                  ? 'bg-[#FFF5E4] text-[#850E35] border-[#850E35] font-bold'
                  : 'bg-white text-[#850E35] border-[#850E35]/20 hover:bg-[#FFF5E4]'
              }`}
            >
              Partial Match (1)
            </button>
            <button
              onClick={() => setFilter('gap')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all border ${
                filter === 'gap'
                  ? 'bg-[#E36A6A] text-[#FFFBF1] border-[#E36A6A]'
                  : 'bg-white text-[#850E35] border-[#850E35]/20 hover:bg-[#FFF5E4]'
              }`}
            >
              Skill Gaps (2)
            </button>
          </div>
        </div>

        {/* Interactive Comparison Board */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-10 rounded-2xl border border-[#850E35]/15 shadow-sm">
          {/* Left Column: Academic Coursework */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#850E35]/60 mb-2">
              Academic Curriculum (Syllabus)
            </div>
            {ACADEMIC_ITEMS.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedAcademic(item.id)}
                className={`p-4 rounded-xl border transition-all cursor-pointer ${
                  selectedAcademic === item.id
                    ? 'border-[#850E35] bg-[#FFF5E4]/50 shadow-xs'
                    : 'border-[#850E35]/15 hover:border-[#850E35]/35 bg-[#FFFBF1]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-semibold text-[#850E35]/60">{item.tag}</span>
                  <span className="font-mono text-[#850E35] font-bold">{item.score}% score</span>
                </div>
                <div className="text-sm font-bold text-[#850E35]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>

          {/* Center Connection Indicator */}
          <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center text-[#850E35]/40">
            <div className="w-10 h-10 rounded-full bg-[#FFF5E4] flex items-center justify-center text-[#850E35] mb-2 shadow-2xs">
              <Network className="w-5 h-5 text-[#850E35]" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#850E35]/60 text-center">
              Semantic Vector Crosswalk
            </span>
          </div>

          {/* Right Column: Industry Demand */}
          <div className="md:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#850E35]/60 mb-2">
              Industry Demand Requirements
            </div>
            {filteredIndustry.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-xl border transition-all ${
                  item.type === 'gap'
                    ? 'border-[#E36A6A]/50 bg-[#FFF5E4]/60'
                    : item.type === 'partial'
                    ? 'border-[#850E35]/30 bg-[#FFF5E4]/40'
                    : 'border-[#850E35]/15 bg-[#FFFBF1]/50'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="font-semibold text-[#850E35]/60">{item.category}</span>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded font-bold text-[10px] ${
                      item.type === 'gap'
                        ? 'bg-[#E36A6A] text-[#FFFBF1] border border-[#E36A6A]'
                        : item.type === 'partial'
                        ? 'bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/30'
                        : 'bg-[#850E35] text-[#FFFBF1] border border-[#850E35]'
                    }`}
                  >
                    {item.type === 'gap' ? (
                      <AlertTriangle className="w-3 h-3" />
                    ) : (
                      <CheckCircle2 className="w-3 h-3" />
                    )}
                    {item.status}
                  </span>
                </div>
                <div className="text-sm font-bold text-[#850E35]">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
