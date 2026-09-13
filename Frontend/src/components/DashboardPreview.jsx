import React from 'react';
import {
  LayoutDashboard,
  Lock,
  RotateCw,
  Share2
} from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 bg-[#FFF5E4]/50 border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <LayoutDashboard className="w-3.5 h-3.5 text-[#E36A6A]" />
            Institutional Interface
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            SkillDelta <span className="text-[#E36A6A]">Analysis Dashboard</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            An empirical analytics console designed for academic deans, curriculum committees, and departmental assessment chairs.
          </p>
        </div>

        {/* Large Browser-Window Mockup with Subtle Frame Shadow */}
        <div className="max-w-6xl mx-auto rounded-2xl border border-[#850E35]/20 shadow-xl overflow-hidden bg-white">
          {/* macOS Browser Header Bar */}
          <div className="bg-[#FFF5E4] backdrop-blur-md px-4 py-3 border-b border-[#850E35]/15 flex items-center justify-between gap-4">
            {/* Window Traffic Lights */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="w-3 h-3 rounded-full bg-[#E36A6A]" />
              <span className="w-3 h-3 rounded-full bg-[#FFFBF1] border border-[#850E35]/30" />
              <span className="w-3 h-3 rounded-full bg-[#850E35]" />
            </div>

            {/* URL Input Bar */}
            <div className="flex-1 max-w-lg mx-auto bg-white border border-[#850E35]/20 rounded-lg px-3 py-1 flex items-center justify-between text-xs text-[#850E35] shadow-2xs">
              <div className="flex items-center gap-2 truncate">
                <Lock className="w-3.5 h-3.5 text-[#850E35] shrink-0" />
                <span className="font-mono text-[#850E35] font-medium">
                  https://skilldelta.internal/analytics/curriculum-audit
                </span>
              </div>
              <RotateCw className="w-3.5 h-3.5 text-[#850E35]/50 shrink-0 ml-2" />
            </div>

            <div className="flex items-center gap-2 text-[#850E35]/60">
              <Share2 className="w-4 h-4 cursor-pointer hover:text-[#850E35]" />
            </div>
          </div>

          {/* Dashboard Canvas Body */}
          <div className="p-6 sm:p-8 space-y-8 bg-white">
            {/* Top Bar: Title & Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#850E35]/10">
              <div>
                <span className="text-xs font-mono font-bold text-[#850E35]/60 uppercase tracking-wider">
                  Program: Computer Science & Engineering (B.Tech / MCA)
                </span>
                <h3 className="text-2xl font-bold text-[#850E35] mt-0.5">
                  Curriculum Alignment Diagnostic Overview
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20">
                  <span className="w-2 h-2 rounded-full bg-[#850E35] animate-pulse" />
                  Model Evaluation Ready
                </span>
              </div>
            </div>

            {/* 5 Top Primary Metrics with Exact Specified Values */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                  Alignment Index
                </div>
                <div className="text-3xl font-black font-mono text-[#850E35] mt-1">
                  72%
                </div>
                <div className="text-[10px] text-[#850E35]/70 mt-0.5">Curriculum–Industry</div>
              </div>

              <div className="p-4 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                  Skills Identified
                </div>
                <div className="text-3xl font-black font-mono text-[#850E35] mt-1">
                  42
                </div>
                <div className="text-[10px] text-[#850E35]/70 mt-0.5">In Coursework</div>
              </div>

              <div className="p-4 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                  Industry Skills
                </div>
                <div className="text-3xl font-black font-mono text-[#850E35] mt-1">
                  67
                </div>
                <div className="text-[10px] text-[#850E35]/70 mt-0.5">Market Required</div>
              </div>

              <div className="p-4 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                  Potential Gaps
                </div>
                <div className="text-3xl font-black font-mono text-[#E36A6A] mt-1">
                  18
                </div>
                <div className="text-[10px] text-[#850E35]/70 mt-0.5">Action Items</div>
              </div>

              <div className="p-4 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                  Emerging Skills
                </div>
                <div className="text-3xl font-black font-mono text-[#850E35] mt-1">
                  7
                </div>
                <div className="text-[10px] text-[#850E35]/70 mt-0.5">High Growth (YoY)</div>
              </div>
            </div>

            {/* Analytical Panels: Gap Analysis Chart & Recommendation Panel */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left 7 Cols: Cluster Overlap & Coverage */}
              <div className="lg:col-span-7 p-6 rounded-xl border border-[#850E35]/15 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#850E35]">
                    Syllabus Coverage vs Industry Demand
                  </h4>
                  <div className="flex items-center gap-3 text-xs font-medium text-[#850E35]/60">
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded bg-[#FFF5E4] border border-[#850E35]/30" /> Syllabus
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="w-2.5 h-2.5 rounded bg-[#850E35]" /> Industry
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#850E35]">Cloud Infrastructure & Kubernetes</span>
                      <span className="font-mono text-[#E36A6A] font-bold">-48% Gap</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35]/35 h-full rounded-full" style={{ width: '38%' }} />
                      </div>
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35] h-full rounded-full" style={{ width: '86%' }} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#850E35]">Applied Machine Learning & PyTorch</span>
                      <span className="font-mono text-[#E36A6A] font-bold">-54% Gap</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35]/35 h-full rounded-full" style={{ width: '28%' }} />
                      </div>
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35] h-full rounded-full" style={{ width: '82%' }} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#850E35]">Database Systems & Data Pipelines</span>
                      <span className="font-mono text-[#850E35] font-bold">+6% Aligned</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35]/35 h-full rounded-full" style={{ width: '84%' }} />
                      </div>
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35] h-full rounded-full" style={{ width: '78%' }} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-[#850E35]">Algorithms & Complexity Theory</span>
                      <span className="font-mono text-[#850E35] font-bold">+12% Aligned</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35]/35 h-full rounded-full" style={{ width: '92%' }} />
                      </div>
                      <div className="bg-[#FFF5E4] h-2.5 rounded-full overflow-hidden">
                        <div className="bg-[#850E35] h-full rounded-full" style={{ width: '80%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right 5 Cols: Recommendation Action Queue */}
              <div className="lg:col-span-5 p-6 rounded-xl border border-[#850E35]/15 bg-[#FFF5E4]/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#850E35]">
                      Recommendation Panel
                    </h4>
                    <span className="text-[10px] font-mono text-[#850E35]/60">Prioritized Queue</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 bg-white rounded-lg border border-[#850E35]/15 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[#850E35]">Module IV: Cloud Architecture</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#E36A6A] text-[#FFFBF1] border border-[#E36A6A]">
                          Priority 1
                        </span>
                      </div>
                      <p className="text-[#850E35]/80 leading-snug">
                        Add VPC networking and container orchestration to CS304.
                      </p>
                    </div>

                    <div className="p-3 bg-white rounded-lg border border-[#850E35]/15 text-xs">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-[#850E35]">Module II: Applied ML Pipeline</span>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/25">
                          Priority 2
                        </span>
                      </div>
                      <p className="text-[#850E35]/80 leading-snug">
                        Integrate Python feature engineering and model evaluation lab.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#850E35]/10 mt-4 text-[11px] text-[#850E35]/50 font-mono">
                  * Illustrative demonstrator metrics for research preview.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
