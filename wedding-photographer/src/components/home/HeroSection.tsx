import Image from 'next/image'
import WaveDivider from '@/components/ui/WaveDivider'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/hero.jpg"
          alt="רגע חתונה רומנטי"
          fill
          priority
          className="object-cover"
          style={{ filter: 'brightness(1.04) contrast(1.06)' }}
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">

        {/* Overline label */}
        <span
          className="hero-fade block text-xs tracking-[0.35em] uppercase font-sans text-white/65 mb-6"
          style={{ animationDelay: '0.2s' }}
        >
          MOMENT &nbsp;|&nbsp; LOVE &nbsp;|&nbsp; VIBE
        </span>

        {/* Decorative line */}
        <div
          className="hero-fade w-14 h-px bg-white/35 mx-auto mb-8"
          style={{ animationDelay: '0.45s' }}
        />

      </div>

      {/* Scroll indicator */}
      <div
        className="hero-fade absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 z-10"
        style={{ animationDelay: '1.1s' }}
      >
        <span className="text-xs tracking-widest font-sans">גלול</span>
        <div className="w-px h-8 bg-white/30 animate-pulse" />
      </div>

      <WaveDivider fill="#F7F3EE" />
    </section>
  )
}
