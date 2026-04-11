import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { testimonials } from '@/data/testimonials'

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <SectionTitle
            label="ביקורות"
            title="מה אומרים הזוגות"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.id} delay={i % 3 === 0 ? 0 : i % 3 === 1 ? 100 : 200}>
              <div className="bg-bg-section border border-border-soft p-8 flex flex-col gap-6 h-full">
                {/* Quote mark */}
                <span className="font-display text-5xl text-accent leading-none select-none">&ldquo;</span>

                {/* Quote */}
                <p className="font-sans text-text-primary font-light leading-relaxed text-sm flex-1">
                  {t.quote}
                </p>

                {/* Attribution */}
                <div className="border-t border-border-soft pt-5">
                  <p className="font-sans font-medium text-text-primary text-sm">{t.names}</p>
                  <p className="font-sans text-text-secondary text-xs mt-0.5">
                    {t.year}{t.location ? ` · ${t.location}` : ''}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
