import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PostCard from '@/components/journal/PostCard'
import { journalPosts } from '@/data/journal'

export const metadata: Metadata = {
  title: 'בלוג',
  description: 'השראה, טיפים וסיפורי חתונות אמיתיים — הבלוג של אוראל דדון.',
}

export default function JournalPage() {
  const [featured, ...rest] = journalPosts

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-bg-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-text-secondary font-sans">יומן</span>
            <h1 className="font-display text-5xl md:text-6xl text-text-primary leading-tight font-light mt-4 mb-4">
              הבלוג
            </h1>
            <p className="font-sans text-text-secondary font-light text-base max-w-md mx-auto">
              השראה, טיפים, וסיפורי חתונות אמיתיים
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          {featured && (
            <AnimatedSection className="mb-10">
              <PostCard post={featured} featured />
            </AnimatedSection>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <AnimatedSection key={post.slug} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 100 : 200}>
                  <PostCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
