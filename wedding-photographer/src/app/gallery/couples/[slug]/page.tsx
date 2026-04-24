import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getCouples, getCoupleImages } from '@/lib/couples'

export async function generateStaticParams() {
  const couples = await getCouples()
  return couples.map(c => ({ slug: c.slug }))
}

export default async function CouplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const folderName = decodeURIComponent(slug)

  const couples = await getCouples()
  const couple = couples.find(c => c.folderName === folderName)
  if (!couple) notFound()

  const images = await getCoupleImages(couple.folderName)

  return (
    <>
      <section className="pt-32 pb-12 md:pt-44 md:pb-16 bg-bg-section">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-text-secondary hover:text-button-soft transition-colors font-sans tracking-wider mb-8"
          >
            <span>→</span>
            חזרה לעמוד הראשי
          </Link>
          <h1 className="font-display text-5xl md:text-6xl text-text-primary font-light leading-tight">
            {couple.names}
          </h1>
          <p className="font-sans text-text-secondary font-light text-sm mt-3 tracking-wide">
            {couple.year}{couple.venue ? ` · ${couple.venue}` : ''}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-bg-main">
        <div className="max-w-6xl mx-auto px-6">
          <div className="gallery-masonry">
            {images.map((src, i) => (
              <div key={i} className="gallery-masonry-item">
                <Image
                  src={src}
                  alt={`${couple.names} - תמונה ${i + 1}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
