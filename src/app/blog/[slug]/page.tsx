import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaArrowRight, FaClock } from 'react-icons/fa';
import { blogPosts } from '@/data/blog-posts';
import { BlogPost } from '@/data/types';
import { cities } from '@/data/cities';
import { siteConfig } from '@/config/site';
import { ogImage, serviceImages, getCityImage, getCityImageAlt } from '@/data/media';
import { HeroCtaButtons, FullCtaButtons } from '@/components/ui/CtaButtons';

interface Props { params: Promise<{ slug: string }> }

const coreServices: [string, string][] = [
  ['kazali-arac-alim', 'Kazalı Araç Alımı'],
  ['hasarli-arac-alim', 'Hasarlı Araç Alımı'],
  ['pert-arac-alim', 'Pert Araç Alımı'],
  ['hurda-arac-alim', 'Hurda Araç Alımı'],
];

// Blog posts aren't tagged with a city id, so detect one from the title/tags —
// lets the article hero and the related-links block use a real, topically
// relevant photo and link instead of a generic fallback, for every post this
// matches (not just this one), with a safe fallback when nothing matches.
function detectCity(post: BlogPost) {
  const haystack = `${post.title} ${post.tags.join(' ')}`.toLocaleLowerCase('tr-TR');
  return cities.find((city) => city.published && haystack.includes(city.name.toLocaleLowerCase('tr-TR'))) ?? null;
}

export async function generateStaticParams() {
  return blogPosts.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);
  if (!post) return { title: 'Blog Yazısı Bulunamadı' };
  return {
    title: { absolute: post.metaTitle || `${post.title} | ${siteConfig.name}` },
    description: post.metaDescription || post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.published && p.id !== post.id && p.category === post.category).slice(0, 3);
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const city = detectCity(post);
  const articleImage = city ? getCityImage(city.id) : serviceImages['hasarli-arac-alim'];
  const articleImageAlt = city ? getCityImageAlt(city.id, city.name) : 'Hasarlı araç değerlendirme';

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        author: { '@type': 'Organization', name: post.author },
        publisher: { '@id': `${siteConfig.url}/#organization` },
        image: [`${siteConfig.url}${articleImage}`],
        articleSection: post.category,
        keywords: post.tags.join(', '),
        inLanguage: 'tr-TR',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: siteConfig.url },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteConfig.url}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />

      <header className="border-b border-line bg-surface">
        <div className="site-container grid gap-10 py-12 lg:grid-cols-[1.1fr_.9fr] lg:py-16">
          <div>
            <nav aria-label="Sayfa yolu" className="text-sm text-muted">
              <Link href="/">Ana Sayfa</Link><span className="px-2">/</span><Link href="/blog">Blog</Link>
            </nav>
            <p className="eyebrow mt-10">{post.category}</p>
            <h1 className="display mt-4 text-4xl leading-tight sm:text-6xl">{post.title}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <span>{post.date}</span>
              <span aria-hidden="true">·</span>
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5"><FaClock className="text-xs" />{post.readTime} dk okuma</span>
            </div>
            <HeroCtaButtons />
          </div>
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-soft">
            <Image src={articleImage} alt={articleImageAlt} fill priority sizes="(max-width:1024px) 100vw,45vw" className="object-cover" />
          </div>
        </div>
      </header>

      <main className="site-container section-space">
        <article className="prose mx-auto" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mx-auto mt-14 max-w-[820px] border-t border-line pt-10">
          <p className="eyebrow">ARACINIZI DEĞERLENDİRELİM</p>
          <h2 className="display mt-3 text-2xl">Teklif almak için hemen ulaşın.</h2>
          <FullCtaButtons />
        </div>

        <div className="mx-auto mt-10 grid max-w-[820px] gap-3 sm:grid-cols-2">
          {coreServices.map(([slug, label]) => (
            <Link key={slug} href={`/hizmetler/${slug}`} className="group flex items-center justify-between border border-line bg-surface p-4 text-sm font-bold text-ink transition-colors hover:border-ink">
              {label}<FaArrowRight className="shrink-0 text-xs transition group-hover:translate-x-1" />
            </Link>
          ))}
          {city && (
            <Link href={`/${city.slug}`} className="group flex items-center justify-between border border-line bg-surface p-4 text-sm font-bold text-ink transition-colors hover:border-ink sm:col-span-2">
              {city.name}&apos;da Hasarlı Araç Alımı<FaArrowRight className="shrink-0 text-xs transition group-hover:translate-x-1" />
            </Link>
          )}
        </div>

        <div className="mx-auto mt-14 flex max-w-[820px] justify-between border-t border-line pt-8">
          <Link href="/blog" className="inline-flex items-center gap-2 font-bold"><FaArrowLeft />Tüm yazılar</Link>
        </div>

        {related.length > 0 && (
          <section className="reveal mx-auto mt-20 max-w-[1120px]">
            <h2 className="display text-3xl">İlgili Yazılar</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Link key={item.id} href={`/blog/${item.slug}`} className="border border-line bg-surface p-5 transition-colors hover:border-ink">
                  <p className="eyebrow">{item.category}</p>
                  <h3 className="display mt-3 text-lg">{item.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
