import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80&fit=crop"
          alt="רגע חתונה רומנטי"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-text-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-text-primary/60 via-text-primary/10 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-white/70 mb-6 font-sans">
          צלמת חתונות פרימיום | תל אביב והסביבה
        </p>
        <h1 className="font-display text-5xl md:text-7xl text-white leading-tight mb-6 font-light">
          רגעים שנשארים לנצח
        </h1>
        <p className="font-sans text-white/80 font-light text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          כל חתונה היא סיפור אחר. אני כאן כדי לצלם את שלכם — בעדינות, באותנטיות, ובאהבה.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/contact" size="lg" className="bg-white/90 text-text-primary border-white/90 hover:bg-white hover:border-white">
            לבדיקת זמינות
          </Button>
          <Button href="/gallery" variant="secondary" size="lg" className="border-white/60 text-white hover:border-white hover:text-white">
            לגלריה
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest font-sans">גלול</span>
        <div className="w-px h-10 bg-white/30 animate-pulse" />
      </div>
    </section>
  )
}
