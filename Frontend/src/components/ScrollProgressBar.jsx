import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { cn } from '@/lib/utils';

/**
 * ScrollProgressBar component inspired by Magic UI (@magicui/scroll-progress).
 * Tracks window or container scroll progress with optional spring physics.
 */
export function ScrollProgressBar({
  className,
  spring = true,
  springOptions = { stiffness: 260, damping: 35, restDelta: 0.001 },
  containerRef,
  ...props
}) {
  const { scrollYProgress } = useScroll(
    containerRef ? { container: containerRef } : undefined
  );

  const scaleX = spring
    ? useSpring(scrollYProgress, springOptions)
    : scrollYProgress;

  return (
    <motion.div
      className={cn(
        'fixed inset-x-0 top-0 z-50 h-[3px] origin-left bg-gradient-to-r from-[#6F0A2B] via-[#850E35] to-[#B8254E] shadow-[0_0_8px_rgba(111,10,43,0.4)] pointer-events-none',
        className
      )}
      style={{
        scaleX,
      }}
      {...props}
    />
  );
}

export const ScrollProgress = ScrollProgressBar;
export default ScrollProgressBar;
