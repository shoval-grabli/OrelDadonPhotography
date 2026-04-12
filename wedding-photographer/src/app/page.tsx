import HeroSection from '@/components/home/HeroSection'
import ShortAboutSection from '@/components/home/ShortAboutSection'
import SelectedWorksSection from '@/components/home/SelectedWorksSection'
import ProcessSection from '@/components/home/ProcessSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import FinalCTASection from '@/components/home/FinalCTASection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ShortAboutSection />
      <SelectedWorksSection />
      <ProcessSection />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  )
}
