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
          sizes="100vw"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10">
        <span className="text-xs tracking-widest font-sans">גלול</span>
        <div className="w-px h-10 bg-white/40 animate-pulse" />
      </div>

      <WaveDivider fill="#F7F3EE" />
    </section>
  )
}
