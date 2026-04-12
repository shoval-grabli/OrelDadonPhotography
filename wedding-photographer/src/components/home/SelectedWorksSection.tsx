import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Carousel3D from '@/components/gallery/Carousel3D'
import WaveDivider from '@/components/ui/WaveDivider'
import { selectedWorks } from '@/data/gallery'

export default function SelectedWorksSection() {
  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-bg-section">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-10 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-text-primary font-light">
            כל תמונה היא סיפור
          </h2>
        </AnimatedSection>

        {/* 3D Carousel */}
        <div className="overflow-visible">
          <Carousel3D images={selectedWorks} />
        </div>

        <AnimatedSection className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 font-sans text-sm text-text-primary hover:text-button-soft transition-all duration-300 tracking-wider border-b border-border-soft pb-1 hover:border-button-soft hover:-translate-y-px"
          >
            לגלריה המלאה
            <span>←</span>
          </Link>
        </AnimatedSection>
      </div>
      <WaveDivider fill="#F7F3EE" />
    </section>
  )
}
