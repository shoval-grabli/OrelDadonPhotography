import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getJournalPosts, journalSlugs } from '@/data/journal'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { formatHebrewDate } from '@/lib/utils'

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return journalSlugs.map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const posts = await getJournalPosts()
  const post = posts.find(p => p.slug === slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const posts = await getJournalPosts()
  const post = posts.find(p => p.slug === slug)
  if (!post) notFound()

  const lines = post.content.trim().split('\n').filter(line => line.trim())

  return (
    <>
      {/* Hero image */}
      <div className="relative h-[55vh] md:h-[65vh] overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        ) : (
          <div className="absolute inset-0 bg-bg-section" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/75 via-text-primary/25 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 p-8 md:p-14 max-w-4xl mx-auto">
          <span className="text-xs tracking-widest uppercase text-white/60 font-sans">
            {post.category}
          </span>
          <h1 className="font-display text-3xl md:text-5xl text-white leading-snug font-light mt-2">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 mt-4 text-white/60 text-xs font-sans">
            <span>{formatHebrewDate(post.date)}</span>
            <span>·</span>
            <span>{post.readTime} דקות קריאה</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="max-w-2xl mx-auto px-6">

          {/* Excerpt */}
          <AnimatedSection>
            <p className="font-sans text-text-secondary font-light text-lg leading-relaxed mb-12 pb-12 border-b border-border-soft">
              {post.excerpt}
            </p>
          </AnimatedSection>

          {/* Tip content */}
          <AnimatedSection delay={100}>
            <div className="flex flex-col">
              {lines.map((line, i) => {
                const trimmed = line.trim()
                const isHeading = trimmed.startsWith('**') && trimmed.endsWith('**')
                const text = isHeading ? trimmed.replace(/\*\*/g, '') : trimmed

                if (isHeading) {
                  return (
                    <h2
                      key={i}
                      className="font-display text-2xl md:text-3xl text-text-primary font-light mt-12 first:mt-0 mb-3"
                    >
                      {text}
                    </h2>
                  )
                }

                return (
                  <p
                    key={i}
                    className="font-sans text-text-secondary font-light leading-loose text-base"
                  >
                    {text}
                  </p>
                )
              })}
            </div>
          </AnimatedSection>

          {/* Tags */}
          {post.tags.length > 0 && (
            <AnimatedSection delay={200} className="mt-14 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="text-xs font-sans px-3 py-1 border border-border-soft text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </AnimatedSection>
          )}

          {/* Back + CTA */}
          <AnimatedSection
            delay={300}
            className="mt-16 pt-8 border-t border-border-soft flex flex-col items-start gap-6"
          >
            <Link
              href="/journal"
              className="flex items-center gap-2 text-sm text-text-secondary hover:text-button-soft transition-colors font-sans"
            >
              <span>→</span>
              חזרה לטיפים
            </Link>
            <div className="flex flex-col gap-2">
              <p className="font-sans text-text-secondary text-sm font-light">
                רוצים שנצלם את החתונה שלכם?
              </p>
              <Button href="/contact">לבדיקת זמינות</Button>
            </div>
          </AnimatedSection>

        </div>
      </section>
    </>
  )
}
