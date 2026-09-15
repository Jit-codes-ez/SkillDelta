import React from 'react';
import ScrollAnimation from '../components/ScrollAnimation';
import Hero from '../sections/Hero';
import ProblemSection from '../sections/ProblemSection';
import Workflow from '../sections/Workflow';
import AIPipeline from '../sections/AIPipeline';
import WhoIsItFor from '../sections/WhoIsItFor';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      {/* 1. Hero Section with Signature SkillDelta Network Visualizer */}
      <Hero />

      {/* 2. Problem Section: Education evolves. Industry evolves faster. */}
      <ScrollAnimation threshold={0.1}>
        <ProblemSection />
      </ScrollAnimation>

      {/* 3. Workflow Section: 8-Stage End-to-End Timeline */}
      <ScrollAnimation threshold={0.1}>
        <Workflow />
      </ScrollAnimation>

      {/* 4. Target Audiences: Who is it for? */}
      <ScrollAnimation threshold={0.1}>
        <WhoIsItFor />
      </ScrollAnimation>

      {/* 5. AI Pipeline Section: Behind the Intelligence */}
      <ScrollAnimation threshold={0.1}>
        <AIPipeline />
      </ScrollAnimation>

      {/* 6. Closing Institutional Call to Action */}
      <ScrollAnimation threshold={0.1}>
        <CTA />
      </ScrollAnimation>
    </>
  );
}
