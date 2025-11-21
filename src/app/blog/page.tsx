
// ===== src/app/blog/page.tsx =====
import { Metadata } from 'next';
import { blogPosts } from '@/data/blog-posts';
import { BlogCard } from '@/components/blog';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: `Blog | ${siteConfig.name}`,
  description: 'Araç alım satım, ekspertiz ve otomotiv sektörü hakkında faydalı bilgiler ve rehberler.',
};

export default function BlogPage() {
  const publishedPosts = blogPosts.filter(post => post.published);

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-lacivert-700 mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Araç alım satım sürecinde bilmeniz gereken her şey, uzman yazılarımızda.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Empty State */}
        {publishedPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Henüz blog yazısı bulunmamaktadır.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}