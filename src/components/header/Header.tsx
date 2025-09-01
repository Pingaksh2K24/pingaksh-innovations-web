'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import './Header.css'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <Image 
          src="/images/logo.png" 
          alt="Pingaksh Innovations Logo" 
          width={40} 
          height={40} 
          className="logo-image"
        />
        <div className="logo-text">
          <span className="logo-main">PINGAKSH</span>
          <span className="logo-sub">INNOVATIONS</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <Link href="/" className="nav-link">Home</Link>
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="/contact" className="nav-link">Contact</a>
      </nav>

      {/* Menu Toggle Button */}
      <button 
        className={`menu-toggle ${isMenuOpen ? 'hidden' : ''}`}
        onClick={toggleMenu}
        aria-label="Open navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Mobile Navigation */}
      <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav-open' : ''}`}>
        {/* Close button inside mobile menu */}
        <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="mobile-nav-content">
          <Link href="/" className="mobile-nav-link" onClick={closeMenu}>
            <span className="nav-icon">🏠</span>
            Home
          </Link>
          <a href="#about" className="mobile-nav-link" onClick={closeMenu}>
            <span className="nav-icon">ℹ️</span>
            About
          </a>
          <a href="#services" className="mobile-nav-link" onClick={closeMenu}>
            <span className="nav-icon">⚙️</span>
            Services
          </a>
          <a href="/contact" className="mobile-nav-link" onClick={closeMenu}>
            <span className="nav-icon">📞</span>
            Contact
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  )
} 