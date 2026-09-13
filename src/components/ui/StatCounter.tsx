'use client';

import { useEffect, useRef, useState } from 'react';

interface StatCounterProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  duration?: number;
  /** Start counting immediately on mount instead of waiting to scroll into view — for above-the-fold placements. */
  immediate?: boolean;
  className?: string;
}

export function StatCounter({ value, label, prefix = '', suffix = '', duration = 1400, immediate = false, className = '' }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const run = () => {
      if (prefersReduced) {
        setDisplay(value);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay(Math.round(value * eased));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    if (immediate) {
      run();
      return;
    }

    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) {
      run();
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration, immediate]);

  return (
    <div ref={ref} className={className}>
      <p className="display text-3xl text-ink sm:text-4xl">{prefix}{display.toLocaleString('tr-TR')}{suffix}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}
