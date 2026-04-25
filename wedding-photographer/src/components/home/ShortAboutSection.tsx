import Image from 'next/image'
import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Divider from '@/components/ui/Divider'
import WaveDivider from '@/components/ui/WaveDivider'
import { cldVideo } from '@/lib/cloudinary'

const stats = [
  { number: '150+', label: 'חתונות מצולמות' },
  { number: '7', label: 'שנות ניסיון' },
  { number: '98%', label: 'זוגות שחוזרים להמליץ' },
  { number: '6–8', label: 'שבועות עד מסירה' },
]

export default function ShortAboutSection() {
  const videoUrl = cldVideo('video_zp58mj.mp4')
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-44 bg-bg-main">
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-20 md:gap-28">

        {/* שורה 1: תמונה (ימין) | כותרת + טקסט (שמאל) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ימין — תמונה של אוראל */}
          <AnimatedSection>
            <div className="relative aspect-[3/4] max-w-[280px] sm:max-w-sm mx-auto md:mx-0">
              <Image
                src="/images/about/portrait.jpg"
                alt="אוראל דדון — צלם חתונות"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, 50vw"
              />
              <div className="absolute -bottom-4 -end-4 w-full h-full border border-border-soft -z-10" />
            </div>
          </AnimatedSection>

          {/* שמאל — כותרת + טקסט */}
          <AnimatedSection delay={200} className="flex flex-col gap-6">
            <h2
              className="text-5xl md:text-6xl text-text-primary leading-snug"
              style={{ fontFamily: "'Gveret Levin AlefAlefAlef', serif" }}
            >
              היי, אני אוראל
            </h2>

            <Divider className="mx-0 my-1" />

            <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
              מצלם חתונות כבר בערך עשור, מתמקד בסטילס. אני מלווה זוגות לאורך היום שלהם בגישה רגועה, בלי להעמיס ובלי יותר מדי בימוי — פשוט להיות שם, לתפוס את הרגעים כמו שהם קורים.
            </p>
            <p className="font-sans text-text-secondary font-light leading-relaxed text-base">
              יצא לי לצלם כמעט בכל הארץ, בהרבה לוקיישנים שונים ומיוחדים, וכל חתונה מרגישה אחרת. חשוב לי שהזוג ירגיש בנוח ושיהיה להם כיף, ומשם כבר יוצאות התמונות הכי טובות.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm text-button-soft hover:text-text-primary transition-colors underline underline-offset-4 decoration-border-soft hover:decoration-button-soft w-fit"
            >
              קראו עוד עליי
              <span>←</span>
            </Link>
          </AnimatedSection>

        </div>

        {/* שורה 2: סטטיסטיקות (ימין) | סרטון (שמאל) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* ימין — סטטיסטיקות */}
          <AnimatedSection className="grid grid-cols-2 gap-6 md:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl md:text-3xl text-text-primary">{stat.number}</p>
                <p className="font-sans text-text-secondary text-xs font-light mt-1">{stat.label}</p>
              </div>
            ))}
          </AnimatedSection>

          {/* שמאל — סרטון */}
          <AnimatedSection delay={200} className="relative w-full max-w-[260px] sm:max-w-xs mx-auto md:mx-0">
            <video
              src={videoUrl}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover relative z-10"
            />
            <div className="absolute -bottom-4 -end-4 w-full h-full border border-border-soft -z-10" />
          </AnimatedSection>

        </div>

      </div>
      <WaveDivider fill="#EDE3D7" />
    </section>
  )
}
