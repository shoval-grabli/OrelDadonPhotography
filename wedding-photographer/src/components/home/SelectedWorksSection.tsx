import Link from 'next/link'
import AnimatedSection from '@/components/ui/AnimatedSection'
import SectionTitle from '@/components/ui/SectionTitle'
import Carousel3D from '@/components/gallery/Carousel3D'
import { selectedWorks } from '@/data/gallery'

export default function SelectedWorksSection() {
  return (
    <section className="py-24 md:py-32 bg-bg-section">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="mb-16 text-center">
          <SectionTitle
            label="פורטפוליו"
            title="עבודות נבחרות"
            subtitle="כל תמונה היא סיפור. כל זוג — עולם שלם."
          />
        </AnimatedSection>

        {/* 3D Carousel */}
        <div className="overflow-visible">
          <Carousel3D images={selectedWorks} />
        </div>

        <AnimatedSection className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-3 font-sans text-sm text-text-primary hover:text-button-soft transition-colors tracking-wider border-b border-border-soft pb-1 hover:border-button-soft"
          >
            לגלריה המלאה
            <span>←</span>
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
