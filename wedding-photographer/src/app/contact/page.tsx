import type { Metadata } from 'next'
import { Phone, Mail, Instagram } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import WhatsAppButton from '@/components/contact/WhatsAppButton'

export const metadata: Metadata = {
  title: 'צור קשר',
  description: 'צרו קשר עם אוראל דדון — בדיקת זמינות לחתונה שלכם.',
}

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 md:pt-44 md:pb-20 bg-bg-section">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-6xl text-text-primary leading-tight font-light mb-4">
              בואו נדבר
            </h1>
            <p className="font-sans text-text-secondary font-light text-base leading-relaxed max-w-md mx-auto mb-8">
              שלחו הודעה ישירות בוואטסאפ ואחזור אליכם בהקדם.
            </p>
            <div className="flex justify-center">
              <WhatsAppButton />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* פרטי קשר */}
            <div>
              <h2 className="font-display text-2xl text-text-primary font-light mb-6">פרטי קשר</h2>
              <div className="flex flex-col gap-5">
                <a
                  href="tel:+972508151990"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors font-sans group min-h-[44px]"
                >
                  <Phone size={16} className="text-accent group-hover:text-button-soft transition-colors shrink-0" />
                  050-815-1990
                </a>
                <a
                  href="mailto:oreldadon13@gmail.com"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors font-sans group min-h-[44px]"
                >
                  <Mail size={16} className="text-accent group-hover:text-button-soft transition-colors shrink-0" />
                  oreldadon13@gmail.com
                </a>
                <a
                  href="https://www.instagram.com/orel.dadon.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-text-secondary hover:text-button-soft transition-colors font-sans group min-h-[44px]"
                >
                  <Instagram size={16} className="text-accent group-hover:text-button-soft transition-colors shrink-0" />
                  orel.dadon.photography
                </a>
              </div>
            </div>

            {/* אזור פעילות */}
            <div>
              <h3 className="font-display text-2xl text-text-primary font-light mb-6">אזור פעילות</h3>
              <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">
                מהצפון ועד המרכז
              </p>
            </div>

            {/* זמן תגובה */}
            <div>
              <h3 className="font-display text-2xl text-text-primary font-light mb-6">זמן תגובה</h3>
              <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">
                בדרך כלל אחזור אליכם תוך 24 שעות בימי עבודה.
              </p>
            </div>

          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
