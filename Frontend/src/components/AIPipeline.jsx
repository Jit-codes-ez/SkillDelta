import React from 'react';
import {
  FileText,
  BrainCircuit,
  Languages,
  DatabaseZap,
  Sparkles,
  ArrowRight,
  Cpu,
  CheckCircle2
} from 'lucide-react';

const PIPELINE_BLOCKS = [
  {
    phase: 'Input Ingestion',
    tech: 'PyMuPDF / python-docx',
    title: 'Curriculum PDF / DOCX',
    description: 'Document extraction preserving header hierarchies, tables, and syllabi outlines.',
    icon: FileText,
  },
  {
    phase: 'NLP Tokenization',
    tech: 'spaCy / Transformer NER',
    title: 'Entity Extraction',
    description: 'Custom entity recognition extracting domain primitives, prerequisites, and learning goals.',
    icon: Languages,
  },
  {
    phase: 'Latent Space Projection',
    tech: 'Sentence Transformers',
    title: 'Semantic Embeddings',
    description: 'Generates 1536-dimensional dense vector embeddings representing syllabus concepts.',
    icon: BrainCircuit,
  },
  {
    phase: 'Vector Store & Indexing',
    tech: 'PostgreSQL + pgvector',
    title: 'HNSW Semantic Search',
    description: 'High-speed approximate nearest neighbor search across historical and current industry skills.',
    icon: DatabaseZap,
  },
  {
    phase: 'Grounded Synthesis',
    tech: 'RAG Architecture + Gemini',
    title: 'Evidence-Based Output',
    description: 'Grounds recommended modifications in retrieved real-world job specifications and industry evidence.',
    icon: Sparkles,
  },
];

export default function AIPipeline() {
  return (
    <section className="py-24 bg-[#FFF5E4]/50 border-b border-[#850E35]/15 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            Technical Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#850E35] tracking-tight leading-tight">
            Behind the <span className="text-[#E36A6A]">Intelligence</span>.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#850E35]/80 leading-relaxed">
            A rigorous AI/ML architecture combining natural language extraction, high-dimensional vector search, and retrieval-augmented generation (RAG).
          </p>
        </div>

        {/* Pipeline Diagram Strip */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {PIPELINE_BLOCKS.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#850E35]/15 p-5 flex flex-col justify-between hover:border-[#850E35]/40 hover:shadow-sm transition-all group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#850E35]/50">
                      Step 0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20">
                      {block.tech}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#FFF5E4] border border-[#850E35]/15 flex items-center justify-center text-[#850E35] group-hover:bg-[#850E35] group-hover:text-[#FFFBF1] transition-colors mb-4 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="text-[11px] font-semibold text-[#E36A6A] mb-0.5">
                    {block.phase}
                  </div>
                  <h3 className="text-sm font-bold text-[#850E35] mb-2 leading-snug">
                    {block.title}
                  </h3>

                  <p className="text-xs text-[#850E35]/80 leading-relaxed">
                    {block.description}
                  </p>
                </div>

                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-[#850E35]/30 pointer-events-none">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Technical Callout Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#FFF5E4] via-[#FFFBF1] to-[#FFF5E4] border border-[#850E35]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#850E35] shrink-0" />
            <span className="text-[#850E35]">
              <strong>Zero Hallucination Safeguard:</strong> All recommendations generated by Gemini are constrained via RAG to retrieved industry skill corpus entries.
            </span>
          </div>
          <span className="font-mono text-[#850E35]/60 shrink-0 text-[11px]">
            Embeddings: SentenceTransformers • Storage: pgvector
          </span>
        </div>
      </div>
    </section>
  );
}
