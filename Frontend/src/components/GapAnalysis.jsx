import React from 'react';
import { AlertTriangle, ShieldAlert, FileCheck2, Sparkles } from 'lucide-react';

export default function GapAnalysis() {
  return (
    <section className="py-24 bg-[#FFFBF1] border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <ShieldAlert className="w-3.5 h-3.5 text-[#E36A6A]" />
            Diagnostic Dossier
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Realistic <span className="text-[#E36A6A]">Gap Analysis</span> in Action.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            Every identified discrepancy is paired with measurable alignment metrics, priority ratings, and retrieved industry evidence.
          </p>
        </div>

        {/* Realistic Analysis Card */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#850E35]/20 shadow-md overflow-hidden">
          {/* Header Strip */}
          <div className="bg-[#850E35] text-[#FFFBF1] p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#FFF5E4] font-bold uppercase tracking-wider mb-1">
                <AlertTriangle className="w-3.5 h-3.5 text-[#E36A6A]" />
                <span>SKILL GAP DETECTED</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#FFFBF1]">
                Cloud Computing & Distributed Deployment
              </h3>
              <p className="text-xs text-[#FFF5E4]/80 mt-0.5">
                Evaluated Target: Undergraduate CS Core Curriculum
              </p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#E36A6A] text-[#FFFBF1] border border-[#E36A6A]">
                Priority: High
              </span>
            </div>
          </div>

          {/* 4 Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-y sm:divide-y-0 divide-[#850E35]/10 bg-[#FFF5E4]/60 border-b border-[#850E35]/15 text-center">
            <div className="p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                Industry Demand
              </div>
              <div className="text-xl font-extrabold font-mono text-[#850E35] mt-1">
                High (88%)
              </div>
            </div>

            <div className="p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                Curriculum Coverage
              </div>
              <div className="text-xl font-extrabold font-mono text-[#E36A6A] mt-1">
                Low (12%)
              </div>
            </div>

            <div className="p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                Semantic Alignment
              </div>
              <div className="text-xl font-extrabold font-mono text-[#850E35] mt-1">
                32% Cosine
              </div>
            </div>

            <div className="p-4">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#850E35]/60">
                Intervention Priority
              </div>
              <div className="text-xl font-extrabold font-mono text-[#E36A6A] mt-1">
                Tier-1 Urgent
              </div>
            </div>
          </div>

          {/* Body: Recommended Action & Evidence */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Recommended Action */}
            <div className="p-5 rounded-xl bg-[#FFF5E4]/60 border border-[#850E35]/20">
              <div className="text-xs font-bold uppercase tracking-wider text-[#850E35] mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E36A6A]" />
                Recommended Action
              </div>
              <p className="text-sm text-[#850E35] leading-relaxed font-medium">
                Introduce foundational cloud computing concepts, cloud architecture, deployment models, and practical cloud deployment modules into CS302 (Software Systems) or provide a dedicated elective.
              </p>
            </div>

            {/* Evidence Grounding */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#850E35]/60 mb-3 flex items-center gap-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-[#850E35]" />
                Retrieved Industry Evidence & Citations
              </div>
              <ul className="space-y-2.5 text-xs text-[#850E35]/85">
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#850E35] mt-1.5 shrink-0" />
                  <span>
                    <strong>Market Consensus:</strong> 84.6% of junior and mid-level software engineering requisitions specify hands-on experience with cloud primitives (VPC, IAM, container deployment).
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#850E35] mt-1.5 shrink-0" />
                  <span>
                    <strong>Accreditation Mapping:</strong> Directly satisfies ABET Criterion 4 (contemporary computing issues) and ACM/IEEE CS2023 Systems Architecture guidelines.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#850E35]/10 flex items-center justify-between text-xs text-[#850E35]/50 font-mono">
              <span>Diagnostic Ref: SD-GAP-CLOUD-089</span>
              <span>* Illustrative evaluation benchmark</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
