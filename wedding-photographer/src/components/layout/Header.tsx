'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Instagram, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/gallery', label: 'גלריה' },
  { href: '/journal', label: 'טיפים לזוגות' },
  { href: '/contact', label: 'צור קשר' },
]

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.054 23.5a.5.5 0 00.623.624l5.697-1.484A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.929 0-3.73-.519-5.273-1.424l-.377-.22-3.925 1.023 1.038-3.836-.232-.386A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
)

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed top-0 inset-x-0 z-30 transition-all duration-300 bg-bg-main/90 backdrop-blur-md border-b border-border-soft',
          scrolled ? 'h-[64px] shadow-sm' : 'h-[72px]'
        )}
      >
        {/*
          RTL flex: items flow right → left.
          First DOM child = physically RIGHT. Last DOM child = physically LEFT.

          Desktop: [Nav] [Logo(mx-auto)] [Actions(ms-auto)]
          Mobile:  [Hamburger] [Logo(flex-1 centered)] [Social icons]
                    ↑ RIGHT                              ↑ LEFT
        */}
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center gap-3 md:gap-8">

          {/* Desktop Nav — right side (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'link-underline font-sans text-xl transition-colors duration-200 tracking-wide',
                  pathname === link.href
                    ? 'text-button-soft'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile: Hamburger — first mobile item → physical RIGHT in RTL */}
          <button
            className="md:hidden shrink-0 p-1 text-text-primary hover:text-button-soft transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="פתח תפריט"
          >
            <Menu size={24} />
          </button>

          {/* Logo — centered on both mobile and desktop */}
          <Link
            href="/"
            className="flex-1 md:flex-none flex items-center justify-center md:mx-auto"
          >
            <Image
              src="/logo.png"
              alt="Orel Dadon Photography"
              width={440}
              height={160}
              className="object-contain w-auto max-h-[100px] md:max-h-[110px]"
              priority
            />
          </Link>

          {/* Mobile: Social icons — last mobile item → physical LEFT in RTL */}
          <div className="md:hidden shrink-0 flex items-center gap-1">
            <a
              href="https://www.instagram.com/orel.dadon.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-text-secondary hover:text-button-soft transition-colors"
              aria-label="אינסטגרם"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/972508151990?text=היי%2C%20אשמח%20לבדוק%20זמינות%20לתאריך"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-text-secondary hover:text-button-soft transition-colors"
              aria-label="וואטסאפ"
            >
              <WhatsAppIcon />
            </a>
          </div>

          {/* Desktop Actions — left side (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-5 ms-auto">
            <a
              href="https://www.instagram.com/orel.dadon.photography?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-button-soft transition-colors"
              aria-label="אינסטגרם"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://wa.me/972508151990?text=היי%2C%20אשמח%20לבדוק%20זמינות%20לתאריך"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-button-soft transition-colors"
              aria-label="וואטסאפ"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://wa.me/972508151990?text=היי%2C%20אשמח%20לבדוק%20זמינות%20לתאריך"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-pulse inline-flex items-center justify-center font-sans font-medium tracking-wider text-xs px-6 py-3 rounded-sm bg-text-primary text-white transition-all duration-300 hover:bg-[#3a3028] hover:scale-[1.04] hover:shadow-[0_4px_18px_rgba(78,67,61,0.45)] active:scale-[0.98]"
            >
              בדיקת זמינות
            </a>
          </div>

        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
