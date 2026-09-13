import React from 'react';

const TECH_ITEMS = [
  { name: 'Python', role: 'Core ML Engine', category: 'Core' },
  { name: 'FastAPI', role: 'Inference API', category: 'Backend' },
  { name: 'React', role: 'Interactive Client', category: 'Frontend' },
  { name: 'spaCy', role: 'Domain NER & NLP', category: 'NLP' },
  { name: 'Scikit-learn', role: 'Clustering & Manifold', category: 'ML' },
  { name: 'Pandas', role: 'Data Transformation', category: 'Data' },
  { name: 'Sentence Transformers', role: '1536-dim Embeddings', category: 'Embeddings' },
  { name: 'PostgreSQL', role: 'Relational Store', category: 'DB' },
  { name: 'pgvector', role: 'HNSW Vector Index', category: 'Vector' },
  { name: 'RAG Architecture', role: 'Evidence Retrieval', category: 'Retrieval' },
  { name: 'Gemini', role: 'Context Synthesis', category: 'LLM' },
];

export default function TechnologyStack() {
  return (
    <section className="py-16 bg-[#FFF5E4]/50 border-b border-[#850E35]/15 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#850E35]/60">
            Technology Foundation & Research Stack
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#850E35] mt-1">
            Engineered with Open AI/ML & Scientific Computing Standards
          </h3>
        </div>

        {/* Minimal Pill/Badge Component Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          {TECH_ITEMS.map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#850E35]/15 text-xs text-[#850E35] shadow-2xs hover:border-[#850E35]/40 hover:shadow-xs transition-all cursor-default"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#850E35]" />
              <span className="font-bold text-[#850E35]">{tech.name}</span>
              <span className="text-[10px] font-mono text-[#850E35]/60">({tech.role})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
