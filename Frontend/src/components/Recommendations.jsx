import React from 'react';
import { Lightbulb, FileCheck2, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

export default function Recommendations() {
  return (
    <section className="py-24 bg-[#FFF5E4]/50 border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <Lightbulb className="w-3.5 h-3.5 text-[#E36A6A]" />
            Actionable Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Turn gaps into <span className="text-[#E36A6A]">action</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            SkillDelta bridges the gap from detection to implementation by synthesizing modular course enhancements grounded in retrieved industry specifications.
          </p>
        </div>

        {/* Two-Column AI Recommendation Interface */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Gap Analysis Findings */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-[#850E35]/15 p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-[#850E35]/50 uppercase tracking-wider">
                  Diagnostic Input
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded bg-[#E36A6A] text-[#FFFBF1] border border-[#E36A6A]">
                  Deficit Identified
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#850E35] mb-1">
                Machine Learning & Practical AI
              </h3>
              <p className="text-xs text-[#850E35]/60 mb-6">
                Assessed across CS Core Degree Syllabi
              </p>

              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-[#FFF5E4]/50 border border-[#850E35]/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#850E35]/70">Curriculum Coverage:</span>
                  <span className="text-xs font-mono font-bold text-[#FFFBF1] bg-[#E36A6A] px-2 py-0.5 rounded border border-[#E36A6A]">
                    Low (14%)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFF5E4]/50 border border-[#850E35]/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#850E35]/70">Market Demand:</span>
                  <span className="text-xs font-mono font-bold text-[#FFFBF1] bg-[#850E35] px-2 py-0.5 rounded border border-[#850E35]">
                    High (86%)
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#FFF5E4]/50 border border-[#850E35]/15 flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#850E35]/70">Estimated Syllabus Lag:</span>
                  <span className="text-xs font-mono font-bold text-[#850E35] bg-white px-2 py-0.5 rounded border border-[#850E35]/20">
                    ~3.8 Years
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#850E35]/10 text-[11px] text-[#850E35]/50 font-mono">
              Status: Board Amendment Recommended
            </div>
          </div>

          {/* Right Column: AI Evidence-Grounded Recommendation */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-[#850E35]/25 p-6 sm:p-8 flex flex-col justify-between shadow-xs relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E36A6A]/10 rounded-bl-full pointer-events-none -z-0" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#850E35] text-[#FFFBF1] flex items-center justify-center shadow-xs">
                    <Sparkles className="w-4 h-4 text-[#E36A6A]" />
                  </div>
                  <span className="text-xs font-bold text-[#850E35] uppercase tracking-wider font-mono">
                    AI Curriculum Recommendation
                  </span>
                </div>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20">
                  Accredited Module Draft
                </span>
              </div>

              <h4 className="text-lg font-extrabold text-[#850E35] mb-3">
                Proposed Course Module: Foundations of Machine Learning & Applied Modeling
              </h4>

              <div className="p-4 rounded-xl bg-[#FFF5E4]/50 border border-[#850E35]/15 text-xs sm:text-sm text-[#850E35]/85 leading-relaxed mb-5">
                Introduce an introductory Machine Learning module covering supervised learning algorithms, loss optimization, model evaluation metrics, feature engineering, and practical Python-based implementations using standard open frameworks.
              </div>

              {/* Grounded Evidence Box ("Why?") */}
              <div className="p-4 rounded-xl bg-[#FFF5E4] border border-[#850E35]/20 mb-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#850E35] mb-1 flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-[#E36A6A]" />
                  Why This Recommendation?
                </div>
                <p className="text-xs text-[#850E35]/85 leading-relaxed">
                  “Retrieved industry evidence indicates a <strong>+44% YoY increase</strong> in entry-level engineering postings requiring fundamental familiarity with model evaluation, gradient descent, and applied Python AI libraries.”
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#850E35]/10 flex items-center justify-between text-xs text-[#850E35]/70 relative z-10">
              <span className="flex items-center gap-1 text-[#850E35] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#850E35]" />
                Verified Grounded in Retrieved Corpus
              </span>
              <button
                onClick={() => alert("Curriculum board draft amendment ready for download.")}
                className="font-semibold text-[#850E35] hover:text-[#6F0A2B] hover:underline flex items-center gap-1"
              >
                Export Module PDF <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
