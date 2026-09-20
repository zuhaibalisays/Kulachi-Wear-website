'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="font-serif text-2xl md:text-3xl text-kulachi-charcoal tracking-wide">
              KULACHI WEAR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/collections" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
              Collections
            </Link>
            <Link href="/shop" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
              Shop
            </Link>
            <Link href="/sale" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
              Sale
            </Link>
            <Link href="/about" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-kulachi-charcoal"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-3">
              <Link href="/collections" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
                Collections
              </Link>
              <Link href="/shop" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
                Shop
              </Link>
              <Link href="/sale" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
                Sale
              </Link>
              <Link href="/about" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
                About
              </Link>
              <Link href="/contact" className="font-sans text-sm uppercase tracking-wider text-kulachi-charcoal hover:text-kulachi-rose transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
