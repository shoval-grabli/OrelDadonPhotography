'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryImage } from '@/types'
import Lightbox from './Lightbox'

const ROTATE_SPEED = 20 // degrees per second (full rotation = 18s)

const RADIUS = {
  mobile: 190,
  tablet: 320,
  desktop: 490,
}

const CARD = {
  mobile:  { w: 150, h: 210 },
  tablet:  { w: 210, h: 290 },
  desktop: { w: 270, h: 370 },
}

function getBreakpoint() {
  if (typeof window === 'undefined') return 'desktop'
  if (window.innerWidth < 640) return 'mobile'
  if (window.innerWidth < 1024) return 'tablet'
  return 'desktop'
}

export default function Carousel3D({ images }: { images: GalleryImage[] }) {
  const N = images.length
  const step = 360 / N

  // ── State ──────────────────────────────────────────────
  const [bp, setBp] = useState<'mobile' | 'tablet' | 'desktop'>('desktop')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [isClient, setIsClient] = useState(false)
  const [displayAngle, setDisplayAngle] = useState(0)

  // ── Refs (avoid re-renders during animation) ───────────
  const angleRef        = useRef(0)
  const rafRef          = useRef<number>()
  const lastTimeRef     = useRef<number>()
  const isHoveredRef    = useRef(false)
  const isDraggingRef   = useRef(false)
  const dragStartXRef   = useRef(0)
  const dragAngleRef    = useRef(0)
  const dragDistRef     = useRef(0)
  const containerRef    = useRef<HTMLDivElement>(null)

  const radius = RADIUS[bp]
  const card   = CARD[bp]

  // ── Init ───────────────────────────────────────────────
  useEffect(() => {
    setIsClient(true)
    setBp(getBreakpoint())
  }, [])

  useEffect(() => {
    const onResize = () => setBp(getBreakpoint())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // ── Animation loop ─────────────────────────────────────
  useEffect(() => {
    const tick = (time: number) => {
      if (
        lastTimeRef.current !== undefined &&
        !isHoveredRef.current &&
        !isDraggingRef.current
      ) {
        angleRef.current += ((time - lastTimeRef.current) / 1000) * ROTATE_SPEED
      }
      lastTimeRef.current = time
      setDisplayAngle(angleRef.current)
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  // ── Touch: passive:false so we can call preventDefault ─
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return
      e.preventDefault()
      const delta = e.touches[0].clientX - dragStartXRef.current
      dragDistRef.current = Math.abs(delta)
      angleRef.current = dragAngleRef.current - delta * 0.28
    }
    el.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => el.removeEventListener('touchmove', onTouchMove)
  }, [])

  // ── Drag helpers ────────────────────────────────────────
  const dragStart = useCallback((clientX: number) => {
    isDraggingRef.current = true
    dragDistRef.current   = 0
    dragStartXRef.current = clientX
    dragAngleRef.current  = angleRef.current
  }, [])

  const dragMove = useCallback((clientX: number) => {
    if (!isDraggingRef.current) return
    const delta = clientX - dragStartXRef.current
    dragDistRef.current = Math.abs(delta)
    angleRef.current = dragAngleRef.current - delta * 0.28
  }, [])

  const dragEnd = useCallback(() => {
    isDraggingRef.current = false
  }, [])

  // ── Navigate to index ───────────────────────────────────
  const rotateTo = useCallback((direction: 1 | -1) => {
    // Snap to nearest item in that direction
    angleRef.current += direction * step
  }, [step])

  // ── Derived dimensions ──────────────────────────────────
  const containerH = card.h + radius * 0.45 + 60

  return (
    <div className="relative w-full" style={{ height: containerH }}>
      {/* Perspective wrapper */}
      <div
        ref={containerRef}
        className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
        style={{ perspective: `${radius * 2.8}px`, perspectiveOrigin: '50% 50%' }}
        onMouseEnter={() => { isHoveredRef.current = true }}
        onMouseLeave={() => { isHoveredRef.current = false; dragEnd() }}
        onMouseDown={e => dragStart(e.clientX)}
        onMouseMove={e => dragMove(e.clientX)}
        onMouseUp={dragEnd}
        onTouchStart={e => dragStart(e.touches[0].clientX)}
        onTouchEnd={dragEnd}
      >
        {/* Scene origin — all cards radiate from this point */}
        <div style={{ position: 'relative', transformStyle: 'preserve-3d', width: 0, height: 0 }}>
          {images.map((image, i) => {
            const itemAngle = i * step + displayAngle
            const rad  = (itemAngle * Math.PI) / 180
            const cosA = Math.cos(rad)          // 1 = front, -1 = back

            // Visual properties based on depth
            const normalised = (cosA + 1) / 2   // 0..1, 1 = front
            const opacity = 0.12 + normalised * 0.88
            const blurPx  = cosA < 0.4 ? Math.round((0.4 - cosA) * 6) : 0
            const zIndex  = Math.round(normalised * 100)
            const isFront = cosA > 0.82

            return (
              <div
                key={image.id}
                style={{
                  position:  'absolute',
                  width:     card.w,
                  height:    card.h,
                  left:      -card.w / 2,
                  top:       -card.h / 2,
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  opacity,
                  filter:    blurPx > 0 ? `blur(${blurPx}px)` : 'none',
                  zIndex,
                  willChange: 'transform, opacity',
                  cursor:     isFront ? 'pointer' : 'default',
                  transition: 'box-shadow 0.4s ease',
                }}
                onClick={() => {
                  if (dragDistRef.current < 6 && isFront) {
                    setLightboxIndex(i)
                  }
                }}
              >
                {/* Card */}
                <div
                  className="relative w-full h-full overflow-hidden"
                  style={{
                    borderRadius: 16,
                    boxShadow: isFront
                      ? '0 32px 80px rgba(78,67,61,0.28), 0 8px 24px rgba(78,67,61,0.14)'
                      : '0 8px 24px rgba(78,67,61,0.10)',
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes={`${card.w}px`}
                    draggable={false}
                    priority={i === 0}
                  />

                  {/* Caption — front card only */}
                  {isFront && (
                    <div
                      className="absolute bottom-0 inset-x-0 p-4"
                      style={{
                        background: 'linear-gradient(to top, rgba(78,67,61,0.65) 0%, transparent 100%)',
                      }}
                    >
                      <p className="text-white font-sans text-xs tracking-wide">
                        {image.coupleNames}
                      </p>
                      <p className="text-white/70 font-sans text-xs">
                        {image.location} · {image.year}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Prev / Next buttons */}
      <button
        className="absolute top-1/2 -translate-y-1/2 start-2 md:start-6 z-50 w-9 h-9 md:w-11 md:h-11 rounded-full bg-bg-main/85 border border-border-soft backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-button-soft hover:border-button-soft hover:scale-105 transition-all duration-200 shadow-sm"
        onClick={() => rotateTo(1)}
        aria-label="הבא"
      >
        <ChevronRight size={18} />
      </button>
      <button
        className="absolute top-1/2 -translate-y-1/2 end-2 md:end-6 z-50 w-9 h-9 md:w-11 md:h-11 rounded-full bg-bg-main/85 border border-border-soft backdrop-blur-sm flex items-center justify-center text-text-secondary hover:text-button-soft hover:border-button-soft hover:scale-105 transition-all duration-200 shadow-sm"
        onClick={() => rotateTo(-1)}
        aria-label="הקודם"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Hover hint */}
      <p className="absolute bottom-2 inset-x-0 text-center text-xs text-text-secondary/50 font-sans pointer-events-none">
        גרור או השתמש בחצים לסיבוב · לחץ על התמונה הקדמית לפתיחה
      </p>

      {/* Lightbox */}
      {lightboxIndex !== null && isClient &&
        createPortal(
          <Lightbox
            images={images}
            currentIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onNavigate={setLightboxIndex}
          />,
          document.body
        )
      }
    </div>
  )
}
