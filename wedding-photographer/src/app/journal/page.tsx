import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import PostCard from '@/components/journal/PostCard'
import { getJournalPosts } from '@/data/journal'

export const metadata: Metadata = {
  title: 'טיפים לזוגות',
  description: 'מדריך מקצועי לזוגות — טיפים לצילומי התארגנות, חוץ, לו"ז ובחירת מקום.',
}

export default async function JournalPage() {
  const posts = await getJournalPosts()
  const [featured, ...rest] = posts

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-bg-main">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-6xl text-text-primary leading-tight font-light mb-4">
              טיפים לזוגות
            </h1>
            <p className="font-sans text-text-secondary font-light text-base leading-relaxed max-w-md mx-auto">
              כל מה שתרצו לדעת לפני, תוך כדי ואחרי — כדי שהיום יהיה בדיוק כמו שחלמתם עליו.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-24 md:pb-32 bg-bg-main">
        <div className="max-w-6xl mx-auto px-6">

          {/* Featured tip */}
          {featured && (
            <AnimatedSection className="mb-10">
              <PostCard post={featured} featured />
            </AnimatedSection>
          )}

          {/* Rest */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rest.map((post, i) => (
                <AnimatedSection
                  key={post.slug}
                  delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 100 : 200}
                >
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
