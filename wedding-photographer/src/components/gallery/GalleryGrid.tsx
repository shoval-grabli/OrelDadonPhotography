'use client'

import { useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import type { GalleryImage } from '@/types'
import GalleryFilter from './GalleryFilter'
import Lightbox from './Lightbox'

interface GalleryGridProps {
  images: GalleryImage[]
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === 'all'
    ? images
    : images.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  return (
    <>
      {/* Filter */}
      <div className="mb-8 md:mb-12">
        <GalleryFilter active={activeCategory} onChange={setActiveCategory} />
      </div>

      {/* Masonry Grid */}
      <div className="gallery-masonry">
        {filtered.map((image, index) => (
          <button
            key={image.id}
            className="gallery-masonry-item relative w-full overflow-hidden group block"
            onClick={() => openLightbox(index)}
            aria-label={`פתח תמונה: ${image.alt}`}
          >
            <div className="relative w-full" style={{ paddingBottom: `${(image.height / image.width) * 100}%` }}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-text-primary/0 group-hover:bg-text-primary/30 transition-all duration-300" />
              <div className="absolute bottom-0 inset-x-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-text-primary/60 to-transparent">
                <p className="text-white text-xs font-sans text-start">{image.coupleNames}</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-20 text-text-secondary font-sans text-sm">
          אין תמונות בקטגוריה זו
        </div>
      )}

      {/* Lightbox Portal */}
      {lightboxIndex !== null && typeof window !== 'undefined' && createPortal(
        <Lightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNavigate={setLightboxIndex}
        />,
        document.body
      )}
    </>
  )
}
