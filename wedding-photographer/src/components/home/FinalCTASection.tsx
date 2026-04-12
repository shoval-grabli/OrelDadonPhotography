import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import WaveDivider from '@/components/ui/WaveDivider'

export default function FinalCTASection() {
  return (
    <section className="relative pt-20 pb-16 md:pt-40 md:pb-28 lg:pt-52 lg:pb-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cta/cta.jpg"
          alt="זוג בשקיעה"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-text-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-text-primary/20 to-text-primary/60" />
      </div>

      <WaveDivider fill="#EDE3D7" top />

      {/* Content */}
      <AnimatedSection className="relative z-10 max-w-2xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl text-white leading-snug font-light mb-2">
          מוכנים להתחיל?
        </h2>
        <Divider className="bg-white/30 mx-auto my-6" />
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg" className="bg-white/90 text-text-primary border-white/90 hover:bg-white hover:border-white">
            לבדיקת זמינות
          </Button>
          <a
            href="https://wa.me/972508151990?text=היי אוראל, אשמח לבדוק זמינות לחתונה שלנו"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-sans font-medium text-sm px-8 py-4 border border-white/40 text-white hover:border-white hover:bg-white/10 transition-all duration-300 tracking-wider"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.054 23.5a.5.5 0 00.623.624l5.697-1.484A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.929 0-3.73-.519-5.273-1.424l-.377-.22-3.925 1.023 1.038-3.836-.232-.386A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            שלחו הודעה בוואטסאפ
          </a>
        </div>
      </AnimatedSection>
    </section>
  )
}
