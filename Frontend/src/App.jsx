import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import Workflow from './components/Workflow';
import AIPipeline from './components/AIPipeline';
import SemanticMatching from './components/SemanticMatching';
import CurriculumVsIndustry from './components/CurriculumVsIndustry';
import IndustryIntelligence from './components/IndustryIntelligence';
import EmergingSkills from './components/EmergingSkills';
import GapAnalysis from './components/GapAnalysis';
import Recommendations from './components/Recommendations';
import ResearchSection from './components/ResearchSection';
import DashboardPreview from './components/DashboardPreview';
import WhoIsItFor from './components/WhoIsItFor';
import TechnologyStack from './components/TechnologyStack';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBF1] text-[#850E35] flex flex-col selection:bg-[#E36A6A]/25 selection:text-[#850E35]">
      {/* 1. Sticky / Transparent Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* 2. Hero Section with Signature SkillDelta Network Visualizer */}
        <Hero />

        {/* 3. Problem Section: Education evolves. Industry evolves faster. */}
        <ProblemSection />

        {/* 4. Workflow Section: 8-Stage End-to-End Timeline */}
        <Workflow />

        {/* 5. AI Pipeline Section: Behind the Intelligence */}
        <AIPipeline />

        {/* 6. Semantic Matching Section: Measure the Skill Delta */}
        <SemanticMatching />

        {/* 7. Curriculum vs Industry Comparison Visualizer */}
        <CurriculumVsIndustry />

        {/* 8. Industry Skill Intelligence Dashboard */}
        <IndustryIntelligence />

        {/* 9. Emerging Skills & Temporal Horizon Timeline */}
        <EmergingSkills />

        {/* 10. Gap Analysis Realistic Card Dossier */}
        <GapAnalysis />

        {/* 11. AI Recommendation Interface: Turn gaps into action */}
        <Recommendations />

        {/* 12. Research Section: 4 MCA Research Pillars */}
        <ResearchSection />

        {/* 13. SkillDelta Analysis Dashboard Console Preview */}
        <DashboardPreview />

        {/* 14. Target Audiences: Who is it for? */}
        <WhoIsItFor />

        {/* 15. Technology Stack Pill Badges Strip */}
        <TechnologyStack />

        {/* 16. Closing Institutional Call to Action */}
        <CTA />
      </main>

      {/* 17. Minimalist Institutional Footer */}
      <Footer />
    </div>
  );
}
