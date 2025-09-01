'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Modal from './modal/Modal'

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cometTrail, setCometTrail] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([])
  const heroRef = useRef<HTMLElement>(null)
  const cometIdRef = useRef(0)

  const handleGetStarted = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Handle mouse movement to create comet trail
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return

    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })

    // Create new comet particle every 50ms for smoother trail
    const now = Date.now()
    if (now - (cometTrail[cometTrail.length - 1]?.timestamp || 0) > 50) {
      const newParticle = {
        id: cometIdRef.current++,
        x,
        y,
        timestamp: now
      }
      setCometTrail(prev => [...prev.slice(-15), newParticle]) // Keep last 15 particles for longer trail
    }
  }

  // Clean up old comet particles
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setCometTrail(prev => prev.filter(particle => now - particle.timestamp < 2000)) // Remove particles older than 2 seconds
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      ref={heroRef}
      className="hero-section" 
      onMouseMove={handleMouseMove}
    >
      {/* Comet trail particles */}
      {cometTrail.map((particle, index) => (
        <div
          key={particle.id}
          className="comet-particle"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: 1 - (index / cometTrail.length), // Fade out older particles
            transform: `scale(${1 - (index / cometTrail.length) * 0.5})` // Scale down older particles
          }}
        />
      ))}

      {/* Left side - Text content */}
      <div className="hero-content">
        
        <h1 className="hero-title">
          Innovation in
          <span className="hero-title-large orange-text">AI & Robotics</span>
        </h1>

        <p className="hero-subtitle">
          At Pingaksh Innovation, we blend intelligence with imagination to build cutting-edge technologies that shape a smarter and interstellar tomorrow.
        </p>

        <div className="hero-buttons">
          <button className="cta-button primary" onClick={handleGetStarted}>
            Get Started
            <span className="btn-arrow">→</span>
          </button>
          <button className="cta-button secondary">
            <span className="play-icon">▶</span>
            Watch Demo
          </button>
        </div>
      </div>

      {/* Right side - Hero Image and Rocket Animation */}
      <div className="hero-image-container">
        <Image 
          src="/images/hero2.png" 
          alt="AI & Robotics Innovation" 
          width={500} 
          height={500} 
          className="hero-image"
          priority
        />
        
        {/* Rocket Launch Animation */}
        <div className="rocket-container">
          <svg className="rocket" viewBox="0 0 100 200" width="40" height="80">
            {/* Rocket Body - Silver metallic with gradient */}
            <defs>
              <linearGradient id="rocketBody" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#E5E7EB", stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: "#D1D5DB", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#9CA3AF", stopOpacity: 1}} />
              </linearGradient>
              <linearGradient id="noseCone" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "#F9FAFB", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#E5E7EB", stopOpacity: 1}} />
              </linearGradient>
            </defs>
            
            {/* Main Rocket Body */}
            <rect x="35" y="80" width="30" height="80" fill="url(#rocketBody)" stroke="#6B7280" strokeWidth="1" rx="3" />
            
            {/* Nose Cone - Pointed and streamlined */}
            <path 
              d="M50 80 L40 60 L60 60 Z" 
              fill="url(#noseCone)" 
              stroke="#6B7280" 
              strokeWidth="1"
            />
            
            {/* Horizontal Panel Lines */}
            <line x1="35" y1="95" x2="65" y2="95" stroke="#9CA3AF" strokeWidth="0.5" />
            <line x1="35" y1="110" x2="65" y2="110" stroke="#9CA3AF" strokeWidth="0.5" />
            <line x1="35" y1="125" x2="65" y2="125" stroke="#9CA3AF" strokeWidth="0.5" />
            <line x1="35" y1="140" x2="65" y2="140" stroke="#9CA3AF" strokeWidth="0.5" />
            
            {/* Single Circular Window */}
            <circle cx="50" cy="105" r="4" fill="#1E293B" stroke="#6B7280" strokeWidth="0.5" />
            <circle cx="50" cy="105" r="2" fill="#60A5FA" />
            
            {/* Three Triangular Fins */}
            <path d="M35 160 L25 180 L35 180 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
            <path d="M50 160 L45 180 L55 180 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
            <path d="M65 160 L75 180 L65 180 Z" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
            
            {/* Engine Nozzle */}
            <rect x="40" y="160" width="20" height="8" fill="#6B7280" stroke="#4B5563" strokeWidth="0.5" rx="2" />
            
            {/* Powerful Engine Flame */}
            <defs>
              <radialGradient id="flameCore" cx="50%" cy="50%" r="50%">
                <stop offset="0%" style={{stopColor: "#FEF3C7", stopOpacity: 1}} />
                <stop offset="30%" style={{stopColor: "#F97316", stopOpacity: 1}} />
                <stop offset="70%" style={{stopColor: "#EA580C", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "#DC2626", stopOpacity: 0.8}} />
              </radialGradient>
            </defs>
            
            {/* Main Flame */}
            <path 
              d="M40 168 L35 200 L50 220 L65 200 L60 168 Z" 
              fill="url(#flameCore)" 
              className="main-flame"
            />
            
            {/* Flame Core */}
            <path 
              d="M45 168 L42 190 L50 200 L58 190 L55 168 Z" 
              fill="#FEF3C7" 
              className="flame-core"
            />
            
            {/* Smoke Trail */}
            <circle cx="40" cy="210" r="3" fill="#6B7280" opacity="0.4" className="smoke-1" />
            <circle cx="50" cy="215" r="2" fill="#6B7280" opacity="0.3" className="smoke-2" />
            <circle cx="60" cy="210" r="3" fill="#6B7280" opacity="0.4" className="smoke-3" />
          </svg>
        </div>
        

        

      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title="Service Coming Soon!"
        message="We're excited to announce that our comprehensive AI & Robotics services will be launching soon. Our team is working hard to bring you cutting-edge solutions."
        icon="🚀"
        details={[
          "Advanced AI-powered robotics solutions for industrial automation",
          "Custom machine learning models for predictive analytics",
          "IoT integration services for smart city infrastructure",
          "Space research and satellite technology development",
          "24/7 technical support and consultation services",
          "Training programs for AI and robotics implementation"
        ]}
      />
    </section>
  )
} 