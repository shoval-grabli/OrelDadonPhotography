import type { Metadata } from 'next'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Carousel3D from '@/components/gallery/Carousel3D'
import { galleryImages } from '@/data/gallery'

export const metadata: Metadata = {
  title: 'גלריה',
  description: 'גלריית צילומי חתונות — כל תמונה סיפור, כל זוג עולם.',
}

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 md:pt-44 md:pb-16 bg-bg-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <span className="text-xs tracking-widest uppercase text-text-secondary font-sans">פורטפוליו</span>
            <h1 className="font-display text-5xl md:text-6xl text-text-primary leading-tight font-light mt-4 mb-4">
              הגלריה
            </h1>
            <p className="font-sans text-text-secondary font-light text-base leading-relaxed max-w-md mx-auto">
              כל תמונה — סיפור. כל זוג — עולם.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* 3D Carousel */}
      <section className="py-10 md:py-16 bg-bg-main overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <Carousel3D images={galleryImages} />
        </div>
      </section>
    </>
  )
}
