import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Divider from '@/components/ui/Divider'
import WaveDivider from '@/components/ui/WaveDivider'

export default function ShortAboutSection() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-44 bg-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <AnimatedSection className="relative">
            <div className="relative aspect-[3/4] max-w-sm mx-auto md:mx-0">
              <Image
                src="/images/about/portrait.jpg"
                alt="אוראל דדון — צלם חתונות"
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
            <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-snug font-light">
              אני אוראל,
            </h2>
            <Divider className="mx-0 my-1" />
            <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
              צלם חתונות המתמקד בצילום סטילס ומביא איתי תשוקה אמיתית לעולם הזה. את העסק הקמתי בעצמי, ולאורך השנים צברתי ניסיון של למעלה מעשור בתחום האירועים, עם ליווי זוגות בכל רחבי הארץ וסגנונות מגוונים של אנשים וסיפורים.
            </p>
            <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
              יום החתונה שלכם הוא רגע שכולו שלכם. המטרה שלי היא לאפשר לכם להיות נוכחים באמת, ליהנות אחד מהשנייה ולהרגיש בנוח בתוך כל ההתרגשות. יחד ניצור חוויה שתשקף אתכם בצורה הכי מדויקת, ונבנה יום שזורם בטבעיות ומתאים בדיוק לאווירה שאתם חולמים עליה.
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
      <WaveDivider fill="#EDE3D7" />
    </section>
  )
}
