import React, { useRef, useEffect, useState } from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const ACADEMIC_NODES = [
  { id: 'a1', label: 'Data Structures',     category: 'Foundation',   matchTo: 'i1', strength: 'High'     },
  { id: 'a2', label: 'DBMS',                category: 'Databases',    matchTo: 'i4', strength: 'Strong'   },
  { id: 'a3', label: 'Computer Networks',   category: 'Systems',      matchTo: 'i2', strength: 'Moderate' },
  { id: 'a4', label: 'Operating Systems',   category: 'Core Systems', matchTo: 'i5', strength: 'Partial'  },
  { id: 'a5', label: 'Software Engineering',category: 'Methodology',  matchTo: 'i1', strength: 'Moderate' },
];

const INDUSTRY_NODES = [
  { id: 'i1', label: 'Python & Fast Prototyping',    category: 'Languages',     status: 'Matched',       isGap: false },
  { id: 'i2', label: 'Cloud Computing & AWS',         category: 'Infrastructure',status: 'Matched',       isGap: false },
  { id: 'i3', label: 'Machine Learning & PyTorch',    category: 'Applied AI',   status: 'Skill Gap',     isGap: true  },
  { id: 'i4', label: 'Data Engineering & Pipelines',  category: 'Big Data',     status: 'Matched',       isGap: false },
  { id: 'i5', label: 'Docker & Containerization',     category: 'DevOps',       status: 'Partial Match', isGap: false },
  { id: 'i6', label: 'Generative AI & LLM Systems',   category: 'Emerging',     status: 'Skill Gap',     isGap: true  },
];

const CONNECTIONS = [
  { from: 0, to: 0, type: 'matched' },
  { from: 1, to: 3, type: 'matched' },
  { from: 2, to: 1, type: 'matched' },
  { from: 3, to: 4, type: 'partial' },
  { from: 4, to: 0, type: 'matched' },
];

const GAP_INDUSTRY_INDICES = [2, 5];

function cubicPoint(t, p0, p1, p2, p3) {
  const u = 1 - t;
  return {
    x: u*u*u*p0.x + 3*u*u*t*p1.x + 3*u*t*t*p2.x + t*t*t*p3.x,
    y: u*u*u*p0.y + 3*u*u*t*p1.y + 3*u*t*t*p2.y + t*t*t*p3.y,
  };
}

// Draw a bezier and return the 4 control points for particle reuse
function bezier(ctx, x0,y0, x1,y1, x2,y2, x3,y3) {
  ctx.beginPath();
  ctx.moveTo(x0, y0);
  ctx.bezierCurveTo(x1,y1, x2,y2, x3,y3);
  ctx.stroke();
  return [
    {x:x0,y:y0},{x:x1,y:y1},{x:x2,y:y2},{x:x3,y:y3}
  ];
}

