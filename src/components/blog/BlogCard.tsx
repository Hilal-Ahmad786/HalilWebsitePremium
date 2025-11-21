// ===== src/components/blog/BlogCard.tsx =====
import Link from 'next/link';
import { BlogPost } from '@/data/types';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-xl transition-all border border-gray-100">
      {/* Image */}
      <div className="aspect-video w-full overflow-hidden bg-gray-200">
        <div className="h-full w-full bg-gradient-to-br from-turuncu-100 to-lacivert-100 flex items-center justify-center text-6xl">
          📝
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-3 text-sm">
          <span className="inline-block px-3 py-1 bg-turuncu-500/10 text-turuncu-500 rounded-full font-medium">
            {post.category}
          </span>
          <span className="text-gray-500">
            {formatDate(post.date)}
          </span>
          <span className="text-gray-500">
            📖 {post.readTime} dk okuma
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-lacivert-700 mb-3 group-hover:text-turuncu-500 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Author & Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-turuncu-500/20 flex items-center justify-center text-turuncu-500 text-sm font-bold">
              {post.author.charAt(0)}
            </div>
            <span className="text-sm text-gray-700">
              {post.author}
            </span>
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-turuncu-500 font-semibold group-hover:gap-2 transition-all text-sm"
          >
            Devamını Oku
            <svg className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
