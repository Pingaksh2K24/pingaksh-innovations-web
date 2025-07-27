'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function LegalNav() {
  return (
    <nav className="legal-nav">
      <div className="legal-nav-container">
        <Link href="/" className="legal-nav-logo">
          <Image
            src="/images/logo.png"
            alt="Pingaksh Innovations Logo"
            width={32}
            height={32}
            className="legal-nav-logo-img"
          />
          <span className="legal-nav-logo-text">Pingaksh Innovations</span>
        </Link>
        
        <Link href="/" className="legal-nav-back">
          ← Back to Home
        </Link>
      </div>
    </nav>
  )
} 