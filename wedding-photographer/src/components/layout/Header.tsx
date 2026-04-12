'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Instagram, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'
import MobileMenu from './MobileMenu'
import Button from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'ראשי' },
  { href: '/about', label: 'אודות' },
  { href: '/gallery', label: 'גלריה' },
  { href: '/journal', label: 'בלוג' },
  { href: '/contact', label: 'צור קשר' },
]

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
          scrolled ? 'py-3 shadow-sm' : 'py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">

          {/* Desktop Nav — ימין */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'link-underline font-sans text-sm transition-colors duration-200 tracking-wide',
                  pathname === link.href
                    ? 'text-button-soft'
                    : 'text-text-secondary hover:text-text-primary'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Logo — מרכז */}
          <Link
            href="/"
            className="font-display text-xl tracking-wide shrink-0 text-text-primary absolute left-1/2 -translate-x-1/2"
          >
            OREL DADON PHOTOGRAPHY
          </Link>

          {/* Actions — שמאל */}
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
            <Button href="/contact" variant="secondary" size="sm">
              בדיקת זמינות
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-text-primary hover:text-button-soft transition-colors ms-auto"
            onClick={() => setMobileOpen(true)}
            aria-label="פתח תפריט"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
