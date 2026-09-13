import Link from 'next/link';

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="Araban Nakit ana sayfa" className="display inline-flex items-baseline whitespace-nowrap text-[1.05rem] tracking-[-.06em] sm:text-xl">
      <span className={inverse ? 'text-white' : 'text-ink'}>ARABAN</span>
      {/* On light headers/footers the bright #D9F43B accent fails text contrast (~1.2:1) — use the
          darker accent-ink tone there instead, and reserve the bright accent for dark backgrounds. */}
      <span className={inverse ? 'text-accent' : 'text-accent-ink'}>&nbsp;NAKİT.</span>
    </Link>
  );
}
