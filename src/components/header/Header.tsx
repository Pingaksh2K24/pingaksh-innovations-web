'use client'

import './Header.css'
import Image from 'next/image'

export default function Header() {
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

      {/* Navigation */}
      <nav className="nav-menu">
        <a href="#about" className="nav-link">About</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#contact" className="nav-link">Contact</a>
      </nav>
    </header>
  )
} 