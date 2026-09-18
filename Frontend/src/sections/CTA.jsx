import React from 'react';
import { Sparkles, BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { TextAnimate } from '@/components/TextAnimation';
import { Button1 } from '@/components/Button1';
import { Button2 } from '@/components/Button2';

export default function CTA() {
  return (
    <section id="cta" className="py-24 bg-gradient-to-b from-[#520720] via-[#850E35] to-[#400418] text-[#FFFBF1] relative overflow-hidden">
      {/* Subtle Technical Grid Overlay */}
      <div className="absolute inset-0 bg-technical-grid opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#E36A6A]/20 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Continuous Curriculum Intelligence Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4]/15 text-[#FFF5E4] border border-[#FFF5E4]/25 mb-6 shadow-2xs backdrop-blur-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-[#E36A6A]" />
            Continuous Curriculum Intelligence
        </div>

        {/* Heading: Step 1 then Step 2 */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-[#FFFBF1] mb-6">
          <TextAnimate
            animation="slideLeft"
            by="character"
            as="span"
            delay={0.4}
            duration={0.5}
            once={true}
            className="inline"
          >
            Know what your curriculum teaches,
          </TextAnimate>{' '}
          <span className="inline-block">
            <TextAnimate
              animation="slideLeft"
              by="character"
              as="span"
              delay={0.95}
              duration={0.5}
              once={true}
              className="inline"
              segmentClassName="text-[#FCE7CE]"
            >
              Understand what the industry needs.
            </TextAnimate>
          </span>
        </h2>

        {/* Subtitle Paragraph: Words appear one by one */}
        <TextAnimate
          animation="fadeIn"
          by="word"
          as="p"
          delay={1.5}
          duration={0.8}
          once={true}
          className="text-base sm:text-lg text-[#FFF5E4]/90 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          SkillDelta bridges academic curricula and evolving industry skill demand through AI/ML-driven analysis, empirical vector comparison, and evidence-grounded recommendations.
        </TextAnimate>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button1
            href="/signup"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#FFF5E4] hover:bg-[#FFFBF1] active:scale-95 text-[#850E35] font-bold text-sm shadow-lg shadow-black/25 hover:shadow-xl transition-all group"
          >
              Analyze a Curriculum
          </Button1>
          <Button2
            href="#workflow"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#850E35]/60 hover:bg-[#850E35] active:scale-95 text-[#FFFBF1] font-semibold text-sm border border-[#FFF5E4]/30 hover:border-[#FFF5E4]/50 transition-all group"
          >
            <BookOpen className="w-4 h-4 text-[#FFF5E4]/70 group-hover:text-[#FFF5E4] transition-colors" />
              Explore the Methodology
          </Button2>
        </div>
      </div>
    </section>
  );
}
