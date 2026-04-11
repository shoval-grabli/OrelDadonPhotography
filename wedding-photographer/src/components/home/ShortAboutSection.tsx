import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Divider from '@/components/ui/Divider'

export default function ShortAboutSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&q=80&fit=crop"
                alt="שירה לוי — צלמת חתונות"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Decorative frame */}
              <div className="absolute -bottom-4 -end-4 w-full h-full border border-border-soft -z-10" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection delay={200} className="flex flex-col gap-6">
            <span className="text-xs tracking-widest uppercase text-text-secondary font-sans">אודותי</span>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-snug font-light">
              היי, אני אוראל
            </h2>
            <Divider className="mx-0 my-1" />
            <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
              מאמינה שהרגעים הכי יפים הם אלו שקורים בין הפריימים. לא הפוזות המוכנות, אלא ההבטה הגנובה, הצחוק הפתאומי, הדמעה שרצה בלחי.
            </p>
            <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
              צלמת חתונות מאז 2018, ביום הגדול שלכם אני שם בשקט — עם עיניים פתוחות ולב רגיש, כדי לתעד את כל מה שאתם מרגישים.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-button-soft hover:text-text-primary transition-colors underline underline-offset-4 decoration-border-soft hover:decoration-button-soft w-fit mt-2"
            >
              קראו עוד עליי
              <span>←</span>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
