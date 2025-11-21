
// ===== src/app/blog/[slug]/page.tsx =====
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import { BlogContent } from '@/components/blog';
import { siteConfig } from '@/data/site';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts
    .filter(post => post.published)
    .map((post) => ({
      slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    return {
      title: 'Blog Yazısı Bulunamadı',
    };
  }

  return {
    title: post.metaTitle || `${post.title} | ${siteConfig.name}`,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug && p.published);

  if (!post) {
    notFound();
  }

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8 text-sm">
          <ol className="flex items-center gap-2 text-gray-600">
            <li>
              <Link href="/" className="hover:text-turuncu-500">Ana Sayfa</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-turuncu-500">Blog</Link>
            </li>
            <li>/</li>
            <li className="text-lacivert-700 font-medium">{post.title}</li>
          </ol>
        </nav>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <BlogContent post={post} />

          {/* Back to Blog */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-turuncu-500 font-semibold hover:gap-3 transition-all"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tüm Blog Yazılarına Dön
            </Link>
          </div>
        </div>

        {/* Related Posts (Optional) */}
        <div className="mt-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-lacivert-700 mb-8">
            İlgili Yazılar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts
              .filter(p => p.published && p.id !== post.id && p.category === post.category)
              .slice(0, 3)
              .map(relatedPost => (
                <div key={relatedPost.id} className="text-center">
                  <Link href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-turuncu-100 to-lacivert-100 mb-4 flex items-center justify-center text-4xl">
                      📝
                    </div>
                    <h3 className="font-bold text-lacivert-700 group-hover:text-turuncu-500 transition-colors mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}