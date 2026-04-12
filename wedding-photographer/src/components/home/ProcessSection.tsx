import AnimatedSection from '@/components/ui/AnimatedSection'
import WaveDivider from '@/components/ui/WaveDivider'
import { processSteps } from '@/data/process'

export default function ProcessSection() {
  return (
    <section className="relative pt-24 pb-32 md:pt-32 md:pb-44 bg-bg-main">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-light">
            איך עובד התהליך
          </h2>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {/* Single connector line behind all circles */}
          <div className="hidden md:block absolute top-5 inset-x-0 h-px bg-border-soft" />

          {processSteps.map((step, i) => (
            <AnimatedSection
              key={step.number}
              delay={(i * 100) as 0 | 100 | 200 | 300}
            >
              <div className="relative flex flex-col items-center text-center md:items-start md:text-start gap-4">
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
      <WaveDivider fill="#EDE3D7" />
    </section>
  )
}
