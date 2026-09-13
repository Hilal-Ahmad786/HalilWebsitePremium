import Link from 'next/link';

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" aria-label="Araban Nakit ana sayfa" className="display inline-flex items-baseline whitespace-nowrap text-[1.05rem] tracking-[-.06em] sm:text-xl">
      <span className={inverse ? 'text-white' : 'text-ink'}>ARABAN</span>
      <span className="text-accent">&nbsp;NAKİT.</span>
    </Link>
  );
}
