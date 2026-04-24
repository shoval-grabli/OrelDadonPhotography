import type { Metadata } from 'next'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Divider from '@/components/ui/Divider'

export const metadata: Metadata = {
  title: 'אודות',
  description: 'הסיפור שמאחורי העדשה — אוראל דדון, צלם חתונות פרימיום בתל אביב.',
}

const philosophy = [
  {
    title: 'צילום דוקומנטרי עם עין אמנותית',
    body: 'לא אנחה אתכם לפוזות. אתמקם בפינה הנכונה, אחכה לרגע, ואלחץ על הכפתור כשהוא מגיע מאליו.',
  },
  {
    title: 'הנוכחות השקטה',
    body: 'ביום החתונה שלכם אני כמעט בלתי נראה. כך האורחים מתנהגים טבעי, והרגעים קורים בלי מאמץ.',
  },
  {
    title: 'עריכה שמחזקת, לא מכסה',
    body: 'הסגנון שלי חם, עדין ועקבי — עריכה שמחזקת את הרגע ולא מבלעת אותו.',
  },
]

export default function AboutPage() {
  return (
    <>


      {/* Story */}
      <section className="py-24 md:py-32 bg-bg-main">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            {/* Images */}
            <AnimatedSection className="flex flex-col gap-4">
              <div className="relative aspect-[3/4]">
                <Image
                  src="/images/about/portrait.jpg"
                  alt="אוראל דדון"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </AnimatedSection>

            {/* Story text */}
            <AnimatedSection delay={200} className="flex flex-col gap-8 md:pt-8">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-text-primary font-light leading-snug mb-6">
                  גדלתי עם מצלמה ביד
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
                    לא כי לימדו אותי, אלא כי תמיד הרגשתי שיש משהו חשוב שאסור לפספס. הרגעים שחולפים בשקט — בין הדברים הגדולים — הם אלה שתמיד הכי משכו אותי.
                  </p>
                  <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
                    החתונה הראשונה שצילמתי שינתה אותי. הבנתי שזה לא עניין של אור או קומפוזיציה — זה עניין של לחיות את הרגע עם האנשים שבפניים.
                  </p>
                  <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
                    מאז 2018 אני מצלם חתונות בתל אביב והסביבה. כל חתונה מלמדת אותי משהו חדש, וכל זוג מזכיר לי מחדש למה אני עושה את זה.
                  </p>
                </div>
              </div>

              <Divider className="mx-0" />

              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '150+', label: 'חתונות מצולמות' },
                  { number: '7', label: 'שנות ניסיון' },
                  { number: '98%', label: 'זוגות שחוזרים להמליץ' },
                  { number: '6-8', label: 'שבועות עד מסירה' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-display text-2xl md:text-3xl text-text-primary">{stat.number}</p>
                    <p className="font-sans text-text-secondary text-xs font-light mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-bg-section">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="mb-16 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-text-primary font-light">
              הגישה שלי
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {philosophy.map((item, i) => (
              <AnimatedSection key={i} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 100 : 200}>
                <div className="bg-bg-main border border-border-soft p-8 flex flex-col gap-4">
                  <div className="w-8 h-px bg-accent" />
                  <h3 className="font-sans font-medium text-text-primary text-base">{item.title}</h3>
                  <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
