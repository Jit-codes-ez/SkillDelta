import React, { useEffect, useRef, useState } from 'react';

/**
 * usePrefersReducedMotion Hook
 * Detects if the user prefers reduced motion for accessibility.
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return prefersReducedMotion;
}

/**
 * useScrollReveal
 * Dependency-free scroll animation hook built on IntersectionObserver.
 * Trigger once per element when ~15% of it is visible; never replays on scroll-back-up.
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Trigger immediately if already visible in viewport on mount
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setIsVisible(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isVisible];
}

/**
 * Reveal
 * Wraps cards and sections to animate into view on scroll:
 * - Opacity: 0 -> 1
 * - TranslateY: 10px -> 0
 * - Duration: 700ms
 * - Easing: cubic-bezier(0.16, 1, 0.3, 1)
 * - Supports stagger via `delay` (e.g. idx * 100ms)
 * - Disables transform & opacity transitions when prefers-reduced-motion is active.
 */
export default function Reveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  className = '',
  threshold = 0.15,
  rootMargin = '0px 0px -40px 0px',
  once = true,
  as: Component = 'div',
  ...props
}) {
  const [ref, isVisible] = useScrollReveal({ threshold, rootMargin, once });
  const prefersReducedMotion = usePrefersReducedMotion();

  // If user prefers reduced motion, disable transform/opacity transition entirely
  if (prefersReducedMotion) {
    return (
      <Component ref={ref} className={className} {...props}>
        {children}
      </Component>
    );
  }

  const base = 'will-change-transform transition-all';
  const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const variants = {
    'fade-up': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[10px]',
    'fade-down': isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-[10px]',
    'fade-in': isVisible ? 'opacity-100' : 'opacity-0',
    'zoom-in': isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95',
    'slide-left': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12',
    'slide-right': isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12',
    'blur-in': isVisible ? 'opacity-100 blur-none' : 'opacity-0 blur-sm',
  };

  return (
    <Component
      ref={ref}
      style={{
        transitionProperty: 'opacity, transform, filter',
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
        transitionDelay: `${delay}ms`,
        ...(props.style || {}),
      }}
      className={`${base} ${variants[variant] || variants['fade-up']} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export { Reveal };
export { Reveal as ScrollReveal };
export { Reveal as ScrollAnimation };