'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Renders nothing. On mount (and on every client-side route change) it adds
 * `reveal-ready` to <html> and observes every `.reveal` element on the page,
 * adding `.is-visible` the first time each scrolls into view. Elements are
 * visible by default in plain CSS — `.reveal` is only hidden once this class
 * is present — so nothing breaks if JS is slow, disabled, or errors out.
 */
export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('reveal-ready');

    const targets = Array.from(document.querySelectorAll<HTMLElement>('.reveal:not(.is-visible)'));
    if (targets.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
