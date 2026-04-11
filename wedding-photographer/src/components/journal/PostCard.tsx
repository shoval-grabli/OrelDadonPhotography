import Image from 'next/image'
import Link from 'next/link'
import type { JournalPost } from '@/types'
import { formatHebrewDate } from '@/lib/utils'

interface PostCardProps {
  post: JournalPost
  featured?: boolean
}

const categoryColors: Record<string, string> = {
  'חתונות אמיתיות': 'bg-bg-section text-text-primary',
  'טיפים': 'bg-accent/20 text-text-primary',
  'השראה': 'bg-taupe/20 text-text-primary',
  'מאחורי הקלעים': 'bg-bg-main text-text-primary',
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  if (featured) {
    return (
      <Link href={`/journal/${post.slug}`} className="group block">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border-soft overflow-hidden hover:border-button-soft transition-colors duration-300">
          <div className="relative aspect-[4/3] md:aspect-auto">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-12 flex flex-col gap-4 bg-bg-main justify-center">
            <span className={`text-xs tracking-wider px-3 py-1 font-sans w-fit ${categoryColors[post.category] || ''}`}>
              {post.category}
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-text-primary font-light leading-snug group-hover:text-button-soft transition-colors">
              {post.title}
            </h2>
            <p className="font-sans text-text-secondary font-light text-sm leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-text-secondary font-sans pt-2 border-t border-border-soft">
              <span>{formatHebrewDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} דקות קריאה</span>
            </div>
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/journal/${post.slug}`} className="group block">
      <article className="border border-border-soft overflow-hidden hover:border-button-soft transition-colors duration-300 h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
        <div className="p-6 flex flex-col gap-3 flex-1 bg-bg-main">
          <span className={`text-xs tracking-wider px-3 py-1 font-sans w-fit ${categoryColors[post.category] || ''}`}>
            {post.category}
          </span>
          <h3 className="font-display text-xl text-text-primary font-light leading-snug group-hover:text-button-soft transition-colors">
            {post.title}
          </h3>
          <p className="font-sans text-text-secondary font-light text-sm leading-relaxed line-clamp-2 flex-1">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-text-secondary font-sans pt-3 border-t border-border-soft">
            <span>{formatHebrewDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} דקות קריאה</span>
          </div>
        </div>
      </article>
    </Link>
  )
}
