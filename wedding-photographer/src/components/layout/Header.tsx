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
          'fixed top-0 inset-x-0 z-30 transition-all duration-300',
          scrolled
            ? 'bg-bg-main/95 backdrop-blur-md shadow-sm py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              'font-display text-xl tracking-wide shrink-0 transition-colors duration-300',
              scrolled ? 'text-text-primary' : 'text-white'
            )}
          >
            אוראל דדון
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-sans text-sm transition-colors duration-200 tracking-wide',
                  scrolled
                    ? pathname === link.href
                      ? 'text-button-soft'
                      : 'text-text-secondary hover:text-text-primary'
                    : pathname === link.href
                      ? 'text-white'
                      : 'text-white/70 hover:text-white'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="https://www.instagram.com/shira.levy.photography"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'transition-colors hover:text-button-soft',
                scrolled ? 'text-text-secondary' : 'text-white/70 hover:text-white'
              )}
              aria-label="אינסטגרם"
            >
              <Instagram size={18} />
            </a>
            <Button
              href="/contact"
              variant="secondary"
              size="sm"
              className={!scrolled ? 'border-white/60 text-white hover:border-white hover:text-white' : ''}
            >
              בדיקת זמינות
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            className={cn(
              'md:hidden transition-colors hover:text-button-soft',
              scrolled ? 'text-text-primary' : 'text-white'
            )}
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
