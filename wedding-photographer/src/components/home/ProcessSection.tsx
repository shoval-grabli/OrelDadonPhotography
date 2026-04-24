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

        {/* Desktop: horizontal timeline — single row with connecting line */}
        <div className="hidden lg:block relative">
          {/* Line passes through the vertical center of the circles (top-5 = 20px = half of w-10/h-10) */}
          <div className="absolute inset-x-0 top-5 h-px bg-border-soft" />

          <div className="flex">
            {processSteps.map((step, i) => (
              <AnimatedSection
                key={step.number}
                delay={(Math.min(i * 100, 500)) as 0 | 100 | 200 | 300 | 400 | 500}
                className="flex-1"
              >
                <div className="flex flex-col items-center text-center gap-4 px-2">
                  {/* Circle sits on the line */}
                  <div className="relative z-10 w-10 h-10 rounded-full bg-bg-main border border-border-soft flex items-center justify-center text-xs text-text-secondary font-sans shrink-0">
                    {String(step.number).padStart(2, '0')}
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-sans font-medium text-text-primary text-sm">
                      {step.title}
                    </h3>
                    <p className="font-sans text-text-secondary font-light text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden flex flex-col">
          {processSteps.map((step, i) => (
            <div key={step.number} className="flex gap-5 items-stretch">

              {/* Circle + vertical connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-10 h-10 rounded-full bg-bg-main border border-border-soft flex items-center justify-center text-xs text-text-secondary font-sans shrink-0">
                  {String(step.number).padStart(2, '0')}
                </div>
                {i < processSteps.length - 1 && (
                  <div className="flex-1 w-px bg-border-soft mt-3" />
                )}
              </div>

              {/* Text */}
              <div className="pb-10 pt-2 flex-1">
                <h3 className="font-sans font-medium text-text-primary text-base mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-text-secondary font-light text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
      <WaveDivider fill="#EDE3D7" />
    </section>
  )
}
