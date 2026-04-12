import type { Metadata } from 'next'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Button from '@/components/ui/Button'
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
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 bg-bg-section overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection className="max-w-2xl">
            <span className="text-xs tracking-widest uppercase text-text-secondary font-sans">אודותי</span>
            <h1 className="font-display text-5xl md:text-6xl text-text-primary leading-tight font-light mt-4">
              הסיפור שמאחורי
              <br />
              העדשה
            </h1>
          </AnimatedSection>
        </div>
      </section>

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
              <div className="relative aspect-[4/3] ms-12">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop"
                  alt="אוראל דדון בעבודה"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
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
                    <p className="font-display text-3xl text-text-primary">{stat.number}</p>
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
          <AnimatedSection className="mb-16">
            <SectionTitle
              label="גישה"
              title="הפילוסופיה שלי"
              subtitle="מאמין בצילום דוקומנטרי — עם עין אמנותית. הרגעים הכי יפים הם אלו שקורים בין הפריימים."
            />
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

      {/* Approach */}
      <section className="py-24 md:py-32 bg-bg-main">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <SectionTitle
              label="יום החתונה"
              title="הגישה שלי ליום הגדול"
            />
            <div className="mt-10 flex flex-col gap-6 text-start max-w-2xl mx-auto">
              {[
                'מגיע שעה לפני הטקס — לתפוס את האווירה, את האנשים, את הפרטים.',
                'לא מנחה, לא מכוון. פשוט שם עם עיניים פתוחות.',
                'מצלם את הכלה ואת החתן בנפרד ובמשותף — בקצב שמרגיש טבעי.',
                'נוכח לכל הרגע, גם בין הטקס למסיבה.',
                'יודע להיות בלתי נראה ובמקום הנכון בו-זמנית.',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="text-accent text-sm mt-0.5 shrink-0">✦</span>
                  <p className="font-sans text-text-secondary font-light leading-relaxed text-base">{item}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-bg-section border-t border-border-soft">
        <AnimatedSection className="text-center px-6">
          <h2 className="font-display text-3xl text-text-primary font-light mb-4">
            בואו נדבר
          </h2>
          <p className="font-sans text-text-secondary font-light text-base mb-8 max-w-md mx-auto">
            שלחו לי הודעה ונבדוק יחד אם התאריך שלכם פנוי.
          </p>
          <Button href="/contact" size="lg">
            לבדיקת זמינות
          </Button>
        </AnimatedSection>
      </section>
    </>
  )
}
