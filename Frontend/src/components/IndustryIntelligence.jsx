import React from 'react';
import { TrendingUp, Sparkles } from 'lucide-react';

const DEMAND_DATA = [
  { skill: 'Python & Fast Prototyping', share: 94, category: 'Core Language', trend: '+18%' },
  { skill: 'Cloud Computing (AWS / Azure / GCP)', share: 88, category: 'Infrastructure', trend: '+28%' },
  { skill: 'Machine Learning & PyTorch', share: 82, category: 'Applied AI', trend: '+44%' },
  { skill: 'Data Engineering & Modern ETL', share: 74, category: 'Data Architecture', trend: '+36%' },
  { skill: 'Cybersecurity & Zero Trust', share: 66, category: 'Security', trend: '+22%' },
];

const EMERGING_SKILLS = [
  { name: 'Generative AI & LLM Systems', velocity: '↑↑↑', gain: '+142%', status: 'Surging Demand' },
  { name: 'Cloud Native & K8s Orchestration', velocity: '↑↑', gain: '+86%', status: 'Rapid Adoption' },
  { name: 'Data Engineering & Vector DBs', velocity: '↑↑', gain: '+64%', status: 'Structural Standard' },
];

export default function IndustryIntelligence() {
  return (
    <section className="py-24 bg-[#FFFBF1] border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            Market Requisites
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Understand what the{' '}
            <span className="text-[#E36A6A]">industry is asking for</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            Continuously aggregate and analyze technical job specifications to uncover volume demand, growth rates, and fast-emerging production competencies.
          </p>
        </div>

        {/* Dashboard-Style Intelligence Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left: Demand Breakdown Bar Chart */}
          <div className="lg:col-span-7 bg-[#FFF5E4]/50 border border-[#850E35]/15 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#850E35]/15">
              <div>
                <h3 className="text-base font-bold text-[#850E35]">
                  Relative Industry Skill Demand
                </h3>
                <p className="text-xs text-[#850E35]/60 mt-0.5">
                  Prevalence across analyzed job specification requisitions
                </p>
              </div>
              <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white border border-[#850E35]/20 text-[#850E35] shadow-2xs">
                Demo Metric Index
              </span>
            </div>

            <div className="space-y-4">
              {DEMAND_DATA.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#850E35]">{item.skill}</span>
                      <span className="text-[10px] text-[#850E35]/50 font-mono">({item.category})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[#E36A6A] font-mono font-bold">{item.trend}</span>
                      <span className="font-bold text-[#850E35] font-mono">{item.share}%</span>
                    </div>
                  </div>

                  <div className="w-full bg-white border border-[#850E35]/10 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-[#850E35] h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Growth Curve Preview */}
            <div className="mt-8 pt-6 border-t border-[#850E35]/15">
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="font-bold text-[#850E35]">Aggregate Industry Velocity Index (Multi-Year)</span>
                <span className="text-[#E36A6A] font-bold font-mono">+34.8% YoY</span>
              </div>
              {/* SVG Sparkline Curve */}
              <div className="h-16 w-full bg-white rounded-xl border border-[#850E35]/15 p-2 flex items-end">
                <svg className="w-full h-12 overflow-visible" viewBox="0 0 400 60" preserveAspectRatio="none">
                  <path
                    d="M0,50 Q60,45 120,38 T240,24 T360,12 L400,6"
                    fill="none"
                    stroke="#850E35"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M0,50 Q60,45 120,38 T240,24 T360,12 L400,6 L400,60 L0,60 Z"
                    fill="url(#grad)"
                    opacity="0.18"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#850E35" />
                      <stop offset="100%" stopColor="#FFF5E4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Right: Emerging Skills Velocity */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-[#850E35]/15 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#850E35]/10">
                <div className="w-9 h-9 rounded-xl bg-[#FFF5E4] text-[#850E35] flex items-center justify-center font-bold">
                  <Sparkles className="w-4 h-4 text-[#E36A6A]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#850E35]">
                    Emerging Skills Radar
                  </h3>
                  <p className="text-xs text-[#850E35]/60 mt-0.5">
                    Highest acceleration in market requisitions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {EMERGING_SKILLS.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/40 hover:bg-[#FFF5E4] transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#850E35]">{skill.name}</span>
                      <span className="text-[#E36A6A] font-mono font-bold text-sm">
                        {skill.velocity}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#850E35]/70">{skill.status}</span>
                      <span className="font-mono font-bold text-[#FFFBF1] bg-[#850E35] px-2 py-0.5 rounded border border-[#850E35]">
                        {skill.gain}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#850E35]/10">
              <p className="text-[11px] text-[#850E35]/50 font-mono leading-relaxed">
                * Note: Values displayed are illustrative demonstration metrics configured for research benchmarking purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
