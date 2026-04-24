import type { Metadata } from 'next'
import Image from 'next/image'
import { listImages, CLD_BASE } from '@/lib/cloudinary'

export const metadata: Metadata = {
  title: 'גלריה',
  description: 'גלריית צילומי חתונות — כל תמונה סיפור, כל זוג עולם.',
}

export default async function GalleryPage() {
  const images = await listImages(`${CLD_BASE}/Full Gallery`)

  return (
    <>
      <section className="pt-32 md:pt-44 pb-12 md:pb-20 bg-bg-main">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="gallery-masonry">
            {images.map((src, i) => (
              <div key={src} className="gallery-masonry-item">
                <Image
                  src={src}
                  alt={`תמונת חתונה ${i + 1}`}
                  width={800}
                  height={1200}
                  className="w-full h-auto block"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  loading={i < 12 ? 'eager' : 'lazy'}
                  priority={i < 6}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