export default function SkillNetwork() {
  const canvasRef     = useRef(null);
  const containerRef  = useRef(null);
  const leftRefs      = useRef([]);
  const rightRefs     = useRef([]);
  const leftPanelRef  = useRef(null);
  const rightPanelRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const hoveredRef    = useRef(null);
  useEffect(() => { hoveredRef.current = hovered; }, [hovered]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId, width = 0, height = 0;
    // Fewer particles on narrow (mobile) screens — 42 riding lines packed
    // into a short horizontal span reads as visual noise rather than motion.
    const NUM_P = typeof window !== 'undefined' && window.innerWidth < 640 ? 22 : 42;
    const particles = Array.from({ length: NUM_P }, () => ({
      ci: Math.floor(Math.random() * CONNECTIONS.length),
      t:  Math.random(),
      spd: 0.16 + Math.random() * 0.18,
      r:  1.5 + Math.random() * 1.5,
      a:  0.3  + Math.random() * 0.6,
    }));

    const resize = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr  = window.devicePixelRatio || 1;
      width  = rect.width;
      height = Math.max(width < 640 ? 420 : 500, rect.height || 500);
      canvas.width  = width  * dpr;
      canvas.height = height * dpr;
      canvas.style.width  = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.resetTransform?.();
      ctx.scale(dpr, dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    if (containerRef.current) ro.observe(containerRef.current);

    let time = 0, lastTs = performance.now();
    const noMotion = window.matchMedia?.('(prefers-reduced-motion:reduce)').matches;

    // Cache the bezier control points each frame so particles can reuse them
    // without re-computing from DOM measurements.
    let leftPaths  = [];  // [{p0,p1,p2,p3}]  one per CONNECTIONS entry, left half
    let rightPaths = [];  // [{p0,p1,p2,p3}]  one per CONNECTIONS entry, right half

    const render = (ts) => {
      const dt = Math.min(0.05, (ts - lastTs) / 1000);
      lastTs = ts;
      if (!noMotion) time += dt * 1.1;

      ctx.clearRect(0, 0, width, height);

      const cRect = containerRef.current?.getBoundingClientRect();
      if (!cRect) { animId = requestAnimationFrame(render); return; }

      const measure = (el, edge) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          x: (edge === 'right' ? r.right : r.left) - cRect.left,
          y: r.top + r.height / 2 - cRect.top,
        };
      };

      const LP = ACADEMIC_NODES .map((_, i) => measure(leftRefs.current[i],  'right') ?? { x: 0,     y: height*(i+1)/(ACADEMIC_NODES.length+1)  });
      const RP = INDUSTRY_NODES .map((_, i) => measure(rightRefs.current[i], 'left')  ?? { x: width,  y: height*(i+1)/(INDUSTRY_NODES.length+1) });

      const cx = width  * 0.5;
      const cy = height * 0.5;

      // ── Box dimensions ─────────────────────────────────────────────────
      // Sized against the real gap between the left/right card panels so
      // it never collides with them. On desktop that gap is always large
      // (>220px), so isCompact stays false and BW/BH/fonts are the exact
      // original fixed values — nothing changes there. Only genuinely
      // narrow (mobile) gaps trigger the smaller box + smaller type.
      const leftPanelRect  = leftPanelRef.current?.getBoundingClientRect();
      const rightPanelRect = rightPanelRef.current?.getBoundingClientRect();
      const panelGapEdgeL  = leftPanelRect  ? leftPanelRect.right - cRect.left  : cx - 148;
      const panelGapEdgeR  = rightPanelRect ? rightPanelRect.left - cRect.left  : cx + 148;
      const availableGap   = Math.max(0, panelGapEdgeR - panelGapEdgeL);
      const isCompact      = availableGap < 220;

      const BW = isCompact ? Math.max(78, Math.min(140, availableGap - 18)) : 148;
      const BH = isCompact ? 58 : 88;
      const BX = cx - BW / 2;
      const BY = cy - BH / 2;

      const titleFont    = isCompact ? '600 8px Inter,system-ui,sans-serif'   : '600 10px Inter,system-ui,sans-serif';
      const subtitleFont = isCompact ? 'bold 10.5px Inter,system-ui,sans-serif' : 'bold 13.5px Inter,system-ui,sans-serif';
      const captionFont  = isCompact ? '500 7.5px monospace'                 : '500 9.5px monospace';
      const titleGap     = isCompact ? 15 : 22;
      const captionGap    = isCompact ? 14 : 20;

      // ── Key anchor points ──────────────────────────────────────────────
      // mergeL: where all LEFT branches converge (left edge of box)
      // fanR:   where all RIGHT branches originate (right edge of box)
      const mergeL = { x: BX,      y: cy };
      const fanR   = { x: BX + BW, y: cy };

      const h = hoveredRef.current;

      // ══════════════════════════════════════════════════════════════════
      // LEFT BRANCHES:  card.right  →  mergeL
      //
      // Strategy: leave card horizontally, arrive at mergeL horizontally.
      // CP1: pull right from card at card.y
      // CP2: arrive from left at mergeL.y
      // The horizontal pull (spread) equals ~55% of the total x-distance.
      // ══════════════════════════════════════════════════════════════════
      // On a narrow container the horizontal room between cards and the box
      // is small relative to how tall the stack of cards is — pulling the
      // control points out further (as a fraction of that smaller distance)
      // keeps lines from all reading as one bunched-up near-vertical band.
      const leftPullRatio  = isCompact ? 0.72 : 0.55;
      const bigPullRatio   = isCompact ? 0.74 : 0.60;
      const cardPullRatio  = isCompact ? 0.16 : 0.25;

      leftPaths = [];
      CONNECTIONS.forEach((conn) => {
        const lp  = LP[conn.from];
        const hi  = h === ACADEMIC_NODES[conn.from].id || h === INDUSTRY_NODES[conn.to].id;
        const dx  = mergeL.x - lp.x;
        const pull = dx * leftPullRatio;

        ctx.strokeStyle = hi ? 'rgba(133,14,53,0.95)' : 'rgba(133,14,53,0.25)';
        ctx.lineWidth   = hi ? 2.5 : 1.2;
        ctx.setLineDash([]);

        // CP1 stays at card height, CP2 arrives at center height
        const pts = bezier(ctx,
          lp.x,          lp.y,          // start
          lp.x + pull,   lp.y,          // CP1: horizontal departure
          mergeL.x - pull * 0.2, mergeL.y,  // CP2: gentle arrival
          mergeL.x,      mergeL.y       // end: merge point
        );
        leftPaths.push({ p0:pts[0], p1:pts[1], p2:pts[2], p3:pts[3] });
      });

      rightPaths = [];
      CONNECTIONS.forEach((conn) => {
        const rp  = RP[conn.to];
        const hi  = h === ACADEMIC_NODES[conn.from].id || h === INDUSTRY_NODES[conn.to].id;

        const totalDx   = rp.x - fanR.x;
        const bigPull   = totalDx * bigPullRatio;   // CP1: stay horizontal this long
        const cardPull  = totalDx * cardPullRatio;  // CP2: arrive from this far left of card

        const color = conn.type === 'partial'
          ? `rgba(227,106,106,${hi ? 1 : 0.55})`
          : `rgba(133,14,53,${hi ? 0.95 : 0.42})`;

        ctx.strokeStyle = color;
        ctx.lineWidth   = hi ? 2.5 : 1.2;
        ctx.setLineDash([]);

        const pts = bezier(ctx,
          fanR.x,              fanR.y,   // start: fan point (box right edge, center)
          fanR.x + bigPull,    fanR.y,   // CP1: travel FAR right, STAY at center height
          rp.x   - cardPull,   rp.y,     // CP2: arrive at card height from the left
          rp.x,                rp.y      // end: card left edge
        );
        rightPaths.push({ p0:pts[0], p1:pts[1], p2:pts[2], p3:pts[3] });
      });

      // ══════════════════════════════════════════════════════════════════
      // GAP BRANCHES (dashed):  fanR  →  gap card
      // Same geometry as right branches but dashed red
      // ══════════════════════════════════════════════════════════════════
      GAP_INDUSTRY_INDICES.forEach((toIdx) => {
        const rp  = RP[toIdx];
        const hi  = h === INDUSTRY_NODES[toIdx].id;

        const totalDx  = rp.x - fanR.x;
        const bigPull  = totalDx * bigPullRatio;
        const cardPull = totalDx * cardPullRatio;

        ctx.strokeStyle = hi ? 'rgba(227,106,106,1)' : 'rgba(227,106,106,0.60)';
        ctx.lineWidth   = hi ? 2.5 : 1.4;
        ctx.setLineDash([5, 5]);

        bezier(ctx,
          fanR.x,             fanR.y,
          fanR.x + bigPull,   fanR.y,
          rp.x   - cardPull,  rp.y,
          rp.x,               rp.y
        );
        ctx.setLineDash([]);

        // Warning dot at card entry
        ctx.beginPath();
        ctx.arc(rp.x - 4, rp.y, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = hi ? 'rgba(227,106,106,1)' : 'rgba(227,106,106,0.65)';
        ctx.fill();
      });

      // ══════════════════════════════════════════════════════════════════
      // PARTICLES — ride left path then right path of same connection
      // ══════════════════════════════════════════════════════════════════
      if (!noMotion) {
        particles.forEach((p) => {
          p.t += p.spd * dt;
          if (p.t >= 1) {
            p.t -= 1;
            p.ci = Math.floor(Math.random() * CONNECTIONS.length);
          }

          let pt;
          if (p.t < 0.5) {
            // Left half
            const seg = leftPaths[p.ci];
            if (!seg) return;
            pt = cubicPoint(p.t * 2, seg.p0, seg.p1, seg.p2, seg.p3);
          } else {
            // Right half
            const seg = rightPaths[p.ci];
            if (!seg) return;
            pt = cubicPoint((p.t - 0.5) * 2, seg.p0, seg.p1, seg.p2, seg.p3);
          }

          ctx.beginPath();
          ctx.arc(pt.x, pt.y, p.r, 0, Math.PI * 2);
          ctx.fillStyle   = `rgba(227,106,106,${p.a})`;
          ctx.shadowColor = 'rgba(227,106,106,0.55)';
          ctx.shadowBlur  = 5;
          ctx.fill();
          ctx.shadowBlur  = 0;
        });
      }

      // ══════════════════════════════════════════════════════════════════
      // CENTER ENGINE
      // ══════════════════════════════════════════════════════════════════
      const pulse = (isCompact ? Math.min(48, BW * 0.42) : 62) + Math.sin(time * 2.2) * (isCompact ? 3 : 5);

      // Outer glow
      const grd = ctx.createRadialGradient(cx, cy, 8, cx, cy, isCompact ? 60 : 82);
      grd.addColorStop(0, 'rgba(227,106,106,0.13)');
      grd.addColorStop(1, 'rgba(255,245,228,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, pulse + (isCompact ? 10 : 16), 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();

      // Dashed orbit ring
      ctx.beginPath();
      ctx.arc(cx, cy, pulse, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(133,14,53,0.18)';
      ctx.lineWidth   = 1;
      ctx.setLineDash([3, 5]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Merge + fan anchor dots
      [mergeL, fanR].forEach((pt) => {
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle   = 'rgba(133,14,53,0.22)';
        ctx.fill();
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle   = 'rgba(133,14,53,0.55)';
        ctx.fill();
      });

      // Box shadow
      ctx.save();
      ctx.shadowColor   = 'rgba(133,14,53,0.16)';
      ctx.shadowBlur    = 24;
      ctx.shadowOffsetY = 5;
      ctx.fillStyle     = '#FFF5E4';
      ctx.beginPath();
      ctx.roundRect(BX, BY, BW, BH, isCompact ? 10 : 14);
      ctx.fill();
      ctx.restore();

      // Box border
      ctx.beginPath();
      ctx.roundRect(BX, BY, BW, BH, isCompact ? 10 : 14);
      ctx.strokeStyle = '#850E35';
      ctx.lineWidth   = 1.8;
      ctx.stroke();

      // Box text
      ctx.textAlign = 'center';
      ctx.fillStyle = '#850E35';
      ctx.font      = titleFont;
      ctx.fillText('SkillDelta AI/ML', cx, cy - titleGap);
      ctx.font      = subtitleFont;
      ctx.fillText('Semantic Matching', cx, cy + 1);
      ctx.fillStyle = 'rgba(133,14,53,0.55)';
      ctx.font      = captionFont;
      if (!isCompact || BW >= 110) {
        ctx.fillText('Embedding Δ = 384-dim', cx, cy + captionGap);
      }

      // Activity dot
      ctx.beginPath();
      ctx.arc(BX + BW - (isCompact ? 8 : 10), BY + (isCompact ? 8 : 10), isCompact ? 3 : 3.5, 0, Math.PI * 2);
      ctx.fillStyle = '#E36A6A';
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  // ── JSX ────────────────────────────────────────────────────────────────────
  return (
    <div className="relative w-full select-none">

      {/* Header */}
      <div className="flex items-center justify-between px-2 mb-3 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#FFF5E4] text-[#850E35] border border-[#850E35]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E36A6A] animate-pulse" />
            Live Semantic Network
          </span>
          <span className="hidden sm:inline text-[#850E35]/60 font-mono text-[11px]">
            SentenceTransformers · pgvector
          </span>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-medium text-[#850E35]">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#850E35] inline-block" /> Matched
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-[#E36A6A] inline-block" /> Skill Gap
          </span>
        </div>
      </div>

      {/* Canvas wrapper */}
      <div  ref={containerRef} className="relative min-h-[440px] sm:min-h-[700px] w-full rounded-2xl border border-[#850E35]/20 bg-[#FFF5E4]/40 overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />

        {/* LEFT — Academic */}
        <div
          ref={leftPanelRef}
          className="absolute left-2 sm:left-4 top-0 bottom-0 flex flex-col justify-around py-4 sm:py-6 z-10 w-[30%] min-w-[96px] sm:w-48"
        >
          <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#850E35]/55 px-1 mb-1 truncate">
            Academic
          </div>
          {ACADEMIC_NODES.map((node, i) => (
            <div
              key={node.id}
              ref={(el) => (leftRefs.current[i] = el)}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(node.id)}
              onTouchEnd={()   => setHovered(null)}
              className={`p-1.5 sm:p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                hovered === node.id
                  ? 'bg-white border-[#850E35] shadow-md shadow-[#850E35]/15 scale-105 ring-2 ring-[#850E35]/20'
                  : 'bg-[#FFFBF1]/95 border-[#850E35]/15 hover:border-[#850E35]/40'
              }`}
            >
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] text-[#850E35]/55 font-medium mb-0.5 gap-1">
                <span className="truncate">{node.category}</span>
                <span className="text-[#850E35] font-bold shrink-0 hidden sm:inline">{node.strength}</span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#850E35] truncate">{node.label}</div>
            </div>
          ))}
        </div>

        {/* RIGHT — Industry */}
        <div
          ref={rightPanelRef}
          className="absolute right-2 sm:right-4 top-0 bottom-0 flex flex-col justify-around py-6 z-10 w-[34%] min-w-[104px] sm:w-52"
        >
          <div className="text-[10px] font-bold uppercase tracking-wider text-[#850E35]/55 px-1 mb-1 text-right truncate">
            Industry Demand
          </div>
          {INDUSTRY_NODES.map((node, i) => (
            <div
              key={node.id}
              ref={(el) => (rightRefs.current[i] = el)}
              onMouseEnter={() => setHovered(node.id)}
              onMouseLeave={() => setHovered(null)}
              onTouchStart={() => setHovered(node.id)}
              onTouchEnd={()   => setHovered(null)}
              className={`p-1.5 sm:p-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                hovered === node.id
                  ? node.isGap
                    ? 'bg-white border-[#E36A6A] shadow-md shadow-[#E36A6A]/20 scale-105 ring-2 ring-[#E36A6A]/30'
                    : 'bg-white border-[#850E35] shadow-md shadow-[#850E35]/15 scale-105 ring-2 ring-[#850E35]/20'
                  : node.isGap
                  ? 'bg-[#FFF5E4] border-[#E36A6A]/45 hover:border-[#E36A6A]'
                  : 'bg-[#FFFBF1]/95 border-[#850E35]/15 hover:border-[#850E35]/40'
              }`}
            >
              <div className="flex items-center justify-between text-[9px] sm:text-[10px] mb-0.5 gap-1">
                <span className="text-[#850E35]/55 font-medium truncate">{node.category}</span>
                <span className={`inline-flex items-center gap-0.5 px-1 sm:px-1.5 py-0.5 rounded font-bold text-[8px] sm:text-[9px] shrink-0 ${
                  node.isGap
                    ? 'bg-[#E36A6A] text-[#FFFBF1]'
                    : node.status === 'Partial Match'
                    ? 'bg-[#D97A2A] text-[#FFFBF1]'
                    : 'bg-[#850E35] text-[#FFFBF1]'
                }`}>
                  {node.isGap
                    ? <AlertTriangle className="w-2.5 h-2.5" />
                    : <CheckCircle2  className="w-2.5 h-2.5" />}
                  <span className="hidden sm:inline">{node.status}</span>
                </span>
              </div>
              <div className="text-[10px] sm:text-xs font-semibold text-[#850E35] truncate">{node.label}</div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[10px] text-[#850E35]/35 mt-2">
        Hover a card to highlight its connection · tap on mobile
      </p>
    </div>
  );
}