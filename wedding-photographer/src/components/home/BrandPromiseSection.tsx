import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Divider from '@/components/ui/Divider'

const values = [
  {
    title: 'צילום טבעי ולא מאולץ',
    description: 'לא מכוונת לפוזות. מחכה לרגעים האמיתיים — אלה שקורים מעצמם.',
  },
  {
    title: 'רגישות לרגעים האמיתיים',
    description: 'הדמעה שרצה, ההבטה הגנובה, הצחוק הפתאומי — אלה הדברים שאני מחפש.',
  },
  {
    title: 'נוכחות שקטה ביום החתונה',
    description: 'אני שם, אבל לא מורגש. ככה האורחים מתנהגים טבעי, והרגעים קורים.',
  },
  {
    title: 'ליווי אישי לאורך הדרך',
    description: 'מהשיחה הראשונה ועד מסירת הגלריה — אתם לא לבד. אני פה.',
  },
  {
    title: 'עריכה עקבית ואלגנטית',
    description: 'סגנון עריכה חם, רך ועקבי שמשלים את הרגעים ולא מכסה אותם.',
  },
]

export default function BrandPromiseSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left — Title */}
          <AnimatedSection className="md:sticky md:top-32">
            <span className="text-xs tracking-widest uppercase text-text-secondary font-sans">הבטחת המותג</span>
            <h2 className="font-display text-4xl md:text-5xl text-text-primary leading-snug font-light mt-4 mb-6">
              לא רק תמונות.
              <br />
              זיכרונות שחיים.
            </h2>
            <Divider className="mx-0" />
            <p className="font-sans text-text-secondary font-light leading-relaxed text-base mt-6">
              אני לא מגיע לחתונות עם רשימת שוטים. אני מגיע עם עיניים פתוחות, לב רגיש, וידע עמוק שכל רגע שחולף — לא חוזר.
            </p>
          </AnimatedSection>

          {/* Right — Values */}
          <div className="flex flex-col gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={i} delay={(i * 100) as 0 | 100 | 200 | 300 | 400}>
                <div className="flex gap-5 items-start group">
                  <div className="mt-1 w-8 h-8 rounded-full bg-bg-section border border-border-soft flex items-center justify-center shrink-0 text-xs text-text-secondary font-sans group-hover:border-button-soft transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div>
                    <h3 className="font-sans font-medium text-text-primary text-base mb-2">{value.title}</h3>
                    <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
