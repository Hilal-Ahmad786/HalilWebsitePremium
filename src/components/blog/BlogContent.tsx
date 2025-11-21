
// ===== src/components/blog/BlogContent.tsx =====
import { BlogPost } from '@/data/types';
import { formatDate } from '@/lib/utils';

interface BlogContentProps {
  post: BlogPost;
}

export function BlogContent({ post }: BlogContentProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Header */}
      <div className="mb-8 not-prose">
        <div className="flex items-center gap-3 mb-4">
          <span className="inline-block px-4 py-1 bg-turuncu-500/10 text-turuncu-500 rounded-full font-medium text-sm">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">
            {formatDate(post.date)}
          </span>
          <span className="text-gray-500 text-sm">
            📖 {post.readTime} dakika okuma
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-lacivert-700 mb-4">
          {post.title}
        </h1>

        {/* Author */}
        <div className="flex items-center gap-3 py-4 border-y border-gray-200">
          <div className="h-12 w-12 rounded-full bg-turuncu-500/20 flex items-center justify-center text-turuncu-500 text-lg font-bold">
            {post.author.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-lacivert-700">
              {post.author}
            </div>
            <div className="text-sm text-gray-500">
              Yazar
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image Placeholder */}
      <div className="mb-8 not-prose">
        <div className="aspect-video w-full overflow-hidden rounded-xl bg-gradient-to-br from-turuncu-100 to-lacivert-100 flex items-center justify-center">
          <span className="text-8xl">📝</span>
        </div>
      </div>

      {/* Content */}
      <div dangerouslySetInnerHTML={{ __html: post.content }} />

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200 not-prose">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Etiketler:</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-turuncu-500/10 hover:text-turuncu-500 transition-colors cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

