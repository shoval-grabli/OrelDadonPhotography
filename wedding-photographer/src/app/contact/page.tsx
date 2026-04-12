import type { Metadata } from 'next'
import { Phone, Mail, Instagram } from 'lucide-react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ContactForm from '@/components/contact/ContactForm'
import WhatsAppButton from '@/components/contact/WhatsAppButton'
import Divider from '@/components/ui/Divider'

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
            <h1 className="font-display text-5xl md:text-6xl text-text-primary leading-tight font-light mb-4">
              בואו נדבר
            </h1>
            <p className="font-sans text-text-secondary font-light text-base leading-relaxed max-w-md mx-auto">
              ממלאים את הטופס ואחזור אליכם תוך 24 שעות. אפשר גם לשלוח הודעה ישירות בוואטסאפ.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-24 bg-bg-main">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {/* Contact info */}
            <AnimatedSection className="md:col-span-1 flex flex-col gap-8">
              <div>
                <h2 className="font-display text-2xl text-text-primary font-light mb-6">פרטי קשר</h2>
                <div className="flex flex-col gap-5">
                  <a
                    href="tel:+972508151990"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors font-sans group"
                  >
                    <Phone size={16} className="text-accent group-hover:text-button-soft transition-colors" />
                    050-815-1990
                  </a>
                  <a
                    href="mailto:oreldadon13@gmail.com"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-text-primary transition-colors font-sans group"
                  >
                    <Mail size={16} className="text-accent group-hover:text-button-soft transition-colors" />
                    oreldadon13@gmail.com
                  </a>
                  <a
                    href="https://www.instagram.com/orel.dadon.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-text-secondary hover:text-button-soft transition-colors font-sans group"
                  >
                    <Instagram size={16} className="text-accent group-hover:text-button-soft transition-colors" />
                    orel.dadon.photography
                  </a>
                </div>
              </div>

              <Divider className="mx-0" />

              <div>
                <h3 className="font-sans font-medium text-text-primary text-sm mb-3">אזורי פעילות</h3>
                <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">
                  תל אביב, ירושלים, הרצליה, רמת גן, נתניה, חיפה, וכל הארץ.
                </p>
              </div>

              <div>
                <h3 className="font-sans font-medium text-text-primary text-sm mb-3">זמן תגובה</h3>
                <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">
                  בדרך כלל אחזור אליכם תוך 24 שעות בימי עבודה.
                </p>
              </div>

              <div className="pt-2">
                <WhatsAppButton />
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection delay={200} className="md:col-span-2">
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
