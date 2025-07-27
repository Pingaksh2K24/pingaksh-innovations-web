'use client'

import { useState } from 'react'
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

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Navigation */}
      <nav className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
        <a href="/" className="nav-link" onClick={closeMenu}>Home</a>
        <a href="#about" className="nav-link" onClick={closeMenu}>About</a>
        <a href="#services" className="nav-link" onClick={closeMenu}>Services</a>
        <a href="/contact" className="nav-link" onClick={closeMenu}>Contact</a>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMenu}></div>
      )}
    </header>
  )
} 