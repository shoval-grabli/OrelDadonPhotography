import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import { processSteps } from '@/data/process'

export default function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-section">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <SectionTitle
            label="התהליך"
            title="איך עובד התהליך"
            subtitle="פשוט, ברור, ונעים — מהשיחה הראשונה ועד הגלריה המוכנה."
          />
        </AnimatedSection>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {processSteps.map((step, i) => (
            <AnimatedSection
              key={step.number}
              delay={i % 4 === 0 ? 0 : i % 4 === 1 ? 100 : i % 4 === 2 ? 200 : 300}
            >
              <div className="relative flex flex-col items-center text-center md:items-start md:text-start gap-4">
                {/* Connector line (desktop only) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-5 start-full w-full h-px bg-border-soft -translate-y-px" />
                )}

                {/* Number */}
                <div className="relative z-10 w-10 h-10 rounded-full bg-bg-main border border-border-soft flex items-center justify-center text-xs text-text-secondary font-sans shrink-0">
                  {String(step.number).padStart(2, '0')}
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-sans font-medium text-text-primary text-base mb-2">{step.title}</h3>
                  <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
